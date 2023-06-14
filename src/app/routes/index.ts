import express from 'express';
import { UserRoutes } from '../modules/User/user.routes';
import { AcademicSemesterRoutes } from '../modules/AcademicSemester/academicSemester.routes';
import { AcademicFacultyRoutes } from '../modules/AcademicFaculty/academicFaculty.routes';
import { AcademicDepartmentRoutes } from '../modules/AcademicDepartment/academicDepartment.routes';
import { StudentRoutes } from '../modules/Student/student.routes';

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
  {
    path: '/academic-departments',
    route: AcademicDepartmentRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
