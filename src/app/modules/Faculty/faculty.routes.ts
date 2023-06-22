import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { FacultyController } from './faculty.controller';
import { FacultyValidation } from './faculty.validation';
import auth from '../../middlewares/auth';

const router = express.Router();

router.get('/:id', auth(), FacultyController.getSingleFaculty);
router.get('/', FacultyController.getAllFaculties);

router.delete('/:id', FacultyController.deleteFaculty);

router.patch(
  '/:id',
  validateRequest(FacultyValidation.updateFacultyZodSchema),
  FacultyController.updateFaculty
);

export const FacultiesRoutes = router;
