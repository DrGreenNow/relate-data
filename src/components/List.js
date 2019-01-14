import React from 'react';
import PropTypes from 'prop-types';

import './List.css';

export default class List extends React.Component {

    render () {
        return(
            <ul>
                {this.props.filteredData.nodes.map(element => (
                    <li key={element.id} onClick={() => this.props.expandParent(element.id)}>
                        {element.name}
                        {element.id === this.props.displayChild && element.nodes && this.props._renderChildren(element.nodes)}
                    </li>
                ))}{' '}
            </ul>
        );
    } 
} 

List.propTypes = {
    filteredData: PropTypes.object.isRequired,
    expandParent: PropTypes.func.isRequired,
    displayChild: PropTypes.string.isRequired,
    _renderChildren: PropTypes.func.isRequired,
};