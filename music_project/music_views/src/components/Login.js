import React, { useRef, useState } from "react";
import { doAjax } from "../utils/ajax";
import { DashBoard } from "./DashBoard";
import { DashBoardAdmin } from "./DashBoardAdmin";

let admin = false;
export const Login = () => {
  const userid = useRef("");
  const password = useRef("");
  const [message, setMessage] = useState("");
  const doLogin = () => {
    console.log(userid, password);
    let uid = userid.current.value;
    let pwd = password.current.value;
    const userObject = { userid: uid, password: pwd };
    console.log("URL is ", process.env.REACT_APP_LOGIN_URL);
    const json = JSON.stringify(userObject);
    console.log("JSON is ", json, " Object is ", userObject);
    const promise = doAjax(process.env.REACT_APP_LOGIN_URL, "POST", json);
    promise
      .then((response) => {
        response
          .json()
          .then((data) => {
            console.log("Data Rec From Server ", data);
            setMessage(data.message);
          })
          .catch((err) => {
            console.log("Invalid JSON ", err);
          });
      })
      .catch((err) => {
        console.log("Error During Server Call ", err);
      });
    if (uid === "admin") admin = true;
  };

  if (message.startsWith("Welcome") && admin) {
    return <DashBoardAdmin msg={message} />;
  } else if (message.startsWith("Welcome")) {
    return <DashBoard msg={message} />;
  } else {
    return (
      <>
        <h2 className='text-danger'>{message}</h2>
        <div className='form-group'>
          <label>Userid</label>
          <input
            ref={userid}
            className='form-control'
            type='text'
            placeholder='Type Userid Here'
          />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input
            ref={password}
            className='form-control'
            type='password'
            placeholder='Type Password Here'
          />
        </div>
        <div className='form-group'>
          <button onClick={doLogin} className='btn btn-primary'>
            Login
          </button>
          &nbsp;&nbsp;
          <button
            className='btn btn-secondary'
            onClick={() => {
              password.current.value = "";
              userid.current.value = "";
            }}
          >
            Reset
          </button>
        </div>
      </>
    );
  }
};
