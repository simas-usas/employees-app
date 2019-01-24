export default (employees, tabs) => {
  return employees
    .filter((employee) => {
      const idMatch = tabs.includes(employee.id);
      return idMatch;
    })
    .sort((employee, tab) => {
      return tabs.indexOf(employee.id) - employees.map((e) => e.id).indexOf(tab.id);
    })
};