var isNode = 'undefined' !== typeof global && '[object global]' === {}.toString.call(global);
var Abacus = isNode ? require('../src/js/Abacus.js') : window.Abacus, echo = console.log;


var o, m;

echo('Abacus.Matrices (VERSION = '+Abacus.VERSION+')');
echo('---');

echo('Matrices and Matrix operations');
echo('---');
echo('o=Abacus.Matrix(3)');
o=Abacus.Matrix(3);
echo('o.toString()');
echo(o.toString());
echo('o.dispose()');
o.dispose();
echo('---');

echo('o=Abacus.Matrix.I(3)');
o=Abacus.Matrix.I(3);
echo('o.toString()');
echo(o.toString());
echo('o.slice(0, 0, 1, 1)');
echo(o.slice(0, 0, 1, 1).toString());
echo('o.add(1)');
echo(o.add(1).toString());
echo('o.mul(2)');
echo(o.mul(2).toString());
echo('o.add(Abacus.Matrix.I(3))');
echo(o.add(Abacus.Matrix.I(3)).toString());
echo('o.mul(Abacus.Matrix.I(3))');
echo(o.mul(Abacus.Matrix.I(3)).toString());
echo('o.dispose()');
o.dispose();
echo('---');

//echo('o=Abacus.Matrix([[91, 1, 0],[21, 0, 1]])');
//o=Abacus.Matrix([[91, 1, 0],[21, 0, 1]]);
echo('o=Abacus.Matrix([91, 21], true).concat(Abacus.Matrix.I(2))');
o=Abacus.Matrix([91, 21], true).concat(Abacus.Matrix.I(2));
echo('o.toString()');
echo(o.toString());
echo('o.rref(false, [2, 1])');
m=o.rref(false, [2, 1]);
echo(m.toString());
m=m.slice(0, 1);
echo('o.rref(false, [2, 1]).slice(0, 1)');
echo(m.toString());
echo('o.rref(false, [2, 1]).slice(0, 1).mul(Abacus.Matrix([91, 21], true))');
echo(m.mul(Abacus.Matrix([91, 21], true)).toString());
echo('o.rref(false, [2, 1]).slice(0, 1).t().mul(Abacus.Matrix([7, 0], true))');
echo(m.t().mul(Abacus.Matrix([7, 0], true)).toString());
o.dispose();
echo('---');

//echo('o=Abacus.Matrix([[5, 6, 1, 0, 0],[6, -11, 0, 1, 0],[8, 7, 0, 0, 1]])');
//o=Abacus.Matrix([[5, 6, 1, 0, 0],[6, -11, 0, 1, 0],[8, 7, 0, 0, 1]]);
echo('o=Abacus.Matrix([[5, 6], [6, -11], [8, 7]]).concat(Abacus.Matrix.I(3))');
o=Abacus.Matrix([[5, 6], [6, -11], [8, 7]]).concat(Abacus.Matrix.I(3));
echo('o.toString()');
echo(o.toString());
echo('o.rref(false, [3, 2])');
m=o.rref();
echo(m.toString());
m=m.slice(0, 2);
echo('o.rref(false, [3, 2]).slice(0, 2)');
echo(m.toString());
echo('o.rref(false, [3, 2]).slice(0, 2).mul(Abacus.Matrix([[5, 6], [6, -11], [8, 7]]))');
echo(m.mul(Abacus.Matrix([[5, 6], [6, -11], [8, 7]])).toString());
echo('o.rref(false, [3, 2]).slice(0, 2).t().mul(Abacus.Matrix([[1, -17], [0, 13], [0, 0]]))');
echo(m.t().mul(Abacus.Matrix([[1, -17], [0, 13], [0, 0]])).toString());
o.dispose();
echo('---');

echo('o=Abacus.Matrix([91, 21], true)');
o=Abacus.Matrix([91, 21], true);
echo('o.toString()');
echo(o.toString());
echo('o.snf()');
m=o.snf();
echo("Left:");
echo(m[1].toString());
echo("Diagonal:");
echo(m[0].toString());
echo("Right:");
echo(m[2].toString());
echo("Reconstructed:");
echo(m[1].mul(m[0]).mul(m[2]).toString());
o.dispose();
echo('---');

