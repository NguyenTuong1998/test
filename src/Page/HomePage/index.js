import React, { Component } from "react";
import Banner from "../../Components/Banner";
import Oder from "../../Components/Oder";
import Header from "../../util/Header";

class HomePage extends Component {
  render() {
    return (
      <>
        <Header />
        <Banner/>
        <Oder/>
      </>
    );
  }
}

export default HomePage;
