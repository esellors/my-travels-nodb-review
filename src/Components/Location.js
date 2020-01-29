import React from 'react';
import axios from 'axios';

export default class Location extends React.Component {
    constructor() {
        super();
        this.state = {
            expand: false
        }
        this.toggleExpand = this.toggleExpand.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleFav = this.handleFav.bind(this);
    }
    toggleExpand() {
        this.setState({ expand: !this.state.expand})
    }
    handleDelete() {
        axios
            .delete(`/api/locations/${this.props.location.id}`)
            .then(res => this.props.retrieveLocations(res.data))
            .catch(err => console.log(err));
    }
    handleFav() {
        axios
            .put(`/api/locations/${this.props.location.id}`)
            .then(res => this.props.retrieveLocations(res.data))
            .catch(err => console.log(err))
    }
    render() {
        const {country, city, favorite, imgURL} = this.props.location;

        return (
            <section key={this.props.key}>
                {
                    favorite
                        ? <img src='https://findicons.com/files/icons/2118/nuvola/128/services.png' alt='star' />
                        : null
                }
                <h3 onClick={this.toggleExpand}>{country}, {city}</h3>
                {
                    this.state.expand
                        ? 
                            <>
                                <img src={imgURL} alt='My Place' />
                                <br />
                                <button onClick={this.handleFav}>TOGGLE FAV</button>
                                <button onClick={this.handleDelete}>DELETE</button>
                            </>
                        : null
                }
            </section>
        )
    }
}