'use strict';
import gulp        from 'gulp';
import less        from 'gulp-less';
import browserSync from 'browser-sync';
import header      from 'gulp-header';
import cleanCSS    from 'gulp-clean-css';
import rename      from 'gulp-rename';
import uglify      from 'gulp-uglify';
import pump        from 'pump';
import pkg         from './package.json';

// Set the banner content
let banner =
`/*!
 * <%= pkg.title %> v<%= pkg.version %>
 * ${new Date().getFullYear()} <%= pkg.author %>
 */
`;

// Compile LESS files from /less into /css
gulp.task('less', () => {
    return gulp.src(['less/*.less', '!less/mixins.less', '!less/variables.less'])
        .pipe(less())
        .pipe(header(banner, { pkg: pkg }))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Minify compiled CSS
gulp.task('minify-css', ['less'], () => {
    return gulp.src('css/freelancer.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Minify JS
gulp.task('minify-js', function (cb) {
  pump([
      gulp.src('js/freelancer.js'),
      uglify(),
      header(banner, { pkg: pkg }),
      rename({ suffix: '.min' }),
      gulp.dest('js'),
      browserSync.reload({
        stream: true
      })
    ],
    cb
  );
});


// Copy vendor libraries from /node_modules into /vendor
gulp.task('copy', () => {
    gulp.src(['node_modules/bootstrap/dist/**/*', '!**/npm.js', '!**/bootstrap-theme.*', '!**/*.map'])
        .pipe(gulp.dest('vendor/bootstrap'))

    gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest('vendor/jquery'))

    gulp.src([
            'node_modules/font-awesome/**',
            '!node_modules/font-awesome/**/*.map',
            '!node_modules/font-awesome/.npmignore',
            '!node_modules/font-awesome/*.txt',
            '!node_modules/font-awesome/*.md',
            '!node_modules/font-awesome/*.json'
        ])
        .pipe(gulp.dest('vendor/font-awesome'))
})

// Run everything
gulp.task('default', ['less', 'minify-css', 'minify-js', 'copy']);

// Configure the browserSync task
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: ''
        },
    })
})

// Dev task with browserSync
gulp.task('dev', ['browserSync', 'less', 'minify-css', 'minify-js'], () => {
    gulp.watch('less/*.less', ['less']);
    gulp.watch('css/*.css', ['minify-css']);
    gulp.watch('js/*.js', ['minify-js']);
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('js/*.js', browserSync.reload);
});
