import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./store/rootReducer.ts";
import { store } from "./store/rootReducer.ts";
import { Provider } from "react-redux";

const queryClient = new QueryClient();

// const config = configureStore({
//   reducer: rootReducer,
// });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      {/* <QueryClientProvider client={queryClient}> */}
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
      {/* </QueryClientProvider> */}
    </ChakraProvider>
  </React.StrictMode>
);
