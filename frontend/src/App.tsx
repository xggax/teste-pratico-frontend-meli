import { ItemsProvider } from './hooks/useItems';
import { Routes } from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

import './styles/global.scss'

export function App() {
    return (
        <ItemsProvider>
            <Router>
                <Routes />
            </Router>

        </ItemsProvider>
    );
}