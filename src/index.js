import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Jokes from './components/Jokes';
import MusicMaster from './projects/music-master';
import Header from "./components/Header";
//import history from 'histor/createBrowseHistory'
//history = createBrowseHistory();
//<Router history = history()>

ReactDOM.render(
<BrowserRouter>  
    <Switch>
        <Route path = "/" exact = {true} render = {() => <Header Component = {App}></Header>}/>
        <Route path = "/jokes" render = {() => <Header Component = {Jokes}></Header>}/>
        <Route path = '/music-master' render = {() => <Header Component = {MusicMaster}> </Header>}/>
    </Switch>
</BrowserRouter>,
document.getElementById('root')
);


// also can use <Header></App></Header>

