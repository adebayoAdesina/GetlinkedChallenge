import * as yup from "yup";
const phoneNumberRules =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const ContactSchemas = yup.object().shape({
  email: yup
    .string()
    .email({ message: "Please enter valid email" })
    .required({ message: "Required" }),
  first_name: yup
    .string()
    .min(3, { message: "Enter a valid name" })
    .required({ message: "Required" }),
  message: yup
    .string()
    .min(10, { message: "Give a detailed message" })
    .required({ message: "Required" }),
  phoneNumber: yup
    .string()
    .matches(phoneNumberRules, "Phone number is not valid"),
});
