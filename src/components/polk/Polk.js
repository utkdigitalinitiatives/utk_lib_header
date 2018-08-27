import React, {Component} from 'react';
import hero from "../../media/polk-hero.jpg";

export class Polk extends Component {

    render() {

        return (
            <div>
                <div className={`header-image header-image--shrink`}>
                    <div className='header-title'>
                        <div className='utk-container'>
                            <h1>Correspondence of <span className="font-script">James K. Polk</span></h1>
                        </div>
                    </div>
                    <div className='header-image-main' style={{backgroundImage: "url(" + hero + ")"}}></div>
                </div>
                <div className={`utk-header-short`}>
                    <div className='utk-container'>
                        <span className="utk-header-short-title">Correspondence of James K. Polk</span>
                    </div>
                </div>
            </div>
        )
    }
}