import mongoose from 'mongoose';
import { IGenericErrorMessage } from '../interfaces/error';
// Handle Cast Error
const handleCastError = (error: mongoose.Error.CastError) => {
  const errors: IGenericErrorMessage[] = [
    {
      path: error.path,
      message: 'Invalid Id',
    },
  ];

  const statusCode = 400;
  return {
    statusCode,
    message: 'Cast Error',
    errorMessages: errors,
  };
};

export default handleCastError;
