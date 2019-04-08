import addTextToHtmlTag from './addTextToHtmlTag';
function* secondsGenerator(start, end, minGenerator) {
    var value = start;
    while (true) {
        while (value < end) {
            yield value
            value++
        }
        value = 0;
        addTextToHtmlTag("clock__minutes", minGenerator.next().value)
    }
}
function* minutesGenerator(start, end, hGenerator) {
    var value = start;
    value++;
    while (true) {
        while (value < end) {
            yield value
            value++;
        }
        value = 0;
        addTextToHtmlTag("clock__hours", hGenerator.next().value)
    }
}
function* hoursGenerator(start, end) {
    var value = start;
    value++;
    while (true) {
        while (value <= end) {
            yield value
            value++
        }
        value = 1;
    }
}
export { secondsGenerator, minutesGenerator, hoursGenerator };