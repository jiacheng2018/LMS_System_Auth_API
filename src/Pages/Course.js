import React, {Component, Fragment} from 'react';
import CourseCard from '../Components/CourseCard';

export default class CoursePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Fragment>
                <CourseCard></CourseCard>
            </Fragment>
        );
    }
}
