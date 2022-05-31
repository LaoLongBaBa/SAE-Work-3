var app = new Vue({
    el: "#app",
    data: {
        display: {
            greeting: 'Hi',
            name: 'Bao'
        },
        A: ['Hi', 'Hello', 'Hey','HaHa'],
        B: ['Bao', 'Zhu', 'Sava','Harry','Veljko']
    },
    methods: {
        random: function () {
            this.display.greeting = this.A[Math.round(Math.random() * (this.A.length - 1))],
            this.display.name = this.B[Math.round(Math.random() * (this.B.length - 1))]
        }
    }
})