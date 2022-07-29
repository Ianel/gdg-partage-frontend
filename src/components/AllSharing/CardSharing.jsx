import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const CardSharing = ({ label, author, date, time, place, details }) => {
  const [tag, setTag] = useState("");

  const formattedDate = new Date(date).toLocaleDateString();

  useEffect(() => {
    const tagDateOfSharing = new Date(date);
    const tagDateOfDay = new Date(Date.now());

    if (tagDateOfSharing.valueOf() === tagDateOfDay.valueOf()) {
      setTag("En cours");
    } else if (tagDateOfSharing.valueOf() < tagDateOfDay.valueOf()) {
      setTag("Terminé");
    } else if (tagDateOfSharing.valueOf() > tagDateOfDay.valueOf()) {
      setTag("Prévu");
    }
  }, [date]);

  return (
    <div className="w-3/4 leading-8 m-2 p-5 shadow-md">
      <h2 className="text-3xl">{label}</h2>
      <h3 className="text-xl">
        <span className="text-zinc-500 italic font-bold">by </span>
        <span className="font-bold ">{author}</span>
      </h3>
      <div className="flex flex-row justify-between items-center">
        <p>
          <span className="font-semibold text-xl">Date:</span>{" "}
          <span className="text-xl text-blue-500 font-bold">
            {" "}
            {formattedDate}
          </span>
        </p>
        <p>
          <span className="font-semibold text-xl">Heure:</span>
          <span className="text-xl  font-bold"> {time}</span>
        </p>
      </div>
      <div className="flex flex-row justify-between items-center">
        <p>
          <span className="font-semibold text-xl">Lieu:</span>{" "}
          <span className="text-xl font-bold">{place}</span>
        </p>
        <p
          className={`rounded-md px-2 ${
            tag === "En cours"
              ? "bg-green-500"
              : tag === "Prévu"
              ? "bg-blue-500"
              : "bg-red-500"
          } text-white`}
        >
          {tag}
        </p>
      </div>
      <div className="text-lg">{details}</div>
    </div>
  );
};

export default CardSharing;

CardSharing.propTypes = {
  label: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,
  place: PropTypes.string,
  details: PropTypes.string,
};

CardSharing.defaultProps = {
  label: "Prévu",
  author: "",
  date: new Date(Date.now()).toLocaleDateString(),
  time: new Date(Date.now()).toLocaleTimeString(),
  place: "IFT",
  details: "Ordinateur requis",
};
