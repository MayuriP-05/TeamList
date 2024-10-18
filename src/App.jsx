// import React, { useReducer } from 'react';
// import EmployeeList from './components/EmployeeList';
// import TeamList from './components/TeamList';
// import './App.css';

// const employeesData = [
//   {"id":1,"first_name":"Jaymee","last_name":"Imm","email":"jimm0@craigslist.org","gender":"Genderqueer","age":80},
//   {"id":2,"first_name":"Jody","last_name":"Themann","email":"jthemann1@skyrock.com","gender":"Agender","age":29},
//   {"id":3,"first_name":"Cece","last_name":"Carlet","email":"ccarlet2@jalbum.net","gender":"Male","age":69},
//   {"id":4,"first_name":"Elton","last_name":"Allinson","email":"eallinson3@jugem.jp","gender":"Male","age":31},
//   {"id":5,"first_name":"Garvy","last_name":"Shaddick","email":"gshaddick4@rediff.com","gender":"Male","age":32},
//   {"id":6,"first_name":"Fin","last_name":"Realy","email":"frealy5@unc.edu","gender":"Male","age":26},
//   {"id":7,"first_name":"Minna","last_name":"Frani","email":"mfransseni6@aboutads.info","gender":"Agender","age":52},
//   {"id":16,"first_name":"Betty","last_name":"Simm","email":"bsimmf@engadget.com","gender":"Female","age":26},
//   {"id":17,"first_name":"Rallle","last_name":"Brighouse","email":"rbrighouseg@vinaora.com","gender":"Male","age":43},
//   {"id":18,"first_name":"Sibby","last_name":"Meanwell","email":"smeanwellh@independent.co.uk","gender":"Female","age":66},
//   {"id":19,"first_name":"Ricky","last_name":"Sissland","email":"rsisslandi@google.it","gender":"Male","age":76},
//   {"id":20,"first_name":"Sauveur","last_name":"Hessenthaler","email":"shessenthalerj@ocn.ne.jp","gender":"Male","age":48},
//   {"id":33,"first_name":"Harold","last_name":"Davioud","email":"hdavioudw@spiegel.de","gender":"Male","age":42},
//   {"id":34,"first_name":"Adrianne","last_name":"Sprankling","email":"aspranklingx@sciencedaily.com","gender":"Female","age":58},
//   {"id":35,"first_name":"Friedrick","last_name":"ls","email":"fstennersy@irs.gov","gender":"Male","age":41},
//   {"id":36,"first_name":"Nan","last_name":"Volette","email":"nvolettez@fc2.com","gender":"Female","age":27},
//   {"id":37,"first_name":"Darci","last_name":"Keuneke","email":"dkeuneke10@xrea.com","gender":"Female","age":80},
//   {"id":49,"first_name":"Allan","last_name":"Gibbins","email":"agibbins1c@ezinearticles.com","gender":"Genderfluid","age":44},
//   {"id":50,"first_name":"Melisenda","last_name":"Queree","email":"mqueree1d@intel.com","gender":"Female","age":52}
  
// ];

// // Actions
// const ADD_TO_TEAM = 'ADD_TO_TEAM';
// const REMOVE_FROM_TEAM = 'REMOVE_FROM_TEAM';
// const SORT_BY_AGE = 'SORT_BY_AGE';

// // Reducer function to handle state changes
// const reducer = (state, action) => {
//   switch (action.type) {
//     case ADD_TO_TEAM:
//       return {
//         ...state,
//         employees: state.employees.map(emp =>
//           emp.id === action.payload ? { ...emp, addedToTeam: true } : emp
//         ),
//         team: [...state.team, state.employees.find(emp => emp.id === action.payload)],
//       };

//     case REMOVE_FROM_TEAM:
//       return {
//         ...state,
//         team: state.team.filter(emp => emp.id !== action.payload),
//         employees: state.employees.map(emp =>
//           emp.id === action.payload ? { ...emp, addedToTeam: false } : emp
//         ),
//       };

//     case SORT_BY_AGE:
//       return {
//         ...state,
//         team: [...state.team].sort((a, b) => a.age - b.age),
//       };

//     default:
//       return state;
//   }
// };


// const App = () => {
//   // const [employees, setEmployees] = useState(employeesData);
//   // const [team, setTeam] = useState([]);

//   // const addToTeam = (id) => {
//   //   const updatedEmployees = employees.map(emp =>
//   //     emp.id === id ? { ...emp, addedToTeam: true } : emp
//   //   );
//   //   const selectedEmployee = employees.find(emp => emp.id === id);
//   //   setEmployees(updatedEmployees);
//   //   setTeam([...team, selectedEmployee]);
//   // };

//   // const removeFromTeam = (id) => {
//   //   const updatedTeam = team.filter(emp => emp.id !== id);
//   //   const updatedEmployees = employees.map(emp =>
//   //     emp.id === id ? { ...emp, addedToTeam: false } : emp
//   //   );
//   //   setTeam(updatedTeam);
//   //   setEmployees(updatedEmployees);
//   // };

//   // const sortByAge = () => {
//   //   const sortedTeam = [...team].sort((a, b) => a.age - b.age);
//   //   setTeam(sortedTeam);
//   // };

//   // const calculateAverageAge = () => {
//   //   if (team.length === 0) return 0;
//   //   const totalAge = team.reduce((sum, emp) => sum + emp.age, 0);
//   //   return (totalAge / team.length).toFixed(2);
//   // };

//   const initialState = {
//     employees: employeesData,
//     team: [],
//   };

//   const [state, dispatch] = useReducer(reducer, initialState);

//   const addToTeam = (id) => {
//     dispatch({ type: ADD_TO_TEAM, payload: id });
//   };

