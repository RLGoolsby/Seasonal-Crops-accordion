$('.toggle').click(function() {


    var $this = $(this);

    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().parent().find('li .inner').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});

var tada = document.getElementsByClassName("toggle");

for(var i = 0; i < tada.length; i++){
   tada[i].addEventListener("click", function(){
    this.nextElementSibling.classList.toggle("visible");
    this.firstElementChild.classList.toggle("hide-right-caret");
    this.lastElementChild.classList.toggle("show-down-caret");
  });
}
