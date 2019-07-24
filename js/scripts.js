$('.toggle').click(function() {

    var $this = $(this);

    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
        $(this).children().toggleClass("fas fa-plus fas fa-minus");

    } else {
        $this.parent().find('li .inner').removeClass('show');
        $this.parent().find('li .inner').slideUp(350);
        $("i").attr("class", "fas fa-minus");
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
        $(this).children().toggleClass("fas fa-minus fas fa-plus");

    }
});
