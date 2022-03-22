import React, { useRef, useState } from "react";
import { doAjax } from "../utils/ajax";
import { DashBoard } from "./DashBoard";
import { DashBoardAdmin } from "./DashBoardAdmin";

export const SongAdd = () => {
  const name = useRef("");
  const url = useRef("");
  const artistName = useRef("");
  const imageurl = useRef("");
  const [message, setMessage] = useState("");
  const doSongAdd = () => {
    let Songname = name.current.value;
    let Songurl = url.current.value;
    let ArtistName = artistName.current.value;
    let ImageUrl = imageurl.current.value;
    const songObj = {
      name: Songname,
      url: Songurl,
      artistName: ArtistName,
      imageurl: ImageUrl,
    };
    console.log("URL is ", process.env.REACT_APP_SONGADD_URL);
    const json = JSON.stringify(songObj);
    let promise = doAjax("http://localhost:1234/addsong", "POST", json);
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
        <label>Song Url</label>
        <input
          ref={url}
          className='form-control'
          type='text'
          placeholder='Type Song Url Here'
        />
      </div>
      <div className='form-group'>
        <label>Song Artist</label>
        <input
          ref={artistName}
          className='form-control'
          type='text'
          placeholder='Type Song Artist Here'
        />
      </div>
      <div className='form-group'>
        <label>Image Url</label>
        <input
          ref={imageurl}
          className='form-control'
          type='text'
          placeholder='Type Image Url Here'
        />
      </div>
      <div className='form-group'>
        <button onClick={doSongAdd} className='btn btn-primary'>
          Add
        </button>
        &nbsp;&nbsp;
        <button className='btn btn-secondary'>Reset</button>
      </div>
    </>
  );
};
