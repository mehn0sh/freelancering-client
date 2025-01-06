import React from "react";
import UsersTable from "../features/admin/users/UsersTable";
import useUsers from "../features/admin/useUsers";

const Users = () => {
  return (
    <div>
      <h1 className="text-secondary-700 text-xl mb-8 font-black">کاربران</h1>
      <UsersTable />
    </div>
  );
};

export default Users;
