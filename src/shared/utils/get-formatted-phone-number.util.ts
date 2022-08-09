export const getFormattedPhoneNumber = (unformattedPhoneNumber: string) => {
  const phoneNumberToArray = unformattedPhoneNumber
    .split("")
    .filter(item => item !== " ");

  phoneNumberToArray.splice(3, 0, " ");
  phoneNumberToArray.splice(7, 0, "-");
  phoneNumberToArray.splice(11, 0, "-");

  return phoneNumberToArray.reduce((acc, curr) => {
    acc += curr;

    return acc;
  }, "");
};
