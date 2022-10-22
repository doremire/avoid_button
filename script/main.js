const button_mouse = document.getElementById('but');
let mouse_hover_px = 0;

let mouse_hover_count = 0;

const input_email = document.getElementById('email');
input_email.addEventListener('keyup', function () {

    console.log(input_email.value);

});
const input_password = document.getElementById('password');
input_password.addEventListener('keyup', function () {


    console.log(input_password.value);
});


button_mouse.addEventListener('mouseover', function () {
if (input_email.value == '' || input_password.value == '') {


        if (mouse_hover_count % 2 == 0) {
            button_mouse.style.marginRight = null;

            // button_mouse.style.marginLeft = `${mouse_hover_px = mouse_hover_px +100}px`;


            button_mouse.style.marginLeft = '128px';

            mouse_hover_count++
            console.log(mouse_hover_count);

        } else {
            button_mouse.style.marginLeft = null;



            mouse_hover_count++
            console.log(mouse_hover_count);
        }

    } else {
        button_mouse.style.marginRight = null
        button_mouse.style.backgroundColor = '#49c5b6';
    }
});