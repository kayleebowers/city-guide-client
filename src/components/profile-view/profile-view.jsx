import { ProfileUpdate } from "./profile-update-view/profile-update-view"

export const ProfileView = ({user, server, token}) => {
    return (
        <>
            <ProfileUpdate user={user} server={server} token={token} />
        </>
    )
}