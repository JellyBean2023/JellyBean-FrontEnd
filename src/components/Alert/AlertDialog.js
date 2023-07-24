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

const Alert = ({ open, process, contents }) => {
    
    return (
      <Dialog open={open} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" 
        sx={{
          "& .MuiDialog-paper": {
            minWidth: "30rem", // 원하는 가로 최대 크기
          },
        }}>
          <DialogContent>
              <DialogContentText id="alert-dialog-description" className="text-center">
                  {contents}
              </DialogContentText>
          </DialogContent>
          <CenteredActions>
              <Button onClick={process} autoFocus>확인</Button>
          </CenteredActions>
      </Dialog>
    );
}

export default Alert;