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

return(
   <form >
       <div className={style.form}>
       <label>
           firstName -
           <input type="text"/>
       </label>
       </div>
       <div className={style.form}>
       <label>
           lastName -<input type="text"/>
       </label>
       </div>
       <div className={style.form}>
       <label>
           birthDay -<input type="text"/>
       </label>
       </div>
       <div className={style.form}>
       <label>
           gender -<input type="text"/>
       </label>
       </div>
      
       <div className={style.form}>
       <input type="file" multiple accept=".img,.png" onChange={onImageChange} />
      </div>

      <div className={style.form}>
       <input type="file" accept=".pdf"/>
       </div>
       <div className={style.form}>
       <input type="submit" value="Submit" />
       </div>
   </form>
)
}

export default AddingForm;