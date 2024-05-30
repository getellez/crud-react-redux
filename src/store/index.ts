import {
	type Middleware,
	type PayloadAction,
	Tuple,
	configureStore,
} from "@reduxjs/toolkit";
import { toast } from "sonner";
import usersReducer, { type UserId } from "./users/usersSlice";

const peristanceLocalStorageMiddleware: Middleware =
	(store) => (next) => (action) => {
		console.log("pre - state persisted");
		next(action);
		console.log("state persisted");
		localStorage.setItem("__redux_state__", JSON.stringify(store.getState()));
	};

const syncWithDatabaseMiddleware: Middleware =
	(store) => (next) => (action) => {
		next(action);
		const { type, payload } = action as unknown as PayloadAction<UserId>;
		if (type === "users/deleteUserById") {
			console.log("payload :>> ", payload);
			fetch(`https://jsonplaceholder.typicode.com/users/${payload}`, {
				method: "DELETE",
			})
				.then((res) => {
					if (res.ok) toast.success("Se ha eliminado el usuario correctamente");
				})
				.catch((err) => {
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
