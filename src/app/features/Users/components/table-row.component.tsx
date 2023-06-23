import { memo } from "react";
import { User } from "../data-access/get-all-users";
import { useUserAction } from "../context/UsersContext";

type Props = {
  user: User;
};

export const TableRow = memo(({ user }: Props) => {
  const dispatch = useUserAction();

  const toggleActivity = (id: string) => {
    dispatch((users) =>
      users.map((u) => (u.id === id ? { ...u, isActive: !u.isActive } : u))
    );
  };

  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.age}</td>
      <td>
        <button
          onClick={() => toggleActivity(user.id)}
          style={{ width: "100%" }}
        >
          {user.isActive ? "disabled" : "active"}
        </button>
      </td>
    </tr>
  );
});
