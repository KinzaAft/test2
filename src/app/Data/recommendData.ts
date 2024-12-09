import { StaticImageData } from "next/image";
import suv1 from "../public/suv1.png"
import suv2 from "../public/suv2e.png"
import suv3 from "../public/suv3.png"
import suv4 from "../public/suv4.png"
import suv5 from "../public/suv5.png"
import suv6 from "../public/suv6e.png"

type recData= {
    name: string;
    type: string;
    image: StaticImageData;
    petrol:number;
    people: number;
    price: string
}
const recomendedData:recData[] =[
    {
        name:"All New Rush",
        type:"SUV",
        image:suv1,
        petrol:70,
        people:6,
        price:"$72.00"
    },
    {
        name:"CR  - V",
        type:"SUV",
        image:suv2,
        petrol:80,
        people:6,
        price:"$80.00",
    },
    {
        name:"All New Terios",
        type:"SUV",
        image:suv3,
        petrol:90,
        people:6,
        price:"$74.00"
    },
    {
        name:"CR  - V",
        type:"SUV",
        image:suv4,
        petrol:80,
        people:6,
        price:"$80.00"
    },
    {
        name:"MG ZX Exclusice",
        type:"Hatchback",
        image:suv5,
        petrol:70,
        people:4,
        price:"$76.00",
    },
    {
        name:"New MG ZS",
        type:"SUV",
        petrol:80,
        image:suv6,
        people:6,
        price:"$80.00",
    },
    {
        name:"MG ZX Excite",
        type:"Hatchback",
        image:suv5,
        petrol:90,
        people:4,
        price:"$74.00",
    },
    {
        name:"New MG ZS",
        type:"SUV",
        image:suv4,
        petrol:80,
        people:6,
        price:"$80.00",
    },
    
]

export default recomendedData;