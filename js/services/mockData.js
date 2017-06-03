export const getMockUsers = () => {
    return {
        username: "Shashank Aggarwal",
        password: "password"
    };
}

export const getMockEventList = () => {

    let mockEvents = [];
    for (let i = 0; i < 20; i++) {
        mockEvents.push({
                eventName: "City walk",
                latlng: getRandomLatLng(),
                description: "These days, the pete area, including the neighborhoods \
of Chickpet (or small market in Kannada) and Cottonpet (cotton market), \
are still busy clusters of wholesale markets where locals get their \
wedding cards printed or buy cheap house wares. Early morning, \
free of crowds, you can amble through alleyways into ancient temples \
and unmarked buildings all related to Kempegowda’s history.",
                contactMobile: "9876543211",
                eventCategory: "Fitness",
                location: "Govt. playground, Sampige Road",
                startTime: "5th May(7AM)",
                endTime: "5th May(2PM)",
                interestedCount: 1,
                imgUrls: [
                    "https://www.makemytrip.com/travel-guide/media/dg_image/bangalore/thumb/Public-library-bangalore_19_158_bangalore_938_410.jpg",
                    "https://www.makemytrip.com/travel-guide/media/dg_image/bangalore/thumb/Public-library-bangalore_19_158_bangalore_938_410.jpg",
                    "https://www.makemytrip.com/travel-guide/media/dg_image/bangalore/thumb/Public-library-bangalore_19_158_bangalore_938_410.jpg",
                ]
        });
    };
    return mockEvents;
    // return ([
    //         {
    //             eventName: "Full Marathon",
    //             latlng: {
    //                 latitude: getRandomLat(),
    //                 longitude: getRandomLong(),
    //             }
    //         },
    //         {
    //             eventName: "House party",
    //             latlng: {
    //                 latitude: getRandomLat(),
    //                 longitude: getRandomLong(),
    //             }
    //         },
    //         {
    //             eventName: "Reddit meet",
    //             latlng: {
    //                 latitude: getRandomLat(),
    //                 longitude: getRandomLong(),
    //             }
    //         },
    //         {
    //             eventName: "City walk",
    //             latlng: {
    //                 latitude: getRandomLat(),
    //                 longitude: getRandomLong(),
    //             }
    //         },
    //     ]);
}

//Helpers
const getRandomLatLng = () => {
    const plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    return {
        latitude: 12.990000 + (Math.random() * 0.05) * plusOrMinus,
        longitude: 77.680000 + (Math.random() * 0.05) * plusOrMinus
    };
}

// const getRandomLong = () => {
//     return 77.680000 + (Math.random() * 0.01);
// }