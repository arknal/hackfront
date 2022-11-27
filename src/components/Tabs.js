import React from "react";

//Заголовок таба
export function Tab({ className, ...props }) {
  const { setSelected, activeClassName } = props;
  return (
    <div
      className={`${className} ${
        props.selected === props.index ? activeClassName : ""
      }`}
      onClick={() => setSelected(props.index)}
    >
      {props.children}
    </div>
  );
}

/* 
Отрисовка маркированного списка заголовков таба с прокидыванием всех родительских пропсов, 
кроме класса родительского контейнера
*/

//обязательно нужно указывать класс родительского контейнера

export function TabList({ className, ...props }) {
  return (
    <ul className={className}>
      {props.children.map((item, index) => {
        return React.cloneElement(item, {
          ...props,
          ...item.props,
          key: index,
        });
      })}
    </ul>
  );
}

export function TabPanels(props) {
  return (
    <div>
      {props.children.filter((item) => {
        return item.props.index === props.selected;
      })}
    </div>
  );
}
export function TabPanel(props) {
  return <>{props.children}</>;
}
