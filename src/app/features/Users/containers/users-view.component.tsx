import { useEffect } from "react";
import { useUserAction } from "../context/UsersContext";
import { getAllUsers } from "../data-access/get-all-users";
import { UsersTable } from "./users-table.component";
import "./style.css";

const fromNullable = <T,>(response: T) => {
  if (response != null) {
    return response;
  }
  return [];
};

export function UsersView() {
  const dispatch = useUserAction();

  useEffect(() => {
    getAllUsers().then((res) => dispatch(fromNullable(res)));
  }, []);

  return (
    <div className="usersView">
      <UsersTable />
    </div>
  );
}
