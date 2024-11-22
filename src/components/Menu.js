import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkSquare } from '@fortawesome/free-solid-svg-icons'

export default class Menu extends Component {
    render() {
        return(
            
            <div className="menu">
                <div className="symbol cursor-activate">
                    <a href="#intro">KF</a>
                </div>
                <div className="links">
                    <a href="#experience" className="cursor-activate">experience</a>
                    <a href="#projects" className="cursor-activate">projects</a>
                    <a href="https://drive.google.com/file/d/1rFdPznxUpsXNWqjshm8sPamGipuVKUti/view?usp=sharing" target="_blank" className="cursor-activate">resume <FontAwesomeIcon icon={faExternalLinkSquare}/></a>
                </div>
            </div>
            
        )
    }
    
}

/* SCRIPT TO RUN TO DEPLOY */
// npm run deploy -m ""