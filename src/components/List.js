import React from 'react';
import PropTypes from 'prop-types';

import './List.css';

const list = (props) => (
            <ul>
                {props.filteredData.nodes.map(element => (
                    <li key={element.id} onClick={() => props.expandParent(element.id)}>
                        {element.name}
                        {element.id === props.displayChild && element.nodes && props._renderChildren(element.nodes)}
                    </li>
                ))}{' '}
            </ul>
)

export default list;

list.propTypes = {
    filteredData: PropTypes.object.isRequired,
    expandParent: PropTypes.func.isRequired,
    displayChild: PropTypes.string.isRequired,
    _renderChildren: PropTypes.func.isRequired,
};