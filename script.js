let typed = new Typed('#heading',{
    strings:["To do List App","Add a new Task"],
    loop:true,
    typeSpeed:100,
    backSpeed:50,
    backDelay:1000
});

let inp = document.querySelector('#take-input');
let ul = document.querySelector('#list');

inp.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        append_list(this.value);
        this.value = "";
    }
});

function append_list(value) {
    let li = document.createElement('li');
    
    // Create the task text element
    let taskText = document.createElement('span');
    taskText.textContent = value;
    taskText.classList.add('task-text');
    
    // Create the delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    
    // Append the text and button to the list item
    li.appendChild(taskText);
    li.appendChild(deleteBtn);
    ul.appendChild(li);
    
    // Toggle done class on click
    li.addEventListener('click', function() {
        if (event.target !== deleteBtn) {
            this.classList.toggle('done');
        }
    });
    
    // Delete task on button click
    deleteBtn.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent click event from propagating to the list item
        li.remove();
    });
}
