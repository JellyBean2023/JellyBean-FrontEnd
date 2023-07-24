import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import styled from 'styled-components';

const CenteredActions = styled(DialogActions)`
  background-color: var(--theme-color);
  padding: 0;
  margin: 0;

  button {
    color: white;
    flex-grow: 1;
    margin: 0;

    &:hover {
      filter: brightness(10%);
    }
  }
`;

const Alert = ({ open, handleClose, contents }) => {
    
    return (
        <div>
            <Dialog open={open} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                       {contents}
                    </DialogContentText>
                </DialogContent>
                <CenteredActions>
                    <Button onClick={handleClose} autoFocus>확인</Button>
                </CenteredActions>
            </Dialog>
        </div>
    );
}

export default Alert;