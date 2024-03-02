import React from 'react';

// Компонент StarRating отображает рейтинг в виде звезд
const StarRating = ({ rating }) => {
  const stars = [];
  // Создание массива звезд в соответствии с рейтингом
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      // Если текущий индекс меньше рейтинга, добавляем полную звезду
      stars.push(<span key={i}>★</span>);
    } else {
      // Если текущий индекс больше или равен рейтингу, добавляем пустую звезду
      stars.push(<span key={i}>☆</span>);
    }
  }
  // Возвращаем звезды как JSX-элемент
  return <div>{stars}</div>;
};

// Экспорт компонента StarRating как модуля по умолчанию
export default StarRating;
