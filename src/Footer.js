import React, {Component} from 'react';

/* header component */
class Footer extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    };

    render() {

        return (
            <React.Fragment>
                <section>libraries</section>
                <section>university</section>
                <section>system</section>
            </React.Fragment>
        );
    }
}

export default Footer;
