import React,{Component} from 'react';
import Projects from "./Projects";
import SocialProfiles from './SocialProfiles';
import profiles from '../assets/Sriram.jpeg';
import Title from "./Title";
//import Header from "./Header";
//import Jokes from './Jokes';
 /*<Jokes />*/
class App extends Component{

    /*constructor(){
        super();
        this.state = { displayBio : false };
        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    }

    toggleDisplayBio(){
        this.setState({displayBio: !this.state.displayBio});
    }*/

    state = {displayBio: false};
    toggleDisplayBio = () =>{
        this.setState({displayBio: !this.state.displayBio});
    }
    render(){
        return(
            <div>
            <img src = {profiles} alt = "profile" className = "profile"/>
                <h1>Hello</h1>
                <p>Hi , I am Sriram and Im a Information Science Student</p>
                <Title />
                <p>I always look forward to learn new things</p>
                {
                this.state.displayBio ?(
            <div>
                <p>I live in Bangalore</p>
                <p>I love to code and its fun coding</p>
                <p>Besides coding,I love music and have completed a Junior exam in Carnatic Classical Music and also played Cricket for UVCE as well as my Pre-University</p>
                <button onClick = {this.toggleDisplayBio} className = "read-less">Read Less</button>
            </div>
                ): (
                    <div>
                        <button onClick = {this.toggleDisplayBio} className = "read-more">Read More</button>
                    </div>
                )
                }
                <Projects/>
                <SocialProfiles />
            </div>
        )
    }
}

/*const appWithHeader = () =>{
    return (
        <Header Component = {App}/>
    )
}*/
//export default appWithHeader;
export default App;