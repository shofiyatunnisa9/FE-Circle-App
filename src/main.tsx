import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/style/global.css";
import App from "./App.tsx";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <App />
      <Toaster />
    </StrictMode>
  </QueryClientProvider>
);
