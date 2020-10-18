import Layout from '../components/Layout';
import Map from '../component/Map';
//import Link from 'next/link';

const Index =() => {
  return (
    <>
    <Layout>
      
      <Map/>
      
      
        <div>
            <h2>CSC 648/848 SW Enginering Fall 2020</h2>
            <h3>Section 2<br/>Team 3</h3>

        </div>

        <div id="btn-wrapper">
            <div className="button-container"><a className="fire-btn" href="/wildfires_page">Wildfires</a></div>

            <div className="button-container"><a className="fire-btn" href="/covid_page">Coronavirus</a></div>
        </div>
        </Layout>
    </>
      
     
  )
};


//    <Layout>
//        <div>
//            <h2>CSC 648/848 SW Enginering Fall 2020</h2>
//            <h3>Section 2<br/>Team 3</h3>
//
//        </div>
//
//        <div id="btn-wrapper">
//            <div className="button-container"><a className="fire-btn" href="/wildfires_page">Wildfires</a></div>
//            
//            <div className="button-container"><a className="fire-btn" href="/covid_page">Coronavirus</a></div>
//        </div>
//    </Layout>   
  




export default Index;