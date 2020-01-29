import React from 'react';
import Location from './Location';

export default class Locations extends React.Component {
    render() {
        const locationsMapped = this.props.locations.map((location, index) => {
            return (
                <Location 
                    location={location} key={index}
                    retrieveLocations={this.props.retrieveLocations}
                />
            )
        }).reverse();

        return (
            <section>
                <h1>List of Places</h1>
                {locationsMapped}
            </section>
        )
    }
}