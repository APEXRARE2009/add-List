const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const blockUl = document.querySelector(".block_ul");

let ul = document.createElement("ul");
blockUl.appendChild(ul);

function addLi() {
 	let li = document.createElement("li");
 	ul.appendChild(li);
 	return li;
}

btn.disabled = true;

function isEmpty() {
	if (input.value != "") {
		btn.disabled = false;
	} else {
		btn.disabled = true;
	}
};

input.addEventListener("keyup", isEmpty);

function addAll() {
	let value = input.value;
	let li = addLi();
	li.innerHTML = `<span>${value}</span>`;

	li.classList.add("li");
	ul.classList.add("ul");

	let btnDelete = document.createElement("button");
	li.appendChild(btnDelete);

	btnDelete.innerHTML = `<img src="img/delete.png"/>`

	btnDelete.addEventListener("click", () => {
		ul.removeChild(li);
	})

	btnDelete.classList.add("btnDelete");
	input.value = "";
	
	li.addEventListener("click", () => {
		li.classList.toggle("spanjs");
	})
	isEmpty()
}


btn.addEventListener("click", addAll);


input.addEventListener("keyup", (event) => {
	if (event.key == "Enter") {
		addAll()
		isEmpty()
	}
})
