let boldSwitch = 0
let overlayActivity = false
let italicSwitch = 0
let underlineSwitch = 0
let strikeThroughSwitch = 0
let colorArray = []
let columns = 7
let rows = 3
let colorProperty  = 0
let imageSelect = 0
let accessGranted = false
let listVar
let userNames = ['admin', 'editor', 'user']
let passwords = ['159357', 'F2509', 'user123']
imageArray = [ "images/9.jpg", "images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg", "images/7.jpg", "images/8.jpg" ]
const colorAmount = columns*rows
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
function colorsGenerate(){
    for (let i = 0; i<colorAmount;i++) {
        let r = Math.round(randomNumber(0, 255))
        let g = Math.round(randomNumber(0, 255))
        let b = Math.round(randomNumber(0, 255))
        colorArray[i] = `rgb(${r}, ${g}, ${b})`
    }
}
function randColorsUpadte(){
    document.getElementById('randColors').innerHTML = ''
    if(imageSelect == 0){
        if (colorProperty == 1)  document.getElementById('randColors').innerHTML = '<h2>Choose text color:</h2>'
        else if (colorProperty == 2)document.getElementById('randColors').innerHTML = '<h2>Choose background color:</h2>'
        for (let i = 0; i<colorAmount;i++) {
            document.getElementById('randColors').innerHTML += `<button style="background-color: ${colorArray[i]}" id="randomColor${i}" class="random-color" onclick="changeColor('${colorArray[i]}')"></button>`
        }
        document.getElementById('randColors').innerHTML += `<button onclick="colorsGenerate(); randColorsUpadte(${colorProperty})" class="color-update">Update colors</button>`
    }
    else if (imageSelect == 1){
        let width = (parseInt(getComputedStyle(document.getElementById('randColors')).width)-40)/3-20
        console.log(width);
        document.getElementById('randColors').innerHTML = '<h2>Choose background image:</h2>'
        for (let i = 0; i<imageArray.length;i++){
            document.getElementById('randColors').innerHTML += `<div style="background-image: url('${imageArray[i]}'); width: ${width}px" id="imageButton${i}" class="image-button" onclick="changeBgImage(${i})"></div>`
        }
    }
    else if(imageSelect == 2){
        document.getElementById('randColors').innerHTML = '<input type="file" class="choose-file" accept="image/png, image/jpeg" id="fileSelect">'
        document.getElementById('randColors').innerHTML += `<button onclick="startPos(); changeImage()" class="color-update">Change background</button>`
    }
}
function changeImage(){
    let filename = document.getElementById('fileSelect').value;
    document.getElementById('textArea').style.backgroundImage = `url("${filename}")`
}
function colorAreaGenerate(property){
    document.getElementById('randColors').innerHTML = ''
    if(property == 2){
        document.getElementById('selectHighlight').style.display = 'flex'
    }
    else document.getElementById('selectHighlight').style.display = 'none'
    randColorsUpadte(property)
    let areaWidth = parseInt(((parseInt(getComputedStyle(document.getElementById('randomColor0')).width)*(colorAmount/rows)) +
        parseInt(getComputedStyle(document.getElementById('randomColor0')).margin)*2*(colorAmount/rows)))+30
    document.getElementById('styleArea').style.width = areaWidth+'px'
    document.getElementById('styleArea').style.marginLeft = areaWidth/(-2)+'px'
}
function startPos(){
    document.getElementById('styleArea').style.top = (parseInt(getComputedStyle(document.getElementById('styleArea')).height) * (-1) -50)+'px'
    document.getElementById('overlay').style.visibility = 'hidden'
    document.getElementById('overlay').style.opacity = '0'
    document.getElementById('loginForm').style.top = '-350px'
    document.getElementById('tableArea').style.top = '-720px'
    document.getElementById('listArea').style.top = '-320px'
    imageSelect = 0
    moveSelect('25px')
}
document.getElementById('alignLeft').style.boxShadow = 'inset 0 0 5px #000000'
document.getElementById('alignLeft').style.pointerEvents = 'none'
function hideDropDowns(){
    let fontFamily = document.getElementById('fontFamilyChange')
    let fontFamilyStatus = getComputedStyle(fontFamily).visibility
    let fontSize = document.getElementById('fontSizeChange')
    let fontSizeStatus = getComputedStyle(fontSize).visibility
    if(fontFamilyStatus == 'visible') fontFamily.style.visibility = 'hidden'
    if(fontSizeStatus == 'visible') fontSize.style.visibility = 'hidden'
}
function dropDownFontChange(){
    setTimeout(function (){
        document.getElementById('fontFamilyChange').style.visibility = 'visible'
    }, 10)

}
function changeFont(event){
    document.getElementById('textArea').style.fontFamily = event.target.innerText
}
function dropDownFontSizeChange(){
    setTimeout(function (){
        document.getElementById('fontSizeChange').style.visibility = 'visible'
    }, 10)

}
function changeFontSize(event){
    document.getElementById('textArea').style.fontSize = event.target.innerText
}
function activated(event){
    if (event.target.style.boxShadow == 'rgb(0, 0, 0) 0px 0px 5px inset') event.target.style.boxShadow = 'none'
    else event.target.style.boxShadow = 'inset 0 0 5px #000000'
}
function boldText(){
    if(boldSwitch == 0){
        document.getElementById('textArea').style.fontWeight = '600'
        boldSwitch = 1
    }
    else{
        document.getElementById('textArea').style.fontWeight = '400'
        boldSwitch = 0
    }

}
function italicText(){
    if(italicSwitch == 0){
        document.getElementById('textArea').style.fontStyle = 'italic'
        italicSwitch = 1
    }
    else{
        document.getElementById('textArea').style.fontStyle = 'normal'
        italicSwitch = 0
    }

}
function underlineText(){
    if(underlineSwitch == 0) underlineSwitch = 1
    else{
        document.getElementById('textArea').style.textDecoration = 'none'
        underlineSwitch = 0
    }
    underStrike()
}
function strikethroughText(){
    if(strikeThroughSwitch == 0) strikeThroughSwitch = 1
    else{
        document.getElementById('textArea').style.textDecoration = 'none'
        strikeThroughSwitch = 0
    }
    underStrike()
}
function underStrike(){
    if ((underlineSwitch == 1) && (strikeThroughSwitch == 1)) document.getElementById('textArea').style.textDecoration = 'line-through underline'
    else if((underlineSwitch == 0) && (strikeThroughSwitch == 1)) document.getElementById('textArea').style.textDecoration = 'line-through'
    else if((underlineSwitch == 1) && (strikeThroughSwitch == 0)) document.getElementById('textArea').style.textDecoration = 'underline'
}
function alignTextLeft(){
    document.getElementById('alignLeft').style.pointerEvents = 'none'
    document.getElementById('alignCenter').style.pointerEvents = 'all'
    document.getElementById('alignRight').style.pointerEvents = 'all'
    document.getElementById('alignCenter').style.boxShadow = 'none'
    document.getElementById('alignRight').style.boxShadow = 'none'
    document.getElementById('textArea').style.textAlign = 'left'
}
function alignTextCenter(){
    document.getElementById('alignLeft').style.pointerEvents = 'all'
    document.getElementById('alignCenter').style.pointerEvents = 'none'
    document.getElementById('alignRight').style.pointerEvents = 'all'
    document.getElementById('alignRight').style.boxShadow = 'none'
    document.getElementById('alignLeft').style.boxShadow = 'none'
    document.getElementById('textArea').style.textAlign = 'center'
}
function alignTextRight(){
    document.getElementById('alignLeft').style.pointerEvents = 'all'
    document.getElementById('alignCenter').style.pointerEvents = 'all'
    document.getElementById('alignRight').style.pointerEvents = 'none'
    document.getElementById('alignCenter').style.boxShadow = 'none'
    document.getElementById('alignLeft').style.boxShadow = 'none'
    document.getElementById('textArea').style.textAlign = 'right'
}
function openColors(property){
    document.getElementById('styleArea').style.transition = '.5s top'
    document.getElementById('styleArea').style.top = '50px'
    callOverlay()
    if (property == 1){
        colorProperty = 1
    }
    else colorProperty = 2
    colorAreaGenerate(property)
}
function changeColor(color){
    if (colorProperty == 1)  document.getElementById('textArea').style.color = color
    else if (colorProperty == 2){
        document.getElementById('body').style.backgroundImage = 'none'
        document.getElementById('body').style.backgroundColor = color
    }
    startPos()
}
function moveSelect(target){
    document.getElementById('selectedHighlight').style.left = target
}
function changeSelectValue(val){
    imageSelect = val
    randColorsUpadte()
}
function changeBgImage(num){
    document.getElementById('body').style.backgroundColor = 'none'
    document.getElementById('body').style.backgroundImage = `url("${imageArray[num]}")`
    startPos()
}
function loginForm(){
    document.getElementById('loginForm').style.top = '50px'
    callOverlay()
}
function login(){
    let login = document.getElementById('loginInput')
    let password = document.getElementById('passwordInput')
    for (let i = 0; i<userNames.length;i++){
        if (login.value == userNames[i] && password.value == passwords[i]){
            accessGranted = true
            startPos()
            login.value = ''
            password.value = ''
            break
        }
    }
}
function callOverlay(){
    if (overlayActivity) {
        startPos()
        overlayActivity = false
    }
    else {
        document.getElementById('overlay').style.visibility = 'visible'
        document.getElementById('overlay').style.opacity = '100%'
        overlayActivity = true
    }
}
function editorAccess(){
    if(accessGranted){
        let temp = document.getElementById('textArea').innerHTML
        document.getElementById('textArea').innerHTML = ''
        document.getElementById('textArea').innerHTML = `<textarea id="textAreaEdit">${temp}</textarea>`
        document.getElementById('altHeader').style.visibility = 'visible'
    }
    else alert("You dont't have roots!")
}
function saveEdit(){
    console.log(document.getElementById('textAreaEdit').value);
    document.getElementById('textArea').innerHTML = document.getElementById('textAreaEdit').value
    document.getElementById('altHeader').style.visibility = 'hidden'
}
function addTable(){
    document.getElementById('tableArea').style.top = '50px'
    callOverlay()
}
function createTable(){
    let tr = document.getElementById('TR').value
    let td = document.getElementById('TD').value
    let tdw = document.getElementById('TDwidth').value
    let tdh = document.getElementById('TDheight').value
    let bw = document.getElementById('borderWidth').value
    let bt = document.getElementById('borderType').value
    let bc = document.getElementById('borderColor').value
    let res = document.getElementById('textAreaEdit').value
    console.log(res);
    res += `<table id="createdTable" style="border: ${bw}px ${bt} ${bc};border-collapse: collapse">\n`
    for (let i=0;i<tr;i++){
        res+='<tr>\n'
        for (let j=0; j<td;j++){
            res+=`<td width="${tdw}px" height="${tdh}px" style="border: ${bw}px ${bt} ${bc};text-align: center">TD</td>\n`
        }
        res+='</tr>\n'
    }
    res+='</table>'
    document.getElementById('textAreaEdit').value = res
    startPos()
}
function addList(variable){
    listVar = variable
    document.getElementById('listArea').style.top = '50px'

    if (variable == 'o')  {
        document.getElementById('listCreateTitle').innerText = 'Create OL'
        document.getElementById('markType').innerHTML=
            '            <option value="none">None</option>\n' +
            '            <option value="decimal">Decimal</option>\n' +
            '            <option value="armenian">Armenian</option>\n' +
            '            <option value="upper-roman">Roman</option>'
    }
    else  {
        document.getElementById('listCreateTitle').innerText = 'Create UL'
        document.getElementById('markType').innerHTML=
            '            <option value="none">None</option>\n' +
            '            <option value="disc">Disc</option>\n' +
            '            <option value="circle">Circle</option>\n' +
            '            <option value="square">Square</option>'
    }
    callOverlay()
}
function createList(){
    let liCount = document.getElementById('liCount').value
    let markType = document.getElementById('markType').value
    let res = document.getElementById('textAreaEdit').value
    res += `<${listVar}l style="list-style-type: ${markType}">\n`
    for (let i=0;i<liCount;i++){
        res+='<li>Lorem ipsum dolor sit amet.</li>\n'
    }
    res += `</${listVar}l>`
    document.getElementById('textAreaEdit').value = res
    startPos()
}