import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import YouTubersDashboard from "./pages/YouTubersDashboard";
import EditorsDashboard from "./pages/EditorsDashboard";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Welcome />} />
				<Route path="/youtubers-dashboard" element={<YouTubersDashboard />} />
				<Route path="/editors-dashboard" element={<EditorsDashboard />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
