import DiaryItem from "./DiaryItem";
import { useContext } from "react";
import { DiaryStateContext } from "./App";

const DiaryList = () => {
  const diaryList = useContext(DiaryStateContext);
  console.log(diaryList);
  return (
    <div className="DiaryList">
      <h2>List of diary</h2>
      <h4>{diaryList.length} 개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

// undefiend 로 전달되서 에러가 나는걸 방지하기 위해
DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
