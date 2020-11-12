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
            console.log(action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log(action.err);
            return state;
        default:
            break;
    }
    return state;
}

export default projectReducer;