import React, { useEffect, useState } from "react";
import CardSharing from "../../components/AllSharing/CardSharing";
import SharingServices from "../../services/sharing.services";
import { log, error } from "../../helpers/loggers";

const AllSharing = () => {
  const [sharings, setSharings] = useState([]);

  useEffect(() => {
    const service = new SharingServices();

    service
      .getAllSharing()
      .then((result) => setSharings(result.data.response))
      .catch((err) => error(err));
  }, []);

  return (
    <div className="flex flex-col items-center">
      {sharings.map((sharing) => {
        return <CardSharing key={sharing.id_sharing} {...sharing} />;
      })}
    </div>
  );
};

export default AllSharing;
