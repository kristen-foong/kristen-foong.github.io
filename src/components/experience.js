import React, { Component } from 'react'
import WarmSeaFilter from './filters/warmseaFilter'

export default class Experience extends Component {
    render() {
        return (

            <div className="experience" id="experience">
                <div className="experience-bg"></div>
                <WarmSeaFilter />
                <div className="experience-c">

                    <div className="exp-cc">
                        <div className="exp-c">
                            <div className="exp-company">
                                <a href="https://ascenticorp.com/" target="_blank" className="cursor-activate">Ascenti Software Corporation</a>
                            </div>
                            <div className="exp-job">
                                <span><b>junior front-end developer</b></span>
                            </div>
                            <div className="exp-desc">
                                Implemented quality-of-life features for users and worked in both front-end and back-end of the application for bug fixes. Collaborated in an Agile environment.
                            </div>
                        </div>
                        <div className="exp-date" id="sticky">
                            2023
                        </div>
                    </div>

                    <div className="exp-cc">
                        <div className="exp-c">
                            <div className="exp-company">
                                <a href="https://later.com/" target="_blank" className="cursor-activate">Later.com</a>
                            </div>
                            <div className="exp-job">
                                <span><b>front-end developer co-op</b></span>
                            </div>
                            <div className="exp-desc">
                                Delivered a feature based on aggregated user feedback data that allows users to upload an image from their device
                                and set it as their Linkin.bio page background. Developed the project spec and delegated tasks to team members. Solved incident tickets with quick turnaround and communicated often with QA.
                            </div>
                        </div>
                        <div className="exp-date" id="sticky">
                            2022
                        </div>
                    </div>

                    <div className="exp-cc">
                        <div className="exp-c">
                            <div className="exp-company">
                                <a href="https://webservices.it.ubc.ca/" target="_blank" className="cursor-activate">UBC IT WEB SERVICES</a>
                            </div>
                            <div className="exp-job">
                                <span><b>IT / Web Services Co-Op</b></span>
                            </div>
                            <div className="exp-desc">
                                Executed version control updates for UBC sites with Drupal core and modules to improve site security.
                                Created online documentation to facilitate Drupal core version migration updates across 30+ UBC sites.
                            </div>
                        </div>
                        <div className="exp-date">
                            2021
                        </div>
                    </div>

                    <div className="exp-cc">
                        <div className="exp-c">
                            <div className="exp-company">
                                <a href="https://utgacademy.com/" target="_blank" className="cursor-activate">Under The GUI Academy</a>
                            </div>
                            <div className="exp-job">
                                <span><b>Coding Instructor</b></span>
                            </div>
                            <div className="exp-desc">
                                Taught beginner and intermediate Python, Java, and HTML/CSS to students aged 8-16. Organized lesson plans and communicated with parents regarding future coding goals.
                            </div>
                        </div>
                        <div className="exp-date">
                            2020
                        </div>
                    </div>

                    <div className="exp-cc">
                        <div className="exp-c">
                            <div className="exp-company">
                                <a href="https://cps.med.ubc.ca/" target="_blank" className="cursor-activate">UBC CPS DEPT</a>
                            </div>
                            <div className="exp-job">
                                <span><b>student it / web assistant</b></span>
                            </div>
                            <div className="exp-desc">
                                Updated faculty WordPress sites. Performed on-site troubleshooting and installed software and hardware upgrades across faculty computers and department buildings.
                            </div>
                        </div>
                        <div className="exp-date">
                            2019
                        </div>
                    </div>

                    <div className="exp-cc">
                        <div className="exp-c">
                            <div className="exp-company">
                                <a href="https://www.ilm.com/" target="_blank" className="cursor-activate">Industrial Light & Magic</a>
                            </div>
                            <div className="exp-job">
                                <span><b>technology intern</b></span>
                            </div>
                            <div className="exp-desc">
                                Repaired equipment in the IT department and upgraded the hardware and software for company computers and
                                workstations. Managed asset inventory and resolved incident tickets daily with on-site troubleshooting and remote monitoring.
                            </div>
                        </div>
                        <div className="exp-date">
                            2019
                        </div>
                    </div>

                    <div className="exp-cc">
                        <div className="exp-c">
                            <div className="exp-company">
                                <a href="https://digitalmediaacademy.org/" target="_blank" className="cursor-activate">Digital media Academy</a>
                            </div>
                            <div className="exp-job">
                                <span><b>Teaching Assistant</b></span>
                            </div>
                            <div className="exp-desc">
                                Assisted in teaching children aged 10-16 to make mods using Java for Minecraft.
                            </div>
                        </div>
                        <div className="exp-date">
                            2018
                        </div>
                    </div>

                    <div className="exp-cc">
                        <div className="exp-c">
                            <div className="exp-company">
                                <a href="https://vass.ca/" target="_blank" className="cursor-activate">Vancouver Adaptive Snow Sports</a>
                            </div>
                            <div className="exp-job">
                                <span><b>Volunteer Ski Instructor</b></span>
                            </div>
                            <div className="exp-desc">
                                Taught and created lesson plans for children with disabilities and assisted them in skiing on bunny hill to blue slopes.
                            </div>
                        </div>
                        <div className="exp-date">
                            ongoing
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}
