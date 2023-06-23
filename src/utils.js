import validator from "validator";

export const ValidateEmail = (email) => {
  if (validator.isEmail(email)) {
    return true;
  } else {
    return false;
  }
};

export const ValidatePhoneNo = (number) => {
  console.log(number);
  if (validator.isMobilePhone(String(number)) && number.length === 10)
    return true;
  else return false;
};
