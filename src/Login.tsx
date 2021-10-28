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
    console.log(token)
    if (token) {
        history.push("/home/homelist");
    }

    // const REACT_APP_CLIENT_ID = '630c7adc853bc773cbbf';
    // const REACT_APP_REDIRECT_URI = 'http://localhost:3000';

    useEffect(() => {
        const code: RegExpMatchArray | number | string | undefined = window.location.href.match(/\?code=(.*)/)?.[1]
        console.log(code);
        if (code) {
            // axios.post(`https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token?client_id=${CLIENT_ID}&scope=repo&redirect_uri=${REDIRECT_URI}&client_secret=${SECRET_KEY}&code=${code}`)
            const getcode = async (): Promise<any> => {
                // let getc = await axios.get(`http://localhost:9999/authenticate/${code}`)
                let headers={headers:{'Access-Control-Allow-Origin':'https://githut.netlify.app/'}}
                let getc = await axios.get(`https://github.com/login/oauth/access_token?client_id=${process.env.REACT_APP_CLIENT_ID}&scope=user%20public_repo&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&client_secret=${process.env.REACT_APP_SECRET_KEY}&code=${code}`,headers)
                console.log(getc.data.token);
                // console.log(getc)
                // let token = getc.data.split("&")[0].split("=")[1]
                console.log(token);
                // let token = getc.data.token;
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
