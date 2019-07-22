$('.toggle').click(function() {

    var $this = $(this);

    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
        $(this).children().toggleClass("fa-angle-up fa-angle-down");

    } else {
        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().parent().find('li .inner').slideUp(350);
        $(".toggle i").attr("class", "fa fa-angle-down");
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
        $(this).children().toggleClass("fa-angle-up fa-angle-down");

    }
});
