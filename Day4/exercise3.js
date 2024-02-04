//a program which tells the number of days in a month.

let mont = prompt("Input a month to check the number of days in a month");
 let dmont = mont.toLowerCase()
 switch (dmont) {
    case 'september':
    case 'april':
    case 'june':
    case 'november':
        console.log(`${mont} has 30 days`);
    break;
    
    case 'january':

    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        console.log(`${mont} has 31 days`);
    break;

    default:
        console.log('Invalid month');
        break;
 }

 //now consider leap year.
  mont = prompt("Input a month to check the number of days in a month");
  dmont = mont.toLowerCase()
 switch (dmont) {
    case 'september':
    case 'april':
    case 'june':
    case 'november':
        console.log(`${mont} has 30 days`);
    break;
    
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        console.log(`${mont} has 31 days`);
    break;

    case 'febuary':
        console.log(`${mont} has 29 days`);

    default:
        console.log('Invalid month');
        break;
 }