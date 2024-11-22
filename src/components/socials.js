import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'

export default class Socials extends Component {
    render() {
        return (

            <div className="socials">
                <a href="https://www.linkedin.com/in/kristen-foong/" target="_blank" className="cursor-activate">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/kristen-foong" target="_blank" className="cursor-activate">
                    <FontAwesomeIcon icon={faGithubAlt} />
                </a>
            </div>

        )
    }
}