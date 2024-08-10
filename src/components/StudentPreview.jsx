import React from 'react';

const StudentPreview = () => {
    return (
      <section className="studentPreview">
        <div className="preview--info">
          <h2>Affordable Education</h2>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
          <a href="#">Learn More</a>
        </div>
        <div className="student--illustration">
            <img src="/student-illustration.png" alt="A happy child"/>
        </div>
      </section>
    );
}

export default StudentPreview;