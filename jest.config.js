/** @type {import('jest').Config} */
const config = {
  verbose: true,
}

module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/3.5/'],
}
