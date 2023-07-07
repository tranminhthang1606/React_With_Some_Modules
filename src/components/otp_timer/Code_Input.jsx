import React, { useEffect, useState } from "react";
import OtpInput from 'react-otp-input';

const Code_Input = () => {
  const [otp, setOtp] = useState();
  const [gnr_otp, setGnr_otp] = useState();
  const handleGetOTP = () => {
    let rand_otp = Math.floor(100000 + Math.random() * 900000);
    setGnr_otp(rand_otp);
  };
  const clear_input =()=>{
    setOtp();
  }
  useEffect(()=>{
     if(gnr_otp!=undefined){
      if(Number(otp) === Number(gnr_otp)){
        console.log("match")
      }
     }
  },[otp])

  return (
    <>
    <h2 style={{ color:"red" }}>Mã OTP của bạn : {gnr_otp}</h2>
      <div className="code_input_group">
        
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>--</span>}
          renderInput={(props) => <input {...props} 
          style={{
            border: "1px solid transparent",
            borderRadius: "8px",
            width: "54px",
            height: "54px",
            fontSize: "25px",
            fontWeight: "700",
            color: "#000",
            fontWeight: "400",
            caretColor: "blue",
            textAlign:"center"
          }}
          />}
        />
      </div>
      <div className="button_group">
        <button className="clear_button" onClick={()=>clear_input()}>Clear</button>
        <button className="getOTP_button" onClick={() => handleGetOTP()}>
          Get OTP
        </button>
      </div>
    </>
  );
};
export { Code_Input };
