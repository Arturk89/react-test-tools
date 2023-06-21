import { SetStateAction, createContext, useState } from "react";
import { Users } from "./types";

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
