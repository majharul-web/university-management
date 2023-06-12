import express from 'express';
import { UserRoutes } from '../modules/User/user.route';
import { AcademicSemesterRoutes } from '../modules/AcademicSemester/academicSemester.route';
import { AcademicFacultyRoutes } from '../modules/AcademicFaculty/academicFaculty.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes,
  },
  {
    path: '/academic-faculties/',
    route: AcademicFacultyRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
