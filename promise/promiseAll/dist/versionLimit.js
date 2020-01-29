let cache = {}  
let length = 100
createPagination(length)
tablediv = document.createElement('div')
table = document.createElement('table')
table.id = "tableDiv"
tablediv.appendChild(table)
document.body.appendChild(tablediv)
function  createPagination(length){
    limit = length/5
    page = document.createElement('div')
    page.style.display = 'inline'
    for(let i=1;i<=limit;i++){
        button = document.createElement('button')
        button.id = i
        button.innerHTML=i
        button.setAttribute('onclick', 'createPage("'+button.id+'")')
        page.appendChild(button)
    }
    document.body.appendChild(page)
}

function createPage(page){
    if(cache.page==undefined){
        url = "https://5cdd0a92b22718001417c19d.mockapi.io/api/users?page="+page+"&limit=5"
        fetch(url).then((promise)=>{
            return promi    se.json()
        }).then((value)=>{
            createTable(value, true, page)
        })
    }
    else{

        createTable(cache[page], false, page)
    }
    
}

function createTable(data, pushIntoCache, page){
    if(pushIntoCache){
        cache[page] = data
    }

    document.getElementById("tableDiv").innerHTML=""
    data.forEach(element => {
        tr = document.createElement('tr')
        keys = Object.keys(element)
        keys.forEach((val)=>{
            td = document.createElement('td')
            td.innerHTML = element[val]
            tr.appendChild(td)
        });
        document.getElementById("tableDiv").appendChild(tr)
    });
}
