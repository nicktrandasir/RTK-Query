import styled from "astroturf/react";
import React, { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export const Content: FC<IProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.main`
  background: gray;
`;
