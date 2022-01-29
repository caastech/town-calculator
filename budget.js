const budget = document.querySelector('#budget')
const salary = document.querySelector('#salary')
const check = document.querySelector('#check')
const result = document.querySelector('#result')


check.addEventListener('click', () => {

    timeCounter(budget.value,salary.value)

})

function timeCounter(budget, salary) {

    let time = 0;
    // console.log(budget);
    // console.log(salary);

    while (Math.floor(budget) >= salary) {
        budget = budget - salary;
        
        console.log(budget);
        time += 60
    }

    let minutes = time / 60
    if (minutes > 60) {
        let hours = minutes/60
        // console.log(Math.ceil(hours),'hours');
        result.value = `${Math.ceil(hours)} hours`
    }
    
    else {
        // console.log(minutes,'mins.');
        result.value = `${Math.ceil(minutes)} minutes`
    }
    
}



