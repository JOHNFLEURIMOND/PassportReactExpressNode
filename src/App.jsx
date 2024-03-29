import React from 'react';
import { Router, Route } from "react-router-dom";
import history from "./history";
import UserProvider from "./contexts/UserProvider";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import MenuBar from "./components/menus/MenuBar";
import Footer from "./components/footer/Footer";
import "./style/index.css";

export default function App() {
    return (
        <div className="page">
 <Router history={history}>
        <UserProvider>
            <Route path="/" component={MenuBar} />
            <Route path="/profile" component={Profile} />
        </UserProvider>
        <Route path="/" exact component={Home} />
        <Route path="/" exact component={Footer} />
    </Router>
        </div>
       
    )
}
