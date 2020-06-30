import React from 'react'
import './Projects.css';
import movie from "../images/movie_app.png"
import momentum from "../images/Momentum.png"
import paintJS from "../images/paintJS.png"
import uride1 from "../images/URide1.png"
import uride2 from "../images/URide2.png"

class Projects extends React.Component {


    render() {
        return <div className="proj" id="skills" >
            <div className="intro">
                <div className="proj_skills_list">
                    <h1 className="proj_skill">SKILLS</h1>
                    <span className="proj_title" >FRONT-END</span>
                    <div className="proj_icons" >
                        <div className="proj_align_icon">
                            <img src="https://puredevper.s3.amazonaws.com/HTML.png" alt="HTML" className="proj_fe_icon"></img>
                            <span className="proj_fe_name">HTML</span>
                        </div>
                        <div className="proj_align_icon">
                            <img src="https://puredevper.s3.amazonaws.com/CSS.png" alt="CSS" className="proj_fe_icon"></img>
                            <span className="proj_fe_name">CSS</span>
                        </div>
                        <div className="proj_align_icon">
                            <img src="https://puredevper.s3.amazonaws.com/JavaScript.png" alt="JavaScript" className="proj_fe_icon"></img>
                            <span className="proj_fe_name">JavaScript</span>
                        </div>
                        <div className="proj_align_icon">
                            <img src="https://puredevper.s3.amazonaws.com/React.png" alt="React" className="proj_fe_icon"></img>
                            <span className="proj_fe_name">React</span>
                        </div>
                    </div>
                    <span className="proj_title" >BACK-END</span>
                    <div className="proj_icons" >
                        <div className="proj_align_icon">
                            <img src="https://puredevper.s3.amazonaws.com/Node.png" alt="Node.js" className="proj_fe_icon"></img>
                            <span className="proj_fe_name">Node.js</span>
                        </div>
                        <div className="proj_align_icon">
                            <img src="https://puredevper.s3.amazonaws.com/MySQL.png" alt="MySQL" className="proj_fe_icon"></img>
                            <span className="proj_fe_name">MySQL</span>
                        </div>
                        <div className="proj_align_icon">
                            <img src="https://puredevper.s3.amazonaws.com/MongoDB.png" alt="MongoDB" className="proj_fe_icon"></img>
                            <span className="proj_fe_name">MongoDB</span>
                        </div>
                    </div>
                    <span className="proj_title" >OTHERS</span>
                    <div className="proj_icons" >
                        <div className="proj_align_icon">
                            <img src="https://puredevper.s3.amazonaws.com/Java.png" alt="Node.js" className="proj_fe_icon"></img>
                            <span className="proj_fe_name">Java</span>
                        </div>
                        <div className="proj_align_icon">
                            <img src="https://puredevper.s3.amazonaws.com/C.png" alt="MySQL" className="proj_fe_icon"></img>
                            <span className="proj_fe_name">C</span>
                        </div>
                        <div className="proj_align_icon">
                            <img src="https://puredevper.s3.amazonaws.com/Cplusplus.png" alt="MongoDB" className="proj_fe_icon"></img>
                            <span className="proj_fe_name">C++</span>
                        </div>
                        <div className="proj_align_icon">
                            <img src="https://miro.medium.com/max/300/1*R4c8lHBHuH5qyqOtZb3h-w.png" alt="MongoDB" className="proj_fe_icon"></img>
                            <span className="proj_fe_name">Firebase</span>
                        </div>
                    </div>
                    <div className="proj_proj">
                        <span className="proj_proj_name" id="projects">Projects</span>
                        <span className="proj_title">Application projects</span>

                        <div className="proj_proj_intro">
                            <div className="slide_container">
                                {/* <Slide className="proj_img"  {...properties}> */}
                                <img src={uride1} alt="MongoDB" className="slide_images"   ></img>
                                <img src={uride2} alt="MongoDB" className="slide_images"   ></img>
                                {/* </Slide> */}
                            </div>
                            <div className="proj_proj_text">
                                <div className="proj_proj_title">
                                    URIDE
                                <div>
                                        {/* <a href="https://polarmushroom.github.io/movie_app/     " target="_blank" rel="noopener noreferrer" className="proj_button">DEMO</a>
                                <a href="https://github.com/PolarMushroom/movie_app" target="_blank" rel="noopener noreferrer" className="proj_button">CODE</a> */}
                                    </div>
                                </div>
                                <span className="proj_text">I created a full-stack and scalable Uber replica, which allows users to get full authentication whether which register, lost password, and get different priorities on each account.  Each user gets to choose whether they are drivers or customers. They can set their profile and even upload their photo. Customers can choose which type of car they want and it charges differently. I implemented google map so customer can check their destination and where is driver. Driver can get customer signals with their location vice versa. Customers get to pay with the distance they traveled with the driver with little extra for interest. Database saves location drivers picked customers up and charges customers when they said driving ends. Customer can pay their payment with Paypal or Credit card. Everything happens in real-time. All backends are built with firebase including user authentication.
                        <div className="proj_proj_skills">
                                        <span className="skill_name">Android</span>
                                        <span className="skill_name">Google Service</span>
                                        <span className="skill_name">HTML</span>
                                        <span className="skill_name">Firebase</span>
                                        <span className="skill_name">Full Authentication</span>
                                        <span className="skill_name">Real-Time</span>
                                        <span className="skill_name">Storage</span>
                                        <span className="skill_name">Paypal</span>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>

                    <span className="proj_title">web projects</span>
                    <div className="proj_proj_intro">
                        <img src={movie} alt="MongoDB" className="proj_img"></img>
                        <div className="proj_proj_text">
                            <div className="proj_proj_title">
                                MOVIE WORLD
                                <div>
                                    <a href="https://polarmushroom.github.io/movie_app/     " target="_blank" rel="noopener noreferrer" className="proj_button">DEMO</a>
                                    <a href="https://github.com/PolarMushroom/movie_app" target="_blank" rel="noopener noreferrer" className="proj_button">CODE</a>
                                </div>
                            </div>
                            <span className="proj_text">I developed a web application which offers Movie and TV show information using The MOVIE DB. The Movie page shows movie poster and brief summary of the movie such as year it published and genre. Each Movie and each TV show has their own detail page, which offers program information.</span>
                            <div className="proj_proj_skills">
                                <span className="skill_name">react</span>
                                <span className="skill_name">react router</span>
                                <span className="skill_name">style components</span>
                                <span className="skill_name">axios</span>
                            </div>
                        </div>
                    </div>

                    <div className="proj_proj_intro">
                        <img src={momentum} alt="Momentum" className="proj_img"></img>
                        <div className="proj_proj_text">
                            <div className="proj_proj_title">
                                Momentum
                                <div className="proj_src_buttons">
                                    <a href="https://polarmushroom.github.io/Momentum/" target="_blank" rel="noopener noreferrer" className="proj_button">DEMO</a>
                                    <a href="https://github.com/PolarMushroom/Momentum" target="_blank" rel="noopener noreferrer" className="proj_button">CODE</a>
                                </div>
                            </div>
                            <span className="proj_text">I developed Momentum replica, Google Chrome app, which allows users to input to-do list with locaiton. A basic gelocation setting with weather information is built by allowing users to convert temperature. All data written by users are saved on local storage.</span>
                            <div className="proj_proj_skills">
                                <span className="skill_name">HTML</span>
                                <span className="skill_name">CSS3</span>
                                <span className="skill_name">JavaScript</span>
                            </div>
                        </div>
                    </div>
                    <div className="proj_proj_intro">
                        <img src={paintJS} alt="Momentum" className="proj_img"></img>
                        <div className="proj_proj_text">
                            <div className="proj_proj_title">
                                PaintJs
                                <div>
                                    <a href="https://polarmushroom.github.io/PaintBoard-Js/" target="_blank" rel="noopener noreferrer" className="proj_button">DEMO</a>
                                    <a href="https://github.com/PolarMushroom/PaintBoard-Js" target="_blank" rel="noopener noreferrer" className="proj_button">CODE</a>
                                </div>
                            </div>
                            <span className="proj_text">I developed PaintJs, use JavaScript canvas API, which allows user to create their own beautiful logo/picture for themself. User can change background-colours, adjust thickness of canvas and save to user's local storage.</span>
                            <div className="proj_proj_skills">
                                <span className="skill_name">HTML</span>
                                <span className="skill_name">CSS3</span>
                                <span className="skill_name">JavaScript</span>
                                <span className="skill_name">Canvas API</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    }
}

export default Projects;