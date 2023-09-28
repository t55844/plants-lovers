export default function Perfil(props: { user: any }) {
  const { user } = props;
  return (
    <div
      className="bg-gray-50 p-4 rounded-lg 
      "
    >
      <h2 className="text-xl font-semibold">User Information</h2>
      <div className="mt-4">
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
}
