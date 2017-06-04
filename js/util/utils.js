export const getMarkerDimensions = (event) => {
    return {
        width: event.interestedCount*5 + 20,
        height: event.interestedCount*5 + 20
    }
}