const workout = document.querySelector("#workouts-data")

const listWorkouts = async () => {
    
    const url = "http://localhost:3000/workouts";


    const response = await fetch(url);


    if (response.status == 200) {

        const data = await response.json();
        console.log(data);
    
        data.forEach((workout) => {
        workout.insertAdjacentHTML(
        "beforeend",
        `<div>
        <p>${workout.muscle}</p>
        <p>${workout.name}</p>
        <p>${workout.reps}</p>
        <p>${workout.description}</p>
        </div>`
        );
        });
    }
};
listWorkouts();