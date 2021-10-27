import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
    loadQuery, useLazyLoadQuery
} from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';
import Octocat from './Octocat.jpg'
import {
    Switch,
    Route,
    useHistory,
} from "react-router-dom";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Homelist from './homelist';
import Detailspage from './Detailspage'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import RepositoryNameQuery from './list'
import * as listRepositoryNameQuery from "./__generated__/listRepositoryNameQuery.graphql";


interface Responsedata {
    login?: string,
    avatar_url?: string,
    following?: number,
    followers?: number
}
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Home() {
    let history = useHistory();
    const login: string | null = localStorage.getItem('token');
    if (!login) {
        history.push('/')
    }
    const searchArgs: listRepositoryNameQuery.listRepositoryNameQueryVariables = {
        first: 5,
        after: "Y3Vyc29yOnYyOpHOCr9H_w=="
    };

    const preloadedQuery: listRepositoryNameQuery.listRepositoryNameQueryResponse = useLazyLoadQuery<listRepositoryNameQuery.listRepositoryNameQuery>(RepositoryNameQuery, searchArgs);
    console.log(preloadedQuery)
    const [userDetail, setUserdetail] = useState<Responsedata>()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [open1, setOpen1] = React.useState(true);
    const handleClick1 = () => {
        setOpen1(true);
    };
    const handleClose1 = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen1(false);
    };

    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = (): void => {
        localStorage.removeItem('token');
        history.push('/')
    }
    const handlerepo = (): void => {
        history.push('/home/homelist')
    }
    useEffect(() => {
        let token: string | null = localStorage.getItem('token');
        console.log(token)
        if (token) {
            const headers = { Authorization: `Token ${token}` }
            axios.get(`https://api.github.com/user`, { headers })
                .then((response) => {
                    console.log("home", response)
                    setUserdetail({ login: response.data.login, avatar_url: response.data.avatar_url, following: response.data.following, followers: response.data.followers });
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }, [])
    return (
        <>
            <Snackbar open={open1} autoHideDuration={6000} onClose={handleClose1}>
                <Alert onClose={handleClose1} severity="success" sx={{ width: '100%' }}>
                    Login Successfully
                </Alert>
            </Snackbar>
            <div className="bgcolor">
                <div className="container bgcolor">
                    <div className="  d-flex justify-content-between col-lg-12">
                        <div className="Gitlogo">
                            <Avatar alt="Remy Sharp" src={Octocat} />
                            <span style={{ color: 'white' }}>GitHut</span>
                        </div>
                        <div className="Gitlogo">
                            <div className="">
                                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', backgroundColor: 'black' }}>

                                    <Tooltip title="Account settings">
                                        <IconButton onClick={handleClick} size="small">
                                            <Avatar alt="Remy Sharp" src={userDetail?.avatar_url} />
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    onClick={handleClose}
                                    PaperProps={{
                                        elevation: 0,
                                        sx: {
                                            overflow: 'visible',
                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                            mt: 1.5,
                                            '& .MuiAvatar-root': {
                                                width: 32,
                                                height: 32,
                                                ml: -0.5,
                                                mr: 1,
                                            },
                                            '&:before': {
                                                content: '""',
                                                display: 'block',
                                                position: 'absolute',
                                                top: 0,
                                                right: 14,
                                                width: 10,
                                                height: 10,
                                                bgcolor: 'background.paper',
                                                transform: 'translateY(-50%) rotate(45deg)',
                                                zIndex: 0,
                                            },
                                        },
                                    }}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                                    <MenuItem>
                                        <Avatar src={userDetail?.avatar_url} /> Signed in as&nbsp;<b> {userDetail && userDetail.login}</b>
                                    </MenuItem>
                                    <MenuItem onClick={handlerepo}>
                                        Your Repositories
                                    </MenuItem>
                                    <MenuItem>
                                        Followers:<b>{userDetail && userDetail.followers}</b>
                                    </MenuItem>
                                    <MenuItem>
                                        Following:<b>{userDetail && userDetail.following}</b>
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem onClick={handleLogout}>
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Switch>
                <Route path="/home/homelist">
                    <Homelist preloadedQuery={preloadedQuery} />
                </Route>
                <Route path="/home/detailspage/:repo">
                    <Detailspage />
                </Route>
            </Switch>
        </>
    );
}

export default Home;
