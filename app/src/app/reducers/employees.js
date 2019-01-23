import employees from 'static/employee-list';

export default (state = employees, action) => {
  switch (action.type) {
    case 'EDIT_TITLE':
        return state.map((employee) => {
            if (employee.id === action.id) {
              return {
                ...employee,
                title: action.title
              };
            } else {
                return employee;
            };
        });
    default:
      return state;
  }
};
