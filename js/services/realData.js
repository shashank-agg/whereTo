const getRandomLatLng = () => {
    const plusOrMinus1 = Math.random() < 0.5 ? -1 : 1,
        plusOrMinus2 = Math.random() < 0.5 ? -1 : 1;
    return {
        latitude: 12.990000 + (Math.random() * 0.05) * plusOrMinus1,
        longitude: 77.680000 + (Math.random() * 0.05) * plusOrMinus2
    };
}

export const realData = [
    {
                eventName: "City walk",
                // latlng: getRandomLatLng(),
                description: "These days, the pete area, including the neighborhoods \
of Chickpet (or small market in Kannada) and Cottonpet (cotton market), \
are still busy clusters of wholesale markets where locals get their \
wedding cards printed or buy cheap house wares.",
                contactMobile: "9876543211",
                eventCategory: "recreation",
                location: "Govt. playground, Sampige Road",
                startTime: "5th May(7AM)",
                endTime: "5th May(2PM)",
                interestedCount: 1,
                imgUrls: [
                    "https://www.makemytrip.com/travel-guide/media/dg_image/bangalore/thumb/Public-library-bangalore_19_158_bangalore_938_410.jpg",
                    "https://www.makemytrip.com/travel-guide/media/dg_image/bangalore/thumb/Public-library-bangalore_19_158_bangalore_938_410.jpg",
                    "https://www.makemytrip.com/travel-guide/media/dg_image/bangalore/thumb/Public-library-bangalore_19_158_bangalore_938_410.jpg",
                ]
        },
    {
                eventName: "Bike ride to Avalabetta",
                // latlng: getRandomLatLng(),
                description: "The Bangalore Cyclists Club is organising a bikathon to Avalabetta. Instructions: Get your own bicycles with safety gear.",
                contactMobile: "080-23333333",
                eventCategory: "recreation",
                location: "Silk Board",
                startTime: "5th May(5 AM)",
                endTime: "5th May(12 PM)",
                interestedCount: 1,
                imgUrls: [
                    "https://cache-graphicslib.viator.com/graphicslib/thumbs674x446/10809/SITours/cam-kim-island-discovery-cycle-tour-from-hoi-an-in-hoi-an-204470.jpg",
                    "https://cache-graphicslib.viator.com/graphicslib/thumbs674x446/10809/SITours/cam-kim-island-discovery-cycle-tour-from-hoi-an-in-hoi-an-204470.jpg",
                ]
        },
    {
                eventName: "Annual IEM Auto Expo",
                // latlng: getRandomLatLng(),
                description: "The 13th edition of the Bangalore Auto Expo will kick off at the India Expo Mart (IEM), with brands from over 20 countries showcasing various cars, bikes and automobile trends.",
                contactMobile: "080-23333333",
                eventCategory: "recreation",
                location: "KPC Auditorium, Whitefield",
                startTime: "5th May(9 AM)",
                endTime: "5th May(6 PM)",
                interestedCount: 1,
                imgUrls: [
                    "https://i.ytimg.com/vi/VbJVS_zqIFQ/maxresdefault.jpg",
                    "https://i.ndtvimg.com/i/2016-02/audi-prologue-827_827x510_81454675561.jpg",
                ]
        },
    {
                eventName: "Shoppers Stop showroom inaugration",
                // latlng: getRandomLatLng(),
                description: "Shoppers Stop is opening its new outlet in Marathahalli. Attractive offers available on the opening day. \
John McClaine will be inaugrating the showroom. Shoppers stop is the largest apparel brand in Bangalore with over 400 clothing brands",
                contactMobile: "080-23333333",
                eventCategory: "recreation",
                location: "Next to Brand Factory, Marathahalli",
                startTime: "5th May(10 AM)",
                endTime: "5th May(8 PM)",
                interestedCount: 1,
                imgUrls: [
                    "https://content1.jdmagicbox.com/comp/mumbai/k2/022pxx22.xx22.130318112542.l8k2/catalogue/shoppers-stop-thane-west-thane-7.jpg",
                    "https://content1.jdmagicbox.com/comp/mumbai/k2/022pxx22.xx22.130318112542.l8k2/catalogue/shoppers-stop-thane-west-thane-7.jpg",
                    "",
                ]
        },
    {
                eventName: "Garbage collection drive",
                // latlng: getRandomLatLng(),
                description: "CLEAN BANGALORE NGO is organizing a garbage cleanup drive for Rajajinagar 1st block. This is part of the \
cleanup drive series conducted by us over the past 2 months. We have covered areas like Malleshwaram, Basavangudi etc. already. \
Around 600 people have participated in the past events, and substantial work has been done. (Pls. refer to https://somearticle.com for an article). \
The drive will include - cleanup of streetside garbage dumps and mosquito repelellant sprays in the public park. \
Two BBMP officials will also be present to oversee and advise.",
                contactMobile: "-",
                eventCategory: "social",
                location: "Navrang theatre",
                startTime: "5th May(7AM)",
                endTime: "5th May(2PM)",
                interestedCount: 1,
                imgUrls: [
                    "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/630x315/format/jpg/quality/85/http%3A%2F%2Fi.huffpost.com%2Fgen%2F3214580%2Fimages%2Fn-GARBAGE-INDIA-628x314.jpg",
                    "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/630x315/format/jpg/quality/85/http%3A%2F%2Fi.huffpost.com%2Fgen%2F3214580%2Fimages%2Fn-GARBAGE-INDIA-628x314.jpg",
                    "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/630x315/format/jpg/quality/85/http%3A%2F%2Fi.huffpost.com%2Fgen%2F3214580%2Fimages%2Fn-GARBAGE-INDIA-628x314.jpg",
                ]
        },
    {
                eventName: "IT Layoff peaceful protest",
                // latlng: getRandomLatLng(),
                description: "The Forum for IT Employees (FITE) is staging a protest against the recent mass layoffs by IT companies. A petition will be signed  requesting the intervention of the PMO, labour department and the state government. This protest is being done to highlight the illegal termination citing invalid reasons.",
                contactMobile: "-",
                eventCategory: "social",
                location: "Ecospace",
                startTime: "5th May(9AM)",
                endTime: "5th May(2PM)",
                interestedCount: 1,
                imgUrls: [
                    "https://media.glassdoor.com/l/41/40/be/3e/altisource-office-pritech-park.jpg",
                    "https://media.glassdoor.com/l/41/40/be/3e/altisource-office-pritech-park.jpg",
                    "https://media.glassdoor.com/l/41/40/be/3e/altisource-office-pritech-park.jpg",
                ]
        },
    {
                eventName: "Open House for Apartment (Rent)",
                // latlng: getRandomLatLng(),
                description: "3 BHK Apartment is located in Prestige Elm. Expected rent - 35K (negotiable). Maintainence - 4K. \
Deposit - 10 months rent. The owner will be present. All prospective tenants can visit at the mentioned time \
to look at the house. Posting here since I am busy and cannot repeatedly show apartment. Brokers please excuse.",
                contactMobile: "-",
                eventCategory: "utility",
                location: "Behind CISCO back gate (Kadubeesnahalli)",
                startTime: "5th May(5 PM)",
                endTime: "5th May(8 PM)",
                interestedCount: 1,
                imgUrls: [
                    "https://i.ytimg.com/vi/Kle-8fyIoQ8/maxresdefault.jpg",
                    "https://upload.wikimedia.org/wikipedia/commons/0/0d/Bedroom_Mitcham.jpg",
                ]
        },
    {
                eventName: "Furniture sale",
                // latlng: getRandomLatLng(),
                description: "The owner is moving out of India, and wants to sell all the furniture. Furniture includes - \
6 seater dining table, 2 full beds, 2 iron cupboards, refrigerator and washing machine. Price can be decided mutually.",
                contactMobile: "-",
                eventCategory: "utility",
                location: "Oak Apartment, Malleshwaram",
                startTime: "5th May(7AM)",
                endTime: "5th May(2PM)",
                interestedCount: 1,
                imgUrls: [
                    "https://cdn.shopify.com/s/files/1/0342/0793/products/DININGDS.jpg?v=1406447996",
                    "https://cdn.shopify.com/s/files/1/0342/0793/products/DININGDS.jpg?v=1406447996",
                ]
        },
    {
                eventName: "Aadhaar Card Enrollment Drive",
                // latlng: getRandomLatLng(),
                description: "The UIDAI is conducting an Aadhaar card enrollment camp at the Banashankari Bangalore One center. \
Instructions: Fill the form at this link (https://somelink.com), and reach the center with a proof of identity and address.",
                contactMobile: "080-23333333",
                eventCategory: "utility",
                location: "Bangalore one center",
                startTime: "5th May(10 AM)",
                endTime: "5th May(8 PM)",
                interestedCount: 1,
                imgUrls: [
                    "https://i.ytimg.com/vi/q7AGvgxLyAM/maxresdefault.jpg",
                    "https://i.ytimg.com/vi/q7AGvgxLyAM/maxresdefault.jpg",
                    "",
                ]
        },
    {
                eventName: "GIDS-2017",
                // latlng: getRandomLatLng(),
                description: "The annual Great Indian Developer Summit (2017) will be a three-day conference and workshop conducted by SalesForce Inc. Over 400 speakers and 20 workshops are slated for the expo. For registrations, go to https://somelink.com.",
                contactMobile: "080-23333333",
                eventCategory: "utility",
                location: "JN Tata Auditorium, IISc",
                startTime: "5th May(10 AM)",
                endTime: "5th May(6 PM)",
                interestedCount: 1,
                imgUrls: [
                    "https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAb2AAAAJDU2YTkxM2EzLWNmODEtNDZiOC1hODQ1LTE0YzAzYzdmODk2ZQ.png",
                    "https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAb2AAAAJDU2YTkxM2EzLWNmODEtNDZiOC1hODQ1LTE0YzAzYzdmODk2ZQ.png",
                    "",
                ]
        },
]