import React from 'react'
import "./Home.css"


class Home extends React.Component {

    render() {
        return < div className="home_comp" id="home" >
            <div className="home_comp1">
                <div className="home_bg">
                </div>
                <p className="home_name">Andy Kim</p>
                <p className="home_jobtitle">Software Enginner</p>
            </div>


            <div className="intro">
                <div className="intro_comps">
                    <h2 className="qw">Hi! I'm Andy Kim. I'm a Software Engineer based in the New Zealand.</h2>
                    <h3 className="content">I am Andy Kim. I have done B.Tech with Computer and Moblie System as my major subject from AUT University.  Recently, my passion lies in web application development including both the front end and the back end. I fell in love with modern JavaScript.
                <br></br><br></br>I enjoy everything that I do. I am always ready to face challenges and get along with people very well. I believe in vision and action. I learn from my mistakes. I am ready to take any challenge required to perform my job.
                </h3>
                </div>
            </div>
        </div >
    }
}

export default Home;