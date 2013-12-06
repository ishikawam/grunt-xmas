/*
 * grunt-xmas
 * https://github.com/ishikawam/grunt-xmas
 *
 * Copyright (c) 2013 Masayuki Ishikawa
 * Licensed under the MIT license.
 */
module.exports = function(grunt) {
    var npm = require('npm');
    'use strict';
    grunt.registerMultiTask('xmas', 'Xmas!!', function() {
        var done = this.async();
        npm.load({'global': global}, function(err) {
            if (err) {
                return callback(err);
            }

            npm.commands.xmas(function (e){
                done();
            });
        });
    });
};

