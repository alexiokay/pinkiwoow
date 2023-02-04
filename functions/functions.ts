type Res = {
  value: {
    country: string;
    currency: string;
  };
  error: {
    value: string;
  };
};

export const setLangByGeolocation = (
  store: any,
  response: Res,
  localeSetting: any
) => {
  if (store.value.isLocaleSet) return;
  else {
    for (const locale in availableLocales) {
      if (locale === response.value.country.toLowerCase()) {
        localeSetting.value = locale;
        store.value.setLocaleSet();
      } else {
        localeSetting.value = "en";
      }
    }
  }
};
