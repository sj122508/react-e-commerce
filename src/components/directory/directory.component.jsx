import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuItem from '../menu-item/menu-item.component';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';

import './directory.styles.scss';

const Diretory = ({sections}) => (
    <div className='directory-menu'>
        {/* {this.state.sections.map(({ id, title, imageUrl, size, linkUrl }) => (
        <MenuItem
            key={id}
            title={title.toUpperCase()}
            imageUrl={imageUrl}
            size={size}
            linkUrl={linkUrl}
        />
    ))} */}

        {sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem
                key={id}
                {
                ...otherSectionProps
                }
            />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Diretory);