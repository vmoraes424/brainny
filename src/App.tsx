/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from "@apollo/client";
import { GET_LOGIN } from "./graphql";
import { Link } from "react-router-dom";

function App() {
  const { data } = useQuery(GET_LOGIN);

  console.log(data);

  return (
    <>
      <Link to={"/dashboard"}>Dashboard</Link>
      <h1>Hello World</h1>
    </>
  );
}

export default App;
