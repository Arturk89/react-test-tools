import { SetStateAction, createContext, useContext, useState } from "react";
import { Users } from "../data-access/get-all-users";

export const UsersContext = createContext<Users>([]);
export const ActionContext = createContext<
  React.Dispatch<SetStateAction<Users>>
>(() => null);

export const UsersProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<Users>([]);

  return (
    <ActionContext.Provider value={setUsers}>
      <UsersContext.Provider value={users}>{children}</UsersContext.Provider>
    </ActionContext.Provider>
  );
};

export function useUsers() {
  const users = useContext(UsersContext);
  if (!users) {
    throw new Error("useUsers must be used within UsersProvider");
  }

  return users;
}

export function useUserAction() {
  const action = useContext(ActionContext);
  if (!action) {
    throw new Error("useUserAction must be used within UsersProvider");
  }

  return action;
}
