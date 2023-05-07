import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Image from "next/image";

const UserProfile: NextPage = () => {
    const { data: session } = useSession();

    if (!session) {
        return <div>Loading...</div>;
    }

    if (!session.user) {
        return <div>User data is not available</div>;
    }

    if (!session.user.name) {
        return <div>User name is not available</div>;
    }

    //todo: need to figure out, how to get the picture
    // if (!session.user.image) {
    //     return <div>User image is not available</div>
    // }

    return (
        <div>
            <h1>User Profile</h1>
            {/* <Image src={session.user.image} alt="Profile picture" /> */}
            <p>Username: {session.user.name}</p>
        </div>
    );
};

export default UserProfile;