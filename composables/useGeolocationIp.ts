export const useGeolocationIp = async () => {
  const config = useRuntimeConfig();
  const options = {
    method: "GET",
    headers: {
      Host: `${config.HOST}`,
      Authorization: `${config.API_TOKEN}`,
    },
  };
  //

  const data = await useFetch(
    `${config.API_URL}api/v1/get_geolocation_ip`,
    options
  ).then((res) => {
    const data: any = res.data.value;
    const error = res.error.value;
    if (error) {
      // dealing error
      console.log(error);
    } else {
      return data;
    }
  });
  console.log("data: ");
  console.log(data);
  return data;
};
