export const createProject = (project) => {
    return (dispatch, getState, {getFirestore,getFirebase}) => {
        //do validation?
        //async call to database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Net',
            authorLastName: 'Ninja',
            authorId: '1234',
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project})
        },(err)=>{
            console.log('error');
            dispatch({ type: 'CREATE_PROJECT_ERROR', err})
        });
    }
}