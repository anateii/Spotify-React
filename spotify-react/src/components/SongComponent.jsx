import { Col } from "react-bootstrap";

const SongComponent = ({ track }) => {
  function secondsToTimestamp(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;

    return `${minutes < 10 ? "0" : ""}${minutes}:${
      remainingSeconds < 10 ? "0" : ""
    }${remainingSeconds}`;
  }

  return (
    <Col sm={12}>
      <div className="row mx-2" id="tracklist">
        <div className="col-12 mt-2 text-white" id="playlist-column">
          <div className="container d-flex justify-content-start">
            <span id="playlist-hash">#</span>

            <h5 id="playlist-song">{track.title}</h5>
          </div>
          <span id="playlist-time"> {secondsToTimestamp(track.duration)}</span>
        </div>
      </div>
    </Col>
  );
};

export default SongComponent;
