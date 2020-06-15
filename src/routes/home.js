import React from 'react'
import "./Home.css"


class Home extends React.Component {

    render() {
        return < div class="home_comp" id="home" >
            <div class="home_comp1">
                <div class="home_bg">
                </div>
                <p class="home_name">Andy Kim</p>
                <p class="home_jobtitle">Software Enginner</p>
            </div>


            <div class="intro">
                <p class="intro_comps">
                    <h2 class="qw">Hi! I'm Andy Kim. I'm a Software Engineer based in the New Zealand.</h2>
                    <h3 class="content">I am Andy Kim. I have done B.Tech with Computer and Moblie System as my major subject from AUT University.  Recently, my passion lies in web application development including both the front end and the back end. I fell in love with modern JavaScript.
                <br></br><br></br>I enjoy everything that I do. I am always ready to face challenges and get along with people very well. I believe in vision and action. I learn from my mistakes. I am ready to take any challenge required to perform my job.
                </h3>
                </p>
            </div>
        </div >
    }
}

export default Home;