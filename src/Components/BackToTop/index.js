import React, { PureComponent } from 'react';
import { Transition } from 'react-spring';
import { BackToTopButton, BackToTopIcon } from './UiComponents';

const SCROLL_POSITION_TO_VIEW_CONTROL = 54; // @units 'px'
const SPEED = 5; // @units 'px/ms'
const STEP_DURATION = 10; // @units 'ms'
const STEP = (SPEED * STEP_DURATION); // @units 'px'

class BackToTop extends PureComponent {
    constructor(props) {
        super(props);

        this.handleScroll = this.handleScroll.bind(this);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    state = {
        intervalId: null,
        isVisible: false,
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll); // eslint-disable-line no-undef
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll); // eslint-disable-line no-undef
    }

    handleScroll() {
        const { isVisible } = this.state;
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop; // eslint-disable-line no-undef

        if (scrollPosition < SCROLL_POSITION_TO_VIEW_CONTROL && isVisible) {
            this.setState({
                isVisible: false,
            });
        }

        if (scrollPosition >= SCROLL_POSITION_TO_VIEW_CONTROL && !isVisible) {
            this.setState({
                isVisible: true,
            });
        }
    }

    clearInterval() {
        const { intervalId } = this.state;
        clearInterval(intervalId);

        this.setState({
            intervalId: null,
        });
    }

    scrollToTop() {
        this.clearInterval();

        this.setState({
            intervalId: setInterval(() => {
                const { pageXOffset, pageYOffset, scrollTo } = window; // eslint-disable-line no-undef

                if (pageYOffset === 0) {
                    this.clearInterval();
                }

                scrollTo(pageXOffset, (pageYOffset - STEP));
            }, STEP_DURATION),
        });
    }

    render() {
        const { isVisible } = this.state;
        return (
            <Transition
                from={{ opacity: 0, transform: 'TranslateY(20%)' }}
                enter={{ opacity: 1, transform: 'TranslateY(-120%)' }}
                leave={{ opacity: 0, transform: 'TranslateY(20%)' }}
            >
                {isVisible && ((styles) => (
                    <BackToTopButton style={styles} onClick={this.scrollToTop}>
                        <BackToTopIcon />
                    </BackToTopButton>
                ))}
            </Transition>
        );
    }
}

export default BackToTop;
