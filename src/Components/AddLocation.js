import React from 'react';

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
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    render() {
        return (
            <section>
                <p>AddLocation Component</p>
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
            </section>
        )
    }
}