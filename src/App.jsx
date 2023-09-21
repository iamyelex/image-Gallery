import {
  Route,
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import { loadImages, loadSearch } from "./services/APIs";
import SearchResult from "./pages/SearchResult";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route>
        <Route
          path="/"
          element={<Homepage />}
          loader={loadImages}
          errorElement={<ErrorPage message="something went wrong" />}
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/search/:id"
          element={<SearchResult />}
          loader={loadSearch}
          errorElement={<ErrorPage message="something went wrong" />}
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
