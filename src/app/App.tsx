import { UsersContainer } from "./features/Users/containers/users-container.component";
import { initHttpClient } from "./shared/utils/http/http-client";
import { Layout } from "./layout/Layout";
import { Navigation } from "./features/Navigation/containers/nav.component";

initHttpClient();

function App() {
  return (
    <Layout>
      <Navigation />
      <UsersContainer />
    </Layout>
  );
}

export default App;
