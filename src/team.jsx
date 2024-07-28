import { useState } from "react";

export default function Team() {
  const [team, setTeam] = useState(11);
  const handleAdd = () => {
    const newTeam = team + 1;
    setTeam(newTeam);
  };
  const handleRemove = () => {
    const newTeam = team - 1;
    setTeam(newTeam);
  };
  const teamStyle = {
    border: "4px solid purple",
    margin: "14px",
    padding: "10px",
    borderRadius: "10px",
  };

  return (
    <div style={teamStyle}>
      <h3>players :{team}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Reduce</button>
    </div>
  );
}
