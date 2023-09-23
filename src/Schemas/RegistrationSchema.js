import * as yup from "yup";
const phoneNumberRules =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const RegistrationSchemas = yup.object().shape({
  email: yup
    .string()
    .email({ message: "Please enter valid email" })
    .required({ message: "Required" }),
  phone_number: yup
    .string()
    .matches(phoneNumberRules, "Phone number is not valid"),
  team_name: yup
    .string()
    .min(1, { message: "Input full team name" })
    .required({ message: "Required" }),
  group_size: yup.number().typeError('Please select a number').required("Required"),
  project_topic: yup
    .string()
    .min(6, { message: "Input full project topic" })
    .required({ message: "Required" }),
  category: yup.number().typeError('Please select a category').required("Required"),
  privacy_poclicy_accepted: yup
    .boolean()
    .oneOf([true], "You must accept the terms and conditions"),
});
