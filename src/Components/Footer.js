import React, { Component } from "react";
import "../style/Footer.css";

class Footer extends Component {
  state = {
    date: "",
  };

  componentDidMount() {
    this.getDate();
  }

  getDate = () => {
    var date = new Date();
    var year = date.getFullYear();
    this.setState({ date: year });
  };

  render() {
    const { date } = this.state;

    return (
      <div className="footer">
        <h3 className="text">Susan Missaglia</h3>
        <p className="text">All rights reserved -{date}</p>
      </div>
    );
  }
}

export default Footer;
