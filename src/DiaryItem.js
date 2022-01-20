import React, { useRef, useState, useContext } from "react";
import { DiaryDispatchContext } from "./App";

const DiaryItem = ({ author, content, created_date, emotion, id }) => {
  const { onRemove, onEdit } = useContext(DiaryDispatchContext);
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);
  const [localContent, setLocalContent] = useState(content);
  const localContentInput = useRef();

  // onclick 에 가독성을 위해서 새로운 변수를 만들어 줌
  const handleRemove = () => {
    if (window.confirm(`${id}번째 일기를 정말 삭제 하시겠습니까?`)) {
      onRemove(id);
    }
  };

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };

  const handleEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }
    if (window.confirm(`${id}번째 일기를 수정하겠습니까?`))
      onEdit(id, localContent);
    toggleIsEdit();
  };

  return (
    <div className="DiaryItem">
      <div className="info">
        {isEdit ? (
          <>
            <button onClick={handleQuitEdit} className="delete">
              수정 취소
            </button>
            <button onClick={handleEdit} className="modify">
              수정 완료
            </button>
          </>
        ) : (
          <>
            <button onClick={handleRemove} className="delete">
              삭제하기
            </button>
            <button onClick={toggleIsEdit} className="modify">
              수정하기
            </button>
          </>
        )}
        <span>
          작성자 : {author} | 감정 점수 : {emotion}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">
        {isEdit ? (
          <textarea
            ref={localContentInput}
            value={localContent}
            onChange={(e) => setLocalContent(e.target.value)}
          ></textarea>
        ) : (
          <>{content}</>
        )}
      </div>
    </div>
  );
};

export default React.memo(DiaryItem);
