import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
 <Link className="exercise-card" to={`/exercise/${}`}>

 </Link>
);

export default ExerciseCard;