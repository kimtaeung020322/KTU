import { BrowserRouter as Routers, Route, Routes } from "react-router-dom";
import Home from "./contents/page/Home";

export const Router = () => {
  return (
    <Routers>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Routers>
  );
};
