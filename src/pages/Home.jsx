import React from 'react'
import Slider from '../components/Slider'

import Feautes from '../components/Feautes';
import Facts from '../components/Facts';
import Choose from '../components/Choose';
import Action from '../components/Action';  
import Portfolio from '../components/Portfolio';
import SliderNav from '../components/SliderNav';
import Service from '../components/Service';
import ServiceDetail from '../components/ServiceDetail';
import Pricing from '../components/Pricing';
import PricingTable from '../components/PricingTable';
import Clients from '../components/Clients';
import Blog from '../components/Blog';
import Clientss from '../components/Clientss';
// import Appoinment from '../components/Appoinment';
import AppoinmentOne from '../components/AppoinmentOne'
import NewsLetter from '../components/NewsLetter';


const Home = () => {
  return (
    <>
    <Slider/>
      <Feautes/>
      <Facts/>
      <Choose/>
      <Action/>
      <Portfolio/>
      <SliderNav/>
      <Service/>
      <ServiceDetail/>
      <Pricing/>
      <PricingTable/>
      <Clients/>
      <Blog/>
      <Clientss/>
      <AppoinmentOne/>
      <NewsLetter/>

    
    </>
  )
}

export default Home