import "../App.css";
import { useState, useEffect } from "react";
import { Container, Form, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);




  const handleSubmit = (e) => {
    e.preventDefault();
    fetchSongs();
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    
  };

  useEffect(() => {
  fetchSongs(query)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  const fetchSongs = async () => {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
        (query || "pixies")
    );

    if (response.ok) {
      const { data } = await response.json();

      setResults(data);
    }
  };

  return (
    <main>
      <Container className="mt-5">
        <Form onSubmit={handleSubmit}>
          <Form.Control
            size="lg"
            type="text"
            placeholder="Search for..."
            onChange={handleChange}
          />
        </Form>
        <Row>
          {results
            .map((song) => (
              <Col md={3} className="my-4">
                <Card id="search-card">
                  <Card.Img variant="top" src={song.album.cover_big} />
                  <Card.Body>
                   <Link to={`/album-page/${song.album.id}`}>
                      <Card.Title>
                        {song.album.title.length < 16
                          ? song.album.title
                          : song.album.title.substring(0, 16) + "..."}
                      </Card.Title>
                   </Link>
                   <Link to={`/artist-page/${song.artist.id}`}>
                      <Card.Text>{song.artist.name}</Card.Text>
                   </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))
           .slice(0,12)}
        </Row>
      </Container>
    </main>
  );
};

export default SearchPage;
