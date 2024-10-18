import React from 'react';

const TeamList = ({ team, removeFromTeam, sortByAge, averageAge }) => {
  return (
    <div className="team-list">
      <h2>Team Members</h2>
      <button onClick={sortByAge}>SORT BY AGE</button>
      {team.length === 0 ? (
        <p>No team members added yet</p>
      ) : (
        <>
          <ul>
            {team.map(emp => (
              <li key={emp.id}>
                {emp.first_name}{emp.last_name} (Age: {emp.age})
                <button onClick={() => removeFromTeam(emp.id)}>REMOVE</button>
              </li>
            ))}
          </ul>
          <p>Average Age: {averageAge}</p>
        </>
      )}
    </div>
  );
};

export default TeamList;
