var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello!',
        name: 'Bao',
        number: 123,
        Boolean: true,
        Array: ['A', 'B'],
        Object: {
            obj1: '1',
            obj2: '2'
        }
    },
    methods: {
        replaceFunction: function(){
            this.message = "Good",
            this.name = "SomeBody"
        },
        resetFunction: function(){
            this.message = "Hello!",
            this.name = "Bao"
        },
    }
})