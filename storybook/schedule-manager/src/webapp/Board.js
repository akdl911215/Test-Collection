import React, { useState } from "react";
import { Button, Input, Checkbox } from "semantic-ui-react";

const Board = () => {
  // const [word, setWord] = useState({ keyword: "" });
  // const { keyword } = word;

  const [inputText, setInputText] = useState({
    content: "",
    keyword: "",
  });
  const { content, keyword } = inputText;

  const handleInput = (e) => {
    console.log("e.target.name : ", e.target.name);
    console.log("e.target.value : ", e.target.value);
    setInputText({ ...inputText, [e.target.name]: e.target.value });
  };

  // const wordHandleChange = (e) => {
  //   setInputText({ [e.target.name]: e.target.value });
  // };

  const deleteArr = (index) => {
    contentArr.splice(index, 1);
    setContentArr((contentArr) => [...contentArr]);
  };

  // const [content, setContent] = useState("");
  const [contentArr, setContentArr] = useState([]);
  // const handleChange = (e) => {
  //   setInputText({ [e.target.name]: e.target.value });
  // };
  const addValue = (e) => {
    console.log("addValue : ", e.target.name);
    setContentArr((contentArr) => [...contentArr, content]);
    setInputText({ ...inputText, [e.target.name]: "" });
  };

  const [completion, setCompletion] = useState(false);
  const completionCheck = () => {
    setCompletion(!completion);
  };

  const [schedule, setSchedule] = useState(false);
  const scheduleCheck = () => {
    setSchedule(!schedule);
  };

  console.log("contentArr : ", contentArr);
  return (
    <>
      <Input
        type="text"
        name="keyword"
        value={keyword}
        onChange={handleInput}
        placeholder="검색 키워드를 입력하세요."
      />
      <hr />
      <div>
        <b>일정 목록</b> 완료 목록만 보기
        <Checkbox onChange={completionCheck} />
      </div>
      {completion ? (
        <>
          <h1>완료 목록</h1>
          {contentArr.length === 0 ? (
            <p>등록된 일정이 없습니다.</p>
          ) : (
            <>
              {contentArr
                .filter((element) => {
                  if (keyword === "") {
                    return element;
                  } else if (element.includes(keyword)) {
                    return element;
                  }
                })
                .map((element, index) => {
                  return (
                    <>
                      <ul>
                        <Checkbox onChange={scheduleCheck} />
                        {element},{index}
                        <Button onClick={() => deleteArr(index)}>삭제</Button>
                      </ul>
                    </>
                  );
                })}
            </>
          )}
        </>
      ) : (
        <>
          <h1>미완료 목록</h1>
          {contentArr.length === 0 ? (
            <p>등록된 일정이 없습니다.</p>
          ) : (
            <>
              {contentArr
                .filter((element) => {
                  if (keyword === "") {
                    return element;
                  } else if (element.includes(keyword)) {
                    return element;
                  }
                })
                .map((element, index) => {
                  return (
                    <>
                      <ul>
                        <Checkbox onChange={scheduleCheck} />
                        {element},{index}
                        <Button onClick={() => deleteArr(index)}>삭제</Button>
                      </ul>
                    </>
                  );
                })}
            </>
          )}
        </>
      )}
      <hr />
      <Input
        type="text"
        name="content"
        value={content}
        placeholder="테스크명을 입력하세요."
        onChange={handleInput}
      />
      <Button onClick={addValue}>추가</Button>
    </>
  );
};

export default Board;
