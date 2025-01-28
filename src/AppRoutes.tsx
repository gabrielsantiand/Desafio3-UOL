import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from "./pages/Authentication";

const AppRoutes: React.FC = () => (
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Authentication />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

export default AppRoutes;
