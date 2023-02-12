import type { ShippingT } from "@/types/Shipping";
import type { CompanyDataT } from "@/types/Shipping";
import { useUserStore } from "@/stores/User";
import { useCartStore } from "@/stores/Cart";

export const useSaveOrder = async (
  shipping: ShippingT | number,
  comment: string,
  companyData: CompanyDataT | null,
  currency: string,
  amount: number
) => {
  const config = useRuntimeConfig();
  const userStore = useUserStore();
  const cartStore = useCartStore();

  console.log("amount: ");
  console.log(amount * 100);

  const createInvoice = async () => {};

  const createPaymentIntent = async () => {
    //TODO: optimize for guests
    const response = await fetch(
      `${config.API_URL}api/v1/create_payment_intent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${userStore.getToken}`,
        },
        body: JSON.stringify({
          prices: ["price_1MTI98Hvwk09wRD67SFwmntG"],
          currency: currency.toLowerCase(),
          amount: amount * 100,
        }),
      }
    );
    const data = await response.json();
    return data.client_secret;
  };

  const client_secret = await createPaymentIntent();
  let mode_path = ""; // if user is not logged then use guest_orders endpoint
  if (userStore.isLogged) mode_path = "orders";
  else mode_path = "guest_orders";
  console.log(client_secret);
  await fetch(`${config.API_URL}api/v1/${mode_path}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: userStore.getToken,
    },
    body: JSON.stringify({
      shipping: shipping,
      additional_info: comment,
      company_data: companyData,
      client_secret: client_secret,
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
      Object.assign(shipping, { id: data.order.shipping.id });
      if (companyData)
        Object.assign(companyData, { id: data.order.company_data.id });

      cartStore.setTempOrder(shipping, comment, companyData, client_secret);
      console.log("temp order: ");
      console.log(cartStore.getTempOrder);
    })
    .catch((err) => {
      console.log(err);
    });
};
