// UserInfo.tsx
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../js/rudux/store";

export default function UserInfo() {
  const auth = useSelector((state: RootState) => state.auth);
  console.log(auth);
  const user =
    auth.token !== null
      ? {
          name: auth.token.user.email.match(/^(.*?)@/)[1],
          email: auth.token.user.email,
          favorites: [],
          comments: [],
        }
      : { name: "", email: "", favorites: [], comments: [] };
  return (
    <div className="bg-lime-200 p-4 rounded-lg">
      <h2 className="text-xl font-semibold">User Information</h2>
      <div className="mt-4">
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <div className="mt-2">
          <h3 className="text-lg font-semibold">Favorites</h3>
          <ul>
            {user.favorites.map((favorite, index) => (
              <li key={index}>{favorite}</li>
            ))}
          </ul>
        </div>
        <div className="mt-2">
          <h3 className="text-lg font-semibold">Comments</h3>
          <ul>
            {user.comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
