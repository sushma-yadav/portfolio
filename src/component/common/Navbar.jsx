const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <ul>
                    <li>
                        <a href="#">
                            <i className="bi bi-house-fill"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bi bi-person-fill"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bi bi-stack"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bi bi-chat-left-text-fill"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-download" aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar