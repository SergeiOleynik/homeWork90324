
//* Маєте отримати результат:
// contact: "john.doe@example.com, New York"
// fullName: "John Doe, 30"

const person = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
    city: 'New York',
  };

                /***** варіант 1 *****/ 
//   function personInfo(obj) {
//     const { name, age, email, city } = obj,
//             fullName = `${name} ${age}`,
//             contact = `${email}, ${city}`;
//     return {contact, fullName};
//   } 
//   const newOb=personInfo(person),
//         {fullName,contact}=newOb;

//   alert(`fullName:  ${fullName}
//    contact:  ${contact}`);              

/****************************************************************************/               

            /***** варіант 2 *****/ 
function personInfo(obj){
    const { name, age, email, city } = obj,
            fullName = `${name} ${age}`,
            contact = `${email}, ${city}`;
    return alert(`fullName:  ${fullName} 
contact:    ${contact}`);
}

personInfo(person);

/****************************************************************************/  
         