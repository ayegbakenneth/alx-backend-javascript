export default function createEmployeesObject(departmentName, employees) {

  const employeesID = {
    [departmentName]: employees,
};
  return employeesID;
}
