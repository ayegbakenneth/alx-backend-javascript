const fs = require('fs');

function countStudents(filePath) {
  try {
    const file_info = fs.readFileSync(filePath, 'utf8');
    const lines = file_info.trim().split('\n');
    const data = lines.slice(1).filter(line => line.trim() !== '');

    const fields = {};

    data.forEach(student => {
      const [firstname, , , field] = student.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });

    console.log(`Number of data: $data.length}`);
    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of data in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
