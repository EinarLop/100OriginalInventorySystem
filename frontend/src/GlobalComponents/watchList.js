import axios from 'axios';
import React, { Component } from 'react';
import Product from '../Inventory/product';

class WatchList extends Component {
    constructor(props) {
        super(props);


        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            watches: [],
            id_platform: '',
            name: ''

        
        
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3010/product')
            .then(response => {
                this.setState({watches: response.data})
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChange(e, val) {
        this.setState({
            [val]: e.target.value
        });

    }

    onSubmit(e) {
        e.preventDefault();

        const platform = {
            id_platform: this.state.id_platform,
            name: this.state.name
            // id_platform: 123,
            // name: "Mercad2"
        }

        axios.post('http://localhost:3010/platform', platform)
            .then(res => console.log(res.data));
    }


    render() { 
                return (
        <div>
                {this.state.watches.map(watch => <Product productCode={watch.product_name} />)}
            
                <input type="text" onChange={(e) => this.onChange(e, "id_platform")}/>
                <input type="text" onChange={(e) => this.onChange(e, "name")} />
                <button onClick={this.onSubmit}>Submit</button>
        </div>
        
        
        );

        }
    }
 
export default WatchList;