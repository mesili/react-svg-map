import React from 'react';
import { SVGMap, Seoul } from '../../../src/';
import { getLocationId, getLocationName } from '../utils';
import '../../../src/svg-map.scss';

class SeoulMap extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pointedLocation: null,
            focusedLocation: null,
            clickedLocation: null
        };

        this.handleLocationMouseOver = this.handleLocationMouseOver.bind(this);
        this.handleLocationMouseOut = this.handleLocationMouseOut.bind(this);
        this.handleLocationClick = this.handleLocationClick.bind(this);
        this.handleLocationFocus = this.handleLocationFocus.bind(this);
        this.handleLocationBlur = this.handleLocationBlur.bind(this);
    }

    handleLocationMouseOver(event) {
        const pointedLocation = getLocationName(event);
        this.setState({ pointedLocation: pointedLocation });
    }

    handleLocationMouseOut() {
        this.setState({ pointedLocation: null });
    }

    handleLocationClick(event) {
        const clickedLocation = getLocationName(event);
        const clickedLocationId = getLocationId(event);
        this.setState({ clickedLocation: clickedLocation });
    }

    handleLocationFocus(event) {
        const focusedLocation = getLocationName(event);
        this.setState({ focusedLocation: focusedLocation });
    }

    handleLocationBlur() {
        this.setState({ focusedLocation: null });
    }

    render() {
        return (
            <article className="examples__block">
                <h2 className="examples__block__title">
                    Seoul, South Korea SVG map
                </h2>
                <div className="examples__block__info">
                    <div className="examples__block__info__item">
                        Pointed location: {this.state.pointedLocation}
                    </div>
                    <div className="examples__block__info__item">
                        Focused location: {this.state.focusedLocation}
                    </div>
                    <div className="examples__block__info__item">
                        Clicked location: {this.state.clickedLocation}
                    </div>
                </div>
                <div className="examples__block__map">
                    <SVGMap
                        map={Seoul}
                        type="link"
                        onLocationMouseOver={this.handleLocationMouseOver}
                        onLocationMouseOut={this.handleLocationMouseOut}
                        onLocationClick={this.handleLocationClick}
                        onLocationFocus={this.handleLocationFocus}
                        onLocationBlur={this.handleLocationBlur} />
                </div>
            </article>
        );
    }
}

export default SeoulMap;
