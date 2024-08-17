import { useCallback } from 'react'

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
        <div className={"container"}>
            <div className={"row justify-content-center align-items-center"} style={{paddingTop: "70px"}}>
                <div className={"col-lg-10"}>
                    {!isAuthenticated &&
                        (
                            <Descope
                                flowId="sign-up-or-in"
                                onSuccess={(e) => console.log(e.detail.user)}
                                onError={(e) => console.log('Could not log in!')}
                            />
                        )
                    }

                    {
                        (isSessionLoading || isUserLoading) &&
                        <div className={"row justify-content-center align-items-center text-center"} style={{marginTop: "160px"}}>
                            <div className={"col-lg-6"}>
                                <div><p className={"display-5"}>Loading...</p></div>
                            </div>
                        </div>
                    }

                    {!isUserLoading && isAuthenticated &&
                        (
                            <>
                                <div className={"row justify-content-center align-items-center text-center"}
                                     style={{marginTop: "160px"}}>
                                    <div className={"col-lg-8"}>
                                        <p className={"h1 mb-2"}>Hello {user.name}</p>
                                        <p className={"lead mb-2"}>My Private Component</p>
                                        <button className={"btn btn-outline-warning"} onClick={handleLogout}>Logout</button>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    </>;
}

export default Login;
