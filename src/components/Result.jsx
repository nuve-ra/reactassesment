import React from "react";
import bar from "../../public/imgs/bar.png";
import arrow from "../../public/imgs/cursor.png";
import Button from "./Button";

function Result({ resetData, getAssesment, setResult, score }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        backgroundColor: "#ffffff",
      }}
    >
      <div
        style={{
          width: "80%",
          height: "80vh",
          backgroundColor: "#ffffff",
          boxShadow: "2px 2px 2px 0px rgba(0,0,0,0.3)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "0.5rem" }}>
          Below is the risk factor for your profile
        </h2>
        <h2
          style={{
            textAlign: "center",
            fontSize: "1rem",
            fontWeight: "lighter",
            color: "#808080",
          }}
        >
          Your risk profile will be determined by assesing your capacity for
          risk tolerance,based on the answer provided earlier
        </h2>
        <div
          style={{
            width: "100%rem",
            height: "40vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "50%",
              height: "45vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                color: "#222222",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                position: "absolute",
                top:130
              }}
            >
              <div
                style={{ fontWeight: "bold", fontSize: "1.5rem" }}
              >{`${score.risk_percentage}%`}</div>
              <div style={{ fontSize: "1.1rem" }}>{score.type}</div>
              <div
                style={{
                  position: "absolute",
                  transform: "rotate(-45deg) translate(-40px,-40px)",
                }}
              >
                <img src={arrow} />
              </div>
            </div>
            <img src={bar} />
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            fontWeight: "normal",
            fontSize: "1rem",
            color: "#808080",
          }}
        >
          {`You are a ${score.type} investor.Risk should be low and you are prepaired to accept lower returns to protect capital.The negative effects of inflation may not concern you,provided your initial investments are protected`}
        </div>
        <div style={{marginTop:"1.5rem",display:"flex",justifyContent:"flex-start",alignItems:'center',gap:"40%"}}>
          <div>
            <i class="fi fi-ts-arrow-right"></i>
            <span
              style={{
                textDecoration: "underline",
                fontWeight: "bold",
                color: "#808080",
                cursor: "pointer",
              }}
              onClick={() => {
                console.log("clicked"),
                  resetData(),
                  getAssesment(),
                  setResult(false);
              }}
            >
              Back
            </span>
          </div>
          <div>
            <Button value="Accept & continue" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
