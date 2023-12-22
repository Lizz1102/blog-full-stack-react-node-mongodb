import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAD-HwdcUWF_GaLn1j2M_FIth1oK9KswLk",
    authDomain: "my-react-blog-8cc92.firebaseapp.com",
    projectId: "my-react-blog-8cc92",
    storageBucket: "my-react-blog-8cc92.appspot.com",
    messagingSenderId: "951995222759",
    appId: "1:951995222759:web:e4c3f87aa15b4a439df042",
    measurementId: "G-YE85K8J73P",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
