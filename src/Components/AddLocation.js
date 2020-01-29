import React from 'react';
import axios from 'axios';

export default class AddLocation extends React.Component {
    constructor() {
        super();
        this.state = {
            country: '',
            city: '', 
            imgURL: '',
            favorite: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleClick() {
        axios
            .post('/api/locations', this.state)
            .then(res => this.props.retrieveLocations(res.data))
            .catch(err => console.log(err));
    }
    render() {
        return (
            <section>
                <p>Add New Location:</p>
                <input 
                    name='country'
                    placeholder='enter country'
                    onChange={this.handleChange}
                />
                <input 
                    name='city'
                    placeholder='enter city'
                    onChange={this.handleChange}
                />
                <input 
                    name='imgURL'
                    placeholder='enter image URL'
                    onChange={this.handleChange}
                />
                <button 
                    onClick={this.handleClick}
                    disabled={
                        this.state.country && this.state.city && this.state.imgURL
                        ? false : true}
                >Submit</button>
            </section>
        )
    }
}