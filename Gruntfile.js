module.exports = function (grunt) {
  grunt.initConfig({
    jshint: {
      all: ['js/app/**/*.js', 'spec/**/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
};
