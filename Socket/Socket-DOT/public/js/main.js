const { createApp } = Vue

createApp({
    data() {
        return {
            connectBtn: "Connect"
        }
    },
    methods: {
        connectOrDisconect() {
            if (this.socket == undefined) {
                this.socket = io('http://localhost:3000');
                this.connectBtn = "Disconnect"
            } else {
                this.socket.disconnect();
                this.connectBtn = "Connect"
            }
        }
    },
    mounted() {
        document.querySelector('div#app').addEventListener('click', (e) => {
            this.socket.emit('moveDot', {
                x: e.clientX,
                y: e.clientY
            })
            this.socket.on('syncDot', (pos) => {
                var dot = document.querySelector('div#dot');
                dot.style.marginLeft = (pos.x - 10) + 'px';
                dot.style.marginTop = (pos.y - 10) + 'px';
            })
        })
    }
}).mount('#app')
