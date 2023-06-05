import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Login } from "./views/Login.js"
import { Register } from "./views/Register.js"
import { Reset } from "./views/Reset.js"
import { Dashboard } from "./views/Dashboard.js"

import { SingleCharacter } from "./views/SingleCharacter.js"
import { SinglePlanet } from "./views/SinglePlanet.js"
import { SingleShip } from "./views/SingleShip.js"



import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						
						<Route path="/planets/:id" element={<SinglePlanet />} />
						<Route path="/characters/:id" element={<SingleCharacter />} />
						<Route path="/starships/:id" element={<SingleShip />} />
						<Route path="*" element={<h1>Not found!</h1>} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element= {<Register />} />
						<Route path="/reset" element= {<Reset />} />
						<Route path="/dashboard" element= {<Dashboard />} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
