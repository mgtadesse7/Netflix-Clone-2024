import React from "react";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import RowList from "../../components/Rows/RowList/RowList";

const Home = () => {
  return <div>
    <Header/>
    <Banner/>
    <RowList/>
    <Footer/>
  </div>;
};

export default Home;
