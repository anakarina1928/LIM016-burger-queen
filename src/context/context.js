import { createContext } from "react";

export const AuthSession = createContext({
  user: {},
  setUser: (useAuth) => {}
});

