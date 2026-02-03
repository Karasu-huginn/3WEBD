import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/Header";
import Home from "./pages/Home";
import AdvancedSearch from "./pages/AdvancedSearch";
import BookDetail from "./pages/BookDetails";
import Search from "./pages/Search";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/advanced-search" element={<AdvancedSearch />} />
          <Route path="/book/*" element={<BookDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
