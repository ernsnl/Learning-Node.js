module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        uglify: {
            dynamic_mappings: {
                files: [{
                    expand: true,
                    cwd: 'public/src/',
                    src: ['*.js'],
                    dest: 'public/build/',
                    ext: '.min.js'
                }, ],
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);

};
