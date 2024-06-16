import React, { useEffect, useRef, useState } from 'react';

const OtpInput = ({length=6, onOtpSubmit=()=>{}}) => {

    let [otp,setOtp] = useState(new Array(length).fill(""));
    let inputRef = useRef([]);

    useEffect(()=>{
        if(inputRef.current[0]){
            inputRef.current[0].focus();
        }
    },[])

    // console.log(inputRef);

    let changeHandeler = (index,event)=>{
        let value = event.target.value;
        if(isNaN(value)) return

        let newOtp = [...otp];
        //allow only one input
        newOtp[index] = value.substring(value.length -1);
        setOtp(newOtp)

        //submit trigger
        let combinOtp = newOtp.join('');
        // console.log(newOtp ,combinOtp)
        if(combinOtp.length === length) onOtpSubmit(combinOtp)
        //Move to next input field if current field is filled
        if(value && index < length - 1 && inputRef.current[index+1]){
            inputRef.current[index + 1].focus();
        }
    };
    let clickHandler = ()=>{}
    let keyDownHandler = ()=>{}

  return (
    <>
     {
        otp.map((value,index)=>{
            return <input key={index} 
            type="text"
            value={value}
            ref={(input)=>inputRef.current[index] = input}
            onChange={(event)=>changeHandeler(index,event)}
            onClick={()=>clickHandler(index)}
            onKeyDown={(event)=>keyDownHandler(index, event)}
            className='otpinput'
             />
        })
     }
    </>
  );
}

export default OtpInput;

