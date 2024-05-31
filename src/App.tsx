import { CreateNewUser } from "./components/CreateNewUser";
import ListOfUsers from "./components/ListOfUsers";

function App() {
	return (
		<div className="p-4">
			<CreateNewUser />
			<ListOfUsers />
		</div>
	);
}

export default App;
