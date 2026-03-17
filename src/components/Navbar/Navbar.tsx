import "./Navbar.css";
import navImg from "../../assets/images/CreativeStore.png";
import { useState } from "react";
import Search from "../Search/Search";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="">
      <header>
        <nav>
          {/* Logo */}
          <div className="navbar-logo">
            <a className="logo">
              <img src={navImg} alt="CreativeStore logo" />
              <h2>CreativeStore</h2>
            </a>
          </div>

          {/* Nav links */}
          <div className={`nav-wrapper ${menuOpen ? "open" : ""}`}>
            <button className="close-btn" onClick={closeMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="34px"
              viewBox="0 -960 960 960"
              width="34px"
              fill="#1f1f1f"
            >
              <path d="m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z" />
            </svg>
          </button>

          
            <ul className="nav-links">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Product</a>
              </li>
              <li>
                <a href="">About-us</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>

          

          {/* Icons */}
          <div className="navbar-icons">
            <div className="">
            
            <Search />


          </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#1f1f1f"
            >
              <path d="M360-640v-80h240v80H360ZM223.5-103.5Q200-127 200-160t23.5-56.5Q247-240 280-240t56.5 23.5Q360-193 360-160t-23.5 56.5Q313-80 280-80t-56.5-23.5Zm400 0Q600-127 600-160t23.5-56.5Q647-240 680-240t56.5 23.5Q760-193 760-160t-23.5 56.5Q713-80 680-80t-56.5-23.5ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#1f1f1f"
            >
              <path d="M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80ZM247-527q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm296.5-343.5Q440-607 440-640t-23.5-56.5Q393-720 360-720t-56.5 23.5Q280-673 280-640t23.5 56.5Q327-560 360-560t56.5-23.5ZM360-640Zm0 400Z" />
            </svg>
          </div>


          {/* Menu button */}
          <button
            aria-label="Toggle menu"
            onClick={toggleMenu}
            className={`menu-btn ${menuOpen ? "hide" : ""}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="34px"
              viewBox="0 -960 960 960"
              width="34px"
              fill="#000"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </button>

      
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
