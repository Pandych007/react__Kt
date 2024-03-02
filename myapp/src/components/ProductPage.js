import React from 'react';
import { Link, useParams } from 'react-router-dom';
import StarRating from './StarRating';

// Компонент ProductPage отображает информацию о конкретном продукте
const ProductPage = ({ products }) => {
  // Получение id продукта из параметров маршрута
  const { id } = useParams();

  // Поиск продукта в массиве продуктов по id
  const product = products.find(product => product.id === parseInt(id));

  // Если продукт не найден, отображается сообщение "Loading..."
  if (!product) {
    return <div>Loading...</div>;
  }

  // Если продукт найден, отображается информация о продукте
  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} style={{ maxWidth: '100px' }} /> 
      <p>Description: {product.description}</p>
      <p>Price: ${product.price}</p>
      // Отображение рейтинга продукта с помощью компонента StarRating
      <StarRating rating={Math.round(product.rating.rate)} />
      // Ссылка для возврата на страницу продуктов
      <Link to="/products">Back</Link>
    </div>
  );
};

// Экспорт компонента ProductPage как модуля по умолчанию
export default ProductPage;
