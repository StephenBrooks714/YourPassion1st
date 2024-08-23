import {Link} from "react-router-dom";
import Logo from "../assets/yourpassion1st-logo.png";
import {getSessionToken, useDescope, useSession, useUser} from "@descope/react-sdk";
import {useCallback} from "react";

export default function NavBar() {
    const { isAuthenticated } = useSession()
    const { user, isUserLoading } = useUser()
    const { logout } = useDescope()

    const exampleFetchCall = async () => {
        const sessionToken = getSessionToken();

        // example fetch call with authentication header
        fetch('your_application_server_url', {
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + sessionToken,
            }
        })
    }

    const handleLogout = useCallback(() => {
        logout()
    }, [logout])

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light-shadow-transparent-gradient-shadow fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}>
                        <img src={Logo}
                             height={"50px"}
                             width={"100px"}
                             alt="logo"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={"/"} className={"nav-link"}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/about"} className={"nav-link"}>About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Programs
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                            <li className="nav-item me-2">
                                {!isAuthenticated &&
                                    (
                                        <Link to={"/login"} className={"btn btn-primary rounded-pill"}>
                                            Login
                                        </Link>
                                    )
                                }
                                {!isUserLoading && isAuthenticated &&
                                    (
                                        <button className={"btn btn-outline-warning rounded-pill"}
                                                onClick={handleLogout}>Logout</button>
                                    )
                                }
                            </li>
                            <li className="nav-item">
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search"
                                           aria-label="Search"/>
                                    <button className="btn btn-outline-dark" type="submit">Search</button>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}