// lets write a object
const employeeDeatils = {
    fName:"soumya",
    lName:"sethy",
    personFnmae: function() {
        console.log("fname = " , this.fName);
    }
    
}

const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    }
}

employee.calcTax;