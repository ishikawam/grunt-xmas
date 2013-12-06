/*
 * grunt-xmas
 * https://github.com/ishikawam/grunt-xmas
 *
 * Copyright (c) 2013 Masayuki Ishikawa
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    xmas: {
      main: {
      },
    }
  });

  grunt.loadTasks('tasks');

  grunt.registerTask('test', ['xmas']);
  grunt.registerTask('default', ['xmas']);
};
