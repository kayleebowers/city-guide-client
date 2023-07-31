import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ProfileUpdate } from "./profile-update-view/profile-update-view";
import { useState } from "react";

export const ProfileView = ({ user, server, token, setUser, onLogout }) => {
  //add states to operate modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //delete user from api
  const handleDelete = () => {
    fetch(`${server}/users/${user._id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          alert(`User ${user.Username} was deleted`);
          onLogout(`${user._id}`);
        } else {
          alert("Account deletion failed");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <ProfileUpdate
        user={user}
        server={server}
        token={token}
        setUser={setUser}
        onLogout={onLogout}
      />
      {/* modal button */}
      <Button variant="primary" onClick={handleShow}>
        Delete your account
      </Button>
        {/* full deletion modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete your account?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Back
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
