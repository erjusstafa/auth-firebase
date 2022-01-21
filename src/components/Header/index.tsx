import React, { Fragment, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./style.scss";

interface IHeader {
  auth: any;
  signOut: any;
}

interface IWidthHeight {
  width: number;
  height: number;
}

function Header({ signOut, auth }: IHeader) {
  const history = useHistory();
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState<IWidthHeight>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  const ctaClickHandler = () => {
    menuToggleHandler();
    history.push("/page-cta");
  };
  return (
    <Fragment>
      <ul>

<li>
    <Link to="/data" onClick={menuToggleHandler}>data</Link>
  </li>
  <li>
    <Link to="/" onClick={menuToggleHandler}>Home</Link>
  </li>
  <li>
    <Link to="/login" onClick={menuToggleHandler}>Login</Link>
  </li>
  <li>
    <Link to="/register" onClick={menuToggleHandler}> Register</Link>
  </li>
  <li>
    <Link to="/reset" onClick={menuToggleHandler}>Reset password</Link>
  </li>
  <li>
    <Link to="/protected" onClick={menuToggleHandler}>Protected page</Link>
  </li>
  <li>
    <Link
      to="#"
      onClick={() => {
        signOut(auth)
          .then(() => {
            console.log("user signed out");
          })
          .catch((error: any) => {
            console.log("error", error);
          });
         
      } }
    >
      Log out
    </Link>
  </li>
</ul>

    </Fragment>
  );
}

export default Header;
