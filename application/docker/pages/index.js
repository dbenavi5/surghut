import Layout from '../components/Layout';

<<<<<<< HEAD
const Index = () => (
=======
import Map from '../component/Map';

function Home() {
  return (
    <>
      <Link href="/about">
        <a>About</a>
      </Link>
      <h1>Home</h1>
      <img src="/static/home.png" />
      <Map/>
    </>
  )
}
>>>>>>> d55ed0fa51fd2620cad42e7fdd143abef8a74ff7

    <Layout>
        <div>
            <h2>CSC 648/848 SW Enginering Fall 2020</h2>
            <h3>Section 2<br/>Team 3</h3>

        </div>

        <div id="btn-wrapper">
            <div className="button-container"><a className="fire-btn" href="/wildfires_page">Wildfires</a></div>
            
            <div className="button-container"><a className="fire-btn" href="/covid_page">Coronavirus</a></div>
        </div>
    </Layout>   
  
);



export default Index;