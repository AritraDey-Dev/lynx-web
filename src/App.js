import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import HomePage from "./screens/home/homePage";
import SignUpPage from "./screens/signUp/signUpPage";
import LoginPage from "./screens/login/loginPage";
import { useDispatch } from "react-redux";
import { setLogin } from "./state";

function App() {

  const dispatch = useDispatch();
  const isAuth = Boolean(useSelector((state) => state.token));

  dispatch(
    setLogin({
      user: "user",
      token: "token",
    })
  );
  return(
    <div className="app">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/home"
              element={isAuth ? <HomePage /> : <Navigate to="/" />}
            />
            <Route
              path="/register"
              element={<SignUpPage />}
            />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
