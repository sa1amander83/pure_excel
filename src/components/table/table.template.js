const letterCode= {
  A: 65,
  Z: 90
}
function toCell() {
  return `
    <div class="cell" contenteditable="">
    </div>
    `
}
function toColumn(col) {
  return `
    <div class= "column">
    ${col}
    <div class="col-resize"></div>
    </div> 
    `
}


function createRow(index, content) {
  const resize = index ? '<div class="row-resize"></div>':''

  return `
    <div class="row">
    <div class="row-info">
${index ? index :''}
${resize}
 </div>
    <div class="row-resize"></div>
   
    <div class="row-data">${content}</div>
    </div>  
`
}

function toChar(_, index) {
  return String.fromCharCode(letterCode.A+index)
}

export function createTable(rowsCount=20) {
  const columnsCount = letterCode.Z- letterCode.A+1
  const rows =[]
  const cols= new Array(columnsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('')


  rows.push(createRow(null, cols))
  for (let i=0; i<rowsCount; i++) {
    const cells= new Array(columnsCount)
        .fill('')
        .map(toCell)
        .join('')
    rows.push(createRow(i+1, cells))
  }


  return rows.join('')
}
