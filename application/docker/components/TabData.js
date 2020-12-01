import React from 'react';
// import styles from './CSS/Button.module.css'


function TabData({data, covid, fire}) {
  console.log("tab data ", data);
  return (
    <tr>
      <td>{data.name}</td>
      {covid ?
                <>
                  <td>{data.covide_case}</td>
                  <td>{data.covide_death}</td>
                </> :
                <></>
      }
      {fire ?
                <>
                  <td>{data.fire_case}</td>
                  <td>{data.evacuation_level}</td>
                </> :
                <></>
      }
    </tr>
  );
}

export default TabData;
