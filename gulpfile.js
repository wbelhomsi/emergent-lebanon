var gulp = require('gulp'),
    gulpSequence = require('gulp-sequence'),
    shell = require('shelljs'),
		spawn = require('child_process').spawn;


gulp.task('build:frontend', function(done) {
	process.chdir('frontend');
	console.log('BUILDING FRONTEND');
	new Promise(function(resolve,reject) {
		var addPlatform = spawn('npm', ['run', 'build'], {detached: false, shell: true, stdio: [null, process.stdout, process.stderr] });
		addPlatform.on('exit', function(code) {
			process.chdir('..');
			if(code !== 0) {
				console.log('Error Building Frontend');
				reject(code);
				return;
			}
			resolve();
		});
	})
	.then(() => done())
	.catch(err => done(err));
});

gulp.task('run:frontend', function(done) {
	process.chdir('frontend');
	console.log('RUNNING FRONTEND');
	new Promise(function(resolve,reject) {
		var addPlatform = spawn('npm', ['run', 'start'], {detached: false, shell: true, stdio: [null, process.stdout, process.stderr] });
		addPlatform.on('exit', function(code) {
			process.chdir('..');
			if(code !== 0) {
				console.log('Error Running Frontend');
				reject(code);
				return;
			}
			resolve();
		});
	})
	.then(() => done())
	.catch(err => done(err));
});

gulp.task('build-move:frontend',
  gulpSequence(
    'build:frontend', 
    'zip:frontend'
  )
);