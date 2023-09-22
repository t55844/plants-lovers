import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageHome from './components/PageHome/PageHome'
import Layout from "./components/Route/Layout";
import PageSearch from "./components/PageSearch/PageSearch";
import NoPage from "./components/Route/NoPage";
import PageUser from "./components/PageUser/PageUser";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PageHome />} />
          <Route path="search" element={<PageSearch />} />
          <Route path="user" element={<PageUser />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
