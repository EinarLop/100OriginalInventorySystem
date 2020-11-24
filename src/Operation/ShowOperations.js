import React, { Component } from 'react';

import Operation from "./Components/Operation"

class ShowOperations extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div>
            
            <Operation/>
            
        </div> );
    }
}
 
export default ShowOperations;