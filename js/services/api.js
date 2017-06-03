import * as mock from "./mockData";

export default api = {
    getUser: () => {
        return mock.getMockUsers();
    },
    getEventList: () => {
        return mock.getMockEventList();
    },
    addEvent: () => {}
};
// export const getUser = () => {
//     return mockUsers;
// }
// export const getEventList = () => {
//     return mockEventList;
// }