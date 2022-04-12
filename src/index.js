import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { BookProvider } from "./Context/bookContext";

// dev - jrvk91u1.us.auth0.com - Domain
// cEaeohz2qmP43eT9X0n6BlPiL72rtNCg - client Id
ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-jrvk91u1.us.auth0.com"
      clientId="cEaeohz2qmP43eT9X0n6BlPiL72rtNCg"
      redirectUri={window.location.origin}
    >
      <BookProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </BookProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
