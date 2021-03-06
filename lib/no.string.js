var no = no || require('./no.base.js');

if ( no.de ) {
    module.exports = no;
}

//  ---------------------------------------------------------------------------------------------------------------  //

no.string = {};

//  ---------------------------------------------------------------------------------------------------------------  //

no.string.repeat = function(s, n) {
    if (n === 0) { return ''; }

    s = s.toString();

    //  FIXME: Померять. Может лучше if, или вообще без этого блока.
    switch (n) {
        case 1:
            return s;
        case 2:
            return s + s;
        case 3:
            return s + s + s;
    }

    var result = '';

    while  (n > 1) {
        if (n & 1) {
            result += s;
        }
        s += s;
        n >>= 1;
    };

    return result + s;
};

//  ---------------------------------------------------------------------------------------------------------------  //

no.string.pad_left = function(s, n, ch) {
    if (n === 0) { return s; }

    s = s.toString();

    var l = n - s.length;
    if (l <= 0) {
        return s;
    }

    ch = ch || ' ';

    //  FIXME: Померять. Может лучше if, или вообще без этого блока.
    switch (l) {
        case 1:
            return ch + s;
        case 2:
            return ch + ch + s;
    }

    return no.string.repeat(ch, l) + s;
};

//  ---------------------------------------------------------------------------------------------------------------  //

