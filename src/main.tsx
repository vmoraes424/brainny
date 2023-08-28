/* eslint-disable @typescript-eslint/no-unused-vars */
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard.tsx";
import App from "./App.tsx";
import Login from "./pages/Login.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import MeusRegistros from "./pages/MeusRegistros.tsx";
import theme from "./theme.ts";
import "./main.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/meus-registros",
    element: <MeusRegistros />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </ApolloProvider>
);
