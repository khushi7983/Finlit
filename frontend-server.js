import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 10000;

// Get the project root directory (where dist folder is located)
const projectRoot = path.resolve(__dirname);
const distPath = path.join(projectRoot, 'dist');

console.log('Project root:', projectRoot);
console.log('Dist path:', distPath);

// Serve static files from the dist directory
app.use(express.static(distPath));

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Frontend server is running on port ${PORT}`);
  console.log(`Serving files from: ${distPath}`);
});
