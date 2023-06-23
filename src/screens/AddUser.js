import React, { useRef } from "react";
import Forminput from "../components/Forminput";
import defaultImage from "../Assets/images.png";
import { useNavigate } from "react-router-dom";

import { useGlobalContext } from "../Context";
import { toast } from "react-toastify";
import userFormImage from "../Assets/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png";
import { ValidateEmail, ValidatePhoneNo } from "../utils";

const AddUser = () => {
  const navigate = useNavigate();

  const { user, setValues, addUser } = useGlobalContext();

  const fileInput = useRef(null);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...user, [name]: value });
  };

  const handleFileUpload = () => {
    fileInput.current.click();
  };

  const handleImageChange = (e) => {
    setValues({ ...user, userdp: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      user.name === "" ||
      !ValidateEmail(user.email) ||
      !ValidatePhoneNo(String(user.phoneNo))
    ) {
      toast.error("Please Fill Out All Fields Correctly");
      return;
    }
    addUser();
    navigate("/");
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-header">
          <img
            style={{ width: "70px", height: "70px" }}
            src={userFormImage}
            alt="user-img"
          />
        </div>
        <Forminput
          name={"name"}
          type={"text"}
          value={user.name}
          labelText={"Name"}
          handleChange={handleChange}
        />
        <Forminput
          name={"email"}
          type={"email"}
          value={user.email}
          labelText={"Email"}
          handleChange={handleChange}
        />
        <Forminput
          name={"phoneNo"}
          type={"number"}
          value={user.phoneNo}
          labelText={"Phone Number"}
          handleChange={handleChange}
        />

        {/* image input  */}
        <div className="image-input">
          <div onClick={handleFileUpload}>
            {user.userdp ? (
              <img
                className="img"
                src={URL.createObjectURL(user.userdp)}
                alt="user dp"
              />
            ) : (
              <img className="img" src={defaultImage} alt="default dp" />
            )}

            <input
              ref={fileInput}
              onChange={handleImageChange}
              name="userdp"
              // accept="image/png, image/gif, image/jpeg"
              style={{ display: "none" }}
              type="file"
              id="user-img"
            />
          </div>
          <label htmlFor="user-img" className="image-label">
            <span className="btn-hipster">
              {user.userdp ? user.userdp.name : "Upload Image"}
            </span>
          </label>
        </div>
        <input className="btn" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddUser;
