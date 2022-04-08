import React, { useState, useEffect } from 'react'
import style from './AddingForm.module.css'

const AddingForm=()=>{


    const [images,setImages]=useState([]);
    const [imageUrls,setImageUrls]=useState([]);

    useEffect(()=>{
        if(images.length<1) return;
        const newImageUrls=[];
        images.forEach(image=>newImageUrls.push(URL.createObjectURL(image)));
        setImageUrls(newImageUrls);
    }, [images]);

    const onImageChange=(e)=>{
        setImages([...e.target.files])
    }

    const [pdfFiles,setPdfFiles]=useState([]);
    const [pdfUrls,setPdfUrls]=useState([]);
    useEffect(()=>{
        if(pdfFiles.length<1) return;
        const newPdfUrls=[];
        pdfFiles.forEach(pdfFile=>newPdfUrls.push(URL.createObjectURL(pdfFile)));
        setPdfUrls(newPdfUrls);
    }, [pdfFiles]);
    
    const onPdfChange= (e)=>{
        setPdfFiles([...e.target.files])
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        // debugger;

        let fName=document.getElementById('firstName').value;
        let lName=document.getElementById('lastName').value;
        let birthDay=document.getElementById('firstName').value;
        let gender=document.getElementById('gender').value;

        


        let formData=new FormData();
        formData.append("firstName",fName);
        formData.append("lastName",lName);
        formData.append("birthDay",birthDay);
        formData.append("gender",gender);

        formData.append("photo",imageUrls[0]);
        formData.append("pdfFile",pdfUrls[0]);


        console.log(formData);
       
        
             const options = {
                method: 'POST', 
                 headers:{'Content-Type': 'multipart/form-data'},              
                body: formData,
            };

       let response=await  fetch('http://intern-2022.arpify.com/form',options)
      let result=await response.json();
      console.log(result);
                // .then(response => response.json())
                // .then(data => {console.log(data)})
                // .catch((err)=>console.log(err));
            
         
    }

return(
   <form id='formElem'>
       <div className={style.form}>
       <label>
           firstName -
           <input type="text" id='firstName'/>
       </label>
       </div>
       <div className={style.form}>
       <label>
           lastName -<input type="text" id='lastName'/>
       </label>
       </div>
       <div className={style.form}>
       <label>
           birthDay -<input type="text" id='birthDay'/>
       </label>
       </div>
       <div className={style.form}>
       <label>
           gender -<input type="text" id='gender'/>
       </label>
       </div>
      
       <div className={style.form}>
       <input type="file" multiple accept=".img,.png" onClick={onImageChange} />
       {/* <img src={imageUrls[0]} /> */}
       

      </div>

      <div className={style.form}>
       <input type="file" accept=".pdf" onChange={onPdfChange}/>
       {/* <label>{pdfUrls[0]}</label> */}
       </div>

       <div className={style.form}>
       <input type="submit" value="Submit" onClick={handleSubmit}/>
       </div>
   </form>
)
}

export default AddingForm;