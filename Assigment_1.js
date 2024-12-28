function task1() {
    console.log("Task started....")
    setTimeout(()=>{
        console.log("task finished");
    }, 2000)
}

// task1();

let multipleTask = function(){
    console.log("Multiple Task start from here")

    setTimeout(()=>{
        console.log("task1 finished....")
    }, 1000)
    setTimeout(()=>{
        console.log("task2 finished....")
    }, 2000)
    setTimeout(()=>{
        console.log("task3 finished....")
    }, 3000)
}

// console.log('simulating multiple task...')
// multipleTask()



function fetchhData(callback){
    
    setTimeout(()=>{
        const data = "Fetch data"
        callback(data)
    },2000)

}

function handleData(data){
    console.log("data recieved...", data)
}
fetchhData(handleData);
