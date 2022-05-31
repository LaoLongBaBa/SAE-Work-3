var app = new Vue({
    el: '#app',
    data() {
        return {
            newItem: {
                name: '',
                calories: 0,
                fat: 0,
                carbs: 0,
                protein: 0
            },
            food: [
                {
                    name: 'Chips(100g)',
                    calories: '536',
                    carbs: '53',
                    fat: '35',
                    protein: '7'
                },
                {
                    name: 'Tomato(100g)',
                    calories: '76',
                    carbs: '17',
                    fat: '0.1',
                    protein: '2'
                },
                {
                    name: 'Pork(100g)',
                    calories: '242',
                    carbs: '0',
                    fat: '14',
                    protein: '27'
                }
            ]
        }
    },
    computed: {
        totols: function () {
            var totolsC = {
                calories: 0,
                carbs: 0,
                fat: 0,
                protein: 0
            }
            for (let i = 0; i < this.food.length; i++) {
                totolsC.calories += Number(this.food[i].calories);
                totolsC.carbs += Number(this.food[i].carbs);
                totolsC.fat += Number(this.food[i].fat);
                totolsC.protein += Number(this.food[i].protein);
            }

            return totolsC;
        }
    },
    methods: {
        addNewItem() {

            if (this.newItem.name == "") {
                alert('Name is empty')
                return
            }

            this.food.push({
                name: this.newItem.name,
                calories: Number(this.newItem.calories),
                fat: Number(this.newItem.fat),
                carbs: Number(this.newItem.carbs),
                protein: Number(this.newItem.protein)
            })

        },
        removeItem(itemIndex) {
            this.food.splice(itemIndex, 1);
        },
    }
})