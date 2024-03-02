import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createHashRouter, RouterProvider} from 'react-router-dom'

// Создание роутера с одним маршрутом, который отображает компонент App
const router = createHashRouter([
  {
    path: '/*',
    element: <App/>
  }
  ])

// Получение корневого элемента DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Рендеринг приложения с помощью провайдера роутера
root.render(
  <RouterProvider router={router}/>
  );