//   const removeFromTeam = (id) => {
//     dispatch({ type: REMOVE_FROM_TEAM, payload: id });
//   };

//   const sortByAge = () => {
//     dispatch({ type: SORT_BY_AGE });
//   };

//   const calculateAverageAge = () => {
//     if (state.team.length === 0) return 0;
//     const totalAge = state.team.reduce((sum, emp) => sum + emp.age, 0);
//     return (totalAge / state.team.length).toFixed(2);
//   };


//   return (
//     <div className="container">
//       <div className="row">
//         <EmployeeList employees={state.employees} addToTeam={addToTeam} />  
//         {/* for useState use only {employees} */}
//         <TeamList 
//           team={team} 
//           removeFromTeam={removeFromTeam} 
//           sortByAge={sortByAge} 
//           averageAge={calculateAverageAge()} 
//         />
//       </div>
//     </div>
//   );
// };

// export default App;



import React, { useReducer } from 'react';
import EmployeeList from './components/EmployeeList';
import TeamList from './components/TeamList';
import './App.css';

const employeesData = [
  {"id":1,"first_name":"Jaymee","last_name":"Imm","email":"jimm0@craigslist.org","gender":"Genderqueer","age":80},
  {"id":2,"first_name":"Jody","last_name":"Themann","email":"jthemann1@skyrock.com","gender":"Agender","age":29},
  {"id":3,"first_name":"Cece","last_name":"Carlet","email":"ccarlet2@jalbum.net","gender":"Male","age":69},
  {"id":4,"first_name":"Elton","last_name":"Allinson","email":"eallinson3@jugem.jp","gender":"Male","age":31},
  {"id":5,"first_name":"Garvy","last_name":"Shaddick","email":"gshaddick4@rediff.com","gender":"Male","age":32},
  {"id":6,"first_name":"Fin","last_name":"Realy","email":"frealy5@unc.edu","gender":"Male","age":26},
  {"id":7,"first_name":"Minna","last_name":"Frani","email":"mfransseni6@aboutads.info","gender":"Agender","age":52},
  {"id":16,"first_name":"Betty","last_name":"Simm","email":"bsimmf@engadget.com","gender":"Female","age":26},
  {"id":17,"first_name":"Rallle","last_name":"Brighouse","email":"rbrighouseg@vinaora.com","gender":"Male","age":43},
  {"id":18,"first_name":"Sibby","last_name":"Meanwell","email":"smeanwellh@independent.co.uk","gender":"Female","age":66},
  {"id":19,"first_name":"Ricky","last_name":"Sissland","email":"rsisslandi@google.it","gender":"Male","age":76},
  {"id":20,"first_name":"Sauveur","last_name":"Hessenthaler","email":"shessenthalerj@ocn.ne.jp","gender":"Male","age":48},
  {"id":33,"first_name":"Harold","last_name":"Davioud","email":"hdavioudw@spiegel.de","gender":"Male","age":42},
  {"id":34,"first_name":"Adrianne","last_name":"Sprankling","email":"aspranklingx@sciencedaily.com","gender":"Female","age":58},
  {"id":35,"first_name":"Friedrick","last_name":"ls","email":"fstennersy@irs.gov","gender":"Male","age":41},
  {"id":36,"first_name":"Nan","last_name":"Volette","email":"nvolettez@fc2.com","gender":"Female","age":27},
  {"id":37,"first_name":"Darci","last_name":"Keuneke","email":"dkeuneke10@xrea.com","gender":"Female","age":80},
  {"id":49,"first_name":"Allan","last_name":"Gibbins","email":"agibbins1c@ezinearticles.com","gender":"Genderfluid","age":44},
  {"id":50,"first_name":"Melisenda","last_name":"Queree","email":"mqueree1d@intel.com","gender":"Female","age":52}
];

// Actions
const ADD_TO_TEAM = 'ADD_TO_TEAM';
const REMOVE_FROM_TEAM = 'REMOVE_FROM_TEAM';
const SORT_BY_AGE = 'SORT_BY_AGE';

// Reducer function to handle state changes
const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_TEAM:
      return {
        ...state,
        employees: state.employees.map(emp =>
          emp.id === action.payload ? { ...emp, addedToTeam: true } : emp
        ),
        team: [...state.team, state.employees.find(emp => emp.id === action.payload)],
      };

    case REMOVE_FROM_TEAM:
      return {
        ...state,
        team: state.team.filter(emp => emp.id !== action.payload),
        employees: state.employees.map(emp =>
          emp.id === action.payload ? { ...emp, addedToTeam: false } : emp
        ),
      };

    case SORT_BY_AGE:
      return {
        ...state,
        team: [...state.team].sort((a, b) => a.age - b.age),
      };

    default:
      return state;
  }
};

const App = () => {
  const initialState = {
    employees: employeesData,
    team: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const addToTeam = (id) => {
    dispatch({ type: ADD_TO_TEAM, payload: id });
  };

  const removeFromTeam = (id) => {
    dispatch({ type: REMOVE_FROM_TEAM, payload: id });
  };

  const sortByAge = () => {
    dispatch({ type: SORT_BY_AGE });
  };

  const calculateAverageAge = () => {
    if (state.team.length === 0) return 0;
    const totalAge = state.team.reduce((sum, emp) => sum + emp.age, 0);
    return (totalAge / state.team.length).toFixed(2);
  };

  return (
    <div className="container">
      <div className="row">
        <EmployeeList employees={state.employees} addToTeam={addToTeam} />
        <TeamList 
          team={state.team} 
          removeFromTeam={removeFromTeam} 
          sortByAge={sortByAge} 
          averageAge={calculateAverageAge()} 
        />
      </div>
    </div>
  );
};

export default App;
