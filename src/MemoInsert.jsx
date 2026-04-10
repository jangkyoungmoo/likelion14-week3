import  { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
display: flex;
gap: 15px;
width: 100%;
max-width: 500px;
margin-bottom: 20px;
`;

const StyledInput = styled.input`
flex: 1;
padding: 15px 20px;
font-size: 16px;
border: 1px solid #ccc;
border-radius: 30px;
background-color: #fff;
outline: none;

&::placeholder{
    color: #999;
}
`;

const StyledButton = styled.button`
padding: 15px 20px;
font-size: 16px;
font-weight: bold;
color: #fff;
background-color: #007BFF;
border: none;
border-radius: 30px;
cursor: pointer;
&:hover{
opacity: 0.9;
}
`;

function MemoInsert({onInsert}){
    const [value, setValue] =useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if(!value) return;
        onInsert(value);
        setValue("");
    };

    return(
      <StyledForm onSubmit={onSubmit}>
      <StyledInput
        placeholder='메모를 입력하세요'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <StyledButton type='submit'>추가</StyledButton>
    </StyledForm>
);
}
export default MemoInsert;