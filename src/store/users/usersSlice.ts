import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

const DEFAULT_STATE = [
	{
		id: "1",
		name: "John Doe",
		github: "jhondoe",
		email: "jhon@example.com",
	},
	{
		id: "2",
		name: "Jane Smith",
		github: "janesmith",
		email: "jane@example.com",
	},
	{
		id: "3",
		name: "Jane Smith",
		github: "janesmith2",
		email: "janesmith@example.com",
	},
	{
		id: "4",
		name: "Mike Johnson",
		github: "mikejohnson",
		email: "mikejohnson@example.com",
	},
	{
		id: "5",
		name: "Alice Brown",
		github: "alicebrown",
		email: "alicebrown@example.com",
	},
	{
		id: "6",
		name: "David Clark",
		github: "davidclark",
		email: "davidclark@example.com",
	},
];

export type UserId = string;

export interface User {
	name: string;
	github: string;
	email: string;
}

export interface UserWithId extends User {
	id: UserId;
}
const initialState: UserWithId[] = (() => {
	const stateInLocalStorage = localStorage.getItem("__redux_state__");
	if (stateInLocalStorage) {
		return JSON.parse(stateInLocalStorage).users;
	}
	return DEFAULT_STATE;
})();

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		addNewUser: (state: UserWithId[], action: PayloadAction<User>) => {
			const id = crypto.randomUUID();
			state.push({ id, ...action.payload });
			return state;
		},
		deleteUserById: (state: UserWithId[], action: PayloadAction<UserId>) => {
			return state.filter((user) => user.id !== action.payload);
		},
	},
});

export const { deleteUserById, addNewUser } = usersSlice.actions;

export default usersSlice.reducer;
