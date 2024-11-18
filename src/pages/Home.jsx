import Questionare from "../components/Questionaire";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../components/Button";
import Result from "../components/Result";
const Home = () => {
  const [data, setData] = useState([]);
  const [selectedAnswers,setSelectedAnswers]=useState([])
  const [checkBox,setCheckbox]=useState([])
  const [result,setResult]=useState(false)
  const [score,setScore]=useState('')

  const submitHandler=()=>{
    let totalScore=0;
    if(data.length!=selectedAnswers.length){
      alert("please fill all the questions to proceed")
      return
    }

    selectedAnswers.forEach((item)=>{
      totalScore+=item.score
    })

    axios.post("https://assesment-server-umber.vercel.app/calculate-risk-score",{userScore:totalScore})
    .then((res)=>{
      console.log(res.data)
      setResult(true)
      
      setScore(res.data.data)
    })
    .catch((error)=>{
      console.log(error)
    })


  }

  const getAssesment=()=>{
    axios
    .get("https://assesment-server-umber.vercel.app/risk-questions")
    .then((res) => {
      console.log(res.data.data)

      let temp=[]

      res.data.data.forEach((item)=>{
          let obj={
              
          }

          obj[item.id]=[]
          item.options.forEach((re)=>{
              re['active']=''

              obj[item.id].push(re)
              
          })
          temp.push(obj)
      })

      setCheckbox(temp)
      

      setData(res.data.data);
    })
    .catch((error) => {
      console.log(error);
    });

  }
  useEffect(() => {
    getAssesment()
   
  }, []);



  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#f4f4f4",
        paddingTop: "2rem",
      }}
    >
      {
        result?<Result score={score} getAssesment={getAssesment} resetData={()=>{setData([])}} setResult={setResult}/>:
        <>
           <h2 style={{ textAlign: "center" }}>
        Register for private round assesment
      </h2>
      <h3
        style={{
          color: "#808080",
          textAlign: "center",
          fontWeight: "normal",
          fontSize: "1.2rem",
          marginBottom: "3rem",
        }}
      >
        Please answer the following questions,it wont take long
      </h3>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection:"column"
        }}
      >
        {
            data.map((item,idx)=><Questionare key={idx} question={item.question} options={item.options} total={data.length} idx={idx} questionId={item.id} selectedAnswers={selectedAnswers} setSelectedAnswers={setSelectedAnswers} checkBoxData={checkBox} setCheckbox={setCheckbox}/>)
        }
        
      </div>
      <div  style={{display:"flex",justifyContent:"flex-end",alignItems:"center",marginTop:"1rem",marginRight:"8rem"}}>
      <Button value="submit" onClick={submitHandler} style={{cursor:"pointer"}}/>

      </div>
        </>
      }
   
    </div>
  );
};

export default Home;
