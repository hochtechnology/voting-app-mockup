import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import faker from "faker";
import { increaseCount } from './redux/actionCreator/action';
import DataPagination from './common/DataPagination';
import { Pagination,PaginationItem,PaginationLink } from 'reactstrap';




const Albums = () => {
    
    //FETCH DATA FROM REDUX STORE
    const {albums} = useSelector(state => ({
        albums:state.albums}));
    
    
    const printAlbum=albums ?<ShowNewAlbum  albums={albums}/>:null;
    
    return (
        <div className="container">
            <h2>Popular Metal Albums</h2>            
              {printAlbum}
        </div>
    )
}




//PRINT ONE BY ONE ALBUM




const ShowNewAlbum=({albums})=>{
    const[currentPage,setCurrentPage]=useState(0);
   const dispatch = useDispatch();


   var pageSize=6;
   var pagesCount = Math.ceil(albums.length / pageSize);


  const  handleClick=(e, index)=> {
    
    e.preventDefault();
     setCurrentPage(index)
  }


   const counter=async(countAlbum)=>{
      await dispatch(increaseCount(countAlbum));
   }
    return(
        <>
          <div className="row">
             {albums.slice(
                  currentPage * pageSize,
                  (currentPage + 1) * pageSize
                ).map((album,index)=>{
                   
                    return(
                        <div className={`col-lg-4  col-md-6 col-sm-4 `} key={index}>
                                <div className="row">
                                    <div className="col-lg-5 col-md-5">
                                        <img src={`${album.image}`} alt="fake" height="150px" width="120px" className="rounded"/>
                                    </div>
                                    <div className="col-lg-7 col-md-7 ">
                                    <p ><i onClick={()=>counter(album.id)} className="fas fa-thumbs-up"></i>{album.count}</p>
                                       <h6 style={{color:'GrayText'}}>{album.albumName}</h6>
                                       <h6>{album.bandName},{album.releaseYear}</h6><br/>
                                       <p>Submitted By:{album.submittedBy}</p>
                                    </div>
                                </div>
                       </div>
                    )
             })}
            
         </div>
         <div className="pagination-wrapper">
              
              <Pagination aria-label="Page navigation example">
                
                <PaginationItem disabled={currentPage <= 0}>
                  
                  <PaginationLink
                    onClick={e => handleClick(e, currentPage - 1)}
                    previous
                    href="#"
                  />
                  
                </PaginationItem>
    
                {[...Array(pagesCount)].map((page, i) => 
                  <PaginationItem active={i === currentPage} key={i}>
                    <PaginationLink onClick={e => handleClick(e, i)} href="#">
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                )}
    
                <PaginationItem disabled={currentPage >= pagesCount - 1}>
                  
                  <PaginationLink
                    onClick={e => handleClick(e, currentPage + 1)}
                    next
                    href="#"
                  />
                  
                </PaginationItem>
                
              </Pagination>
              
            </div>
      </>
    )
}



export default Albums;
