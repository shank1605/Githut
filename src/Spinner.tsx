import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';


export default function Spinner() {
    return (
        <div className="loginheight center">
            <div className="center">
                <CircularProgress />
            </div>
        </div>
    );
}