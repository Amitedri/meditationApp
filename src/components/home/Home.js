import React, { Component } from "react";
import "./home.css";
import footer from "../../assets/footer.png";
class Home extends Component {
  state = {};
  render() {
    return (
      <div className="mainContainer" id="particles-js">
        <div className="intro">
          <div className="introText">
            <h1>This moment</h1>
            <h2>Meditate.listen.experience</h2>
          </div>
          <button className="tryBtn">Begin meditate</button>
        </div>
        <div className="interaction">
          <div className="inputContainer">
            <div className="inputRounded">
              <input type="text" placeholder="first name" />
            </div>
            <div className="inputRounded">
              <input type="text" placeholder="Email" />
            </div>
            <div className="inputRounded">
              <input type="text" placeholder="password" />
            </div>
            <button className="submitBtn">Submit</button>
            <div className="loginSmBtn">Login</div>
          </div>
        </div>
        <div className="footer">
          <img src={footer} />
        </div>
      </div>
    );
  }
}

export default Home;
