import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../App.css";
import { Container, Row, Card, Col } from "react-bootstrap";

const ArtistPage = () => {
  const [artist, setArtist] = useState({});
  const [songs, setSongs] = useState([]);

  const params = useParams();
  let artistFans= [artist.nb_fan].toLocaleString()
  const getArtist = async () => {
    let artistId = params.id;

    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/artist/" + artistId
      );

      if (response.ok) {
        let artist = await response.json();
        console.log(artist)
       
        setArtist(artist);

        let tracksResponse = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
            artist.name
        );
        if (tracksResponse.ok) {
          let tracklist = await tracksResponse.json();
        
          setSongs(tracklist.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArtist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <Container>
        <Row className="mt-5">
         <Col sm={12} id="artist-col">
              <img src={artist.picture_big} id="artist-img" alt="" />
             <div>
                  <h5>{artist.name}</h5>
                  <p>{artistFans} fans · {artist.nb_album} albums</p>
             </div>

         </Col>
        </Row>
      </Container>
    </main>
  );
};

export default ArtistPage;
