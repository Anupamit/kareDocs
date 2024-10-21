import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import UploadDoc from "./pageComponent/UploadDoc";
import ViewPage from "./pageComponent/ViewPage";
import DocSearch from "./pageComponent/DocSearch";
import KareAdminDashbord from "./pageComponent/KareAdminDashbord";
import LoginPage from "./pageComponent/LoginPage";
import SideMenu from "./pageComponent/Sidemenu";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route
            path="/login"
            element={<LoginPage setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="/"
            element={isAuthenticated ? <SideMenu /> : <Navigate to="/login" />}
          >
            <Route index element={<KareAdminDashbord />} />
            <Route path="docsearch" element={<DocSearch />} />
            <Route path="docupload" element={<UploadDoc />} />
            <Route path="viewpage" element={<ViewPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
