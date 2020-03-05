const expect = require('chai').expect;
const Calculator = require('../../src/js/lib/Calculator');

describe('Calculator', () => {
    let calculator = null;

    beforeEach(() => {
    calculator = new Calculator();
    });

    it('should have an add function', () => {
    expect(calculator.add).to.exist;
    });

    it('should add 2 + 2 together correctly', () => {
    expect(calculator.add(2, 2)).to.equal(4);
    });
});

describe('Calculator', () => {
    let calculator = null;

    beforeEach(() => {
    calculator = new Calculator();
    });

    it('should have a subtract function', () => {
    expect(calculator.subtract).to.exist;
    });

    it('should add 2 - 1 together correctly', () => {
    expect(calculator.subtract(2, 1)).to.equal(1);
    });
});

describe('Calculator', () => {
    let calculator = null;

    beforeEach(() => {
    calculator = new Calculator();
    });

    it('should have a multiply function', () => {
    expect(calculator.multiply).to.exist;
    });

    it('should add 2 * 6 together correctly', () => {
    expect(calculator.multiply(2, 6)).to.equal(12);
    });
});

describe('Calculator', () => {
    let calculator = null;

    beforeEach(() => {
    calculator = new Calculator();
    });

    it('should have a divide function', () => {
    expect(calculator.divide).to.exist;
    });

    it('should add 8 / 4 together correctly', () => {
    expect(calculator.divide(8, 4)).to.equal(2);
    });
});
