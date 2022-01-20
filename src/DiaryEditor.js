import React, { useEffect, useRef, useState, useContext } from "react";
import { DiaryDispatchContext } from "./App";

const DiaryEditor = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  useEffect(() => {
    console.log("DiaryEditop render");
  });
  const authorInput = useRef();
  const contentText = useRef();
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  //이벤트 타겟 네임으로 찾아서 setState 객체안에 값을 바꿔준다.
  const handleChangeState = (e) => {
    //console.log(e.target.value);
    //console.log(e.target.name);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(state);
    if (state.author.length < 1) {
      authorInput.current.focus();
      return;
    }
    if (state.content.length < 5) {
      contentText.current.focus();
      return;
    }
    onCreate(state.author, state.content, state.emotion);
    alert("Save success!");
    setState({
      author: "",
      content: "",
      emotion: 1,
    });
  };

  return (
    <div className="DiaryEditor">
      <h2 className="diaryTitle">today's diary</h2>
      <div>
        <input
          ref={authorInput}
          name="author"
          value={state.author}
          onChange={handleChangeState}
          placeholder="작성자를 입력해주세요."
        />
      </div>
      <div>
        <textarea
          ref={contentText}
          name="content"
          value={state.content}
          onChange={handleChangeState}
          placeholder="이제 일기를 씁니다."
        />
      </div>
      <div className="selectWrap">
        <span className="selectText">today emotion</span>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={5}>😁</option>
          <option value={4}>😀</option>
          <option value={3}>🙂</option>
          <option value={2}>😕</option>
          <option value={1}>😠</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>Save Diary</button>
      </div>
      <div className="border"></div>
    </div>
  );
};

export default React.memo(DiaryEditor);
