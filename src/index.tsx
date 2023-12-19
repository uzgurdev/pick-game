import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './assets/styles/style.scss';
import { Routes } from 'routes';

const elm = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(elm);

root.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);
