var isNode = 'undefined' !== typeof global && '[object global]' === {}.toString.call(global);
var Abacus = isNode ? require('../src/js/Abacus.js') : window.Abacus, echo = console.log;
var use_biginteger_arithmetic = require('./biginteger/arithmetic.js');

use_biginteger_arithmetic( Abacus );

function check_div( n, d )
{
    var nn, qr, q, r;
    if ( d.push )
    {
        qr = n.multidivmod(d); q = qr[0]; r = qr[1];
        nn = q.reduce(function(p, qi, i){return p.add(qi.mul(d[i]));}, r);
        echo('('+n.toString()+')/['+d.map(String).join(',')+']='+d.map(function(di, i){return '('+di.toString()+')*('+q[i].toString()+')';}).join('+')+'+('+r.toString()+')='+nn.toString(), nn.equ(n));
    }
    else
    {
        qr = n.divmod(d); q = qr[0]; r = qr[1]; nn = q.mul(d).add(r);
        console.log('('+n.toString()+')/('+d.toString()+')=('+d.toString()+')*('+q.toString()+')+('+r.toString()+')='+nn.toString(), nn.equ(n));
    }
}

var o;

echo('Abacus.MultiPolynomials (VERSION = '+Abacus.VERSION+')');
echo('---');

echo('Multivariate Polynomials and Polynomial operations');
echo('---');

echo('Abacus.MultiPolynomial().toString()');
echo(Abacus.MultiPolynomial().toString());

echo('Abacus.MultiPolynomial({"y*x^2":2,"x*y^2":1,"1":4}, ["x","y"]).toString()');
echo(Abacus.MultiPolynomial({"y*x^2":2,"x*y^2":1,"1":4}, ["x","y"]).toString());

echo('Abacus.MultiPolynomial({"y*x^2":2,"x*y^2":1,"1":4}, ["x","y"]).toTex()');
echo(Abacus.MultiPolynomial({"y*x^2":2,"x*y^2":1,"1":4}, ["x","y"]).toTex());

echo('Abacus.MultiPolynomial({"y*x^2":2,"x*y":1,"1":4}, ["x","y"]).toExpr().toString()');
echo(Abacus.MultiPolynomial({"y*x^2":2,"x*y":1,"1":4}, ["x","y"]).toExpr().toString());

echo('Abacus.MultiPolynomial.fromExpr(Abacus.MultiPolynomial({"y*x^2":2,"x*y":1,"1":4}, ["x","y"]).toExpr(), ["x", "y"]).toString()');
echo(Abacus.MultiPolynomial.fromExpr(Abacus.MultiPolynomial({"y*x^2":2,"x*y":1,"1":4}, ["x","y"]).toExpr(), ["x", "y"]).toString());

echo('Abacus.MultiPolynomial.fromString("1 - yx^2 + 3xy", ["x","y"]).toString()');
echo(Abacus.MultiPolynomial.fromString("1 - yx^2 + 3xy", ["x","y"]).toString());

echo('Abacus.MultiPolynomial.fromString("1 - yx^2 + 3xy", ["x","y"]).add(1).toString()');
echo(Abacus.MultiPolynomial.fromString("1 - yx^2 + 3xy", ["x","y"]).add(1).toString());

echo('Abacus.MultiPolynomial.fromString("1 - yx^2 + 3xy", ["x","y"]).add(Abacus.Polynomial.fromString("1+x")).toString()');
echo(Abacus.MultiPolynomial.fromString("1 - yx^2 + 3xy", ["x","y"]).add(Abacus.Polynomial.fromString("1+x")).toString());

echo('Abacus.MultiPolynomial.fromString("1 - yx^2 + 3xy", ["x","y"]).add(Abacus.MultiPolynomial.fromString("1 + x", ["x","y"])).toString()');
echo(Abacus.MultiPolynomial.fromString("1 - yx^2 + 3xy", ["x","y"]).add(Abacus.MultiPolynomial.fromString("1 + x", ["x","y"])).toString());

echo('Abacus.MultiPolynomial.fromString("1 - yx^2 + 3xy", ["x","y"]).mul(Abacus.MultiPolynomial.fromString("1 + x", ["x","y"])).toString()');
echo(Abacus.MultiPolynomial.fromString("1 - yx^2 + 3xy", ["x","y"]).mul(Abacus.MultiPolynomial.fromString("1 + x", ["x","y"])).toString());

echo('Abacus.MultiPolynomial.fromString("1 - yx^2 + 3xy", ["x","y"]).div(Abacus.MultiPolynomial.fromString("1 + x", ["x","y"])).toString()');
echo(Abacus.MultiPolynomial.fromString("1 - yx^2 + 3xy", ["x","y"]).div(Abacus.MultiPolynomial.fromString("1 + x", ["x","y"])).toString());

echo('Abacus.MultiPolynomial.fromString("1 - yx^2 + 3xy", ["x","y"]).div(Abacus.MultiPolynomial.fromString("1 + x", ["x","y"])).toString()');
check_div(Abacus.MultiPolynomial.fromString("1 - yx^2 + 3xy", ["x","y"]), Abacus.MultiPolynomial.fromString("1 + x", ["x","y"]));

echo('Abacus.MultiPolynomial.fromString("1 - yx^2 + 3xy + 8x^4y^4", ["x","y"]).multidiv([Abacus.MultiPolynomial.fromString("1 + x", ["x","y"]),Abacus.MultiPolynomial.fromString("xy^2", ["x","y"])]).toString()');
check_div(Abacus.MultiPolynomial.fromString("1 - yx^2 + 3xy + 8x^4y^4", ["x","y"]), [Abacus.MultiPolynomial.fromString("1 + x", ["x","y"]),Abacus.MultiPolynomial.fromString("xy^2", ["x","y"])]);

echo('Abacus.MultiPolynomial.fromString("1 - yx^2 + 3xy", ["x","y"]).pow(3).toString()');
echo(Abacus.MultiPolynomial.fromString("1 - yx^2 + 3xy", ["x","y"]).pow(3).toString());

echo('Abacus.MultiPolynomial.fromString("1 - yx^2 + 3xy", ["x","y"]).d("x").toString()');
echo(Abacus.MultiPolynomial.fromString("1 - yx^2 + 3xy", ["x","y"]).d("x").toString());

echo('Abacus.MultiPolynomial.fromString("1 - yx^2 + 3xy", ["x","y"]).d("y").toString()');
echo(Abacus.MultiPolynomial.fromString("1 - yx^2 + 3xy", ["x","y"]).d("y").toString());

echo('Abacus.Math.groebner([Abacus.MultiPolynomial.fromString("x^2-y", ["x","y"]),Abacus.MultiPolynomial.fromString("x^3-x", ["x","y"]),Abacus.MultiPolynomial.fromString("xy-x", ["x","y"]),Abacus.MultiPolynomial.fromString("y^2-y", ["x","y"])])');
echo(Abacus.Math.groebner([Abacus.MultiPolynomial.fromString("x^2-y", ["x","y"]),Abacus.MultiPolynomial.fromString("x^3-x", ["x","y"]),Abacus.MultiPolynomial.fromString("xy-x", ["x","y"]),Abacus.MultiPolynomial.fromString("y^2-y", ["x","y"])]).map(String).join(','));