echo('o=Abacus.Matrix([[5, 6], [6, -11], [8, 7]])');
o=Abacus.Matrix([[5, 6], [6, -11], [8, 7]]);
echo('o.toString()');
echo(o.toString());
echo('o.snf()');
m=o.snf();
echo("Left:");
echo(m[1].toString());
echo("Diagonal:");
echo(m[0].toString());
echo("Right:");
echo(m[2].toString());
echo("Reconstructed:");
echo(m[1].mul(m[0]).mul(m[2]).toString());
o.dispose();
echo('---');

echo('o=Abacus.Matrix([[ 1,  3, 0],[-2, -6, 0],[ 3,  9, 6]])');
o=Abacus.Matrix([[ 1,  3, 0],[-2, -6, 0],[ 3,  9, 6]]);
echo('o.toString()');
echo(o.toString());
echo('o.space("row")');
m=o.space("row");
for(var i=0; i<m.length; i++)
{
    echo('Vector '+i+': ');
    echo(m[i].toString());
}
echo('o.space("column")');
m=o.space("column");
for(var i=0; i<m.length; i++)
{
    echo('Vector '+i+': ');
    echo(m[i].toString());
}
echo('o.nullspace()');
m=o.nullspace();
for(var i=0; i<m.length; i++)
{
    echo('Vector '+i+': ');
    echo(m[i].toString());
    echo(o.mul(m[i]).toString());
}
o.dispose();
echo('---');

echo('o=Abacus.Matrix([[5, 10, 7], [3, 6, 1], [7, 14, 0]])');
o=Abacus.Matrix([[5, 10, 7], [3, 6, 1], [7, 14, 0]]);
echo('o.toString()');
echo(o.toString());
echo('o.space("row")');
m=o.space("row");
for(var i=0; i<m.length; i++)
{
    echo('Vector '+i+': ');
    echo(m[i].toString());
}
echo('o.space("column")');
m=o.space("column");
for(var i=0; i<m.length; i++)
{
    echo('Vector '+i+': ');
    echo(m[i].toString());
}
echo('o.nullspace()');
m=o.nullspace();
for(var i=0; i<m.length; i++)
{
    echo('Vector '+i+': ');
    echo(m[i].toString());
    echo(o.mul(m[i]).toString());
}
o.dispose();
echo('---');

echo('o=Abacus.Matrix([[5, 3, 7], [10, 6, 14], [8, 3, 1]])');
o=Abacus.Matrix([[5, 3, 7], [10, 6, 14], [8, 3, 1]]);
echo('o.toString()');
echo(o.toString());
echo('o.space("row")');
m=o.space("row");
for(var i=0; i<m.length; i++)
{
    echo('Vector '+i+': ');
    echo(m[i].toString());
}
echo('o.space("column")');
m=o.space("column");
for(var i=0; i<m.length; i++)
{
    echo('Vector '+i+': ');
    echo(m[i].toString());
}
echo('o.nullspace(true)');
m=o.nullspace(true);
for(var i=0; i<m.length; i++)
{
    echo('Vector '+i+': ');
    echo(m[i].toString());
    echo(m[i].mul(o).toString());
}
o.dispose();
echo('---');

echo('o=Abacus.Matrix([[1, 1, 1], [2, 2, 2], [3, 3, 3]])');
o=Abacus.Matrix([[1, 1, 1], [2, 2, 2], [3, 3, 3]]);
echo('o.toString()');
echo(o.toString());
echo('o.space("row")');
m=o.space("row");
for(var i=0; i<m.length; i++)
{
    echo('Vector '+i+': ');
    echo(m[i].toString());
}
echo('o.space("column")');
m=o.space("column");
for(var i=0; i<m.length; i++)
{
    echo('Vector '+i+': ');
    echo(m[i].toString());
}
echo('o.nullspace()');
m=o.nullspace();
for(var i=0; i<m.length; i++)
{
    echo('Vector '+i+': ');
    echo(m[i].toString());
    echo(o.mul(m[i]).toString());
}
echo('o.nullspace(true)');
m=o.nullspace(true);
for(var i=0; i<m.length; i++)
{
    echo('Vector '+i+': ');
    echo(m[i].toString());
    echo(m[i].mul(o).toString());
}
o.dispose();
echo('---');
