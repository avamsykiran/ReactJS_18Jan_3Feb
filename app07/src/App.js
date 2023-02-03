import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Accounts from './components/accounts/Accounts';
import AccountsForm from './components/accounts/AccountsForm';
import Header from './components/Header';
import Statement from './components/txns/Statement';

const App = () => (
  <BrowserRouter>
    <Header title="BudgetTracker" />
    <div className='container-fluid p-4'>
      <Routes>
        <Route path='/' element={<Accounts />} />
        <Route path='/txns/:aid' element={<Statement />} />
        <Route path='/addAccount' element={<AccountsForm />} />
        <Route path='/editAccount/:aid' element={<AccountsForm />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;