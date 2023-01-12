const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <ul>
                    <li>
                        <a href="#home" title="home">
                            <i className="bi bi-house-fill"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#about" title="about">
                            <i className="bi bi-person-fill"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#skills" title="skills">
                            <i className="bi bi-gear-fill"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#projects" title="projects">
                            <i className="bi bi-stack"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#contact" title="contact">
                            <i className="bi bi-chat-left-text-fill"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar