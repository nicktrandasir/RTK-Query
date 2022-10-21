import React, { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export const Content: FC<IProps> = ({ children }) => {
  return <main className="flex flex-col mx-24 my-4">{children}</main>;
};
