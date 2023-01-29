import type { ShippingT } from "@/types/Shipping";
import { useUserStore } from "@/stores/User";

export const useSaveShipping = async (inputs: ShippingT) => {
  const config = useRuntimeConfig();
  const userStore = useUserStore();
  if (!userStore.isLogged) {
    throw new Error("User is not logged empty");
  }
  await fetch(`${config.API_URL}api/v1/shippings/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token " + userStore.getToken,
    },
    body: JSON.stringify({
      name_surname: inputs.name_surname,
      address: inputs.address,
      zip_code: inputs.zip_code,
      country: inputs.country,
      city: inputs.city,
      phone: inputs.phone,
      email: inputs.email,
    }),
  })
    .then((res) => {
      if (res.status === 400) {
        throw new Error("Some fields are empty");
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      userStore.addShipping(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
