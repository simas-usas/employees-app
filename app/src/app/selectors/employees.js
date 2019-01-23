export default (employees, { search }) => {
  return employees.filter((employee) => {
    const fullName = `${employee.firstName} ${employee.lastName}`;
    const textMatch = fullName.toLowerCase().includes(search.toLowerCase());

    return textMatch;
  })
};