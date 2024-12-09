import { StaticImageData } from "next/image";
import car1 from "../public/car1.png"
import car2 from "../public/car2.png"
import car3 from "../public/car3.png"
import car4 from "../public/car4.png"

type iData= {
    name: string;
    type: string;
    image: StaticImageData;
    petrol:number;
    people: number;
    price: string
}

const productData:iData[] =[
    {
    name:"Koenigsegg", 
    type:"Sport",
    image:car1,
    petrol:90,
    people:2,
    price:"$99,00"
},
{
    name:"Nissan GT - R",
    type:"Sport",
    image:car2,
    petrol:80,
    people:2,
    price:"$80.00",
},
{
    name:"Rolls - Royce",
    type:"Sedan",
    image:car3,
    petrol:70,
    people:4,
    price:"$96.00",
},
{
    name:"Nissan GT - R",
    type:"Sports",
    image:car4,
    petrol:80,
    people:2,
    price:"$80.00",
}
]

export default productData;