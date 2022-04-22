import "../App.css";
import { Container, Row, Col } from "react-bootstrap";
import liked from "../assets/hearth.png";
import me from "../assets/thechild.jpg";
import { useSelector, useDispatch } from "react-redux";



const LikedPlaylist = () => {

    const likedSongs = useSelector(state=> state.likedSongs.elements)
console.log(likedSongs)

  return (
    <main>
      <Container>
        <Row className="mt-5">
          <Col sm={12} id="artist-col">
            <img src={liked} id="likedPlaylist-img" alt="" />
            <div>
              <p>PLAYLIST</p>
              <h5>Liked Songs</h5>
              <div id="likedPlaylist-name">
                <img src={me} alt="" />
                <span>Ana</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
         {likedSongs.map((element, i)=>(<Col sm={12} className="px-0">
              <div className="row mx-2" id="tracklist" key={i}>
                <div
                  className="col-12 mt-2 text-white px-0"
                  id="playlist-column"
                >
                  <div className="container d-flex justify-content-start px-0">
                    <span id="playlist-hash">#</span>
                    <h5 id="playlist-song">{element.title}</h5>
                  </div>

                  <span id="playlist-time" className="mx-5">
                    00:00
                  </span>
                </div>
              </div>
            </Col>))}
            
        </Row>
      </Container>
    </main>
  );
};

export default LikedPlaylist;
