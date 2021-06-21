import React, { useState } from 'react';

const Tour = ({id,name,info,image,price,deleteItem}) => {

  const[readMore,setReadMore]=useState(false)
 
  return <article className='single-tour'>
   <img src={image} alt="" />
   <footer>
     <div className='tour-info'>
        <h4>{name}</h4>
        <h4 className='tour-price'>{price}</h4>
     </div>
     <p> 
       {readMore? info : `${info.substring(0,150)}`}
       <button onClick={()=>setReadMore(!readMore)}>
         {readMore?'show less':"show more"}
         </button>
       </p>

      <button className='delete-btn' onClick={()=>deleteItem(id)}>not intrested </button>
   </footer>
    </article>;
};

export default Tour;
