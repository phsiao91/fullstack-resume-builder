import React from "react";
import { Link } from "react-router-dom";
import { faCaretDown} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }



  return (
    <header>
      <div className="navbar">
        <Link to="/">Home</Link>
  
        <div>
            <div className="dropdown">
              <button class="dropbtn">Menu
                <FontAwesomeIcon icon={faCaretDown}/>
              </button>
              <div className="dropdown-content">
                <Link to="/bios">Bio</Link>
                <Link to="/introductions">Summary</Link>
                <Link to="/workhistories">WorkHistory</Link>
                <Link to="/educations">Education</Link>
                <Link to="/languages">Languages</Link>
                <Link to="/socials">Social</Link>
                <Link to="/hobbies">Hobbies</Link>
                <Link to="resumes">Resume</Link>
                <Link to="accounts">Account</Link>
                <Link to="/" onClick={handleLogoutClick}>Logout</Link>
              </div>
            </div>
            </div>
      </div>
      
    </header>
  );
}

export default NavBar;
