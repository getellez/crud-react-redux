import { Tuple, configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/usersSlice";

const peristanceLocalStorageMiddleware = (store) => (next) => (action) => {
	next(action);
	localStorage.setItem("__redux_state__", JSON.stringify(store.getState()));
};

export const store = configureStore({
	reducer: {
		users: usersReducer,
	},
	middleware: () => new Tuple(peristanceLocalStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
