import React from 'react';
import { TabList, Tab, TabPanels, TabPanel } from '../Tabs';
import classes from './Cabinet.module.css';
import { CurrentUserContext } from './../../contexts/CurrentUserContext';
import Event from './../Event';

function Cabinet(props) {
  const [state, setState] = React.useState(1);
  const user = React.useContext(CurrentUserContext);
  console.log(user);
  return (
    <div className='cabinet'>
      {user.inn
        ? (
        <>
        <TabList
            className='tabs'
            activeClassName='tabItemActive'
            selected={state}
            setSelected={setState}
          >
          <Tab index={1} className='tabItem'>
            Информация об аккаунте
          </Tab>
          <Tab index={2} className='tabItem'>
            Управление представителями
          </Tab>
          <Tab index={3} className='tabItem'>
            Управление заявками
          </Tab>
          <Tab index={4} className='tabItem'>
            Обратная связь
          </Tab>
        </TabList>
        <TabPanels selected={state}>
          <TabPanel index={1}>
            <h2 className={classes.sectionH2}>Информация об аккаунте</h2>
            <div className={classes.sectionGrid}>
              <div className={classes.sectionCell}>
                <h3 className={classes.sectionH3}>Общая информация</h3>
                <p className={classes.sectionP}>
                  {user.inn}
                </p>
                <p className={classes.sectionP}>{user.email}</p>
                <p className={classes.sectionP}>{user.phoneNumber}</p>
              </div>
            </div>
          </TabPanel>
          <TabPanel index={2}>
            <h2 className={classes.sectionH2}>Управление представителями</h2>
            <div className={classes.sectionGrid}>
            </div>
          </TabPanel>
          <TabPanel index={3}>
            <h2 className={classes.sectionH2}>Управление заявками</h2>
          </TabPanel>
          <TabPanel index={4}>
            <h2 className={classes.sectionH2}>Обратная связь</h2>
          </TabPanel>
            </TabPanels>
          </>)
        : (<>
          <TabList
            className='tabs'
            activeClassName='tabItemActive'
            selected={state}
            setSelected={setState}
          >
          <Tab index={1} className='tabItem'>
            Информация об аккаунте
          </Tab>
          <Tab index={2} className='tabItem'>
            Рассмотрение заявок
          </Tab>
          <Tab index={3} className='tabItem'>
            История рассмотренных заявок
          </Tab>
        </TabList>
        <TabPanels selected={state}>
          <TabPanel index={1}>
            <h2 className={classes.sectionH2}>Информация об аккаунте</h2>
            <div className={classes.sectionGrid}>
              <div className={classes.sectionCell}>
                <h3 className={classes.sectionH3}>Общая информация</h3>
                <h4 className={classes.sectionBoldText}>Фамилия</h4>  
                <p className={classes.sectionP}>
                  {user.lastName}
                </p>
                <h4 className={classes.sectionBoldText}>Имя</h4> 
                <p className={classes.sectionP}>
                  {user.firstName}
                </p>
                <h4 className={classes.sectionBoldText}>Отчество</h4> 
                <p className={classes.sectionP}>
                  {user.patrName}
                </p>
                <h4 className={classes.sectionBoldText}>Адрес электронной почты</h4>   
                <p className={classes.sectionP}>{user.email}</p>
                <p className={classes.sectionP}>{user.phoneNumber}</p>
              </div>
              <div className={classes.sectionCell}>
                <h3 className={classes.sectionH3}>Уведомления</h3>
                <p className={classes.sectionP}>
                  Вы не подписаны на наши уведомления
                </p>
              </div>
              <div>
                <button
                  className={classes.sectionLink}
                >
                  Редактировать
                </button>
                <button
                  className={classes.sectionLink}
                >
                  Изменить пароль
                </button>
              </div>
              <div>
                <button
                  className={classes.sectionLink}
                >
                  Подписаться
                </button>
              </div>
            </div>
          </TabPanel>
          <TabPanel index={2}>
            <h2 className={classes.sectionH2}>Рассмотрение заявок</h2>
              <Event name="event" description="Some cool event" partner='OOO BASED' responsible='GigaChad' status='404' date='27.11.2022' />
              <Event name="event" description="Some cool event" partner='OOO BASED' responsible='GigaChad' status='404' date='27.11.2022' />
              <Event name="event" description="Some cool event" partner='OOO BASED' responsible='GigaChad' status='404' date='27.11.2022' />

          </TabPanel>
          <TabPanel index={3}>
              <h2 className={classes.sectionH2}>История рассмотренных заявок</h2>

          </TabPanel>

            </TabPanels>
          </>)
      }
    </div>
  );
}

export default Cabinet;