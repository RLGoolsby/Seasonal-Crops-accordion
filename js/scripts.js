$('.toggle').click(function() {
    var $this = $(this);

    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
        $(this).children().toggleClass("ui-icon-caret-1-e ui-icon-caret-1-e");

    } else {
        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().parent().find('li .inner').slideUp(350);
        $(".toggle i").attr("class", "ui-icon-caret-1-e");
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
        $(this).children().toggleClass("ui-icon-caret-1-e ui-icon-caret-1-e");

    }
});
