// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.
const fromEL = document.body.querySelector("#from");
const spanEL = document.body.querySelector("span");

fromEL.addEventListener("input", (event) => {
    spanEL.textContent = event.target.value;
});

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

const messageBtnEL = document.body.querySelector('.messageBtn');
messageBtnEL.addEventListener('click', function (e) {
    messageBtnEL.classList.add("animate_animated", "animate_fadeInLeftBig");
    messageBtnEL.style.visibility = 'visible';
});

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

const formEL = document.body.querySelector("form");
const formInputsEL = document.body.querySelectorAll('form .form-control');
const buttonEL = document.body.querySelectorAll('form button');


function checkSubmit(event) {
    let error = false;
    formInputsEL.forEach(element => {
        if (element.value == "") {
            element.classList.add('error')
            
            event.preventDefault();
            console.log(event.cancelable);
            error = true;
        }
    });
    if (error == false) { formEL.submit(); }
}

formEL.addEventListener("submit", checkSubmit);

formInputsEL.forEach(element => {
    element.addEventListener('input', function (e) {
        e.target.classList.remove('error');
    });
});


