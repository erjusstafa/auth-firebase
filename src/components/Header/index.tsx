import React, { Fragment, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./style.scss";
interface IHeader {
  auth: any;
  signOut: any;
  isAuth: boolean;
}

function Header({ signOut, auth, isAuth }: IHeader) {
  const [click, setClick] = useState<boolean>(false);
  const [navbar, setNavbar] = useState<boolean>(false);
  const history = useHistory();
  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <Fragment>
      <div className="nav">
        <nav className={navbar ? "navbar active" : "navbar"}>
          <Link to="/" className="navbar_logo">
            <p>𝕰𝖗𝖏𝖚𝖘 𝖘𝖙𝖆𝖋𝖆</p>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <i className="fas fa-times close_x"></i> : <i className="fas fa-bars align_right" />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/quiz" className="nav-links">
                Quiz
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/table" className="nav-links">
                Table
              </Link>
            </li>
         
            {isAuth === true ? null : (
              <Fragment>
                <li className="nav-item">
                  <Link to="/login" className="nav-links">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-links">
                    Register
                  </Link>
                </li>
              </Fragment>
            )}

            {isAuth ? (
              <Fragment>
                <li className="nav-item">
                  <Link to="/reset" className="nav-links">
                    Reset password
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="#"
                    onClick={() => {
                      history.push("/login");
                      signOut(auth)
                        .then(() => {
                          console.log("user signed out");
                        })
                        .catch((error: any) => {
                          console.log("error", error);
                        });
                    }}
                    className="nav-links"
                  >
                    Log out
                  </Link>
                </li>
              </Fragment>
            ) : null}
          </ul>
        </nav>
      </div>
    </Fragment>
  );
}

export default Header;
