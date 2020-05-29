import React,{ Component} from "react";
//import Header from "./Header";
//<Header />

const Joke = ({joke}) =>{
    const {setup,punchline} = joke;

    return  <p style = {{margin:20}}>{setup} <em>{punchline}</em></p>
}
class Jokes extends Component{
    state = {joke:{}, jokes:[]};
    
    componentDidMount(){
        fetch("http://official-joke-api.appspot.com/random_joke")
        .then(response => {
            return response.json()
        }).then(json => this.setState({joke : json}))
        .catch(error => alert(error.message));
    }

    fetchJokes = () =>{
        fetch("http://official-joke-api.appspot.com/random_ten")
        .then(response => response.json())
        .then(json => this.setState({jokes: json}))
        .catch(error => alert(error.message));
    }

    render(){
        return(
            <div>
            <h2>Highlighted Joke</h2>
                <Joke joke = {this.state.joke}/>
                <hr/>
                <h3>Want ten new jokes</h3>
                <button onClick = {this.fetchJokes}>Click me!</button>
                {
                    this.state.jokes.map(joke =>{
                            return (
                                <Joke key = {joke.id} joke = {joke} />
                            )
                    })
                }
            </div>
        )
    }
}
export default Jokes;
