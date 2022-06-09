/* eslint-disable quotes */
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div id={styles.hero}>
      <div className="hero container">
        <div>
          <h1>
            Welcome to <span></span>
          </h1>
          {/* <h1>
            to <span></span>
          </h1> */}
          <h1>
            SurgHut <span></span>
          </h1>
          {/* <p>
            Track down COVID-19 cases and monitor evacuation levels for
            Wildfires across the state of California. SurgeHut is open to the
            public, however registered users can recieve updates and alerts of
            any new COVID-19 cases or emerging Wildfires base on you county.
          </p> */}
          {/* <p>
            Try out the interactive Google Maps
            <br />
            Type in your county in the search bar then click the search button
            to get your county information.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
