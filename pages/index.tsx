import type { NextPage } from "next";
import Foody from '../pages/Components/FoodyClient/index';
import Features from "./Components/Features";
import ClientMenu from '../pages/Components/ClientMenu/index'
import Pizza from '../pages/Components/Pizza/index';
import French from '../pages/Components/French/index';
import FastFood from '../pages/Components/Fastfood/index';
import Footer from "../pages/Components/Footer/index";
const Home: NextPage = () => {

  

  return (
   <div>
    <Foody />
    <Features />
    <ClientMenu />
    <Pizza />
    <French />
    <FastFood />
    <Footer />

    
   </div>
  );
};

export default Home;