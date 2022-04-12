import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/login";
import Dashboard from "./Pages/Dashboard/dashboard";
import Details from "./Pages/Details/details";
// import PrivateRoute from "./Pages/PrivateRoute";
// import RequireAuth from "./Components/ReqRisAuth/RequireAuth";
// import RestrictAuth from "./Components/ReqRisAuth/RestrictAuth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/"
          element={
            // <PrivateRoute>
            <Dashboard />
            // </PrivateRoute>
          }
        ></Route>
        <Route path="/details/:bookId" element={<Details />}></Route>
      </Routes>
    </div>
  );
}

export default App;
