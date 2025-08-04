// ✅ PART 1: Variables & Conditionals
let studentGrades = []; // Array to store student records

// Function to determine grade letter
function determineGrade(score) {
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score >= 60) return "D";
  else return "F";
}

// ✅ PART 2: Custom Functions

// 1. Add student data to list
function addStudentGrade() {
  const name = document.getElementById("studentName").value;
  const subject = document.getElementById("subject").value;
  const score = parseInt(document.getElementById("score").value);

  if (!name || !subject || isNaN(score)) {
    alert("Please fill out all fields correctly.");
    return;
  }

  const grade = determineGrade(score);

  // Add to array
  studentGrades.push({ name, subject, score, grade });

  // ✅ DOM Interaction 1: Update list on the page
  updateRecordList();

  // Clear input fields
  document.getElementById("studentName").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("score").value = "";
}

// 2. Display average score
function showAverage() {
  if (studentGrades.length === 0) {
    alert("No data available.");
    return;
  }

  let total = 0;

  // ✅ PART 3: Loop Example 1
  for (let i = 0; i < studentGrades.length; i++) {
    total += studentGrades[i].score;
  }

  let avg = total / studentGrades.length;

  // ✅ DOM Interaction 2: Display result
  document.getElementById("averageOutput").textContent = `Average Score: ${avg.toFixed(2)}`;
}

// ✅ PART 3: Loop Example 2 & DOM Interaction 3
function updateRecordList() {
  const list = document.getElementById("recordList");
  list.innerHTML = ""; // clear previous list

  // Use forEach to create list items dynamically
  studentGrades.forEach((entry, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${entry.name} - ${entry.subject} - ${entry.score} (${entry.grade})`;
    list.appendChild(li);
  });
}
