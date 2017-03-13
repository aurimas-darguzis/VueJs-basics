new Vue({
    el: '#app',
    data: {
        title: 'The VueJS Instance',
        showParagraph: false
    },
    methods: {
        show: function () {
            this.showParagraph = true;
            this.udpateTitle('The VueJs Instance (Updated)')
        },
        updateTitle: function (title) {
            this.title = title;
        }
    }
})