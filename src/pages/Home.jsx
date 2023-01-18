import React from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Post from "../components/Post/Post";
import Footer from "../components/Footer/Footer";

function Home(props) {
  return (
    <div>
      <Header />
      <Banner />
      <Post />
      <Footer/>
    </div>
  );
}

export default Home;
