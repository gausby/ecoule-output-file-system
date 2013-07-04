/* global require module */
'use strict';

var fs = require('fs'),
    path = require('path'),
    operandi = require('operandi'),
    mkdir = require('mkdirp')
;

var serial = operandi.serial,
    eachBatch = operandi.eachBatch
;


function Output (config) {
    config = config || {};
    this.basedir = config.basedir;
}

Output.prototype.initialize = function (done) {
    var err;

    if (! this.basedir) {
        err = new Error('A file system outputter should be given a destination directory.');
    }
    else {
        mkdir(path.dirname(this.basedir), function (err) {
            done(err);
        });
        return;
    }

    done(err);
};

Output.prototype.execute = function (output, done) {
    var basedir = this.basedir;

    eachBatch(output, function (files, file, done) {
        var destination = path.join.apply(null, [basedir].concat(file.split(path.sep)));

        serial([
            // create directories, or ensure that they exist
            function (done) {
                mkdir(path.dirname(destination), done);
            },
            // write files to the file system
            function (done) {
                fs.writeFile(destination, files[file], done);
            }
        ], done);

    }, 10, done);
};

module.exports = function (config) {
    return (new Output(config));
};
