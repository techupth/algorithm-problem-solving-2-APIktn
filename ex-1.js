function findStudentIndex(students, searchStudent) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let left = 0;
  let right = students.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (students[middle] === searchStudent) {
      return middle;
    } else if (students[middle] < searchStudent) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
}

let students = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona"];

console.log(findStudentIndex(students, "Bob"));

// ตอบคำถามตรงนี้จ้า O(log n)
