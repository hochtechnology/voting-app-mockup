import React, { useEffect, useState } from 'react'
import {Formik} from "formik";
import Input from './common/Input';
import { useDispatch } from "react-redux";
import YearPicker from "react-year-picker"
import { submitAlbum } from './redux/actionCreator/action';



//ALBUM  FORMS

const ProductForm = () => {
    const dispatch = useDispatch();
    

const initialValues={
    albumName:'',
    bandName:'',
    releaseYear:'',
    albumURL:'',
    infoURL:'',
    submittedBy:''
}


    return (
        <>
        <div className="container">

        <div className="row py-5 mt-4 align-items-center">
                    <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
                        <img src="assets/ironman.jpg" alt="" className="img-fluid mb-3 d-none d-md-block"  width="300rem"/>
                        <h1>Add New Album</h1>
                       {/*  <p className="font-italic text-muted mb-0">Create a minimal registeration page using Bootstrap 4 HTML form elements.</p>
                        <p className="font-italic text-muted">Snippet By <a href="https://bootstrapious.com" className="text-muted">
                            <u>Bootstrapious</u></a>
                        </p> */}
                    </div>
                    <div className="col-md-7 col-lg-6 ml-auto">
                        <Formik
                        initialValues={initialValues}
                        onSubmit={(values,actions)=>{

                            dispatch(submitAlbum(values));
                            actions.resetForm();
                           
                        }}
                        >
                            {({values,handleSubmit,handleChange,handleBlur,handleReset,errors,touched})=>{
                                return(
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                         <div className="input-group col-lg-6 mb-4">     
                                                                                     
                                               <Input
                                               id="albumName"
                                               type="text"
                                               name="albumName"
                                               value={values.albumName}
                                               touched={touched.albumName}
                                               errors={errors.albumName}
                                               handleChange={handleChange}
                                               handleBlur={handleBlur}
                                               placeholder="Album Name"
                                               className="form-control bg-white border-left-1 text-center border-md"
                                               />
                                          </div>
                                          <div className="input-group col-lg-6 mb-4">     
                                                                                     
                                               <Input
                                               id="bandName"
                                               type="text"
                                               name="bandName"
                                               value={values.bandName}
                                               touched={touched.bandName}
                                               errors={errors.bandName}
                                               handleChange={handleChange}
                                               handleBlur={handleBlur}
                                               placeholder="Band Name"
                                               className="form-control bg-white border-left-1 text-center border-md"
                                               />
                                          </div>
                                          <div className="input-group col-lg-6 mb-4">  
                                          <Input
                                                id="releaseYear"
                                                type="text"
                                                name="releaseYear"
                                                value={values.releaseYear}
                                                touched={touched.albumURL}
                                                errors={errors.albumURL}
                                                handleChange={handleChange}
                                                handleBlur={handleBlur}
                                                placeholder="Release Year"
                                                className="form-control bg-white border-left-1 text-center border-md"
                                                />
                                          </div>
                                          <div className="input-group col-lg-6 mb-4">     
                                                                                     
                                                <Input
                                                id="albumURL"
                                                type="text"
                                                name="albumURL"
                                                value={values.albumURL}
                                                touched={touched.albumURL}
                                                errors={errors.albumURL}
                                                handleChange={handleChange}
                                                handleBlur={handleBlur}
                                                placeholder="Album Cover URL"
                                                className="form-control bg-white border-left-1 text-center border-md"
                                                />
                                         </div>
                                         <div className="input-group col-lg-6 mb-4">     
                                                                                     
                                                <Input
                                                id="infoURL"
                                                type="text"
                                                name="infoURL"
                                                value={values.infoURL}
                                                touched={touched.infoURL}
                                                errors={errors.infoURL}
                                                handleChange={handleChange}
                                                handleBlur={handleBlur}
                                                placeholder="More info URL"
                                                className="form-control bg-white border-left-1 text-center border-md"
                                                />
                                         </div>
                                         <div className="input-group col-lg-6 mb-4">                       
                                            <select id="submittedBy" name="submittedBy" className="form-control custom-select bg-white border-left-1 border-md" value={values.submittedBy}  onChange={handleChange}>
                                                <option value="">Submitted By</option>
                                                <option value="Joe Doe">Joe Doe</option>
                                                <option value="Developer">Developer</option>
                                                <option value="Manager">Manager</option>
                                                <option value="Accountant">Accountant</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-lg-12 mx-auto mb-0">
                                            <button type="submit"  className="btn btn-primary btn-block py-2">
                                                <span className="font-weight-bold">Submit</span>
                                            </button>
                                        </div>
                                         
                                        </div>
                                    </form>
                                )
                            }}

                        </Formik>
                    </div>
        </div>
           
            </div>
        </>
    )
}

export default ProductForm;
