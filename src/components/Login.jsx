import { useCallback } from 'react'
import CardData from './CardData.jsx'
import { useDescope, useSession, useUser } from '@descope/react-sdk'
import { Descope } from '@descope/react-sdk'
import { getSessionToken } from '@descope/react-sdk';

const Login = () => {
    const { isAuthenticated, isSessionLoading } = useSession()
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

    return <>

                    {!isAuthenticated &&
                        (
                            <div className={"container-fluid mb-5 pb-3"}>
                                <div className={"row justify-content-center align-items-center"} style={{paddingTop: "60px"}}>
                                    <div className={"col-lg-10"}>
                                        <Descope
                                            flowId="sign-up-or-in"
                                            onSuccess={(e) => console.log(e.detail.user)}
                                            onError={(e) => console.log('Could not log in!')}
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    {
                        (isSessionLoading || isUserLoading) &&
                        <div className={"container mb-5 pb-3"}>
                            <div className={"row justify-content-center align-items-center text-center"} style={{marginTop: "160px"}}>
                                <div className={"col-lg-6"}>
                                    <div><p className={"display-5"}>Loading...</p></div>
                                </div>
                            </div>
                        </div>
                    }

                    {!isUserLoading && isAuthenticated &&
                        (
                            <>
                                <div className={"container mb-5 pb-3"}>
                                    <div className={"row justify-content-center align-items-center text-center"}
                                         style={{marginTop: "160px"}}>
                                        <div className={"col-lg-12 mb-5 pb-3"}>
                                            <p className={"display-5 mb-2"}>Hello {user.name}</p>
                                            <p className={"lead mb-2"}>My Developer Profile</p>
                                            <button className={"btn btn-outline-warning"} onClick={handleLogout}>Logout</button>
                                        </div>
                                        <CardData/>
                                    </div>
                                </div>
                            </>
                        )
                    }
    </>;
}

export default Login;
