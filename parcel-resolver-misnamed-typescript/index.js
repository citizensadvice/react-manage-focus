const { Resolver } = require('@parcel/plugin');
const path = require('node:path');
const { access, constants } = require('node:fs/promises');

async function exists(file) {
  try {
    await access(file, constants.F_OK);
  } catch (e) {
    return false;
  }
  return true;
}

module.exports = new Resolver({
  async resolve({ dependency, specifier }) {
    if (path.extname(specifier) !== '.js') {
      return null;
    }
    const fullSpecifier = path.resolve(path.dirname(dependency.resolveFrom), specifier);
    if (await exists(fullSpecifier)) {
      return null;
    }
    const tsSpecifier = fullSpecifier.replace(/\.js$/, '.ts');
    if (await exists(tsSpecifier)) {
      return {
        filePath: tsSpecifier,
      };
    }
    const tsxSpecifier = fullSpecifier.replace(/\.js$/, '.tsx');
    if (await exists(tsxSpecifier)) {
      return {
        filePath: tsxSpecifier,
      };
    }
    return null;
  },
});
