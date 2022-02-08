'use strict';
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "Sum":
            alert(SumOperation(arg1, arg2));
            break;
        case "Diff":
            alert(DiffOperation(arg1, arg2));
            break;
        case "Multi":
            alert(MultiOperation(arg1, arg2));
            break;
        case "Div":
            alert(DivOperation(arg1, arg2));
            break;
        default:
            alert("Не верная операция");
            break;
    }
}