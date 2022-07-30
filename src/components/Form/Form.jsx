import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './Form.scss';

const Form = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const Submit = (data) => {
    console.log(data.firstName, data.mail, data.phone, data.text);
    axios
      .post('https://backend.cyberia.studio/api/v1/feedbacks', {
        name: data.firstName,
        email: data.mail,
        phone: data.phone,
        message: data.text,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    reset();
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit(Submit)}>
        <input
          className="input"
          type="text"
          {...register('firstName', {
            required: 'Поле обязательно к заполнению',
            minLength: { value: 4, message: 'Минимум 4 символов.' },
          })}
          placeholder="Имя"
        />
        <div className="error">
          {errors?.firstName && <p>{errors?.firstName?.message || 'Errors'}</p>}
        </div>
        <input
          className="input"
          type="email"
          {...register('mail', {
            required: 'Укажите адрес электронной почты.',
            minLength: { value: 4, message: 'Минимум 4 символов.' },
            pattern:
              /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u,
          })}
          placeholder="E-mail"
        />
        <div className="error">
          {errors?.email && <p>{errors?.mail?.message || 'Введите корректный email адрес'}</p>}
        </div>
        <input
          className="input"
          type="tel"
          {...register('phone', {
            required: 'Укажите номер телефона',
            pattern: /^([+]?[0-9\s-\(\)]{3,25})*$/i,
            minLength: 11,
          })}
          placeholder="Телефон"
        />
        <div className="error">
          {errors?.phone && <p>{errors?.phone?.message || 'Введите корректный телефон'}</p>}
        </div>
        <textarea
          className="textarea"
          type="text"
          {...register('text', {
            required: 'Поле обязательно к заполнению',
            minLength: { value: 10, message: 'Минимум 10 символов.' },
          })}
          placeholder="Сообщение"
        />
        <div className="error">{errors?.text && <p>{errors?.text?.message || 'Errors'}</p>}</div>
        <div className="submit__form">
          <input className="form__btn" type="submit" disabled={!isValid} />
          <p>Нажимая “Отправить”, Вы даете согласие на обработку персональных данных</p>
        </div>
      </form>
    </div>
  );
};

export default Form;
