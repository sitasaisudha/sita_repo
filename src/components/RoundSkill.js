import React from 'react';
// import './Skills.css'
const RoundSkill = (props) => {
    const removeData = ()=>{
        
    }
   
    return (
        <div  id={props.value} style={{backgroundColor:'green'}}  className='skill-btn'>
            {props.value}
            <button  id='sk'  onClick={removeData} > X </button>
        </div>
    );
};

export default RoundSkill;