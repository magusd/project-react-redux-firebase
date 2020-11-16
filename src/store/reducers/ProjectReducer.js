const initState = {
    projects: [
        {id: '1', title: 'adsad', content: 'xaskflajsfk'},
        {id: '2', title: 'adsad 22', content: 'xaskflajsfk'},
        {id: '3', title: 'adsad 33', content: 'xaskflajsfk'},
    ]
}
const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            return state;
        case 'CREATE_PROJECT_ERROR':
            return state;
        default:
            break;
    }
    return state;
}

export default projectReducer;