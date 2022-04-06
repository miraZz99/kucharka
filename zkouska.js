const obj = {
    name: 'fff',
    year: 2000,
    password: 'sdfsgasfghadfgas',
    forEach: function(func) {
        Object.keys(this).forEach(e => func(e));
    }
}

obj.forEach((e) => {
    console.log(e);
});