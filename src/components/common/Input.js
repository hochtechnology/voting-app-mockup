import React from 'react'


//THIS IS A COMMON FORM 
const Input = ({type,id,name,placeholder,handleChange,handleBlur,value,errors,touched,className}) => {
    return (
        <>
            <>
              
                <input
                 type={type}
                 className={className}
                 id={id} 
                 placeholder={placeholder} 
                 name={name}
                 onChange={handleChange}
                 onBlur={handleBlur}
                 value={value}

                 />
                 {touched && errors ?<div style={{color:'red'}}>{errors}</div>:null}
            </>
        </>
    )
}

export default Input;
