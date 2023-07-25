import Link from "next/link";
import { styled } from "styled-components";

const UpdateLink = styled(Link)`
    float: right;
    background-color: var(--theme-color);
`;

const UpdateButton = (link) => {
  return(
    <UpdateLink href={link}>
        수정하기
    </UpdateLink>
  )
}

export default UpdateButton;