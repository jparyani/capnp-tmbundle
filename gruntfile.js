module.exports = function(grunt){
    
    // This will go through package.json and load grunt task
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        convert: {
            yaml2plist: {
                src: ['capnp.language.yml'],
                dest: 'capnp.plist'
            }
        },

        rename: {
            move: {
                src: 'capnp.plist',
                dest: 'capnp.tmLanguage'
            }
        },
        
        watch: {
            html: {
                files: ['capnp.language.yml'],
                tasks: ['default']
            }
        }
    });
    grunt.registerTask('default', ['convert', 'rename']);

};
