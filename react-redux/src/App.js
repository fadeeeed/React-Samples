import Counter from "./component/Counter";
import Header from "./component/Header";
import Auth from "./component/Auth";
import { useSelector } from "react-redux";
import UserProfile from "./component/UserProfile";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
