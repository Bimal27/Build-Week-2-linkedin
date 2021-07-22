import React, { useState } from 'react';

const HomeAsideItemList = ( { infoList, ulOrOl } ) =>{

    const [ showMoreOrLess, setShowMoreOrLess] = useState( 5 );
    { console.log( ulOrOl ) }
    const list = infoList &&
                    infoList
                        .slice(0, showMoreOrLess )
                        .map( ({ subTitle, time, readers }, i ) =>
                            <li key={ i }
                                className="info-li"
                            >
                                <h6 className=""> { subTitle } </h6>
                                <p>  { time } - { readers } readers</p>
                            </li>
                        )
            
        return (
            ulOrOl === "ol"
                ? <ol> { list } </ol>
                : <ul> { list } </ul>
        )    
}
export default HomeAsideItemList;