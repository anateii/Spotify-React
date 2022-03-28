import "../App.css";
import cover1 from "../assets/cover1.png";

const SearchPage = () => {
  return (
   <main>
      <div className="some-page-wrapper">
        <div className="row" id="secondWrapper">
          <div className="column">
            <div className="blue-column">
              <img src={cover1} alt="..." />
              <p>10cc</p>
            </div>
          </div>
        </div>
      </div>
   </main>
  );
};

export default SearchPage;
