import React from "react";
import { useGetListUsersQuery } from "../../api/users";
import { Layout } from "../../common/components/layout";
import { useAppDispatch } from "../../common/store";
import { rtkApi } from "../../api/baseApi";

interface IProps {}

export const Users = (props: IProps) => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetListUsersQuery(1);
  //TODO: посмотреть спрайты tailwind'a
  return isLoading ? (
    <div className="bg-black w-3">Loading ...</div>
  ) : (
    <Layout>
      {data?.map((user) => (
        <div key={user.name} className="flex gap-8 p-2">
          <p>{user.id}</p>
          <p>{user.name} </p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.website}</p>
          <p>{user.company.name}</p>
        </div>
      ))}

      <button onClick={() => dispatch(rtkApi.util.resetApiState())}>Clear users</button>
    </Layout>
  );
};
