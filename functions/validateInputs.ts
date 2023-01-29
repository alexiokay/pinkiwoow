import type { ShippingT } from "@/types/Shipping";

export const ValidateShippingInputs = (inputs: ShippingT) => {
  if (
    inputs.name_surname === "" ||
    inputs.address === "" ||
    inputs.zip_code === "" ||
    inputs.city === "" ||
    inputs.phone === "" ||
    inputs.email === ""
  ) {
    console.log("not validated");
    return false;
  }
  return true;
};
