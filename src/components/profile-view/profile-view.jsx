import { ProfileUpdate } from "./profile-update-view/profile-update-view"

export const ProfileView = ({user}) => {
    return (
        <>
            <ProfileUpdate user={user} />
        </>
    )
}