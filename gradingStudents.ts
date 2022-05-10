function gradingStudents(grades: number[]): number[] {
  // Write your code here
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] > 35 && grades[i] % 5 > 2) grades[i] += 5 - (grades[i] % 5);
  }
  return grades;
}
