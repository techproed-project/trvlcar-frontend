import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { useStore } from "../../../store";
import PasswordForm from "./password-form";
import ProfileForm from "./profile-form";

const Profile = () => {
  const { userState } = useStore();
  const { user } = userState;

  return (
    <Container>
      <Row>
        <Col md={2} className="text-center">
          <FaUserCircle size="120" />
          <h4>{`${user.firstName} ${user.lastName}`}</h4>
          <em>{user.email}</em>
        </Col>
        <Col md={5}>
          <h3>Update Profile</h3>
          <ProfileForm />
        </Col>
        <Col md={5}>
          <h3>Update Password</h3>
          <PasswordForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
