// Write your solution in this file!
const employee = { 

}
const name = "Will"


const streetAddress = {
  street: {
      line1: "510 Park Ave",
      line2: "12th Floor",
    },
    city: "New York" ,
    state: "NY" ,
    zipCode: "10022"
};


function updateEmployeeWithKeyAndValue(employee, key, value) {
     const newObj = {...employee };
     newObj[key] = value;
     return newObj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
    const newObj = { ...newEmployee}
    let newEmployee = "Sam"
    newObj[key]
    return newObj;

}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee [key]
    return employee
}