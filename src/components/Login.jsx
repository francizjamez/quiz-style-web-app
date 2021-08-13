import { useHistory } from "react-router-dom";
import { addUser } from "../firebase.config";
import useUserDataStore from "../store/userDataStore";

const Login = () => {
  const setUserName = useUserDataStore((state) => state.setUserName);
  const user_name = useUserDataStore((state) => state.user_name);
  const setUserEmail = useUserDataStore((state) => state.setUserEmail);
  const user_email = useUserDataStore((state) => state.user_email);

  const history = useHistory();
  return (
    <div className="text-green-900 bg-gray-100 w-screen">
      <div className="mx-auto container flex min-h-screen items-center justify-center  gap-16 ">
        <div className=" p-20 flex flex-col gap-10 flex-1">
          <h1>
            <span className="text-yellow-600">Who are</span> you?
          </h1>
          <p>
            Please complete your details here so that we can send you a
            personalised report. We won’t be using the information for any other
            purpose unless you allow us to do so.
          </p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            addUser({ user_name, user_email });
            history.push("/question");
          }}
          className="flex flex-col p-20 items-start gap-16"
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label>First name</label>
              <input onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div className="flex flex-col">
              <label>Email address</label>
              <input
                type="email"
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>
          </div>

          <button type="submit" disabled={!user_name || !user_email}>
            Start the chooser now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
