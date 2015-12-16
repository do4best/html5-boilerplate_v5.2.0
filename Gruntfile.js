module.exports = function(grunt){
	// project Confugration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify:{
			option:{
				 banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
			}
		},
			sass: {
		options: {
			sourceMap: true
		},
		dist: {
			files: {
				'main.css': 'css/go.scss'
			}
		}
	}

		});
	// Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};