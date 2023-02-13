import { Route, Routes } from "react-router-dom";
import Home from "./component/page/Home";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};
