import React from "react";
import "./imageUpload.css";

const ImageUpload = ({ pix, setPix, currentPix }) => {
  const onChangeHandle = (e) => {
    setPix(e.target.files[0]);
  };

  return (
    <div className="image-upload">
      <label htmlFor="pix">Upload Image</label>
      <input
        type="file"
        name="pix"
        id="pix"
        accept="image/*"
        onChange={onChangeHandle}
      />
      {pix ? (
        <img src={URL.createObjectURL(pix)} alt="solar panel" />
      ) : (
        <img src={currentPix} alt="solar panel" />
      )}
    </div>
  );
};

export default ImageUpload;
