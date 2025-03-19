// Add your code here
function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
      method: 'POST',  
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name: name,  
        email: email,
      }),
    })
    .then(function (response) {
      return response.json();  
    })
    .then(function (object) {
      console.log(object);  
      
      
      if (object.id) {
        
        const id = object.id;
        const idElement = document.createElement('p');
        idElement.textContent = `New user created with ID: ${id}`;
        document.body.appendChild(idElement);
      } else {
        
        console.error('No ID returned in response:', object);
      }
    })
    .catch(function (error) {
      
      const errorElement = document.createElement('p');
      errorElement.textContent = `Error: ${error.message}`;
      document.body.appendChild(errorElement);
    });
  }
  
