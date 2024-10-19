import UserHeader from "@/components/header/header";
import React from "react";
import style from "@/styles/Profile.module.scss";
import Cover from "./Cover";

interface UserProps {
  name: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
}

interface Comment {
  comment: string;
  commentBy: string;
  commentAt: Date;
}

interface PostUser {
  username: string;
  picture: string;
  first_name: string;
  last_name: string;
  gender: "male" | "female";
}

interface PostData {
  user: PostUser;
  type: "profilePicture" | "cover" | null;
  text: string;
  images: string[];
  background?: string; // Optional
  comments: Comment[];
  createdAt: string;
}

// Mock user data
const user: UserProps = {
  name: "Nguyen Huy",
  firstName: "Nguyen",
  lastName: "Huy",
  profilePicture: "/images/default_profile.png",
};

// Mock post data matching the Mongoose schema
const postVar: PostData = {
  user: {
    username: "johndoe",
    picture: "/images/default_profile.png",
    first_name: "John",
    last_name: "Doe",
    gender: "male",
  },
  type: "profilePicture",
  text: "This is a mock post description with multiple images.",
  images: ["/stories/1.jpg", "/stories/3.jpg"],
  background: "/images/postBackgrounds/1.jpg",
  comments: [
    {
      comment: "Great post!",
      commentBy: "user1",
      commentAt: new Date(),
    },
  ],
  createdAt: new Date().toISOString(),
};

const Profile = () => {
  return (
    <div className="profile">
      <UserHeader user={user} page="profile" />
      <div className="profile_top">
        <div className="profile_container">
          <Cover cover={"/images/postBackgrounds/1.jpg"} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
