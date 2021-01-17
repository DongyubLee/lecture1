// get reference to sliders

const x_slider = document.getElementById( 'x' )
const y_slider = document.getElementById( 'y' )

const min_slider = document.getElementById( 'minSize' )
const max_slider = document.getElementById( 'maxSize' )

// listen to slider events

function makeRows() {

  // remove existing table
  let table = document.getElementById( 'table' )

  if ( table ) {
    table.remove()
  }

  // create new table
  table = document.createElement( 'table' )
  table.id = 'table'
  document.body.appendChild( table )

  // get slider values
  const columns = x_slider.valueAsNumber
  const rows = y_slider.valueAsNumber
  
  const minSize = min_slider.valueAsNumber
  const maxSize = max_slider.valueAsNumber

  // update labels
  document.getElementById( 'x_label' ).innerHTML = 'X: ' + columns
  document.getElementById( 'y_label' ).innerHTML = 'Y: ' + rows
  
  document.getElementById( 'minSize_label' ).innerHTML = 'Min: ' + minSize
  document.getElementById( 'maxSize_label' ).innerHTML = 'Max: ' + maxSize

  // make table items
  var minSizeX = minSize
  var minSizeY = minSize
  var maxSizeX = maxSize
  var maxSizeY = maxSize

  var difSizeX = maxSizeX - minSizeX
  var difSizeY = maxSizeY - minSizeY

  var globalIndex = 0
  var globalTotal = rows * columns - 1

  for ( i = 0; i < rows; i ++ ) {

    // create a table row
    const row = document.createElement( 'tr' )
    table.appendChild( row )


    for ( j = 0; j < columns; j ++ ) {

      // create a table cell
      const cell = document.createElement( 'td' )
      //cell.innerText = i + ',' + j
      
      globalIndex = (i * columns) + j
      
      var newSizeX = minSizeX + (difSizeX * (globalIndex / globalTotal))
      var newSizeY = minSizeY + (difSizeY * (globalIndex / globalTotal))

      cell.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Black_hole_-_Messier_87_crop_max_res.jpg/1024px-Black_hole_-_Messier_87_crop_max_res.jpg" width=' + newSizeX + ' height='+ newSizeY + '>'

      // uncomment to generate a random background color for cell on mouseover
      // const color = Math.floor( Math.random() * 16777215 ).toString( 16 )

       //cell.addEventListener( 'mouseover', function () {
       //  cell.style.background = '#' + color
       //}, false )

      // cell.addEventListener( 'mouseout', function () {
      //   cell.style.background = 'white'
      // }, false )

      row.appendChild( cell )

    }
  }
}

// run once to initialise table
makeRows();