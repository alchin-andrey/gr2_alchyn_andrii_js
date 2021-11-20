/* 
Задача 10
С помощью метода fetch получить масcив данных по Google Api Calendar или {JSON} Placeholder Fake Api
и вывести его на страницу с версткой в виде блоков.
Каждый блок должен содержать стилизованный текст, картинку (статичную по умолчанию, или рандомную, или по ссылке из данных) 
и 2 кнопки с такими действиями: alert([любая инфа по этому объекту]) и удаление блока со страницы.
Генерацию блоков обертнуть в асинхронную функцию, добавление блоков в дерево сделать синхронной функцией.
*/


$(document).ready(function(){

    $('div').remove();
    document.body.style.cssText = '';

    async function receive_request(){
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await response.json()
        data.forEach((users) => {
        document.body.insertAdjacentHTML('beforeEnd',  `
            <div class="item">
                <div class="close"><span>Х</span></div>
                <div><img src="./img/unnamed.jpg"></div>
                <div class="text"><span>Id: </span>${users.id}</div>
                <div class="text"><span>Name:</span> ${users.name}</div>
                <div class="text"><span>Username:</span> ${users.username}</div>
                <div class="text"><span>Website:</span> ${users.website}</div>
                <div class="btm" id ="${users.phone}"><span>Phone number</span></div>
            </div>
            `)
        });
    }

    function  get_phone_number (element) {
        console.log(element)
        for(let i = 0;i < element.length;i++){
            console.log(element[i].id)
            element[i].onclick = function (event) {
                console.log(element[i].id)
                alert(`Phone number: ${element[i].id}`);
            }
        }
    }

    function  close (element) {
        for(let i = 0;i < element.length;i++){
            element[i].onclick = function (event) {
                let block = this.parentNode;
                block.style.opacity = 1;
                let block_opacity = setInterval(function() {
                    if (block.style.opacity > 0) {
                        block.style.opacity -= 0.1;
                    } else {
                        clearInterval(block_opacity);
                        block.remove();
                        console.log(document.getElementsByClassName('btm'));
                        return document.getElementsByClassName('btm');
                    }
                }, 60)
            }
        }
    }

    function go(){
        let user_phone_btm = document.getElementsByClassName('btm');
        let close_button = document.getElementsByClassName('close');
        close (close_button);
        get_phone_number (user_phone_btm);
    }
    receive_request().then(go);
});









// function  close (element) {
    //     console.log (element);
    //     for(let i = 0;i < element.length;i++){
    //         console.log (element[i], element[i].getElementsByClassName('close'));
    //         element[i].onclick = function (event) {
    //             this.parentNode.parentNode.removeChild(this.parentNode);
    //         }
    //     }
    // }


