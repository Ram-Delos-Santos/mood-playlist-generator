import React from "react";
import "./welcome.css";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa"

function WelcomePage() {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate("/home");
    };

    return (
        <div class='welcome-container'>
            <div class='welcome-list'>
                <h1 class='welcome-title'>Welcome to the Mood Playlist Generator</h1>
                <p class='welcome-tagline'>See what music suits your mood!</p>
                <button onClick={handleGetStarted} class='welcome-button'>Get Started</button>
            </div>
            <div class='welcome-footer'>
                <p class='welcome-footer-text'>Created by Ram Jesler B. Delos Santos</p>
                <div class='welcome-footer-links'>
                    <a class='link-button' href="https://github.com/Ram-Delos-Santos" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
                    <a class='link-button' href="https://www.linkedin.com/in/ramjeslerdelossantos/" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
                </div>
            </div>
        </div>
    );
}


// test

export default WelcomePage;