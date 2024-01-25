let luv = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(love.match(/luv/gi))

let becaus = "You cannot end a sentence with because because because is a conjunction";
console.log(because.match(/becaus/gi));

const sentenc = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let inequalities = /[@#$%&;]/g;
console.log (sentenc.replace (inequalities, ""));

let earns = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let extract = "/\d+/gi;"
let a = earn.match(extract);
console.log(a);
    let ai = +a[0] * 12;
    console.log(ai);
    let bi = +a[2] * 12;
    console.log(bi)
    let output = ai + bi + 10000;
    console.log(output)