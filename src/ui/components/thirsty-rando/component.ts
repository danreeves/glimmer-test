import Component, { tracked } from "@glimmer/component";

export default class ThirstyRando extends Component {
    constructor(options) {
        super(options);
        this.rando();
    }

    @tracked coolRandomNumber = 0;
    @tracked style = ''

    rando() {
        setInterval(() => {
            this.coolRandomNumber = Math.random();
            this.style = makeStyle();
        }, 0);
    }
}

function makeStyle () {
    return `
        transform: translate(${r(-5, 5)}px, ${r(-5, 5)}px);
    `;
}

function r (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
