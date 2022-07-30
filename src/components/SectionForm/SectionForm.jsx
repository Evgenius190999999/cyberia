import React from 'react';
import Form from '../Form/Form';
import './SectionFrom.scss';

const SectionForm = () => {
  return (
    <section className="section__form ">
      <div className="section__form-wrapper container">
        <div className="section__form-left__block">
          <img className="left__block-img" src="/form-img.svg" alt="FormImage" />
          <h3 className="left__block-title">
            Расскажите <br /> о вашем проекте
          </h3>
          <p className="left__block__desc">
            Поделитесь с нами информацией, чем мы можем быть полезны: реализовать идею или выделить
            разработчиков для ИТ-команды. Чем больше вы нам расскажете — тем продуктивнее будет
            дальнейшее обсуждение.
          </p>
        </div>
        <Form />
      </div>
    </section>
  );
};

export default SectionForm;
