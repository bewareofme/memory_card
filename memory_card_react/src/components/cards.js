/* eslint-disable jsx-a11y/alt-text */
import React, { useState,useEffect } from "react";
import '../styles/cards.css'
const Cards = (props) => {

  const rerender=()=>{
    let randomNum=Math.floor(Math.random() * (12 ))+1 ;
    const assignedArray=[]
    const cardcontainers=document.querySelectorAll('.cards_container')
    cardcontainers.forEach((card)=>{
      while(assignedArray.find((value)=>value===randomNum) && assignedArray.length<12){
        randomNum=Math.floor(Math.random() * (12 ))+1 ;
      }
      const imageselected=document.querySelector(`img[value='${randomNum}']`)
      card.appendChild(imageselected)
      assignedArray.push(randomNum)
    })
    console.log(randomNum)
  }
  
   useEffect(()=>{
    rerender()
  },[props.score])


  return (
    <div className="card_container">
        <div className="cards_container"><img src={require('../images/download.png')} value='1'/></div>
        <div className="cards_container"><img src={require('../images/2.png')} value='2'/></div>
        <div className="cards_container"><img src={require('../images/3.png')} value='3'/></div>
        <div className="cards_container"><img src={require('../images/4.png')} value='4'/></div>
        <div className="cards_container"><img src={require('../images/5.png')} value='5'/></div>
        <div className="cards_container"><img src={require('../images/6.png')} value='6'/></div>
        <div className="cards_container"><img src={require('../images/7.png')} value='7'/></div>
        <div className="cards_container"><img src={require('../images/8.png')} value='8'/></div>
        <div className="cards_container"><img src={require('../images/9.png')} value='9'/></div>
        <div className="cards_container"><img src={require('../images/jack.jpeg')} value='10'/></div>
        <div className="cards_container"><img src={require('../images/queen.jpeg')} value='11'/></div>
        <div className="cards_container"><img src={require('../images/king.png')} value='12'/></div>
    </div>
  );
};

export default Cards;