import React from 'react';

const EmployeeList = ({ employees, addToTeam }) => {
  return (
    <div className="employee-list">
      <h2>Employees</h2>
      {employees.map(emp => (
        <div key={emp.id} className={`employee-item ${emp.addedToTeam ? 'disabled' : ''}`}>
          <span>{emp.first_name} {emp.last_name} &nbsp; (Age: {emp.age})</span>
          {!emp.addedToTeam && <button onClick={() => addToTeam(emp.id)}>ADD</button>}
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;
