import React from 'react';
import ReactDOM from 'react-dom';
import createRoot from 'react-dom/client';
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

const Alert = ({ open, contents }) => {
    
    return (
        <div>
            <Dialog open={open} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                       {contents}
                    </DialogContentText>
                </DialogContent>
                <CenteredActions>
                    <Button>취소</Button>
                    <Button autoFocus>확인</Button>
                </CenteredActions>
            </Dialog>
        </div>
    );
}

export default Alert;

export const showAlert = (contents) => {
    const div = document.createElement('div');
    document.body.appendChild(div);

    const handleClose = () => {
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
    };

    const root = createRoot(div);
    root.render(<Alert open={true} handleClose={handleClose} contents={contents} />);
};
