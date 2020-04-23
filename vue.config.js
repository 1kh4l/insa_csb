// vue.config.js

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: '@import "~@/sass/main.scss"',
      },
    },
  },
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === 'test') {
      const sassRule = config.module.rule('sass')
      sassRule.uses.clear()
      sassRule.use('null-loader').loader('null-loader')
      const scssRule = config.module.rule('scss')
      scssRule.uses.clear()
      scssRule.use('null-loader').loader('null-loader')
    }
    // Allow to mix SASS and SCSS
    ["vue-modules", "vue", "normal-modules", "normal"].forEach((match) => {
      config.module
        .rule("scss")
        .oneOf(match)
        .use("sass-loader")
        .tap((opt) => Object.assign(opt, { data: "@import '~@/sass/main.scss';" }));
    });
  },
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "~@/locales",
      enableInSFC: true,
    },
  },
};
