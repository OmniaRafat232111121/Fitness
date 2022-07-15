import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
 <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
 <img  src={exercise.g}/>

 </Link>
);

export default ExerciseCard;