import { Routes, Route } from "react-router-dom";

import AllMeetupPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavouritesPage from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout.js";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetupPage />} />
          <Route path="/newmeetup" element={<NewMeetupPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
