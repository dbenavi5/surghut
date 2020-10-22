import React from 'react';

import TabData from './TabData';
//import styles from './CSS/Button.module.css'


function Tab({data, covide, fire}) {
    console.log("tab data ", data[0]);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th colspan="1">Name</th>
                        {covide ?
                            <>
                                <th colspan="1">covide case / 100K</th>
                                <th colspan="1">covide death / 100K</th>
                            </>
                            :
                            <></>
                        }
                        {fire ?
                            <>
                                <th colspan="1">fire case</th>
                                <th colspan="1">evacuation level</th>
                            </>
                            :
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
                        )
                    }
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Tab;