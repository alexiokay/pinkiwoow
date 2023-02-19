import type { ShippingT } from "@/types/Shipping";
import type { CompanyDataT } from "@/types/Shipping";
import { useUserStore } from "@/stores/User";
import { useCartStore } from "@/stores/Cart";
import { am } from "~~/dist/_nuxt/entry.69b75ede";

export const useSaveOrder = async (
  shipping: ShippingT | number,
  comment: string,
  companyData: CompanyDataT | null,
  currency: string,
  amount: number = 0,
  products: Array<Object>
) => {
  const config = useRuntimeConfig();
  const userStore = useUserStore();
  const cartStore = useCartStore();

  console.log("amount: ");
  console.log(amount * 100);
  console.log("prices: ");
  console.log(products);

  const createInvoice = async () => {
    //TODO: optimize for guests
    const response = await fetch(`${config.API_URL}api/v1/create_invoice/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${userStore.getToken}`,
      },
      body: JSON.stringify({
        products: products,
        currency: currency.toLowerCase(),
        amount: amount * 100,
      }),
    });
    const data = await response.json();
    const to_return = {
      client_secret: data.client_secret,
      invoice_id: data.invoice_id,
    };
    return to_return;
  };

  const invoice = await createInvoice();
  let mode_path = ""; // if user is not logged then use guest_orders endpoint
  if (userStore.isLogged) mode_path = "orders";
  else mode_path = "guest_orders";
  console.log(invoice.client_secret);
  await fetch(`${config.API_URL}api/v1/${mode_path}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${userStore.getToken}`,
    },
    body: JSON.stringify({
      shipping: shipping,
      additional_info: comment,
      company_data: companyData,
      client_secret: invoice.client_secret,
      invoice_id: invoice.invoice_id,
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

      cartStore.setTempOrder(
        invoice.invoice_id,
        shipping,
        comment,
        companyData,
        invoice.client_secret
      );
      console.log("temp order: ");
      console.log(cartStore.getTempOrder);
    })
    .catch((err) => {
      console.log(err);
    });
};
