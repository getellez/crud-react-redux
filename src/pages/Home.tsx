import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<div>
			<h1 className="text-2xl mb-4">This is the Home page</h1>
			<Link
				to={"/users"}
				className="px-4 py-2 bg-blue-600 text-white font-medium rounded"
			>
				Ver usuarios
			</Link>
		</div>
	);
};

export default HomePage;
