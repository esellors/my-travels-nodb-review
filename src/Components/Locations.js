import React from 'react';
import axios from 'axios';

export default class Locations extends React.Component {
    constructor() {
        super();
        this.state = {
            locations: []
        };
    }
    componentDidMount() {
        axios
            .get('/api/locations')
            .then(res => this.setState({ locations: res.data }))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <></>
        )
    }
}