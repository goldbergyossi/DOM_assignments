fetch('https://jsonplaceholder.typicode.com/users')
  .then((x) => x.json())
  .then((response) => {
    console.log(response)
    processData(response)
  });

processData = (user) => {
  user.forEach((elem, index) => {
    let parentDiv = document.querySelector('#user');
    let childDiv = document.createElement('div');
    childDiv.classList.add("box");
    childDiv.setAttribute("id", `user_${index}`)
    let name = document.createElement('h3');
    let email = document.createElement('h4');
    let address = document.createElement('p');
    let remove = document.createElement('button');

    name.innerText = elem.name;
    email.innerText = elem.email;
    address.innerText = `${elem.address.street} ${elem.address.suite} ${elem.address.city} ${elem.address.zipcode}`;
    childDiv.appendChild(name);
    childDiv.appendChild(email);
    childDiv.appendChild(address);
    childDiv.appendChild(remove);
    parentDiv.appendChild(childDiv);
    remove.innerText = "delete";


  remove.addEventListener('click', (event) =>{
    console.log('delete user')
    deleteUser(event);
  })

})
} 

deleteUser = (event) => {
console.log(event.target.parentNode.id); 
var elem = document.getElementById(event.target.parentNode.id);
elem.parentNode.removeChild(elem);
}
