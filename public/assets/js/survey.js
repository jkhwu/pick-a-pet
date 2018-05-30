// $(document).ready(() => {

//     $("#submit").on("click", function(event) {
//         // event.preventDefault();

//         function getAnswers() {
//             return {
//                 a1: $('input[name=1]:checked').val(),
//                 a2: $('input[name=2]:checked').val(),
//                 a3: $('input[name=3]:checked').val(),
//                 a4: $('input[name=4]:checked').val(),
//                 a5: $('input[name=5]:checked').val(),
//                 a6: $('input[name=6]:checked').val(),
//                 a7: $('input[name=7]:checked').val(),
//                 a8: $('input[name=8]:checked').val(),
//                 a9: $('input[name=9]:checked').val(),
//                 a10: $('input[name=10]:checked').val(),
//                 zip: Number($('.zip').val())
//             }
//         }

//         function validateForm() {
//             var isValid = true;
//             for (let i = 1; i <= 10; i++) {
//                 if (!$(`input[name=${i}]:checked`).val()) {
//                     isValid = false;
//                 }
//             }
//             if (!$('.zip').val()) {
//                 isValid = false;
//             }
//             return isValid;
//         }

//         if (validateForm()) {
//             var userInput = getAnswers();
//             console.log(userInput);
//             $.post('/results', userInput, function(data) {
//                 // console.log(data);
//             });
//         } else {
//             alert("Please answer all questions!");
//         }
//     });
// });