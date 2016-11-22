var module;
module.exports = function(grunt) {

	grunt.initConfig({
		cfg: {
            filename: 'jquery.period-selector',
            vanillaExportName: 'jquery.period-selector'
        },
		dirs: {
            src: 'src',
            dist: 'dist',
            docs: 'docs',
            test: 'test',
			libs: 'libs',
			css: 'css',
            examples: 'examples'
        },
		copy: {
            main: {
                expand: true,
				cwd:'<%= dirs.src %>/',
                src: ['**'],
                dest: '<%= dirs.dist %>/',
            },
			css: {
                expand: true,
				cwd:'<%= dirs.src %>/css',
                src: ['**'],
                dest: '<%= dirs.dist %>/css',
            },
			examples: {
                expand: true,
                src: ['<%= dirs.libs %>/**', '<%= dirs.dist %>/**'],
                dest: '<%= dirs.examples %>/',
            },
			test: {
                expand: true,
                src: ['<%= dirs.libs %>/**', '<%= dirs.dist %>/**'],
                dest: '<%= dirs.test %>/',
            }
        },
		clean: {
            all: ['<%= dirs.dist %>/**']
        },
		uglify: {
            dist: {
                options: {
                    report: 'gzip',
                    preserveComments: 'some'
                },
                files: {
                    '<%= dirs.dist %>/js/<%= cfg.filename %>.min.js': ['<%= dirs.src %>/js/*.js']
                }
            }
        },
		karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
		requirejs: {
            dist: {
                options: {
                    baseUrl: "./",
                    appDir: "src/js",
                    mainConfigFile: ["src/js/app-config.js"],
                    dir: "dist/js",
                    skipDirOptimize: false,
                    removeCombined: true,
                    optimize: 'none',
                    modules: [
						{
							name: "jquery.period-selector",
							// create:true,
							// include: ["query.period-selector"],
							exclude: ["jquery","jquery-ui"],
						},
						{
							name: "knockout-jquery.period-selector",
							exclude: ["jquery","jquery-ui","knockout"],
							optimize: 'uglify2'
						}
					]
                }
            },
		},
		"jshint": {
			"files": [
				"Gruntfile.js",
				"src/**/*.js",
				"test/**/*.js"
			],
			"options": {
				"globals": {
					"jQuery": true
				},
				reporterOutput: ""
			}
		},
		"watch": {
			"files": "<%= dirs.src %>/**",
			"tasks": ["default"]
		},
		
	});

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-karma');
  //grunt.loadNpmTasks('requirejs');//
  
  grunt.registerTask('dist', ['clean:all','requirejs:dist', 'copy:css']);
  grunt.registerTask('default', ['dist','copy:examples', 'copy:test']);
  
  
  grunt.registerTask('test', ['karma:unit']);
  grunt.registerTask('w', ['watch']);
 
};