import { Outlet } from "react-router-dom";
import { CreateNewUser } from "../components/CreateNewUser";
import ListOfUsers from "../components/ListOfUsers";

const UsersPage = () => {
	return (
		<>
			<CreateNewUser />
			<ListOfUsers />
			<Outlet />
		</>
	);
};

export default UsersPage;
