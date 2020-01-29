url = "https://5cdd0a92b22718001417c19d.mockapi.io/api/users"
fetch(url).then((rdata)=>{
    return rdata.json()
}).then((data)=>{
    createTable(data,1)
    url = "https://5cdd0a92b22718001417c19d.mockapi.io/api/products"
    return fetch(url)
}).then((rdata1)=>{
    return rdata1.json()
}).then((data1)=>{
    createTable(data1, 2)
    url = "https://5cdd0a92b22718001417c19d.mockapi.io/api/doctors"
    return fetch(url)
}).then((rdata2)=>{
    return rdata2.json()
}).then((data2)=>{
    createTable(data2,3)
    url = "https://5cdd0a92b22718001417c19d.mockapi.io/api/books"
    return fetch(url)
}).then((rdata3)=>{
    return rdata3.json()
}).then((data3)=>{
    createTable(data3, 4)
})



function createTable(data, count){
    data.forEach((element)=>{
        tr = document.createElement('tr')
        keys = Object.keys(element)
        keys.forEach((key)=>{
            console.log(element, key)

            td = document.createElement('td')
            td.innerHTML = element[key]
            tr.appendChild(td)
        })
        document.getElementById(count).appendChild(tr)
    })
    document.getElementById("loading"+count).hidden = true
}