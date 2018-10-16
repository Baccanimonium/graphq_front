import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Transition, animated } from 'react-spring';
import { ShortcutWrapper, SliderWrapper, GridSliderWrapper, ShortcutContaner } from './UiComponents';
import memoize from 'memoize-one';

const slideStyles = {
    position: 'absolute',
    width: '100%',
    height: '100%',
};

class Slider extends Component {
    constructor(props) {
        super(props);
        const { children } = props;
        const slides = children.map((item) => (styles) => (
            <animated.div style={{ ...slideStyles, ...styles }}>{item}</animated.div>
        ));
        this.state = {
            current: 0,
            slides,
        };
    }

    componentDidMount() {
        setInterval(() => this.setState((prevState, props) => {
            const nextSlide = prevState.current + 1 < props.children.length ? prevState.current + 1 : 0;
            return ({
                current: nextSlide,
            });
        }), 3000);
    }

    renderCarousel = () => {
        const { current, slides } = this.state;

        return (
            <Transition
                keys={Math.random()}
                from={{ opacity: 0, transform: 'translateX(100%)' }}
                enter={{ opacity: 1, transform: 'translateX(0%)' }}
                leave={{ opacity: 0, transform: 'translateX(-50%)' }}
            >
                {slides[current]}
            </Transition>
        )
    }

    render() {
        const { current, slides } = this.state;
        const { children } = this.props;

        const subSlides = children.map((item, index) => (
            <ShortcutContaner key={index} current={index === current}>{item}</ShortcutContaner>
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
        // return (
        //     <SliderWrapper>
        //         {this.renderCarousel()}
        //         <div>
        //             {subSlides}
        //         </div>
        //     </SliderWrapper>
        // );
    }
}

Slider.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Slider;
