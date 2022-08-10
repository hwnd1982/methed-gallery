import {useState} from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {authSlice} from '../store/auth/authSlice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const tokenloading = useSelector(store => store.token.loading);

  const auth = useSelector(store => store.auth.data);
  const loadingAuth = useSelector(store => store.auth.loading);
  const isAuth = useSelector(store => store.auth.isAuth);

  const [loading, setloading] = useState(tokenloading || loadingAuth);

  const logout = () => dispatch(authSlice.actions.logout());

  useEffect(() => setloading(tokenloading || loadingAuth), [tokenloading, loadingAuth]);

  return {loading, auth, isAuth, logout};
};


