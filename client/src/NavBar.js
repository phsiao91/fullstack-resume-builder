import React from "react";
import { Link } from "react-router-dom";

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
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
          {user? (
            <>
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
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
      </div>
      
    </header>
  );
}

export default NavBar;
