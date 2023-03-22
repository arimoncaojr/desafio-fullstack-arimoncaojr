import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/Login";

export const RoutesMain = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </>
  );
};
