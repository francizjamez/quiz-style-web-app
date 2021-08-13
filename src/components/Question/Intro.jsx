import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div className="bg-green-800 h-screen grid place-items-center">
      <div className="p-4 container max-w-5xl text-white flex flex-col gap-20 justify-center">
        <h1>
          <span className="text-yellow-600">your</span> business
        </h1>
        <p>
          Traceability systems can help all kinds of business. Before we dive
          into helping you choose one that is right for you, we need to
          understand what stage your business is at.
        </p>
        <Link to="/question/1" className="self-center">
          <button>Take me to question 1</button>
        </Link>
        <Link to="/users" className="self-center">
          <button>See all signed up users</button>
        </Link>
      </div>
    </div>
  );
};

export default Intro;
