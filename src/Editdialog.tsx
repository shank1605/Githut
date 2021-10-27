import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';
import { useMutation } from 'react-relay';
import Spinner from './Spinner'
import {
    useHistory
} from "react-router-dom";

const graphql = require('babel-plugin-relay/macro');

interface founddata1 {
    foundid: string | null | undefined;
}
export default function EditDialog(props: founddata1) {
    const [open, setOpen] = React.useState<boolean>(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState<DialogProps['maxWidth']>('sm');
    const [Reponame, setReponame] = React.useState<string | null>();
    const [Des, setDes] = React.useState<string | null>();
    let history = useHistory();
    const [commit, isInFlight] = useMutation(graphql`
    mutation EditdialogMutation($input: UpdateRepositoryInput!) {
        updateRepository(input: $input) {
          clientMutationId
        repository{
          name
          description
        }
      }
    }`)
    if (isInFlight) {
        return <Spinner />;
    }
    const handlerepoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReponame(e.currentTarget.value)
    }
    const handledesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDes(e.currentTarget.value)
    }
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const Update = () => {
        if (Reponame && Des) {
            commit({
                variables: {
                    input: {
                        repositoryId: props.foundid,
                        name: Reponame,
                        description: Des
                    },
                },
                onCompleted(data) {
                    console.log(data);

                },
            });
            if (isInFlight) {
                return <Spinner />;
            }

            history.push('/home/homelist')

        }
        setOpen(false);
        setDes(null);
        setReponame(null)
    }
  
    return (
        <div>
            <Button
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClickOpen}
            >
                < EditIcon />
            </Button>
            <Dialog open={open} fullWidth={fullWidth}
                maxWidth={maxWidth} onClose={handleClose}>
                <DialogTitle>Update Repository</DialogTitle>
                <DialogContent>
                    <DialogContentText>

                    </DialogContentText>
                    <TextField
                        value={Reponame}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Repository Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handlerepoChange}
                    />
                    <TextField
                        value={Des}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Repository Description"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handledesChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={Update}>Update</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}