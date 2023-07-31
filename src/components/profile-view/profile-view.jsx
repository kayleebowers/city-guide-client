import { ProfileUpdate } from "./profile-update-view/profile-update-view";
import { Todo } from "../todo-view/todo-view";

export const ProfileView = ({ user, server, token, setUser, onLogout }) => {
  
  return (
    <>
      <ProfileUpdate
        user={user}
        server={server}
        token={token}
        setUser={setUser}
        onLogout={onLogout}
      />
      <Todo user={user} server={server} token={token} activities={activities}/>
    </>
  );
};
