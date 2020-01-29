url = "https://5cdd0a92b22718001417c19d.mockapi.io/api/users"
fetch(url).then((first)=>{
    let data = first.json()
    console.log(data)
    data.forEach(element => {
        tr = document.createElement('tr')
        td1 = document.createElement('td')
        td1.innerHTML = element.id
        td2 = document.createElement('td')
        td2.innerHTML = element.username
        td3 = document.createElement('td')
        td3.innerHTML = element.email
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        table1.appendChild(tr)

    });
    document.getElementById("dataTable1").appendChild(table1)
    document.getElementById("loading1").style.visibility = 'hidden'
    return fetch("https://5cdd0a92b22718001417c19d.mockapi.io/api/books")
}).then((second)=>{
    data = second.json()
    data.forEach(element => {
        console.log("coming")
        tr = document.createElement('tr')
        td1 = document.createElement('td')
        td1.innerHTML = element.id
        td2 = document.createElement('td')
        td2.innerHTML = element.name
        td3 = document.createElement('td')
        td3.innerHTML = element.cover
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        table2.appendChild(tr)

    });
    document.getElementById("dataTable2").appendChild(table2)
    document.getElementById("loading2").style.visibility = 'hidden'
})