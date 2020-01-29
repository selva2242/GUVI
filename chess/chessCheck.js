let chessLength = 8
var arr = new Array(chessLength)
for(let i=0;i<chessLength;i++){
    arr[i] = new Array(chessLength)
    for(let j=0;j<chessLength;j++){
        arr[i][j] = 0
    }
}
console.log(arr)
placeElement(4,5)
placeElement(7,8)

function placeElement(row, column){
    arr[row][column] = 1
}

placeElementCheck(4,5)

function placeElementCheck(row, column){
    arr[row][column] = 1
    checkHorizontal(row, column)
    checkvertical(row, column)
}

function checkvertical(row, column){
    for(let i=row-1;i>=0;i++){
        if(arr[i][column]!=1){
            arr[i][column] = "possible"
        }
        else{
            break;
        }
    }
    for(let j= row+1;j<chessLength;j++){
        if(arr[j][column]!=1){
            arr[j][column] = "possible"
        }
        else{
            break;
        }
    }
}

function checkHorizontal(row, column){
    for(let i=column-1;i>=0;i++){
        if(arr[row][i]!=1){
            arr[row][i] = "possible"
        }
        else{
            break;
        }
    }
    for(let j= column+1;j<chessLength;j++){
        if(arr[row][j]!=1){
            arr[row][j] = "possible"
        }
        else{
            break;
        }
    }
}



