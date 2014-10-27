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
        cwd: '.',
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
      data: {
        expand: true,
        cwd: 'src',
        src: 'data/**/*.json',
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
    sass: {
      dist: {
        files: {
          'src/styles/main.css' : 'src/styles/main.scss'
        }
      }
    },
    bowercopy: {
      isotope: {
        src: 'isotope/dist/isotope.pkgd.min.js',
        dest: 'dist/vendor/'
      },
      imagesloaded: {
        src: 'imagesloaded/imagesloaded.pkgd.min.js',
        dest: 'dist/vendor/'
      },
      jqueryui: {
        src: 'jquery-ui/jquery-ui.min.js',
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
    imagemin: {
      dynamic: {
        files: [{
            expand: true,
            cwd: 'src/images/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'dist/images/'
        }]
      }
    },
    express: {
      dev: {
        options: {
          script: 'server.js'
        }
      }
    },
    'gh-pages': {
      production: {
        options: {
          base: 'dist',
          branch: 'master',
          repo: 'git@github.com:ObjectsToData/ObjectsToData.github.io.git'
        },
        src: ['**']
      }
    },

    watch: {
      html: {
      files: ['src/**/*.html'],
        tasks: ['copy:html']  
      },
      css: {
        files: ['src/**/*.scss'],
        tasks: ["copy:styles", "sass"]  
      },
      scripts: {
        files: ['src/scripts/**/*.js'],
        tasks: ['copy:scripts']
      },
      options: {
        livereload: true  
      }
    }
  });

  grunt.registerTask('build', ['clean:build', 'copy', 'bowercopy', 'imagemin']);
  grunt.registerTask('default', ['build', 'sass', 'express', 'watch']);
  grunt.registerTask('deploy', ['build', 'gh-pages']);
  grunt.registerTask('quick', ['express', 'watch']);

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-bowercopy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
}