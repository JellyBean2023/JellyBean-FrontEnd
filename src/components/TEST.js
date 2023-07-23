'use client';
import { useSession } from 'next-auth/react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import showAlert from '@/components/Alert/Alert';

const TESTContainer = styled.section`
  background-color: wheat;
  color: black;
  height: 100vh;
  padding: 100px;
`;

const TEST = () => {
  const {data: session, status } = useSession();
  // console.log(session?.user.data)
  // console.log(session?.user.result)
  // console.log(status)

  const contents = `Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.`

  return (
    <TESTContainer>
      Data : {session?.user.data.email}
      <Button onClick={() => showAlert(contents)}>Show Alert</Button>
    </TESTContainer>
  );
};

export default TEST;