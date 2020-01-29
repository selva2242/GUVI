let promise1 = fetch("https://5cdd0a92b22718001417c19d.mockapi.io/api/users")
let promise2 = fetch("https://5cdd0a92b22718001417c19d.mockapi.io/api/books")
let promise3 = fetch("https://5cdd0a92b22718001417c19d.mockapi.io/api/products")    
let promise4 = fetch("https://5cdd0a92b22718001417c19d.mockapi.io/api/doctors")
promise1 = promise1.then((data)=>{
    return data.json()
})
promise2 = promise2.then((data)=>{
    return data.json()
})
promise3 = promise3.then((data)=>{
    return data.json()
})
promise4 = promise4.then((data)=>{
    return data.json()
})
Promise.all([promise1, promise2, promise3, promise4]).then((arr)=>{
    count = 1
    arr.forEach((array)=>{
        createTable(array, count)
        count+=1
    })
})
function createTable(data, count){
    data.forEach((element)=>{
        tr = document.createElement('tr')
        keys = Object.keys(element)
        keys.forEach((key)=>{
            td = document.createElement('td')
            console.log(element, key)
            td.innerHTML = element[key]
            tr.appendChild(td)
        })
        document.getElementById(count).appendChild(tr)
    })
}