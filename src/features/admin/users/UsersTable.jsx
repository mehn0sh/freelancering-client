import React from "react";
import Loading from "../../../ui/Loading";
import useUsers from "../useUsers";
import UserRow from "./UserRow";

const UsersTable = () => {
  const { users, isLoading } = useUsers();
  if (isLoading) return <Loading />;
  if (!users) return <Empty resourceName="کاربری" />;
  return (
    <div className="overflow-x-auto bg-secondary-0">
      <table>
        <thead>
          <tr className="title-row">
            <th>#</th>
            <th>نام</th>
            <th>ایمیل</th>
            <th>شماره موبایل</th>
            <th>نقش</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <UserRow key={user._id} user={user} index={index} />
          ))}
        </tbody>
      </table>
      ;
    </div>
  );
};

export default UsersTable;
