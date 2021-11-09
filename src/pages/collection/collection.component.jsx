// LESSON 150

import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/colltection-item/collection-item.component";
import './collection.styles.scss';

const CollectionPage = ({collection}) =>{
    console.log(collection, 'matchIOfhaosifaofi') 
    const {title, items } = collection;
    return (
    <div className='collection-page'>
        <h2>{title}</h2>
        <div className='items'>
            {
                items.map(item => (
                <CollectionItem key={item.id} item={item}/>))
            }
        </div>
    </div>
)}

// ownProps is props came from the component called CollectionPage (Props drilling)
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);