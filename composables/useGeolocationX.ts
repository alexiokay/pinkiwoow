import { useMainStore } from "@/stores/Main";

export const useGeolocationX = async () => {
  const store = useMainStore();
  const config = useRuntimeConfig();

  const options = {
    method: "GET",
    headers: {
      Host: "localhost",
      Authorization: `${config.API_TOKEN}`,
    },
  };

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

  console.log("geolocation: ");
  console.log(response);
  store.setCurrentCurrency(response.currency);
  console.log(store.getCurrency);

  return response;
};
