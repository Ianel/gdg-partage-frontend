import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { error, log } from "../../helpers/loggers";
import SharingServices from "../../services/sharing.services";
import * as ROUTES from "../../constants/routes";

const AddSharing = () => {
  const [label, setLabel] = useState("");
  const [date, setDate] = useState("");
  const [place, setPlace] = useState("IFT");
  const [time, setTime] = useState("09:30");
  const [author, setAuthor] = useState("");
  const [details, setDetails] = useState("Ordinateur requis");

  const sharing = {
    label,
    date,
    place,
    time,
    author,
    details,
  };

  const service = new SharingServices();

  let navigate = useNavigate();

  const handleSubmit = async () => {
    await service
      .addSharing(sharing)
      .then((response) => log(response))
      .catch((err) => error(err));
    navigate(ROUTES.ALL_SHARING);
  };

  return (
    <div className="shadow-xl p-8 w-2/3 mx-auto">
      <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
        <label className="text-lg font-bold">Label: </label>
        <input
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          className="px-2 py-3 my-4 outline-1 focus:outline-blue-500"
          type="text"
          placeholder="Label du partage"
        />
        <label className="text-lg font-bold">Date: </label>
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="px-2 py-3 my-3 outline-1 outline-zinc-500 focus:outline-blue-500"
          type="date"
        />
        <label className="text-lg font-bold">Lieu </label>
        <input
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          className="px-2 py-3 my-3 outline-1 outline-zinc-500 focus:outline-blue-500"
          type="text"
          placeholder="Lieu du partage"
        />
        <label className="text-lg font-bold">Heure: </label>
        <input
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="px-2 py-3 my-3 outline-1 outline-zinc-500 focus:outline-blue-500"
          type="time"
        />
        <label className="text-lg font-bold">Auteur: </label>
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="px-2 py-3 my-3 outline-1 outline-zinc-500 focus:outline-blue-500"
          type="text"
          placeholder="Auteur du partage"
        />
        <label className="text-lg font-bold">Détails: </label>
        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className="my-4 h-32 px-4 py-2 outline-zinc-500 outline-1 focus:outline-blue-500"
          placeholder="Matériels nécessaires, Concepts à aborder,..."
        ></textarea>
        <button
          className="bg-blue-500 px-4 py-2 text-white cursor-pointer"
          onClick={handleSubmit}
        >
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default AddSharing;
