import axios from 'axios';

const url = "https://raw.githubusercontent.com/CSC-648-SFSU/csc648-02-fa20-team03/master/application/docker/json_files/fire_data.json?token=ANLI5K42WJ3IVOJYNL563S27ZYFBG";
//"https://raw.githubusercontent.com/CSC-648-SFSU/csc648-02-fa20-team03/master/application/docker/json_files/fire_data.json?token=ANLI5K4LDYYXF75KDHBSYRS7ZUJ4G";
// "https://raw.githubusercontent.com/CSC-648-SFSU/csc648-02-fa20-team03/master/application/docker/csv_files/fire_data.csv?token=ANLI5K4ZUEURZB2Q6IWNJUC7ZUU2E";

export const fetchFireData = async () => {
    try {
        const  { data } = await axios.get(url);
        return data;
    } catch (error) {
        
    }
}
// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import axios from 'axios';
// // import ScotchInfoBar from './ScotchInfoBar';
// import './styles.css';

// function App() {
//   const [names, setNames] = useState(null);

//   const fetchData = async () => {
//     const response = await axios.get(
//       'https://raw.githubusercontent.com/CSC-648-SFSU/csc648-02-fa20-team03/master/application/docker/json_files/fire_data.json?token=ANLI5K4LDYYXF75KDHBSYRS7ZUJ4G'
//     );

//     setNames(response.data);
//   };

//   return (
//     <div className="App">
//       <h1>wildfires</h1>
//       <h2>Fetch a list from an API and display it</h2>

//       {/* Fetch data from API */}
//       <div>
//         <button className="fetch-button" onClick={fetchData}>
//           Fetch Data
//         </button>
//         <br />
//       </div>

//       {/* Display data from API */}
//       <div className="books">
//         {names &&
//           names.map((name, index) => {
//             const fireName = name.incident_name.join(", ");
//             const county = name.incident_county.join(", ");
//             const otherCounties = name.incident_location.join(", ");

//             return (
//               <div className="book" key={index}>
//                 <h2>fire name:{fireName}</h2>

//                 <div className="details">
//                     <p>county:{county}</p>
//                     <p>locations:{otherCounties}</p>
//                 </div>
//               </div>
//             );
//           })}
//       </div>
//     </div>
//   );
// }

// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);
