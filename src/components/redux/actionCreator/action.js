import { SUBMIT_ALBUM } from "./action.types"
import faker from "faker";

//ALL ACTIONS FOR PROJECT

const _submitAlbum=(data)=>{
   
    return{
        type:SUBMIT_ALBUM,
        payload:data
    }
}


function getRandomId(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

//ALL ALBUMS
const albums=[];



export const submitAlbum=(data)=>{
    data={
        id:getRandomId(1,100),
        albumName:data.albumName,
        albumURL:data.albumURL,
        bandName:data.bandName,
        infoURL:data.infoURL,
        releaseYear:data.releaseYear,
        submittedBy:data.submittedBy,
        image:faker.image.image(),
        count:1
    }
      albums.push(data);


    return async(dispatch)=>{
        await dispatch(_submitAlbum(albums));

    }
}


//COUNT FUNCTION    



const compareObject=(countAlbum)=>{
    for (let i = 0; i < albums.length; i++) {
        if(albums[i].id===countAlbum){
                ++albums[i].count;
       }
       
   }
}


const sortCounter=()=>{

    albums.sort((a,b)=>{
        return b.count-a.count
    })
}



//Increase

export const increaseCount=(countAlbum)=>{
    console.log(countAlbum);

    compareObject(countAlbum);
    
  sortCounter();



  console.log(albums)
    return (dispatch)=>{
        dispatch(_submitAlbum(albums));
    }

}