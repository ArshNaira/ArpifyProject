import React, { useState, useEffect } from 'react'; 
import PersElement from './PersElement';
import style from './PersonalData.module.css';



const PersonalData=()=>{

    const [persData, setPersData] = useState([]);

    useEffect(() => {
         const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                 "firstName": "Naira",
                 "lastName": "Arshakyan",
                 "birthDay":"2022-02-02",
                 "gender": "female"
         })
        };
        try{
        fetch('http://intern-2022.arpify.com/init', requestOptions)
            .then(response => response.json())
            .then(data => {setPersData(data)})
            .catch((err)=>console.log(err));
        }
        catch(e){console.log(e)}
     }, []);

     const persElements=persData.map((elem,index)=>
                  <PersElement key={index.toString()} persDataRow={elem}  />
                  );

    return (
         <div >
             <table >
                 <thead>
                 <tr>
                     <th>FirstName</th>
                     <th>LastName</th>
                     <th>BirthDay</th>
                     <th>Gender</th>
                 </tr>
                 </thead>
                 <tbody>
                      {persElements}
                </tbody>
             </table>
            </div>
        
    );
}
export default PersonalData;