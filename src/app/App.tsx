import './styles/index.css';
import { useTranslation } from 'react-i18next';

import { AppRouter } from './providers/router/AppRouter';

const App = () => {
    return <AppRouter />;
};

export default App;
