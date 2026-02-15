import { useState } from "react";
import { v4 } from "uuid";

import Button from "../../components/Button/Button";

import "./styles.css";

function Lesson_05() {
  const [order, setOrder] = useState([]); // ["Burger"] => ["Burger", "Fries"]

  // Можно использовать функции по отдельности для каждой кнопки, и это будет работать
  // Но код однотипный и намного удобнее и компактнее использовать универсальную функцию addMenuElement,
  // в которую мы будем передавать нудный нам элемент заказа
  // const addBurger = () => {
  //   setOrder((prevValue) => {
  //     // prevValue === ["Burger", "Fires"]
  //     return [...prevValue, "Burger"];
  //   });
  // };

  // const addFries = () => {
  //     setOrder((prevValue) => {
  //     return [...prevValue, "Fries"];
  //   });
  // };

  // const addCola = () => {
  //     setOrder((prevValue) => {
  //     return [...prevValue, "Cola"];
  //   });
  // };

  // Массив с названиями кнопок
   const menuElements = [
    "Burger",
    "Fries",
    "Cola",
    "Salad",
    "Ketchup",
    "Ice-cream",
  ];
   // Универсальная функция добавления элемента в заказ
  const addMenuElement = (menuEl) => {
    setOrder((prevValue) => {
      return [...prevValue,{id: v4(), name: menuEl}];
    });
  };

  // Генерация кнопок через map
  const menuButtons = menuElements.map((menuEl) => {
    return (
      <div className="button_control" key={menuEl}>
        <Button
          name={menuEl}
          onClick={() => addMenuElement(menuEl)}
        />
      </div>
    );
  });

  // map() JSX
  // ["Burger", "Fries"] => [<li>Burger</li>, <li>Fries</li>]
  
  // Отображение заказа
  const finalOrder = order.map((menuEl) => {
    return (
      <li key={menuEl.id} className="order_item">
        {menuEl.name}
      </li>
    );
  });

  return (
    <div className="lesson_05_wrapper">
      <div className="menu_wrapper">
        <h1 className="menu">Menu:</h1>

        <div className="button_wrapper">
          {menuButtons}
        </div>
      </div>

      <div className="order_wrapper">
        <p className="order_title">Your Order:</p>
        <ol className="order_list">{finalOrder}</ol>
      </div>
    </div>
  );
}

export default Lesson_05;

