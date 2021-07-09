const modal_content = [
    {
        id: 0,
        title: 'Rust',
        gallery: ['http://kitekat.pw/img/2.png'],
        information: 
        [
            {
                name: 'pSilent',
                check: true,
            },
             {
                name: 'SilentMelee',
                check: true,
            },
            {
                name: 'ESP',
                check: true,
            },
        ]
    },
    {
        id: 1,
        title: 'Rust',
        gallery: ['http://kitekat.pw/img/2.png'],
        information: 
        [
           {
                name: 'pSilent',
                check: true,
            },
             {
                name: 'SilentMelee',
                check: true,
            },
            {
                name: 'ESP',
                check: true,
            },
        ]
    },
    {
        id: 2,
        title: 'Rust',
        gallery: ['http://kitekat.pw/img/2.png'],
        information: 
        [
           {
                name: 'pSilent',
                check: true,
            },
             {
                name: 'SilentMelee',
                check: true,
            },
            {
                name: 'ESP',
                check: true,
            },
        ]
    }
];

const vue = new Vue({
    el: '#app',
    data: {
        modal: [],
    },

    methods: {
        showModal: function (id) {
            $('.modal').fadeIn();

            this.modal.push(modal_content[id]);
            this.modal = this.modal[0];

            setTimeout(function () {
                $('.gallery').not('.slick-initialized').slick({
                    dots: true,
                    infinite: true,
                    slidesToShow: 1,
                }).magnificPopup({
                    delegate: 'a', // the selector for gallery item
                    type: 'image',
                    gallery: {
                        enabled: true
                    }
                });
            }, 100);
        },

        closeModal: function () {
            $('.modal').fadeOut(0);
            $('.gallery').empty().removeClass('slick-initialized slick-slider slick-dotted');
            vue.modal = [];
        }
    }
});