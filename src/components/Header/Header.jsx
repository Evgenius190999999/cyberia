import React, { useState } from 'react';
import './Header.scss';

const Header = () => {
  const navigate = [
    { name: 'О нас', path: '/about' },
    { name: 'Услуги', path: '/services' },
    { name: 'Проекты', path: '/project' },
    { name: 'Блог', path: '/blog' },
    { name: 'Контакты', path: '/contacts' },
  ];

  const burger = [
    { name: 'Главная', path: '/' },
    { name: 'О нас', path: '/about' },
    { name: 'Услуги', path: '/services' },
    { name: 'Проекты', path: '/project' },
    { name: 'Блог', path: '/blog' },
  ];

  const [openBurger, setOpenBurger] = useState(false);

  return (
    <header className="header container">
      <a className="header__logo" href="/">
        <img src="/logo.svg" alt="Logo" />
      </a>
      <nav className="header__nav">
        <ul className="header__menu">
          {navigate.map((item) => (
            <li key={item.path} className="menu__link">
              <a href={`${item.path}`}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <button className="open__burger" onClick={() => setOpenBurger(true)}>
        <img src="menu-burger.svg" alt="burger" />
      </button>
      {openBurger && (
        <div className="burger">
          <div className="burger__close">
            <button onClick={() => setOpenBurger(false)} className="close">
              <img src="close-burger.svg" alt="closeBurger" />
            </button>
            <div className="burger__navigate">
              <ul className="burger__menu">
                {burger.map((item) => (
                  <li className="burger__menu-link" key={item.path}>
                    <a href={`${item.path}`}>{item.name}</a>
                  </li>
                ))}
              </ul>
              <hr className="burger__hr top" />
              <div className="burger__contacts">
                <p>Контакты:</p>
                <a href="tel:+7 499 679 45 79">+7 499 679 45 79</a>
                <a href="mailto:hello@cyberia.ru">hello@cyberia.ru</a>
                <p>Аносова 3Б, оф. 1</p>
              </div>
              <hr className="burger__hr bottom" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
