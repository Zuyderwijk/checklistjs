module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    
        autoprefixer: {
          options: {
              browsers: ['last 15 versions']
          },
          dist: { // Target
              files: {
                   'css/style.css': 'css/style.css'
              }
          },
        },
        
        sass: {
            options: {
                includePaths: [
/*                    'components/foundation/scss'*/
                ]
            },
            dist: {
                options: {
                    outputStyle: 'expanded'
                },
                files: [
                      {'css/checklist.css': ['scss/checklist.scss'] }
                ]
            }
        },
        cssmin: {
            combine: {
                files: [
                      { 'css/checklist.min.css': ['css/checklist.css'] }
                ]
            }
        },
        uglify: {
            my_target: {
                options: {
                    mangle: false
                },
                files: [
                    {
                        'js/checklistjs.min.js': [
                            'js/checklistjs.js'
                        ]
                    }
                ]
            }
        },
        watch: {
            grunt: {
                files: ['Gruntfile.js']
            },
            sass: {
                files: 'scss/**/*.scss',
                tasks: ['build']
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-autoprefixer');

    grunt.registerTask('build', ['sass:dist', 'autoprefixer', 'cssmin', 'uglify']);
    grunt.registerTask('js', ['uglify']);

    grunt.registerTask('composer', ['build']);

    grunt.registerTask('default', ['sass:dist', 'autoprefixer', 'cssmin', 'watch']);

}