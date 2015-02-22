module.exports = function (grunt) {
  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'js/cashier.js', 'js/main.js', 'js/parser.js', 'js/view.js', 'spec/**/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
};
