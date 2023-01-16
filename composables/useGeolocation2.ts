import { useMainStore } from "@/stores/Main";

export const useGeolocation2 = async (ip: string) => {
  const store = useMainStore();
  const config = useRuntimeConfig();

  const options = {
    method: "POST",
    headers: {
      Host: `${config.HOST}`,
      Authorization: `${config.API_TOKEN}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ip: ip,
    }),
  };

  console.log(options);

  const response = await useFetch(
    `${config.API_URL}api/v1/get_geolocation`,
    options
  ).then((res) => {
    const data: any = res.data.value;
    const error = res.error.value;
    if (error) {
      console.log(error);
    } else {
      return data;
    }
  });
  try {
    console.log("geolocation: ");
    console.log(response);
    store.setCurrentCurrency(response.currency);
    console.log(store.getCurrency);
  } catch (error) {
    console.log(error);
  }

  return response;
};
