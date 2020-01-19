var isNode = 'undefined' !== typeof global && '[object global]' === {}.toString.call(global);
var Abacus = isNode ? require('../src/js/Abacus.js') : window.Abacus, echo = console.log;
var use_biginteger_arithmetic = require('./biginteger/arithmetic.js');

use_biginteger_arithmetic( Abacus );


function check_div( n, d, q, r )
{
    var nn = q.mul(d).add(r);
    console.log('('+n.toString()+')/('+d.toString()+')=('+d.toString()+')*('+q.toString()+')+('+r.toString()+')='+nn.toString(), nn.equ(n));
}
function check_xgcd( args, gcd, tex )
{
    var out = '', res = Abacus.Polynomial(0);
    if ( tex )
    {
        for(i=0; i<args.length; i++)
        {
            out += (out.length ? ' + ' : '') + '('+args[i].toTex()+')'+'('+gcd[i+1].toTex()+')';
            res = res.add(args[i].mul(gcd[i+1]));
        }
        out += ' = '+gcd[0].toTex();
    }
    else
    {
        for(i=0; i<args.length; i++)
        {
            out += (out.length ? ' + ' : '') + '('+args[i].toString()+')'+'('+gcd[i+1].toString()+')';
            res = res.add(args[i].mul(gcd[i+1]));
        }
        out += ' = '+gcd[0].toString();
    }
    console.log(out, res.equ(gcd[0]));
}
function check_factors(p, factors, constant)
{
    constant = constant || Abacus.Arithmetic.I;
    var out = p.toString() + ' = (' + String(constant)+')', res = Abacus.Polynomial([1], p.symbol), i;
    for(i=0; i<factors.length; i++)
    {
        out += '('+factors[i][0].toString()+')'+(1<factors[i][1]?('^'+String(factors[i][1])):'');
        res = res.mul(factors[i][0].pow(factors[i][1]));
    }
    console.log(out, res.mul(constant).equ(p));
}
var o, d, qr, args;

echo('Abacus.Polynomials (VERSION = '+Abacus.VERSION+')');
echo('---');

echo('Polynomials and Polynomial operations');
echo('---');
echo('o=Abacus.Polynomial()');
o=Abacus.Polynomial();
echo('o.toString()');
echo(o.toString());
echo('o.toTex()');
echo(o.toTex());
echo('o.valueOf()');
echo(o.valueOf().toString());
echo('o.d()');
echo(o.d().toString());
echo('o.dispose()');
o.dispose();
echo('---');

echo('o=Abacus.Polynomial({"50":1,"2":2})');
o=Abacus.Polynomial({"50":1,"2":2});
echo('o.toString()');
echo(o.toString());
echo('o.toTex()');
echo(o.toTex());
echo('o.mul(-1)');
echo(o.mul(-1).toString());
echo('o.d()');
echo(o.d().toString());
echo('o.d(2)');
echo(o.d(2).toString(), o.d().d().equ(o.d(2)));
echo('o.d(4)');
echo(o.d(4).toString(), o.d().d().d().d().equ(o.d(4)));
echo('o.toExpr()');
echo(o.toExpr().toString());
echo(o.toExpr().toTex());
echo('Abacus.Polynomial.fromExpr(o.toExpr())');
echo(Abacus.Polynomial.fromExpr(o.toExpr()).toString());
echo('o.dispose()');
o.dispose();
echo('---');

echo('Abacus.Polynomial.fromString("1").toString()');
echo(Abacus.Polynomial.fromString("1").toString());
echo('Abacus.Polynomial.fromString("1 + x^2").toString()');
echo(Abacus.Polynomial.fromString("1 + x^2").toString());
echo('Abacus.Polynomial.fromString("1 - x^2").toString()');
echo(Abacus.Polynomial.fromString("1 - x^2").toString());
echo('Abacus.Polynomial.fromString("1 - (2/3)*x^2+x").toString()');
echo(Abacus.Polynomial.fromString("1 - (2/3)*x^2+x").toString());

