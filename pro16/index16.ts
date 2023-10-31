let guestList1: Array<string> = [
    "Zia",
    "Ali",
    "Ahmad",
    "Qasim",
    ]
    for (let guest of guestList1){
        console.log(`Hello, ${guest}, we found a bigger dinner table.`)
    } 
    //add begin in array
    let newGuest:string = "Ali Phool"
    //unshift
    guestList1.unshift(newGuest)
    console.log(guestList1)
    //add to middle
    let newGuestInMiddle : string = "Mian Asif"
    let middleIndex: number= Math.floor(guestList1.length/2)
    guestList1.splice(middleIndex, 0, newGuestInMiddle)
    console.log(guestList1)
    //4 step
    let newGuestAtEnd: string = "Muhammad Ali"
    guestList1.push(newGuest)
    console.log(guestList1)

    //final step
    console.log("New set of invitation messages:")

    for(let guest of guestList1){

        console.log(`Dear ${guest}, you are invited to dinner.`)
    }
    export{guestList1}