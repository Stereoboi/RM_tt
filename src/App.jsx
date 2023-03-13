import { Route, Routes } from "react-router-dom";
import { lazy, useEffect } from "react";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import { RestrictedRoute } from "./components/Routs/RestrictedRout";
import { PrivateRoute } from "./components/Routs/PrivateRout";
const Home = lazy(() => import("./pages/Home/HomePage"));
const Auth = lazy(() => import("./pages/Auth/AuthPage"));
const Info = lazy(() => import("./pages/Info/InfoPage"));
const Collection = lazy(() => import("./pages/Collection/CollectionPage"));
function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="character/:characterId" element={<Info />} />
        <Route
          path="/auth"
          element={<RestrictedRoute redirectTo="/" component={<Auth />} />}
        />
        <Route
          path="collection"
          element={
            <PrivateRoute redirectTo="/auth" component={<Collection />} />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
