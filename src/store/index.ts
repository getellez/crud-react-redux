import {
	type Middleware,
	type PayloadAction,
	Tuple,
	configureStore,
} from "@reduxjs/toolkit";
import { toast } from "sonner";
import usersReducer, {
	type UserWithId,
	type UserId,
	rollbackUser,
} from "./users/usersSlice";

const peristanceLocalStorageMiddleware: Middleware =
	(store) => (next) => (action) => {
		console.log("pre - state persisted");
		next(action);
		console.log("state persisted");
		localStorage.setItem("__redux_state__", JSON.stringify(store.getState()));
	};

const syncWithDatabaseMiddleware: Middleware =
	(store) => (next) => (action) => {
		const { type, payload } = action as unknown as PayloadAction<UserId>;
		const prevState = store.getState();
		next(action);

		if (type === "users/deleteUserById") {
			const userIdToRemove = payload;
			const userToRemove = prevState.users.find(
				(user: UserWithId) => user.id === userIdToRemove,
			);
			fetch(`https://jsonplaceholder.typicode.com/users/${userIdToRemove}`, {
				method: "DELETE",
			})
				.then((res) => {
					if (res.ok) toast.success("Se ha eliminado el usuario correctamente");
					// Causar error al eliminar el usuario para poder hacer rollback del usuario
					// throw new Error("Error deleting user");
				})
				.catch((err) => {
					if (userToRemove) store.dispatch(rollbackUser(userToRemove));
					toast.error(`Hubo un rror al eliminar el usuario ${userIdToRemove}`);
					console.log(err);
					console.log("error");
				});
		}
	};

export const store = configureStore({
	reducer: {
		users: usersReducer,
	},
	middleware: () =>
		new Tuple(peristanceLocalStorageMiddleware, syncWithDatabaseMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
