import React, {Component} from 'react';

class SpaceHoursTime extends Component {

    render() {
        const {lid, day} = this.props;

        return (
            <React.Fragment>
                <p>{lid}</p>
                <p>{day}</p>
            </React.Fragment>
        )
    }
}

export default SpaceHoursTime;
