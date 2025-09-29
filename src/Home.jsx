import { BiBody } from 'react-icons/bi';
import { FaHome, FaUser, FaProjectDiagram, FaBook, FaGithub } from 'react-icons/fa';
import { useState, useEffect } from 'react';

function Home(){
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Start the transition after component mounts
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100); // Small delay before starting animation

        return () => clearTimeout(timer);
    }, []);

    return(
        <div style={{
            position: 'relative',
            width: '100vw',
            height: '100vh',
            overflow: 'hidden'
        }}>
            
            
            <div 
                style={{
                    position: 'fixed',
                    top: isLoaded ? '100vh' : '0',
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: 'black',
                    zIndex: 1000,
                    transition: 'top 2s ease-in-out',
                    borderBottom: isLoaded ? 'none' : '2px solid white'
                }}
            />
            
            
            <header style={{
                opacity: isLoaded ? 1 : 0,
                transition: 'opacity 1s ease-in-out 1s'
            }}>
                <h1>HI THERE! WELCOME TO MY PORTFOLIO</h1>
                <h2>PLEASE FEEL FREE TO CHECK IT OUT</h2>

                <nav id='homeNav'>
                    <a href=""><FaHome /></a>
                    <a href="/about"><FaUser /></a>
                    <a href="/project"><FaProjectDiagram /></a>
                    <a href="/service"><FaBook /></a>
                    <a href="/contact"><FaGithub /></a>
                </nav>
            </header>
        </div>
    );
}

export default Home;