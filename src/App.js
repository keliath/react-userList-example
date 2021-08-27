import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [userList, setUserList] = useState([]);
  // console.log(userList);

  const saveUserListHandler = (user) => {
    // console.log(user);
    setUserList((prevList) => {
      return [user, ...prevList];
    });
  };

  return (
    <>
      {/* <React.Fragment> */}
      <AddUser onSaveUser={saveUserListHandler} />
      <UsersList users={userList} />
      {/* </React.Fragment> */}
    </>
  );
}

export default App;
