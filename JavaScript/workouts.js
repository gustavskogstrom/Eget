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
        <h4>${Workouts.name} Muscle: ${Workouts.muscle}</h4>
        <p>${Workouts.reps}</p>
        <p>${Workouts.description}</p>
        </div>`
        );
        });
    }
};
listWorkouts();

// json-server --watch Workouts.json