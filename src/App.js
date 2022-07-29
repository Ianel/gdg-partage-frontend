import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/main.layout";
import * as ROUTES from "./constants/routes";
import AllSharing from "./pages/AllSharing";
import AddSharing from "./pages/AddSharing";
import Error404 from "./pages/Errors/Error404";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path={ROUTES.ALL_SHARING} element={<AllSharing />} />
          <Route path={ROUTES.ADD_SHARING} element={<AddSharing />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
