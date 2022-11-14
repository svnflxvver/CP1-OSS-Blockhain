const path = require('path');

const whitelister = require('purgecss-whitelister');
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    './src/**/*.js',
  ],
  whitelist: whitelister([]),

  // Include any special characters you're using in this regular expression
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

const postcssPluginsDev = [require('autoprefixer')];
const postcssPluginsProd = [
  require('autoprefixer'),
  purgecss,
  require('cssnano'),
];

const cssDev = {
  loader: 'css-loader',
  options: {
    modules: false,
    sourceMap: true,
    url: { filter: (url) => url.charAt(0) === '.' },
  },
};

const cssProd = {
  loader: 'css-loader',
  options: {
    modules: false,
    sourceMap: false,
    url: { filter: (url) => url.charAt(0) === '.' },
  },
};

const cssModuleDev = {
  loader: 'css-loader',
  options: {
    modules: {
      getLocalIdent: ({ resourcePath }, localIdentName, localName) => {
        const [file, component, type] = resourcePath.split(path.sep).reverse();

        return `${type.slice(0, 2)}-${component}__${localName}`;
      },
    },
    sourceMap: true,
    url: { filter: (url) => url.charAt(0) === '.' },
  },
};

const cssModuleProd = {
  loader: 'css-loader',
  options: {
    modules: true,
    sourceMap: false,
    url: { filter: (url) => url.charAt(0) === '.' },
  },
};

const postCssDev = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: postcssPluginsDev,
    },
    sourceMap: true,
  },
};

const postCssProd = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: postcssPluginsProd,
    },
    sourceMap: false,
  },
};

const postCssModuleDev = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: postcssPluginsDev,
    },
    sourceMap: true,
  },
};

const postCssModuleProd = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: postcssPluginsProd,
    },
    sourceMap: false,
  },
};

module.exports = {
  cssDev,
  cssProd,
  cssModuleDev,
  cssModuleProd,
  postCssDev,
  postCssProd,
  postCssModuleDev,
  postCssModuleProd,
};
