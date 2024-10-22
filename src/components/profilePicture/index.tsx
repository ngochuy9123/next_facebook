"use client";
import React, { useRef, useState } from "react";
import style from "@/components/profilePicture/style.module.scss";
import icons from "@/public/icons.module.scss";
import UpdateProfilePicture from "./UpdateProfilePicture";

const ProfilePicture: React.FC = () => {
  const refInput = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (
      file.type !== "image/jpeg" &&
      file.type !== "image/png" &&
      file.type !== "image/webp" &&
      file.type !== "image/gif"
    ) {
      setError(`${file.name} format is not supported.`);
      return;
    } else if (file.size > 1024 * 1024 * 5) {
      setError(`${file.name} is too large. Max 5MB allowed.`);
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      if (event.target?.result) {
        setImage(event.target.result as string);
      }
    };
  };

  return (
    <div className={style.blur_background}>
      <input
        type="file"
        ref={refInput}
        hidden
        onChange={handleImage}
        accept="image/jpeg,image/png,image/webp,image/gif"
      />
      <div className={`${style.postBox} ${style.pictureBox}`}>
        <div className={style.box_header}>
          <div className="small_circle" onClick={() => setImage("")}>
            <i className={icons.exit_icon}></i>
          </div>
          <span>Update profile picture</span>
        </div>
        <div className={style.update_picture_wrap}>
          <div className={style.update_picture_buttons}>
            <button
              className={style.light_blue_btn}
              onClick={() => refInput.current?.click()}
            >
              <i className={`${icons.plus_icon} filter_blue`}></i>
              Upload photo
            </button>
            <button className="gray_btn">
              <i className={icons.frame_icon}></i>
              Add frame
            </button>
          </div>
        </div>
        {error && (
          <div className="postError comment_error">
            <div className="postError_error">{error}</div>
            <button className="blue_btn" onClick={() => setError("")}>
              Try again
            </button>
          </div>
        )}
        <div className={style.old_pictures_wrap}></div>
      </div>
      {image && <UpdateProfilePicture setImage={setImage} image={image} />}
    </div>
  );
};

export default ProfilePicture;