echo('---');
echo('o=Abacus.Polynomial([2,0,1])');
o=Abacus.Polynomial([2,0,1]);
echo('o.toString()');
echo(o.toString());
echo('o.toTex()');
echo(o.toTex());
echo('o.valueOf(3)');
echo(o.valueOf(3).toString());
echo('o.add(1)');
echo(o.add(1).toString());
echo('o.add(Abacus.Polynomial([1,1]))');
echo(o.add(Abacus.Polynomial([1,1])).toString());
echo('o.mul(2)');
echo(o.mul(2).toString());
echo('o.mul(Abacus.Polynomial([1,1]))');
echo(o.mul(Abacus.Polynomial([1,1])).toString());
echo('o.shift(1)');
echo(o.shift(1).toString());
echo('o.shift(-1)');
echo(o.shift(-1).toString());
echo('o.compose(Abacus.Polynomial([1]))');
echo(o.compose(Abacus.Polynomial([1])).toString());
echo('o.compose(Abacus.Polynomial([0,1]))');
echo(o.compose(Abacus.Polynomial([0,1])).toString());
echo('o.compose(Abacus.Polynomial([1,1]))');
echo(o.compose(Abacus.Polynomial([1,1])).toString());
o.dispose();
echo('---');

echo('o=Abacus.Polynomial([1,2])');
o=Abacus.Polynomial([1,2]);
echo('o.toString()');
echo(o.toString());
echo('o.toTex()');
echo(o.toTex());
echo('o.valueOf(3)');
echo(o.valueOf(3).toString());
echo('o.neg()');
echo(o.neg().toString());
echo('o.add(1)');
echo(o.add(1).toString());
echo('o.add(Abacus.Polynomial([1,1]))');
echo(o.add(Abacus.Polynomial([1,1])).toString());
echo('o.mul(2)');
echo(o.mul(2).toString());
echo('o.mul(Abacus.Polynomial([1,1]))');
echo(o.mul(Abacus.Polynomial([1,1])).toString());
echo('o.shift(1)');
echo(o.shift(1).toString());
echo('o.shift(-1)');
echo(o.shift(-1).toString());
echo('o.compose(Abacus.Polynomial([1]))');
echo(o.compose(Abacus.Polynomial([1])).toString());
echo('o.compose(Abacus.Polynomial([0,1]))');
echo(o.compose(Abacus.Polynomial([0,1])).toString());
echo('o.compose(Abacus.Polynomial([1,1]))');
echo(o.compose(Abacus.Polynomial([1,1])).toString());
echo('Abacus.Polynomial([1,1,1]).compose(o)');
echo(Abacus.Polynomial([1,1,1]).compose(o).toString());
echo('o.pow(0)');
echo(o.pow(0).toString());
echo('o.pow(1)');
echo(o.pow(1).toString());
echo('o.pow(2)');
echo(o.pow(2).toString());
echo('o.pow(3)');
echo(o.pow(3).toString());
echo('o.div(2)');
d=2;
qr=o.divmod(d);
check_div( o, d, qr[0], qr[1] );
echo('o.div(Abacus.Polynomial([2]))');
d=Abacus.Polynomial([2]);
qr=o.divmod(d);
check_div( o, d, qr[0], qr[1] );
echo('o.div(Abacus.Polynomial([1,1]))');
d=Abacus.Polynomial([1,1]);
qr=o.divmod(d);
check_div( o, d, qr[0], qr[1] );
echo('o.d()');
echo(o.d().toString());
echo('o.toExpr()');
echo(o.toExpr().toString());
echo('Abacus.Polynomial.fromExpr(o.toExpr())');
echo(Abacus.Polynomial.fromExpr(o.toExpr()).toString());
echo('o.dispose()');
o.dispose();
echo('---');

echo('o=Abacus.Polynomial([6,12])');
o=Abacus.Polynomial([6,12]);
echo('o.toString()');
echo(o.toString());
echo('o.toTex()');
echo(o.toTex());
o.dispose();
echo('---');

