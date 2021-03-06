var isNode = 'undefined' !== typeof global && '[object global]' === {}.toString.call(global);
var Abacus = isNode ? require('../src/js/Abacus.js') : window.Abacus, echo = console.log;


function print_all( o, prev, f )
{
    if ( -1 === prev )
    {
        while ( o.hasNext(-1) ) echo( f ? f(o.next(-1)) : o.next(-1) );
    }
    else
    {
        //while ( o.hasNext() ) echo( o.next() );
        // iterator/iterable are supported
        for(let item of o) echo( f ? f(item) : item );
    }
}

// Note: Due to the large number of combinatorial samples,
// Abacus combinatorics use an Iterator pattern to succesively and consistently
// generate all combinatorial objects without storing all of them in memory at once
var o;

echo('Abacus.Progressions (VERSION = '+Abacus.VERSION+')');
echo('---');

echo('o=Abacus.Progression(1,1,10)');
o=Abacus.Progression(1,1,10);
echo('o.total()');
echo(o.total());
print_all(o);
echo('o.rewind()');
print_all(o.rewind());
echo('o.rewind(-1)');
print_all(o.rewind(-1), -1);
echo('o.dispose()');
o.dispose();
echo('---');

echo('o=Abacus.Progression(2,0,2)');
o=Abacus.Progression(2,0,2);
echo('o.total()');
echo(o.total());
print_all(o);
echo('o.rewind()');
print_all(o.rewind());
echo('o.rewind(-1)');
print_all(o.rewind(-1), -1);
echo('o.dispose()');
o.dispose();
echo('---');

echo('o=Abacus.Progression(1,3,100)');
o=Abacus.Progression(1,3,100);
echo('o.total()');
echo(o.total());
print_all(o);
echo('o.rewind()');
print_all(o.rewind());
echo('o.rewind(-1)');
print_all(o.rewind(-1), -1);
echo('o.dispose()');
o.dispose();
echo('---');

echo('o=Abacus.Progression(4,3,100)');
o=Abacus.Progression(4,3,100);
echo('o.total()');
echo(o.total());
print_all(o);
echo('o.rewind()');
print_all(o.rewind());
echo('o.rewind(-1)');
print_all(o.rewind(-1), -1);
echo('o.dispose()');
o.dispose();
echo('---');

echo('o=Abacus.Progression(1,3,100,{type:"geometric"})');
o=Abacus.Progression(1,3,100,{type:"geometric"});
echo('o.total()');
echo(o.total());
print_all(o);
echo('o.rewind()');
print_all(o.rewind());
echo('o.rewind(-1)');
print_all(o.rewind(-1), -1);
echo('o.dispose()');
o.dispose();
echo('---');

echo('o=Abacus.Progression(4,3,100,{type:"geometric"})');
o=Abacus.Progression(4,3,100,{type:"geometric"});
echo('o.total()');
echo(o.total());
print_all(o);
echo('o.rewind()');
print_all(o.rewind());
echo('o.rewind(-1)');
print_all(o.rewind(-1), -1);
echo('o.dispose()');
o.dispose();
echo('---');

echo('o=Abacus.Progression(1,3,Abacus.Arithmetic.INF) /* infinite progression */');
o=Abacus.Progression(1,3,Abacus.Arithmetic.INF);
echo('o.total()');
echo(o.total());
print_all(o.get(10));
echo('o.rewind()');
print_all(o.rewind().get(10));
echo('o.rewind(-1)');
print_all(o.rewind(-1), -1);
echo('o.dispose()');
o.dispose();
echo('---');

echo('o=Abacus.Progression(1,3,Abacus.Arithmetic.INF,{type:"geometric"}) /* infinite progression */');
o=Abacus.Progression(1,3,Abacus.Arithmetic.INF,{type:"geometric"});
echo('o.total()');
echo(o.total());
print_all(o.get(10));
echo('o.rewind()');
print_all(o.rewind().get(10));
echo('o.rewind(-1)');
print_all(o.rewind(-1), -1);
echo('o.dispose()');
o.dispose();
echo('---');
