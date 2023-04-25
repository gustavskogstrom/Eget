const Info = document.querySelector('#Workouts-list')

const listWorkouts = async () => {
    
    const url = 'http://localhost:3000/Workouts';


    const response = await fetch(url);


    if (response.status == 200) {

        const data = await response.json();
        console.log(data);
    
        data.forEach((Workouts) => {
        Info.insertAdjacentHTML(
        "beforeend",
        `<div>
        <p>${Workouts.muscle}</p>
        <p>${Workouts.name}</p>
        <p>${Workouts.reps}</p>
        <p>${Workouts.description}</p>
        </div>`
        );
        });
    }
};
listWorkouts();