echo('o=Abacus.Polynomial([-4,0,-2,1])');
o=Abacus.Polynomial([-4,0,-2,1]);
echo('o.toString()');
echo(o.toString());
echo('o.div(Abacus.Polynomial([-3,1]))');
d=Abacus.Polynomial([-3,1]);
qr=o.divmod(d);
check_div( o, d, qr[0], qr[1] );
echo('o.d()');
echo(o.d().toString());
echo('o.toExpr()');
echo(o.toExpr().toString());
echo('Abacus.Polynomial.fromExpr(o.toExpr())');
echo(Abacus.Polynomial.fromExpr(o.toExpr()).toString());
echo('o.dispose()');
o.dispose();
echo('---');

echo('Polynomial Rational Roots');
echo('---');

echo('Abacus.Polynomial([0]).roots()'); // no roots, here infinite roots actually, but for convience denote as no roots
echo(Abacus.Polynomial([0]).roots().map(function(r){return '('+r.toString()+')';}).join(', '));

echo('Abacus.Polynomial([1]).roots()'); // no roots
echo(Abacus.Polynomial([1]).roots().map(function(r){return '('+r.toString()+')';}).join(', '));

echo('Abacus.Polynomial([0,1]).roots()'); // one trivial root
echo(Abacus.Polynomial([0,1]).roots().map(function(r){return '('+r.toString()+')';}).join(', '));

echo('Abacus.Polynomial([0,0,3]).roots()'); // two trivial roots
echo(Abacus.Polynomial([0,0,3]).roots().map(function(r){return '('+r.toString()+')';}).join(', '));

echo('Abacus.Polynomial([1,1]).roots()'); // one root
echo(Abacus.Polynomial([1,1]).roots().map(function(r){return '('+r.toString()+')';}).join(', '));

echo('Abacus.Polynomial([-1,1,0,2]).roots()'); // no rational roots
echo(Abacus.Polynomial([-1,1,0,2]).roots().map(function(r){return '('+r.toString()+')';}).join(', '));

echo('Abacus.Polynomial([6,-7,0,1]).roots()'); // 1,2,-3
echo(Abacus.Polynomial([6,-7,0,1]).roots().map(function(r){return '('+r.toString()+')';}).join(', '));

echo('Abacus.Polynomial([6,-7,0,1]).shift(2).roots()'); // 0,0,1,2,-3
echo(Abacus.Polynomial([6,-7,0,1]).shift(2).roots().map(function(r){return '('+r.toString()+')';}).join(', '));

echo('Abacus.Polynomial([-2,5,-5,3]).roots()'); // one root
echo(Abacus.Polynomial([-2,5,-5,3]).roots().map(function(r){return '('+r.toString()+')';}).join(', '));

echo('Abacus.Polynomial([1,1]).pow(2).roots()'); // multiple root
echo(Abacus.Polynomial([1,1]).pow(2).roots().map(function(r){return '('+r.toString()+')';}).join(', '));

echo('Abacus.Polynomial([1,1]).pow(2).mul(Abacus.Polynomial([0,0,1])).roots()'); // multiple roots
echo(Abacus.Polynomial([1,1]).pow(2).mul(Abacus.Polynomial([0,0,1])).roots().map(function(r){return '('+r.toString()+')';}).join(', '));
echo('---');

echo('Polynomial Factorization');
echo('---');

echo('Abacus.Math.polyfactorize(Abacus.Polynomial([1]))');
o=Abacus.Polynomial([1]);
d=Abacus.Math.polyfactorize(o);
check_factors(o, d[0], d[1]);

echo('Abacus.Math.polyfactorize(Abacus.Polynomial([1,1]).pow(2))');
o=Abacus.Polynomial([1,1]).pow(2);
d=Abacus.Math.polyfactorize(o);
check_factors(o, d[0], d[1]);

