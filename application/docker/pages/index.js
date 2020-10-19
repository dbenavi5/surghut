import Map from '../components/Map';

const Index =() => {
  return (
    <>
        <div>
            <h2>CSC 648/848 SW Enginering Fall 2020</h2>
            <h3>Section 2<br/>Team 3</h3>

        </div>

        <div id="btn-wrapper">
            <div className="button-container"><a className="fire-btn" href="/wildfires_page">Wildfires</a></div>

            <div className="button-container"><a className="fire-btn" href="/covid_page">Coronavirus</a></div>
          <Map/>
        </div>
    </>
      
     
  )
};

export default Index;