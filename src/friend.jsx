export default function Friend({ friend }) {
  const { name, email, address } = friend;
  const { city } = address;
  return (
    <div className="box">
      <h3>Name: {name}</h3>
      <h4>Email: {email}</h4>
      <h5>City: {city}</h5>
    </div>
  );
}
