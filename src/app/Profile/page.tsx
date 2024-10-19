import React from "react";
import UserHeader from "@/components/header/header";
import style from "@/styles/Profile.module.scss";
import Cover from "./Cover";
import ProfilePictureInfos from "./ProfilePictureInfos";
import ProfileMenu from "./ProfileMenu";
import PplYouMayKnow from "./PplYouMayKnow";

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

const ProfilePage = () => {
  return (
    <div className={style.profile}>
      <UserHeader user={user} page="profile" />
      <div className={style.profile_top}>
        <div className={style.profile_container}>
          <Cover cover={"/images/postBackgrounds/1.jpg"} />
          {/* Passing the user data to ProfilePictureInfos */}
          <ProfilePictureInfos
            profile={{
              picture: user.profilePicture,
              first_name: user.firstName,
              last_name: user.lastName,
            }}
          />
          <ProfileMenu />
        </div>
      </div>
      <div className={style.profile_bottom}>
        <div className={style.profile_container}>
          <div className={style.bottom_container}>
            <PplYouMayKnow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
