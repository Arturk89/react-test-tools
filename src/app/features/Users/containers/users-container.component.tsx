import { UsersView } from "./users-view.component";
import { UsersProvider } from "../context/UsersContext";

export function UsersContainer() {
  return (
    <UsersProvider>
      <UsersView />
    </UsersProvider>
  );
}
