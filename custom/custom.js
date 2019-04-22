const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const ask = require('./ask');
const pkg = require('../package.json');

const stylelintName = 'stylelint';
const prettierConfigName = 'stylelint-config-prettier';
const stylelintAccess = 'stylelint-a11y';
const compatPgName = 'stylelint-no-unsupported-browser-features';

const {
  name: pkgName,
  version,
  devDependencies: {
    [stylelintName]: stylelint,
    [prettierConfigName]: prettierConfig,
    [stylelintAccess]: stylelintAccessPg,
    [compatPgName]: compatPg,
  },
} = pkg;

class Custom {
  /* eslint-disable max-lines-per-function */
  constructor() {
    this.features = {
      errors: {
        file: `${pkgName}/rules/errors`,
      },
      style: {
        file: `${pkgName}/rules/style`,
      },
      limitFeature: {
        file: `${pkgName}/rules/limitFeature`,
      },
      compatibility: {
        file: `${pkgName}/rules/compatibility`,
        install: [`${compatPgName}@${compatPg}`],
      },
      accessbility: {
        file: `${pkgName}/rules/accessbility`,
        install: [`${stylelintAccess}@${stylelintAccessPg}`],
      },
      prettier: {
        file: 'prettier',
        install: [`${prettierConfigName}@${prettierConfig}`],
      },
    };
    this.init();
  }

  static isUse(name) {
    return ask({ type: 'confirm', message: `使用${name}` });
  }

  init() {
    this.toInstall = [`${stylelintName}@${stylelint}`, `${pkgName}@${version}`];
    this.toExtend = [];
    this.parser = null;
    this.env = {};
    ['errors', 'style', 'limitFeature'].forEach(each => this.addFeature(each));
  }

  addFeature(pro) {
    if (this.features[pro]) {
      const { file, install, parser } = this.features[pro];
      if (parser) {
        this.parser = parser;
      }
      if (file) {
        this.toExtend.push();
      }
      if (install) {
        this.toInstall = this.toInstall.concat(install);
      }
    } else {
      throw new Error(`没找到特征${pro}`);
    }
  }

  static uniq(list) {
    const map = {};
    return list.filter(each => {
      if (map[each] === undefined) {
        map[each] = true;
        return true;
      }
      return false;
    });
  }

  static checkList(list) {
    if (Array.isArray(list)) {
      return list.map(each => {
        if (typeof each !== 'string' || !each.trim()) {
          throw new Error('extends配置错误');
        }
        return each.trim();
      });
    }
    return [];
  }

  getExtend() {
    return Custom.uniq(Custom.checkList(this.toExtend));
  }

  getInstall() {
    return Custom.uniq(Custom.checkList(this.toInstall));
  }

  async create() {
    await this.handleFeature();
    const install = this.getInstall();
    const defaultSeverity = await ask({
      type: 'list',
      choices: ['error', 'warn'],
      message: '选择默认错误级别',
    });
    console.log(
      chalk.green('按照如下安装依赖\n'),
      chalk.green.bold(`npm install --save-dev ${install.join(' ')}`),
    );
    const config = {
      extends: Custom.uniq(this.getExtend()),
      defaultSeverity,
    };

    fs.writeFileSync(
      path.join(process.cwd(), '.stylelintrc.js'),
      `module.exports = ${JSON.stringify(config, null, 2)}`,
    );
  }

  async handleFeature() {
    if (await Custom.isUse('浏览器兼容性检查')) {
      this.addFeature('compatibility');
    }
    if (await Custom.isUse('css可访问性检查')) {
      this.addFeature('accessbility');
    }
    if (await Custom.isUse('prettier格式化')) {
      this.addFeature('prettier');
    }
  }
}
module.exports = Custom;
