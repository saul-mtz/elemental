module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ElementalUI',
      externals: {
        react: 'React'
      }
    }
  }
}
