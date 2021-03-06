var isNode = 'undefined' !== typeof global && '[object global]' === {}.toString.call(global);
var Abacus = isNode ? require('../src/js/Abacus.js') : window.Abacus, echo = console.log;
var use_biginteger_arithmetic = require('./biginteger/arithmetic.js');

use_biginteger_arithmetic( Abacus );

function check_radical( p, k )
{
    var r = p.rad(k);
    echo(p.toString()+'=('+r.toString()+')^'+k+'', p.equ(r.pow(k)));
}

var o, pring = Abacus.Ring.C("x", "y"), ring = pring.associatedField();

echo('Abacus.RationalFuncs (VERSION = '+Abacus.VERSION+')');
echo('---');

echo('Rational Functions and Operations');
echo('pring = Abacus.Ring.'+pring.toString()+', ring = Abacus.Ring.'+ring.toString());
echo('---');

echo('ring.create().toString()');
echo(ring.create().toString());

echo();

echo('ring.fromString(ring.create().toString()).toString()');
echo(ring.fromString(ring.create().toString()).toString());

echo('ring.create(pring.fromString("1+xy"), pring.fromString("x-y")).toString()');
echo(ring.create(pring.fromString("1+xy"), pring.fromString("x-y")).toString());

echo('ring.fromString("(1+xy)/(x-y)").toString()');
echo(ring.fromString("(1+xy)/(x-y)").toString());

echo('ring.fromString("(1+xy)/(x-y)").d("x").toString()');
echo(ring.fromString("(1+xy)/(x-y)").d("x").toString());

echo('ring.fromString("(1+xy)/(x-y)").d("y").toString()');
echo(ring.fromString("(1+xy)/(x-y)").d("y").toString());

echo('ring.fromString(ring.create(pring.fromString("1+xy"), pring.fromString("x-y")).toTex()).toString()');
echo(ring.fromString(ring.create(pring.fromString("1+xy"), pring.fromString("x-y")).toTex()).toString());

echo('ring.fromString(ring.create(pring.fromString("1+xy"), pring.fromString("x-y")).toString()).toString()');
echo(ring.fromString(ring.create(pring.fromString("1+xy"), pring.fromString("x-y")).toString()).toString());

echo('ring.fromString("(1+i)/(x-y)").toString()');
echo(ring.fromString("(1+i)/(x-y)").toString());

echo('ring.fromString("(3x+(1+i))/(1+i)").toString()');
echo(ring.fromString("(3x+(1+i))/(1+i)").toString());

echo('ring.fromString("1/(x-y)").toString()');
echo(ring.fromString("1/(x-y)").toString());

echo('ring.fromString("1/(3/2)x").toString()');
echo(ring.fromString("1/(3/2)x").toString());

echo('ring.fromString("(3/2)/x").toString()');
echo(ring.fromString("(3/2)/x").toString());

echo('ring.fromString("x-y").toString()');
echo(ring.fromString("x-y").toString());

echo('ring.fromString("3/2").toString()');
echo(ring.fromString("3/2").toString());

echo('ring.fromString("xy+3/2").toString()');
echo(ring.fromString("xy+3/2").toString());

echo('pring.fromString("xy+3/2").toString()');
echo(pring.fromString("xy+3/2").toString());

echo('ring.fromString(pring.fromString("xy+3/2").toString()).toString()');
echo(ring.fromString(pring.fromString("xy+3/2").toString()).toString());

echo('ring.create(pring.fromString("1+xy"), pring.fromString("x-y")).add(2).toString()');
echo(ring.create(pring.fromString("1+xy"), pring.fromString("x-y")).add(2).toString());

echo('ring.create(pring.fromString("1+xy"), pring.fromString("x-y")).add(pring.fromString("x+2")).toString()');
echo(ring.create(pring.fromString("1+xy"), pring.fromString("x-y")).add(pring.fromString("x+2")).toString());

echo('ring.create(pring.fromString("1+xy"), pring.fromString("x-y")).mul(pring.fromString("x+2")).toString()');
echo(ring.create(pring.fromString("1+xy"), pring.fromString("x-y")).mul(pring.fromString("x+2")).toString());

echo('ring.create(pring.fromString("1+xy"), pring.fromString("x-y")).div(pring.fromString("x+2")).toString()');
echo(ring.create(pring.fromString("1+xy"), pring.fromString("x-y")).div(pring.fromString("x+2")).toString());

echo('ring.fromString("x^2").rad(2)');
check_radical(ring.fromString("x^2"), 2);
echo('ring.fromString("1/(x^2)").rad(2)');
check_radical(ring.fromString("1/(x^2)"), 2);
echo('ring.fromString("x+1").pow(5).rad(5)');
check_radical(ring.fromString("x+1").pow(5), 5);
echo('ring.fromString("x+y").pow(2).rad(2)');
check_radical(ring.fromString("x+y").pow(2), 2);
echo('ring.fromString("xy+1").pow(2).rad(2)');
check_radical(ring.fromString("xy+1").pow(2), 2);
//echo('ring.fromString("x").rad(2)');
//check_radical(ring.fromString("x"), 2);
