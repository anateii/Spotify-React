import "../App.css";
import cover1 from "../assets/cover1.png";
import cover2 from "../assets/cover 2.png";
import cover3 from "../assets/cover3.png";
import cover4 from "../assets/cover4.png";
import MyNavbar from "./MyNavbar";
import MySideBar from "./MySideBar";
import MyFooter from "./MyFooter";

const HomePage = () => {
  return (
    <div>
      <MyNavbar/>
      <MySideBar/>
      <main>
        <div className="titles">
          <h1>Good morning</h1>
        </div>
        <div className="morning-wrapper ">
          <div className="row">
            <div className="column">
              <div className="red-column glow">
                <img src={cover1} alt="" />
                <p>Rufus do Sol</p>
              </div>
            </div>
            <div className="column">
              <div className="red-column">
                <img src={cover2} alt="" />
                <p>Deep Techno</p>
              </div>
            </div>
            <div className="column">
              <div className="red-column">
                <img src={cover3} alt="" />
                <p>Blue Sheeps</p>
              </div>
            </div>
            <div className="column">
              <div className="red-column">
                <img src={cover4} alt="" />
                <p>Sax - Best of</p>
              </div>
            </div>
          </div>
        </div>
      
        <div className="titles">
          <h3>Recently played</h3>
          <h6>SEE ALL</h6>
        </div>
      
        <div className="some-page-wrapper">
          <div className="row" id="secondWrapper">
            <div className="column">
              <div className="blue-column">
                <img src={cover1} alt="..." />
                <p>10cc</p>
              </div>
            </div>
            <div className="column">
              <div className="blue-column">
                <img src={cover2} alt="" />
                <p>Beastie Boys</p>
              </div>
            </div>
            <div className="column">
              <div className="blue-column">
                <img src={cover3} alt="..." />
                <p>Big Brother</p>
              </div>
            </div>
            <div className="column">
              <div className="blue-column">
                <img src={cover4} alt="" />
                <p>Liked Songs</p>
              </div>
            </div>
            <div className="column">
              <div className="blue-column">
                <img src={cover1} alt="..." />
                <p>David Bowie</p>
              </div>
            </div>
            <div className="column">
              <div className="blue-column">
                <img src={cover2} alt="" />
                <p>Jethro Tull</p>
              </div>
            </div>
          </div>
        </div>
      
        <div class="titles">
          <h3>Shows to try</h3>
          <h6>SEE ALL</h6>
        </div>
        <p>Podcasts we think you'll get hooked on</p>
      
        <div className="some-page-wrapper">
          <div className="row">
            <div className="column">
              <div className="blue-column">
                <img src={cover1} alt="..." />
                <p>Uriah</p>
              </div>
            </div>
            <div className="column">
              <div className="blue-column">
                <img src={cover2} alt="" />
                <p>Kendric Lamar</p>
              </div>
            </div>
            <div className="column">
              <div className="blue-column">
                <img src={cover3} alt="..." />
                <p>Nirvana</p>
              </div>
            </div>
            <div className="column">
              <div className="blue-column">
                <img src={cover4} alt="" />
                <p>Patti Smith</p>
              </div>
            </div>
            <div className="column">
              <div className="blue-column">
                <img src={cover1} alt="..." />
                <p>Ramones</p>
              </div>
            </div>
            <div className="column">
              <div className="blue-column">
                <img src={cover2} alt="" />
                <p>The Beatles</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <MyFooter/>
    </div>
  );
};

export default HomePage;
