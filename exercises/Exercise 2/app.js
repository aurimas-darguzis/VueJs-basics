new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            alert: function() {
                alert('hello!');
            },
            storeValue: function(e) {
                this.value = e.target.value;
            }
        }
    });