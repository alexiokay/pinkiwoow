import { useMainStore } from "@/stores/Main";
export const getProducts = async () => {
  const store = useMainStore();
  const config = useRuntimeConfig();

  const options = {
    method: "GET",
    headers: {
      Host: "localhost",
      Authorization: `${config.API_TOKEN}`,
    },
  };

  const products = await useFetch(
    `${config.API_URL}api/v2/pages/?type=shop.ProductPage&fields=*`,
    options
  ).then((res) => {
    const data: any = res.data.value;
    const error = res.error.value;
    if (error) {
      // dealing error
      console.log(error);
    } else {
      return data.items;
    }
  });

  return products;
};
