import { FaHome, FaUser, FaProjectDiagram, FaBook, FaGithub } from 'react-icons/fa';


function Service(){
    return(
        
        <div id='servicePage'>

            <h2>SERVICES</h2>

            <div id='Service'>

                

                <div class="projects">
                    <h3>Front-end Development</h3>
                    <p>React, HTML, JavaScript, CSS</p>

                    <h4>Related Course</h4>
                    <p>Web Interface Design</p>
                    <p>Client-Side Web Development</p>
                    <p>Web Application Development</p>

                    <h4>Related Projects</h4>
                    <p>Porsche Car Design</p>
                    <p>Naruto Website Design</p>
                    <p>Nasa Space App Design</p>
                </div>

                <div class="projects">
                    <h3>UI/UX Design</h3>
                    <p>Figma Design</p>

                    <h4>Related Course</h4>
                    <p>MD Tech Biz Training</p>
                    <p>Web Interface Design</p>
                    <p>Client-Side Web Development</p>
                    

                    <h4>Related Projects</h4>
                    <p>MD Tech Biz Software Design</p>
                    <p>Porsche Figma Design</p>
                    <p>Nasa Space App Design</p>
                </div>

                <div class="projects">
                    <h3>Full-Stack Development</h3>
                    <p>React, HTML, JavaScript, CSS</p>

                    <h4>Related Course</h4>
                    <p>C# Programming, Java Programming</p>
                    <p>Advanced Database Concept</p>
                    <p>Web Application Development</p>

                    <h4>Related Projects</h4>
                    <p>Banking WebApp</p>
                    <p>NASA Space App</p>
                    <p>BayCha Networking Website</p>
                </div>

                

                


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

export default Service;