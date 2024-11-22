import React, {Component} from 'react'
import WarmSeaFilter from './filters/warmseaFilter'

export default class Intro extends Component {
    render() {
        return(
            
            <div className="intro" id="intro">
                <div className="intro-bg"></div>
                <WarmSeaFilter/>
                <div className="intro-c">
                    <div className="intro-p">
                        <div className="hi">
                            Hi, I'm Kristen,
                        </div>
                        <div className="desc">
                        <p>A recent graduate with a Bachelor of Science in <span><b>Computer Science</b></span> from 
                        the University of British Columbia.</p>
                        <p>I'm passionate about <span><b>design</b></span> and <span><b>tech</b></span>, 
                        whether it's in web development, software engineering or UX/UI.</p>
                        <p>When I'm not coding, I enjoy <span><b>travelling</b></span> and playing <span><b>piano</b></span>.</p>
                        </div>
                        <div className="intro-fact">
                            <b>Fun fact:</b> All the images on this site are from my travels.
                            <br></br>Behind this text is <b>Himeji Castle</b> from Himeji, Japan. Aug 2023.
                            <p>This site is best viewed in Google Chrome on a desktop.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}