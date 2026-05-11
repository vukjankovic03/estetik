

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="flex flex-col min-h-screen">

            <Routes>

            
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

            
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <>
                      <Navbar />
                      <Home />
                      <Footer />
                    </>
                  </ProtectedRoute>
                }
              />

              <Route
                path="/services"
                element={
                  <ProtectedRoute>
                    <>
                      <Navbar />
                      <Services />
                      <Footer />
                    </>
                  </ProtectedRoute>
                }
              />

              <Route
                path="/services/:name"
                element={
                  <ProtectedRoute>
                    <>
                      <Navbar />
                      <ServiceDetails />
                      <Footer />
                    </>
                  </ProtectedRoute>
                }
              />

              <Route
                path="/contact"
                element={
                  <ProtectedRoute>
                    <>
                      <Navbar />
                      <Contact />
                      <Footer />
                    </>
                  </ProtectedRoute>
                }
              />

            </Routes>

          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;