import { useEffect, useState } from "react";
import { getUsers } from "../firebase.config";

const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers().then((res) => setUser(res));
  }, []);
  return (
    <div className="grid grid-cols-3 gap-20 p-20">
      {users.map(({ user_name, user_email }) => (
        <div className="bg-gray-300">
          <p>{user_name}</p>
          <p>{user_email}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
