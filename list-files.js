const fs = require('fs');
const path = require('path');

function listProjectFiles(dir = '.', maxFiles = 20) {
  const files = [];
  const extensions = ['.json', '.js', '.ts', '.tsx', '.css', '.html', '.md'];
  const configPatterns = ['.config.', 'config.'];
  
  function scanDirectory(currentDir, depth = 0) {
    if (depth > 3 || files.length >= maxFiles) return; // Limit depth and file count
    
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        if (files.length >= maxFiles) break;
        
        const fullPath = path.join(currentDir, item);
        const relativePath = path.relative('.', fullPath);
        
        // Skip node_modules, .git, and other common directories
        if (item === 'node_modules' || item === '.git' || item.startsWith('.') && item !== '.gitignore') {
          continue;
        }
        
        try {
          const stat = fs.statSync(fullPath);
          
          if (stat.isFile()) {
            const ext = path.extname(item);
            const isConfig = configPatterns.some(pattern => item.includes(pattern));
            
            if (extensions.includes(ext) || isConfig) {
              files.push(relativePath);
            }
          } else if (stat.isDirectory()) {
            scanDirectory(fullPath, depth + 1);
          }
        } catch (err) {
          // Skip files we can't access
          continue;
        }
      }
    } catch (err) {
      // Skip directories we can't read
      return;
    }
  }
  
  scanDirectory(dir);
  return files.slice(0, maxFiles);
}

// Run the function and output results
const projectFiles = listProjectFiles();
console.log('Project files found:');
projectFiles.forEach(file => console.log(file));
console.log(`\nTotal files: ${projectFiles.length}`);