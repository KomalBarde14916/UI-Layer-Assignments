function increment() {
    document.getElementById('button2').stepUp();
}

function decrement() {
    document.getElementById('button1').stepDown();
}
const counter = (
    function() {
        var counterValue = 0;
        var maggiePrice = 0;

        function maggieAdd(val) {
            maggiePrice = maggiePrice + 10;
        }

        function maggieSub(val) {
            maggiePrice = maggiePrice - 10;
        }

        function changeBy(val) {
            console.log("changeBy called");
            counterValue = counterValue + val;
        }
        return {
            increment: function() {
                console.log("increment called");
                changeBy(1);
                maggieAdd(1);
            },
            decrement: function() {
                console.log("decrement called");
                changeBy(-1);
                maggieSub();
            },
            value: function() {
                return counterValue;
            },
            maggie: function() {
                return maggiePrice;
            }
        };
    })();

function onClick(event) {
    console.log("onclick called on" + event.target.id);
    const result = document.getElementById("result");
    const mgt = document.getElementById("maggiQunId");
    switch (event.target.id) {
        case "button1":
            counter.decrement()
            break;
        case "button2":
            counter.increment()
            break;
        default:
            console.log("default is called");
            break;
    }
    result.innerHTML = counter.value();
    maggiQunId.innerHTML = counter.maggie();
}