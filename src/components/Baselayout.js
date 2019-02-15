import React from 'react';
import PropTypes from 'prop-types';

class Baselayout extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                {this.props.children} 
            </div>
        );
    }
}


Baselayout.propTypes = {
    
};

export default Baselayout
