import React, { Component } from 'react'
import WarmSeaFilter from './filters/warmseaFilter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faG, faGraduationCap, faLaptopCode, faPalette } from '@fortawesome/free-solid-svg-icons'

export default class Projects extends Component {
    render() {
        return (

            <div className="projects" id="projects">
                <div className="projects-bg"></div>
                <div className="projects-c">
                    <div className="projects-grid-c">



                        <div class="proj-c proj-highlight cursor-activate">
                            <div className='proj-date'>
                                ONGOING
                            </div>
                            <div className="proj-origin">
                                <div className="proj-i">
                                    <FontAwesomeIcon icon={faPalette} />
                                </div>
                                Personal
                            </div>
                            <div class="proj-title">
                                Design Playground
                            </div>
                            <div className="proj-desc">
                                This is a collection of personal web development and design projects in which I continually explore new things in front-end languages and CSS tricks.
                            </div>
                            <div className="proj-stack">
                                <b>JavaScript</b>
                                <b>HTML</b>
                                <b>CSS</b>
                                <b>jquery</b>
                                <b>bootstrap</b>
                                <b>React</b>
                            </div>
                            <a href="https://kristen-foong.github.io/webdev/" target="_blank">
                                <span class="proj-link"></span>
                            </a>
                        </div>

                        <div class="proj-c cursor-activate">
                            <div className='proj-date'>
                                2023
                            </div>
                            <div className="proj-origin">
                                <div className="proj-i">
                                    <FontAwesomeIcon icon={faGraduationCap} />
                                </div>
                                UBC
                            </div>
                            <div class="proj-title">
                                Visualboxd
                            </div>
                            <div className="proj-desc">
                                Course team project that visualizes Letterboxd user statistics and allows stat comparisons between Letterboxd users (it may take a moment to load due to dataset size).
                            </div>
                            <div className="proj-stack">
                                <b>JavaScript</b>
                                <b>TypeScript</b>
                                <b>HTML</b>
                                <b>CSS</b>
                                <b>d3.js</b>
                            </div>
                            <a href="https://kristen-foong.github.io/visualboxd/" target="_blank">
                                <span class="proj-link"></span>
                            </a>
                        </div>

                        <div class="proj-c priv cursor-activate">
                            <div className='proj-date'>
                                2021
                            </div>
                            <div className="proj-origin">
                                <div className="proj-i">
                                    <FontAwesomeIcon icon={faGraduationCap} />
                                </div>
                                UBC
                            </div>
                            <div class="proj-title">
                                UBC Insight App
                            </div>
                            <div className="proj-desc">
                                A full-stack RESTful web server that queries and parses UBC course and classroom data from JSON and HTML files.
                            </div>
                            <div className="proj-stack">
                                <b>JavaScript</b>
                                <b>TypeScript</b>
                                <b>HTML</b>
                                <b>CSS</b>
                                <b>JSON</b>
                            </div>
                        </div>

                        <div class="proj-c priv cursor-activate">
                            <div className='proj-date'>
                                2021
                            </div>
                            <div className="proj-origin">
                                <div className="proj-i">
                                    <FontAwesomeIcon icon={faLaptopCode} />
                                </div>
                                hackathon
                            </div>
                            <div class="proj-title">
                                covid info webpage
                            </div>
                            <div className="proj-desc">
                                A web page created with the intent of interfacing Covid API data. Created with a remote team at nwHacks 2021. 
                            </div>
                            <div className="proj-stack">
                                <b>React</b>
                                <b>HTML</b>
                                <b>CSS</b>
                            </div>
                        </div>

                        <div class="proj-c cursor-activate">
                            <div className='proj-date'>
                                2020
                            </div>
                            <div className="proj-origin">
                                <div className="proj-i">
                                    <FontAwesomeIcon icon={faLaptopCode} />
                                </div>
                                hackathon
                            </div>
                            <div class="proj-title">
                                Finance Guide for Girls
                            </div>
                            <div className="proj-desc">
                                A site meant to educate an audience of young girls interested in learning basic financial skills. Created at Cmd-f 2020. 
                            </div>
                            <div className="proj-stack">
                                <b>HTML</b>
                                <b>CSS</b>
                            </div>
                            <a href="https://kristen-foong.github.io/cmd-f-2020/" target="_blank">
                                <span class="proj-link"></span>
                            </a>
                        </div>

                        <div class="proj-c cursor-activate">
                            <div className='proj-date'>
                                2019
                            </div>
                            <div className="proj-origin">
                                <div className="proj-i">
                                    <FontAwesomeIcon icon={faLaptopCode} />
                                </div>
                                hackathon
                            </div>
                            <div class="proj-title">
                                Waitlist Organizer
                            </div>
                            <div className="proj-desc">
                                A Java program to organize a waitlist in patient priority order. Created at UBC Local Hack Day 2019 with a team of five. 
                            </div>
                            <div className="proj-stack">
                                <b>Java</b>
                            </div>
                            <a href="https://github.com/kristen-foong/ubclocalhackday2019" target="_blank">
                                <span class="proj-link"></span>
                            </a>
                        </div>

                        <div class="proj-c cursor-activate">
                            <div className='proj-date'>
                                2018
                            </div>
                            <div className="proj-origin">
                                <div className="proj-i">
                                    <FontAwesomeIcon icon={faGraduationCap} />
                                </div>
                                Langara
                            </div>
                            <div class="proj-title">
                                Fire Emblem TD
                            </div>
                            <div className="proj-desc">
                                A Tower Defense game inspired by Fire Emblem that incorporates collision detection, arrays, and object-oriented programming.
                            </div>
                            <div className="proj-stack">
                                <b>JavaScript</b>
                                <b>HTML</b>
                                <b>CSS</b>
                            </div>
                            <a href="https://kristen-foong.github.io/intro-to-web-programming/fetd/TermProject/" target="_blank">
                                <span class="proj-link"></span>
                            </a>
                        </div>

                    </div>
                </div>
                <div className="footer">
                    Copyright © 2023 Kristen Foong. Developed in VS Code. Built with React. This site is best viewed in Google Chrome.
                </div>
                <WarmSeaFilter />
            </div>

        )
    }

}