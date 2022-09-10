const message ="Hello Node!"

var sum = 5 + 3;

console.log(message);
console.log(sum);

const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

    //notice the lack of parentheses around the 'profileDataArr' paramater?
    const printProfileData = profileDataArr => {
        for (let i=0; i < profileDataArr.length; i++) {
            console.log(profileDataArr[i]);
        }
    };
printProfileData(profileDataArgs);