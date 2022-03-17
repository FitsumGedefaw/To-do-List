const activity_input = document.querySelector(".activity-input");
const add_activity_button = document.querySelector(".activity-button");
const activity_list = document.querySelector(".activity-list");
const filterOptions = document.querySelector(".filter-activities");

add_activity_button.addEventListener("click", addActivity);
activity_list.addEventListener("click", deleteOrCheck);
filterOptions.addEventListener("click", filterActivities);

function addActivity(event)
{
   event.preventDefault();
   const new_activity_Div = document.createElement("div");//create a div element(that holds an activity)
   new_activity_Div.classList.add("new-activity-div");// give the div a class name of 'new-activity-div'

   const new_activity_li = document.createElement("li");
   new_activity_li.classList.add("new-activity-li");
   new_activity_li.innerText = activity_input.value;
   new_activity_Div.appendChild(new_activity_li);

   const completedButton =  document.createElement("button");
   completedButton.classList.add("completed-button");
   completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
   new_activity_Div.appendChild(completedButton);

   const trashButton =  document.createElement("button");
   trashButton.classList.add("trash-button");
   trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';        
   new_activity_Div.appendChild(trashButton);

   activity_list.appendChild(new_activity_Div);
   activity_input.value = "";
}

function deleteOrCheck(event)
{
   const clickedItem = event.target;
   const todo_div = clickedItem.parentElement;
  if(clickedItem.classList.item(0) === "trash-button")
     {
        todo_div.classList.add("fall");
        todo_div.addEventListener("transitionend", function(){
            todo_div.remove();
        }
        );
     }
   else if(clickedItem.classList[0] === "completed-button")
     {
         todo_div.classList.toggle("activity-completed");
     }
}

function filterActivities(e)
   {
      const activities = activity_list.children;
   
         switch(e.target.value)
         {
            case "all":
               for(let i = 0; i < activities.length; i++)
                  {
                     activities[i].style.display = "flex";  
                  }
               break;
            case "completed":
               for(let i = 0; i < activities.length; i++)
                  {
                     if(activities[i].classList.contains("activity-completed"))
                        {
                           activities[i].style.display = "flex";
                        }
                     else
                        {
                           activities[i].style.display = "none";
                        }
                  }
               break;
            case "uncompleted":
               for(let i = 0; i < activities.length; i++)
                  {
                     if(!activities[i].classList.contains("activity-completed"))
                        {
                           activities[i].style.display = "flex";
                        }
                     else
                        {
                           activities[i].style.display = "none";
                        }
                  }
          }
    }
