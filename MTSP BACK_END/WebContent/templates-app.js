angular.module('templates-app', ['home/home.tpl.html', 'library/library.tpl.html', 'result/result.tpl.html']);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"container full-width-container full-height\">\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-6 full-height\">      \n" +
    "      <h1 style=\"margin-top:0\">Parametry</h1>\n" +
    "      <form name=\"mainForm\" novalidate style=\"max-height:592px; overflow:auto\">\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "          <label for=\"salesmanInput\">Maksymalna ilosc kurierow</label>\n" +
    "          <input type=\"number\" \n" +
    "            class=\"form-control\" \n" +
    "            id=\"salesmanInput\" \n" +
    "            placeholder=\"Prosze podac maksymalna ilosc\"\n" +
    "            ng-required=\"true\"\n" +
    "            ng-class=\"{invalid: mainForm.submitted && mainForm.salesmanInput.$invalid}\"\n" +
    "            ng-minlength=\"1\"\n" +
    "            name=\"salesmanInput\"\n" +
    "            ng-maxlength=\"6\"\n" +
    "            min=\"0\"\n" +
    "            ng-model=\"mCtrl.credentials.salesmen\">\n" +
    "            <div class=\"error-container\" ng-show=\"mainForm.submitted && mainForm.salesmanInput.$invalid\">\n" +
    "              <div class=\"error\" ng-show=\"mainForm.salesmanInput.$error.required\">Prosze wypeLnic pole</div>\n" +
    "              <div class=\"error\" ng-show=\"mainForm.salesmanInput.$error.maxlength\">Prosze wpisac mniej niz 6 znakow</div>\n" +
    "              <div class=\"error\" ng-show=\"mainForm.salesmanInput.$error.number\">Prosze wpisac liczbe</div>\n" +
    "              <div class=\"error\" ng-show=\"mainForm.salesmanInput.$error.min\">Prosze wpisac dodatnia liczbe</div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "          <label for=\"salesmanDistanceInput\">Maksymalna droga kuriera</label>\n" +
    "          <input type=\"number\" \n" +
    "            class=\"form-control\" \n" +
    "            id=\"salesmanDistanceInput\" \n" +
    "            placeholder=\"Prosze podac maksymalna droge\"\n" +
    "            ng-required=\"true\"\n" +
    "            ng-class=\"{invalid: mainForm.submitted && mainForm.salesmanDistanceInput.$invalid}\"\n" +
    "            ng-minlength=\"1\"\n" +
    "            name=\"salesmanDistanceInput\"\n" +
    "            ng-maxlength=\"6\"\n" +
    "            min=\"0\"\n" +
    "            ng-model=\"mCtrl.credentials.salesmanDistance\">\n" +
    "            <div class=\"error-container\" ng-show=\"mainForm.submitted && mainForm.salesmanDistanceInput.$invalid\">\n" +
    "              <div class=\"error\" ng-show=\"mainForm.salesmanDistanceInput.$error.required\">Prosze wypeLnic pole</div>\n" +
    "              <div class=\"error\" ng-show=\"mainForm.salesmanDistanceInput.$error.maxlength\">Prosze wpisac mniej niz 6 znakow</div>\n" +
    "              <div class=\"error\" ng-show=\"mainForm.salesmanDistanceInput.$error.number\">Prosze wpisac liczbe</div>\n" +
    "              <div class=\"error\" ng-show=\"mainForm.salesmanDistanceInput.$error.min\">Prosze wpisac dodatnia liczbe</div>\n" +
    "            </div>\n" +
    "        </div>         \n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "          <label for=\"salesmanCostInput\">Koszt wyslania jednego kuriera</label>\n" +
    "          <input type=\"number\" \n" +
    "            class=\"form-control\" \n" +
    "            id=\"salesmanCostInput\" \n" +
    "            placeholder=\"Prosze podac koszt wysLania\"\n" +
    "            ng-required=\"true\"\n" +
    "            ng-class=\"{invalid: mainForm.submitted && mainForm.salesmanCostInput.$invalid}\"\n" +
    "            ng-minlength=\"1\"\n" +
    "            name=\"salesmanCostInput\"\n" +
    "            ng-maxlength=\"6\"\n" +
    "            min=\"0\"\n" +
    "            ng-model=\"mCtrl.credentials.salesmanCost\">\n" +
    "            <div class=\"error-container\" ng-show=\"mainForm.submitted && mainForm.salesmanCostInput.$invalid\">\n" +
    "              <div class=\"error\" ng-show=\"mainForm.salesmanCostInput.$error.required\">Prosze wypeLnic pole</div>\n" +
    "              <div class=\"error\" ng-show=\"mainForm.salesmanCostInput.$error.maxlength\">Prosze wpisac mniej niz 6 znakow</div>\n" +
    "              <div class=\"error\" ng-show=\"mainForm.salesmanCostInput.$error.number\">Prosze wpisac liczbe</div>\n" +
    "              <div class=\"error\" ng-show=\"mainForm.salesmanCostInput.$error.min\">Prosze wpisac dodatnia liczbe</div>\n" +
    "            </div>\n" +
    "        </div>  \n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "          <label for=\"neigbourhoods\">Ilosc sasiedztw</label>\n" +
    "          <input type=\"number\" \n" +
    "            class=\"form-control\" \n" +
    "            id=\"neigbourhoodsInput\" \n" +
    "            placeholder=\"Prosze podac ilosc sasiedztw\"\n" +
    "            ng-required=\"true\"\n" +
    "            ng-class=\"{invalid: mainForm.submitted && mainForm.neigbourhoodsInput.$invalid}\"\n" +
    "            ng-minlength=\"1\"\n" +
    "            name=\"neigbourhoodsInput\"\n" +
    "            ng-maxlength=\"6\"\n" +
    "            min=\"0\"\n" +
    "            ng-model=\"mCtrl.credentials.neighbourhoods\">\n" +
    "            <div class=\"error-container\" ng-show=\"mainForm.submitted && mainForm.neigbourhoodsInput.$invalid\">\n" +
    "              <div class=\"error\" ng-show=\"mainForm.neigbourhoodsInput.$error.required\">Prosze wypeLnic pole</div>\n" +
    "              <div class=\"error\" ng-show=\"mainForm.neigbourhoodsInput.$error.maxlength\">Prosze wpisac mniej niz 6 znakow</div>\n" +
    "              <div class=\"error\" ng-show=\"mainForm.neigbourhoodsInput.$error.number\">Prosze wpisac liczbe</div>\n" +
    "              <div class=\"error\" ng-show=\"mainForm.neigbourhoodsInput.$error.min\">Prosze wpisac dodatnia liczbe</div>\n" +
    "            </div>\n" +
    "        </div> \n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "          <label for=\"neighbourhoodsFrquencyInput\">Czestotliwosc zmiany sasiedztw</label>\n" +
    "          <input type=\"number\" \n" +
    "            class=\"form-control\" \n" +
    "            id=\"neighbourhoodsFrquencyInput\" \n" +
    "            placeholder=\"Prosze podac czestotliwosc zmiany sasiedztw\"\n" +
    "            ng-required=\"true\"\n" +
    "            ng-class=\"{invalid: mainForm.submitted && mainForm.neighbourhoodsFrquencyInput.$invalid}\"\n" +
    "            ng-minlength=\"1\"\n" +
    "            name=\"neighbourhoodsFrquencyInput\"\n" +
    "            ng-maxlength=\"6\"\n" +
    "            min=\"0\"\n" +
    "            ng-model=\"mCtrl.credentials.neighbourhoodsFrequency\">\n" +
    "            <div class=\"error-container\" ng-show=\"mainForm.submitted && mainForm.neighbourhoodsFrquencyInput.$invalid\">\n" +
    "              <div class=\"error\" ng-show=\"mainForm.neighbourhoodsFrquencyInput.$error.required\">Prosze wypeLnic pole</div>\n" +
    "              <div class=\"error\" ng-show=\"mainForm.neighbourhoodsFrquencyInput.$error.maxlength\">Prosze wpisac mniej niz 6 znakow</div>\n" +
    "              <div class=\"error\" ng-show=\"mainForm.neighbourhoodsFrquencyInput.$error.number\">Prosze wpisac liczbe</div>\n" +
    "              <div class=\"error\" ng-show=\"mainForm.neighbourhoodsFrquencyInput.$error.min\">Prosze wpisac dodatnia liczbe</div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "          <label for=\"randomSolutionInput\">Ilosc rozwiazan poczatkowych</label>\n" +
    "          <input type=\"number\" \n" +
    "            class=\"form-control\" \n" +
    "            id=\"randomSolutionInput\" \n" +
    "            placeholder=\"Prosze podac ilosc rozwiazan poczatkowych\"\n" +
    "            ng-required=\"true\"\n" +
    "            ng-class=\"{invalid: mainForm.submitted && mainForm.randomSolutionInput.$invalid}\"\n" +
    "            ng-minlength=\"1\"\n" +
    "            min=\"0\"\n" +
    "            name=\"randomSolutionInput\"\n" +
    "            ng-maxlength=\"6\"\n" +
    "            ng-model=\"mCtrl.credentials.randomSolutions\">\n" +
    "            <div class=\"error-container\" ng-show=\"mainForm.submitted && mainForm.randomSolutionInput.$invalid\">\n" +
    "              <div class=\"error\" ng-show=\"mainForm.randomSolutionInput.$error.required\">Prosze wypeLnic pole</div>\n" +
    "              <div class=\"error\" ng-show=\"mainForm.randomSolutionInput.$error.maxlength\">Prosze wpisac mniej niz 6 znakow</div>\n" +
    "              <div class=\"error\" ng-show=\"mainForm.randomSolutionInput.$error.number\">Prosze wpisac liczbe</div>\n" +
    "              <div class=\"error\" ng-show=\"mainForm.randomSolutionInput.$error.min\">Prosze wpisac dodatnia liczbe</div>\n" +
    "            </div>\n" +
    "        </div> \n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "          <label for=\"beeInput\">Ilosc pszczol na sasiedztwo</label>\n" +
    "          <input type=\"number\" \n" +
    "            class=\"form-control\" \n" +
    "            id=\"beeInput\" \n" +
    "            name=\"beeInput\"\n" +
    "            placeholder=\"Prosze podac ilosc pszczoL\"\n" +
    "            ng-class=\"{invalid: mainForm.submitted && mainForm.beeInput.$invalid}\"\n" +
    "            ng-minlength=\"1\"\n" +
    "            ng-maxlength=\"6\"\n" +
    "            min=\"0\"\n" +
    "            ng-required=\"true\"\n" +
    "            ng-model=\"mCtrl.credentials.bees\">\n" +
    "            <div class=\"error-container\" ng-show=\"mainForm.submitted && mainForm.beeInput.$invalid\">\n" +
    "              <div class=\"error\" ng-show=\"mainForm.salesmanDistanceInput.$error.required\">Prosze wypeLnic pole</div>\n" +
    "              <div class=\"error\" ng-show=\"mainForm.beeInput.$error.maxlength\">Prosze wpisac mniej niz 6 znakow</div>\n" +
    "              <div class=\"error\" ng-show=\"mainForm.beeInput.$error.number\">Prosze wpisac liczbe</div>\n" +
    "              <div class=\"error\" ng-show=\"mainForm.beeInput.$error.min\">Prosze wpisac dodatnia liczbe</div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    <div class=\"form-group\">\n" +
    "          <label for=\"normInput\">Poczatkowy rozmiar sasiedztwa</label>\n" +
    "          <input type=\"number\" \n" +
    "            class=\"form-control\" \n" +
    "            id=\"normInput\" \n" +
    "            placeholder=\"Prosze podac rozmiar sasiedztwa\"\n" +
    "            name=\"normInput\"\n" +
    "            ng-class=\"{invalid: mainForm.submitted && mainForm.normInput.$invalid}\"\n" +
    "            ng-minlength=\"1\"\n" +
    "            ng-maxlength=\"6\"\n" +
    "            min=\"0\"\n" +
    "            ng-required=\"true\"\n" +
    "            ng-model=\"mCtrl.credentials.normValue\">\n" +
    "            <div class=\"error-container\" ng-show=\"mainForm.submitted && mainForm.normInput.$invalid\">\n" +
    "              <div class=\"error\" ng-show=\"mainForm.salesmanDistanceInput.$error.required\">Prosze wypeLnic pole</div>\n" +
    "              <div class=\"error\" ng-show=\"mainForm.normInput.$error.maxlength\">Prosze wpisac mniej niz 6 znakow</div>\n" +
    "              <div class=\"error\" ng-show=\"mainForm.normInput.$error.number\">Prosze wpisac liczbe</div>\n" +
    "              <div class=\"error\" ng-show=\"mainForm.normInput.$error.min\">Prosze wpisac dodatnia liczbe</div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    \n" +
    "        <div class=\"form-group\">\n" +
    "          <label for=\"iterationInput\">Ilosc iteracji</label>\n" +
    "          <input type=\"number\" \n" +
    "            class=\"form-control\" \n" +
    "            id=\"iterationInput\" \n" +
    "            placeholder=\"Prosze podac ilosc iteracji\"\n" +
    "            name=\"iterationInput\"\n" +
    "            ng-class=\"{invalid: mainForm.submitted && mainForm.iterationInput.$invalid}\"\n" +
    "            ng-minlength=\"1\"\n" +
    "            ng-maxlength=\"6\"\n" +
    "            min=\"0\"\n" +
    "            ng-required=\"true\"\n" +
    "            ng-model=\"mCtrl.credentials.iterations\">\n" +
    "            <div class=\"error-container\" ng-show=\"mainForm.submitted && mainForm.iterationInput.$invalid\">\n" +
    "              <div class=\"error\" ng-show=\"mainForm.salesmanDistanceInput.$error.required\">Prosze wypeLnic pole</div>\n" +
    "              <div class=\"error\" ng-show=\"mainForm.iterationInput.$error.maxlength\">Prosze wpisac mniej niz 6 znakow</div>\n" +
    "              <div class=\"error\" ng-show=\"mainForm.iterationInput.$error.number\">Prosze wpisac liczbe</div>\n" +
    "              <div class=\"error\" ng-show=\"mainForm.iterationInput.$error.min\">Prosze wpisac dodatnia liczbe</div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    <div class=\"form-group\">\n" +
    "            <label for=\"lapsInput\">Ilosc powtorzen algorytmu</label>\n" +
    "            <input type=\"number\" \n" +
    "              class=\"form-control\" \n" +
    "              id=\"lapsInput\" \n" +
    "              placeholder=\"Prosze podac ilosc powtorzen algorytmu\"\n" +
    "              name=\"lapsInput\"\n" +
    "              ng-class=\"{invalid: mainForm.submitted && mainForm.lapsInput.$invalid}\"\n" +
    "              ng-minlength=\"1\"\n" +
    "              ng-maxlength=\"6\"\n" +
    "              min=\"1\"\n" +
    "              ng-required=\"true\"\n" +
    "              ng-model=\"mCtrl.credentials.laps\">\n" +
    "              <div class=\"error-container\" ng-show=\"mainForm.submitted && mainForm.lapsInput.$invalid\">\n" +
    "                <div class=\"error\" ng-show=\"mainForm.lapsInput.$error.required\">Prosze wypeLnic pole</div>\n" +
    "                <div class=\"error\" ng-show=\"mainForm.lapsInput.$error.maxlength\">Prosze wpisac mniej niz 6 znakow</div>\n" +
    "                <div class=\"error\" ng-show=\"mainForm.lapsInput.$error.number\">Prosze wpisac liczbe</div>\n" +
    "                <div class=\"error\" ng-show=\"mainForm.lapsInput.$error.min\">Prosze wpisac dodatnia liczbe</div>\n" +
    "              </div>\n" +
    "          </div>\n" +
    "        </div>    \n" +
    "      </form>      \n" +
    "    <div class=\"col-md-6 full-height\">\n" +
    "      <ui-gmap-google-map \n" +
    "        center=\"mCtrl.map.center\" \n" +
    "        zoom=\"mCtrl.map.zoom\" \n" +
    "        draggable=\"true\" \n" +
    "        options=\"mCtrl.options\" \n" +
    "        bounds=\"mCtrl.map.bounds\">\n" +
    "\n" +
    "          <ui-gmap-drawing-manager \n" +
    "            options=\"mCtrl.drawingManagerOptions\" \n" +
    "            control=\"mCtrl.drawingManagerControl\">\n" +
    "          </ui-gmap-drawing-manager>\n" +
    "\n" +
    "      </ui-gmap-google-map>\n" +
    "    </div>\n" +
    "    <button type=\"submit\" \n" +
    "        ng-click=\"mCtrl.prepareData(mainForm, mCtrl.credentials)\" \n" +
    "        class=\"btn btn-default pull-right\"\n" +
    "        style=\"margin-top: 30px;\n" +
    "              margin-right: 10px;\">\n" +
    "        Zatwierdz\n" +
    "    </button> \n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("library/library.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("library/library.tpl.html",
    "<div class=\"container full-width-container full-height\">\n" +
    "  <div class=\"row\">\n" +
    "    <form name=\"mainForm\" novalidate>\n" +
    "      <div class=\"col-md-6 full-height\">      \n" +
    "        <h1 style=\"margin-top:0\">Parametry</h1>\n" +
    "        <div style=\"max-height:592px; overflow:auto\">\n" +
    "\n" +
    "          <div class=\"form-group\">\n" +
    "            <label for=\"salesmanDistanceInput\">Maksymalna droga kuriera</label>\n" +
    "            <input type=\"number\" \n" +
    "              class=\"form-control\" \n" +
    "              id=\"salesmanDistanceInput\" \n" +
    "              placeholder=\"Prosze podac maksymalna droge\"\n" +
    "              ng-required=\"true\"\n" +
    "              ng-class=\"{invalid: mainForm.submitted && mainForm.salesmanDistanceInput.$invalid}\"\n" +
    "              ng-minlength=\"1\"\n" +
    "              name=\"salesmanDistanceInput\"\n" +
    "              ng-maxlength=\"6\"\n" +
    "              min=\"0\"\n" +
    "              ng-model=\"mCtrl.credentials.salesmanDistance\">\n" +
    "              <div class=\"error-container\" ng-show=\"mainForm.submitted && mainForm.salesmanDistanceInput.$invalid\">\n" +
    "                <div class=\"error\" ng-show=\"mainForm.salesmanDistanceInput.$error.required\">Prosze wypeLnic pole</div>\n" +
    "                <div class=\"error\" ng-show=\"mainForm.salesmanDistanceInput.$error.maxlength\">Prosze wpisac mniej niz 6 znakow</div>\n" +
    "                <div class=\"error\" ng-show=\"mainForm.salesmanDistanceInput.$error.number\">Prosze wpisac liczbe</div>\n" +
    "                <div class=\"error\" ng-show=\"mainForm.salesmanDistanceInput.$error.min\">Prosze wpisac dodatnia liczbe</div>\n" +
    "              </div>\n" +
    "          </div>         \n" +
    "\n" +
    "          <div class=\"form-group\">\n" +
    "            <label for=\"salesmanCostInput\">Koszt wyslania jednego kuriera</label>\n" +
    "            <input type=\"number\" \n" +
    "              class=\"form-control\" \n" +
    "              id=\"salesmanCostInput\" \n" +
    "              placeholder=\"Prosze podac koszt wysLania\"\n" +
    "              ng-required=\"true\"\n" +
    "              ng-class=\"{invalid: mainForm.submitted && mainForm.salesmanCostInput.$invalid}\"\n" +
    "              ng-minlength=\"1\"\n" +
    "              name=\"salesmanCostInput\"\n" +
    "              ng-maxlength=\"6\"\n" +
    "              min=\"0\"\n" +
    "              ng-model=\"mCtrl.credentials.salesmanCost\">\n" +
    "              <div class=\"error-container\" ng-show=\"mainForm.submitted && mainForm.salesmanCostInput.$invalid\">\n" +
    "                <div class=\"error\" ng-show=\"mainForm.salesmanCostInput.$error.required\">Prosze wypeLnic pole</div>\n" +
    "                <div class=\"error\" ng-show=\"mainForm.salesmanCostInput.$error.maxlength\">Prosze wpisac mniej niz 6 znakow</div>\n" +
    "                <div class=\"error\" ng-show=\"mainForm.salesmanCostInput.$error.number\">Prosze wpisac liczbe</div>\n" +
    "                <div class=\"error\" ng-show=\"mainForm.salesmanCostInput.$error.min\">Prosze wpisac dodatnia liczbe</div>\n" +
    "              </div>\n" +
    "          </div>  \n" +
    "\n" +
    "          <div class=\"form-group\">\n" +
    "            <label for=\"neigbourhoods\">Ilosc sasiedztw</label>\n" +
    "            <input type=\"number\" \n" +
    "              class=\"form-control\" \n" +
    "              id=\"neigbourhoodsInput\" \n" +
    "              placeholder=\"Prosze podac ilosc sasiedztw\"\n" +
    "              ng-required=\"true\"\n" +
    "              ng-class=\"{invalid: mainForm.submitted && mainForm.neigbourhoodsInput.$invalid}\"\n" +
    "              ng-minlength=\"1\"\n" +
    "              name=\"neigbourhoodsInput\"\n" +
    "              ng-maxlength=\"6\"\n" +
    "              min=\"0\"\n" +
    "              ng-model=\"mCtrl.credentials.neighbourhoods\">\n" +
    "              <div class=\"error-container\" ng-show=\"mainForm.submitted && mainForm.neigbourhoodsInput.$invalid\">\n" +
    "                <div class=\"error\" ng-show=\"mainForm.neigbourhoodsInput.$error.required\">Prosze wypeLnic pole</div>\n" +
    "                <div class=\"error\" ng-show=\"mainForm.neigbourhoodsInput.$error.maxlength\">Prosze wpisac mniej niz 6 znakow</div>\n" +
    "                <div class=\"error\" ng-show=\"mainForm.neigbourhoodsInput.$error.number\">Prosze wpisac liczbe</div>\n" +
    "                <div class=\"error\" ng-show=\"mainForm.neigbourhoodsInput.$error.min\">Prosze wpisac dodatnia liczbe</div>\n" +
    "              </div>\n" +
    "          </div> \n" +
    "\n" +
    "          <div class=\"form-group\">\n" +
    "            <label for=\"neighbourhoodsFrquencyInput\">Czestotliwosc zmiany sasiedztw</label>\n" +
    "            <input type=\"number\" \n" +
    "              class=\"form-control\" \n" +
    "              id=\"neighbourhoodsFrquencyInput\" \n" +
    "              placeholder=\"Prosze podac czestotliwosc zmiany sasiedztw\"\n" +
    "              ng-required=\"true\"\n" +
    "              ng-class=\"{invalid: mainForm.submitted && mainForm.neighbourhoodsFrquencyInput.$invalid}\"\n" +
    "              ng-minlength=\"1\"\n" +
    "              name=\"neighbourhoodsFrquencyInput\"\n" +
    "              ng-maxlength=\"6\"\n" +
    "              min=\"0\"\n" +
    "              ng-model=\"mCtrl.credentials.neighbourhoodsFrequency\">\n" +
    "              <div class=\"error-container\" ng-show=\"mainForm.submitted && mainForm.neighbourhoodsFrquencyInput.$invalid\">\n" +
    "                <div class=\"error\" ng-show=\"mainForm.neighbourhoodsFrquencyInput.$error.required\">Prosze wypeLnic pole</div>\n" +
    "                <div class=\"error\" ng-show=\"mainForm.neighbourhoodsFrquencyInput.$error.maxlength\">Prosze wpisac mniej niz 6 znakow</div>\n" +
    "                <div class=\"error\" ng-show=\"mainForm.neighbourhoodsFrquencyInput.$error.number\">Prosze wpisac liczbe</div>\n" +
    "                <div class=\"error\" ng-show=\"mainForm.neighbourhoodsFrquencyInput.$error.min\">Prosze wpisac dodatnia liczbe</div>\n" +
    "              </div>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"form-group\">\n" +
    "            <label for=\"randomSolutionInput\">Ilosc rozwiazan poczatkowych</label>\n" +
    "            <input type=\"number\" \n" +
    "              class=\"form-control\" \n" +
    "              id=\"randomSolutionInput\" \n" +
    "              placeholder=\"Prosze podac ilosc rozwiazan poczatkowych\"\n" +
    "              ng-required=\"true\"\n" +
    "              ng-class=\"{invalid: mainForm.submitted && mainForm.randomSolutionInput.$invalid}\"\n" +
    "              ng-minlength=\"1\"\n" +
    "              min=\"0\"\n" +
    "              name=\"randomSolutionInput\"\n" +
    "              ng-maxlength=\"6\"\n" +
    "              ng-model=\"mCtrl.credentials.randomSolutions\">\n" +
    "              <div class=\"error-container\" ng-show=\"mainForm.submitted && mainForm.randomSolutionInput.$invalid\">\n" +
    "                <div class=\"error\" ng-show=\"mainForm.randomSolutionInput.$error.required\">Prosze wypeLnic pole</div>\n" +
    "                <div class=\"error\" ng-show=\"mainForm.randomSolutionInput.$error.maxlength\">Prosze wpisac mniej niz 6 znakow</div>\n" +
    "                <div class=\"error\" ng-show=\"mainForm.randomSolutionInput.$error.number\">Prosze wpisac liczbe</div>\n" +
    "                <div class=\"error\" ng-show=\"mainForm.randomSolutionInput.$error.min\">Prosze wpisac dodatnia liczbe</div>\n" +
    "              </div>\n" +
    "          </div> \n" +
    "\n" +
    "          <div class=\"form-group\">\n" +
    "            <label for=\"beeInput\">Ilosc pszczol na sasiedztwo</label>\n" +
    "            <input type=\"number\" \n" +
    "              class=\"form-control\" \n" +
    "              id=\"beeInput\" \n" +
    "              name=\"beeInput\"\n" +
    "              placeholder=\"Prosze podac ilosc pszczoL\"\n" +
    "              ng-class=\"{invalid: mainForm.submitted && mainForm.beeInput.$invalid}\"\n" +
    "              ng-minlength=\"1\"\n" +
    "              ng-maxlength=\"6\"\n" +
    "              min=\"0\"\n" +
    "              ng-required=\"true\"\n" +
    "              ng-model=\"mCtrl.credentials.bees\">\n" +
    "              <div class=\"error-container\" ng-show=\"mainForm.submitted && mainForm.beeInput.$invalid\">\n" +
    "                <div class=\"error\" ng-show=\"mainForm.beeInput.$error.required\">Prosze wypeLnic pole</div>\n" +
    "                <div class=\"error\" ng-show=\"mainForm.beeInput.$error.maxlength\">Prosze wpisac mniej niz 6 znakow</div>\n" +
    "                <div class=\"error\" ng-show=\"mainForm.beeInput.$error.number\">Prosze wpisac liczbe</div>\n" +
    "                <div class=\"error\" ng-show=\"mainForm.beeInput.$error.min\">Prosze wpisac dodatnia liczbe</div>\n" +
    "              </div>\n" +
    "          </div>\n" +
    "      \n" +
    "      <div class=\"form-group\">\n" +
    "          <label for=\"normInput\">Poczatkowy rozmiar sasiedztwa</label>\n" +
    "          <input type=\"number\" \n" +
    "            class=\"form-control\" \n" +
    "            id=\"normInput\" \n" +
    "            placeholder=\"Prosze podac rozmiar sasiedztwa\"\n" +
    "            name=\"normInput\"\n" +
    "            ng-class=\"{invalid: mainForm.submitted && mainForm.normInput.$invalid}\"\n" +
    "            ng-minlength=\"1\"\n" +
    "            ng-maxlength=\"6\"\n" +
    "            min=\"0\"\n" +
    "            ng-required=\"true\"\n" +
    "            ng-model=\"mCtrl.credentials.normValue\">\n" +
    "            <div class=\"error-container\" ng-show=\"mainForm.submitted && mainForm.normInput.$invalid\">\n" +
    "              <div class=\"error\" ng-show=\"mainForm.normInput.$error.required\">Prosze wypeLnic pole</div>\n" +
    "              <div class=\"error\" ng-show=\"mainForm.normInput.$error.maxlength\">Prosze wpisac mniej niz 6 znakow</div>\n" +
    "              <div class=\"error\" ng-show=\"mainForm.normInput.$error.number\">Prosze wpisac liczbe</div>\n" +
    "              <div class=\"error\" ng-show=\"mainForm.normInput.$error.min\">Prosze wpisac dodatnia liczbe</div>\n" +
    "            </div>\n" +
    "        </div> \n" +
    "      \n" +
    "          <div class=\"form-group\">\n" +
    "            <label for=\"iterationInput\">Ilosc iteracji</label>\n" +
    "            <input type=\"number\" \n" +
    "              class=\"form-control\" \n" +
    "              id=\"iterationInput\" \n" +
    "              placeholder=\"Prosze podac ilosc iteracji\"\n" +
    "              name=\"iterationInput\"\n" +
    "              ng-class=\"{invalid: mainForm.submitted && mainForm.iterationInput.$invalid}\"\n" +
    "              ng-minlength=\"1\"\n" +
    "              ng-maxlength=\"6\"\n" +
    "              min=\"0\"\n" +
    "              ng-required=\"true\"\n" +
    "              ng-model=\"mCtrl.credentials.iterations\">\n" +
    "              <div class=\"error-container\" ng-show=\"mainForm.submitted && mainForm.iterationInput.$invalid\">\n" +
    "                <div class=\"error\" ng-show=\"mainForm.iterationInput.$error.required\">Prosze wypeLnic pole</div>\n" +
    "                <div class=\"error\" ng-show=\"mainForm.iterationInput.$error.maxlength\">Prosze wpisac mniej niz 6 znakow</div>\n" +
    "                <div class=\"error\" ng-show=\"mainForm.iterationInput.$error.number\">Prosze wpisac liczbe</div>\n" +
    "                <div class=\"error\" ng-show=\"mainForm.iterationInput.$error.min\">Prosze wpisac dodatnia liczbe</div>\n" +
    "              </div>\n" +
    "          </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "            <label for=\"lapsInput\">Ilosc powtorzen algorytmu</label>\n" +
    "            <input type=\"number\" \n" +
    "              class=\"form-control\" \n" +
    "              id=\"lapsInput\" \n" +
    "              placeholder=\"Prosze podac ilosc powtorzen algorytmu\"\n" +
    "              name=\"lapsInput\"\n" +
    "              ng-class=\"{invalid: mainForm.submitted && mainForm.lapsInput.$invalid}\"\n" +
    "              ng-minlength=\"1\"\n" +
    "              ng-maxlength=\"6\"\n" +
    "              min=\"1\"\n" +
    "              ng-required=\"true\"\n" +
    "              ng-model=\"mCtrl.credentials.laps\">\n" +
    "              <div class=\"error-container\" ng-show=\"mainForm.submitted && mainForm.lapsInput.$invalid\">\n" +
    "                <div class=\"error\" ng-show=\"mainForm.lapsInput.$error.required\">Prosze wypeLnic pole</div>\n" +
    "                <div class=\"error\" ng-show=\"mainForm.lapsInput.$error.maxlength\">Prosze wpisac mniej niz 6 znakow</div>\n" +
    "                <div class=\"error\" ng-show=\"mainForm.lapsInput.$error.number\">Prosze wpisac liczbe</div>\n" +
    "                <div class=\"error\" ng-show=\"mainForm.lapsInput.$error.min\">Prosze wpisac dodatnia liczbe</div>\n" +
    "              </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    \n" +
    "      <div class=\"col-md-6 full-height\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <label for=\"testInstanceInput\">Instancja testowa</label>\n" +
    "            <textarea placeholder=\"Prosze wkleic tutaj zawartosc instancji testowej\"\n" +
    "              id=\"testInstanceInput\"\n" +
    "              class=\"form-control\"                \n" +
    "              ng-class=\"{invalid: mainForm.submitted && mainForm.iterationInput.$invalid}\"\n" +
    "              ng-required=\"true\"\n" +
    "              maxlength=\"2000\"\n" +
    "              style=\"max-height: 600px; max-width:100%; height: 550px\"\n" +
    "              ng-model=\"mCtrl.credentials.tsplib\">\n" +
    "            </textarea>\n" +
    "              <div class=\"error-container\" ng-show=\"mainForm.submitted && mainForm.testInstanceInput.$invalid\">\n" +
    "                <div class=\"error\" ng-show=\"mainForm.testInstanceInput.$error.required\">Prosze wypeLnic pole</div>\n" +
    "                <div class=\"error\" ng-show=\"mainForm.testInstanceInput.$error.maxlength\">Prosze wpisac mniej niz 6 znakow</div>\n" +
    "                <div class=\"error\" ng-show=\"mainForm.testInstanceInput.$error.number\">Prosze wpisac liczbe</div>\n" +
    "                <div class=\"error\" ng-show=\"mainForm.testInstanceInput.$error.min\">Prosze wpisac dodatnia liczbe</div>\n" +
    "              </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </form>\n" +
    "    <button type=\"submit\" \n" +
    "          ng-click=\"mCtrl.prepareData(mainForm, mCtrl.credentials)\" \n" +
    "          class=\"btn btn-default pull-right\"\n" +
    "          style=\"margin-right: 10px\">\n" +
    "          Zatwierdz\n" +
    "    </button> \n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("result/result.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("result/result.tpl.html",
    "<div class=\"container full-width-container full-height\">\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-6 full-height\">      \n" +
    "      <h1 style=\"margin-top:0\">Wyniki</h1>\n" +
    "      <form name=\"mainForm\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label for=\"maxTime\">Maksymalny czas wykonania</label>\n" +
    "          <span  id=\"maxTime\" name=\"maxTime\">\n" +
    "            {{rCtrl.maxTime}}\n" +
    "          </span>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "          <label for=\"minTime\">Minimalny czas wykonania</label>\n" +
    "          <span  id=\"minTime\" name=\"minTime\">\n" +
    "            {{rCtrl.minTime}}\n" +
    "          </span>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "          <label for=\"avgTime\">sredni czas wykonania</label>\n" +
    "          <span  id=\"avgTime\" name=\"avgTime\">\n" +
    "            {{rCtrl.avgTime}}\n" +
    "          </span>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "          <label for=\"maxRoute\">Maksymalna droga</label>\n" +
    "          <span  id=\"maxRoute\" name=\"maxRoute\">\n" +
    "            {{rCtrl.maxRoute}}\n" +
    "          </span>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "          <label for=\"minRoute\">Minimalna droga</label>\n" +
    "          <span  id=\"minRoute\" name=\"minRoute\">\n" +
    "            {{rCtrl.minRoute}}\n" +
    "          </span>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "          <label for=\"avgRoute\">srednia droga</label>\n" +
    "          <span  id=\"avgRoute\" name=\"avgRoute\">\n" +
    "            {{rCtrl.avgRoute}}\n" +
    "          </span>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "          <label for=\"laps\">Ilosc powtorzen algorytmu</label>\n" +
    "          <span  id=\"laps\" name=\"laps\">\n" +
    "            {{rCtrl.laps}}\n" +
    "          </span>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\" ng-if=\"!rCtrl.mode\">\n" +
    "          <label for=\"bestRoute\">Droga</label>\n" +
    "          <div  id=\"bestRoute\" name=\"bestRoute\"\n" +
    "                style=\"overflow:auto;max-width:200px;\">\n" +
    "            {{rCtrl.bestRoute}}\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </form> \n" +
    "    </div> \n" +
    "    <div class=\"col-md-6 full-height\" ng-if=\"rCtrl.mode\">\n" +
    "      <ui-gmap-google-map \n" +
    "        center=\"rCtrl.map.center\" \n" +
    "        zoom=\"rCtrl.map.zoom\" \n" +
    "        draggable=\"true\" \n" +
    "        options=\"rCtrl.options\" \n" +
    "        bounds=\"rCtrl.map.bounds\">\n" +
    "\n" +
    "          <ui-gmap-markers\n" +
    "             models=\"rCtrl.markers\" \n" +
    "             coords=\"'coords'\" \n" +
    "             icon=\"'icon'\"\n" +
    "            >\n" +
    "          </ui-gmap-markers>\n" +
    "\n" +
    "          <ui-gmap-polylines \n" +
    "            models=\"rCtrl.polylines\" \n" +
    "              path=\"'path'\" \n" +
    "              stroke=\"'stroke'\" \n" +
    "              visible=\"'visible'\"\n" +
    "              fit=\"false\" \n" +
    "              editable=\"'editable'\" \n" +
    "              draggable=\"'draggable'\">\n" +
    "          </ui-gmap-polylines>\n" +
    "\n" +
    "      </ui-gmap-google-map>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-6 full-height\" ng-if=\"!rCtrl.mode\">\n" +
    "      <textarea id=\"testInstanceInput\"\n" +
    "              class=\"form-control\" \n" +
    "              maxlength=\"2000\"\n" +
    "              style=\"max-height: 600px; max-width:100%; height: 550px\"\n" +
    "              ng-disabled=\"true\"\n" +
    "              ng-model=\"rCtrl.tsplib\">\n" +
    "      </textarea>\n" +
    "\n" +
    "    </div>\n" +
    "  </div>  \n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-2\"></div>\n" +
    "    <div class=\"col-md-8\">\n" +
    "      <div google-chart chart=\"rCtrl.chartObject\" \n" +
    "            style=\"{{rCtrl.style}}\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-2\"></div>\n" +
    "  </div>\n" +
    "</div>");
}]);
