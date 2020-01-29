import React from 'react';

export default class Locations extends React.Component {
    render() {
        const locationsMapped = this.props.locations.map((location, index) => {
            return (
                <h3 key={index}>{location.country},{location.city}</h3>
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