echo('Abacus.Math.polyfactorize(Abacus.Polynomial([3,2]).pow(2))');
o=Abacus.Polynomial([3,2]).pow(2);
d=Abacus.Math.polyfactorize(o);
check_factors(o, d[0], d[1]);

echo('Abacus.Math.polyfactorize(Abacus.Polynomial([Abacus.Rational.fromString("3/2"),1]).pow(2))');
o=Abacus.Polynomial([Abacus.Rational.fromString("3/2"),1]).pow(2);
d=Abacus.Math.polyfactorize(o);
check_factors(o, d[0], d[1]);

echo('Abacus.Math.polyfactorize(Abacus.Polynomial([1,1]).mul(Abacus.Polynomial([0,0,1])))');
o=Abacus.Polynomial([1,1]).mul(Abacus.Polynomial([0,0,1]));
d=Abacus.Math.polyfactorize(o);
check_factors(o, d[0], d[1]);

echo('Abacus.Math.polyfactorize(Abacus.Polynomial([1,1]).mul(Abacus.Polynomial([1,1,1])))');
o=Abacus.Polynomial([1,1]).mul(Abacus.Polynomial([1,1,1]));
d=Abacus.Math.polyfactorize(o);
check_factors(o, d[0], d[1]);
echo('---');

echo('Polynomial GCD, generalisation of GCD of numbers');
echo('---');
echo('Abacus.Math.polygcd(Abacus.Polynomial([1,2]),Abacus.Polynomial([1,3,4]))');
echo(Abacus.Math.polygcd(Abacus.Polynomial([1,2]),Abacus.Polynomial([1,3,4])).toString());

echo('Abacus.Math.polygcd(Abacus.Polynomial([1,1,1,1,5]),Abacus.Polynomial([2,1,3]))');
echo(Abacus.Math.polygcd(Abacus.Polynomial([1,1,1,1,5]),Abacus.Polynomial([2,1,3])).toString());

echo('Abacus.Math.polygcd(Abacus.Polynomial([6,7,1]),Abacus.Polynomial([-6,-5,1]))');
echo(Abacus.Math.polygcd(Abacus.Polynomial([6,7,1]),Abacus.Polynomial([-6,-5,1])).toString());

echo('Abacus.Math.polygcd(Abacus.Polynomial([6,7,1]),Abacus.Polynomial([-6,-5,1]),Abacus.Polynomial([1,1]))');
echo(Abacus.Math.polygcd(Abacus.Polynomial([6,7,1]),Abacus.Polynomial([-6,-5,1]),Abacus.Polynomial([1,1])).toString());

echo('Abacus.Math.polygcd(Abacus.Polynomial([6]),Abacus.Polynomial([4]))');
echo(Abacus.Math.polygcd(Abacus.Polynomial([6]),Abacus.Polynomial([4])).toString(), Abacus.Math.gcd(6,4).toString());

echo('Abacus.Math.polygcd(Abacus.Polynomial([12]),Abacus.Polynomial([6]),Abacus.Polynomial([3]))');
echo(Abacus.Math.polygcd(Abacus.Polynomial([12]),Abacus.Polynomial([6]),Abacus.Polynomial([3])).toString(), Abacus.Math.gcd(12,6,3).toString());

echo('Abacus.Math.polygcd(Abacus.Polynomial([2]),Abacus.Polynomial([0]),Abacus.Polynomial([0]),Abacus.Polynomial([3]))');
echo(Abacus.Math.polygcd(Abacus.Polynomial([2]),Abacus.Polynomial([0]),Abacus.Polynomial([0]),Abacus.Polynomial([3])).toString(), Abacus.Math.gcd(2,0,0,3).toString());

echo('Abacus.Math.polygcd(Abacus.Polynomial([74]),Abacus.Polynomial([32]),Abacus.Polynomial([16]),Abacus.Polynomial([153]))');
echo(Abacus.Math.polygcd(Abacus.Polynomial([74]),Abacus.Polynomial([32]),Abacus.Polynomial([16]),Abacus.Polynomial([153])).toString(), Abacus.Math.gcd(74, 32, 16, 153).toString());
echo('---');

