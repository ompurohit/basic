const userModule = {
    add: (a,b) => a+b,
    sub: (a,b) => (a > b) ? a-b : b-a,
    mul: (a,b) => a*b
}

module.exports = userModule;