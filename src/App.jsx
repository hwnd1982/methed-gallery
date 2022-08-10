import {useDispatch} from 'react-redux';
import {Navigate, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import {tokenSlice} from './store/token/tokenSlice';

const App = () => {
  const dispatch = useDispatch();
  dispatch(tokenSlice.actions.request());

  return (
    <Routes>
      <Route path='*' element={
        <>
          <Header />
          <Main />
        </>
      } />
      <Route path='auth' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default App;
