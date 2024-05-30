import { Button, Card, TextInput, Title } from "@tremor/react";
import { useUsersActions } from "../hooks/useUsersActions";

export function CreateNewUser() {
	const { addUser } = useUsersActions();
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);
		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const github = formData.get("github") as string;

		addUser({ name, email, github });
	};
	return (
		<Card className="w-1/3 mx-auto mt-8">
			<Title> Crear nuevo usuario</Title>
			<form onSubmit={handleSubmit}>
				<TextInput name="name" className="my-2" placeholder="Nombre" />
				<TextInput name="email" className="my-2" placeholder="Email" />
				<TextInput name="github" className="my-2" placeholder="Github" />
				<div>
					<Button type="submit" className="mt-4">
						Crear usuario
					</Button>
				</div>
			</form>
		</Card>
	);
}
