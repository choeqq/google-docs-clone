import React, { createContext, useContext, useState } from "react";
import { auth } from "../firebase";

interface Ctx {
  currentUser: {};
}

interface Props {
  children: React.ReactNode;
}

const defaultState = {};

const AuthContext = React.createContext<Ctx>(defaultState);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props: Props) {
  const [currentUser, setCurrentUser] = useState(null);

  const value = {
    currentUser,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}
