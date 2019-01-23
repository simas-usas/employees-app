export default (employees, tabs) => {
  return employees.filter((employee) => {
    const idMatch = tabs.includes(employee.id);
    return idMatch;
  })
};