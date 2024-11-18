import { useEffect,useState } from "react";
const CustomInput = ({
  width,
  marginLeft,
  text,
  value,
  inputText,
  onChange,
  marginBottom,
  setValue,
  questionId,
  setSelectedAnswers,
  selectedAnswers,
  score,
  checkBoxData,
  setCheckbox,
}) => {

  const [count,setCount]=useState(0)
  useEffect(() => {
    console.log(inputText, "==>>", text);
  }, [inputText]);

  const onChangeVal = () => {
    const temp = checkBoxData.map((item) => {
      if (Object.keys(item)[0] == questionId) {
        const updatedValues = Object.values(item)[0].map((op) => ({
          ...op,
          active: op.value == text ? text : "",
        }));
        return { [questionId]: updatedValues };
      }
      return item;
    });
  
    setCheckbox(temp);
    setCount((prev) => prev + 1);
  };

  const isChecked = () => {
    console.log("ppppp",questionId)

    const questionData = checkBoxData.find(
      (ite) => {
         console.log("inner",Object.keys(ite)[0],questionId)
        return Object.keys(ite)[0] == questionId
      
      }
    );


    if (!questionData) return false;
  
    const options = Object.values(questionData)[0];
    const result= options.find((itm) => itm.value === text)?.active === text;

    console.log("ppppp",result,checkBoxData,questionId,questionData)

    return result
  };
  
  return (
    <>
      <div
        style={{
          border: "1px solid #bfbfbf",
          height: "5rem",
          minWidth: "20rem",
          paddingRight: "0.5rem",
          width: width,
          marginLeft: marginLeft,
          display: "flex",
          alignItems: "center",
          borderRadius: "5px",
          boxShadow: "1px 1px 1px 0px rgba(0,0,0,0.3)",
          marginBottom: marginBottom,
          backgroundColor:isChecked()?"#fff1dc":""
        }}
      >
       
        <input
          style={{ accentColor: "#222222", marginLeft: "1.5rem" }}
          type="radio"
          id={`radio-${questionId}-${text}`}
          name={`radio-group-${questionId}`}
          value={text}
          checked={
            isChecked()
          }
          onChange={() => {
        
           try{
            onChangeVal();

           }catch(err){
            console.log(err)

           }

           console.log("kkkk")
            let temp = JSON.parse(JSON.stringify(selectedAnswers));

            const foundIndex = temp.findIndex((item) => item.id == questionId);

            if (foundIndex == -1) {
              temp = [...temp, { id: questionId, score: score }];
            } else {
              temp[foundIndex].score = score;
            }

            setSelectedAnswers(temp);
          }}
        />
        <label
          htmlFor="checkBox"
          style={{ marginLeft: "0.5rem", color: "#808080" }}
        >
          {text}
        </label>
      </div>
    </>
  );
};

export default CustomInput;
