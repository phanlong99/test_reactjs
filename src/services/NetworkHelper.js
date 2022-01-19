import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";


export const getData = () => {
  return axios.get(`https://ywb.originally.us/backend/content`).then((res) => {
    return res.data;
  });
};

// const PersonList = () => {
//   useEffect(() => {
//     getData();
//   }, [ywbDatas]);
//   const getData = () => {
//     axios.get(`https://ywb.originally.us/backend/content`).then((res) => {
//       setYwbDatas(res.data);
//     });
//   };
//   // return (
//   //   <ul>
//   //     {ywbDatas?.domains?.map((item, index) => {
//   //       return <li key={index}>{item.name}</li>;
//   //     })}
//   //   </ul>
//   // );
// };
// export default PersonList;

