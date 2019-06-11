import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Avatar from "./Avatar";
import FatText from "./FatText";
import Button from "./Button";

const Card = styled.div``;

const UserCard = ({ username, isFollowing, url, isSelf }) => (
    <Card>
        <Avatar url={url} />
        <FatText text={username} />
<<<<<<< HEAD
        {!isSelf && <Button text={isFollowing ? "Unfollow" : "Follow"} />}
=======
            {!isSelf && <Button text={isFollowing ? "Unfollow" : "Follow"} />}
>>>>>>> 663d38f0d333e6b9880a8713ae064c93764ecad5
    </Card>
);

UserCard.propTypes = {
    username: PropTypes.string.isRequired,
    isFollowing: PropTypes.bool.isRequired,
    url: PropTypes.string.isRequired,
    isSelf: PropTypes.bool.isRequired
};

export default UserCard;