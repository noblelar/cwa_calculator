import React, { useState } from 'react';

const CwaCalculator = () => {
  const [scores, setScores] = useState({});
  const [cwa, setCwa] = useState(0);

  // Function to handle score changes
  const handleScoreChange = (courseId, score) => {
    setScores((prevScores) => ({
      ...prevScores,
      [courseId]: parseFloat(score),
    }));
  };

  // Function to calculate the CWA
  const calculateCwa = () => {
    const totalWeighting = Object.values(weightings).reduce(
      (sum, weighting) => sum + weighting,
      0
    );

    const weightedScores = Object.entries(scores).map(([courseId, score]) => ({
      score,
      weighting: weightings[courseId],
    }));

    const cwa = weightedScores.reduce(
      (sum, { score, weighting }) => sum + score * weighting,
      0
    ) / totalWeighting;

    setCwa(cwa);
  };

  return (
    <div>
      {/* Render your form input fields and submit button */}
      {/* For each course, render an input field to capture the score */}
      {courses.map((course) => (
        <div key={course.id}>
          <label htmlFor={course.id}>{course.name}</label>
          <input
            type="number"
            id={course.id}
            min={0}
            max={100}
            value={scores[course.id] || ''}
            onChange={(e) => handleScoreChange(course.id, e.target.value)}
          />
        </div>
      ))}

      {/* Render the CWA */}
      <p>CWA: {cwa.toFixed(2)}</p>

      {/* Render the submit button */}
      <button onClick={calculateCwa}>Calculate CWA</button>
    </div>
  );
};

export default CwaCalculator;
