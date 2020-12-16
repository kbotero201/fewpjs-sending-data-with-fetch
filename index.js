// Add your code here

function submitData(name, email) {
    return fetch( 'http://localhost:3000/users', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
        name,
        email
      })
    
    } )
    // .then function 
    .then(function(response) {
        return response.json()
      })
      .then(function(data) {
        //console.log(data.id)
        let body = document.querySelector("body")
        body.textContent = data.id
      })

      // Error message .catch
      .catch( function ( error ) {
        let body = document.querySelector("body")
        body.textContent = error.message
      } )
    
}
