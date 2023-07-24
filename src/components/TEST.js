'use client';
import { useSession } from 'next-auth/react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import showAlert from '@/components/Alert/Alert';
import AlertDialog from '@/components/Alert/AlertDialog';
import { useState } from 'react';

const TESTContainer = styled.section`
  background-color: wheat;
  color: black;
  height: 100vh;
  padding: 100px;
`;

const TEST = () => {
  const {data: session, status } = useSession();
  console.log(session?.user.data)
  console.log(status)

  const contents = `Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.`

  const [open, setOpen] = useState(false);
  const handleClose = () => {setOpen(false)};

  return (
    <TESTContainer>
      <div>
        Data : {session?.user.data.id}
      </div>
      <Button onClick={() => showAlert(contents)}>Show Alert</Button>

      <Button onClick={handleClickOpen}>Show AlertDialog</Button>
      <AlertDialog open={open} handleClose={handleClose} contents={contents} />
    </TESTContainer>
  );
};

export default TEST;