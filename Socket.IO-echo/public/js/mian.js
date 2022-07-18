const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            socket: io('http://localhost:3000'),
            msgInput: '',
            messages: [
                {
                    userOrBot: 'bot',
                    text: 'Lorem',
                },
                {
                    userOrBot: 'user',
                    text: 'OMG',
                }
            ]
        }
    },
    methods: {
        sendMsg: function () {
            this.messages.push({
                userOrBot: 'user',
                text: this.msgInput
            })
            this.socket.emit('clientToServer', this.msgInput)
        }
    },
    mounted() {
        this.socket.on('serverToClient', (data) => {
            this.messages.push({
                userOrBot: 'bot',
                text: data
            })
            console.log(data);
        })
    }
}).mount('#app')