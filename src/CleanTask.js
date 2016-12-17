/**
 * Require main dependencies
 */
/**
 * import gulp from 'gulp';
 * import del from 'del';
 **/

let gulp = require('gulp');
let del = del = require('del');
/**
 * Webpack task
 */
class CleanTask extends Elixir.Task {

    /**
     * Create a new JavaScriptTask instance.
     *
     * @param  {object|null} dirs
     */
    constructor(name, dirs) {
        super(name, dirs);
        this.dirs = dirs || [ 'public/css', 'public/js', 'public/build'];
    }

    /**
     * Build up the Gulp task.
     */
    gulpTask() {
      /**
      * this.clean().then(() => { this.onSuccess(); })
      **/
      return this.clean()
          .on('error', this.onError())
          .pipe(this.saveAs(gulp))
          .pipe(this.onSuccess());
    }

    /**
     * Run the files through Clean.
     * @returns {gulp}
     */
    clean() {
        this.recordStep('Cleanning files');
        return gulp.src('').pipe(del(this.dirs, {force: true}));

        /**
         * var that = this;
         * this.recordStep('Cleanning files');
         * return del(this.dirs, {force: true})
         * .then(() => { return that; });
         **/
    }
}

export default CleanTask;
