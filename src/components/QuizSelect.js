import React from "react";
import Header from "./framework/Header";
import ConnectApi from "../api/ConnectApi";

export default function QuizSelect() {
  const API_URL = "https://127.0.0.1:8000/quiz/";
  const [dataState] = ConnectApi(API_URL);
  console.log(dataState)
  return (
    <div>
      <Header />
    </div>
  );
}
