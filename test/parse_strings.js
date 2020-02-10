var isNode = 'undefined' !== typeof global && '[object global]' === {}.toString.call(global);
var Abacus = isNode ? require('../src/js/Abacus.js') : window.Abacus, echo = console.log;
var use_biginteger_arithmetic = require('./biginteger/arithmetic.js');

use_biginteger_arithmetic( Abacus );

var ring;

ring = Abacus.Ring.C("x");
echo('ring = Abacus.Ring.'+ring.toString());
echo('----');
echo('ring.fromString("1")');
echo(ring.fromString("1").toString());
echo('ring.fromString("1 + x^2")');
echo(ring.fromString("1 + x^2").toString());
echo('ring.fromString("1 - x^2")');
echo(ring.fromString("1 - x^2").toString());
echo('ring.fromString("1 - (2/3)*x^2+x")');
echo(ring.fromString("1 - (2/3)*x^2+x").toString());
echo('ring.fromString("1 - \\frac{2}{3}*x^{2}+x")');
echo(ring.fromString("1 - \\frac{2}{3}*x^{2}+x").toString());
echo('ring.fromString("1 - x")');
echo(ring.fromString("1 - x").toString())
echo('ring.fromString("1 + y")');
echo(ring.fromString("1 + y").toString());
echo('ring.fromString(ring.create([Abacus.Complex.Img(), Abacus.Complex(2,-1)]).toString())');
echo(ring.fromString(ring.create([Abacus.Complex.Img(), Abacus.Complex(2,-1)]).toString()).toString());
echo('ring.fromString("(1/2)ix^2+(1+(2/3)i)x")');
echo(ring.fromString("(1/2)ix^2+(1+(2/3)i)x").toString());
echo('ring.fromString("(3/2+(1/2)i)x+1+(2/3)i")');
echo(ring.fromString("(3/2+(1/2)i)x+1+(2/3)i").toString());

ring = Abacus.Ring.C("x","y","z");
echo('ring = Abacus.Ring.'+ring.toString());
echo('----');
echo('ring.fromString("1 - yx^2 + 3xy")');
echo(ring.fromString("1 - yx^2 + 3xy").toString());
echo('ring.fromString("1 - yx")');
echo(ring.fromString("1 - yx").toString());
echo('ring.fromString("1 - y+x")');
echo(ring.fromString("1 - y+x").toString());
echo('ring.fromString("1+xy+xy^2")');
echo(ring.fromString("1+xy+xy^2").toString());
echo('ring.fromString("1 - yx")');
echo(ring.fromString("1 - yx").toString());
echo('ring.fromString("1+xy+xy^2")');
echo(ring.fromString("1+xy+xy^2").toString());
echo('ring.fromString("x^2y+x^2y^2+x+yx+2")');
echo(ring.fromString("x^2y+x^2y^2+x+yx+2").toString());
echo('ring.fromString("x^2y+x^2y^2+x+yx+2+zyx+zy")');
echo(ring.fromString("x^2y+x^2y^2+x+yx+2+zyx+zy").toString());
