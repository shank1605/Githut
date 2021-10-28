import './App.css';
import GitHub from './GitHub.png';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import {
    useHistory
} from "react-router-dom";
import axios from "axios";
const Login: React.FC = () => {
    let history = useHistory();
    const token: string | null = localStorage.getItem("token");
    console.log(token);

    useEffect(() => {
        const code: RegExpMatchArray | number | string | undefined = window.location.href.match(/\?code=(.*)/)?.[1]
        console.log(code);
        if (code) {
            const getcode = async (): Promise<any> => {
                const data = {
                    token: code
                }

                let getc = await axios.post('https://githutapinodejs.herokuapp.com/github', data)
                console.log(getc.data.token);
                let token = getc.data.token;
                localStorage.setItem('token', token);
                history.push("/home/homelist")
            }
            getcode()
        }
    }, [history])

    return (
        <>
            <div className=" container loginheight center">
                <div className="loginbox centerimage">
                    <div>
                        <img src={GitHub} alt="Github" />
                    </div>
                    <div>
                        <span style={{ color: 'white', fontWeight: 700, padding: '20px' }}>GitHut</span>
                    </div>
                    <div>
                        <Button variant="outlined" className="bounce" style={{ margin: '20px 0px 26px', background: 'Teal', borderRadius: '20px', padding: '7px 40px' }}>
                            <a className="loginbutton" href={`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&scope=user%20repo&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`} style={{ fontWeight: 700 }}>Login</a>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
