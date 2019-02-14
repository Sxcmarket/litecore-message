'use strict';

var gulp = require('gulp');
var sexcoreTasks = require('sexcore-build');

sexcoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
