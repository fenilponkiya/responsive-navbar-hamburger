import React from "react";
import { Header } from "./header";

export const Container = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
