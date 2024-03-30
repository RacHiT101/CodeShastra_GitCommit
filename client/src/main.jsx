import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider, ToastProvider } from "@chakra-ui/react";
import { Chatcontext2Provider } from './components/chat/Chatcontext2.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <ChakraProvider>
      <ToastProvider />
      <Chatcontext2Provider>
      <App />
      </Chatcontext2Provider>
    </ChakraProvider>
  // </React.StrictMode>
);
