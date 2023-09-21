import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import { loadImages, loadSearch } from "./services/APIs";
import SearchResult from "./pages/SearchResult";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Homepage />} loader={loadImages} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/search/:id"
          element={<SearchResult />}
          loader={loadSearch}
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
