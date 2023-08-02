import Link from "next/link";
import { styled } from "styled-components";

const EditLink = styled(Link)`
  position: absolute;
  right: 3rem;
  background-color: var(--theme-color);
  border-radius: 3px;
  padding: 5px;

  @media screen and (max-width: 1024px) {
    right: 1.5rem;
  }
`;

const EditButton = (props) => {
  const { id } = props;

  return(
    <EditLink href={`admin/edit/${id}`}>
        수정하기
    </EditLink>
  )
}

export default EditButton;