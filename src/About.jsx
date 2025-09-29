import { FaHome, FaUser, FaProjectDiagram, FaBook, FaGithub } from 'react-icons/fa';


function About(){
    const handleResumeClick = () => { window.open('./resume.pdf', '_blank'); };
    return(
        <div id='aboutPage'>
            <div id="left">
                <img src="./me.jpg" alt="" />
            </div>

            <div id="middle">
                <p>Hi! HOW ARE YOU?</p>
                
                <h1>ABOUT <span class="highlight">ME </span></h1>
                <hr />
                <p>Hello, my name is Serey Vaddh. I'm very interested in new technologies and enjoy communicating with friends, working on personal projects, and designing websites. I'm currently looking for a job as a Software Developer. I'd like to work in a workplace where I can take pride in my work and experience challenges.</p>

                <h2>Personal Information</h2>
                <hr />
                <div id="personalInformation">
                    <p>Name: <span class="highlight">Serey Vaddh</span></p>
                    <p>School: <span class="highlight">Centennial College</span></p>
                    <p>Phone: <span class="highlight">4376653821</span></p>
                    <p>Email: <span class="highlight">sereyvaddh.savy@gmail.com</span></p>
                    <p>Address: <span class="highlight">Toronto, Ontario, Canada</span></p>
                </div>

                <input type="button" id="aboutMeBtn" value="MORE ABOUT ME" onClick={handleResumeClick}/>
            </div>

            <nav>
                <ul>
                    <li>
                        <span className="nav-label">Home</span>
                        <a href="/Home"><FaHome size={30} /></a>
                        
                    </li>
                    <li>
                        <span className="nav-label">About</span>
                        <a href="/about"><FaUser size={30} /></a>
                        
                    </li>
                    <li>
                        <span className="nav-label">Projects</span>
                        <a href="/project"><FaProjectDiagram size={30} /></a>
                        
                    </li>
                    <li>
                        <span className="nav-label">Service</span>
                        <a href="/service"><FaBook size={30} /></a>
                        
                    </li>
                    <li>
                        <span className="nav-label">Contact</span>
                        <a href="/contact"><FaGithub size={30} /></a>
                        
                    </li>
                </ul>
            </nav>
        </div>
        
        
    );
}

export default About;