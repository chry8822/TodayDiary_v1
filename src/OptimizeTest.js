//최적화 테스트 부모 프롭스에 받아온
//컴포넌트 재사용 방법

import React from "react";
import { useState, useEffect } from "react";

const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`CounterA Update - count : ${count}`);
  });

  return <div>{count}</div>;
});

const CounterB = ({ obj }) => {
  useEffect(() => {
    console.log(`CounterB Update - count : ${obj.count}`);
  });
  return <div>{obj.count}</div>;
};

const areEqual = (prevProps, nextProps) => {
  return prevProps.obj.count === nextProps.obj.count;

  // return true; // 이전 프롭스 현재 프롭스가 같다면 리덴더가 되지 않는다.
  // return false; // 이전과 현재 프롭스가 다르면 리렌더링 된다.
};
const MemoizedCounterB = React.memo(CounterB, areEqual);

// const TextView = React.memo(({ text }) => {
//   useEffect(() => {
//     console.log(`Update :: Text : ${text}`);
//   });
//   return <div>{text}</div>;
// });

// const CountView = React.memo(({ count }) => {
//   useEffect(() => {
//     console.log(`Update :: Count : ${count}`);
//   });
//   return <div>{count}</div>;
// });

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });
  // const [count, setCount] = useState(1);
  // const [text, setText] = useState("");

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>Counter A</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>A button</button>
      </div>
      <div>
        <h2>Counter B</h2>
        <MemoizedCounterB obj={obj} />
        <button onClick={() => setObj({ count: obj.count })}>B button</button>
      </div>
      {/* <div>
        <h2>count</h2>
        <CountView count={count} />
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <h2>text</h2>
      <TextView text={text} />
      <input
        value={text}
        type="text"
        onChange={(e) => setText(e.target.value)}
      /> */}
    </div>
  );
};

export default OptimizeTest;