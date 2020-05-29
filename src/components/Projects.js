import React from "react";
import PROJECTS from "../data/project";/*{ Component */ 

const Project = (props) => {
    /*const title = this.props.project.title;
    const image = this.props.project.image;*/
    const {title,image,description,link} = props.project;
        return(
            <div style = {{display: 'inline-block',width:300,margin:10}}>
                <h3>{title}</h3>
                <img src = {image} alt = "profile" style = {{width: 200, height: 120}}/>
                <p>{description}</p>
                <a href = {link}>{link}</a>
            </div>
        )
    }

const Projects = () =>(
            <div>
                <h2>HIGHLIGHTED PROJECTS</h2>
                <div>
                {
                    PROJECTS.map(project =>{
                        return (<Project key = {project.id} project = {project}/>
                        ); 
                    })
                }   
                </div>
            </div>
        )

export default Projects;