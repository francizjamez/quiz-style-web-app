import { Link } from "react-router-dom";
import useUserDataStore from "../../store/userDataStore";

const Nav = () => {
  const user_name = useUserDataStore((state) => state.user_name);
  return (
    <div className="text-white fixed right-10 flex gap-10 top-4">
      <Link to="/">Back to website</Link>
      <p>{user_name}</p>
    </div>
  );
};

export default Nav;
