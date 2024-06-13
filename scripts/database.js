const database =[
    areas = [{
        id:1,
        name:"Chamfort River",
        activityId:[2, 3, 4]
    },
    {
        id:2,
        name:"Lost Wolf Hiking Trail",
        activityId:[1, 5, 6]
    },
    {
        id:3,
        name:"Lodge",
        activityId:[5, 7, 8, 10]
    },
    {
        id:4,
        name:"Gander River",
        activityId:[1, 4]
    },
    {
        id:5,
        name:"Campgrounds",
        activityId:[7, 8, 10]
    },
    {
        id:6,
        name:"Pine Bluffs Trails",
        activityId:[1, 5, 9]
    },
    ],
    
    services = [
        {
            id:1,
            name:"hiking",
        
        },
        {
            id:2,
            name:"rafting",
        
        },
        {
            id:3,
            name:"canoeing",
         
        },
        {
            id:4,
            name:"fishing",
           
        },
        {
            id:5,
            name:"picnicking",
          
        },
        {
            id:6,
            name:"rock climbing",

        },
        {
            id:7,
            name:"lodging",
        },
        {
            id:8,
            name:"parking",

        },
        {
            id:9,
            name:"zip lines"
        },
        {
            id:10,
            name:"information",
   
        },

    ],
    guests =[
        {
            id: 1,
            name: "Bianca Mccarthy",
            parkId: 4
        },
        {
            id: 2,
            name: "Allen Mccoy",
            parkId: 3
        },
        {
            id: 3,
            name: "Betty Ingram",
            parkId: 6
        },
        {
            id: 4,
            name: "Kain Schmidt",
            parkId: 4
        },
        {
            id: 5,
            name: "Ella-May Carrillo",
            parkId: 1
        },
        {
            id: 6,
            name: "Inaayah Mccullough",
            parkId: 2
        },
        {
            id: 7,
            name: "Eleni Gibbs",
            parkId: 5
        },
        {
            id: 8,
            name: "Arnie Spence",
            parkId: 3
        },
        {
            id: 9,
            name: "Alaya Kirk",
            parkId: 4
        },
        {
            id: 10,
            name: "Barney Berger",
            parkId: 6
        },
        {
            id: 11,
            name: "Myla Pennington",
            parkId: 1
        },
        {
            id: 12,
            name: "Pearl Blackmore",
            parkId: 5
        },
        {
            id: 13,
            name: "Taliyah Hayden",
            parkId: 2
        },
        {
            id: 14,
            name: "Aisling Fulton",
            parkId: 3
        },
        {
            id: 15,
            name: "Bryonie Leach",
            parkId: 4
        }
        
    ]
    
]

export const getAreas = () => {
    return areas.map(area => ({ ...area }));
}

export const getGuests = () => {
    return guests.map(guest => ({ ...guest }));
}

export const getServices = () => {
    return services.map(service => ({ ...service }));
}