export default (employees, tabs) => {
  return employees
    .filter((employee) => {
      const idMatch = tabs.includes(employee.id);
      return idMatch;
    })
    .sort((t1, t2) => {
      return tabs.indexOf(t1.id) - tabs.indexOf(t2.id);
    })
};