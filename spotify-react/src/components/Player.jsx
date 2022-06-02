import "../App.css";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import {
  addToFavouritesAction,
  removeFromFavouritesAction,
} from "../redux/actions";
import { useState } from "react";

const mapDispatchToProps = (dispatch) => ({
  addToFavourites: (id) => dispatch(addToFavouritesAction(id)),
  removeFromFavourites: (id) => dispatch(removeFromFavouritesAction(id)),
});

const Player = ({
  currentSong,
  likedSongs,
  addToFavourites,
  removeFromFavourites,
}) => {

const [isActive, setActive] = useState(true)





const handlePlay = () => {
setActive(!isActive);
}



  return (
    <div className="container-fluid fixed-bottom bg-container" id="player">
      <Row className="pt-2">
        <Col sm={3}>
          {currentSong.data?.id && (
            <Row>
              <Col sm={4}>
                <img alt="player-cover" src={currentSong.data.albumCover} />
              </Col>
              <Col sm={6} id="player-text">
                <div>{currentSong.data.title}</div>
                <div>{currentSong.data.artist.name}</div>
              </Col>
              <Col sm={2} id="player-heart">
                {currentSong.data?.id && (
               <i className=" bi bi-heart"
                    onClick={() => addToFavourites(currentSong.data) }
                    id="player-outlined"
                  ></i> 
                 
                 
                )}
                <i className="bi bi-pip"></i>
              </Col>
            </Row>
          )}
        </Col>
        <Col sm={6} className="playerControls mt-1">
          <Row
            className="justify-space-between mx-5"
            style={{ color: "white" }}
          >
            <i className="bi bi-shuffle"></i>
            <i className="bi bi-skip-start-fill"></i>
          { isActive ? 
           <i className="bi bi-play-circle-fill" onClick={handlePlay}></i>
          : <i className="bi bi-pause-circle-fill" onClick={handlePlay}></i>} 
        {/*   < i className ={
            isActive? "bi bi-ppl-circle-fill" : "bi bi-pause-circle-fill"} onClick={handlePlay}></i> */}
            <i className="bi bi-skip-end-fill"></i>
            <i className="bi bi-arrow-repeat"></i>
          </Row>
          <Row className="justify-content-center playBar">
            <div className="col-8 col-md-6">
              <div id="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
          </Row>
        </Col>
        <Col sm={3} className="playerRightControls mt-1">
          <Row className="justify-space-between mx-5">
          <i className="bi bi-mic"></i>
            <i className="bi bi-view-list"></i>
            <i className="bi bi-speaker"></i>
            <i className="bi bi-volume-mute"></i>
          </Row>
        </Col>
      
      </Row>
    </div>
  );
};

export default connect((s) => s, mapDispatchToProps)(Player);
