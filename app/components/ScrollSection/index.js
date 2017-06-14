import React from 'react';
import ReactDOM from 'react-dom';
import Scroll from 'react-scroll';

var Link       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

import ScrollControls from './ScrollControls';
import styles from './style.scss';

export default class ScrollSection extends React.Component {

    catchScroll(event){
        event.preventDefault(); // Let's stop this event.
        event.stopPropagation(); // Really this time.

        if(event.deltaY > 0){
            scroll.scrollTo(window.scrollY + window.innerHeight)
        }else{
            scroll.scrollTo(window.innerHeight)
        }
    }

    /**
     * Add event listener
     */
    componentDidMount() {
        scrollSpy.update();
        window.addEventListener("wheel", this.catchScroll);
    }

    /**
     * Remove event listener
     */
    componentWillUnmount() {
        window.removeEventListener("wheel", this.catchScroll);
    }

    render(){
        const links = [];
        const section = React.Children.map(this.props.children, (ch, i) => {
                    i = "" + i;
                    links.push(i);
                    return <Element name={i}> {React.cloneElement(ch)} </Element>
                })
        return(
            <div className={styles.scrollContainer}>
                <ScrollControls links={links}/>
                {section}
            </div>
        )
    }
}            