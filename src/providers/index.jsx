"use client";
import AuthProvider from "./AuthProvider";
import ThemeProvider from "./ThemeProvider";

const Provider = ({ children }) => {
  return (
    <AuthProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </AuthProvider>
  );
};

export default Provider;
