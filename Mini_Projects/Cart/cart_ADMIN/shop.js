//create new product
button = document.createElement('button')
button.innerHTML = "Create New Product"
button.id = "btn"
mainDiv = document.createElement('div')
mainDiv.id = "mainDiv"
button.setAttribute('onclick', "createProduct('"+mainDiv.id+"','"+button.id+"')")
document.body.appendChild(button)
document.body.appendChild(mainDiv)


//result json
json = []


//creating product function
function createProduct(divId, buttonId){
    document.getElementById(divId).innerHTML = ""
    document.getElementById(buttonId).disabled = true
    let form = document.createElement('form')
    let br = document.createElement('br')
    let  product = document.createTextNode("Product: ");
    let productInput = document.createElement('input')
    productInput.type = "Text"
    productInput.id = "product"
    form.appendChild(product)
    br = document.createElement('br')
    form.appendChild(br)
    form.appendChild(productInput)
    br = document.createElement('br')
    form.appendChild(br)
    let  BasePrice = document.createTextNode("BasePrice: ");
    bpriceInput = document.createElement('input')
    bpriceInput.type = "Text"
    bpriceInput.id = "BasePrice"
    form.appendChild(BasePrice)
    br = document.createElement('br')
    form.appendChild(br)
    form.appendChild(bpriceInput)
    br = document.createElement('br')
    form.appendChild(br)
    let  variant = document.createTextNode("variant: ");
    input = document.createElement('input')
    input.type = "Text"
    input.id = "variant"
    form.appendChild(variant)
    br = document.createElement('br')
    form.appendChild(br)
    form.appendChild(input)
    let button = document.createElement('button')
    button.type = "button"
    button.innerHTML = "Variant options"
    button.id = "VariantOptions"
    button.setAttribute('onclick', "createOptions('"+input.id+"','"+button.id+"', '"+productInput.id+"', '"+bpriceInput.id+"', '"+buttonId+"')")
    form.appendChild(button)
    br = document.createElement('br')
    form.appendChild(br)
    mainDiv.appendChild(form)  
}



//creating options based on variant
function createOptions(optionsId, buttonId, productId, bpriceId, productButtonId){

    // json object for product
    productDetails = {}
    productDetails.productId = document.getElementById(productId).value
    productDetails.bpriceId = document.getElementById(bpriceId).value
    productDetails.variant = []
    productDetails.variantDetails = []
    json.push(productDetails)
    form1 = document.createElement('form')

    br = document.createElement('br')
    let options = (document.getElementById(optionsId).value).split(",")
    if(options!=""){
        options.forEach(element => {
            if(element!=""){
                let  t = document.createTextNode(element);
                let input = document.createElement('input')
                input.id = element
                input.type = "Text"
                let br = document.createElement('br')
                form1.appendChild(t)
                form1.appendChild(br)
                form1.appendChild(input)
                br = document.createElement('br')
                form1.appendChild(br)
            }
         });
         let br = document.createElement('br')
         let button = document.createElement('button')
         button.type = "button"
         button.innerHTML = "Generate all posibilites"
         button.id = "generatePossibility"
         button.setAttribute('onclick', "generateOptions('"+options+"', '"+button.id+"', '"+productButtonId+"')")
         form1.appendChild(button)
         mainDiv.appendChild(form1)
         document.getElementById(optionsId).disabled = true
         document.getElementById(buttonId).disabled = true
    }
    else{
        alert("please enter value")
    }
   
}

// generating all posibilities

function generateOptions(options, buttonId, productButtonId){
    let variants = []
    let possibilites
    options = options.split(",")
    options.forEach(element=>{
        variants.push((document.getElementById(element).value).split(",")) 
        possibilites = [[]]
    for(let i=variants.length-1;i>=0;i--){
       result = []
       let currentvariant = variants[i]
       for(let j=0;j<possibilites.length;j++){
           for(let k=0;k<currentvariant.length;k++){
              result.push(currentvariant[k]+" "+(possibilites[j]))

           }
       }
       possibilites = result
    }
    form2 = document.createElement('form')
    possibilites.forEach(element=>{
        let text = document.createTextNode("type :")
        let input = document.createElement('input')
        input.value = element
        input.size = '10'
        let br = document.createElement('br')
        input.type = "Text"
        form2.appendChild(text)
        form2.appendChild(input)
        let cost = document.createTextNode(" AddOnPrice: ")
        input = document.createElement('input')
        input.size = '10'
        input.id = element
        form2.appendChild(cost)
        form2.appendChild(input)
        form2.appendChild(br)
    })
    })
    
    let button = document.createElement('button')
    button.type = 'button'
    button.innerHTML = 'Generate JSON'
    button.id = 'generate'
    console.log(possibilites)
    button.setAttribute('onclick', "generateJson('"+options+"','"+possibilites+"', '"+button.id+"', '"+productButtonId+"')")
    br = document.createElement('br')
    form2.appendChild(br)
    form2.appendChild(button)
    mainDiv.appendChild(form2)
    document.getElementById(buttonId).disabled = true
    document.body.appendChild(mainDiv)
}

function generateJson(varients,combinations, buttonId, productButtonId){
    console.log("coming")
    varients = varients.split(",")
    combinations = combinations.split(",")
    combinations.forEach(element=>{
        let temp = {}
        val = element.split(" ")
        for(let i=0;i<varients.length;i++){
            temp[varients[i]] = val[i]
        }
        if(document.getElementById(element).value!="")
        temp.addOnPrice = document.getElementById(element).value
        else
        temp.addOnPrice = 0
        json[json.length-1].variantDetails.push(temp)
    })
    document.getElementById(buttonId).disabled = true
    document.getElementById(productButtonId).disabled = false
    console.log(json)
}

