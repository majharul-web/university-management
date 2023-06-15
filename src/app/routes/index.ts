import express from 'express';
import { UserRoutes } from '../modules/User/user.routes';
import { AcademicSemesterRoutes } from '../modules/AcademicSemester/academicSemester.routes';
import { AcademicFacultyRoutes } from '../modules/AcademicFaculty/academicFaculty.routes';
import { AcademicDepartmentRoutes } from '../modules/AcademicDepartment/academicDepartment.routes';
import { StudentRoutes } from '../modules/Student/student.routes';
import { FacultiesRoutes } from '../modules/Faculty/faculty.routes';
import { ManagementDepartmentRoutes } from '../modules/ManagementDepartment/managementDepartment.routes';
import { AdminRoutes } from '../modules/Admin/admin.routes';

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
    path: '/management-departments',
    route: ManagementDepartmentRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/faculties',
    route: FacultiesRoutes,
  },
  {
    path: '/admins',
    route: AdminRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
