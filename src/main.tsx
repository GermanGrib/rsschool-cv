import App from './components/App/App';
import { createRoot } from 'react-dom/client';
import './styles/index.scss';
const domNode = document.getElementById('root');
const root = createRoot(domNode!);

root.render(<App />);
