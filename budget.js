// DOM selectors of inputs and textarea ids
const budget = document.querySelector('#budget')
const salary = document.querySelector('#salary')
const check = document.querySelector('#check')
const result = document.querySelector('#result')

// Event Listener to trigger the counter on button click 
check.addEventListener('click', () => {

    // Calling the timeCounter function
    timeCounter(budget.value,salary.value)

})

const timeCounter = (budget, salary) => {

    // Set the time counter to 0
    let time = 0;

    while (Math.floor(budget) >= salary) {
        //Subtract budget from salary
        budget -= salary;
        
        // Add 60 seconds to time
        time += 60
    }

    // Convert seconds to minutes
    const minutes = time / 60

    // if minutes are more or equal to 60mins the time will be set to hours    
    if (minutes > 60) {

        // Convert minutes from hours
        let hours = (minutes/60).toFixed(2)
        // console.log(hours);

        // Set the value of textarea from hours 
        result.value = `${hours.replace('.',':')} hours`
    }
    
    else {

        // Set the value from textarea from minutes

        result.value = `${Math.ceil(minutes)} minutes`
        // console.log(minutes);

    }
    
}



