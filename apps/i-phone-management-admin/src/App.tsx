import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SdfasdfList } from "./sdfasdf/SdfasdfList";
import { SdfasdfCreate } from "./sdfasdf/SdfasdfCreate";
import { SdfasdfEdit } from "./sdfasdf/SdfasdfEdit";
import { SdfasdfShow } from "./sdfasdf/SdfasdfShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"iPhone Management"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Sdfasdf"
          list={SdfasdfList}
          edit={SdfasdfEdit}
          create={SdfasdfCreate}
          show={SdfasdfShow}
        />
      </Admin>
    </div>
  );
};

export default App;
