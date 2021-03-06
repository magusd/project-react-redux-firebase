export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{
            dispatch({type:'LOGIN_SUCCESS'});
        },(err)=>{
            dispatch({type:'LOGIN_ERROR',err});
        });
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut()
        .then(()=>{
            dispatch({type:'SIGNOUT_SUCCESS'})
        },()=>{
            dispatch({type:'SIGNOUT_ERROR'})
        });
    }
}