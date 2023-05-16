

const item = document.getElementById('item');
const item2 = document.getElementById('item2');
const item3 = document.getElementById('item3');
const wrap = document.getElementById('wrap')
let x = 0;
let y = 0;

console.log(item2)
const body = document.querySelector('body')

body.addEventListener('keydown', (e) =>{
        if(e.key == 'a' && x == 0){
            x++;
            item2.style.transform = 'translate(-210px)';
            item2.style.width = '200px';
            item2.style.height = '300px';
            item3.style.transform = 'translate(-210px)';
            item3.style.width = '250px';
            item3.style.height = '350px';
            item.style.transform = 'translate(470px)';
            item.style.width = '200px';
            item.style.height = '300px';
            wrap.style.transition = '0.2s'
            console.log(x)
        } else{
        if(e.key == 'a' && x == 1){
            x++;
            item2.style.transform = 'translate(270px)';
            item2.style.width = '200px';
            item2.style.height = '300px';
            item3.style.transform = 'translate(-410px)';
            item3.style.width = '200px';
            item3.style.height = '300px';
            item.style.transform = 'translate(270px)';
            item.style.width = '250px';
            item.style.height = '350px';
            wrap.style.transition = '0.2s'
            console.log(x)
        } else {
            if(e.key == 'a' && x == 2){
                item.style.transform = 'translate(0)';
                item.style.width = '200px';
                item.style.height = '300px';
                item3.style.transform = 'translate(0)';
                item3.style.width = '200px';
                item3.style.height = '300px';
                item2.style.transform = 'translate(0)';
                item2.style.width = '250px';
                item2.style.height = '350px';
                wrap.style.transition = '0.2s'
                x = 0;
            }
        }
    }  

    if(e.key == 'd' && x == 0){
        x++;
        item2.style.transform = 'translate(-210px)';
        item2.style.width = '200px';
        item2.style.height = '300px';
        item3.style.transform = 'translate(-210px)';
        item3.style.width = '250px';
        item3.style.height = '350px';
        item.style.transform = 'translate(470px)';
        item.style.width = '200px';
        item.style.height = '300px';
        console.log(x)
    } else{
    if(e.key == 'd' && x == 1){
        item2.style.transform = 'translate(270px)';
        item2.style.width = '200px';
        item2.style.height = '300px';
        item3.style.transform = 'translate(-410px)';
        item3.style.width = '200px';
        item3.style.height = '300px';
        item.style.transform = 'translate(270px)';
        item.style.width = '250px';
        item.style.height = '350px';
        console.log(x)
        x++
    } else {
        if(e.key == 'd' && x == 2){
            item.style.transform = 'translate(0)';
            item.style.width = '200px';
            item.style.height = '300px';
            item3.style.transform = 'translate(0)';
            item3.style.width = '200px';
            item3.style.height = '300px';
            item2.style.transform = 'translate(0)';
            item2.style.width = '250px';
            item2.style.height = '350px';
            x = 0;
        }
    }
}  
    
        
})