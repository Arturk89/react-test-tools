import { useUsers } from "../context/UsersContext";
import { TableRow } from "../components/table-row.component";
import "./style.css";

export function UsersTable() {
  const users = useUsers();

  return (
    <table className="usersView__table">
      <thead>
        <tr>
          <th align="left">id</th>
          <th align="left">name</th>
          <th align="left">e-mail</th>
          <th align="left">age</th>
          <th align="left">action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u) => (
          <TableRow key={u.id} user={u} />
        ))}
      </tbody>
    </table>
  );
}
