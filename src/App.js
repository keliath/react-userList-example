import { useState } from "react";
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
    <div className="">
      <AddUser onSaveUser={saveUserListHandler} />
      <UsersList users={userList} />
    </div>
  );
}

export default App;
