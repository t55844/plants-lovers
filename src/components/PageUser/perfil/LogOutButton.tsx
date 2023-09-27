import { useDispatch } from "react-redux";
import { logOut } from "../../../js/rudux/authSlice";
import { Logout } from "@mui/icons-material";

export default function LogOutButton() {
  const dispatch = useDispatch();

  return (
    <div className="w-full flex flex-row justify-end">
      <button
        className="mb-2 bg-red-500 rounded-md p-2"
        onClick={() => dispatch(logOut(false))}
      >
        <Logout />
      </button>
    </div>
  );
}
