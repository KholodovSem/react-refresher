import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<AllMeetups />} />
        <Route path='new-meetup' element={<NewMeetup />} />
        <Route path='favorites' element={<Favorites />} />
        <Route path='/*' element={<Navigate to='/' replace />} />
      </Route>
    </Routes>
  );
};

export default App;
