import "../App.css";
import accountImg from "../assets/thechild.jpg";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <nav className="navbar navbar-dark">
      <div className="arrows-wrapper">
        <small className="roundButton navbar-brand">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </small>
        <Link to="/album-page">
          <small className="roundButton1 navbar-brand">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </small>
        </Link>
      </div>

      <div id="dropdownMenu" className="col-2">
        <div className="dropdown">
          <button
            className="btn dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img id="profileImg" src={accountImg} alt="" />
            Ana
          </button>
          <div
            id="dropdown"
            className="dropdown-menu dropdown-menu-right "
            aria-labelledby="dropdownMenuButton"
          >
            <small>Account</small>
            <small>Profile</small>
            <small>Upgrade to premium</small>
            <small>Private session</small>
            <small>Setting</small>
            <small>Log out</small>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
