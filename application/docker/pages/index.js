/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-spacing */
/* eslint-disable require-jsdoc */
import Hero from "../components/hero/Hero";
import MapSection from '../components/map/MapSection';

// eslint-disable-next-line react/prop-types
function Index({ data }) {
  // //console.log("props index ", data[0]);
  return (
    <>
      <Hero />
      <MapSection/>
    </>
  );
}

export default Index;
