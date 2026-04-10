import { useState } from 'react';
import MemoInsert from './MemoInsert';
import MemoList from './MemoList';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #B0C4DE;
min-height: 100vh;
padding: 40px;
`;

const Title = styled.h1`
font-size: 36px;
font-weight: bold;
margin-bottom: 20px;
color: #333;
`;


function App(){
const [memos, setMemos] = useState([]);

const handleInsert = (text) => {
  const newMemo = { id: Date.now(), text };
  setMemos([newMemo, ...memos]);
};

const handleRemove = (id) => {
  setMemos(memos.filter(memo => memo.id !== id));
};

return (
<Container>
<Title>MemoList</Title>
<MemoInsert onInsert={handleInsert} />
<MemoList memos={memos} onRemove={handleRemove} />
</Container>
);
}
export default App;