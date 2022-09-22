import React, { useState,useEffect } from "react";
import Cards from './components/cards'
import Footer from './components/footer'
import Header from './components/header'
import './styles/App.css'
const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore,setBestScore]=useState(0);
  const [memorised,setMemorised]=useState([])
  const updatescore=(e)=>{
    const value=e.target.getAttribute('value')
    if(memorised.find((cur)=>cur===value)){setScore(0);setMemorised([]); return}
    setMemorised(memorised.concat(value))
    setScore(score+1)
  }

    useEffect(()=>{
      if(bestScore<score)setBestScore(score)
      const cardscontainers=document.querySelectorAll('.cards_container>img')
      cardscontainers.forEach((card)=>{
      card.addEventListener('click',updatescore)
})
return ()=>{
  cardscontainers.forEach((card)=>{
    card.removeEventListener('click',updatescore)
})
}
// eslint-disable-next-line react-hooks/exhaustive-deps  
},[score])

  return (
    <div className="container">
      <div className="header"><Header score={score} bestScore={bestScore}/></div>
      <div className="cards"><Cards score={score} /></div>
      <div className="footer"><Footer/></div>
    </div>
  );
};

export default App;