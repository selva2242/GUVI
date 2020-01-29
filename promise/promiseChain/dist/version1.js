
            table1 = document.createElement('table')
            url =   +"?page=1&&limit=5"
            fetch(url).then((promise)=>{
                return promise.json()
            }).then((data)=>{
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
            })
            document.getElementById("dataTable1").appendChild(table1)
            document.getElementById("loading1").style.visibility = 'hidden'


            table2 = document.createElement('table')
            url = "https://5cdd0a92b22718001417c19d.mockapi.io/api/books"+"?page=1&&limit=5"
            fetch(url).then((promise)=>{
                return promise.json()
            }).then((data)=>{
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
            })
            document.getElementById("dataTable2").appendChild(table2)
            document.getElementById("loading2").style.visibility = 'hidden'


            table3 = document.createElement('table')
            url = "https://5cdd0a92b22718001417c19d.mockapi.io/api/products"+"?page=1&&limit=5"
            fetch(url).then((promise)=>{
                return promise.json()
            }).then((data)=>{
                data.forEach(element => {
                    console.log("coming")
                    tr = document.createElement('tr')
                    td1 = document.createElement('td')
                    td1.innerHTML = element.id
                    td2 = document.createElement('td')
                    td2.innerHTML = element.productName
                    td3 = document.createElement('td')
                    td3.innerHTML = element.price
                    tr.appendChild(td1)
                    tr.appendChild(td2)
                    tr.appendChild(td3)
                    table3.appendChild(tr)

                });
            })
            document.getElementById("dataTable3").appendChild(table3)
            document.getElementById("loading3").style.visibility = 'hidden'


            table4 = document.createElement('table')
            url = "https://5cdd0a92b22718001417c19d.mockapi.io/api/doctors"+"?page=1&&limit=5"
            fetch(url).then((promise)=>{
                return promise.json()
            }).then((data)=>{
                data.forEach(element => {
                    console.log("coming")
                    tr = document.createElement('tr')
                    td1 = document.createElement('td')
                    td1.innerHTML = element.id
                    td2 = document.createElement('td')
                    td2.innerHTML = element.name
                    td3 = document.createElement('td')
                    td3.innerHTML = element.createdAt
                    tr.appendChild(td1)
                    tr.appendChild(td2)
                    tr.appendChild(td3)
                    table4.appendChild(tr)
                });
            })
            document.getElementById("dataTable4").appendChild(table4)
            document.getElementById("loading4").style.visibility = 'hidden'