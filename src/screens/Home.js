import React from "react";
import { useGlobalContext } from "../Context";
import Usercard from "../components/Usercard";

const Home = () => {
  const { allUsers } = useGlobalContext();

  return (
    <div className="card-container">
      {allUsers.map((e) => (
        <Usercard {...e} />
      ))}
    </div>
  );
};

export default Home;
