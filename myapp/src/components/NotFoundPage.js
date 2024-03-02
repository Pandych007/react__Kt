import React from 'react';
import { Link } from 'react-router-dom';

// Компонент NotFoundPage отображает страницу 404
const NotFoundPage = () => {
  return (
    <div>
      // Заголовок страницы
      <h2>404 - Not Found</h2>
      // Сообщение об ошибке
      <p>The page you're looking for does not exist.</p>
      // Ссылка на страницу продуктов
      <Link to="/products">Go to Products</Link>
    </div>
  );
};

// Экспорт компонента NotFoundPage как модуля по умолчанию
export default NotFoundPage;
