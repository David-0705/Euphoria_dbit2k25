import ButtonGradient from "../assets/svg/ButtonGradient";
import Benefits from "../components/Benefits";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

import { homeNavigation } from "../constants";

import Services from "../components/Services";
import Grid from "../components/Euphoria/Grid";


export default function Home(){

    return(
        <>
        <div className="overflow-hidden ">
        <Header />
        <Hero />
        <Services />
        <Grid />
        <Benefits />
       
        <Footer nav={homeNavigation}/>
      </div>

      <ButtonGradient />
      </>
    );

};