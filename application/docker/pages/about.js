/* eslint-disable require-jsdoc */
import Link from 'next/link';

function About() {
  return (
    <div id="about">
      <div className="about container">
        <h1>About This Project</h1>
        <p>
          Public Safety Web App for California residents facing wildfire surges
          and monitoring the coronavirus within the users county.
        </p>

        <h6>Meet the Team</h6>
        <div className="about-us">
          <ul className="navbar-nav">
            <li className="">
              <Link href="/team/josue_carreon">
                <a className="navLink">Josue Carreon</a>
              </Link>
            </li>
            <li className="">
              <Link href="/team/pierre_antoine">
                <a className="navLink">Pierre Antoine</a>
              </Link>
            </li>
            <li className="">
              <Link href="/team/harsimran_nandhra">
                <a className="navLink">Harsimran Nandhra</a>
              </Link>
            </li>
            <li className="">
              <Link href="/team/kevin_chen">
                <a className="navLink">Kevin Chen</a>
              </Link>
            </li>
            <li className="">
              <Link href="/team/diana_benavides">
                <a className="navLink">Diana Benavides</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
