// import React from 'react';
// import PropTypes from 'prop-types';

// import './List.css';

// export default class Select extends React.Component {

//     render () {
//         return(
//             <label>
//                 <p className="nameOfInput">{this.props.option}</p>
//                 <select onChange={this.props.filterOurData} value={this.props.value}>
//                     <option>Choose vendor</option>
//                     {this.props.unique.map((element) => <option  key={element.toString()}>{element}</option>)}
//                 </select>
//             </label>
//         );
//     } 
// } 

// List.propTypes = {
//     filteredData: PropTypes.object.isRequired,
//     expandParent: PropTypes.func.isRequired,
//     displayChild: PropTypes.string.isRequired,
//     _renderChildren: PropTypes.func.isRequired,
// };