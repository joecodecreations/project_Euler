var f = 1,
    l = 2,
    n = 0,
    t = 0;
while (n < 4000000) {


    console.log(n);
    if (n % 2 == 0) {
        t += n;
        //  console.log(n);
    }
    n = f + l;
    l = f;
    f = n;

}
//console.log(t);
