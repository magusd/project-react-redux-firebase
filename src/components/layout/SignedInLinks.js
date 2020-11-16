import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../../store/actions/authActions';

const SignedInLinks = (props) => {
    return (
        <ul className="right">
            <li><NavLink to="/create">New Project</NavLink></li>
            <li><a onClick={props.signOut} href='#s'>Log Out</a></li>s
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">NNs</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);