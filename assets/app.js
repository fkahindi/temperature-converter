var data = {
    temperature: 0,
    degrees: 0,
    unit: '',
    selected: '',
    unitPicked: false,
    options: [
        { id: 1, name: 'Fahrenheit' },
        { id: 2, name: 'Celsius' },
        { id: 3, name: 'Kelvin' }
    ]
};
var app = new Vue({
    el: '#card',
    data: data,
    methods: {
        optionValue: function(event) {
            this.unitPicked = event.target.value;
        },
        convert: function(event) {
            switch (this.selected.id) {
                case 1:
                    this.unit = "F";
                    if (this.unitPicked == "c") {
                        this.temperature = Math.round((this.degrees * (9 / 5)) + 32);
                    } else {
                        this.temperature = this.degrees;
                    }
                    break;
                case 2:
                    this.unit = "C"
                    if (this.unitPicked == "f") {
                        this.temperature = Math.round((this.degrees - 32) * (5 / 9))
                    } else {
                        this.temperature = this.degrees;
                    }
                    break;
                case 3:
                    this.unit = "K"
                    if (this.unitPicked == "c") {
                        this.temperature = this.degrees + 273;
                    } else if (this.unitPicked == "f") {
                        this.temperature = Math.round((this.degrees - 32) * (5 / 9) + 273);
                    }
                    break;
                default:
            }
        }
    }
})