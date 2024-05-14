let enter = document.getElementById("submit");
let taskContainer = document.getElementById("taskContainer");

enter.addEventListener("click", function(event){
    event.preventDefault();

    let task = document.getElementById("task").value;
    let date = document.getElementById("date").value;
    
    if (task === "" || date === "") {
        alert("Fill out all fields!");
    } else {
        const para = document.createElement("p");
        const delButton = document.createElement("button");
        delButton.innerText = "Delete Task \n ▼";
        para.innerText = "Do: " + task + "\n" + "Date: " + date;
        
        delButton.addEventListener("click", function() {
            taskContainer.removeChild(para);
            taskContainer.removeChild(delButton);
        });

        taskContainer.appendChild(delButton);
        taskContainer.appendChild(para);
        delButton.style.backgroundColor = "rgb(251, 98, 98)";
        delButton.style.border = "1px solid rgb(251, 98, 98)";
        delButton.style.borderRadius = "25px";
        delButton.addEventListener("mouseenter", function() {
            delButton.style.backgroundColor = "rgb(243, 50, 50)";
        });
        delButton.addEventListener("mouseleave", function() {
            delButton.style.backgroundColor = "rgb(251, 98, 98)";
        });
        document.getElementById("task").value = "";
        document.getElementById("date").value = "";
    }
});
