export const checkValidation = (email, password, user) => {
  const isEmailValid = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (user === "") return "Name can't be empty";
  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid) return "Passoword is not valid";

  return null;
};
