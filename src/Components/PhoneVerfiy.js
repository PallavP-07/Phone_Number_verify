import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import OTPInput, { ResendOTP } from "otp-input-react";
import '../App.css';
import { FaSpinner } from 'react-icons/fa';
function PhoneVerfiy() {
    const [OTP, setOTP] = useState("");
    const [loading,setLoading]=useState(false)
    const [phone,setPhone]=useState("")

    const onCaptchaVerify=()=>{
      if(!window.recaptchaVerifier){
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
          'size': 'invisible',
          'callback': (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            // ...
          },
          'expired-callback': () => {
            // Response expired. Ask user to solve reCAPTCHA again.
            // ...
          }
        }, auth);
      }

    }

  return (
    <>
    <div>
<OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={6} otpType="number" disabled={false}  />
{/* secure put in OTPInput it will hide the numbers what you entering */}
      {/* <ResendOTP onResendClick={() => console.log("Resend clicked")}  maxTime={60}/> */}
      <button>{loading &&<FaSpinner  className='Spin-Logo'/>}Verify OTP</button>

    </div>
    <div>
    <PhoneInput
      country={'in'}
      value={phone}
      onChange={setPhone}
    />
    </div>
    </>
  )
}



export default PhoneVerfiy
