import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>HERRAMIENTAS</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Html.png'
              text='El Lenguaje de Marcado de Hipertexto (HTML) es un estándar que define una estructura básica para el ordenamiento y la definición del contenido de una página web'
            />
            <CardItem
              src='images/CSS.png'
              text='CSS es una tecnología usada por muchos sitios web para crear páginas visualmente atractivas, interfaces de usuario para aplicaciones web e interfaces gráficas para muchas aplicaciones móviles'
            />
            <CardItem
              src='images/JS.png'
              text='JavaScript es un lenguaje de programación, interpretado por la mayoría de los navegadores, que proporciona efectos visuales a las páginas web, como así también funciones complementarias'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/Bootstrap.png'
              text='Bootstrap es un framework CSS y Javascript diseñado para la creación de interfaces limpias y con diseño responsive. Es una alternativa popular a la hora de desarrollar tanto sitios webs como aplicaciones'
            />
            <CardItem
              src='images/React.png'
              text='ReactJS es una biblioteca JavaScript que se utiliza principalmente para la creación de interfaces de usuario, aunque también resulta excelente para hacer todo tipo de aplicaciones web y móviles'
            />
            <CardItem
              src='images/Node.png'
              text='NodeJS es una máquina virtual rápida y de gran calidad, realmente ligera y potente, que da al desarrollador la posibilidad de utilizar a tope la I/O (entrada y salida de datos) del sistema'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
