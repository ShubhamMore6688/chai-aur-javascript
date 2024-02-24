const month = 1
switch (month) {
    case 1:
        console.log("Jan")
        break; //when this break is not written after the codition match it will execute all the below cases except default
    case 2:
        console.log("Feb")
        break;
    case 3:
        console.log("Mar")
        break;
    default:
        break;
}