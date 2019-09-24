import React, {Component} from 'react';

class SpaceHoursTime extends Component {

    render() {
        const {lid, day} = this.props;

        return (
            <React.Fragment>
                <div className="utk-space--time">
                    <span className="utk-space--time--indicator"></span>
                    <span className="utk-space--time--span">8am - 6pm</span>
                </div>
            </React.Fragment>
        )
    }
}

export default SpaceHoursTime;
