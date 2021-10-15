import React from "react";

import CollectionItem from "../colltection-item/collection-item.component";

import './collection-preview.styles.scss'

const CollectionPreview = ({ title, items }) => {

    // UNCOMMENT FOR FILTER AND PAGINATION PURPOSES
    // let limit = 3,
    //     page = 3

    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {items
                    .filter((item, index) => index < 4)
                    .map(({id, ...otherItemProps}) => (
                        // <CollectionItem key={item.id}>{item.name} /></CollectionItem>
                        <CollectionItem key={id}{...otherItemProps}/>
                    ))}
            </div>

{/* UNCOMMENT FOR FILTER AND PAGINATION PURPOSES */}
            {/* <div>
                { 
                    items
                        .filter((item, index) => index >= (page * limit) - limit)
                        .filter((item, index) => index < limit)
                        .map(item => (
                            <div key={item.id}>{item.name} </div>
                        ))}
            </div> */}
        </div>
    )
}

export default CollectionPreview;