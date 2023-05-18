module.exports = function (grunt) {
  grunt.initConfig({
    sass: {
      options: {
        includePaths: ["node_modules/bootstrap/scss/bootstrap.scss"],
      },
      dist: {
        options: {
          outputStyle: "compressed",
        },
        files: [
          {
            "dist/assets/css/main.css":                     ["scss/main.scss"], // Main Css 

            "dist/assets/css/bootstrapDatepicker.min.css":  ["node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css"], // Bootstrap Datepicker
            "dist/assets/css/bootstrapMultiselect.min.css": ["node_modules/bootstrap-multiselect/dist/css/bootstrap-multiselect.css"], // Bootstrap Multiselect
            "dist/assets/css/bootstrapTagsInput.min.css":   ["node_modules/bootstrap-tagsinput/dist/bootstrap-tagsinput.css"], // Bootstrap TagsInput
            "dist/assets/css/dataTables.min.css":           ["dist/assets/plugin/datatables/dataTables.bootstrap5.min.css","dist/assets/plugin/datatables/responsive.dataTables.min.css"], // DataTables
            "dist/assets/css/dropify.min.css":              ["node_modules/dropify/dist/css/dropify.min.css"], // Dropify
            "dist/assets/css/fullcalendar.min.css":         ["node_modules/fullcalendar/main.min.css"], // FullCalendar
            "dist/assets/css/toastr.min.css":               ["node_modules/toastr/build/toastr.css"], // Toastr
            "dist/assets/css/nestable.min.css":             ["dist/assets/plugin/nestable/jquery-nestable.css"], // Nestable
            "dist/assets/css/roundslider.min.css":          ["node_modules/round-slider/dist/roundslider.min.css"], // RoundSlider
            "dist/assets/css/rangeslider.min.css":          ["node_modules/ion-rangeslider/css/ion.rangeSlider.min.css"], // ION RangeSlider
            "dist/assets/css/jstree.min.css":               ["node_modules/jstree/dist/themes/default/style.css"], // jstree
            "dist/assets/css/parsley.min.css":              ["node_modules/parsleyjs/src/parsley.css"], // Parsley
            "dist/assets/css/multiselect.min.css":          ["node_modules/multiselect/css/multi-select.css"], // Multiselect
            "dist/assets/css/select2.min.css":              ["node_modules/Select2/select2.css","node_modules/select2-bootstrap-5-theme/dist/select2-bootstrap-5-theme.min.css"], // Select2
            "dist/assets/css/nouislider.min.css":           ["node_modules/nouislider/dist/nouislider.min.css"], // NouiSlider
            "dist/assets/css/cropper.min.css":              ["node_modules/cropper/dist/cropper.css"], // Cropper
            "dist/assets/css/markdown.min.css":             ["node_modules/bootstrap-markdown/css/bootstrap-markdown.min.css"], // markdown
            "dist/assets/css/morris.min.css":               ["node_modules/morris.js/morris.css"], // markdown
          },
        ],
      },
    },
    uglify: {
      my_target: {
        files: {
          "dist/assets/bundles/libscripts.bundle.js": [
            "node_modules/jquery/dist/jquery.js",
            "node_modules/bootstrap/dist/js/bootstrap.bundle.js",
          ],

          "dist/assets/bundles/mainscripts.bundle.js": [
            "node_modules/metismenu/dist/metisMenu.min.js",
            "js/template.js",
            "node_modules/apexcharts/dist/apexcharts.min.js",
          ],

          "dist/assets/bundles/dataTables.bundle.js": [
            "node_modules/datatables.net/js/jquery.dataTables.min.js",
            "dist/assets/plugin/datatables/dataTables.bootstrap5.min.js",
            "dist/assets/plugin/datatables/dataTables.responsive.min.js",
          ],

          "dist/assets/bundles/tableDragger.bundle.js": [
            "dist/assets/plugin/table-dragger/table-dragger.min.js",
          ],

          "dist/assets/bundles/editTable.bundle.js": [
            "dist/assets/plugin/editable-table/mindmup-editabletable.js",
          ],

          "dist/assets/bundles/jvectormap.bundle.js": [
            "dist/assets/plugin/jvectormap/jquery-jvectormap-2.0.3.min.js",
            "dist/assets/plugin/jvectormap/jquery-jvectormap-world-mill-en.js",
          ],

          "dist/assets/bundles/bootstrapDatepicker.bundle.js": [
            "node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js",
          ],

          "dist/assets/bundles/bootstrapMultiselect.bundle.js": [
            "node_modules/bootstrap-multiselect/dist/js/bootstrap-multiselect.min.js",
          ],

          "dist/assets/bundles/bootstrapTagsInput.bundle.js": [
            "node_modules/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js",
          ],

          "dist/assets/bundles/nouislider.bundle.js": [
            "node_modules/nouislider/dist/nouislider.min.js",
          ],

          "dist/assets/bundles/dropify.bundle.js": [
            "node_modules/dropify/dist/js/dropify.min.js",
          ],

          "dist/assets/bundles/jquery-knob.bundle.js": [
            "node_modules/jquery-knob/dist/jquery.knob.min.js",
          ],

          "dist/assets/bundles/fullcalendar.bundle.js": [
            "node_modules/fullcalendar/main.min.js",
          ],

          "dist/assets/bundles/round-slider.bundle.js": [
            "node_modules/round-slider/dist/roundslider.min.js",
          ],

          "dist/assets/bundles/nestable.bundle.js": [
            "node_modules/nestable/jquery.nestable.js",
          ],

          "dist/assets/bundles/rangeslider.bundle.js": [
            "node_modules/ion-rangeslider/js/ion.rangeSlider.min.js",
          ],

          "dist/assets/bundles/jstree.bundle.js": [
            "node_modules/jstree/dist/jstree.min.js",
          ],

          "dist/assets/bundles/parsleyjs.bundle.js": [
            "node_modules/parsleyjs/dist/parsley.min.js",
          ],

          "dist/assets/bundles/inputmask.bundle.js": [
            "node_modules/inputmask/dist/jquery.inputmask.min.js",
          ],

          "dist/assets/bundles/maskedinput.bundle.js": [
            "node_modules/jquery.maskedinput/src/jquery.maskedinput.js",
          ],

          "dist/assets/bundles/multiselect.bundle.js": [
            "node_modules/multiselect/js/jquery.multi-select.js",
          ],

          "dist/assets/bundles/select2.bundle.js": [
            "node_modules/Select2/select2.min.js",
          ],

          "dist/assets/bundles/jqueryValidation.bundle.js": [
            "node_modules/jquery-validation/dist/jquery.validate.min.js",
          ],

          "dist/assets/bundles/cropper.bundle.js": [
            "node_modules/cropper/dist/cropper.js",
          ],

          "dist/assets/bundles/markdown.bundle.js": [
            "node_modules/markdown/lib/markdown.js",
            "node_modules/bootstrap-markdown/js/bootstrap-markdown.js",
          ],

          "dist/assets/bundles/morris.bundle.js": [
            "node_modules/morris.js/morris.min.js",
            "node_modules/raphael/raphael.min.js",
          ],

          "dist/assets/bundles/flot.bundle.js": [
            "node_modules/jquery.flot/jquery.flot.js",
            "node_modules/jquery.flot/jquery.flot.resize.js",
            "node_modules/jquery.flot/jquery.flot.pie.js",
            "node_modules/jquery.flot/jquery.flot.categories.js",
            "node_modules/jquery.flot/jquery.flot.time.js",
            "node_modules/jquery.flot/jquery.flot.selection.js",
          ],

          "dist/assets/bundles/chartist.bundle.js": [
            "dist/assets/plugin/chartist/js/chartist.min.js",
            "dist/assets/plugin/chartist-plugin-tooltip/chartist-plugin-tooltip.min.js",
            "dist/assets/plugin/chartist-plugin-axistitle/chartist-plugin-axistitle.min.js",
            "dist/assets/plugin/chartist-plugin-legend-latest/chartist-plugin-legend.js",
            "dist/assets/plugin/chartist/Chart.bundle.js",
          ],

          "dist/assets/bundles/sparkline.bundle.js": [
            "node_modules/jquery-sparkline/jquery.sparkline.min.js",
          ],
        },
      },
    },
  });
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask("buildcss", ["sass"]);
  grunt.registerTask("buildjs", ["uglify"]);
};