/**
 * Created by pavel on 18.02.18.
 */
function Machine(power) {
    this._power = power;
    this._enabled = false;

    this.enable = function() {
        this._enabled = true;
    };

    this.disable = function() {
        this._enabled = false;
    };
}

function CoffeeMachine(power, capacity) {
    Machine.call(this);
    var self = this;
    var waterAmount = 0;
    var WATER_HEAT_CAPACITY = 4200;

    function getBoilTime() {
        return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }
    function onReady() {
        alert( 'Кофе готов!' );
    }
    this.run = function() {
        setTimeout(onReady, getBoilTime());
    };
    this.waterAmount = function(amount) {
        if (!arguments.length) return waterAmount;
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить воды больше, чем " + capacity);
        }
        waterAmount = amount;
    }
}

var coffeeMachine = new CoffeeMachine(1000, 500);
coffeeMachine.waterAmount(450);