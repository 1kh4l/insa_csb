import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);
Vue.config.productionTip = false;

// As Flowtype definition, Locale Messages syntax like BNF annotation
type LocaleMessages = { [key: string]: LocaleMessageObject };
type LocaleMessageObject = { [key: string]: LocaleMessage };
type LocaleMessageArray = LocaleMessage[];
type LocaleMessage = string | LocaleMessageObject | LocaleMessageArray;

const loadLocaleMessages = (): LocaleMessages => {
  const locales = require.context("./../locales", true, /[A-Za-z0-9-_,\s]+\.json$/i);
  const messages: LocaleMessages = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
};

const localeMessages = loadLocaleMessages();

export default new VueI18n({
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "co",
  locale: process.env.VUE_APP_I18N_LOCALE || "co",
  messages: localeMessages,
});
