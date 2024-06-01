import { Card, Title } from "@tremor/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import type { RootState } from "../store";
import type { UserWithId } from "../store/users/usersSlice";

const ProfilePage = () => {
	const [profile, setProfile] = useState<UserWithId>();
	const { userId } = useParams();
	const users = useSelector((state: RootState) => state.users);
	useEffect(() => {
		setProfile(users.find((user) => user.id === userId));
	}, [userId, users]);

	return (
		<>
			<Link
				to="/users"
				className="px-4 py-2 bg-blue-600 text-white rounded mr-4"
			>
				Lista de usuarios
			</Link>
			{profile ? (
				<Card className="w-1/5 mx-auto text-center flex flex-col items-center justify-center">
					<img
						src={`https://unavatar.io/github/${profile.github}`}
						alt="avatar"
						style={{
							width: "64px",
							height: "64px",
							borderRadius: "50%",
						}}
					/>
					<Title className="font-bold">
						{profile.name} - {profile.github}
					</Title>
					<small>{profile.email}</small>
				</Card>
			) : (
				<p className="my-12">The user doesn't exist</p>
			)}
		</>
	);
};

export default ProfilePage;
