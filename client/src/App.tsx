import { Outlet } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <div className="App">
        <Outlet />
      </div>
    </Layout>
  );
}

export default App;
