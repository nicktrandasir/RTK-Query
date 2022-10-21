import React from "react";
import { useGetListUsersQuery } from "../../api/users";
import { Layout } from "../../common/components/layout";
import styled from "astroturf/react";
import { useAppDispatch } from "../../common/store";
import { rtkApi } from "../../api/baseApi";

interface IProps {}
const UserBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
`;

const LoadingScreen = styled.div`
  background: black;
  height: 100vh;
  width: 100vw;
`;

export const Users = (props: IProps) => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetListUsersQuery(1);

  return isLoading ? (
    <LoadingScreen>Loading ...</LoadingScreen>
  ) : (
    <Layout>
      {data?.map((user) => (
        <UserBlock key={user.name}>
          <p>{user.id}</p>
          <p>{user.name} </p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.website}</p>
          <p>{user.company.name}</p>
        </UserBlock>
      ))}

      <button onClick={() => dispatch(rtkApi.util.resetApiState())}>Clear users</button>
    </Layout>
  );
};
