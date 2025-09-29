import { FaHome, FaUser, FaProjectDiagram, FaBook, FaGithub } from 'react-icons/fa';


function Project(){
    return(
        
        <div id='projectPage'>

            <h2>MY PROJECTS</h2>

            <div id='Project'>

                

                <div class="projects">
                    <h3>Porsche Website Design</h3>
                    <p>Semester 1</p>
                    <h4>Description</h4>
                    <p>Designed a luxury-themed Porsche website using Figma, applying a gold and grey palette to reflect brand identity, and enhanced user experience with planned interactive transitions and JavaScript-based animations for dynamic client-side functionality.   </p>
                    <a href="https://github.com/Serey-Vaddh-Savy/carDealership" class="more">View</a>
                    
                </div>

                <div class="projects">
                    <h3>Naruto Website Design</h3>
                    <p>Semester 2</p>
                    <h4>Description</h4>
                    <p> This website was created on behalf on my love for Naruto and its series. It tells the story of each character of the Team 7. It was designed using Figma and developed using HTML, CSS and Javscript.Work are still under way for the character of Sakura.
                    </p>
                    <a href="https://github.com/Serey-Vaddh-Savy/NarutoWebsite" class="more">View</a>
                </div>

                <div class="projects">
                    <h3>Nasa Space App</h3>
                    <p>Hackathon project</p>
                    <h4>Description</h4>
                    <p>This website was developed as a solution for the NASA Space Apps Hackathon. Its purpose is to predict weather conditions, helping people determine whether their planned activities—such as hiking, camping, and other outdoor adventures—can be carried out safely and comfortably.</p>
                    <a href="" class="more">View</a>
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
                        <span className="nav-label">GitHub</span>
                        <a href="/contact"><FaGithub size={30} /></a>
                        
                    </li>
                </ul>
            </nav>
        </div>
        
        
    );
}

export default Project;