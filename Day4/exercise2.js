function calculateGrade(score) {
    let grade;

    switch (true) {
        case score >= 80 && score <= 100:
            grade = 'A';
            break;
        case score >= 70 && score < 80:
            grade = 'B';
            break;
        case score >= 60 && score < 70:
            grade = 'C';
            break;
        case score >= 50 && score < 60:
            grade = 'D';
            break;
        case score >= 0 && score < 50:
            grade = 'F';
            break;
        default:
            grade = 'Invalid score';
            break;
    }

    return grade;
}

// Example usage:
let studentScore = 85;
let studentGrade = calculateGrade(studentScore);
console.log(`The student's grade is: ${studentGrade}`);

let season = prompt('Enter a month to know which season it is:')
let month = season.toLowerCase()
switch (month) {
    case 'september':
    case 'october':
    case 'november':
        console.log(`The season for ${season} is: Autumn`);
    break;

    case 'december':
    case 'january':
    case 'february':
        console.log(`The season for ${season} is: Winter`);
    break;

    case 'march':
    case 'april':
    case 'may':
        console.log(`The season for ${season} is: Spring`);
    break;

    case 'june':
    case 'july':
    case 'august':
        console.log(`The season for ${season} is: Summer`);
    break;

    default:
        console.log(`Invalid month`);
        break;
 }

 let day = prompt("Input a day to check if a day is weekend day or a working day")
 let today = day.toLowerCase()
 switch (today) {
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
      console.log(`${day} is a weekday`);  
    break;
 
    case 'saturday':
    case 'sunday':
        console.log(`${day} is a weekend`);
    break;

    default:
        console.log('Invalid day');
        break;
 }