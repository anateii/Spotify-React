import "../App.css";
import cover1 from "../assets/cover1.png";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import {
  addToFavouritesAction,
  removeFromFavouritesAction,
} from "../redux/actions";

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
                <i className="bi bi-heart" id="player-outlined"></i>
                <i class="bi bi-pip"></i>
              </Col>
            </Row>
          )}
        </Col>  
        <Col sm={6} className="playerControls mt-1">
        <Row className="justify-space-between mx-5" style={{color: "white"}}>
        <i class="bi bi-shuffle"></i>
        <i class="bi bi-skip-start-fill"></i>
        <i class="bi bi-play-circle-fill"></i>
        <i class="bi bi-skip-end-fill"></i>
        <i class="bi bi-arrow-repeat"></i>
        </Row>
        <Row className="justify-content-center playBar py-3">
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
      </Row>
    


    </div>
  );
};

export default connect((s) => s, mapDispatchToProps)(Player);
