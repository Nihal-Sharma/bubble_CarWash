import React, { useState } from "react";

const LoginForm = () => {
  const [otpreq, setOtpreq] = useState("false");
  function requestotp(){
    setOtpreq("true")
  }
  return (
    <div
      style={{
        border: "4px solid grey",
        padding :'30px',
        width: "40vw",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontSize: "30px",
          width: "100%",
          textAlign: "center",
          marginBottom: "70px",
        }}
      >
        {" "}
        Please Login First
      </div>
      <div
        style={{
          marginBottom: "30px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <text style={{ fontSize: "22px" }}>Phone Number : </text>
        <input
          style={{ width: "40%", height: "40px" }}
          type="number"
          required
        ></input>
      </div>
      <div>
        <button
          style={{
            fontSize: "20px",
            height: "50px",
            borderRadius: "10px",
            color: "white",
            backgroundColor: "grey",
          }}
          onClick={requestotp}
        >
          Send OTP
        </button>
      </div>
      {otpreq == "true" ? (
        <div style={{ width: "100%"  ,display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop :'50px'
        }}>
          <input
            placeholder="Enter The OTP"
            style={{
              width: "35%",
              height: "40px",
              fontSize: "20px",
             
            }}
          ></input>
          <button
            style={{
              fontSize: "20px",
              height: "50px",
              borderRadius: "10px",
              color: "white",
              backgroundColor: "grey",
              padding :'10px',
              marginTop :'20px'
            }}
          >
            Verify
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default LoginForm;
