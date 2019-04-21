const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
	e.preventDefault();
	if(nameInput.value === '' || emailInput.value === ''){
		msg.classList.add('error');
		msg.innerHTML = 'Please enter all fields';
		setTimeout(() => msg.remove(), 3000);
	} else{
		console.log('success');
		const li = document.createElement('li');
		li.appendChild(document.createTextNode(`${
			nameInput.value} : ${emailInput.value}`));

		userList.appendChild(li);
		nameInput.value = '';
		emailInput.value = '';
	}
}

// purpose: add the users to the unordered list(ul)
// if:
// since it's form element, event can be submit
// not need to call onSubmit, can be defined outside
// add the error class of css into html
// let the empty msg class have new innerHTML text
// setTimeout function takes no parameter, and remove the whole
// msg for 3000 milsecs

// else:
// create element with li tag from nowhere
// append text node and grap the value of the object
// append the child li to userList