import {urlAuth} from '../../api/auth';
import {useAuth} from '../../hooks/useAuth';
import {Layout} from '../Layout/Layout';
import style from './Header.module.css';
import {ReactComponent as NoAuth} from './img/no-auth.svg';

export const Header = () => {
  const {logout, isAuth, auth} = useAuth();

  console.log(style);

  return (
    <header className={style.header}>
      <div className={style['header-front']}>
        <Layout>
          <div className={style.content}>
            <NoAuth className={style.logo} />
            <div className={style.auth}>
              <a className={style['auth-link']} href={urlAuth}>
                <NoAuth />
              </a>
              <button onClick={logout}>Logout</button>
              {isAuth && (
                <>
                  <button className={style.button}>
                    <span>{auth.first_name}</span>
                    <img src={auth.profile_image.medium} alt="" />
                  </button>
                </>
              )}
            </div>
          </div>
        </Layout>
      </div>
      <div className={style['header-back']}></div>
    </header>
  );
};
