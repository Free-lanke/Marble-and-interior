// Prevent yarn usage - enforce npm only
if (process.env.npm_execpath && process.env.npm_execpath.includes('yarn')) {
  console.error('\n❌ ERROR: Please use npm instead of yarn!\n');
  console.error('Run: npm install\n');
  process.exit(1);
}
