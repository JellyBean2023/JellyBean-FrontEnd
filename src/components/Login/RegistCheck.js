import Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.div`
  width: 50%;
  transition: margin-left 0.2s ease;
  margin: 5rem;

  @media screen and (max-width: 1024px) {
      padding: 0 50px;
  }
`;

const Title = styled.span`
  position: relative;
  font-size: 27px;
  font-weight: 600;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 30px;
    background-color: var(--theme-color);
  }
`;

const CheckSection = styled.div`
  padding-top: 20px;

  textarea {
    color: var(--text-color);
    width: 100%;
    min-height: 70px;
    overflow-y: auto;
    border: 1px solid var(--text-color);
    border-radius: 10px;
    background-color: rgba(0,0,0,0.03);
    padding: 8px
  }

  hr {
    margin: 15px 0;
  }
`;

const CheckboxContent = styled.div`
  input {
    margin-right: 10px;
    accent-color: var(--theme-color);
    border: 1px solid black;
  }

  &#agree_all {
    font-size: 20px;
    margin: 30px 0;
  }
`;

const Button = styled.div`
  margin: 30px 0 10px 0;

  &#check {
    display: none;
  }
  
  input {
    border-radius: 5px;
    background-color: var(--theme-color);
    padding: 5px 10px;
    border: none;
    color: #fff;
    font-size: 17px;
    font-weight: 500;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;
    border-radius: 15px;

    &:hover {
      background-color: #265df2;
    }
  }
`;

const RegistCheck = (active) => {
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, require: true, checked: false, contents: '1번 약관 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium mi sed tristique commodo. Nullam in massa neque. Etiam scelerisque diam sit amet est scelerisque, vitae ultricies quam efficitur. Nulla facilisi. Aliquam at elit eu mi sollicitudin tincidunt in non felis. Vivamus vitae lectus sed massa venenatis tincidunt. Donec euismod luctus tristique. Aliquam non feugiat tortor. Sed vel velit at risus venenatis sollicitudin eu eu justo. Mauris vel ipsum vel purus facilisis condimentum in ac dui. Nulla id erat at odio congue suscipit vel vitae purus. Sed eu nunc sed urna finibus' },
    { id: 2, require: true, checked: false, contents: '2번 약관 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium mi sed tristique commodo. Nullam in massa neque. Etiam scelerisque diam sit amet est scelerisque, vitae ultricies quam efficitur. Nulla facilisi. Aliquam at elit eu mi sollicitudin tincidunt in non felis. Vivamus vitae lectus sed massa venenatis tincidunt. Donec euismod luctus tristique. Aliquam non feugiat tortor. Sed vel velit at risus venenatis sollicitudin eu eu justo. Mauris vel ipsum vel purus facilisis condimentum in ac dui. Nulla id erat at odio congue suscipit vel vitae purus. Sed eu nunc sed urna finibus' },
    { id: 3, require: false, checked: false, contents: '3번 약관 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium mi sed tristique commodo. Nullam in massa neque. Etiam scelerisque diam sit amet est scelerisque, vitae ultricies quam efficitur. Nulla facilisi. Aliquam at elit eu mi sollicitudin tincidunt in non felis. Vivamus vitae lectus sed massa venenatis tincidunt. Donec euismod luctus tristique. Aliquam non feugiat tortor. Sed vel velit at risus venenatis sollicitudin eu eu justo. Mauris vel ipsum vel purus facilisis condimentum in ac dui. Nulla id erat at odio congue suscipit vel vitae purus. Sed eu nunc sed urna finibus' },
    { id: 4, require: false, checked: false, contents: '4번 약관 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium mi sed tristique commodo. Nullam in massa neque. Etiam scelerisque diam sit amet est scelerisque, vitae ultricies quam efficitur. Nulla facilisi. Aliquam at elit eu mi sollicitudin tincidunt in non felis. Vivamus vitae lectus sed massa venenatis tincidunt. Donec euismod luctus tristique. Aliquam non feugiat tortor. Sed vel velit at risus venenatis sollicitudin eu eu justo. Mauris vel ipsum vel purus facilisis condimentum in ac dui. Nulla id erat at odio congue suscipit vel vitae purus. Sed eu nunc sed urna finibus' },
  ]);

  // 전체 선택 체크박스 클릭 이벤트 핸들러
  const handleSelectAllChange = () => {
    const updatedCheckboxes = checkboxes.map((checkbox) => ({
      ...checkbox,
      checked: !selectAllChecked,
    }));
    setCheckboxes(updatedCheckboxes);
    setSelectAllChecked(!selectAllChecked);
  };

  // 개별 체크박스 클릭 이벤트 핸들러
  const handleCheckboxChange = (id) => {
    const updatedCheckboxes = checkboxes.map((checkbox) =>
      checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
    );
    setCheckboxes(updatedCheckboxes);
    setSelectAllChecked(updatedCheckboxes.every((checkbox) => checkbox.checked));
  };

  return (
    <Form className={`login ${active ? 'active' : ''}`}>
      <Title>약관동의</Title>

      <CheckboxContent id='agree_all'>
        <label><input type="checkbox" checked={selectAllChecked} onChange={handleSelectAllChange} required/>전체 동의하기</label>
      </CheckboxContent>

      {checkboxes.map((checkbox) => (
        <CheckSection key={checkbox.id}>
          <textarea placeholder={checkbox.contents}/>
          <CheckboxContent><input type="checkbox" checked={checkbox.checked} onChange={() => handleCheckboxChange(checkbox.id)}/><label>동의하기</label></CheckboxContent>
          <hr />
      </CheckSection>
      ))}
      
      <Link href={'#'}>
        <Button className="signup-link" id={selectAllChecked ? "" : "check"}><input type="button" value="회원 정보 입력" /></Button>
      </Link>
    </Form>
  );
}

export default RegistCheck;