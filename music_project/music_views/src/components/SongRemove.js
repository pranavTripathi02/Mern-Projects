import React, { useRef, useState } from "react";
import { doAjax } from "../utils/ajax";

export const SongRemove = () => {
  const name = useRef("");
  const [message, setMessage] = useState("");
  const doSongRemove = () => {
    let Songname = name.current.value;
    const songObj = {
      name: Songname,
    };
    // console.log("URL is ", process.env.REACT_APP_SONGADD_URL);
    const json = JSON.stringify(songObj);
    // Songname = name;
    let promise = doAjax("http://localhost:1234/removesong", "POST", json);
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
  };
  return (
    <>
      <h2>{message}</h2>
      <div className='form-group'>
        <label>Song Name</label>
        <input
          ref={name}
          className='form-control'
          type='text'
          placeholder='Type Song Name Here'
        />
      </div>
      <div className='form-group'>
        <button onClick={doSongRemove} className='btn btn-primary'>
          Remove
        </button>
        &nbsp;&nbsp;
        <button className='btn btn-secondary'>Reset</button>
      </div>
    </>
  );
};
