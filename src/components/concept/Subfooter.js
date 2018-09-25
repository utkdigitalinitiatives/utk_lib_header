import React, {Component} from 'react';

export class Subfooter extends Component {

    render() {

        return (
            <div>
                <section className="utk-splash">
                    <span>Vibrant Content</span>
                </section>

                <section className="utk-events-news">
                    <span>Events & News</span>
                </section>

                <section className="utk-social-slider">
                    <span>Social Slider</span>
                </section>

                <footer>
                    <section className="utk-subfooter">
                        <span>UT Libraries Subfooter</span>
                    </section>

                    <section className="utk-footer">
                        <span>UT Footer</span>
                    </section>

                    <section className="utk-superfooter">
                        <span>UT System Superfooter</span>
                    </section>
                </footer>
            </div>
        )
    }
}