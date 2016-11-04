/**
 * Require main dependencies
 */
import gulp from 'gulp';
import del from 'del';

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
        return (
            this.clean().then(() => { this.onSuccess(); })
        );
    }
    
    /** 
     * Run the files through Clean.
     * @returns {unresolved}
     */
    clean() {
        this.recordStep('Cleanning files');
        return del(this.dirs);
    }
}

export default CleanTask;
