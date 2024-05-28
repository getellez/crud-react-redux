// 'use client';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableRow,
} from "@tremor/react";

const users = [
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

export default function ListOfUsers() {
	return (
		<>
			<div className="sm:flex sm:items-center sm:justify-between sm:space-x-10">
				<div>
					<h3 className="font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
						ids
					</h3>
					<p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
						Overview of all registered ids within your organization.
					</p>
				</div>
				<button
					type="button"
					className="mt-4 w-full whitespace-nowrap rounded-tremor-small bg-tremor-brand px-4 py-2.5 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis sm:mt-0 sm:w-fit"
				>
					Add id
				</button>
			</div>
			<Table className="mt-8">
				<TableHead>
					<TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
						<TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
							id
						</TableHeaderCell>
						<TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
							Nombre
						</TableHeaderCell>
						<TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
							Email
						</TableHeaderCell>
						<TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
							GitHub
						</TableHeaderCell>
						<TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
							Acciones
						</TableHeaderCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{users.map((user) => (
						<TableRow key={user.id}>
							<TableCell>{user.id}</TableCell>
							<TableCell className="flex items-center">
								<img
									src={`https://unavatar.io/github/${user.github}`}
									alt="avatar"
									style={{
										width: "32px",
										height: "32px",
										borderRadius: "50%",
										marginRight: "8px",
									}}
								/>
								{user.name}
							</TableCell>
							<TableCell>{user.email}</TableCell>
							<TableCell>{user.github}</TableCell>
							<TableCell>
								<button type="button">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="size-6"
									>
										<title hidden>Edit</title>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
										/>
									</svg>
								</button>
								<button type="button">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="size-6"
									>
										<title hidden>Delete</title>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
										/>
									</svg>
								</button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</>
	);
}
