

   /* created event listneer to the form if the form sumbmited function will perform*/ 
document.getElementById('form').addEventListener('submit', function (event) 
{ event.preventDefault();
     const studentName = document.getElementById('stuname').value.toUpperCase(); //stuname value taken as studentName it will take in uppercase
     const studentId = document.getElementById('stuid').value; //stuid value taken as studentId
     const studentEmail = document.getElementById('stuemail').value;//stuemail value taken as studentEmail
     const studentPhno = document.getElementById('stuphno').value;//stuphno value taken as studentPhno
  
let attendance = JSON.parse(localStorage.getItem('attendance')); // fetches the item with key attendence in localstorage takes the string and converts into array
     attendance.push({ id: studentId, name: studentName, email: studentEmail, phno:studentPhno});// adds objects to attendance array
      localStorage.setItem('attendance', JSON.stringify(attendance)); //sets attendence as a aatendance object as string
     document.getElementById('form').reset();// resets page
      displayAttendance();//displays enterd data
      }
    );


    
    
   
      
 /* it will add new row to storeattendance table body*/    
function displayAttendance() { 
    const storeattendanceBody = document.querySelector('#storeattendance tbody'); 
        storeattendanceBody.innerHTML = '';
         const attendance = JSON.parse(localStorage.getItem('attendance')) ; 
        attendance.forEach((record, index) => { const row = document.createElement('tr'); 
            row.innerHTML = ` <td>${record.name}</td> <td>${record.id}</td> <td>${record.email}</td> <td>${record.phno}</td> <td> <button style="background-color:green" onclick="editRecord(${index})">Edit</button> <button style="background-color:red" onclick="deleteRecord(${index})">Delete</button> </td> `;
            storeattendanceBody.appendChild(row); }); } 
 //to edit the data      
       
function editRecord(index) { 
    const attendance = JSON.parse(localStorage.getItem('attendance'));
             const record = attendance[index];
              document.getElementById('stuid').value = record.id; 
              document.getElementById('stuname').value = record.name; 
              document.getElementById('stuemail').value = record.email;
              document.getElementById('stuphno').value = record.phno; 
              localStorage.setItem('attendance', JSON.stringify(attendance)); 
               displayAttendance(); } 
    //deletes the row
function deleteRecord(index) { const attendance = JSON.parse(localStorage.getItem('attendance')); 
    attendance.splice(index, 1)
                 localStorage.setItem('attendance', JSON.stringify(attendance)); 
    displayAttendance(); } 
    
    // Initially display attendance on page load 
    displayAttendance();