$(document).ready(function () {
    $('.buy').click(function (e) {
        e.preventDefault();
        let id = $(this).data('id');

        $.ajax({
            type: "POST",
            url: '/buy.php',
            data: {
                id: id,
            },

            success: function (res) {
                console.log(res);
                if(res.status && res.pay_link) {
                    location.href = res.pay_link;
                } else {
                    alert('Ошибка! Свяжитесь с администратором');
                }
            }
        });
    });
});