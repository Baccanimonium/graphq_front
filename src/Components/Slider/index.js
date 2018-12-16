import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Transition, animated } from 'react-spring';
import shortId from 'shortid';

import { ShortcutWrapper, SliderWrapper, GridSliderWrapper, ShortcutContaner } from './UiComponents';

const slideStyles = {
    position: 'absolute',
    width: '100%',
    height: '100%',
};

class Slider extends Component {
    static propTypes = {
        children: PropTypes.arrayOf(PropTypes.element).isRequired,
    };

    state = {
        current: 0,
    };

    componentDidMount() {
        setInterval(() => this.setState((prevState, props) => {
            const nextSlide = prevState.current + 1 < props.children.length ? prevState.current + 1 : 0;
            return ({
                current: nextSlide,
            });
        }), 3000);
    }

    renderCarousel = () => {
        const { current } = this.state;
        const { children } = this.props;
        return (
            <Transition
                items={children[current]}
                keys={shortId.generate()}
                from={{ opacity: 0, transform: 'translateX(100%)' }}
                enter={{ opacity: 1, transform: 'translateX(0%)' }}
                leave={{ opacity: 0, transform: 'translateX(-50%)' }}
            >
                {(slide) => (props) => <animated.div style={{ ...slideStyles, ...props }}>{slide}</animated.div>}
            </Transition>
        );
    };

    render() {
        const { current } = this.state;
        const { children } = this.props;

        const subSlides = children.map((item, index) => (
            <ShortcutContaner key={shortId.generate()} current={index === current}>{item}</ShortcutContaner>
        ));

        return (
            <GridSliderWrapper>
                <SliderWrapper>
                    {this.renderCarousel()}
                </SliderWrapper>
                <ShortcutWrapper>
                    {subSlides}
                </ShortcutWrapper>
            </GridSliderWrapper>
        );
    }
}

export default Slider;
