function renderStudent(){
    let ddl_students =document.getElementById('ddl_students');
    fetch('https://training020304.onrender.com/students');
      .then(response => response.json());
      .then(json => 
        json.forEach(student => {
            let option = document.createElement('option');
            option.innerHTML = student.name;
            ddl_students.appendChild( option);
        }))
    }

  