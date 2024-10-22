"use client";
import React, { useCallback, useRef, useState } from "react";
import Cropper from "react-cropper"; // Using react-cropper
import "cropperjs/dist/cropper.css"; // Make sure to import the Cropper's CSS file
import style from "@/components/profilePicture/style.module.scss";
import icons from "@/public/icons.module.scss";

interface UpdateProfilePictureProps {
  setImage: (value: string) => void;
  image: string;
}

const UpdateProfilePicture: React.FC<UpdateProfilePictureProps> = ({
  setImage,
  image,
}) => {
  const [description, setDescription] = useState("");
  const [zoom, setZoom] = useState(1);
  const cropperRef = useRef<HTMLImageElement>(null);
  const slider = useRef<HTMLInputElement>(null);

  const onCropComplete = useCallback(() => {
    const cropper = cropperRef.current?.cropper;
    if (cropper) {
      console.log(cropper.getCroppedCanvas().toDataURL());
    }
  }, []);

  const zoomIn = () => {
    if (slider.current) {
      slider.current.stepUp();
      setZoom(Number(slider.current.value));
    }
  };

  const zoomOut = () => {
    if (slider.current) {
      slider.current.stepDown();
      setZoom(Number(slider.current.value));
    }
  };

  return (
    <div className="postBox update_img">
      <div className="box_header">
        <div className={style.small_circle} onClick={() => setImage("")}>
          <i className={icons.exit_icon}></i>
        </div>
        <span>Update profile picture</span>
      </div>
      <div className={style.update_image_desc}>
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="textarea_blue details_input"
        ></textarea>
      </div>
      <div className="update_center">
        <div className="crooper">
          <Cropper
            ref={cropperRef}
            src={image} // `src` is the correct prop for the image
            style={{ height: 300, width: "100%" }}
            aspectRatio={1}
            guides={false}
            crop={onCropComplete} // Provide the crop function
            zoomTo={zoom}
          />
        </div>
        <div className="slider">
          <div className="slider_circle hover1" onClick={zoomOut}>
            <i className="minus_icon"></i>
          </div>
          <input
            type="range"
            min={1}
            max={3}
            step={0.2}
            ref={slider}
            value={zoom}
            onChange={(e) => setZoom(Number(e.target.value))}
          />
          <div className="slider_circle hover1" onClick={zoomIn}>
            <i className="plus_icon"></i>
          </div>
        </div>
      </div>
      <div className="flex_up">
        <div className="gray_btn">
          <i className="crop_icon"></i>Crop photo
        </div>
        <div className="gray_btn">
          <i className="temp_icon"></i>Make Temporary
        </div>
      </div>
      <div className="flex_p_t">
        <i className="public_icon"></i>
        Your profile picture is public
      </div>
      <div className="update_submit_wrap">
        <div className="blue_link" onClick={() => setImage("")}>
          Cancel
        </div>
        <button className="blue_btn">Save</button>
      </div>
    </div>
  );
};

export default UpdateProfilePicture;
