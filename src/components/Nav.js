import React from 'react'
import "./header.css"
const Nav = () => {

const DATA = [
    {
        id : 0,
        title : "IPhone 11",
        price : 750,
        desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        img : "/img/13.jpg"
    },
    {
        id : 1,
        title : "IPhone 11 Pro Max",
        price : 800,
        desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        img : "/img/13.jpg"
    },
    {
        id : 2,
        title : "IPhone 12 Mini",
        price : 950,
        desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        img : "/img/i1.jpg"
    },
    {
        id : 3,
        title : "IPhone 12",
        price : 1050,
        desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        img : "/img/14.jpg"
    },
    {
        id : 4,
        title : "IPhone 12 Pro",
        price : 1150,
        desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        img : "/img/12.jpg"
    },
    {
        id : 5,
        title : "IPhone 12 Pro Max",
        price : 1250,
        desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        img : "/img/15.jpg"
    }
]

return(
    <div>
        {
            DATA.map((ipl)=>
         <>
         <div className='iphone'>
            <div id="i2">

            <h5> {ipl.id}</h5>
            <div id="i5">
           <img src={ipl.img[0]} className='i6' alt={ipl.title}/>
          
           <img src={ipl.img[1]} className='i6' alt={ipl.title}/>
          
          
           <h5>{ipl.title}</h5>
           <h4>{ipl.price}</h4>
           </div>
          </div>
           </div>
    </>
       ) }
    </div>
)
 
   
     



  
}

export default Nav