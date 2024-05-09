// import React from 'react';
// import employees from '../Employe/EmployeForm'

// function EmployeeList({ }) {
//   return (
//     <div>
//       <h2>Employee List</h2>
//       <ul>
//         {employees.map((employee, index) => (
//           <li key={index}>
//             {employee.name} - {employee.position}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default EmployeeList;

import React, { useState } from 'react';

function EmployeeForm() {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmployees([...employees, { name, email }]);
    setName('');
    setEmail('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Add Employee</button>
      </form>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            {employee.name} - {employee.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeForm;

