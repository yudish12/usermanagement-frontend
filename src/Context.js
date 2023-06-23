import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const GlobalContext = createContext();

const initialState = {
  id: "",
  isEditing: false,
  name: "",
  email: "",
  phoneNo: "",
  userdp: null,
};

const AppContext = ({ children }) => {
  const [allUsers, setAllUsers] = useState([]);
  const [user, setUser] = useState(initialState);

  const setValues = (user) => setUser(user);

  const addUser = () => {
    if (user.isEditing) {
      let ind = 0;
      let newArr = allUsers.filter((e, i) => {
        if (e.id === user.id) ind = i;
        return e.id !== user.id;
      });
      newArr.splice(ind, 0, user);
      setAllUsers(newArr);
      setUser(initialState);
      toast.success("User Edited Successfully");
    } else {
      const id = uuidv4();
      // console.log({ ...user, id });
      // setUser({ ...user, id });
      setAllUsers([{ ...user, id }, ...allUsers]);
      setUser(initialState);
      toast.success("User Added Successfully");
    }
  };

  const deleteUser = (id) => {
    let newArr = allUsers.filter((e) => e.id !== id);
    setAllUsers(newArr);
    toast.success("User Deleted Successfully");
  };

  const editUser = (user) => {
    setUser({ ...user, isEditing: true });
  };

  return (
    <GlobalContext.Provider
      value={{ allUsers, user, setValues, addUser, deleteUser, editUser }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

export default AppContext;