echo('Polynomial Extended GCD, generalisation of xGCD of numbers');
echo('---');
echo('Abacus.Math.polyxgcd(Abacus.Polynomial([2,0,1]),Abacus.Polynomial([6,12]))');
args=[Abacus.Polynomial([2,0,1]),Abacus.Polynomial([6,12])];
o=Abacus.Math.polyxgcd(args);
check_xgcd(args, o);
check_xgcd(args, o, true);

echo('Abacus.Math.polyxgcd(Abacus.Polynomial([1,2]),Abacus.Polynomial([1,3,4]))');
args=[Abacus.Polynomial([1,2]),Abacus.Polynomial([1,3,4])];
o=Abacus.Math.polyxgcd(args);
check_xgcd(args, o);

echo('Abacus.Math.polyxgcd(Abacus.Polynomial([1,1,1,1,5]),Abacus.Polynomial([2,1,3]))');
args=[Abacus.Polynomial([1,1,1,1,5]),Abacus.Polynomial([2,1,3])];
o=Abacus.Math.polyxgcd(args);
check_xgcd(args, o);

echo('Abacus.Math.polyxgcd(Abacus.Polynomial([6,7,1]),Abacus.Polynomial([-6,-5,1]))');
args=[Abacus.Polynomial([6,7,1]),Abacus.Polynomial([-6,-5,1])];
o=Abacus.Math.polyxgcd(args);
check_xgcd(args, o);

echo('Abacus.Math.polyxgcd(Abacus.Polynomial([6,7,1]),Abacus.Polynomial([-6,-5,1]),Abacus.Polynomial([1,1]))');
args=[Abacus.Polynomial([6,7,1]),Abacus.Polynomial([-6,-5,1]),Abacus.Polynomial([1,1])];
o=Abacus.Math.polyxgcd(args);
check_xgcd(args, o);

echo('Abacus.Math.polyxgcd(Abacus.Polynomial([6]),Abacus.Polynomial([4]))');
args=[Abacus.Polynomial([6]),Abacus.Polynomial([4])];
o=Abacus.Math.polyxgcd(args);
check_xgcd(args, o);
echo(Abacus.Math.xgcd(6,4).map(function(x){return x.toString();})); // should coincide with this

echo('Abacus.Math.polyxgcd(Abacus.Polynomial([12]),Abacus.Polynomial([6]),Abacus.Polynomial([3]))');
args=[Abacus.Polynomial([12]),Abacus.Polynomial([6]),Abacus.Polynomial([3])];
o=Abacus.Math.polyxgcd(args);
check_xgcd(args, o);
echo(Abacus.Math.xgcd(12,6,3).map(function(x){return x.toString();})); // should coincide with this

echo('Abacus.Math.polyxgcd(Abacus.Polynomial([2]),Abacus.Polynomial([0]),Abacus.Polynomial([0]),Abacus.Polynomial([3]))');
args=[Abacus.Polynomial([2]),Abacus.Polynomial([0]),Abacus.Polynomial([0]),Abacus.Polynomial([3])];
o=Abacus.Math.polyxgcd(args);
check_xgcd(args, o);
echo(Abacus.Math.xgcd(2,0,0,3).map(function(x){return x.toString();})); // should coincide with this

echo('Abacus.Math.polyxgcd(Abacus.Polynomial([74]),Abacus.Polynomial([32]),Abacus.Polynomial([16]),Abacus.Polynomial([153]))');
args=[Abacus.Polynomial([74]),Abacus.Polynomial([32]),Abacus.Polynomial([16]),Abacus.Polynomial([153])];
o=Abacus.Math.polyxgcd(args);
check_xgcd(args, o);
echo(Abacus.Math.xgcd(74,32,16,153).map(function(x){return x.toString();})); // should coincide with this
echo('---');
