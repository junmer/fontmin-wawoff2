/**
 * @file test
 * @author junmer
 */

/* eslint-env node */

'use strict';

var assert = require('assert');
var path = require('path');
var fs = require('fs');
var read = fs.readFileSync;
var isWoff2 = require('is-woff2');
var del = require('del');
var vfs = require('vinyl-fs');

var Fontmin = require('fontmin');
var wawoff2 = require('./index');

var outputPath = 'fixtures/dist';
var fontFileName = 'sentybrush_regular';

before(function (done) {
    del(outputPath).then(function () {
        done();
    });
});


it('output is woff2', function (done) {

    var fsOpt = {cwd: __dirname};

    var stream = vfs.src(['fixtures/*.ttf'], fsOpt)
        .pipe(Fontmin.glyph({text: 'hello world'})())
        .pipe(wawoff2({clone: false})())
        .pipe(vfs.dest(outputPath, fsOpt));

    stream.on('end', function (a) {

        var filePath = path.resolve(outputPath, fontFileName + '.woff2');

        assert.ok(fs.existsSync(filePath), 'file exists');

        assert.ok(isWoff2(read(filePath)), 'type is woff2');

        done();
    });

});
