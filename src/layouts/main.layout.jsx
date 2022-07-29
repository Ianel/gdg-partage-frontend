import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";

const MainLayout = ({ children }) => {
  return (
    <div>
      <header className="flex justify-between py-4 px-8 shadow-md">
        <h1>GDG Mahajanga</h1>
        <h1>Calendrier des partages</h1>
        <h1>&nbsp;</h1>
      </header>
      <div className="flex flex-row justify-evenly items-start">
        <div className="w-1/3 flex flex-col h-screen bottom-0 left-0">
          <Link
            className="bg-blue-500 text-white text-lg m-8 mb-4 text-center py-2"
            to={ROUTES.ALL_SHARING}
          >
            Voir tous les partages
          </Link>
          <Link
            className="bg-blue-500 text-white text-lg m-8 mt-0 text-center py-2"
            to={ROUTES.ADD_SHARING}
          >
            Ajouter un partage
          </Link>
        </div>
        <div className="w-2/3 bg-slate-50 m-8">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
