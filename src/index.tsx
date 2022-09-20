import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);