import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects, fetchCategory, filtred } from '../../redux/Slice/projectsSlice';
import Card from '../Card/Card';

import './SectionProject.scss';

const SectionProject = () => {
  const dispatch = useDispatch();
  const { isLoading, category, filtredProjects } = useSelector((state) => state.projectsSlice);
  const [activeBtn, setActiveBtn] = useState(category);
  useEffect(() => {
    dispatch(fetchProjects());
    dispatch(fetchCategory());
  }, [dispatch]);

  const handleClick = (id) => {
    dispatch(filtred(id));
    setActiveBtn(id);
  };

  return (
    <section className="section-project container">
      <p className="section-project__navigate">
        Главная / <span>Проекты</span>
      </p>
      <h1 className="section-project__title">Проекты</h1>
      {isLoading && <p>Загрузка...</p>}
      <div className="section-project__category">
        {category.map((cat) => (
          <button
            onClick={() => handleClick(cat.id)}
            className={`section-project__button ${activeBtn === cat.id ? 'active' : ''}`}
            key={cat.id}>
            {cat.name}
          </button>
        ))}
      </div>
      <div className="section-project__cart_wrapper">
        {filtredProjects.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default SectionProject;
