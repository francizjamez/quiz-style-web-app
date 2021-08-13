import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { initializeFirebase } from "./firebase.config";
import Login from "./components/Login";
import Question from "./components/Question";
import UserList from "./components/UserList";

function App() {
  useEffect(() => {
    initializeFirebase();
  }, []);
  return (
    <Switch>
      <Route path="/question" component={Question} />
      <Route path="/users" component={UserList} />
      <Route path="/" component={Login} />
    </Switch>
  );
}

export default App;
