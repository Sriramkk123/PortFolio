import React, { Component } from "react";

const TITLES = [
    "A Software Engineering Student",
    "A Music Lover",
    "An Enthusiast Learner",
    "Peace Lover"
];

class Title extends Component{
    state = { titleIndex:0, fadeIn:true};

    componentDidMount(){
        this.timeout = setTimeout(()=> this.setState({fadeIn:false}),2000);
        console.log('Title mounted');

        this.animateTitles();
    }

    componentWillUnmount(){
        console.log('Title unmounted');
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);
    }

    animateTitles = () =>{
        this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1)%TITLES.length;
            this.setState({titleIndex, fadeIn:true});
            setTimeout(() => {
           this.timeout = setTimeout(()=> this.setState({fadeIn:false}),1000);
        }, 2000);
        }, 4000);
         console.log("this.interval",this.titleInterval);
    }

   
    render(){
        const {titleIndex, fadeIn} = this.state;
        const title = TITLES[titleIndex];
        return(
            <p className = {fadeIn ? 'title-fade-in' : 'title-fade-out'}>I am {title}</p>
        )
    }
}

export default Title;