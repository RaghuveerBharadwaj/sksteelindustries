document.querySelector('#about').classList.add("hide")
document.querySelector('#portfolio').classList.add("hide")
document.querySelector('#services').classList.add("hide")
document.querySelector('#team').classList.add("hide")
document.querySelector('#skills').classList.add("hide")
document.querySelector('#facts').classList.add("hide")
document.querySelector('#clients').classList.add("hide")
document.querySelector('#testimonials').classList.add("hide")
$(document).ready(function(){
  $(this).scrollTop(0);
})
hideProd = (val) => {
  document.querySelector('#about').classList.add("hide")
  document.querySelector('#portfolio').classList.add("hide")
  document.querySelector('#services').classList.add("hide")
  document.querySelector('#team').classList.add("hide")
  document.querySelector('#skills').classList.add("hide")
  document.querySelector('#facts').classList.add("hide")
  document.querySelector('#clients').classList.add("hide")
  document.querySelector('#testimonials').classList.add("hide")
  document.querySelector('#contact').classList.add("hide")

  document.querySelector(val).classList.remove("hide")

  if(val === '#services') {
    document.querySelector('#skills').classList.remove("hide")
    document.querySelector('#facts').classList.remove("hide")
    document.querySelector('#clients').classList.remove("hide")
  }
  window.location.assign(val)
}

