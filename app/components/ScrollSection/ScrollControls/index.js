import React from 'react';

import Scroll from 'react-scroll';

import Icon from 'material-ui/svg-icons/hardware/memory';
import GoUpIcon from 'material-ui/svg-icons/action/change-history';
import {teal800, deepOrange500} from 'material-ui/styles/colors';
import styles from './style.scss';


var Link = Scroll.Link;
var scroll = Scroll.animateScroll;

export default class ScrollControls extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            activeSection: "0"
        }
        this.handleSetActive = this.handleSetActive.bind(this);
        this.catchScroll = this.catchScroll.bind(this);
    }

    handleSetActive(to) {
        this.setState({
            activeSection: to
        })
    }

    scrollToTop() {
        scroll.scrollToTop();
    }

    catchScroll(event){
        event.preventDefault(); // Let's stop this event.
        event.stopPropagation(); // Really this time.

        if(event.deltaY > 0){
            scroll.scrollTo(window.innerHeight)
        }else{
            scroll.scrollTo(-window.innerHeight)
        }
    }

    /**
     * Add event listener
     */
    componentDidMount() {
        window.addEventListener("wheel", this.catchScroll);
    }

    /**
     * Remove event listener
     */
    componentWillUnmount() {
        window.removeEventListener("wheel", this.catchScroll);
    }

    render(){
        const {
            links
        } = this.props;

        let dots = [];

        if(links != null)
            dots = links.map((key,i) => {
                return  <Link activeClass="active" to={key} spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive} key={i} >
                            <Icon color={(this.state.activeSection !== key)? teal800 : deepOrange500}/>
                        </Link>
            })
        
        return(
            <div className={styles.scrollDots}>
                <GoUpIcon className={(this.state.activeSection !== "0")?styles.goUpIcon:styles.hidden} color={teal800} hoverColor={deepOrange500} onClick={this.scrollToTop}/>
            </div>
        )
    }
}


