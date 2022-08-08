window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const tasksContainer = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		// HTML Set Up

		const newTaskContainer = document.createElement('div');
		newTaskContainer.classList.add('task');

		const newTaskContent = document.createElement('div');
		newTaskContent.classList.add('content');

		newTaskContainer.appendChild(newTaskContent);

		const newInput = document.createElement('input');
		newInput.classList.add('text');
		newInput.type = 'text';
		newInput.value = task;
		newInput.setAttribute('readonly', 'readonly');

		newTaskContent.appendChild(newInput);


		const taskActions = document.createElement('div');
		taskActions.classList.add('actions');
		
		const editButton = document.createElement('button');
		 editButton.classList.add('edit');
		 editButton.innerText = 'Edit';

		const deleteButton = document.createElement('button');
		deleteButton.classList.add('delete');
		deleteButton.innerText = 'Delete';

		taskActions.appendChild(editButton);
		taskActions.appendChild(deleteButton);

		newTaskContainer.appendChild(taskActions);

		// Final

		tasksContainer.appendChild(newTaskContainer);

		// Java Script Set Up
		
		input.value = '';

		editButton.addEventListener('click', (e) => {
			if ( editButton.innerHTML.toLowerCase() == "edit") {
				 editButton.innerText = "Save";
				newInput.removeAttribute("readonly");
				newInput.focus();
			} else {
				 editButton.innerText = "Edit";
				 newInput.setAttribute("readonly", "readonly");
			}
		});

		deleteButton.addEventListener('click', (e) => {
			tasksContainer.removeChild( newTaskContainer);
		});
	});
});