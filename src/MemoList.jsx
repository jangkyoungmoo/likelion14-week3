import MemoItem from "./MemoItem";

function MemoList({ memos, onRemove}){
    return(
        <div>
            {memos.map(memo=>(
                <MemoItem key={memo.id} memo={memo} onRemove={onRemove} />
            ))}
        </div>
    );
}
export default MemoList;