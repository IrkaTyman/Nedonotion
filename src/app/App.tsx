import './styles/index.css';
import { useTranslation } from 'react-i18next';

import { EditUserModal } from '@features/user';

import { Button } from '@shared/ui';

import { AppRouter } from './providers/router/AppRouter';

const App = () => {
    return (<>
        <AppRouter />
        <EditUserModal trigger={open => <Button onClick={open}>dawd</Button>} />
    </>);
};

export default App;
