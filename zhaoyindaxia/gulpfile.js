var gulp = require("gulp");

gulp.task("copy-html",function(){
	gulp.src("*.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\demo35"));
});



gulp.task("watch",function(){
	gulp.watch("*.html",["copy-html"]);

});