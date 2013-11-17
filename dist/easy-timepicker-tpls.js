angular.module('easyTimepicker').run(['$templateCache', function($templateCache) {

  $templateCache.put('easy-timepicker.html',
    "<div class=\"dropdown easy-timepicker-container\">\n" +
    "  <div class=\"dropdown-toggle\" ng-class=\"inputContainerClass\">\n" +
    "    <input class=\"time-input\" type=\"text\" ng-model=\"time\" ng-blur=\"updateFromInput()\" ng-class=\"inputClass\"/>\n" +
    "    <span class=\"input-group-btn\" ng-if=\"showIcon\">\n" +
    "      <a class=\"btn btn-default\">\n" +
    "        <i ng-class=\"clockIconClass\"></i>\n" +
    "      </a>\n" +
    "    </span>\n" +
    "  </div>\n" +
    "  <div class=\"dropdown-menu\" ng-click=\"preventDefault($event)\">\n" +
    "    <div class=\"hours-col\" ng-class=\"widgetColClass\">\n" +
    "      <div><a class=\"btn\" ng-click=\"incrementHours()\"><i ng-class=\"incIconClass\"></i></a></div>\n" +
    "      <div class=\"hours-val\">{{ widget.hours }}</div>\n" +
    "      <div><a class=\"btn\" ng-click=\"decrementHours()\"><i ng-class=\"decIconClass\"></i></a></div>\n" +
    "    </div>\n" +
    "    <div class=\"minutes-col\" ng-class=\"widgetColClass\">\n" +
    "      <div><a class=\"btn\" ng-click=\"incrementMinutes()\"><i ng-class=\"incIconClass\"></i></a></div>\n" +
    "      <div class=\"minutes-val\">{{ widget.minutes }}</div>\n" +
    "      <div><a class=\"btn\" ng-click=\"decrementMinutes()\"><i ng-class=\"decIconClass\"></i></a></div>\n" +
    "    </div>\n" +
    "    <div class=\"meridian-col\" ng-class=\"widgetColClass\" ng-show=\"showMeridian\">\n" +
    "      <div><a class=\"btn\" ng-click=\"toggleMeridian()\"><i ng-class=\"incIconClass\"></i></a></div>\n" +
    "      <div class=\"meridian-val\" ng-click=\"toggleMeridian()\">{{ widget.meridian }}</div>\n" +
    "      <div><a class=\"btn\" ng-click=\"toggleMeridian()\"><i ng-class=\"decIconClass\"></i></a></div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );

}]);
