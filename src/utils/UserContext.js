import { createContext } from "react";

const UserContext = createContext({
  isLoggedIn: true,
});

export { UserContext };
