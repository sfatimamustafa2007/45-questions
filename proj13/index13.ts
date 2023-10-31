let favTrans:Array<[transport:string , brand: string]>=[]
favTrans.push(["motercycle" , "Honda"])
favTrans.push(["car" , "Toyota"])
favTrans.push(["bicycle" , "Sohrab"])
//console.log(favTrans)
favTrans.forEach(([transport, brand])=>
{console.log(`I would like to own ${brand} ${transport}.`)}


)