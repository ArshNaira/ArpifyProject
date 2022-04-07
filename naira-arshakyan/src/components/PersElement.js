import React from "react";
import style from './PersonalData.module.css';

const PersElement=({persDataRow})=>{
    let isMyName=false;
    let myName={};
    myName=persDataRow.firstName;
    if(myName==="Naira"){
        isMyName=true;
    }
    return <tr>
      <td className={isMyName?`${style.myRow}`:''}> {persDataRow.firstName} </td> 
      <td className={isMyName?`${style.myRow}`:''}> {persDataRow.lastName} </td> 
      <td className={isMyName?`${style.myRow}`:''}> {persDataRow.birthDay} </td> 
      <td className={isMyName?`${style.myRow}`:''}> {persDataRow.gender} </td> 
      
        </tr>

}

export default PersElement;