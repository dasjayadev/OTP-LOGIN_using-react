import React, { useState } from "react";
import OtpInput from "./OtpInput";

function PhoneOtpForm() {
  let [phoneNumber, setPhoneNumber] = useState("");
  let [showOtpInput, setShowOtpInput] = useState(false);

  function handelPhoneNumber(event) {
    setPhoneNumber(event.target.value);
  }

  function handelPhoneSubmit(event) {
    event.preventDefault();

    const regex = /[^0-9]/g;
    if (phoneNumber.length < 0 || regex.test(phoneNumber)) {
      alert("invalide phone Number");
      return;
    }
    //call be api
    //show otp field

    setShowOtpInput(true);
  }
  //call a function onOtpSubmit
let onOtpSubmit=(otp)=>{

}

  return (
    <>
      {!showOtpInput ? (
        <form onSubmit={handelPhoneSubmit}>
          <input
            type="text"
            value={phoneNumber}
            onChange={handelPhoneNumber}
            placeholder="Enter the phone number"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>enter otp send to this {showOtpInput}</p>
          <OtpInput length={6} onOtpSubmit={onOtpSubmit}/>
        </div>
      )}
    </>
  );
}

export default PhoneOtpForm;
