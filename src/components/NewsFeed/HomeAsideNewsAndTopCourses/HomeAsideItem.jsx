import './HomeAsideItem.scss'
import React from 'react';
import HomeAsideItemList from './HomeAsideItemList';
import InfoIcon from './InfoIcon';

const HomeAsideItem = ( { infoList, title, infoIcon, ulOrOl } ) => 
    <div className="regularComponent mb-2 position-relative">
        <InfoIcon infoIcon={ infoIcon } />
        <h4 className="ml-4 mt-2" style={{ fontSize: '0.96rem' }}> 
            { title } 
        </h4>
        <HomeAsideItemList infoList={ infoList } ulOrOl={ ulOrOl } />
    </div>

export default HomeAsideItem;