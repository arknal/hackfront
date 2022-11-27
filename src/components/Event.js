import React from 'react';
import { Button } from 'react-bootstrap';

function Event(props) {
  return (
    <div className='event'>
      <div className='event__column'>
        <h4 className='event__header'>Название:</h4>
        <p className='event__text'>{props.name}</p>
      </div>
      <div className='event__column'>
        <h4 className='event__subheader'>О заявке</h4>
        <p className='event__text'>{props.description}</p>
      </div>
      <div className='event__column'>
        <h4 className='event__subheader'>Партнер:</h4>
        <p className='event__text'>{props.partner}</p>
      </div>
      <div className='event__column'>
        <h4 className='event__subheader'>Ответственный(ые):</h4>
        <p className='event__text'>{props.responsible}</p>
      </div>
      <div className='event__column'>
        <h4 className='event__subheader'>Дата:</h4>
        <p className='event__text'>{props.date}</p>
      </div>
      <div className='event__column'>
        <h4 className='event__subheader'>Статус:</h4>
        <p className='event__text'>{props.status}</p>
      </div>
      <Button variant="success">Одобрить</Button>{' '}
      <Button variant="danger">Отклонить</Button>{' '}
    </div>
  );
}

export default Event;
