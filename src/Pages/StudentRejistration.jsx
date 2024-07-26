import React, { useState } from 'react';
import img from "../assets/logo.png";

const teacherNames = [
  'Syed Husban Ali',
  'Hamiz Muzaffer',
  'Umair Yousufi',
  'Sufyan Sheikh'
];

const courseNames = [
    'Mathematics',
    'Physics',
    'Computer Science',
    'Chemistry'
  ];

  
function StudentRejistration() {
    const [selectedTeacher, setSelectedTeacher] = useState('');
    const [selectedCourse, setSelectedCourse] = useState('');

    const handleChange = (e) => {
      setSelectedTeacher(e.target.value);
    };

    const handleCourseChange = (e) => {
        setSelectedCourse(e.target.value);
      };
  
    return (
        <div className="container">
          <div className="logo">
            <img src={img} alt="SMIT Logo" className="logo-image" />
          </div>
          <h2 className="title">Student Registration Portal</h2>
          <form className="form">
            <div className="input-group">
              <label htmlFor="name" className="label">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="input"
              />
            </div>
            <div className="input-group">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="input"
              />
            </div>
            <div className="input-group">
              <label htmlFor="cnic" className="label">
                CNIC *
              </label>
              <input
                type="text"
                id="cnic"
                placeholder="CNIC"
                className="input"
              />
            </div>
            <div className="input-group">
              <label htmlFor="password" className="label">
                Password *
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="input"
              />
            </div>
            <div className="input-group">
          <label htmlFor="courseName" className="label">
            Course Name *
          </label>
          <select
            id="courseName"
            value={selectedCourse}
            onChange={handleCourseChange}
            className="input"
          >
            <option value="" disabled>Select a course</option>
            {courseNames.map((course, index) => (
              <option key={index} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>
            <div className="input-group">
              <label htmlFor="teacherName" className="label">
                Teacher Name
              </label>
              <select
                id="teacherName"
                value={selectedTeacher}
                onChange={handleChange}
                className="input"
              >
                <option value="" disabled>Select a teacher</option>
                {teacherNames.map((teacher, index) => (
                  <option key={index} value={teacher}>
                    {teacher}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="login-button">
          Submit
        </button>
          </form>
        </div>
      );
    }

export default StudentRejistration