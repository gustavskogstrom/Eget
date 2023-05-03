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

const one = document.querySelector('#Abdominals')

const Abdominals = async () => {
    
    const url = 'http://localhost:3000/Workouts/1';


    const response = await fetch(url);


    if (response.status == 200) {

        const data = await response.json();
        console.log(data);
        one.insertAdjacentHTML(
            "beforeend",
            `<div>
            <h4>${data.name} Muscle: ${data.muscle}</h4>
            <p>${data.reps}</p>
            <p>${data.description}</p>
            </div>`
            );
        // data.forEach((Workouts) => {
        // one.insertAdjacentHTML(
        // "beforeend",
        // `<div>
        // <h4>${Workouts.name} Muscle: ${Workouts.muscle}</h4>
        // <p>${Workouts.reps}</p>
        // <p>${Workouts.description}</p>
        // </div>`
        // );
        // });
    }
};
Abdominals();

// json-server --watch Workouts.json