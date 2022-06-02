import spotifyLogo from "../assets/Spotify_Logo_White.png";
import plusIcon from "../assets/Plus.jpg";
import hearthIcon from "../assets/hearth.png"
import { Link } from "react-router-dom";

const MySideBar = () => {
  return (
    <nav className="navbar1 navbar-expand-lg navbar-dark d-none d-md-block ">
      <img
        id="imageS"
        className="mt-4 mr-5"
        src={spotifyLogo}
        alt=""
      ></img>
      <div id="verticalMenu" className="text-light ml-3 mt-3">
        <div className="row-wrapper">
          <div className="inline col-12">
            <svg
              id="firstIcon"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="plus1 bi bi-house-door"
              viewBox="0 0 16 16"
            >
              <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
            </svg>
           <Link to="/home-page" style={{color:"white", textDecoration:"none"}}>
              <span>Home</span>
           </Link>
          </div>

          <div className="inline col-12">
            <svg
              id="secondIcon"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="plus1 bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          <Link to="/">
              <span>Search</span>
          </Link>
          </div>

          <div className="inline col-12">
            <svg
              id="thirdIcon"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="plus1 bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
            <span>Your Library</span>
          </div>
        </div>
      </div>

      <div className="container-wrapper text-light mt-2">
        <div className="row-wrapper">

            <div className="col-12 " >
                    <img className="plus" src={plusIcon} alt=""/>
                    <span>Create Playlist</span>
            </div>
      

            <div className="col-12 mt-3" > 
                    <img className="plus" src={hearthIcon} alt=""/>
                    <span><Link to="/liked-playlist" id="liked-songs">Liked Songs</Link></span>
               
            </div>
        </div>
    </div>
  
    <div className="sideList container mt-5">
    <ul>
        <Link to="/album-page" style={{color:"white", textDecoration:"none"}}>
            <li>Japanese LoFI Chill</li>
        </Link>
        <li>Deep Tech Mag Official🔊</li>
        <Link to="/artist-page" style={{color:"white", textDecoration:"none"}} >
            <li>Rufus do Sol✨</li>
        </Link>
        <li>Classical Essentials</li>
        <li>Night Drive 🔥</li>
    </ul>
    
    </div>

    </nav>
  );
};

export default MySideBar;
