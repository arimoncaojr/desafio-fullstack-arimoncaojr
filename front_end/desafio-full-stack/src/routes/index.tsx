import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";

export const RoutesMain = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};
