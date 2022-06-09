/* eslint-disable quotes */
/* eslint-disable require-jsdoc */
import Link from "next/link";
import styles from "./styles/about.module.css";

function About() {
  return (
    <div id={styles.about}>
      <div className="about container" id={styles.contain}>
        <h1>About This Project</h1>
        <div className={styles.header}>
          <p>
            Public Safety Web App for California residents facing wildfire
            surges and monitoring the coronavirus within the users county.
          </p>
        </div>
        <div className={styles.aboutUs}>
          <h6>Meet the Team</h6>
          <ul>
            <li>
              <Link href="/team/josue_carreon">Josue Carreon</Link>
            </li>
            <li>
              <Link href="/team/pierre_antoine">Pierre Antoine</Link>
            </li>
            <li>
              <Link href="/team/harsimran_nandhra">Harsimran Nandhra</Link>
            </li>
            <li>
              <Link href="/team/kevin_chen">Kevin Chen</Link>
            </li>
            <li>
              <Link href="/team/diana_benavides">Diana Benavides</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
