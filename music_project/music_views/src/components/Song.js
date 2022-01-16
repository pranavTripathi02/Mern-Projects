import React, { useEffect, useState } from "react";
export const Song = (props) => {
  console.log(props);
  //   const [songs, setSongs] = useState([]);
  const songs = [
    {
      imageurl: "https://timesofindia.indiatimes.com/photo/67861182.cms",
      name: "sonu nigam song 1",
      url: "www.google.com/s?sonu+nigam",
    },
  ];
  const audioStyle = {
    width: "400px",
  };
  const imageStyle = {
    height: "100px",
    width: "100px",
  };
  let singerName = props.singerName;
  if (!singerName) {
    singerName = props.match.params.singerName;
  }

  console.log("Singer Name Rec is ", singerName);
  //   useEffect(() => {
  //     let url = `${process.env.REACT_APP_SONG_URL}`;
  //     console.log("url is: ", url);
  //     const promise = fetch(url);
  //     promise
  //       .then((response) => {
  //         response
  //           .json()
  //           .then((data) => {
  //             console.log("Data is ", data);
  //             setSongs(data);
  //           })
  //           .catch((err) => {
  //             console.log("JSON Error is ", err);
  //           });
  //       })
  //       .catch((err) => console.log("Error is ", err));
  //   }, [singerName]);
  return (
    <>
      <h3>Song of {singerName}</h3>
      {songs.map((song) => {
        return (
          <div>
            <img src={song.imageurl} style={imageStyle} />
            <p>{song.name}</p>
            <audio controls style={audioStyle}>
              <source src={song.url} type='audio/mp4'></source>
            </audio>
          </div>
        );
      })}
    </>
  );
};
