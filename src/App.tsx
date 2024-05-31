import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import UsersPage from "./pages/Users";

function App() {
	return (
		<div className="p-4">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/users" element={<UsersPage />} />
				{/* TODO: user nested route */}
				<Route path="*" element={<h1>Not Found</h1>} />
			</Routes>
		</div>
	);
}

export default App;
