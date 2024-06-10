import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";
import Post from "./Components/Post";
import Layout from "./Components/Layout";
import { SearchProvider } from "./Components/context/SearchContext";

function App() {
  return (
    <Router>
      <SearchProvider>
        <Routes>
          <Route path="/" element={<Layout />}> 
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="posts/:postTitle" element={<Post />} />
          </Route>
        </Routes>
      </SearchProvider>
    </Router>
  );
}

export default App;
