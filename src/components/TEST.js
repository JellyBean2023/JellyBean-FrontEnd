"use client";
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { EmailIDState } from "@/components/Login/Login";

const TESTContainer = styled.section`
  background-color: wheat;
  color: black;
  height: 100vh;
  padding: 100px;
`;

const TEST = () => {
  const emailID = useRecoilValue(EmailIDState); // Recoil atom 상태를 가져오기 위해 useRecoilValue 훅 사용

  console.log("email: ", emailID);
  return (
    <TESTContainer>
      <div>
        email: {emailID}
      </div>
      {/* <div>
        Data : {session?.user.data.id}
      </div> */}
      {/* <Button onClick={() => showAlert(contents)}>Show Alert</Button>

      <Button onClick={handleClickOpen}>Show AlertDialog</Button>
      <AlertDialog open={open} handleClose={handleClose} contents={contents} /> */}
    </TESTContainer>
  );
};

export default TEST;
