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
      scripts: {
        expand: true,
        cwd: 'src',
        src: 'scripts/**/*.js',
        dest: 'dist/'
      },
      fonts: {
        expand: true,
        flatten: true,
        src: 'src/fonts/**/*',
        dest: 'dist/fonts'
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
      masonry: {
        src: 'masonry/dist/masonry.pkgd.min.js',
        dest: 'dist/vendor/'
      },
      isotope: {
        src: 'isotope/dist/isotope.pkgd.min.js',
        dest: 'dist/vendor/'
      },
      jquery: {
        src: 'jquery/dist/jquery.min.js',
        dest: 'dist/vendor/'
      },
      jqueryMap: {
        src: 'jquery/dist/jquery.min.map',
        dest: 'dist/vendor/'
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
        tasks: ['copy:scripts']
      },
      assets: {
        files: ['src/images/**/*'],
        tasks: ['copy:images']
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
