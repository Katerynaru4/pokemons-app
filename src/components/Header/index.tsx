import React from 'react';

import s from './Header.module.scss';
import Layout from '../Layout';
import { Logo } from './logo';

const Header = () => {

  return (
    <Layout>
      <div className={s.wrapper}>
        <div className={s.inner}>
          <div className={s.pokemonLogo}>
            <Logo />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default React.memo(Header);
