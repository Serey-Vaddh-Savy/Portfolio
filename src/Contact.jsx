import { FaHome, FaUser, FaProjectDiagram, FaBook, FaGithub } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Contact(){
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent successfully!");
        navigate('/');
    };

    return(
        <div id='contactPage'>
            <div className="contact-container">
                <div className="contact-form-wrapper">
                    <h2>Get In Touch</h2>
                    <p className="contact-subtitle">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                    
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" id="firstName" name="firstName" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" id="lastName" name="lastName" required />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" name="email" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="contactNumber">Phone Number</label>
                            <input type="tel" id="contactNumber" name="contactNumber" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="5" placeholder="Please feel free to ask..." required></textarea>
                        </div>

                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>

            <nav>
                <ul>
                    <li>
                        <span className="nav-label">Home</span>
                        <a href="/"><FaHome size={30} /></a>
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

export default Contact;