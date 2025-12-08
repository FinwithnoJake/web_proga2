let calculator = null;
let elt = null;

export function init_calculator() {
    console.log("Инициализируем Desmos...");
    elt = document.getElementById('calculator');

    if (!elt) {
        console.error("Элемент calculator не найден!");
        return null;
    }

    if (typeof Desmos === 'undefined') {
        console.error("Desmos API не загружен!");
        return null;
    }

    calculator = Desmos.GraphingCalculator(elt, {
        keypad: false,
        expressions: false,
        settingsMenu: false,
        lockViewport: true,
        zoomFit: false,
        pointsOfInterest: false,
        trace: false,
        xAxisStep: 1,
        yAxisStep: 1,
        showGrid: true
    });

    console.log("Desmos инициализирован!");
    return calculator;
}

export function clear_blank(){
    calculator.setBlank();
}
export function get_click_coordinates(xClick, yClick){
    let calculatorRect = elt.getBoundingClientRect();
    return calculator.pixelsToMath({
        x: xClick - calculatorRect.left,
        y: yClick - calculatorRect.top
    })
}

export function draw_point(point, color){
    calculator.setExpression({
        latex: `(${point.x}, ${point.y})`, // Задание координат точки
        color: color // Цвет точки
    });
}

export function draw_graph(r) {
    if (!calculator) init_calculator();
    //calculator.setBlank();

    calculator.removeExpression({id: 'triangle'});
    calculator.removeExpression({id: 'rect'});
    calculator.removeExpression({id: 'circle'});

    let k = r

    calculator.setExpression({
        id: 'k',
        latex: 'k=' + k.toString()
    });

    // 2 четверть: треугольник
    calculator.setExpression({
        id: 'triangle',
        latex: `y <= x + ${k} \\{ x <= 0 \\} \\{ y >= 0 : 1\\}`,
        color: '#1638b2',
        lines: false,
        fillOpacity: 0.5
    });

    // 3 четверть: прямоугольник
    calculator.setExpression({
        id: 'rect',
        latex: `x >= -${k/2} \\{ y >= -${k} : 1\\} \\{ x <= 0 : 1\\} \\{ y <= 0 : 1\\}`,
        color: '#1638b2',
        lines: false,
        fillOpacity: 0.5
    });

    // 4 четверть: круг
    calculator.setExpression({
        id: 'circle',
        latex: `x^2 + y^2 <= ${(k/2)*(k/2)} \\{ x >= 0 \\} \\{ y <= 0 : 1\\}`,
        color: '#1638b2',
        lines: false,
        fillOpacity: 0.5
    });

    // Оси
    calculator.setExpression({
        id: 'xaxis',
        latex: 'y = 0',
        color: 'black',
        lineWidth: 1
    });

    calculator.setExpression({
        id: 'yaxis',
        latex: 'x = 0',
        color: 'black',
        lineWidth: 1
    });

    calculator.setMathBounds({
        left: -r - 1,
        right: r + 1,
        bottom: -r - 1,
        top: r + 1
    });

    calculator.updateSettings({
        xAxisStep: 1,
        yAxisStep: 1,
        showGrid: true
    });
}