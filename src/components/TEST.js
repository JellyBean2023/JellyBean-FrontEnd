'use client';
import { useSession } from 'next-auth/react';
import styled from 'styled-components';

const TESTContainer = styled.section`
  background-color: wheat;
  color: black;
  height: 100vh;
  padding: 100px;
`;

const TEST = () => {
  const {data: session, status } = useSession();
  console.log(session?.user.data)
  console.log(session?.user.result)
  console.log(status)

  return (
    <TESTContainer>
      Data : {session?.user.data.email}
    </TESTContainer>
  );
};

export default TEST;