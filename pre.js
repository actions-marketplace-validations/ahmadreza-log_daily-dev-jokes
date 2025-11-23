const { execSync } = require('child_process');
const path = require('path');

console.log('📦 Installing dependencies...');

try {
  // Install dependencies
  execSync('npm install --production', {
    cwd: __dirname,
    stdio: 'inherit',
  });
  console.log('✅ Dependencies installed successfully!');
} catch (error) {
  console.error('❌ Error installing dependencies:', error.message);
  process.exit(1);
}

