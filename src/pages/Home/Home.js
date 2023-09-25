import React from "react";

import Hero from "./Hero";
import BasicInfo from "./BasicInfo";
import Categories from "./Categories";
import Doctors from "./Doctors";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
    <Hero/>
    <BasicInfo/>
    <Categories/>
    <Doctors/>
    <Footer/>
    </>
  );
};

export default Home;
