var app = new Vue({
    el: "#app",
    data() {
        return {
            newtodo: "",
            todolist: []
        };
    },
    methods: {
        addTodo: function () {
            if (this.newtodo != "" && this.newtodo != null) {
                this.todolist.push(this.newtodo);
                this.newtodo = "";
            }
        },
        removetodo: function (index) {
            this.todolist.splice(index, 1)
        }
    }
})