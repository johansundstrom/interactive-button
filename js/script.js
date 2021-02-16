let state = false;
let sb = document.getElementById('state-block');
sb.innerText = state;

$('#btn').click(function(){
  $(this).toggleClass('active');
  sb.innerText = $(this).hasClass('active');
});

//function for on-click event
function oc() {
  // insert code here
}