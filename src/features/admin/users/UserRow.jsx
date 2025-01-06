import React, { useState } from "react";
import Modal from "../../../ui/Modal";
import ChangeUserStatus from "./ChangeUserStatus";

const UserRow = ({ user, index }) => {
  const [open, setOpen] = useState(false);
  const { status } = user;
  const statusStyle = [
    {
      label: "رد شده",
      className: "badge--danger",
    },
    {
      label: "در انتظار تایید",
      className: "badge--secondary",
    },
    {
      label: "تایید شده",
      className: "badge--success",
    },
  ];

  return (
    <tr key={user._id}>
      <td>{index + 1}</td>
      <td className="max-w-[200px] overflow-hidden whitespace-nowrap text-ellipsis">
        <span>{user.name}</span>
      </td>
      <td>{user.email}</td>
      <td>{user.phoneNumber}</td>
      <td>{user.role}</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
      <td>
        <Modal
          title={"تغییر وضعیت کاربر"}
          open={open}
          onClose={() => setOpen(false)}
        >
          <ChangeUserStatus userId={user._id} onClose={() => setOpen(false)} />
        </Modal>
        <button onClick={() => setOpen(true)}>تغییر وضعیت کاربر</button>
      </td>
    </tr>
  );
};

export default UserRow;
