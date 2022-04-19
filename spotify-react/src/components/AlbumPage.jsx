import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "../App.css";
import SongComponent from "./SongComponent";

const AlbumPage = () => {
  const [album, setAlbum] = useState({});
  const [songs, setSongs] = useState([]);

  const params = useParams();

  const getAlbum = async () => {
    let albumId = params.id;

    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/album/" + albumId
      );

      if (response.ok) {
        let album = await response.json();
        setAlbum(album);
        setSongs(album.tracks.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAlbum();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <Container>
        <Row className="mt-5">
          <Col>
            <Card id="album-card">
              <Card.Img variant="top" src={album.cover_big} />
              <Card.Body id="album-card-body">
                <Card.Title>{album.title}</Card.Title>
                <Card.Text id="album-card-text">
                  {album.artist ? album.artist.name : ""} · {album.nb_tracks ? album.nb_tracks : ""} songs
                  <img src={album.artist ? album.artist.picture : ""} alt="" />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
        <Row>
          {
         
          songs.map((song) => (
            <SongComponent
              track={song}
              key={song.id}
              albumCover={album.cover}
            />
          ))}
        </Row>
      </Container>
    </main>
  );
};

export default AlbumPage;
