import Link from "next/link";
import { styled } from "styled-components";

const UpdateLink = styled(Link)`
  position: absolute;
  right: 3rem;
  background-color: var(--theme-color);
  border-radius: 3px;
  padding: 5px;

  @media screen and (max-width: 1024px) {
    right: 1.5rem;
  }
`;

const UpdateButton = (props) => {
  const { link } = props;

  return(
    <UpdateLink href={`/update/${link}`}>
        수정하기
    </UpdateLink>
  )
}

export default UpdateButton;