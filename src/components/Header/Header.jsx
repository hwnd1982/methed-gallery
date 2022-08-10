import {urlAuth} from '../../api/auth';
import {useAuth} from '../../hooks/useAuth';
import {Layout} from '../Layout/Layout';
import style from './Header.module.css';

export const Header = () => {
  const {logout, isAuth, auth} = useAuth();

  console.log(style);

  return (
    <header>
      <Layout>
        <button onClick={logout}>Очистить токен</button>
        <a href={urlAuth}>Авторизация</a>
        {isAuth && (
          <>
            <button className={style.button}>
              <span>{auth.first_name}</span>
              <img src={auth.profile_image.medium} alt="" />
            </button>
          </>
        )}
      </Layout>
    </header>
  );
};
