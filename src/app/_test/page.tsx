"use client";

import { useState } from "react";

export default function Test() {
  const [test, setTest] = useState({
    test01: "",
    test02: "",
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <h1>テストフォーム</h1>
      <form onSubmit={onSubmit} method="POST">
        <p>
          test01
          <input
            type="text"
            name="test01"
            id="test01"
            onChange={(e) => {
              setTest({ ...test, test01: e.target.value });
            }}
          />
        </p>
        <p>
          test02
          <input
            type="text"
            name="test02"
            id="test02"
            onChange={(e) => {
              setTest({ ...test, test02: e.target.value });
            }}
          />
        </p>
        <p>
          <input type="submit" value="送信" />
        </p>
      </form>
    </>
  );
}
