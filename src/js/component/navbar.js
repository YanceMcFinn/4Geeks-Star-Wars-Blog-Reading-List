import React, { useContext, useState} from "react";


import { Context } from "../store/appContext.js"
import { Link } from "react-router-dom";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { logout } from "../../firebase";

export const Navbar = () => {
const [isLogged,setIsLogged] = useState(false)
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    setIsLogged(true);
    // ...
  } 
  else {
  }
});
	const { store, actions } = useContext(Context)
  return (
		<nav className="navbar navbar-light bg-light">
  <a className="navbar-brand" href="/">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1200px-Star_wars2.svg.png" width="100" alt="" />
  </a>

  {isLogged === true && (
    <div class="float-right">
      {/* currently disabled - firebase causes freeze when fav icon is clicked */}
              <button className="btn btn-primary dropdown-toggle mx-2 mb-0 disabled" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Favorites  </button>
              <div className="dropdown-menu dropdown-menu-end p-2"> 
                        <ul className="px-2">
                          {store.favorites.map((favorite, index) => (
                           <li className="navbar d-flex justify-content-between dropdown-menu-item" key={index}>
                              <div>{favorite.name}</div>
                              <div class="deleteFav mx-2" onClick={() => actions.deleteFav(favorite.name)}>X</div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <a href="/"><button className="btn btn-danger mx-2 mb-0" type="button" name="logout" onClick={logout}>
              Logout</button></a>
      </div>
            )}
            {isLogged === false && (
    <div class="float-right">
              <a href="/login"><button className="btn btn-primary mx-2 mb-0" type="button" name="login">
              Login </button></a>
                      <a href="/register"><button className="btn btn-secondary mx-2 mb-0" type="button" name="register">
              Register</button></a>
      </div>
            )}
</nav>
	);
};
