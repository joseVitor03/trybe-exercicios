window.onload = () => {
    const setBackgroundColor = (color) => {
       let content = document.querySelector('.content');
        content.style.backgroundColor = color
        localStorage.setItem('background', color);
    }


    const setFontColor = (color) => {
        const paragraph = document.querySelector('.paragraph');
        paragraph.style.color = color
        console.log(paragraph);
        localStorage.setItem('color', color);
    }




    const setFontSize = (size) => {
        const font = document.querySelector('.paragraph');
        font.style.fontSize = size;
        localStorage.setItem('font', size);
    }



    const lineHeight = (height) => {
        const line = document.querySelector('.paragraph')
        line.style.lineHeight = height 
        localStorage.setItem('line', height);
    }




    const fontFamily = (family) => {
        const typeFamily = document.querySelector('.paragraph')
        typeFamily.style.fontFamily = family;
        localStorage.setItem('typeFamily', family);
    }




let backgroundColorButton = document.querySelectorAll('#background-color>button');
    for (let index = 0; index < backgroundColorButton.length; index += 1) {
        backgroundColorButton[index].addEventListener('click', (event) => {
            setBackgroundColor(event.target.innerText);
        })
    }


let colorFont = document.querySelectorAll('#font-color>button')
    for (let index = 0; index < colorFont.length; index += 1) {
        colorFont[index].addEventListener('click', (event) => {
            setFontColor(event.target.innerText)
        })
        
    }


let fontSize = document.querySelectorAll('#font-size>button')
    for (let index = 0; index < fontSize.length; index +=1) {
        fontSize[index].addEventListener('click', (event) => {
            setFontSize(event.target.innerText);
        })
        
    }



let heightLine = document.querySelectorAll('#line-height>button');
    for (let index = 0; index < heightLine.length; index += 1) {
        heightLine[index].addEventListener('click', (event) => {
            lineHeight(event.target.innerText);
        })
        
    }


let familyFont = document.querySelectorAll('#font-family>button');
    for (let index = 0; index < familyFont.length; index += 1) {
        familyFont[index].addEventListener('click', (event) => {
            fontFamily(event.target.innerText)
        })
    }


const initial = () => {
    let backgroundColor = localStorage.getItem('background');
     if(backgroundColor) setBackgroundColor(backgroundColor);

   let fontcolor = localStorage.getItem('color')
   if(fontcolor) setFontColor(fontcolor)

   let size = localStorage.getItem('font')
   if(size) setFontSize(size)

   let line = localStorage.getItem('line')
   if(line) lineHeight(line)

   let family = localStorage.getItem('typeFamily')
   if(family) fontFamily(family)
}
  
initial()
}