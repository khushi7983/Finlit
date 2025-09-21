const fs = require('fs');
const path = require('path');

// Function to recursively find all .jsx and .js files
function findFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.includes('node_modules')) {
      findFiles(filePath, fileList);
    } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to update localhost URLs
function updateFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;
    
    // Replace hardcoded localhost URLs with environment variables
    const replacements = [
      {
        from: /'http:\/\/localhost:5000\/api'/g,
        to: "import.meta.env.VITE_API_URL || 'http://localhost:5000/api'"
      },
      {
        from: /"http:\/\/localhost:5000\/api"/g,
        to: "import.meta.env.VITE_API_URL || 'http://localhost:5000/api'"
      },
      {
        from: /`http:\/\/localhost:5000\/api\$\{([^}]+)\}`/g,
        to: "`${import.meta.env.VITE_API_URL || 'http://localhost:5000/api'}$1`"
      },
      {
        from: /'http:\/\/localhost:5000'/g,
        to: "import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'"
      },
      {
        from: /"http:\/\/localhost:5000"/g,
        to: "import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'"
      }
    ];
    
    replacements.forEach(replacement => {
      if (replacement.from.test(content)) {
        content = content.replace(replacement.from, replacement.to);
        updated = true;
      }
    });
    
    if (updated) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error.message);
  }
}

// Main execution
const srcDir = path.join(__dirname, 'src');
const files = findFiles(srcDir);

console.log(`Found ${files.length} files to check...`);

files.forEach(file => {
  updateFile(file);
});

console.log('API URL update completed!');
