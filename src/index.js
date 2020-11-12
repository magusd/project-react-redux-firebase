import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './store/reducers/RootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, createFirestoreInstance, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, reactReduxFirestore, getFirebase } from 'react-redux-firebase';
import firebaseConfig from './config/firebase';
import firebase from 'firebase/app';

const store = createStore(rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirestore,getFirebase})),
    reduxFirestore(firebase, firebaseConfig),
  )
);

const rrfProps = {
  firebase,
  config: firebaseConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

ReactDOM.render(
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
