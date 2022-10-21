import React from "react";
import { Link } from "react-router-dom";
import { IconHome } from "../../assets/icons/iconHome";
import { IconUsers } from "../../assets/icons/iconUsers";
import { IconPosts } from "../../assets/icons/iconPosts";
import { IconAddr } from "../../assets/icons/iconAddr";

interface IProps {}

export const Header = (props: IProps) => {
  return (
    <header className="font-bold flex items-center justify-between p-4">
      <nav className="flex gap-x-12">
        <Link to={"/"} className="flex gap-x-2">
          <IconHome />
          Главная
        </Link>

        <Link to={"/users"} className="flex gap-x-2">
          <IconUsers />
          Пользователи
        </Link>
        <Link to={"/posts"} className="flex gap-x-2">
          <IconPosts />
          Посты
        </Link>
        <Link to={"/adr"} className="flex gap-x-2">
          <IconAddr />
          Адреса
        </Link>
      </nav>
      <button>Выход</button>
    </header>
  );
};
