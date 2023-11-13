import React, { useEffect, useState } from "react";
import "./NoticiasHome.css";
import { Button } from "react-bootstrap";



function Noticias({ cardNoticias }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(0);
  const moverCardDerecha = () => {
    if (currentIndex < 7) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const moverCardIzquierda = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  useEffect(() => {
    if (window.innerWidth < 980) {
      if(window.innerWidth < 450)
      {
        setStartIndex(currentIndex);
        setEndIndex(currentIndex + 1);
      }
      else{
        setStartIndex(currentIndex);
        setEndIndex(currentIndex + 2);
      }
     
    }else {
      setStartIndex(currentIndex);
      setEndIndex(currentIndex + 4);
    }
  }, [currentIndex]);



  return (
    <div className="cards-home">
      {currentIndex >= 1 && (
          <Button className="button-card-left" onClick={moverCardIzquierda}>
            &lt;
          </Button>
        )}
   
      {cardNoticias.slice(startIndex, endIndex).map((card) => (
        <div
          key={card._id}
          className="card-anuncios-home"
        >
          <div className="header-img-anuncions-home header-img-card-home">
            <img src={card.imagen} alt={card.titulo} />
          </div>
          <div className="text-card-anuncions-home">
            <span>{card.titulo}</span>
          </div>
        </div>
      ))}
           {currentIndex <= 5 && (
          <Button className="button-card-right" onClick={moverCardDerecha}>
            &gt;
          </Button>
        )}
    </div>
  );
}

export default Noticias;