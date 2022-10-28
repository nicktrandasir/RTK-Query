import React from "react";
import { Link } from "react-router-dom";

interface IProps {}

export const Header = (props: IProps) => {
  return (
    <header className="font-bold flex items-center justify-between p-4">
      <nav className="flex gap-x-12">
        <Link to={"/"} className="flex gap-x-2">
          <svg height="24" width="24">
            <use xlinkHref="./sprite.svg#home" />
          </svg>
          Главная
        </Link>

        <Link to={"/users"} className="flex gap-x-2">
          <svg height="24" width="24">
            <use xlinkHref="./sprite.svg#users" />
          </svg>
          Пользователи
        </Link>
        <Link to={"/posts"} className="flex gap-x-2">
          <svg height="24" width="24">
            <use xlinkHref="./sprite.svg#posts" />
          </svg>
          Посты
        </Link>
        <Link to={"/adr"} className="flex gap-x-2">
          <svg height="24" width="24">
            <use xlinkHref="./sprite.svg#addresses" />
          </svg>
          Адреса
        </Link>
      </nav>
      <button>Выход</button>
    </header>
  );
};
