import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Импорт компонентов страниц
import ProductsPage from './components/ProductsPage'; 
import ProductPage from './components/ProductPage'; 
import NotFoundPage from './components/NotFoundPage';

class App extends Component {
  // Инициализация состояния с пустым массивом продуктов
  state = {
    products: [],
  };

  // Загрузка данных о продуктах после монтирования компонента
  async componentDidMount() {
    try {
      // Запрос к API для получения данных о продуктах
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        // Если ответ сервера не OK, выбрасываем ошибку
        throw new Error('Network response was not ok');
      }
      // Преобразование ответа в JSON
      const products = await response.json();
      // Обновление состояния компонента данными о продуктах
      this.setState({ products });
    } catch (error) {
      // Вывод сообщения об ошибке в консоль
      console.error('There was a problem fetching the products: ', error);
    }
  }

  render() {
    return (
      <Router>
        <Routes>
          {/* Маршрут к странице со всеми продуктами */}
          <Route path="/products" element={<ProductsPage products={this.state.products} />} />
          {/* Маршрут к странице конкретного продукта */}
          <Route path="/product/:id" element={<ProductPage products={this.state.products} />} />
          {/* Маршрут для несуществующих страниц */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    );
  }
}

// Экспорт компонента App как модуля по умолчанию
export default App;
