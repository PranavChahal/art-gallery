$(document).ready(function() {
    $('.item').hover(
    function() {
    $(this).find('h3').animate({bottom: '0'}, 200);
    },
    function() {
    $(this).find('h3').animate({bottom: '-50px'}, 200);
    }
    );
    $('.contact button').hover(
        function() {
            $(this).css('background-color', '#444');
        },
        function() {
            $(this).css('background-color', '#333');
        }
    );
});
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  const xhr = new XMLHttpRequest();
  const url = "contact.php";
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
          alert('Message sent!');
          document.getElementById('contact-form').reset();
      }
  };
  xhr.send(`name=${name}&email=${email}&message=${message}`);
});
// Select all buttons with class "scrollToClass" and bind a click event to them
let buttons = document.querySelectorAll(".scrollToClass");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(event) {
    event.preventDefault(); // prevent the default action of clicking on a link
    let targetClass = this.getAttribute("data-target"); // get the target class from the "data-target" attribute
    let target = document.querySelector("." + targetClass); // find the target element with that class
    let targetOffset = target.offsetTop; // get the target element's offset from the top of the page
    window.scrollTo({
      top: targetOffset,
      behavior: "smooth" // animate the scroll behavior
    });
  });
}


    
    