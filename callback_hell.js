
function performTask(data, callback) {
    console.log("Performing task with data: ", data)

    setTimeout(() => {
        const result = data.toUpperCase()
        callback(result)
    }, 1000)
}

function handleResult(processedData) {
    console.log("Task Completed, Result:", processedData)
}

performTask("Hello Saif", handleResult)