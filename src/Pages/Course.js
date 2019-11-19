import React, { Component, Fragment } from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import Course from '../Components/CourseCard';
export default class CoursePage extends Component {
          render() {
                    return (
                              <Fragment>
                                        <Navbar />
                                        <Sidebar />
                                        <Course />
                                        <Course />
                              </Fragment>
                    );
          }
}
