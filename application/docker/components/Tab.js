import React from 'react';

import TabData from './TabData';
// import styles from './CSS/Button.module.css'


function Tab({data, covide, fire}) {
  // console.log("tab data ", data[0]);

  return (
    <div>
      <table className="data-table">
        <thead>
          <tr>
            <th colSpan="1">Name</th>
            {covide ?
                            <>
                              <th colSpan="1">covide case / 100K</th>
                              <th colSpan="1">covide death / 100K</th>
                            </> :
                            <></>
            }
            {fire ?
                            <>
                              <th colSpan="1">fire case</th>
                              <th colSpan="1">evacuation level</th>
                            </> :
                            <></>
            }

          </tr>
        </thead>
        <tbody>
          {data.map((county) => {
            return (
              <TabData
                key={county.id}
                data={county}
                covide={covide}
                fire={fire}

              />
            );
          },
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Tab;
