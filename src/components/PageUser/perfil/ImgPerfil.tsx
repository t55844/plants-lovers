// ImgPerfil.js
import { useState } from "react";
import { uploadProfileImg } from "../../../js/supabase/functions";
import { RootState } from "../../../js/rudux/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUserData } from "../../../js/rudux/authSlice";

const ImgPerfil = () => {
  const auth = useSelector((state: RootState) => state.auth);
  const [selectedImage, setSelectedImage] = useState(auth.userData?.imgProfile);
  const dispatch = useDispatch();

  const handleImageChange = async (e) => {
    const file = e.target.files[0];

    if (file) {
      const data = await uploadProfileImg(auth.userData?.email, file);
      dispatch(setUserData(data.profile[0]));
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="text-center">
      <div className="mb-4">
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Profile"
            className="mx-auto h-32 w-32 rounded-full object-cover"
          />
        ) : (
          <div className="h-32 w-32 mx-auto bg-gray-300 rounded-full"></div>
        )}
      </div>
      <label className="block text-blue-500 cursor-pointer">
        Upload a new image
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
      </label>
    </div>
  );
};

export default ImgPerfil;
