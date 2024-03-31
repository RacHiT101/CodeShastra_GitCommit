/* eslint-disable react/prop-types */
import React from 'react'

const CoursesName = ({selectedCourse,courses}) => {
  console.log(courses[selectedCourse]);
  return (
    <div className="stats h-64 w-full gap-5">
        {selectedCourse && (
          <div className="w-full flex flex-col">
            <h2>{selectedCourse}</h2>
            {courses[selectedCourse].map((courseDetail, index) => (
              <div key={index} className="w-full mb-4">
                <div className="w-full flex flex-col h-full rounded-xl shadow-md shadow-gray-200 bg-white p-4">
                  <img
                    className="w-full h-72 object-cover rounded-t-xl"
                    src={courseDetail.image}
                    alt="-"
                  />
                  <div className="p-4">
                    <p className="text-xl font-semibold mb-2">
                      {courseDetail.name}
                    </p>
                    <p className="text-gray-600 mb-2">
                      Instructor: {courseDetail.instructor}
                    </p>
                    <p className="text-gray-600 mb-2">
                      Duration: {courseDetail.duration}
                    </p>
                    <p className="text-gray-600 mb-2">
                      Level: {courseDetail.level}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
  )
}

export default CoursesName