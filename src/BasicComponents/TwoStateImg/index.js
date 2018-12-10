import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-spring';
import { Img, ImgWrapper } from 'BasicComponents/TwoStateImg/UiComponents';

class TwoStateImg extends Component {
    state = {
        toggle: false,
    };

    toggleOnHoveredState = () => {
        this.setState({ toggle: true });
    };

    toggleOffHoveredState = () => {
        this.setState({ toggle: false });
    };

    render() {
        // const { img } = this.props;
        const { toggle } = this.state;
        const { images: [firstImg, secondImg] } = this.props;
        return (
            <ImgWrapper onMouseEnter={this.toggleOnHoveredState} onMouseLeave={this.toggleOffHoveredState}>
                <Transition
                    items={toggle}
                    from={{ opacity: 0, display: 'block' }}
                    enter={{ opacity: 1 }}
                    leave={{ opacity: 0, display: 'none' }}
                >
                    {(toggled) => (toggled
                        ? (props) => <Img style={props} src={firstImg} alt="" />
                        : (props) => <Img style={props} src={secondImg} alt="" />
                    )}
                </Transition>
            </ImgWrapper>
        );
    }
}

TwoStateImg.propTypes = {

};

export default TwoStateImg;
