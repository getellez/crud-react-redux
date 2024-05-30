import { useDispatch } from "react-redux";
import {
	type User,
	type UserId,
	addNewUser,
	deleteUserById,
} from "../store/users/usersSlice";

export const useUsersActions = () => {
	const dispatch = useDispatch();
	const removeUser = (userId: UserId) => {
		dispatch(deleteUserById(userId));
	};
	const addUser = ({ name, email, github }: User) => {
		dispatch(addNewUser({ name, email, github }));
	};
	return { removeUser, addUser };
};
