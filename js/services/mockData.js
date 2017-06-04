import {realData} from "./realData.js";
export const getMockUsers = () => {
    return {
        username: "Shashank Aggarwal",
        password: "password"
    };
}

export const getMockEventList = () => {

    let mockEvents = [],
        realDataLength = realData.length,
        randomIndex;

    for (let i = 0; i < 20; i++) {
        randomIndex = getRandomIntInclusive(0, realDataLength - 1);
        mockEvents.push({...realData[randomIndex], latlng: getRandomLatLng(), eventID: i})
//         mockEvents.push({
//                 eventID: i,
//                 eventName: "City walk",
//                 latlng: getRandomLatLng(),
//                 description: "These days, the pete area, including the neighborhoods \
// of Chickpet (or small market in Kannada) and Cottonpet (cotton market), \
// are still busy clusters of wholesale markets where locals get their \
// wedding cards printed or buy cheap house wares. Early morning, \
// free of crowds, you can amble through alleyways into ancient temples \
// and unmarked buildings all related to Kempegowda’s history.",
//                 contactMobile: "9876543211",
//                 eventCategory: "Fitness",
//                 location: "Govt. playground, Sampige Road",
//                 startTime: "5th May(7AM)",
//                 endTime: "5th May(2PM)",
//                 interestedCount: 1,
//                 imgUrls: [
//                     "https://www.makemytrip.com/travel-guide/media/dg_image/bangalore/thumb/Public-library-bangalore_19_158_bangalore_938_410.jpg",
//                     "https://www.makemytrip.com/travel-guide/media/dg_image/bangalore/thumb/Public-library-bangalore_19_158_bangalore_938_410.jpg",
//                     "https://www.makemytrip.com/travel-guide/media/dg_image/bangalore/thumb/Public-library-bangalore_19_158_bangalore_938_410.jpg",
//                 ]
//         });
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
    const plusOrMinus1 = Math.random() < 0.5 ? -1 : 1,
        plusOrMinus2 = Math.random() < 0.5 ? -1 : 1;
    return {
        latitude: 12.990000 + (Math.random() * 0.05) * plusOrMinus1,
        longitude: 77.680000 + (Math.random() * 0.05) * plusOrMinus2
    };
}

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// const getRandomLong = () => {
//     return 77.680000 + (Math.random() * 0.01);
// }