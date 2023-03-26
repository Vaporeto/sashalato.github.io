
import Box from '@mui/material/Box';
import './About.css';

function About (){


    return (

        <Box className="box">
            <div className="container">
                <div className="card">
                    <div className="face face1">
                        <div className="content">
                            <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" />
                            <h3>Design</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                                <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="face face1">
                        <div className="content">
                            <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true" />
                            <h3>Code</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                                <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="face face1">
                        <div className="content">
                            <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true" />
                            <h3>Launch</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                                <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>

        </Box>
    );
}

export default About;