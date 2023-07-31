import { ProfileUpdate } from "./profile-update-view/profile-update-view"

export const ProfileView = ({user, server, token, setUser}) => {
    return (
        <>
            <ProfileUpdate user={user} server={server} token={token} setUser={setUser} />
        </>
    )
}