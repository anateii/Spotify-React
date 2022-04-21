import { Col } from "react-bootstrap";
import { useState } from "react";
import { connect } from "react-redux";
import { setSongAction } from "../redux/actions";

const mapDispatchToProps =(dispatch) => ({
  setSong: (song) => dispatch(setSongAction(song))
});



const SongComponent = ({ track,setSong, albumCover}) => {

const [isActive, setActive] = useState(true)

const changeColor =()=>{
setActive(!isActive)
}

  function secondsToTimestamp(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;

    return `${minutes < 10 ? "0" : ""}${minutes}:${
      remainingSeconds < 10 ? "0" : ""
    }${remainingSeconds}`;
  }


const handleSongClick =(song) => {
  setSong({...song, albumCover})
}


  return (

    

    <Col sm={12} className="px-0">
      <div className="row mx-2" id="tracklist">
        <div className="col-12 mt-2 text-white px-0" id="playlist-column" onClick ={()=>handleSongClick(track)}>
          <div className="container d-flex justify-content-start px-0">
            <span id="playlist-hash">#</span>

            <h5 id="playlist-song">{track.title}</h5>
          </div>
        <div onClick={changeColor} id="heart-wrapper">
            {isActive ?
              <i className="bi bi-heart" id="outlined"></i>
            :  <i className="bi bi-heart-fill" id="filled"></i>}
        </div>
        
          <span id="playlist-time" className="mx-5"> {secondsToTimestamp(track.duration)}</span>
        </div>
      </div>
    </Col>
    
  );
};

export default connect((s) => s, mapDispatchToProps)(SongComponent);
