module.exports = function(grunt) {
  grunt.initConfig({
    clean: {
      build: {
        src: ['dist/']
      }
    },
    copy: {
      config: {
        expand: true,
        cwd: 'src',
        src: 'CNAME',
        dest: 'dist/'
      },
      html: {
        expand: true,
        cwd: 'src',
        src: '**/*.{html,css}',
        dest: 'dist/'
      },
      images: {
        expand: true,
        flatten: true,
        src: 'src/images/**/*',
        dest: 'dist/images'
      },
      styles: {
        expand: true,
        flatten: true,
        src: 'src/styles/**/*',
        dest: 'dist/styles'
      }  
    },
    bowercopy: {
      jquery: {
        src: 'jquery/dist/*',
        dest: 'dist/vendor/jquery'
      }
    },
    express: {
      dev: {
        options: {
          script: 'server.js'
        }
      }
    },
    watch: {
      html: {
      files: ['src/**/*.html'],
        tasks: ['copy:html']  
      },
      css: {
        files: ['src/**/*.css'],
        tasks: ['copy:styles']  
      },
      scripts: {
        files: ['src/scripts/**/*.js'],
        tasks: ['jshint']
      },
      assets: {
        files: ['src/images/**/*', 'src/fonts/**/*', 'src/styles/**/*'],
        tasks: ['copy:images', 'copy:fonts', 'copy:styles']
      },
      options: {
        livereload: true  
      }
    }
  });

  grunt.registerTask('build', ['clean:build', 'copy', 'bowercopy']);
  grunt.registerTask('default', ['build', 'express', 'watch']);
  grunt.registerTask('deploy', ['build', 'gh-pages']);

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-bowercopy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-gh-pages');
}
