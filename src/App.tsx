import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Index from './pages/Index';
import AuthProvider from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
	return (
		<AuthProvider>
			<Router>
				<Routes>
					{/* ------ PUBLIC ROUTES ------ */}
					{/* Main Route to show Landing Page */}
					<Route path="/" element={<Landing />} />

					{/* Route to Login */}
					<Route path="/login" element={<Login />} />

					{/* Route to Register */}
					<Route path="/register" element={<Register />} />

					{/* Route to Privacy Policy */}
					<Route path="/privacy_policy" element={<Privacy />} />

					{/* Route to Terms of Service */}
					<Route path="/terms_of_service" element={<Terms />} />


					{/* ------ PRIVATE ROUTES ------ */}
					<Route element={<ProtectedRoute />}>
                        <Route path="/index" element={<Index />} />
                        {/* Aquí irán /profile, /game, /chat, etc. */}
                    </Route>

				</Routes>
			</Router>
		</AuthProvider>
	)
}

export default App;