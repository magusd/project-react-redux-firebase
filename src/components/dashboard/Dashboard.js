import React, {Component} from 'react'
import Notification from './Notification'
import ProjectList from '../project/ProjectList'
import {connect} from 'react-redux';

class Dashboard extends Component {
    render (){
        const {projects} = this.props;
        console.log(projects);
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notification/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}

export default connect(mapStateToProps)(Dashboard);