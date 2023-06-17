export interface Display {
  lat: number;
  lng: number;
}
export interface Contact {
  phone: string;
  address?: string;
  email: string;
}
export const pattern: RegExp = /^[a-zA-Z ]+$/;
export const patternDate: string = '^\\d{2}/\\d{2}/\\d{4}$';
export interface SchoolSubjectInterface {
  id?: number;
  name?: string;
}
export const grades: string[] = [
  'sport',
  'music',
  'science',
  'history',
  'math',
];
export const TeacherDescription: string =
  'A sport teacher is a professional educator who specializes in teaching physical education and sports to students. They are responsible for developing and delivering lesson plans, activities, and assessments that promote physical fitness, teamwork, and sportsmanship. They work with students of all ages, from elementary school to university-level courses.Sport teachers must be knowledgeable in a wide range of physical activities and sports, including but not limited to soccer, basketball, volleyball, gymnastics, track and field, swimming, and more. They must also be skilled in explaining and demonstrating proper techniques and safety practices, as well as in helping students develop coordination, endurance, and strength.In addition to teaching, sport teachers may also be responsible for grading assignments and assessments, providing feedback to students and parents, participating in parent-teacher conferences, and maintaining a safe and inclusive classroom environment.Sport teachers may also be involved in organizing and supervising intramural sports leagues, tournaments, and other extracurricular activities related to physical fitness and sports. They may also collaborate with other teachers and professionals to promote physical activity and wellness throughout the school community.Overall, a sport teacher plays a critical role in promoting physical fitness and wellness, as well as in helping students develop important life skills such as teamwork, leadership, and sportsmanship.';
export const teachExperience:string='Taught [subject/grade level] to a diverse student population, using a range of teaching strategies and resources to meet individual needs. Developed and implemented curriculum in line with school and district goals, and regularly reviewed and revised materials based on student outcomes. Fostered a positive classroom environment, where students felt safe, supported, and motivated to learn. Worked collaboratively with colleagues and administrators to support school-wide initiatives and promote student success. Attended and presented at professional development opportunities, to stay up-to-date with best practices in teaching and learning. Provided instruction in [subject/grade level], using a variety of teaching methods to engage students and enhance learning outcomes. Collaborated with colleagues to develop and implement school-wide initiatives, such as literacy and numeracy programs, and technology integration. Monitored student progress through ongoing assessment, and provided feedback to students and parents on a regular basis. Contributed to the school community through participation in extracurricular activities, such as coaching, clubs, and committees. Attended professional development opportunities to enhance knowledge and skills in teaching and learning.'
export const teachContact:Contact={
  phone:'0749000000',
  email:"test@test.com"

}
export interface TeacherInterfaceEx{
  id: string;
  name: string;
  description:string;
}
export const daysOfWeek: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
export interface DisciplinesExample{
  time?: string,
  mat1?: string,
  mat2?: string,
  mat3?: string,
  mat4?: string,
  mat5?: string,
}
