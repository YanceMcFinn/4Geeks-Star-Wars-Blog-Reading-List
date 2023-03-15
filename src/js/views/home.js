import React from "react";
import { Card } from "/workspace/react-hello-webapp/src/js/component/card.jsx"
import { Characters } from '/workspace/react-hello-webapp/src/js/component/characters.jsx'
import { Navbar } from '../component/navbar'

import "../../styles/home.css";

export const Home = () => (
	
	<div className="container-fluid">
			<div className="row">
				<Characters />
			</div>
		</div>
);
