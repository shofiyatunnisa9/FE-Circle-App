import "@/style/global.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/route";
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
