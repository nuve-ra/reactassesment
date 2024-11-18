import CustomInput from "./Input";
import { useState, useEffect } from "react";
const Questionare = ({
  question,
  options,
  total,
  idx,
  questionId,
  setSelectedAnswers,
  selectedAnswers,
  checkBoxData,
  setCheckbox,
}) => {
  const [activeValue, setActiveValue] = useState("");

  const onChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div
      style={{
        width: "80%",
        padding: "1.5rem",
        backgroundColor: "#ffffff",
        marginBottom: "1.5rem",
        borderRadius: "5px",
        boxShadow: "5px 5px 1px 0px rgba(0,0,0,0.3)",
      }}
    >
      <div
        style={{ display: "flex", justifyContent: "flex-start", gap: "38%" }}
      >
        <div>
          <i class="fi fi-ts-arrow-right"></i>
          <span
            style={{
              textDecoration: "underline",
              fontWeight: "bold",
              color: "#808080",
            }}
          >
            Back
          </span>
        </div>
        <div style={{ color: "#808080", marginBottom: "2rem" }}>
          <span style={{ letterSpacing: "3px" }}>QUESTION</span> {idx + 1} of{" "}
          {total}
        </div>
      </div>
      <h2
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1.4rem",
          color: "#222222",
          letterSpacing: "1px",
          marginBottom: "2rem",
        }}
      >
        {question}
      </h2>

      <div
        style={{
          paddingLeft: "1rem",
          display: "flex",
          gap: "20px",
          justifyContent: "flex-start",
          alignItems: "center",
          flexWrap: "wrap",
          marginBottom: "2rem",
        }}
      >
        {options.map((item) => (
          <CustomInput
            text={item.value}
            checkBoxData={checkBoxData}
            setCheckbox={setCheckbox}
            score={item.score}
            selectedAnswers={selectedAnswers}
            width="45%"
            marginBottom="2rem"
            onChange={onChange}
            inputText={
              //   checkBoxData
              //     .find((ite) => ite.id == item.id)
              //     ?.find((rest) => rest.value == item.value).active
              //   Object.values(checkBoxData
              //     .find((ite) => ite.id == item.id))[0].find((cur) => cur.value == item.value).active

              Object.values(
                checkBoxData.find((ite) => Object.keys(ite)[0] == questionId)
              )[0].find((itm) => itm.value == item.value)?.active
            }
            questionId={questionId}
        
            setSelectedAnswers={setSelectedAnswers}
            setValue={(textVal) => {
              setActiveValue(textVal);

              let temp = [...checkBoxData];

              let foundIndex = temp.findIndex(
                (it) => Object.keys(it)[0] == questionId
              );

              let obtainedArray = Object.values(temp[foundIndex])[0];

              console.log("jackie chan", obtainedArray, textVal);
              obtainedArray = obtainedArray.map((op) => ({
                ...op,
                active: op.value == textVal ? textVal : "",
              }));

              let obj = {};

              obj[Object.keys(temp[foundIndex])[0]] = obtainedArray;

              console.log(Object.keys(temp[foundIndex])[0], obj);

              temp[foundIndex] = obj;

              console.log(temp);

              setCheckbox(temp);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Questionare;
