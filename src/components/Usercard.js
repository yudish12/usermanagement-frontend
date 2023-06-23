import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useGlobalContext } from "../Context";
import { useNavigate } from "react-router-dom";

const Usercard = ({ name, userdp, email, phoneNo, id }) => {
  const { deleteUser, editUser } = useGlobalContext();
  const navigate = useNavigate();

  const editHandler = () => {
    editUser({ name, email, phoneNo, id, userdp });
    navigate("/add-user");
  };
  return (
    <div className="card">
      <img
        height={"140px"}
        width={"140px"}
        src={userdp ? URL.createObjectURL(userdp) : ""}
        alt="dp"
        className="dp"
      />
      <h4>{name}</h4>
      <h3>Contact</h3>
      <div className="contact-info">
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
          }}
        >
          <MdEmail />
          <span>{email}</span>
        </p>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
          }}
        >
          <FaPhoneAlt />
          <span>{phoneNo}</span>
        </p>
      </div>
      <div className="btn-container">
        <button onClick={editHandler} className="btn-hipster">
          Edit
        </button>
        <button onClick={() => deleteUser(id)} className="delete-btn">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Usercard;
