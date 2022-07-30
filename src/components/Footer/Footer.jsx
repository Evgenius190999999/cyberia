import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer__wrapper">
        <div className="footer__logo">
          <img src="/footer-logo.svg" alt="FooterLogo" />
          <div className="footer__logo-title">Web and machine learning developing company</div>
        </div>
        <div className="footer__info">
          <div className="footer__info-phone">
            <a href="tel:+7 499 679 45 79">+7 499 679 45 79</a>
            <a href="/">Главная</a>
            <a href="/">Блог</a>
            <a href="mailto:hello@cyberia.ru">hello@cyberia.ru</a>
            <a href="/">Услуги</a>
            <a href="/">О нас</a>
            <p>Аносова 3Б, оф. 1</p>
            <a href="/">Проекты</a>
            <a href="/">Команда</a>
          </div>
        </div>
        <div className="footer__about">
          <p>
            2022, digital-агентство Cyberia <br /> Положение о защите персональных данных Политика в
            отношении обработки и защиты персональных данных Оферта оказания услуг
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
