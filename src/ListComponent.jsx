export default function ListComponent({ userLists }) {
  return (
    <ul>
      {userLists.map(user => (
        <li key={user.id}>Name: {user.name}</li>
      ))}
    </ul>
  );
}
