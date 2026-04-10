function MemoItem({ memo, onRemove}){
    return(
        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
            <span>{memo.text}</span>
            <button onClick={() => onRemove(memo.id)}>삭제</button>
        </div>
    );
}
export default MemoItem;