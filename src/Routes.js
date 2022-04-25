import React from "react";
import { BrowserRouter, Route, Routes as RoutesWrapper } from "react-router-dom";
import Main from "./pages/Main";
import Repositorio from "./pages/Repositorio";

export default function Routes() {
  return (
    <BrowserRouter>
      <RoutesWrapper>
        <Route path="/" element={<Main />} />
        <Route path="/repositorio/:repositorio" element={<Repositorio />} />
      </RoutesWrapper>
    </BrowserRouter>
  );
}
