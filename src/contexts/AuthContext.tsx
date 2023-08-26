import React, { createContext } from "react";
import { LOGIN_MUTATION } from "../graphql";
import { useMutation } from "@apollo/client";

interface AuthContextProps {
  children: React.ReactNode;
}

export interface LoginHandlerProps {
  email: string;
  password: string;
}

const AuthContext = createContext(
  {} as ({ email, password }: LoginHandlerProps) => Promise<void>
);

export default function AuthProvider({ children }: AuthContextProps) {
  const [doLogin, { error }] = useMutation(LOGIN_MUTATION);

  async function loginHandler({
    email,
    password,
  }: LoginHandlerProps): Promise<void> {
    if (error) {
      console.log(error);
    }
    try {
      const { data } = await doLogin({ variables: { email, password } });
      const jwt = data.login.jwt;
      console.log(jwt);
      localStorage.setItem("token", jwt);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  }

  return (
    <AuthContext.Provider value={loginHandler}>{children}</AuthContext.Provider>
  );
}
