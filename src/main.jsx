import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoutesFromElements, Route } from "react-router-dom";
import "./index.css";
import Welcome from "./pages/unauthenticated/Welcome.jsx";

const router = createBrowserRouter(
	createRoutesFromElements(<Route path="/" element={<Welcome />} />)
);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
