$(document).ready(function () {
    let myform = document.forms.main;
    let field = null;

    function checkMessageField() {
        field = document.getElementById("msg");
        return field.value.length < 200;
    }

    function checkNameField() {
        field = document.getElementById("name");
        return field.value.length > 2;
    }

    myform.onsubmit = function (event) {
        let labels = document.getElementsByTagName("label");
        for (let i = 0; i < labels.length; i++) {
            labels[i].style.color = "";
        }

        try {
            if (!checkNameField()) {
                throw "Поле имя меньше 2 символов!";
            }

            if (!checkMessageField()) {
                throw "Поле сообщение больше 200 символов!";
            }
        } catch (error) {
            event.preventDefault();
            console.error(error, field);
            field.focus();
            label = document.getElementById(field.getAttribute("id") + "Label");
            label.style.color = "red";
        }
    };
});
