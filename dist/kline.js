(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define(["jquery"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("jquery")) : factory(root["$"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_19__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__control__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chart__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__indicators__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ranges__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__templates__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_sources__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chart_settings__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_providers__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__themes__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__plotters__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ctools__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__areas__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__util__ = __webpack_require__(5);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }














var ChartManager =
/*#__PURE__*/
function () {
  function ChartManager() {
    _classCallCheck(this, ChartManager);

    this._dataSources = {};
    this._dataSourceCache = {};
    this._dataProviders = {};
    this._frames = {};
    this._areas = {};
    this._timelines = {};
    this._ranges = {};
    this._plotters = {};
    this._themes = {};
    this._titles = {};
    this._frameMousePos = {};
    this._dsChartStyle = {};
    this._dragStarted = false;
    this._oldX = 0;
    this._fakeIndicators = {};
    this._captureMouseWheelDirectly = true;
    this._chart = {};
    this._chart.defaultFrame = new __WEBPACK_IMPORTED_MODULE_1__chart__["a" /* Chart */]();
    this._drawingTool = ChartManager.DrawingTool["CrossCursor"];
    this._beforeDrawingTool = this._drawingTool;
    this._language = "zh-cn";
    this._mainCanvas = null;
    this._overlayCanvas = null;
    this._mainContext = null;
    this._overlayContext = null;

    if (!ChartManager.created) {
      ChartManager.instance = this;
      ChartManager.created = true;
    }

    return ChartManager.instance;
  }

  _createClass(ChartManager, [{
    key: "redraw",
    value: function redraw(layer, refresh) {
      if (layer === undefined || refresh) {
        layer = "All";
      }

      if (layer === "All" || layer === "MainCanvas") {
        if (refresh) {
          this.getFrame("frame0").setChanged(true);
        }

        this.layout(this._mainContext, "frame0", 0, 0, this._mainCanvas.width, this._mainCanvas.height);
        this.drawMain("frame0", this._mainContext);
      }

      if (layer === "All" || layer === "OverlayCanvas") {
        this._overlayContext.clearRect(0, 0, this._overlayCanvas.width, this._overlayCanvas.height);

        this.drawOverlay("frame0", this._overlayContext);
      }
    }
  }, {
    key: "bindCanvas",
    value: function bindCanvas(layer, canvas) {
      if (layer === "main") {
        this._mainCanvas = canvas;
        this._mainContext = canvas.getContext("2d");
      } else if (layer === "overlay") {
        this._overlayCanvas = canvas;
        this._overlayContext = canvas.getContext("2d");

        if (this._captureMouseWheelDirectly) {
          $(this._overlayCanvas).bind('mousewheel', __WEBPACK_IMPORTED_MODULE_0__control__["a" /* Control */].mouseWheel);
        }
      }
    }
  }, {
    key: "getCaptureMouseWheelDirectly",
    value: function getCaptureMouseWheelDirectly() {
      return this._captureMouseWheelDirectly;
    }
  }, {
    key: "setCaptureMouseWheelDirectly",
    value: function setCaptureMouseWheelDirectly(v) {
      this._captureMouseWheelDirectly = v;
      if (v) $(this._overlayCanvas).bind('mousewheel', __WEBPACK_IMPORTED_MODULE_0__control__["a" /* Control */].mouseWheel);else $(this._overlayCanvas).unbind('mousewheel');
    }
  }, {
    key: "getChart",
    value: function getChart(nouseParam) {
      return this._chart["defaultFrame"];
    }
  }, {
    key: "init",
    value: function init() {
      delete this._ranges['frame0.k0.indic1'];
      delete this._ranges['frame0.k0.indic1Range'];
      delete this._areas['frame0.k0.indic1'];
      delete this._areas['frame0.k0.indic1Range'];
      __WEBPACK_IMPORTED_MODULE_4__templates__["a" /* DefaultTemplate */].loadTemplate("frame0.k0", "");
      this.redraw('All', true);
    }
  }, {
    key: "setCurrentDrawingTool",
    value: function setCurrentDrawingTool(paramTool) {
      this._drawingTool = ChartManager.DrawingTool[paramTool];
      this.setRunningMode(this._drawingTool);
    }
  }, {
    key: "getLanguage",
    value: function getLanguage() {
      return this._language;
    }
  }, {
    key: "setLanguage",
    value: function setLanguage(lang) {
      this._language = lang;
    }
  }, {
    key: "setThemeName",
    value: function setThemeName(frameName, themeName) {
      if (themeName === undefined) themeName = "Dark";
      var theme;

      switch (themeName) {
        case "Light":
          theme = new __WEBPACK_IMPORTED_MODULE_8__themes__["b" /* LightTheme */]();
          break;

        default:
          themeName = "Dark";
          theme = new __WEBPACK_IMPORTED_MODULE_8__themes__["a" /* DarkTheme */]();
          break;
      }

      this._themeName = themeName;
      this.setTheme(frameName, theme);
      this.getFrame(frameName).setChanged(true);
    }
  }, {
    key: "getChartStyle",
    value: function getChartStyle(dsName) {
      var chartStyle = this._dsChartStyle[dsName];
      if (chartStyle === undefined) return "CandleStick";
      return chartStyle;
    }
  }, {
    key: "setChartStyle",
    value: function setChartStyle(dsName, style) {
      if (this._dsChartStyle[dsName] === style) return;
      var areaName = dsName + ".main";
      var dpName = areaName + ".main";
      var plotterName = areaName + ".main";
      var dp, plotter;

      switch (style) {
        case "CandleStick":
        case "CandleStickHLC":
        case "OHLC":
          dp = this.getDataProvider(dpName);

          if (dp === undefined || !__WEBPACK_IMPORTED_MODULE_12__util__["a" /* Util */].isInstance(dp, __WEBPACK_IMPORTED_MODULE_7__data_providers__["b" /* MainDataProvider */])) {
            dp = new __WEBPACK_IMPORTED_MODULE_7__data_providers__["b" /* MainDataProvider */](dpName);
            this.setDataProvider(dpName, dp);
            dp.updateData();
          }

          this.setMainIndicator(dsName, __WEBPACK_IMPORTED_MODULE_6__chart_settings__["a" /* ChartSettings */].get().charts.mIndic);

          switch (style) {
            case "CandleStick":
              plotter = new __WEBPACK_IMPORTED_MODULE_9__plotters__["h" /* CandlestickPlotter */](plotterName);
              break;

            case "CandleStickHLC":
              plotter = new __WEBPACK_IMPORTED_MODULE_9__plotters__["g" /* CandlestickHLCPlotter */](plotterName);
              break;

            case "OHLC":
              plotter = new __WEBPACK_IMPORTED_MODULE_9__plotters__["E" /* OHLCPlotter */](plotterName);
              break;
          }

          this.setPlotter(plotterName, plotter);
          plotter = new __WEBPACK_IMPORTED_MODULE_9__plotters__["D" /* MinMaxPlotter */](areaName + ".decoration");
          this.setPlotter(plotter.getName(), plotter);
          break;

        case "Line":
          dp = new __WEBPACK_IMPORTED_MODULE_7__data_providers__["a" /* IndicatorDataProvider */](dpName);
          this.setDataProvider(dp.getName(), dp);
          dp.setIndicator(new __WEBPACK_IMPORTED_MODULE_2__indicators__["g" /* HLCIndicator */]());
          this.removeMainIndicator(dsName);
          plotter = new __WEBPACK_IMPORTED_MODULE_9__plotters__["y" /* IndicatorPlotter */](plotterName);
          this.setPlotter(plotterName, plotter);
          this.removePlotter(areaName + ".decoration");
          break;
      }

      this.getArea(plotter.getAreaName()).setChanged(true);
      this._dsChartStyle[dsName] = style;
    }
  }, {
    key: "setNormalMode",
    value: function setNormalMode() {
      this._drawingTool = this._beforeDrawingTool;
      $(".chart_dropdown_data").removeClass("chart_dropdown-hover");
      $("#chart_toolpanel .chart_toolpanel_button").removeClass("selected");
      $("#chart_CrossCursor").parent().addClass("selected");

      if (this._drawingTool === ChartManager.DrawingTool.Cursor) {
        this.showCursor();
        $("#mode a").removeClass("selected");
        $("#chart_toolpanel .chart_toolpanel_button").removeClass("selected");
        $("#chart_Cursor").parent().addClass("selected");
      } else {
        this.hideCursor();
      }
    }
  }, {
    key: "setRunningMode",
    value: function setRunningMode(mode) {
      var pds = this.getDataSource("frame0.k0");
      var curr_o = pds.getCurrentToolObject();

      if (curr_o !== null && curr_o.state !== __WEBPACK_IMPORTED_MODULE_10__ctools__["n" /* CToolObject */].state.AfterDraw) {
        pds.delToolObject();
      }

      if (pds.getToolObjectCount() > 10) {
        this.setNormalMode();
        return;
      }

      this._drawingTool = mode;

      if (mode === ChartManager.DrawingTool.Cursor) {
        this.showCursor();
      } else {}

      switch (mode) {
        case ChartManager.DrawingTool.Cursor:
          {
            this._beforeDrawingTool = mode;
            break;
          }

        case ChartManager.DrawingTool.ArrowLine:
          {
            pds.addToolObject(new __WEBPACK_IMPORTED_MODULE_10__ctools__["a" /* CArrowLineObject */]("frame0.k0"));
            break;
          }

        case ChartManager.DrawingTool.BandLine:
          {
            pds.addToolObject(new __WEBPACK_IMPORTED_MODULE_10__ctools__["b" /* CBandLineObject */]("frame0.k0"));
            break;
          }

        case ChartManager.DrawingTool.BiParallelLine:
          {
            pds.addToolObject(new __WEBPACK_IMPORTED_MODULE_10__ctools__["c" /* CBiParallelLineObject */]("frame0.k0"));
            break;
          }

        case ChartManager.DrawingTool.BiParallelRayLine:
          {
            pds.addToolObject(new __WEBPACK_IMPORTED_MODULE_10__ctools__["d" /* CBiParallelRayLineObject */]("frame0.k0"));
            break;
          }

        case ChartManager.DrawingTool.CrossCursor:
          {
            this._beforeDrawingTool = mode;
            break;
          }

        case ChartManager.DrawingTool.DrawFibFans:
          {
            pds.addToolObject(new __WEBPACK_IMPORTED_MODULE_10__ctools__["e" /* CFibFansObject */]("frame0.k0"));
            break;
          }

        case ChartManager.DrawingTool.DrawFibRetrace:
          {
            pds.addToolObject(new __WEBPACK_IMPORTED_MODULE_10__ctools__["f" /* CFibRetraceObject */]("frame0.k0"));
            break;
          }

        case ChartManager.DrawingTool.DrawLines:
          {
            pds.addToolObject(new __WEBPACK_IMPORTED_MODULE_10__ctools__["m" /* CStraightLineObject */]("frame0.k0"));
            break;
          }

        case ChartManager.DrawingTool.HoriRayLine:
          {
            pds.addToolObject(new __WEBPACK_IMPORTED_MODULE_10__ctools__["g" /* CHoriRayLineObject */]("frame0.k0"));
            break;
          }

        case ChartManager.DrawingTool.HoriSegLine:
          {
            pds.addToolObject(new __WEBPACK_IMPORTED_MODULE_10__ctools__["h" /* CHoriSegLineObject */]("frame0.k0"));
            break;
          }

        case ChartManager.DrawingTool.HoriStraightLine:
          {
            pds.addToolObject(new __WEBPACK_IMPORTED_MODULE_10__ctools__["i" /* CHoriStraightLineObject */]("frame0.k0"));
            break;
          }

        case ChartManager.DrawingTool.PriceLine:
          {
            pds.addToolObject(new __WEBPACK_IMPORTED_MODULE_10__ctools__["j" /* CPriceLineObject */]("frame0.k0"));
            break;
          }

        case ChartManager.DrawingTool.RayLine:
          {
            pds.addToolObject(new __WEBPACK_IMPORTED_MODULE_10__ctools__["k" /* CRayLineObject */]("frame0.k0"));
            break;
          }

        case ChartManager.DrawingTool.SegLine:
          {
            pds.addToolObject(new __WEBPACK_IMPORTED_MODULE_10__ctools__["l" /* CSegLineObject */]("frame0.k0"));
            break;
          }

        case ChartManager.DrawingTool.StraightLine:
          {
            pds.addToolObject(new __WEBPACK_IMPORTED_MODULE_10__ctools__["m" /* CStraightLineObject */]("frame0.k0"));
            break;
          }

        case ChartManager.DrawingTool.TriParallelLine:
          {
            pds.addToolObject(new __WEBPACK_IMPORTED_MODULE_10__ctools__["o" /* CTriParallelLineObject */]("frame0.k0"));
            break;
          }

        case ChartManager.DrawingTool.VertiStraightLine:
          {
            pds.addToolObject(new __WEBPACK_IMPORTED_MODULE_10__ctools__["p" /* CVertiStraightLineObject */]("frame0.k0"));
            break;
          }
      }
    }
  }, {
    key: "getTitle",
    value: function getTitle(dsName) {
      return this._titles[dsName];
    }
  }, {
    key: "setTitle",
    value: function setTitle(dsName, title) {
      this._titles[dsName] = title;
    }
  }, {
    key: "setCurrentDataSource",
    value: function setCurrentDataSource(dsName, dsAlias) {
      var cached = this.getCachedDataSource(dsAlias);

      if (cached !== undefined && cached !== null) {
        this.setDataSource(dsName, cached, true);
      } else {
        cached = new __WEBPACK_IMPORTED_MODULE_5__data_sources__["b" /* MainDataSource */](dsAlias);
        this.setDataSource(dsName, cached, true);
        this.setCachedDataSource(dsAlias, cached);
      }
    }
  }, {
    key: "getDataSource",
    value: function getDataSource(name) {
      return this._dataSources[name];
    }
  }, {
    key: "setDataSource",
    value: function setDataSource(name, ds, forceRefresh) {
      this._dataSources[name] = ds;

      if (forceRefresh) {
        this.updateData(name, null);
      }
    }
  }, {
    key: "getCachedDataSource",
    value: function getCachedDataSource(name) {
      return this._dataSourceCache[name];
    }
  }, {
    key: "setCachedDataSource",
    value: function setCachedDataSource(name, ds) {
      this._dataSourceCache[name] = ds;
    }
  }, {
    key: "getDataProvider",
    value: function getDataProvider(name) {
      return this._dataProviders[name];
    }
  }, {
    key: "setDataProvider",
    value: function setDataProvider(name, dp) {
      this._dataProviders[name] = dp;
    }
  }, {
    key: "removeDataProvider",
    value: function removeDataProvider(name) {
      delete this._dataProviders[name];
    }
  }, {
    key: "getFrame",
    value: function getFrame(name) {
      return this._frames[name];
    }
  }, {
    key: "setFrame",
    value: function setFrame(name, frame) {
      this._frames[name] = frame;
    }
  }, {
    key: "removeFrame",
    value: function removeFrame(name) {
      delete this._frames[name];
    }
  }, {
    key: "getArea",
    value: function getArea(name) {
      return this._areas[name];
    }
  }, {
    key: "setArea",
    value: function setArea(name, area) {
      this._areas[name] = area;
    }
  }, {
    key: "removeArea",
    value: function removeArea(name) {
      delete this._areas[name];
    }
  }, {
    key: "getTimeline",
    value: function getTimeline(name) {
      return this._timelines[name];
    }
  }, {
    key: "setTimeline",
    value: function setTimeline(name, timeline) {
      this._timelines[name] = timeline;
    }
  }, {
    key: "removeTimeline",
    value: function removeTimeline(name) {
      delete this._timelines[name];
    }
  }, {
    key: "getRange",
    value: function getRange(name) {
      return this._ranges[name];
    }
  }, {
    key: "setRange",
    value: function setRange(name, range) {
      this._ranges[name] = range;
    }
  }, {
    key: "removeRange",
    value: function removeRange(name) {
      delete this._ranges[name];
    }
  }, {
    key: "getPlotter",
    value: function getPlotter(name) {
      return this._plotters[name];
    }
  }, {
    key: "setPlotter",
    value: function setPlotter(name, plotter) {
      this._plotters[name] = plotter;
    }
  }, {
    key: "removePlotter",
    value: function removePlotter(name) {
      delete this._plotters[name];
    }
  }, {
    key: "getTheme",
    value: function getTheme(name) {
      return this._themes[name];
    }
  }, {
    key: "setTheme",
    value: function setTheme(name, theme) {
      this._themes[name] = theme;
    }
  }, {
    key: "getFrameMousePos",
    value: function getFrameMousePos(name, point) {
      if (this._frameMousePos[name] !== undefined) {
        point.x = this._frameMousePos[name].x;
        point.y = this._frameMousePos[name].y;
      } else {
        point.x = -1;
        point.y = -1;
      }
    }
  }, {
    key: "setFrameMousePos",
    value: function setFrameMousePos(name, px, py) {
      this._frameMousePos[name] = {
        x: px,
        y: py
      };
    }
  }, {
    key: "drawArea",
    value: function drawArea(context, area, plotterNames) {
      var areaName = area.getNameObject().getCompAt(2);

      if (areaName === "timeline") {
        if (area.getHeight() < 20) return;
      } else {
        if (area.getHeight() < 30) return;
      }

      if (area.getWidth() < 30) return;
      areaName = area.getName();
      var plotter;
      var i,
          cnt = plotterNames.length;

      for (i = 0; i < cnt; i++) {
        plotter = this._plotters[areaName + plotterNames[i]];
        if (plotter !== undefined) plotter.Draw(context);
      }
    }
  }, {
    key: "drawAreaMain",
    value: function drawAreaMain(context, area) {
      var ds = this._dataSources[area.getDataSourceName()];

      var plotterNames;
      if (ds.getDataCount() < 1) plotterNames = [".background"];else plotterNames = [".background", ".grid", ".main", ".secondary"];
      this.drawArea(context, area, plotterNames);
      area.setChanged(false);
    }
  }, {
    key: "drawAreaOverlay",
    value: function drawAreaOverlay(context, area) {
      var ds = this._dataSources[area.getDataSourceName()];

      var plotterNames;
      if (ds.getDataCount() < 1) plotterNames = [".selection"];else plotterNames = [".decoration", ".selection", ".info", ".tool"];
      this.drawArea(context, area, plotterNames);
    }
  }, {
    key: "drawMain",
    value: function drawMain(frameName, context) {
      var drawn = false;

      if (!drawn) {
        for (var it in this._areas) {
          if (this._areas[it].getFrameName() === frameName && !__WEBPACK_IMPORTED_MODULE_12__util__["a" /* Util */].isInstance(this._areas[it], __WEBPACK_IMPORTED_MODULE_11__areas__["b" /* ChartAreaGroup */])) this.drawAreaMain(context, this._areas[it]);
        }
      }

      var e;

      for (var i in this._timelines) {
        e = this._timelines[i];
        if (e.getFrameName() === frameName) e.setUpdated(false);
      }

      for (var _i in this._ranges) {
        e = this._ranges[_i];
        if (e.getFrameName() === frameName) e.setUpdated(false);
      }

      for (var _i2 in this._areas) {
        e = this._areas[_i2];
        if (e.getFrameName() === frameName) e.setChanged(false);
      }
    }
  }, {
    key: "drawOverlay",
    value: function drawOverlay(frameName, context) {
      for (var n in this._areas) {
        var area = this._areas[n];
        if (__WEBPACK_IMPORTED_MODULE_12__util__["a" /* Util */].isInstance(area, __WEBPACK_IMPORTED_MODULE_11__areas__["b" /* ChartAreaGroup */])) if (area.getFrameName() === frameName) {
          area.drawGrid(context);
        }
      }

      for (var _n in this._areas) {
        var _area = this._areas[_n];
        if (__WEBPACK_IMPORTED_MODULE_12__util__["a" /* Util */].isInstance(_area, __WEBPACK_IMPORTED_MODULE_11__areas__["b" /* ChartAreaGroup */]) === false) if (_area.getFrameName() === frameName) {
          this.drawAreaOverlay(context, _area);
        }
      }
    }
  }, {
    key: "updateData",
    value: function updateData(dsName, data) {
      var ds = this.getDataSource(dsName);

      if (ds === undefined || ds === null) {
        return;
      }

      if (data !== undefined && data !== null) {
        if (!ds.update(data)) {
          return false;
        }

        if (ds.getUpdateMode() === __WEBPACK_IMPORTED_MODULE_5__data_sources__["a" /* DataSource */].UpdateMode.DoNothing) return true;
      } else {
        ds.setUpdateMode(__WEBPACK_IMPORTED_MODULE_5__data_sources__["a" /* DataSource */].UpdateMode.Refresh);
      }

      var timeline = this.getTimeline(dsName);

      if (timeline !== undefined && timeline !== null) {
        timeline.update();
      }

      if (ds.getDataCount() < 1) {
        return true;
      }

      var dpNames = [".main", ".secondary"];
      var area, areaName;

      for (var n in this._areas) {
        area = this._areas[n];

        if (__WEBPACK_IMPORTED_MODULE_12__util__["a" /* Util */].isInstance(area, __WEBPACK_IMPORTED_MODULE_11__areas__["b" /* ChartAreaGroup */])) {
          continue;
        }

        if (area.getDataSourceName() !== dsName) {
          continue;
        }

        areaName = area.getName();

        for (var i = 0; i < dpNames.length; i++) {
          var dp = this.getDataProvider(areaName + dpNames[i]);

          if (dp !== undefined && dp !== null) {
            dp.updateData();
          }
        }
      }

      return true;
    }
  }, {
    key: "updateRange",
    value: function updateRange(dsName) {
      var ds = this.getDataSource(dsName);

      if (ds.getDataCount() < 1) {
        return;
      }

      var dpNames = [".main", ".secondary"];
      var area, areaName;

      for (var n in this._areas) {
        area = this._areas[n];
        if (__WEBPACK_IMPORTED_MODULE_12__util__["a" /* Util */].isInstance(area, __WEBPACK_IMPORTED_MODULE_11__areas__["b" /* ChartAreaGroup */])) continue;
        if (area.getDataSourceName() !== dsName) continue;
        areaName = area.getName();

        for (var i = 0; i < dpNames.length; i++) {
          var dp = this.getDataProvider(areaName + dpNames[i]);

          if (dp !== undefined && dp !== null) {
            dp.updateRange();
          }
        }

        var timeline = this.getTimeline(dsName);

        if (timeline !== undefined && timeline.getMaxItemCount() > 0) {
          var range = this.getRange(areaName);

          if (range !== undefined && range !== null) {
            range.update();
          }
        }
      }
    }
  }, {
    key: "layout",
    value: function layout(context, frameName, left, top, right, bottom) {
      var frame = this.getFrame(frameName);
      frame.measure(context, right - left, bottom - top);
      frame.layout(left, top, right, bottom);

      for (var n in this._timelines) {
        var e = this._timelines[n];
        if (e.getFrameName() === frameName) e.onLayout();
      }

      for (var _n2 in this._dataSources) {
        if (_n2.substring(0, frameName.length) === frameName) this.updateRange(_n2);
      }
    }
  }, {
    key: "SelectRange",
    value: function SelectRange(pArea, y) {
      for (var ee in this._ranges) {
        var _1 = this._ranges[ee].getAreaName();

        var _2 = pArea.getName();

        if (_1 === _2) this._ranges[ee].selectAt(y);else this._ranges[ee].unselect();
      }
    }
  }, {
    key: "scale",
    value: function scale(s) {
      if (this._highlightedFrame === null) return;

      var hiArea = this._highlightedFrame.getHighlightedArea();

      if (this.getRange(hiArea.getName()) !== undefined) {
        var dsName = hiArea.getDataSourceName();
        var timeline = this.getTimeline(dsName);

        if (timeline !== null) {
          timeline.scale(s);
          this.updateRange(dsName);
        }
      }
    }
  }, {
    key: "showCursor",
    value: function showCursor(cursor) {
      if (cursor === undefined) cursor = 'default';
      this._mainCanvas.style.cursor = cursor;
      this._overlayCanvas.style.cursor = cursor;
    }
  }, {
    key: "hideCursor",
    value: function hideCursor() {
      this._mainCanvas.style.cursor = 'none';
      this._overlayCanvas.style.cursor = 'none';
    }
  }, {
    key: "showCrossCursor",
    value: function showCrossCursor(area, x, y) {
      var e = this.getRange(area.getName());

      if (e !== undefined) {
        e.selectAt(y);
        e = this.getTimeline(area.getDataSourceName());
        if (e !== undefined) if (e.selectAt(x)) return true;
      }

      return false;
    }
  }, {
    key: "hideCrossCursor",
    value: function hideCrossCursor(exceptTimeline) {
      if (exceptTimeline !== null && exceptTimeline !== undefined) {
        for (var n in this._timelines) {
          var e = this._timelines[n];

          if (e !== exceptTimeline) {
            e.unselect();
          }
        }
      } else {
        for (var _n3 in this._timelines) {
          this._timelines[_n3].unselect();
        }
      }

      for (var _n4 in this._ranges) {
        this._ranges[_n4].unselect();
      }
    }
  }, {
    key: "clearHighlight",
    value: function clearHighlight() {
      if (this._highlightedFrame !== null && this._highlightedFrame !== undefined) {
        this._highlightedFrame.highlight(null);

        this._highlightedFrame = null;
      }
    }
  }, {
    key: "onToolMouseMove",
    value: function onToolMouseMove(frameName, x, y) {
      var ret = false;
      frameName += ".";

      for (var n in this._dataSources) {
        if (n.indexOf(frameName) === 0) {
          var ds = this._dataSources[n];
          if (__WEBPACK_IMPORTED_MODULE_12__util__["a" /* Util */].isInstance(ds, __WEBPACK_IMPORTED_MODULE_5__data_sources__["b" /* MainDataSource */])) if (ds.toolManager.acceptMouseMoveEvent(x, y)) ret = true;
        }
      }

      return ret;
    }
  }, {
    key: "onToolMouseDown",
    value: function onToolMouseDown(frameName, x, y) {
      var ret = false;
      frameName += ".";

      for (var n in this._dataSources) {
        if (n.indexOf(frameName) === 0) {
          var ds = this._dataSources[n];
          if (__WEBPACK_IMPORTED_MODULE_12__util__["a" /* Util */].isInstance(ds, __WEBPACK_IMPORTED_MODULE_5__data_sources__["b" /* MainDataSource */])) if (ds.toolManager.acceptMouseDownEvent(x, y)) ret = true;
        }
      }

      return ret;
    }
  }, {
    key: "onToolMouseUp",
    value: function onToolMouseUp(frameName, x, y) {
      var ret = false;
      frameName += ".";

      for (var n in this._dataSources) {
        if (n.indexOf(frameName) === 0) {
          var ds = this._dataSources[n];
          if (__WEBPACK_IMPORTED_MODULE_12__util__["a" /* Util */].isInstance(ds, __WEBPACK_IMPORTED_MODULE_5__data_sources__["b" /* MainDataSource */])) if (ds.toolManager.acceptMouseUpEvent(x, y)) ret = true;
        }
      }

      return ret;
    }
  }, {
    key: "onToolMouseDrag",
    value: function onToolMouseDrag(frameName, x, y) {
      var ret = false;
      frameName += ".";

      for (var n in this._dataSources) {
        if (n.indexOf(frameName) === 0) {
          var ds = this._dataSources[n];
          if (__WEBPACK_IMPORTED_MODULE_12__util__["a" /* Util */].isInstance(ds, __WEBPACK_IMPORTED_MODULE_5__data_sources__["b" /* MainDataSource */])) if (ds.toolManager.acceptMouseDownMoveEvent(x, y)) ret = true;
        }
      }

      return ret;
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(frameName, x, y, drag) {
      var frame = this.getFrame(frameName);
      if (frame === undefined) return;
      this.setFrameMousePos(frameName, x, y);
      this.hideCrossCursor();
      if (this._highlightedFrame !== frame) this.clearHighlight();

      if (this._capturingMouseArea !== null && this._capturingMouseArea !== undefined) {
        this._capturingMouseArea.onMouseMove(x, y);

        return;
      }

      var _areas = frame.contains(x, y);

      if (_areas === null) return;
      var a,
          i,
          cnt = _areas.length;

      for (i = cnt - 1; i >= 0; i--) {
        a = _areas[i];
        a = a.onMouseMove(x, y);

        if (a !== null) {
          if (!__WEBPACK_IMPORTED_MODULE_12__util__["a" /* Util */].isInstance(a, __WEBPACK_IMPORTED_MODULE_11__areas__["b" /* ChartAreaGroup */])) {
            frame.highlight(a);
            this._highlightedFrame = frame;
          }

          return;
        }
      }
    }
  }, {
    key: "onMouseLeave",
    value: function onMouseLeave(frameName, x, y, move) {
      var frame = this.getFrame(frameName);
      if (frame === undefined) return;
      this.setFrameMousePos(frameName, x, y);
      this.hideCrossCursor();
      this.clearHighlight();

      if (this._capturingMouseArea !== null && this._capturingMouseArea !== undefined) {
        this._capturingMouseArea.onMouseLeave(x, y);

        this._capturingMouseArea = null;
      }

      this._dragStarted = false;
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(frameName, x, y) {
      var frame = this.getFrame(frameName);
      if (frame === undefined) return;
      var areas = frame.contains(x, y);
      if (areas === null) return;
      var a,
          i,
          cnt = areas.length;

      for (i = cnt - 1; i >= 0; i--) {
        a = areas[i];
        a = a.onMouseDown(x, y);

        if (a !== null) {
          this._capturingMouseArea = a;
          return;
        }
      }
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp(frameName, x, y) {
      var frame = this.getFrame(frameName);
      if (frame === undefined) return;

      if (this._capturingMouseArea) {
        if (this._capturingMouseArea.onMouseUp(x, y) === null && this._dragStarted === false) {
          if (this._selectedFrame !== null && this._selectedFrame !== undefined && this._selectedFrame !== frame) this._selectedFrame.select(null);

          if (this._capturingMouseArea.isSelected()) {
            if (!this._captureMouseWheelDirectly) $(this._overlayCanvas).unbind('mousewheel');
            frame.select(null);
            this._selectedFrame = null;
          } else {
            if (this._selectedFrame !== frame) if (!this._captureMouseWheelDirectly) $(this._overlayCanvas).bind('mousewheel', __WEBPACK_IMPORTED_MODULE_0__control__["a" /* Control */].mouseWheel);
            frame.select(this._capturingMouseArea);
            this._selectedFrame = frame;
          }
        }

        this._capturingMouseArea = null;
        this._dragStarted = false;
      }
    }
  }, {
    key: "deleteToolObject",
    value: function deleteToolObject() {
      var pDPTool = this.getDataSource("frame0.k0");
      var selectObject = pDPTool.getSelectToolObjcet();
      if (selectObject !== null) pDPTool.delSelectToolObject();
      var currentObject = pDPTool.getCurrentToolObject();

      if (currentObject !== null && currentObject.getState() !== __WEBPACK_IMPORTED_MODULE_10__ctools__["n" /* CToolObject */].state.AfterDraw) {
        pDPTool.delToolObject();
      }

      this.setNormalMode();
    }
  }, {
    key: "unloadTemplate",
    value: function unloadTemplate(frameName) {
      var frame = this.getFrame(frameName);
      if (frame === undefined) return;

      for (var n in this._dataSources) {
        if (n.match(frameName + ".")) delete this._dataSources[n];
      }

      for (var _n5 in this._dataProviders) {
        if (this._dataProviders[_n5].getFrameName() === frameName) delete this._dataProviders[_n5];
      }

      delete this._frames[frameName];

      for (var _n6 in this._areas) {
        if (this._areas[_n6].getFrameName() === frameName) delete this._areas[_n6];
      }

      for (var _n7 in this._timelines) {
        if (this._timelines[_n7].getFrameName() === frameName) delete this._timelines[_n7];
      }

      for (var _n8 in this._ranges) {
        if (this._ranges[_n8].getFrameName() === frameName) delete this._ranges[_n8];
      }

      for (var _n9 in this._plotters) {
        if (this._plotters[_n9].getFrameName() === frameName) delete this._plotters[_n9];
      }

      delete this._themes[frameName];
      delete this._frameMousePos[frameName];
    }
  }, {
    key: "createIndicatorAndRange",
    value: function createIndicatorAndRange(areaName, indicName, notLoadSettings) {
      var indic, range;

      switch (indicName) {
        case "MA":
          indic = new __WEBPACK_IMPORTED_MODULE_2__indicators__["j" /* MAIndicator */]();
          range = new __WEBPACK_IMPORTED_MODULE_3__ranges__["c" /* PositiveRange */](areaName);
          break;

        case "EMA":
          indic = new __WEBPACK_IMPORTED_MODULE_2__indicators__["e" /* EMAIndicator */]();
          range = new __WEBPACK_IMPORTED_MODULE_3__ranges__["c" /* PositiveRange */](areaName);
          break;

        case "VOLUME":
          indic = new __WEBPACK_IMPORTED_MODULE_2__indicators__["s" /* VOLUMEIndicator */]();
          range = new __WEBPACK_IMPORTED_MODULE_3__ranges__["e" /* ZeroBasedPositiveRange */](areaName);
          break;

        case "MACD":
          indic = new __WEBPACK_IMPORTED_MODULE_2__indicators__["i" /* MACDIndicator */]();
          range = new __WEBPACK_IMPORTED_MODULE_3__ranges__["f" /* ZeroCenteredRange */](areaName);
          break;

        case "DMI":
          indic = new __WEBPACK_IMPORTED_MODULE_2__indicators__["d" /* DMIIndicator */]();
          range = new __WEBPACK_IMPORTED_MODULE_3__ranges__["b" /* PercentageRange */](areaName);
          break;

        case "DMA":
          indic = new __WEBPACK_IMPORTED_MODULE_2__indicators__["c" /* DMAIndicator */]();
          range = new __WEBPACK_IMPORTED_MODULE_3__ranges__["d" /* Range */](areaName);
          break;

        case "TRIX":
          indic = new __WEBPACK_IMPORTED_MODULE_2__indicators__["r" /* TRIXIndicator */]();
          range = new __WEBPACK_IMPORTED_MODULE_3__ranges__["d" /* Range */](areaName);
          break;

        case "BRAR":
          indic = new __WEBPACK_IMPORTED_MODULE_2__indicators__["b" /* BRARIndicator */]();
          range = new __WEBPACK_IMPORTED_MODULE_3__ranges__["d" /* Range */](areaName);
          break;

        case "VR":
          indic = new __WEBPACK_IMPORTED_MODULE_2__indicators__["t" /* VRIndicator */]();
          range = new __WEBPACK_IMPORTED_MODULE_3__ranges__["d" /* Range */](areaName);
          break;

        case "OBV":
          indic = new __WEBPACK_IMPORTED_MODULE_2__indicators__["l" /* OBVIndicator */]();
          range = new __WEBPACK_IMPORTED_MODULE_3__ranges__["d" /* Range */](areaName);
          break;

        case "EMV":
          indic = new __WEBPACK_IMPORTED_MODULE_2__indicators__["f" /* EMVIndicator */]();
          range = new __WEBPACK_IMPORTED_MODULE_3__ranges__["d" /* Range */](areaName);
          break;

        case "RSI":
          indic = new __WEBPACK_IMPORTED_MODULE_2__indicators__["o" /* RSIIndicator */]();
          range = new __WEBPACK_IMPORTED_MODULE_3__ranges__["b" /* PercentageRange */](areaName);
          break;

        case "WR":
          indic = new __WEBPACK_IMPORTED_MODULE_2__indicators__["u" /* WRIndicator */]();
          range = new __WEBPACK_IMPORTED_MODULE_3__ranges__["b" /* PercentageRange */](areaName);
          break;

        case "SAR":
          indic = new __WEBPACK_IMPORTED_MODULE_2__indicators__["p" /* SARIndicator */]();
          range = new __WEBPACK_IMPORTED_MODULE_3__ranges__["c" /* PositiveRange */](areaName);
          break;

        case "KDJ":
          indic = new __WEBPACK_IMPORTED_MODULE_2__indicators__["h" /* KDJIndicator */]();
          range = new __WEBPACK_IMPORTED_MODULE_3__ranges__["b" /* PercentageRange */](areaName);
          break;

        case "ROC":
          indic = new __WEBPACK_IMPORTED_MODULE_2__indicators__["n" /* ROCIndicator */]();
          range = new __WEBPACK_IMPORTED_MODULE_3__ranges__["d" /* Range */](areaName);
          break;

        case "MTM":
          indic = new __WEBPACK_IMPORTED_MODULE_2__indicators__["k" /* MTMIndicator */]();
          range = new __WEBPACK_IMPORTED_MODULE_3__ranges__["d" /* Range */](areaName);
          break;

        case "BOLL":
          indic = new __WEBPACK_IMPORTED_MODULE_2__indicators__["a" /* BOLLIndicator */]();
          range = new __WEBPACK_IMPORTED_MODULE_3__ranges__["d" /* Range */](areaName);
          break;

        case "PSY":
          indic = new __WEBPACK_IMPORTED_MODULE_2__indicators__["m" /* PSYIndicator */]();
          range = new __WEBPACK_IMPORTED_MODULE_3__ranges__["d" /* Range */](areaName);
          break;

        case "StochRSI":
          indic = new __WEBPACK_IMPORTED_MODULE_2__indicators__["q" /* STOCHRSIIndicator */]();
          range = new __WEBPACK_IMPORTED_MODULE_3__ranges__["b" /* PercentageRange */](areaName);
          break;

        default:
          return null;
      }

      if (!notLoadSettings) {
        indic.setParameters(__WEBPACK_IMPORTED_MODULE_6__chart_settings__["a" /* ChartSettings */].get().indics[indicName]);
      }

      return {
        "indic": indic,
        "range": range
      };
    }
  }, {
    key: "setMainIndicator",
    value: function setMainIndicator(dsName, indicName) {
      var areaName = dsName + ".main";
      var dp = this.getDataProvider(areaName + ".main");
      if (dp === undefined || !__WEBPACK_IMPORTED_MODULE_12__util__["a" /* Util */].isInstance(dp, __WEBPACK_IMPORTED_MODULE_7__data_providers__["b" /* MainDataProvider */])) return false;
      var indic;

      switch (indicName) {
        case "MA":
          indic = new __WEBPACK_IMPORTED_MODULE_2__indicators__["j" /* MAIndicator */]();
          break;

        case "EMA":
          indic = new __WEBPACK_IMPORTED_MODULE_2__indicators__["e" /* EMAIndicator */]();
          break;

        case "BOLL":
          indic = new __WEBPACK_IMPORTED_MODULE_2__indicators__["a" /* BOLLIndicator */]();
          break;

        case "SAR":
          indic = new __WEBPACK_IMPORTED_MODULE_2__indicators__["p" /* SARIndicator */]();
          break;

        default:
          return false;
      }

      indic.setParameters(__WEBPACK_IMPORTED_MODULE_6__chart_settings__["a" /* ChartSettings */].get().indics[indicName]);
      var indicDpName = areaName + ".secondary";
      var indicDp = this.getDataProvider(indicDpName);

      if (indicDp === undefined) {
        indicDp = new __WEBPACK_IMPORTED_MODULE_7__data_providers__["a" /* IndicatorDataProvider */](indicDpName);
        this.setDataProvider(indicDp.getName(), indicDp);
      }

      indicDp.setIndicator(indic);
      var plotter = this.getPlotter(indicDpName);

      if (plotter === undefined) {
        plotter = new __WEBPACK_IMPORTED_MODULE_9__plotters__["y" /* IndicatorPlotter */](indicDpName);
        this.setPlotter(plotter.getName(), plotter);
      }

      this.getArea(areaName).setChanged(true);
      return true;
    }
  }, {
    key: "setIndicator",
    value: function setIndicator(areaName, indicName) {
      var area = this.getArea(areaName);

      if (area === null || area === undefined || area.getNameObject().getCompAt(2) === "main") {
        return false;
      }

      var dp = this.getDataProvider(areaName + ".secondary");

      if (dp === null || dp === undefined || !__WEBPACK_IMPORTED_MODULE_12__util__["a" /* Util */].isInstance(dp, __WEBPACK_IMPORTED_MODULE_7__data_providers__["a" /* IndicatorDataProvider */])) {
        return false;
      }

      var ret = this.createIndicatorAndRange(areaName, indicName);

      if (ret === null || ret === undefined) {
        return false;
      }

      var indic = ret.indic;
      var range = ret.range;
      this.removeDataProvider(areaName + ".main");
      this.removePlotter(areaName + ".main");
      this.removeRange(areaName);
      this.removePlotter(areaName + "Range.decoration");
      dp.setIndicator(indic);
      this.setRange(areaName, range);
      range.setPaddingTop(20);
      range.setPaddingBottom(4);
      range.setMinInterval(20);

      if (__WEBPACK_IMPORTED_MODULE_12__util__["a" /* Util */].isInstance(indic, __WEBPACK_IMPORTED_MODULE_2__indicators__["s" /* VOLUMEIndicator */])) {
        var plotter = new __WEBPACK_IMPORTED_MODULE_9__plotters__["A" /* LastVolumePlotter */](areaName + "Range.decoration");
        this.setPlotter(plotter.getName(), plotter);
      } else if (__WEBPACK_IMPORTED_MODULE_12__util__["a" /* Util */].isInstance(indic, __WEBPACK_IMPORTED_MODULE_2__indicators__["a" /* BOLLIndicator */]) || __WEBPACK_IMPORTED_MODULE_12__util__["a" /* Util */].isInstance(indic, __WEBPACK_IMPORTED_MODULE_2__indicators__["p" /* SARIndicator */])) {
        var _dp = new __WEBPACK_IMPORTED_MODULE_7__data_providers__["b" /* MainDataProvider */](areaName + ".main");

        this.setDataProvider(_dp.getName(), _dp);

        _dp.updateData();

        var _plotter = new __WEBPACK_IMPORTED_MODULE_9__plotters__["E" /* OHLCPlotter */](areaName + ".main");

        this.setPlotter(_plotter.getName(), _plotter);
      }

      return true;
    }
  }, {
    key: "removeMainIndicator",
    value: function removeMainIndicator(dsName) {
      var areaName = dsName + ".main";
      var indicDpName = areaName + ".secondary";
      var indicDp = this.getDataProvider(indicDpName);
      if (indicDp === undefined || !__WEBPACK_IMPORTED_MODULE_12__util__["a" /* Util */].isInstance(indicDp, __WEBPACK_IMPORTED_MODULE_7__data_providers__["a" /* IndicatorDataProvider */])) return;
      this.removeDataProvider(indicDpName);
      this.removePlotter(indicDpName);
      this.getArea(areaName).setChanged(true);
    }
  }, {
    key: "removeIndicator",
    value: function removeIndicator(areaName) {
      var area = this.getArea(areaName);
      if (area === undefined || area.getNameObject().getCompAt(2) === "main") return;
      var dp = this.getDataProvider(areaName + ".secondary");
      if (dp === undefined || !__WEBPACK_IMPORTED_MODULE_12__util__["a" /* Util */].isInstance(dp, __WEBPACK_IMPORTED_MODULE_7__data_providers__["a" /* IndicatorDataProvider */])) return;
      var rangeAreaName = areaName + "Range";
      var rangeArea = this.getArea(rangeAreaName);
      if (rangeArea === undefined) return;
      var tableLayout = this.getArea(area.getDataSourceName() + ".charts");
      if (tableLayout === undefined) return;
      tableLayout.removeArea(area);
      this.removeArea(areaName);
      tableLayout.removeArea(rangeArea);
      this.removeArea(rangeAreaName);

      for (var n in this._dataProviders) {
        if (this._dataProviders[n].getAreaName() === areaName) this.removeDataProvider(n);
      }

      for (var _n10 in this._ranges) {
        if (this._ranges[_n10].getAreaName() === areaName) this.removeRange(_n10);
      }

      for (var _n11 in this._plotters) {
        if (this._plotters[_n11].getAreaName() === areaName) this.removePlotter(_n11);
      }

      for (var _n12 in this._plotters) {
        if (this._plotters[_n12].getAreaName() === rangeAreaName) this.removePlotter(_n12);
      }
    }
  }, {
    key: "getIndicatorParameters",
    value: function getIndicatorParameters(indicName) {
      var indic = this._fakeIndicators[indicName];

      if (indic === undefined) {
        var ret = this.createIndicatorAndRange("", indicName);
        if (ret === null) return null;
        this._fakeIndicators[indicName] = indic = ret.indic;
      }

      var params = [];
      var i,
          cnt = indic.getParameterCount();

      for (i = 0; i < cnt; i++) {
        params.push(indic.getParameterAt(i));
      }

      return params;
    }
  }, {
    key: "setIndicatorParameters",
    value: function setIndicatorParameters(indicName, params) {
      var n, indic;

      for (n in this._dataProviders) {
        var dp = this._dataProviders[n];
        if (__WEBPACK_IMPORTED_MODULE_12__util__["a" /* Util */].isInstance(dp, __WEBPACK_IMPORTED_MODULE_7__data_providers__["a" /* IndicatorDataProvider */]) === false) continue;
        indic = dp.getIndicator();

        if (indic.getName() === indicName) {
          indic.setParameters(params);
          dp.refresh();
          this.getArea(dp.getAreaName()).setChanged(true);
        }
      }

      indic = this._fakeIndicators[indicName];

      if (indic === undefined) {
        var ret = this.createIndicatorAndRange("", indicName, true);
        if (ret === null) return;
        this._fakeIndicators[indicName] = indic = ret.indic;
      }

      indic.setParameters(params);
    }
  }, {
    key: "getIndicatorAreaName",
    value: function getIndicatorAreaName(dsName, index) {
      var tableLayout = this.getArea(dsName + ".charts");
      var cnt = tableLayout.getAreaCount() >> 1;
      if (index < 0 || index >= cnt) return "";
      return tableLayout.getAreaAt(index << 1).getName();
    }
  }]);

  return ChartManager;
}();
ChartManager.DrawingTool = {
  Cursor: 0,
  CrossCursor: 1,
  DrawLines: 2,
  DrawFibRetrace: 3,
  DrawFibFans: 4,
  SegLine: 5,
  StraightLine: 6,
  ArrowLine: 7,
  RayLine: 8,
  HoriStraightLine: 9,
  HoriRayLine: 10,
  HoriSegLine: 11,
  VertiStraightLine: 12,
  PriceLine: 13,
  BiParallelLine: 14,
  BiParallelRayLine: 15,
  TriParallelLine: 16,
  BandLine: 17
};
ChartManager.created = false;
ChartManager.instance = null;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NamedObject; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cname__ = __webpack_require__(15);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var NamedObject =
/*#__PURE__*/
function () {
  function NamedObject(name) {
    _classCallCheck(this, NamedObject);

    this._name = name;
    this._nameObj = new __WEBPACK_IMPORTED_MODULE_0__cname__["a" /* CName */](name);
  }

  _createClass(NamedObject, [{
    key: "getFrameName",
    value: function getFrameName() {
      return this._nameObj.getName(0);
    }
  }, {
    key: "getDataSourceName",
    value: function getDataSourceName() {
      return this._nameObj.getName(1);
    }
  }, {
    key: "getAreaName",
    value: function getAreaName() {
      return this._nameObj.getName(2);
    }
  }, {
    key: "getName",
    value: function getName() {
      return this._nameObj.getName(-1);
    }
  }, {
    key: "getNameObject",
    value: function getNameObject() {
      return this._nameObj;
    }
  }, {
    key: "getRectCrossPt",
    value: function getRectCrossPt(rect, startPt, endPt) {
      var crossPt;
      var firstPt = {
        x: -1,
        y: -1
      };
      var secondPt = {
        x: -1,
        y: -1
      };
      var xdiff = endPt.x - startPt.x;
      var ydiff = endPt.y - startPt.y;

      if (Math.abs(xdiff) < 2) {
        firstPt = {
          x: startPt.x,
          y: rect.top
        };
        secondPt = {
          x: endPt.x,
          y: rect.bottom
        };
        crossPt = [firstPt, secondPt];
        return crossPt;
      }

      var k = ydiff / xdiff;
      secondPt.x = rect.right;
      secondPt.y = startPt.y + (rect.right - startPt.x) * k;
      firstPt.x = rect.left;
      firstPt.y = startPt.y + (rect.left - startPt.x) * k;
      crossPt = [firstPt, secondPt];
      return crossPt;
    }
  }]);

  return NamedObject;
}();

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MainDataSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__named_object__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ctool_manager__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__kline__ = __webpack_require__(3);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var DataSource =
/*#__PURE__*/
function (_NamedObject) {
  _inherits(DataSource, _NamedObject);

  function DataSource(name) {
    _classCallCheck(this, DataSource);

    return _possibleConstructorReturn(this, _getPrototypeOf(DataSource).call(this, name));
  }

  _createClass(DataSource, [{
    key: "getUpdateMode",
    value: function getUpdateMode() {
      return this._updateMode;
    }
  }, {
    key: "setUpdateMode",
    value: function setUpdateMode(mode) {
      this._updateMode = mode;
    }
  }, {
    key: "getCacheSize",
    value: function getCacheSize() {
      return 0;
    }
  }, {
    key: "getDataCount",
    value: function getDataCount() {
      return 0;
    }
  }, {
    key: "getDataAt",
    value: function getDataAt(index) {
      return this._dataItems[index];
    }
  }]);

  return DataSource;
}(__WEBPACK_IMPORTED_MODULE_0__named_object__["a" /* NamedObject */]);
DataSource.UpdateMode = {
  DoNothing: 0,
  Refresh: 1,
  Update: 2,
  Append: 3
};
var MainDataSource =
/*#__PURE__*/
function (_DataSource) {
  _inherits(MainDataSource, _DataSource);

  function MainDataSource(name) {
    var _this;

    _classCallCheck(this, MainDataSource);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MainDataSource).call(this, name));
    _this._erasedCount = 0;
    _this._dataItems = [];
    _this._decimalDigits = 0;
    _this.toolManager = new __WEBPACK_IMPORTED_MODULE_1__ctool_manager__["a" /* CToolManager */](name);
    return _this;
  }

  _createClass(MainDataSource, [{
    key: "getCacheSize",
    value: function getCacheSize() {
      return this._dataItems.length;
    }
  }, {
    key: "getDataCount",
    value: function getDataCount() {
      return this._dataItems.length;
    }
  }, {
    key: "getUpdatedCount",
    value: function getUpdatedCount() {
      return this._updatedCount;
    }
  }, {
    key: "getAppendedCount",
    value: function getAppendedCount() {
      return this._appendedCount;
    }
  }, {
    key: "getErasedCount",
    value: function getErasedCount() {
      return this._erasedCount;
    }
  }, {
    key: "getDecimalDigits",
    value: function getDecimalDigits() {
      return this._decimalDigits;
    }
  }, {
    key: "calcDecimalDigits",
    value: function calcDecimalDigits(v) {
      var str = "" + v;
      var i = str.indexOf('.');

      if (i < 0) {
        return 0;
      }

      return str.length - 1 - i;
    }
  }, {
    key: "getLastDate",
    value: function getLastDate() {
      var count = this.getDataCount();

      if (count < 1) {
        return -1;
      }

      return this.getDataAt(count - 1).date;
    }
  }, {
    key: "getDataAt",
    value: function getDataAt(index) {
      return this._dataItems[index];
    }
  }, {
    key: "update",
    value: function update(data) {
      this._updatedCount = 0;
      this._appendedCount = 0;
      this._erasedCount = 0;
      var len = this._dataItems.length;

      if (len > 0) {
        var lastIndex = len - 1;
        var lastItem = this._dataItems[lastIndex];

        var _e,
            _i,
            _cnt = data.length;

        for (_i = 0; _i < _cnt; _i++) {
          _e = data[_i];

          if (_e[0] === lastItem.date) {
            if (lastItem.open === _e[1] && lastItem.high === _e[2] && lastItem.low === _e[3] && lastItem.close === _e[4] && lastItem.volume === _e[5]) {
              this.setUpdateMode(DataSource.UpdateMode.DoNothing);
            } else {
              this.setUpdateMode(DataSource.UpdateMode.Update);
              this._dataItems[lastIndex] = {
                date: _e[0],
                open: _e[1],
                high: _e[2],
                low: _e[3],
                close: _e[4],
                volume: _e[5]
              };
              this._updatedCount++;
            }

            _i++;

            if (_i < _cnt) {
              this.setUpdateMode(DataSource.UpdateMode.Append);

              for (; _i < _cnt; _i++, this._appendedCount++) {
                _e = data[_i];

                this._dataItems.push({
                  date: _e[0],
                  open: _e[1],
                  high: _e[2],
                  low: _e[3],
                  close: _e[4],
                  volume: _e[5]
                });
              }
            }

            return true;
          }
        }

        if (_cnt < __WEBPACK_IMPORTED_MODULE_2__kline__["a" /* default */].instance.limit) {
          this.setUpdateMode(DataSource.UpdateMode.DoNothing);
          return false;
        }
      }

      this.setUpdateMode(DataSource.UpdateMode.Refresh);
      this._dataItems = [];
      var d,
          n,
          e,
          i,
          cnt = data.length;

      for (i = 0; i < cnt; i++) {
        e = data[i];

        for (n = 1; n <= 4; n++) {
          d = this.calcDecimalDigits(e[n]);
          if (this._decimalDigits < d) this._decimalDigits = d;
        }

        this._dataItems.push({
          date: e[0],
          open: e[1],
          high: e[2],
          low: e[3],
          close: e[4],
          volume: e[5]
        });
      }

      return true;
    }
  }, {
    key: "select",
    value: function select(id) {
      this.toolManager.selecedObject = id;
    }
  }, {
    key: "unselect",
    value: function unselect() {
      this.toolManager.selecedObject = -1;
    }
  }, {
    key: "addToolObject",
    value: function addToolObject(toolObject) {
      this.toolManager.addToolObject(toolObject);
    }
  }, {
    key: "delToolObject",
    value: function delToolObject() {
      this.toolManager.delCurrentObject();
    }
  }, {
    key: "getToolObject",
    value: function getToolObject(index) {
      return this.toolManager.getToolObject(index);
    }
  }, {
    key: "getToolObjectCount",
    value: function getToolObjectCount() {
      return this.toolManager.toolObjects.length;
    }
  }, {
    key: "getCurrentToolObject",
    value: function getCurrentToolObject() {
      return this.toolManager.getCurrentObject();
    }
  }, {
    key: "getSelectToolObjcet",
    value: function getSelectToolObjcet() {
      return this.toolManager.getSelectedObject();
    }
  }, {
    key: "delSelectToolObject",
    value: function delSelectToolObject() {
      this.toolManager.delSelectedObject();
    }
  }]);

  return MainDataSource;
}(DataSource);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Kline; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__control__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__kline_trade__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chart_manager__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chart_settings__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__templates__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__css_main_css__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__css_main_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__css_main_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__view_tpl_html__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__view_tpl_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__view_tpl_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }










var Kline =
/*#__PURE__*/
function () {
  function Kline(option) {
    _classCallCheck(this, Kline);

    this.element = "#kline_container";
    this.chartMgr = null;
    this.G_HTTP_REQUEST = null;
    this.timer = null;
    this.buttonDown = false;
    this.init = false;
    this.requestParam = "";
    this.data = {};
    this.width = 1200;
    this.height = 650;
    this.symbol = "";
    this.symbolName = "";
    this.range = null;
    this.url = "";
    this.limit = 1000;
    this.type = "poll";
    this.subscribePath = "";
    this.sendPath = "";
    this.stompClient = null;
    this.intervalTime = 5000;
    this.debug = true;
    this.language = "zh-cn";
    this.theme = "dark";
    this.ranges = ["1w", "1d", "1h", "30m", "15m", "5m", "1m", "line"];
    this.showTrade = true;
    this.tradeWidth = 250;
    this.socketConnected = false;
    this.enableSockjs = true;
    this.reverseColor = false;
    this.isSized = false;
    this.paused = false;
    this.subscribed = null;
    this.periodMap = {
      "01w": 7 * 86400 * 1000,
      "03d": 3 * 86400 * 1000,
      "01d": 86400 * 1000,
      "12h": 12 * 3600 * 1000,
      "06h": 6 * 3600 * 1000,
      "04h": 4 * 3600 * 1000,
      "02h": 2 * 3600 * 1000,
      "01h": 3600 * 1000,
      "30m": 30 * 60 * 1000,
      "15m": 15 * 60 * 1000,
      "05m": 5 * 60 * 1000,
      "03m": 3 * 60 * 1000,
      "01m": 60 * 1000,
      "line": 60 * 1000
    };
    this.tagMapPeriod = {
      "1w": "01w",
      "3d": "03d",
      "1d": "01d",
      "12h": "12h",
      "6h": "06h",
      "4h": "04h",
      "2h": "02h",
      "1h": "01h",
      "30m": "30m",
      "15m": "15m",
      "5m": "05m",
      "3m": "03m",
      "1m": "01m",
      "line": "line"
    };
    Object.assign(this, option);

    if (!Kline.created) {
      Kline.instance = this;
      Kline.created = true;
    }

    return Kline.instance;
  }
  /*********************************************
   * Methods
   *********************************************/


  _createClass(Kline, [{
    key: "draw",
    value: function draw() {
      Kline.trade = new __WEBPACK_IMPORTED_MODULE_1__kline_trade__["a" /* KlineTrade */]();
      Kline.chartMgr = new __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */]();
      var view = __WEBPACK_IMPORTED_MODULE_7_jquery___default.a.parseHTML(__WEBPACK_IMPORTED_MODULE_6__view_tpl_html___default.a);

      for (var k in this.ranges) {
        var res = __WEBPACK_IMPORTED_MODULE_7_jquery___default()(view).find('[name="' + this.ranges[k] + '"]');
        res.each(function (i, e) {
          __WEBPACK_IMPORTED_MODULE_7_jquery___default()(e).attr("style", "display:inline-block");
        });
      }

      __WEBPACK_IMPORTED_MODULE_7_jquery___default()(this.element).html(view);
      setInterval(__WEBPACK_IMPORTED_MODULE_0__control__["a" /* Control */].refreshFunction, this.intervalTime);

      if (this.type === "stomp") {
        __WEBPACK_IMPORTED_MODULE_0__control__["a" /* Control */].socketConnect();
      }

      this.registerMouseEvent();
      __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.bindCanvas("main", document.getElementById("chart_mainCanvas"));
      __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.bindCanvas("overlay", document.getElementById("chart_overlayCanvas"));
      __WEBPACK_IMPORTED_MODULE_0__control__["a" /* Control */].refreshTemplate();
      __WEBPACK_IMPORTED_MODULE_0__control__["a" /* Control */].onSize(this.width, this.height);
      __WEBPACK_IMPORTED_MODULE_0__control__["a" /* Control */].readCookie();
      this.setTheme(this.theme);
      this.setLanguage(this.language);
      __WEBPACK_IMPORTED_MODULE_7_jquery___default()(this.element).css({
        visibility: "visible"
      });
    }
  }, {
    key: "resize",
    value: function resize(width, height) {
      this.width = width;
      this.height = height;
      __WEBPACK_IMPORTED_MODULE_0__control__["a" /* Control */].onSize(this.width, this.height);
    }
  }, {
    key: "setSymbol",
    value: function setSymbol(symbol, symbolName) {
      this.symbol = symbol;
      this.symbolName = symbolName;
      __WEBPACK_IMPORTED_MODULE_0__control__["a" /* Control */].switchSymbol(symbol);
      this.onSymbolChange(symbol, symbolName);
    }
  }, {
    key: "setTheme",
    value: function setTheme(style) {
      this.theme = style;
      __WEBPACK_IMPORTED_MODULE_0__control__["a" /* Control */].switchTheme(style);
    }
  }, {
    key: "setLanguage",
    value: function setLanguage(lang) {
      this.language = lang;
      __WEBPACK_IMPORTED_MODULE_0__control__["a" /* Control */].chartSwitchLanguage(lang);
    }
  }, {
    key: "setShowTrade",
    value: function setShowTrade(isShow) {
      this.showTrade = isShow;

      if (isShow) {
        __WEBPACK_IMPORTED_MODULE_7_jquery___default()(".trade_container").show();
      } else {
        __WEBPACK_IMPORTED_MODULE_7_jquery___default()(".trade_container").hide();
      }

      __WEBPACK_IMPORTED_MODULE_0__control__["a" /* Control */].onSize(this.width, this.height);
    }
  }, {
    key: "toggleTrade",
    value: function toggleTrade() {
      if (!this.showTrade) {
        this.showTrade = true;
        __WEBPACK_IMPORTED_MODULE_7_jquery___default()(".trade_container").show();
      } else {
        this.showTrade = false;
        __WEBPACK_IMPORTED_MODULE_7_jquery___default()(".trade_container").hide();
      }

      __WEBPACK_IMPORTED_MODULE_0__control__["a" /* Control */].onSize(this.width, this.height);
    }
  }, {
    key: "setIntervalTime",
    value: function setIntervalTime(intervalTime) {
      this.intervalTime = intervalTime;

      if (this.debug) {
        console.log('DEBUG: interval time changed to ' + intervalTime);
      }
    }
  }, {
    key: "pause",
    value: function pause() {
      if (this.debug) {
        console.log('DEBUG: kline paused');
      }

      this.paused = true;
    }
  }, {
    key: "resend",
    value: function resend() {
      if (this.debug) {
        console.log('DEBUG: kline continue');
      }

      this.paused = false;
      __WEBPACK_IMPORTED_MODULE_0__control__["a" /* Control */].requestData(true);
    }
  }, {
    key: "connect",
    value: function connect() {
      if (this.type !== 'stomp') {
        if (this.debug) {
          console.log('DEBUG: this is for stomp type');
        }

        return;
      }

      __WEBPACK_IMPORTED_MODULE_0__control__["a" /* Control */].socketConnect();
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      if (this.type !== 'stomp') {
        if (this.debug) {
          console.log('DEBUG: this is for stomp type');
        }

        return;
      }

      if (this.stompClient) {
        this.stompClient.disconnect();
        this.socketConnected = false;
      }

      if (this.debug) {
        console.log('DEBUG: socket disconnected');
      }
    }
    /*********************************************
     * Events
     *********************************************/

  }, {
    key: "onResize",
    value: function onResize(width, height) {
      if (this.debug) {
        console.log("DEBUG: chart resized to width: " + width + " height: " + height);
      }
    }
  }, {
    key: "onLangChange",
    value: function onLangChange(lang) {
      if (this.debug) {
        console.log("DEBUG: language changed to " + lang);
      }
    }
  }, {
    key: "onSymbolChange",
    value: function onSymbolChange(symbol, symbolName) {
      if (this.debug) {
        console.log("DEBUG: symbol changed to " + symbol + " " + symbolName);
      }
    }
  }, {
    key: "onThemeChange",
    value: function onThemeChange(theme) {
      if (this.debug) {
        console.log("DEBUG: themes changed to : " + theme);
      }
    }
  }, {
    key: "onRangeChange",
    value: function onRangeChange(range) {
      if (this.debug) {
        console.log("DEBUG: range changed to " + range);
      }
    }
  }, {
    key: "registerMouseEvent",
    value: function registerMouseEvent() {
      __WEBPACK_IMPORTED_MODULE_7_jquery___default()(document).ready(function () {
        function __resize() {
          if (navigator.userAgent.indexOf('Firefox') >= 0) {
            setTimeout(function () {
              __WEBPACK_IMPORTED_MODULE_0__control__["a" /* Control */].onSize(this.width, this.height);
            }, 200);
          } else {
            __WEBPACK_IMPORTED_MODULE_0__control__["a" /* Control */].onSize(this.width, this.height);
          }
        }

        __WEBPACK_IMPORTED_MODULE_7_jquery___default()('#chart_overlayCanvas').bind("contextmenu", function (e) {
          e.cancelBubble = true;
          e.returnValue = false;
          e.preventDefault();
          e.stopPropagation();
          return false;
        });
        __WEBPACK_IMPORTED_MODULE_7_jquery___default()(".chart_container .chart_dropdown .chart_dropdown_t").mouseover(function () {
          var container = __WEBPACK_IMPORTED_MODULE_7_jquery___default()(".chart_container");
          var title = __WEBPACK_IMPORTED_MODULE_7_jquery___default()(this);
          var dropdown = title.next();
          var containerLeft = container.offset().left;
          var titleLeft = title.offset().left;
          var containerWidth = container.width();
          var titleWidth = title.width();
          var dropdownWidth = dropdown.width();
          var d = (dropdownWidth - titleWidth) / 2 << 0;

          if (titleLeft - d < containerLeft + 4) {
            d = titleLeft - containerLeft - 4;
          } else if (titleLeft + titleWidth + d > containerLeft + containerWidth - 4) {
            d += titleLeft + titleWidth + d - (containerLeft + containerWidth - 4) + 19;
          } else {
            d += 4;
          }

          dropdown.css({
            "margin-left": -d
          });
          title.addClass("chart_dropdown-hover");
          dropdown.addClass("chart_dropdown-hover");
        }).mouseout(function () {
          __WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).next().removeClass("chart_dropdown-hover");
          __WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).removeClass("chart_dropdown-hover");
        });
        __WEBPACK_IMPORTED_MODULE_7_jquery___default()(".chart_dropdown_data").mouseover(function () {
          __WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).addClass("chart_dropdown-hover");
          __WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).prev().addClass("chart_dropdown-hover");
        }).mouseout(function () {
          __WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).prev().removeClass("chart_dropdown-hover");
          __WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).removeClass("chart_dropdown-hover");
        });
        __WEBPACK_IMPORTED_MODULE_7_jquery___default()("#chart_btn_parameter_settings").click(function () {
          __WEBPACK_IMPORTED_MODULE_7_jquery___default()('#chart_parameter_settings').addClass("clicked");
          __WEBPACK_IMPORTED_MODULE_7_jquery___default()(".chart_dropdown_data").removeClass("chart_dropdown-hover");
          __WEBPACK_IMPORTED_MODULE_7_jquery___default()("#chart_parameter_settings").find("th").each(function () {
            var name = __WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).html();
            var index = 0;
            var tmp = __WEBPACK_IMPORTED_MODULE_3__chart_settings__["a" /* ChartSettings */].get();
            var value = tmp.indics[name];
            __WEBPACK_IMPORTED_MODULE_7_jquery___default()(this.nextElementSibling).find("input").each(function () {
              if (value !== null && index < value.length) {
                __WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).val(value[index]);
              }

              index++;
            });
          });
        });
        __WEBPACK_IMPORTED_MODULE_7_jquery___default()("#close_settings").click(function () {
          __WEBPACK_IMPORTED_MODULE_7_jquery___default()('#chart_parameter_settings').removeClass("clicked");
        });
        __WEBPACK_IMPORTED_MODULE_7_jquery___default()(".chart_container .chart_toolbar_tabgroup a").click(function () {
          __WEBPACK_IMPORTED_MODULE_0__control__["a" /* Control */].switchPeriod(__WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).parent().attr('name'));
        });
        __WEBPACK_IMPORTED_MODULE_7_jquery___default()("#chart_toolbar_periods_vert ul a").click(function () {
          __WEBPACK_IMPORTED_MODULE_0__control__["a" /* Control */].switchPeriod(__WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).parent().attr('name'));
        });
        __WEBPACK_IMPORTED_MODULE_7_jquery___default()(".market_chooser ul a").click(function () {
          __WEBPACK_IMPORTED_MODULE_0__control__["a" /* Control */].switchSymbol(__WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).attr('name'));
        });
        __WEBPACK_IMPORTED_MODULE_7_jquery___default()('#chart_show_tools').click(function () {
          if (__WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).hasClass('selected')) {
            __WEBPACK_IMPORTED_MODULE_0__control__["a" /* Control */].switchTools('off');
          } else {
            __WEBPACK_IMPORTED_MODULE_0__control__["a" /* Control */].switchTools('on');
          }
        });
        __WEBPACK_IMPORTED_MODULE_7_jquery___default()("#chart_toolpanel .chart_toolpanel_button").click(function () {
          __WEBPACK_IMPORTED_MODULE_7_jquery___default()(".chart_dropdown_data").removeClass("chart_dropdown-hover");
          __WEBPACK_IMPORTED_MODULE_7_jquery___default()("#chart_toolpanel .chart_toolpanel_button").removeClass("selected");
          __WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).addClass("selected");
          var name = __WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).children().attr('name');
          Kline.instance.chartMgr.setRunningMode(__WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].DrawingTool[name]);
        });
        __WEBPACK_IMPORTED_MODULE_7_jquery___default()('#chart_show_indicator').click(function () {
          if (__WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).hasClass('selected')) {
            __WEBPACK_IMPORTED_MODULE_0__control__["a" /* Control */].switchIndic('off');
          } else {
            __WEBPACK_IMPORTED_MODULE_0__control__["a" /* Control */].switchIndic('on');
          }
        });
        __WEBPACK_IMPORTED_MODULE_7_jquery___default()("#chart_tabbar li a").click(function () {
          __WEBPACK_IMPORTED_MODULE_7_jquery___default()("#chart_tabbar li a").removeClass('selected');
          __WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).addClass('selected');
          var name = __WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).attr('name');
          var tmp = __WEBPACK_IMPORTED_MODULE_3__chart_settings__["a" /* ChartSettings */].get();
          tmp.charts.indics[1] = name;
          __WEBPACK_IMPORTED_MODULE_3__chart_settings__["a" /* ChartSettings */].save();
          if (__WEBPACK_IMPORTED_MODULE_4__templates__["b" /* Template */].displayVolume === false) __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.getChart().setIndicator(1, name);else __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.getChart().setIndicator(2, name);
        });
        __WEBPACK_IMPORTED_MODULE_7_jquery___default()("#chart_select_chart_style a").click(function () {
          __WEBPACK_IMPORTED_MODULE_7_jquery___default()("#chart_select_chart_style a").removeClass('selected');
          __WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).addClass("selected");
          var tmp = __WEBPACK_IMPORTED_MODULE_3__chart_settings__["a" /* ChartSettings */].get();
          tmp.charts.chartStyle = __WEBPACK_IMPORTED_MODULE_7_jquery___default()(this)[0].innerHTML;
          __WEBPACK_IMPORTED_MODULE_3__chart_settings__["a" /* ChartSettings */].save();
          var mgr = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance;
          mgr.setChartStyle("frame0.k0", __WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).html());
          mgr.redraw();
        });
        __WEBPACK_IMPORTED_MODULE_7_jquery___default()('#chart_dropdown_themes li').click(function () {
          __WEBPACK_IMPORTED_MODULE_7_jquery___default()('#chart_dropdown_themes li a').removeClass('selected');
          var name = __WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).attr('name');

          if (name === 'chart_themes_dark') {
            __WEBPACK_IMPORTED_MODULE_0__control__["a" /* Control */].switchTheme('dark');
          } else if (name === 'chart_themes_light') {
            __WEBPACK_IMPORTED_MODULE_0__control__["a" /* Control */].switchTheme('light');
          }
        });
        __WEBPACK_IMPORTED_MODULE_7_jquery___default()("#chart_select_main_indicator a").click(function () {
          __WEBPACK_IMPORTED_MODULE_7_jquery___default()("#chart_select_main_indicator a").removeClass('selected');
          __WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).addClass("selected");
          var name = __WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).attr('name');
          var tmp = __WEBPACK_IMPORTED_MODULE_3__chart_settings__["a" /* ChartSettings */].get();
          tmp.charts.mIndic = name;
          __WEBPACK_IMPORTED_MODULE_3__chart_settings__["a" /* ChartSettings */].save();
          var mgr = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance;
          if (!mgr.setMainIndicator("frame0.k0", name)) mgr.removeMainIndicator("frame0.k0");
          mgr.redraw();
        });
        __WEBPACK_IMPORTED_MODULE_7_jquery___default()('#chart_toolbar_theme a').click(function () {
          __WEBPACK_IMPORTED_MODULE_7_jquery___default()('#chart_toolbar_theme a').removeClass('selected');

          if (__WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).attr('name') === 'dark') {
            __WEBPACK_IMPORTED_MODULE_0__control__["a" /* Control */].switchTheme('dark');
          } else if (__WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).attr('name') === 'light') {
            __WEBPACK_IMPORTED_MODULE_0__control__["a" /* Control */].switchTheme('light');
          }
        });
        __WEBPACK_IMPORTED_MODULE_7_jquery___default()('#chart_select_theme li a').click(function () {
          __WEBPACK_IMPORTED_MODULE_7_jquery___default()('#chart_select_theme a').removeClass('selected');

          if (__WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).attr('name') === 'dark') {
            __WEBPACK_IMPORTED_MODULE_0__control__["a" /* Control */].switchTheme('dark');
          } else if (__WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).attr('name') === 'light') {
            __WEBPACK_IMPORTED_MODULE_0__control__["a" /* Control */].switchTheme('light');
          }
        });
        __WEBPACK_IMPORTED_MODULE_7_jquery___default()('#chart_enable_tools li a').click(function () {
          __WEBPACK_IMPORTED_MODULE_7_jquery___default()('#chart_enable_tools a').removeClass('selected');

          if (__WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).attr('name') === 'on') {
            __WEBPACK_IMPORTED_MODULE_0__control__["a" /* Control */].switchTools('on');
          } else if (__WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).attr('name') === 'off') {
            __WEBPACK_IMPORTED_MODULE_0__control__["a" /* Control */].switchTools('off');
          }
        });
        __WEBPACK_IMPORTED_MODULE_7_jquery___default()('#chart_enable_indicator li a').click(function () {
          __WEBPACK_IMPORTED_MODULE_7_jquery___default()('#chart_enable_indicator a').removeClass('selected');

          if (__WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).attr('name') === 'on') {
            __WEBPACK_IMPORTED_MODULE_0__control__["a" /* Control */].switchIndic('on');
          } else if (__WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).attr('name') === 'off') {
            __WEBPACK_IMPORTED_MODULE_0__control__["a" /* Control */].switchIndic('off');
          }
        });
        __WEBPACK_IMPORTED_MODULE_7_jquery___default()('#chart_language_setting_div li a').click(function () {
          __WEBPACK_IMPORTED_MODULE_7_jquery___default()('#chart_language_setting_div a').removeClass('selected');

          if (__WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).attr('name') === 'zh-cn') {
            __WEBPACK_IMPORTED_MODULE_0__control__["a" /* Control */].chartSwitchLanguage('zh-cn');
          } else if (__WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).attr('name') === 'en-us') {
            __WEBPACK_IMPORTED_MODULE_0__control__["a" /* Control */].chartSwitchLanguage('en-us');
          } else if (__WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).attr('name') === 'zh-tw') {
            __WEBPACK_IMPORTED_MODULE_0__control__["a" /* Control */].chartSwitchLanguage('zh-tw');
          }
        });
        __WEBPACK_IMPORTED_MODULE_7_jquery___default()(document).keyup(function (e) {
          if (e.keyCode === 46) {
            __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.deleteToolObject();
            __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.redraw('OverlayCanvas', false);
          }
        });
        __WEBPACK_IMPORTED_MODULE_7_jquery___default()("#clearCanvas").click(function () {
          var pDPTool = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.getDataSource("frame0.k0");
          var len = pDPTool.getToolObjectCount();

          for (var i = 0; i < len; i++) {
            pDPTool.delToolObject();
          }

          __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.redraw('OverlayCanvas', false);
        });
        __WEBPACK_IMPORTED_MODULE_7_jquery___default()("#chart_overlayCanvas").mousemove(function (e) {
          var r = e.target.getBoundingClientRect();
          var x = e.clientX - r.left;
          var y = e.clientY - r.top;
          var mgr = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance;

          if (Kline.instance.buttonDown === true) {
            mgr.onMouseMove("frame0", x, y, true);
            mgr.redraw("All", false);
          } else {
            mgr.onMouseMove("frame0", x, y, false);
            mgr.redraw("OverlayCanvas");
          }
        }).mouseleave(function (e) {
          var r = e.target.getBoundingClientRect();
          var x = e.clientX - r.left;
          var y = e.clientY - r.top;
          var mgr = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance;
          mgr.onMouseLeave("frame0", x, y, false);
          mgr.redraw("OverlayCanvas");
        }).mouseup(function (e) {
          if (e.which !== 1) {
            return;
          }

          Kline.instance.buttonDown = false;
          var r = e.target.getBoundingClientRect();
          var x = e.clientX - r.left;
          var y = e.clientY - r.top;
          var mgr = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance;
          mgr.onMouseUp("frame0", x, y);
          mgr.redraw("All");
        }).mousedown(function (e) {
          if (e.which !== 1) {
            __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.deleteToolObject();
            __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.redraw('OverlayCanvas', false);
            return;
          }

          Kline.instance.buttonDown = true;
          var r = e.target.getBoundingClientRect();
          var x = e.clientX - r.left;
          var y = e.clientY - r.top;
          __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.onMouseDown("frame0", x, y);
        });
        __WEBPACK_IMPORTED_MODULE_7_jquery___default()("#chart_parameter_settings :input").change(function () {
          var name = __WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).attr("name");
          var index = 0;
          var valueArray = [];
          var mgr = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance;
          __WEBPACK_IMPORTED_MODULE_7_jquery___default()("#chart_parameter_settings :input").each(function () {
            if (__WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).attr("name") === name) {
              if (__WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).val() !== "" && __WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).val() !== null && __WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).val() !== undefined) {
                var i = parseInt(__WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).val());
                valueArray.push(i);
              }

              index++;
            }
          });

          if (valueArray.length !== 0) {
            mgr.setIndicatorParameters(name, valueArray);
            var value = mgr.getIndicatorParameters(name);
            var cookieArray = [];
            index = 0;
            __WEBPACK_IMPORTED_MODULE_7_jquery___default()("#chart_parameter_settings :input").each(function () {
              if (__WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).attr("name") === name) {
                if (__WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).val() !== "" && __WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).val() !== null && __WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).val() !== undefined) {
                  __WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).val(value[index].getValue());
                  cookieArray.push(value[index].getValue());
                }

                index++;
              }
            });
            var tmp = __WEBPACK_IMPORTED_MODULE_3__chart_settings__["a" /* ChartSettings */].get();
            tmp.indics[name] = cookieArray;
            __WEBPACK_IMPORTED_MODULE_3__chart_settings__["a" /* ChartSettings */].save();
            mgr.redraw('All', false);
          }
        });
        __WEBPACK_IMPORTED_MODULE_7_jquery___default()("#chart_parameter_settings button").click(function () {
          var name = __WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).parents("tr").children("th").html();
          var index = 0;
          var value = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.getIndicatorParameters(name);
          var valueArray = [];
          __WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).parent().prev().children('input').each(function () {
            if (value !== null && index < value.length) {
              __WEBPACK_IMPORTED_MODULE_7_jquery___default()(this).val(value[index].getDefaultValue());
              valueArray.push(value[index].getDefaultValue());
            }

            index++;
          });
          __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.setIndicatorParameters(name, valueArray);
          var tmp = __WEBPACK_IMPORTED_MODULE_3__chart_settings__["a" /* ChartSettings */].get();
          tmp.indics[name] = valueArray;
          __WEBPACK_IMPORTED_MODULE_3__chart_settings__["a" /* ChartSettings */].save();
          __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.redraw('All', false);
        });
        __WEBPACK_IMPORTED_MODULE_7_jquery___default()('body').on('click', '#sizeIcon', function () {
          Kline.instance.isSized = !Kline.instance.isSized;

          if (Kline.instance.isSized) {
            __WEBPACK_IMPORTED_MODULE_7_jquery___default()(Kline.instance.element).css({
              position: 'fixed',
              left: '0',
              right: '0',
              top: '0',
              bottom: '0',
              width: '100%',
              height: '100%',
              zIndex: '10000'
            });
            __WEBPACK_IMPORTED_MODULE_0__control__["a" /* Control */].onSize();
            __WEBPACK_IMPORTED_MODULE_7_jquery___default()('html,body').css({
              width: '100%',
              height: '100%',
              overflow: 'hidden'
            });
          } else {
            __WEBPACK_IMPORTED_MODULE_7_jquery___default()(Kline.instance.element).attr('style', '');
            __WEBPACK_IMPORTED_MODULE_7_jquery___default()('html,body').attr('style', '');
            __WEBPACK_IMPORTED_MODULE_0__control__["a" /* Control */].onSize(Kline.instance.width, Kline.instance.height);
            __WEBPACK_IMPORTED_MODULE_7_jquery___default()(Kline.instance.element).css({
              visibility: 'visible',
              height: Kline.instance.height + 'px'
            });
          }
        });
      });
    }
  }]);

  return Kline;
}();

Kline.created = false;
Kline.instance = null;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartSettings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chart_manager__ = __webpack_require__(0);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var ChartSettings =
/*#__PURE__*/
function () {
  function ChartSettings() {
    _classCallCheck(this, ChartSettings);
  }

  _createClass(ChartSettings, null, [{
    key: "checkVersion",
    value: function checkVersion() {
      if (ChartSettings._data.ver < 2) {
        ChartSettings._data.ver = 2;
        var charts = ChartSettings._data.charts;
        charts.period_weight = {};
        charts.period_weight['line'] = 8;
        charts.period_weight['1min'] = 7;
        charts.period_weight['5min'] = 6;
        charts.period_weight['15min'] = 5;
        charts.period_weight['30min'] = 4;
        charts.period_weight['1hour'] = 3;
        charts.period_weight['1day'] = 2;
        charts.period_weight['1week'] = 1;
        charts.period_weight['3min'] = 0;
        charts.period_weight['2hour'] = 0;
        charts.period_weight['4hour'] = 0;
        charts.period_weight['6hour'] = 0;
        charts.period_weight['12hour'] = 0;
        charts.period_weight['3day'] = 0;
      }

      if (ChartSettings._data.ver < 3) {
        ChartSettings._data.ver = 3;
        var _charts = ChartSettings._data.charts;
        _charts.areaHeight = [];
      }
    }
  }, {
    key: "get",
    value: function get() {
      if (ChartSettings._data === undefined) {
        ChartSettings.init();
        ChartSettings.load();
        ChartSettings.checkVersion();
      }

      return ChartSettings._data;
    }
  }, {
    key: "init",
    value: function init() {
      var _indic_param = {};
      var _name = ['MA', 'EMA', 'VOLUME', 'MACD', 'KDJ', 'StochRSI', 'RSI', 'DMI', 'OBV', 'BOLL', 'DMA', 'TRIX', 'BRAR', 'VR', 'EMV', 'WR', 'ROC', 'MTM', 'PSY'];

      for (var i = 0; i < _name.length; i++) {
        var _value = __WEBPACK_IMPORTED_MODULE_0__chart_manager__["a" /* ChartManager */].instance.createIndicatorAndRange('', _name[i], true);

        if (_value === null) continue;
        _indic_param[_name[i]] = [];

        var param = _value.indic.getParameters();

        for (var j = 0; j < param.length; j++) {
          _indic_param[_name[i]].push(param[j]);
        }
      }

      var _chart_style = 'CandleStick';
      var _m_indic = 'MA';
      var _indic = ['VOLUME', 'MACD'];
      var _range = '15m';
      var _frame = {};
      _frame.chartStyle = _chart_style;
      _frame.mIndic = _m_indic;
      _frame.indics = _indic;
      _frame.indicsStatus = 'open';
      _frame.period = _range;
      ChartSettings._data = {
        ver: 1,
        charts: _frame,
        indics: _indic_param,
        theme: "Dark"
      };
      ChartSettings.checkVersion();
    }
  }, {
    key: "load",
    value: function load() {
      if (document.cookie.length <= 0) return;
      var start = document.cookie.indexOf("chartSettings=");
      if (start < 0) return;
      start += "chartSettings=".length;
      var end = document.cookie.indexOf(";", start);
      if (end < 0) end = document.cookie.length;
      var json = unescape(document.cookie.substring(start, end));
      ChartSettings._data = JSON.parse(json);
    }
  }, {
    key: "save",
    value: function save() {
      var exdate = new Date();
      exdate.setDate(exdate.getDate() + 2);
      document.cookie = "chartSettings=" + escape(JSON.stringify(ChartSettings._data)) + ";expires=" + exdate.toGMTString();
    }
  }]);

  return ChartSettings;
}();

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Util; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Util =
/*#__PURE__*/
function () {
  function Util() {
    _classCallCheck(this, Util);
  }

  _createClass(Util, null, [{
    key: "fromFloat",
    value: function fromFloat(v, fractionDigits) {
      var text = v.toFixed(fractionDigits);

      for (var i = text.length - 1; i >= 0; i--) {
        if (text[i] === '.') return text.substring(0, i);
        if (text[i] !== '0') return text.substring(0, i + 1);
      }
    }
  }, {
    key: "formatTime",
    value: function formatTime(v) {
      return v < 10 ? "0" + v.toString() : v.toString();
    }
  }, {
    key: "isInstance",
    value: function isInstance(obj, clazz) {
      if (obj === null || obj === undefined) {
        return false;
      }

      return obj instanceof clazz;
    }
  }]);

  return Util;
}();

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Theme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DarkTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LightTheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__kline__ = __webpack_require__(3);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Theme =
/*#__PURE__*/
function () {
  function Theme() {
    _classCallCheck(this, Theme);

    this.getFont = function (which) {
      return this._fonts[which];
    };
  }

  _createClass(Theme, [{
    key: "getColor",
    value: function getColor(which) {
      return this._colors[which];
    }
  }]);

  return Theme;
}();
Theme.theme_color_id = 0;
Theme.theme_font_id = 0;
Theme.Color = {
  Positive: Theme.theme_color_id++,
  Negative: Theme.theme_color_id++,
  PositiveDark: Theme.theme_color_id++,
  NegativeDark: Theme.theme_color_id++,
  Unchanged: Theme.theme_color_id++,
  Background: Theme.theme_color_id++,
  Cursor: Theme.theme_color_id++,
  RangeMark: Theme.theme_color_id++,
  Indicator0: Theme.theme_color_id++,
  Indicator1: Theme.theme_color_id++,
  Indicator2: Theme.theme_color_id++,
  Indicator3: Theme.theme_color_id++,
  Indicator4: Theme.theme_color_id++,
  Indicator5: Theme.theme_color_id++,
  Grid0: Theme.theme_color_id++,
  Grid1: Theme.theme_color_id++,
  Grid2: Theme.theme_color_id++,
  Grid3: Theme.theme_color_id++,
  Grid4: Theme.theme_color_id++,
  TextPositive: Theme.theme_color_id++,
  TextNegative: Theme.theme_color_id++,
  Text0: Theme.theme_color_id++,
  Text1: Theme.theme_color_id++,
  Text2: Theme.theme_color_id++,
  Text3: Theme.theme_color_id++,
  Text4: Theme.theme_color_id++,
  LineColorNormal: Theme.theme_color_id++,
  LineColorSelected: Theme.theme_color_id++,
  CircleColorFill: Theme.theme_color_id++,
  CircleColorStroke: Theme.theme_color_id++
};
Theme.Font = {
  Default: Theme.theme_font_id++
};
var DarkTheme =
/*#__PURE__*/
function (_Theme) {
  _inherits(DarkTheme, _Theme);

  function DarkTheme() {
    var _this;

    _classCallCheck(this, DarkTheme);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DarkTheme).call(this));
    _this._colors = [];

    if (__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.reverseColor) {
      _this._colors[Theme.Color.Positive] = "#990e0e";
      _this._colors[Theme.Color.Negative] = "#19b34c";
      _this._colors[Theme.Color.PositiveDark] = "#3b0e08";
      _this._colors[Theme.Color.NegativeDark] = "#004718";
    } else {
      _this._colors[Theme.Color.Positive] = "#19b34c";
      _this._colors[Theme.Color.Negative] = "#990e0e";
      _this._colors[Theme.Color.PositiveDark] = "#004718";
      _this._colors[Theme.Color.NegativeDark] = "#3b0e08";
    }

    _this._colors[Theme.Color.Unchanged] = "#fff";
    _this._colors[Theme.Color.Background] = "#242424";
    _this._colors[Theme.Color.Cursor] = "#aaa";
    _this._colors[Theme.Color.RangeMark] = "#f9ee30";
    _this._colors[Theme.Color.Indicator0] = "#ddd";
    _this._colors[Theme.Color.Indicator1] = "#f9ee30";
    _this._colors[Theme.Color.Indicator2] = "#f600ff";
    _this._colors[Theme.Color.Indicator3] = "#6bf";
    _this._colors[Theme.Color.Indicator4] = "#a5cf81";
    _this._colors[Theme.Color.Indicator5] = "#e18b89";
    _this._colors[Theme.Color.Grid0] = "#333";
    _this._colors[Theme.Color.Grid1] = "#444";
    _this._colors[Theme.Color.Grid2] = "#666";
    _this._colors[Theme.Color.Grid3] = "#888";
    _this._colors[Theme.Color.Grid4] = "#aaa";
    _this._colors[Theme.Color.TextPositive] = "#1bd357";
    _this._colors[Theme.Color.TextNegative] = "#ff6f5e";
    _this._colors[Theme.Color.Text0] = "#444";
    _this._colors[Theme.Color.Text1] = "#666";
    _this._colors[Theme.Color.Text2] = "#888";
    _this._colors[Theme.Color.Text3] = "#aaa";
    _this._colors[Theme.Color.Text4] = "#ccc";
    _this._colors[Theme.Color.LineColorNormal] = "#a6a6a6";
    _this._colors[Theme.Color.LineColorSelected] = "#ffffff";
    _this._colors[Theme.Color.CircleColorFill] = "#000000";
    _this._colors[Theme.Color.CircleColorStroke] = "#ffffff";
    _this._fonts = [];
    _this._fonts[Theme.Font.Default] = "12px Tahoma";
    return _this;
  }

  return DarkTheme;
}(Theme);
var LightTheme =
/*#__PURE__*/
function (_Theme2) {
  _inherits(LightTheme, _Theme2);

  function LightTheme() {
    var _this2;

    _classCallCheck(this, LightTheme);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(LightTheme).call(this));
    _this2._colors = [];

    if (__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.reverseColor) {
      _this2._colors[Theme.Color.Positive] = "#db5542";
      _this2._colors[Theme.Color.Negative] = "#53b37b";
      _this2._colors[Theme.Color.PositiveDark] = "#ffadaa";
      _this2._colors[Theme.Color.NegativeDark] = "#66d293";
    } else {
      _this2._colors[Theme.Color.Positive] = "#53b37b";
      _this2._colors[Theme.Color.Negative] = "#db5542";
      _this2._colors[Theme.Color.PositiveDark] = "#66d293";
      _this2._colors[Theme.Color.NegativeDark] = "#ffadaa";
    }

    _this2._colors[Theme.Color.Unchanged] = "#fff";
    _this2._colors[Theme.Color.Background] = "#fff";
    _this2._colors[Theme.Color.Cursor] = "#aaa";
    _this2._colors[Theme.Color.RangeMark] = "#f27935";
    _this2._colors[Theme.Color.Indicator0] = "#2fd2b2";
    _this2._colors[Theme.Color.Indicator1] = "#ffb400";
    _this2._colors[Theme.Color.Indicator2] = "#e849b9";
    _this2._colors[Theme.Color.Indicator3] = "#1478c8";
    _this2._colors[Theme.Color.Grid0] = "#eee";
    _this2._colors[Theme.Color.Grid1] = "#afb1b3";
    _this2._colors[Theme.Color.Grid2] = "#ccc";
    _this2._colors[Theme.Color.Grid3] = "#bbb";
    _this2._colors[Theme.Color.Grid4] = "#aaa";
    _this2._colors[Theme.Color.TextPositive] = "#53b37b";
    _this2._colors[Theme.Color.TextNegative] = "#db5542";
    _this2._colors[Theme.Color.Text0] = "#ccc";
    _this2._colors[Theme.Color.Text1] = "#aaa";
    _this2._colors[Theme.Color.Text2] = "#888";
    _this2._colors[Theme.Color.Text3] = "#666";
    _this2._colors[Theme.Color.Text4] = "#444";
    _this2._colors[Theme.Color.LineColorNormal] = "#8c8c8c";
    _this2._colors[Theme.Color.LineColorSelected] = "#393c40";
    _this2._colors[Theme.Color.CircleColorFill] = "#ffffff";
    _this2._colors[Theme.Color.CircleColorStroke] = "#393c40";
    _this2._fonts = [];
    _this2._fonts[Theme.Font.Default] = "12px Tahoma";
    return _this2;
  }

  return LightTheme;
}(Theme);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultTemplate; });
/* unused harmony export TemplateMeasuringHandler */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chart_manager__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chart_settings__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_sources__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_providers__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__areas__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__plotters__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__timeline__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cname__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__layouts__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__themes__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ranges__ = __webpack_require__(18);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }












var Template =
/*#__PURE__*/
function () {
  function Template() {
    _classCallCheck(this, Template);
  }

  _createClass(Template, null, [{
    key: "createCandlestickDataSource",
    value: function createCandlestickDataSource(dsAlias) {
      return new __WEBPACK_IMPORTED_MODULE_2__data_sources__["b" /* MainDataSource */](dsAlias);
    }
  }, {
    key: "createDataSource",
    value: function createDataSource(dsName, dsAlias, createFunc) {
      var mgr = __WEBPACK_IMPORTED_MODULE_0__chart_manager__["a" /* ChartManager */].instance;
      if (mgr.getCachedDataSource(dsAlias) === null) mgr.setCachedDataSource(dsAlias, createFunc(dsAlias));
      mgr.setCurrentDataSource(dsName, dsAlias);
      mgr.updateData(dsName, null);
    }
  }, {
    key: "createTableComps",
    value: function createTableComps(dsName) {
      this.createMainChartComps(dsName);

      if (this.displayVolume) {
        this.createIndicatorChartComps(dsName, "VOLUME");
      }

      this.createTimelineComps(dsName);
    }
  }, {
    key: "createMainChartComps",
    value: function createMainChartComps(dsName) {
      var mgr = __WEBPACK_IMPORTED_MODULE_0__chart_manager__["a" /* ChartManager */].instance;
      var tableLayout = mgr.getArea(dsName + ".charts");
      var areaName = dsName + ".main";
      var rangeAreaName = areaName + "Range";
      var area = new __WEBPACK_IMPORTED_MODULE_4__areas__["e" /* MainArea */](areaName);
      mgr.setArea(areaName, area);
      tableLayout.addArea(area);
      var rangeArea = new __WEBPACK_IMPORTED_MODULE_4__areas__["f" /* MainRangeArea */](rangeAreaName);
      mgr.setArea(rangeAreaName, rangeArea);
      tableLayout.addArea(rangeArea);
      var dp = new __WEBPACK_IMPORTED_MODULE_3__data_providers__["b" /* MainDataProvider */](areaName + ".main");
      mgr.setDataProvider(dp.getName(), dp);
      mgr.setMainIndicator(dsName, "MA");
      var range = new __WEBPACK_IMPORTED_MODULE_10__ranges__["a" /* MainRange */](areaName);
      mgr.setRange(range.getName(), range);
      range.setPaddingTop(28);
      range.setPaddingBottom(12);
      var plotter = new __WEBPACK_IMPORTED_MODULE_5__plotters__["B" /* MainAreaBackgroundPlotter */](areaName + ".background");
      mgr.setPlotter(plotter.getName(), plotter);
      plotter = new __WEBPACK_IMPORTED_MODULE_5__plotters__["c" /* CGridPlotter */](areaName + ".grid");
      mgr.setPlotter(plotter.getName(), plotter);
      plotter = new __WEBPACK_IMPORTED_MODULE_5__plotters__["h" /* CandlestickPlotter */](areaName + ".main");
      mgr.setPlotter(plotter.getName(), plotter);
      plotter = new __WEBPACK_IMPORTED_MODULE_5__plotters__["D" /* MinMaxPlotter */](areaName + ".decoration");
      mgr.setPlotter(plotter.getName(), plotter);
      plotter = new __WEBPACK_IMPORTED_MODULE_5__plotters__["C" /* MainInfoPlotter */](areaName + ".info");
      mgr.setPlotter(plotter.getName(), plotter);
      plotter = new __WEBPACK_IMPORTED_MODULE_5__plotters__["I" /* SelectionPlotter */](areaName + ".selection");
      mgr.setPlotter(plotter.getName(), plotter);
      plotter = new __WEBPACK_IMPORTED_MODULE_5__plotters__["b" /* CDynamicLinePlotter */](areaName + ".tool");
      mgr.setPlotter(plotter.getName(), plotter);
      plotter = new __WEBPACK_IMPORTED_MODULE_5__plotters__["F" /* RangeAreaBackgroundPlotter */](areaName + "Range.background");
      mgr.setPlotter(plotter.getName(), plotter);
      plotter = new __WEBPACK_IMPORTED_MODULE_5__plotters__["f" /* COrderGraphPlotter */](areaName + "Range.grid");
      mgr.setPlotter(plotter.getName(), plotter);
      plotter = new __WEBPACK_IMPORTED_MODULE_5__plotters__["G" /* RangePlotter */](areaName + "Range.main");
      mgr.setPlotter(plotter.getName(), plotter);
      plotter = new __WEBPACK_IMPORTED_MODULE_5__plotters__["H" /* RangeSelectionPlotter */](areaName + "Range.selection");
      mgr.setPlotter(plotter.getName(), plotter);
      plotter = new __WEBPACK_IMPORTED_MODULE_5__plotters__["z" /* LastClosePlotter */](areaName + "Range.decoration");
      mgr.setPlotter(plotter.getName(), plotter);
    }
  }, {
    key: "createIndicatorChartComps",
    value: function createIndicatorChartComps(dsName, indicName) {
      var mgr = __WEBPACK_IMPORTED_MODULE_0__chart_manager__["a" /* ChartManager */].instance;
      var tableLayout = mgr.getArea(dsName + ".charts");
      var areaName = dsName + ".indic" + tableLayout.getNextRowId();
      var rangeAreaName = areaName + "Range";
      var area = new __WEBPACK_IMPORTED_MODULE_4__areas__["c" /* IndicatorArea */](areaName);
      mgr.setArea(areaName, area);
      tableLayout.addArea(area);
      var rowIndex = tableLayout.getAreaCount() >> 1;
      var heights = __WEBPACK_IMPORTED_MODULE_1__chart_settings__["a" /* ChartSettings */].get().charts.areaHeight;

      if (heights.length > rowIndex) {
        var a, i;

        for (i = 0; i < rowIndex; i++) {
          a = tableLayout.getAreaAt(i << 1);
          a.setTop(0);
          a.setBottom(heights[i]);
        }

        area.setTop(0);
        area.setBottom(heights[rowIndex]);
      }

      var rangeArea = new __WEBPACK_IMPORTED_MODULE_4__areas__["d" /* IndicatorRangeArea */](rangeAreaName);
      mgr.setArea(rangeAreaName, rangeArea);
      tableLayout.addArea(rangeArea);
      var dp = new __WEBPACK_IMPORTED_MODULE_3__data_providers__["a" /* IndicatorDataProvider */](areaName + ".secondary");
      mgr.setDataProvider(dp.getName(), dp);

      if (mgr.setIndicator(areaName, indicName) === false) {
        mgr.removeIndicator(areaName);
        return;
      }

      var plotter = new __WEBPACK_IMPORTED_MODULE_5__plotters__["B" /* MainAreaBackgroundPlotter */](areaName + ".background");
      mgr.setPlotter(plotter.getName(), plotter);
      plotter = new __WEBPACK_IMPORTED_MODULE_5__plotters__["c" /* CGridPlotter */](areaName + ".grid");
      mgr.setPlotter(plotter.getName(), plotter);
      plotter = new __WEBPACK_IMPORTED_MODULE_5__plotters__["y" /* IndicatorPlotter */](areaName + ".secondary");
      mgr.setPlotter(plotter.getName(), plotter);
      plotter = new __WEBPACK_IMPORTED_MODULE_5__plotters__["x" /* IndicatorInfoPlotter */](areaName + ".info");
      mgr.setPlotter(plotter.getName(), plotter);
      plotter = new __WEBPACK_IMPORTED_MODULE_5__plotters__["I" /* SelectionPlotter */](areaName + ".selection");
      mgr.setPlotter(plotter.getName(), plotter);
      plotter = new __WEBPACK_IMPORTED_MODULE_5__plotters__["F" /* RangeAreaBackgroundPlotter */](areaName + "Range.background");
      mgr.setPlotter(plotter.getName(), plotter);
      plotter = new __WEBPACK_IMPORTED_MODULE_5__plotters__["G" /* RangePlotter */](areaName + "Range.main");
      mgr.setPlotter(plotter.getName(), plotter);
      plotter = new __WEBPACK_IMPORTED_MODULE_5__plotters__["H" /* RangeSelectionPlotter */](areaName + "Range.selection");
      mgr.setPlotter(plotter.getName(), plotter);
    }
  }, {
    key: "createTimelineComps",
    value: function createTimelineComps(dsName) {
      var mgr = __WEBPACK_IMPORTED_MODULE_0__chart_manager__["a" /* ChartManager */].instance;
      var plotter;
      var timeline = new __WEBPACK_IMPORTED_MODULE_6__timeline__["a" /* Timeline */](dsName);
      mgr.setTimeline(timeline.getName(), timeline);
      plotter = new __WEBPACK_IMPORTED_MODULE_5__plotters__["J" /* TimelineAreaBackgroundPlotter */](dsName + ".timeline.background");
      mgr.setPlotter(plotter.getName(), plotter);
      plotter = new __WEBPACK_IMPORTED_MODULE_5__plotters__["K" /* TimelinePlotter */](dsName + ".timeline.main");
      mgr.setPlotter(plotter.getName(), plotter);
      plotter = new __WEBPACK_IMPORTED_MODULE_5__plotters__["L" /* TimelineSelectionPlotter */](dsName + ".timeline.selection");
      mgr.setPlotter(plotter.getName(), plotter);
    }
  }, {
    key: "createLiveOrderComps",
    value: function createLiveOrderComps(dsName) {
      var mgr = __WEBPACK_IMPORTED_MODULE_0__chart_manager__["a" /* ChartManager */].instance;
      var plotter;
      plotter = new __WEBPACK_IMPORTED_MODULE_5__plotters__["a" /* BackgroundPlotter */](dsName + ".main.background");
      mgr.setPlotter(plotter.getName(), plotter);
      plotter = new __WEBPACK_IMPORTED_MODULE_5__plotters__["CLiveOrderPlotter"](dsName + ".main.main");
      mgr.setPlotter(plotter.getName(), plotter);
    }
  }, {
    key: "createLiveTradeComps",
    value: function createLiveTradeComps(dsName) {
      var mgr = __WEBPACK_IMPORTED_MODULE_0__chart_manager__["a" /* ChartManager */].instance;
      var plotter;
      plotter = new __WEBPACK_IMPORTED_MODULE_5__plotters__["a" /* BackgroundPlotter */](dsName + ".main.background");
      mgr.setPlotter(plotter.getName(), plotter);
      plotter = new __WEBPACK_IMPORTED_MODULE_5__plotters__["CLiveTradePlotter"](dsName + ".main.main");
      mgr.setPlotter(plotter.getName(), plotter);
    }
  }]);

  return Template;
}();
Template.displayVolume = true;
var DefaultTemplate =
/*#__PURE__*/
function (_Template) {
  _inherits(DefaultTemplate, _Template);

  function DefaultTemplate() {
    _classCallCheck(this, DefaultTemplate);

    return _possibleConstructorReturn(this, _getPrototypeOf(DefaultTemplate).apply(this, arguments));
  }

  _createClass(DefaultTemplate, null, [{
    key: "loadTemplate",
    value: function loadTemplate(dsName, dsAlias) {
      var mgr = __WEBPACK_IMPORTED_MODULE_0__chart_manager__["a" /* ChartManager */].instance;
      var settings = __WEBPACK_IMPORTED_MODULE_1__chart_settings__["a" /* ChartSettings */].get();
      var frameName = new __WEBPACK_IMPORTED_MODULE_7__cname__["a" /* CName */](dsName).getCompAt(0);
      mgr.unloadTemplate(frameName);
      this.createDataSource(dsName, dsAlias, this.createCandlestickDataSource);
      var frame = new __WEBPACK_IMPORTED_MODULE_8__layouts__["a" /* DockableLayout */](frameName);
      mgr.setFrame(frame.getName(), frame);
      mgr.setArea(frame.getName(), frame);
      frame.setGridColor(__WEBPACK_IMPORTED_MODULE_9__themes__["c" /* Theme */].Color.Grid1);
      var area = new __WEBPACK_IMPORTED_MODULE_4__areas__["g" /* TimelineArea */](dsName + ".timeline");
      mgr.setArea(area.getName(), area);
      frame.addArea(area);
      area.setDockStyle(__WEBPACK_IMPORTED_MODULE_4__areas__["a" /* ChartArea */].DockStyle.Bottom);
      area.Measuring.addHandler(area, TemplateMeasuringHandler.onMeasuring);
      var tableLayout = new __WEBPACK_IMPORTED_MODULE_8__layouts__["b" /* TableLayout */](dsName + ".charts");
      mgr.setArea(tableLayout.getName(), tableLayout);
      tableLayout.setDockStyle(__WEBPACK_IMPORTED_MODULE_4__areas__["a" /* ChartArea */].DockStyle.Fill);
      frame.addArea(tableLayout);
      this.createTableComps(dsName);
      mgr.setThemeName(frameName, settings.theme);
      return mgr;
    }
  }]);

  return DefaultTemplate;
}(Template);
var TemplateMeasuringHandler =
/*#__PURE__*/
function () {
  function TemplateMeasuringHandler() {
    _classCallCheck(this, TemplateMeasuringHandler);
  }

  _createClass(TemplateMeasuringHandler, null, [{
    key: "onMeasuring",
    value: function onMeasuring(sender, args) {
      var width = args.Width;
      var height = args.Height;
      var areaName = sender.getNameObject().getCompAt(2);

      if (areaName === "timeline") {
        sender.setMeasuredDimension(width, 22);
      }
    }
  }]);

  return TemplateMeasuringHandler;
}();

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Control; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__kline__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__kline_trade__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chart_manager__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chart_settings__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__templates__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mevent__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var Control =
/*#__PURE__*/
function () {
  function Control() {
    _classCallCheck(this, Control);
  }

  _createClass(Control, null, [{
    key: "refreshFunction",
    value: function refreshFunction() {
      Control.refreshCounter++;
      var lang = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.getLanguage();

      if (Control.refreshCounter > 3600) {
        var num = Number(Control.refreshCounter / 3600);

        if (lang === "en-us") {
          __WEBPACK_IMPORTED_MODULE_6_jquery___default()("#chart_updated_time_text").html(num.toFixed(0) + "h");
        } else if (lang === "zh-tw") {
          __WEBPACK_IMPORTED_MODULE_6_jquery___default()("#chart_updated_time_text").html(num.toFixed(0) + "小時");
        } else {
          __WEBPACK_IMPORTED_MODULE_6_jquery___default()("#chart_updated_time_text").html(num.toFixed(0) + "小时");
        }
      } else if (Control.refreshCounter > 60 && Control.refreshCounter <= 3600) {
        var _num = Number(Control.refreshCounter / 60);

        if (lang === "en-us") {
          __WEBPACK_IMPORTED_MODULE_6_jquery___default()("#chart_updated_time_text").html(_num.toFixed(0) + "m");
        } else if (lang === "zh-tw") {
          __WEBPACK_IMPORTED_MODULE_6_jquery___default()("#chart_updated_time_text").html(_num.toFixed(0) + "分鐘");
        } else {
          __WEBPACK_IMPORTED_MODULE_6_jquery___default()("#chart_updated_time_text").html(_num.toFixed(0) + "分钟");
        }
      } else if (Control.refreshCounter <= 60) {
        if (lang === "en-us") {
          __WEBPACK_IMPORTED_MODULE_6_jquery___default()("#chart_updated_time_text").html(Control.refreshCounter + "s");
        } else {
          __WEBPACK_IMPORTED_MODULE_6_jquery___default()("#chart_updated_time_text").html(Control.refreshCounter + "秒");
        }
      }
    }
  }, {
    key: "clearRefreshCounter",
    value: function clearRefreshCounter() {
      window.clearInterval(Control.refreshHandler);
      Control.refreshCounter = 0;
      var lang = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.getLanguage();

      if (lang === "en-us") {
        __WEBPACK_IMPORTED_MODULE_6_jquery___default()("#chart_updated_time_text").html(Control.refreshCounter + "s");
      } else {
        __WEBPACK_IMPORTED_MODULE_6_jquery___default()("#chart_updated_time_text").html(Control.refreshCounter + "秒");
      }

      Control.refreshHandler = setInterval(Control.refreshFunction, __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.intervalTime);
    }
  }, {
    key: "requestData",
    value: function requestData(showLoading) {
      Control.AbortRequest();
      window.clearTimeout(__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.timer);

      if (__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.paused) {
        return;
      }

      if (showLoading === true) {
        __WEBPACK_IMPORTED_MODULE_6_jquery___default()("#chart_loading").addClass("activated");
      }

      if (__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.type === "stomp" && __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.stompClient) {
        Control.requestOverStomp();
      } else {
        Control.requestOverHttp();
      }
    }
  }, {
    key: "parseRequestParam",
    value: function parseRequestParam(str) {
      return JSON.parse('{"' + decodeURI(str.replace(/&/g, "\",\"").replace(/=/g, "\":\"")) + '"}');
    }
  }, {
    key: "requestOverStomp",
    value: function requestOverStomp() {
      if (!__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.socketConnected) {
        if (__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.debug) {
          console.log("DEBUG: socket is not coonnected");
        }

        return;
      }

      if (__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.stompClient && __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.stompClient.ws.readyState === 1) {
        __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.stompClient.send(__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.sendPath, {}, JSON.stringify(Control.parseRequestParam(__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.requestParam)));
        return;
      }

      if (__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.debug) {
        console.log("DEBUG: stomp client is not ready yet ...");
      }

      __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.timer = setTimeout(function () {
        Control.requestData(true);
      }, 1000);
    }
  }, {
    key: "requestOverHttp",
    value: function requestOverHttp() {
      if (__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.debug) {
        console.log("DEBUG: " + __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.requestParam);
      }

      __WEBPACK_IMPORTED_MODULE_6_jquery___default()(document).ready(__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.G_HTTP_REQUEST = __WEBPACK_IMPORTED_MODULE_6_jquery___default.a.ajax({
        type: "GET",
        url: __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.url,
        dataType: 'json',
        data: __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.requestParam,
        timeout: 30000,
        created: Date.now(),
        beforeSend: function beforeSend() {
          this.range = __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.range;
          this.symbol = __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.symbol;
        },
        success: function success(res) {
          if (__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.G_HTTP_REQUEST) {
            Control.requestSuccessHandler(res);
          }
        },
        error: function error(xhr, textStatus, errorThrown) {
          if (__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.debug) {
            console.log(xhr);
          }

          if (xhr.status === 200 && xhr.readyState === 4) {
            return;
          }

          __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.timer = setTimeout(function () {
            Control.requestData(true);
          }, __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.intervalTime);
        },
        complete: function complete() {
          __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.G_HTTP_REQUEST = null;
        }
      }));
    }
  }, {
    key: "requestSuccessHandler",
    value: function requestSuccessHandler(res) {
      if (__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.debug) {
        console.log(res);
      }

      if (!res || !res.success) {
        if (__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.type === 'poll') {
          __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.timer = setTimeout(function () {
            Control.requestData(true);
          }, __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.intervalTime);
        }

        return;
      }

      __WEBPACK_IMPORTED_MODULE_6_jquery___default()("#chart_loading").removeClass("activated");
      var chart = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.getChart();
      chart.setTitle();
      __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.data = eval(res.data);
      var updateDataRes = __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.chartMgr.updateData("frame0.k0", __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.data.lines);
      __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.requestParam = Control.setHttpRequestParam(__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.symbol, __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.range, null, __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.chartMgr.getDataSource("frame0.k0").getLastDate());
      var intervalTime = __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.intervalTime < __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.range ? __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.intervalTime : __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.range;

      if (!updateDataRes) {
        if (__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.type === 'poll') {
          __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.timer = setTimeout(Control.requestData, intervalTime);
        }

        return;
      }

      if (__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.data.trades && __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.data.trades.length > 0) {
        __WEBPACK_IMPORTED_MODULE_1__kline_trade__["a" /* KlineTrade */].instance.pushTrades(__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.data.trades);
        __WEBPACK_IMPORTED_MODULE_1__kline_trade__["a" /* KlineTrade */].instance.klineTradeInit = true;
      }

      if (__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.data.depths) {
        __WEBPACK_IMPORTED_MODULE_1__kline_trade__["a" /* KlineTrade */].instance.updateDepth(__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.data.depths);
      }

      Control.clearRefreshCounter();

      if (__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.type === 'poll') {
        __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.timer = setTimeout(Control.TwoSecondThread, intervalTime);
      }

      __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.redraw('All', false);
    }
  }, {
    key: "AbortRequest",
    value: function AbortRequest() {
      if (__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.type !== "stomp" || !__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.stompClient) {
        if (__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.G_HTTP_REQUEST && __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.G_HTTP_REQUEST.readyState !== 4) {
          __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.G_HTTP_REQUEST.abort();
        }
      }
    }
  }, {
    key: "TwoSecondThread",
    value: function TwoSecondThread() {
      var f = __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.chartMgr.getDataSource("frame0.k0").getLastDate();

      if (f === -1) {
        __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.requestParam = Control.setHttpRequestParam(__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.symbol, __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.range, __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.limit, null);
      } else {
        __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.requestParam = Control.setHttpRequestParam(__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.symbol, __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.range, null, f.toString());
      }

      Control.requestData();
    }
  }, {
    key: "readCookie",
    value: function readCookie() {
      __WEBPACK_IMPORTED_MODULE_3__chart_settings__["a" /* ChartSettings */].get();
      __WEBPACK_IMPORTED_MODULE_3__chart_settings__["a" /* ChartSettings */].save();
      var tmp = __WEBPACK_IMPORTED_MODULE_3__chart_settings__["a" /* ChartSettings */].get();
      __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.setChartStyle('frame0.k0', tmp.charts.chartStyle);
      var symbol = tmp.charts.symbol;

      if (!__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.init) {
        symbol = __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.symbol;
        __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.init = true;
      }

      __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.symbol = symbol;
      Control.switchSymbolSelected(symbol);
      var period = tmp.charts.period;
      Control.switchPeriod(period);
      __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#chart_period_' + period + '_v a').addClass('selected');
      __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#chart_period_' + period + '_h a').addClass('selected');

      if (tmp.charts.indicsStatus === 'close') {
        Control.switchIndic('off');
      } else if (tmp.charts.indicsStatus === 'open') {
        Control.switchIndic('on');
      }

      var mainIndic = __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#chart_select_main_indicator');
      mainIndic.find('a').each(function () {
        if (__WEBPACK_IMPORTED_MODULE_6_jquery___default()(this).attr('name') === tmp.charts.mIndic) {
          __WEBPACK_IMPORTED_MODULE_6_jquery___default()(this).addClass('selected');
        }
      });
      var chart_style = __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#chart_select_chart_style');
      chart_style.find('a').each(function () {
        if (__WEBPACK_IMPORTED_MODULE_6_jquery___default()(this)[0].innerHTML === tmp.charts.chartStyle) {
          __WEBPACK_IMPORTED_MODULE_6_jquery___default()(this).addClass('selected');
        }
      });
      __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.getChart().setMainIndicator(tmp.charts.mIndic);
      __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.setThemeName('frame0', tmp.theme);
      Control.switchTools('off');

      if (tmp.theme === 'Dark') {
        Control.switchTheme('dark');
      } else if (tmp.theme === 'Light') {
        Control.switchTheme('light');
      }

      Control.chartSwitchLanguage(tmp.language || "zh-cn");
    }
  }, {
    key: "setHttpRequestParam",
    value: function setHttpRequestParam(symbol, range, limit, since) {
      var str = "symbol=" + symbol + "&range=" + range;
      if (limit !== null) str += "&limit=" + limit;else str += "&since=" + since;

      if (__WEBPACK_IMPORTED_MODULE_1__kline_trade__["a" /* KlineTrade */].instance.tradeDate.getTime() !== 0) {
        str += "&prevTradeTime=" + __WEBPACK_IMPORTED_MODULE_1__kline_trade__["a" /* KlineTrade */].instance.tradeDate.getTime();
      }

      return str;
    }
  }, {
    key: "refreshTemplate",
    value: function refreshTemplate() {
      __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.chartMgr = __WEBPACK_IMPORTED_MODULE_4__templates__["a" /* DefaultTemplate */].loadTemplate("frame0.k0", "");
      __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.redraw('All', true);
    }
  }, {
    key: "chartSwitchLanguage",
    value: function chartSwitchLanguage(lang) {
      var langTmp = lang.replace(/-/, '_');
      __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#chart_language_switch_tmp').find('span').each(function () {
        var name = __WEBPACK_IMPORTED_MODULE_6_jquery___default()(this).attr('name');
        var attr = __WEBPACK_IMPORTED_MODULE_6_jquery___default()(this).attr(langTmp);
        name = '.' + name;
        var obj = __WEBPACK_IMPORTED_MODULE_6_jquery___default()(name)[0];
        if (!obj) return;
        __WEBPACK_IMPORTED_MODULE_6_jquery___default()(name).each(function () {
          __WEBPACK_IMPORTED_MODULE_6_jquery___default()(this)[0].innerHTML = attr;
        });
      });
      __WEBPACK_IMPORTED_MODULE_6_jquery___default()("#chart_language_setting_div li a[name='" + lang + "']").addClass("selected");
      __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.setLanguage(lang);
      __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.getChart().setTitle();
      var tmp = __WEBPACK_IMPORTED_MODULE_3__chart_settings__["a" /* ChartSettings */].get();
      tmp.language = lang;
      __WEBPACK_IMPORTED_MODULE_3__chart_settings__["a" /* ChartSettings */].save();
      __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.onLangChange(lang);
    }
  }, {
    key: "onSize",
    value: function onSize(w, h) {
      var width = w || window.innerWidth;
      var chartWidth = __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.showTrade ? width - __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.tradeWidth : width;
      var height = h || window.innerHeight;
      var container = __WEBPACK_IMPORTED_MODULE_6_jquery___default()(__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.element);
      container.css({
        width: width + 'px',
        height: height + 'px'
      });
      var toolBar = __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#chart_toolbar');
      var toolPanel = __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#chart_toolpanel');
      var canvasGroup = __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#chart_canvasGroup');
      var tabBar = __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#chart_tabbar');
      var toolPanelShown = toolPanel[0].style.display !== 'inline' ? false : true;
      var tabBarShown = tabBar[0].style.display !== 'block' ? false : true;
      var toolBarRect = {};
      toolBarRect.x = 0;
      toolBarRect.y = 0;
      toolBarRect.w = chartWidth;
      toolBarRect.h = 29;
      var toolPanelRect = {};
      toolPanelRect.x = 0;
      toolPanelRect.y = toolBarRect.h + 1;
      toolPanelRect.w = toolPanelShown ? 32 : 0;
      toolPanelRect.h = height - toolPanelRect.y;
      var tabBarRect = {};
      tabBarRect.w = toolPanelShown ? chartWidth - (toolPanelRect.w + 1) : chartWidth;
      tabBarRect.h = tabBarShown ? 22 : -1;
      tabBarRect.x = chartWidth - tabBarRect.w;
      tabBarRect.y = height - (tabBarRect.h + 1);
      var canvasGroupRect = {};
      canvasGroupRect.x = tabBarRect.x;
      canvasGroupRect.y = toolPanelRect.y;
      canvasGroupRect.w = tabBarRect.w;
      canvasGroupRect.h = tabBarRect.y - toolPanelRect.y;
      toolBar.css({
        left: toolBarRect.x + 'px',
        top: toolBarRect.y + 'px',
        width: toolBarRect.w + 'px',
        height: toolBarRect.h + 'px'
      });

      if (toolPanelShown) {
        toolPanel.css({
          left: toolPanelRect.x + 'px',
          top: toolPanelRect.y + 'px',
          width: toolPanelRect.w + 'px',
          height: toolPanelRect.h + 'px'
        });
      }

      canvasGroup.css({
        left: canvasGroupRect.x + 'px',
        top: canvasGroupRect.y + 'px',
        // width: canvasGroupRect.w + 'px',
        height: canvasGroupRect.h + 'px'
      });
      var mainCanvas = __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#chart_mainCanvas')[0];
      var overlayCanvas = __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#chart_overlayCanvas')[0];
      mainCanvas.width = canvasGroupRect.w;
      mainCanvas.height = canvasGroupRect.h;
      overlayCanvas.width = canvasGroupRect.w;
      overlayCanvas.height = canvasGroupRect.h;

      if (tabBarShown) {
        tabBar.css({
          left: tabBarRect.x + 'px',
          top: tabBarRect.y + 'px',
          width: tabBarRect.w + 'px',
          height: tabBarRect.h + 'px'
        });
      }

      var dlgSettings = __WEBPACK_IMPORTED_MODULE_6_jquery___default()("#chart_parameter_settings");
      dlgSettings.css({
        left: chartWidth - dlgSettings.width() >> 1,
        top: height - dlgSettings.height() >> 1
      });
      var dlgLoading = __WEBPACK_IMPORTED_MODULE_6_jquery___default()("#chart_loading");
      dlgLoading.css({
        left: chartWidth - dlgLoading.width() >> 1,
        top: height - dlgLoading.height() >> 2
      });
      var domElemCache = __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#chart_dom_elem_cache');
      var rowTheme = __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#chart_select_theme')[0];
      var rowTools = __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#chart_enable_tools')[0];
      var rowIndic = __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#chart_enable_indicator')[0];
      var periodsVert = __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#chart_toolbar_periods_vert');
      var periodsHorz = __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#chart_toolbar_periods_horz')[0];
      var showIndic = __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#chart_show_indicator')[0];
      var showTools = __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#chart_show_tools')[0];
      var selectTheme = __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#chart_toolbar_theme')[0];
      var dropDownSettings = __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#chart_dropdown_settings');
      var periodsVertNW = periodsVert[0].offsetWidth;
      var periodsHorzNW = periodsVertNW + periodsHorz.offsetWidth;
      var showIndicNW = periodsHorzNW + showIndic.offsetWidth + 4;
      var showToolsNW = showIndicNW + showTools.offsetWidth + 4;
      var selectThemeNW = showToolsNW + selectTheme.offsetWidth;
      var dropDownSettingsW = dropDownSettings.find(".chart_dropdown_t")[0].offsetWidth + 150;
      periodsVertNW += dropDownSettingsW;
      periodsHorzNW += dropDownSettingsW;
      showIndicNW += dropDownSettingsW;
      showToolsNW += dropDownSettingsW;
      selectThemeNW += dropDownSettingsW;

      if (chartWidth < periodsHorzNW) {
        domElemCache.append(periodsHorz);
      } else {
        periodsVert.after(periodsHorz);
      }

      if (chartWidth < showIndicNW) {
        domElemCache.append(showIndic);
        rowIndic.style.display = "";
      } else {
        dropDownSettings.before(showIndic);
        rowIndic.style.display = "none";
      }

      if (chartWidth < showToolsNW) {
        domElemCache.append(showTools);
        rowTools.style.display = "";
      } else {
        dropDownSettings.before(showTools);
        rowTools.style.display = "none";
      }

      if (chartWidth < selectThemeNW) {
        domElemCache.append(selectTheme);
        rowTheme.style.display = "";
      } else {
        dropDownSettings.before(selectTheme);
        rowTheme.style.display = "none";
      }

      __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.redraw('All', true);
      __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.onResize(width, height);
    }
  }, {
    key: "mouseWheel",
    value: function mouseWheel(e, delta) {
      __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.scale(delta > 0 ? 1 : -1);
      __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.redraw("All", true);
      return false;
    }
  }, {
    key: "switchTheme",
    value: function switchTheme(name) {
      __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#chart_toolbar_theme a').removeClass('selected');
      __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#chart_select_theme a').removeClass('selected');
      __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#chart_toolbar_theme').find('a').each(function () {
        if (__WEBPACK_IMPORTED_MODULE_6_jquery___default()(this).attr('name') === name) {
          __WEBPACK_IMPORTED_MODULE_6_jquery___default()(this).addClass('selected');
        }
      });
      __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#chart_select_theme a').each(function () {
        if (__WEBPACK_IMPORTED_MODULE_6_jquery___default()(this).attr('name') === name) {
          __WEBPACK_IMPORTED_MODULE_6_jquery___default()(this).addClass('selected');
        }
      });
      __WEBPACK_IMPORTED_MODULE_6_jquery___default()(".chart_container").attr('class', "chart_container " + name);
      __WEBPACK_IMPORTED_MODULE_6_jquery___default()(".marketName_ a").attr('class', name);

      if (name === 'dark') {
        __WEBPACK_IMPORTED_MODULE_6_jquery___default()(".trade_container").addClass("dark").removeClass("light");
        __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.setThemeName('frame0', 'Dark');
        var tmp = __WEBPACK_IMPORTED_MODULE_3__chart_settings__["a" /* ChartSettings */].get();
        tmp.theme = 'Dark';
        __WEBPACK_IMPORTED_MODULE_3__chart_settings__["a" /* ChartSettings */].save();
      } else if (name === 'light') {
        __WEBPACK_IMPORTED_MODULE_6_jquery___default()(".trade_container").addClass("light").removeClass("dark");
        __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.setThemeName('frame0', 'Light');

        var _tmp = __WEBPACK_IMPORTED_MODULE_3__chart_settings__["a" /* ChartSettings */].get();

        _tmp.theme = 'Light';
        __WEBPACK_IMPORTED_MODULE_3__chart_settings__["a" /* ChartSettings */].save();
      }

      var a = {};
      a.command = "set current themes";
      a.content = name;
      __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#chart_output_interface_text').val(JSON.stringify(a));
      __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#chart_output_interface_submit').submit();
      new __WEBPACK_IMPORTED_MODULE_5__mevent__["a" /* MEvent */]().raise(name);
      __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.redraw();
      __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.onThemeChange(name);
    }
  }, {
    key: "switchTools",
    value: function switchTools(name) {
      __WEBPACK_IMPORTED_MODULE_6_jquery___default()(".chart_dropdown_data").removeClass("chart_dropdown-hover");
      __WEBPACK_IMPORTED_MODULE_6_jquery___default()("#chart_toolpanel .chart_toolpanel_button").removeClass("selected");
      __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#chart_enable_tools a').removeClass('selected');

      if (name === 'on') {
        __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#chart_show_tools').addClass('selected');
        __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#chart_enable_tools a').each(function () {
          if (__WEBPACK_IMPORTED_MODULE_6_jquery___default()(this).attr('name') === 'on') {
            __WEBPACK_IMPORTED_MODULE_6_jquery___default()(this).addClass('selected');
          }
        });
        __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#chart_toolpanel')[0].style.display = 'inline';

        if (__WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance._drawingTool === __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].DrawingTool.Cursor) {
          __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#chart_Cursor').parent().addClass('selected');
        } else if (__WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance._drawingTool === __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].DrawingTool.CrossCursor) {
          __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#chart_CrossCursor').parent().addClass('selected');
        }
      } else if (name === 'off') {
        __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#chart_show_tools').removeClass('selected');
        __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#chart_enable_tools a').each(function () {
          if (__WEBPACK_IMPORTED_MODULE_6_jquery___default()(this).attr('name') === 'off') {
            __WEBPACK_IMPORTED_MODULE_6_jquery___default()(this).addClass('selected');
          }
        });
        __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#chart_toolpanel')[0].style.display = 'none';
        __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.setRunningMode(__WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance._beforeDrawingTool);
        __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.redraw("All", true);
      }

      if (__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.isSized) {
        Control.onSize();
      } else {
        Control.onSize(__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.width, __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.height);
      }
    }
  }, {
    key: "switchIndic",
    value: function switchIndic(name) {
      __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#chart_enable_indicator a').removeClass('selected');
      __WEBPACK_IMPORTED_MODULE_6_jquery___default()("#chart_enable_indicator a[name='" + name + "']").addClass('selected');

      if (name === 'on') {
        __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#chart_show_indicator').addClass('selected');
        var tmp = __WEBPACK_IMPORTED_MODULE_3__chart_settings__["a" /* ChartSettings */].get();
        tmp.charts.indicsStatus = 'open';
        __WEBPACK_IMPORTED_MODULE_3__chart_settings__["a" /* ChartSettings */].save();
        var value = tmp.charts.indics[1];
        if (__WEBPACK_IMPORTED_MODULE_4__templates__["b" /* Template */].displayVolume === false) __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.getChart().setIndicator(2, value);else __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.getChart().setIndicator(2, value);
        __WEBPACK_IMPORTED_MODULE_6_jquery___default()("#chart_tabbar").find('a').each(function () {
          if (__WEBPACK_IMPORTED_MODULE_6_jquery___default()(this).attr('name') === value) __WEBPACK_IMPORTED_MODULE_6_jquery___default()(this).addClass('selected');
        });
        __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#chart_tabbar')[0].style.display = 'block';
      } else if (name === 'off') {
        __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#chart_show_indicator').removeClass('selected');
        __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.getChart().setIndicator(2, 'NONE');

        var _tmp2 = __WEBPACK_IMPORTED_MODULE_3__chart_settings__["a" /* ChartSettings */].get();

        _tmp2.charts.indicsStatus = 'close';
        __WEBPACK_IMPORTED_MODULE_3__chart_settings__["a" /* ChartSettings */].save();
        __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#chart_tabbar')[0].style.display = 'none';
        __WEBPACK_IMPORTED_MODULE_6_jquery___default()("#chart_tabbar a").removeClass("selected");
      }

      if (__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.isSized) {
        Control.onSize();
      } else {
        Control.onSize(__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.width, __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.height);
      }
    }
  }, {
    key: "switchPeriod",
    value: function switchPeriod(name) {
      __WEBPACK_IMPORTED_MODULE_6_jquery___default()(".chart_container .chart_toolbar_tabgroup a").removeClass("selected");
      __WEBPACK_IMPORTED_MODULE_6_jquery___default()("#chart_toolbar_periods_vert ul a").removeClass("selected");
      __WEBPACK_IMPORTED_MODULE_6_jquery___default()(".chart_container .chart_toolbar_tabgroup a").each(function () {
        if (__WEBPACK_IMPORTED_MODULE_6_jquery___default()(this).parent().attr('name') === name) {
          __WEBPACK_IMPORTED_MODULE_6_jquery___default()(this).addClass('selected');
        }
      });
      __WEBPACK_IMPORTED_MODULE_6_jquery___default()("#chart_toolbar_periods_vert ul a").each(function () {
        if (__WEBPACK_IMPORTED_MODULE_6_jquery___default()(this).parent().attr('name') === name) {
          __WEBPACK_IMPORTED_MODULE_6_jquery___default()(this).addClass('selected');
        }
      });
      __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.showCursor();
      Control.calcPeriodWeight(name);

      if (name === 'line') {
        __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.getChart().strIsLine = true;
        __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.setChartStyle('frame0.k0', 'Line');
        __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.getChart().setCurrentPeriod('line');

        var _settings = __WEBPACK_IMPORTED_MODULE_3__chart_settings__["a" /* ChartSettings */].get();

        _settings.charts.period = name;
        __WEBPACK_IMPORTED_MODULE_3__chart_settings__["a" /* ChartSettings */].save();
        return;
      }

      __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.getChart().strIsLine = false;
      var p = __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.tagMapPeriod[name];
      __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.setChartStyle('frame0.k0', __WEBPACK_IMPORTED_MODULE_3__chart_settings__["a" /* ChartSettings */].get().charts.chartStyle);
      __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.getChart().setCurrentPeriod(p);
      var settings = __WEBPACK_IMPORTED_MODULE_3__chart_settings__["a" /* ChartSettings */].get();
      settings.charts.period = name;
      __WEBPACK_IMPORTED_MODULE_3__chart_settings__["a" /* ChartSettings */].save();
    }
  }, {
    key: "reset",
    value: function reset(symbol) {
      __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.symbol = symbol;

      if (__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.showTrade) {
        __WEBPACK_IMPORTED_MODULE_1__kline_trade__["a" /* KlineTrade */].instance.reset(symbol);
      }
    }
  }, {
    key: "switchSymbolSelected",
    value: function switchSymbolSelected(symbol) {
      Control.reset(symbol);
      __WEBPACK_IMPORTED_MODULE_6_jquery___default()(".market_chooser ul a").removeClass("selected");
      __WEBPACK_IMPORTED_MODULE_6_jquery___default()(".market_chooser ul a[name='" + symbol + "']").addClass("selected");
      __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.getChart()._symbol = symbol;
      var settings = __WEBPACK_IMPORTED_MODULE_3__chart_settings__["a" /* ChartSettings */].get();
      settings.charts.symbol = symbol;
      __WEBPACK_IMPORTED_MODULE_3__chart_settings__["a" /* ChartSettings */].save();
    }
  }, {
    key: "switchSymbol",
    value: function switchSymbol(symbol) {
      if (__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.type === "stomp" && __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.stompClient.ws.readyState === 1) {
        __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.subscribed.unsubscribe();
        __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.subscribed = __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.stompClient.subscribe(__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.subscribePath + '/' + symbol + '/' + __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.range, Control.subscribeCallback);
      }

      Control.switchSymbolSelected(symbol);
      var settings = __WEBPACK_IMPORTED_MODULE_3__chart_settings__["a" /* ChartSettings */].get();

      if (settings.charts.period === "line") {
        __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.getChart().strIsLine = true;
        __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.setChartStyle('frame0.k0', 'Line');
      } else {
        __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.getChart().strIsLine = false;
        __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.setChartStyle('frame0.k0', __WEBPACK_IMPORTED_MODULE_3__chart_settings__["a" /* ChartSettings */].get().charts.chartStyle);
      }

      __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.getChart().setSymbol(symbol);
    }
  }, {
    key: "calcPeriodWeight",
    value: function calcPeriodWeight(period) {
      var index = period;
      if (period !== 'line') index = __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.periodMap[__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.tagMapPeriod[period]];
      var periodWeight = __WEBPACK_IMPORTED_MODULE_3__chart_settings__["a" /* ChartSettings */].get().charts.period_weight;

      for (var i in periodWeight) {
        if (periodWeight[i] > periodWeight[index]) {
          periodWeight[i] -= 1;
        }
      }

      periodWeight[index] = 8;
      __WEBPACK_IMPORTED_MODULE_3__chart_settings__["a" /* ChartSettings */].save();
    }
  }, {
    key: "subscribeCallback",
    value: function subscribeCallback(res) {
      Control.requestSuccessHandler(JSON.parse(res.body));
    }
  }, {
    key: "socketConnect",
    value: function socketConnect() {
      if (!__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.stompClient || !__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.socketConnected) {
        if (__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.enableSockjs) {
          var socket = new SockJS(__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.url);
          __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.stompClient = Stomp.over(socket);
        } else {
          __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.stompClient = Stomp.client(__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.url);
        }

        __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.socketConnected = true;
      }

      if (__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.stompClient.ws.readyState === 1) {
        console.log('DEBUG: already connected');
        return;
      }

      if (!__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.debug) {
        __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.stompClient.debug = null;
      }

      __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.stompClient.connect({}, function () {
        __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.stompClient.subscribe('/user' + __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.subscribePath, Control.subscribeCallback);
        __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.subscribed = __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.stompClient.subscribe(__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.subscribePath + '/' + __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.symbol + '/' + __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.range, Control.subscribeCallback);
        Control.requestData(true);
      }, function () {
        __WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.stompClient.disconnect();
        console.log("DEBUG: reconnect in 5 seconds ...");
        setTimeout(function () {
          Control.socketConnect();
        }, 5000);
      });
    }
  }]);

  return Control;
}();
Control.refreshCounter = 0;
Control.refreshHandler = null;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CPoint; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chart_manager__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__named_object__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_sources__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(5);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var CPoint =
/*#__PURE__*/
function (_NamedObject) {
  _inherits(CPoint, _NamedObject);

  function CPoint(name) {
    var _this;

    _classCallCheck(this, CPoint);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CPoint).call(this, name));
    _this.pos = {
      index: -1,
      value: -1
    };
    _this.state = CPoint.state.Hide;
    return _this;
  }

  _createClass(CPoint, [{
    key: "getChartObjects",
    value: function getChartObjects() {
      var ppMgr = __WEBPACK_IMPORTED_MODULE_0__chart_manager__["a" /* ChartManager */].instance;
      var ppCDS = ppMgr.getDataSource("frame0.k0");
      if (ppCDS === null || !__WEBPACK_IMPORTED_MODULE_3__util__["a" /* Util */].isInstance(ppCDS, __WEBPACK_IMPORTED_MODULE_2__data_sources__["b" /* MainDataSource */])) return null;
      var ppTimeline = ppMgr.getTimeline("frame0.k0");
      if (ppTimeline === null) return null;
      var ppRange = ppMgr.getRange("frame0.k0.main");
      if (ppRange === null) return null;
      return {
        pMgr: ppMgr,
        pCDS: ppCDS,
        pTimeline: ppTimeline,
        pRange: ppRange
      };
    }
  }, {
    key: "setPosXY",
    value: function setPosXY(x, y) {
      var pObj = this.getChartObjects();
      var i = pObj.pTimeline.toIndex(x);
      var v = pObj.pRange.toValue(y);
      var result = this.snapValue(i, v);
      if (result !== null) v = result;
      this.setPosIV(i, v);
    }
  }, {
    key: "setPosXYNoSnap",
    value: function setPosXYNoSnap(x, y) {
      var pObj = this.getChartObjects();
      var i = pObj.pTimeline.toIndex(x);
      var v = pObj.pRange.toValue(y);
      this.setPosIV(i, v);
    }
  }, {
    key: "setPosIV",
    value: function setPosIV(i, v) {
      this.pos = {
        index: i,
        value: v
      };
    }
  }, {
    key: "getPosXY",
    value: function getPosXY() {
      var pObj = this.getChartObjects();

      var _x = pObj.pTimeline.toItemCenter(this.pos.index);

      var _y = pObj.pRange.toY(this.pos.value);

      return {
        x: _x,
        y: _y
      };
    }
  }, {
    key: "getPosIV",
    value: function getPosIV() {
      return {
        i: this.pos.index,
        v: this.pos.value
      };
    }
  }, {
    key: "setState",
    value: function setState(s) {
      this.state = s;
    }
  }, {
    key: "getState",
    value: function getState() {
      return this.state;
    }
  }, {
    key: "isSelected",
    value: function isSelected(x, y) {
      var xy = this.getPosXY();
      if (x < xy.x - 4 || x > xy.x + 4 || y < xy.y - 4 || y > xy.y + 4) return false;
      this.setState(CPoint.state.Highlight);
      return true;
    }
  }, {
    key: "snapValue",
    value: function snapValue(i, v) {
      var pObj = this.getChartObjects();
      var result = null;
      var first = Math.floor(pObj.pTimeline.getFirstIndex());
      var last = Math.floor(pObj.pTimeline.getLastIndex());
      if (i < first || i > last) return result;
      var y = pObj.pRange.toY(v);
      var pData = pObj.pCDS.getDataAt(i);
      if (pData === null || pData === undefined) return result;
      var pDataPre = null;
      if (i > 0) pDataPre = pObj.pCDS.getDataAt(i - 1);else pDataPre = pObj.pCDS.getDataAt(i);
      var candleStickStyle = pObj.pMgr.getChartStyle(pObj.pCDS.getFrameName());
      var open = pObj.pRange.toY(pData.open);
      var high = pObj.pRange.toY(pData.high);
      var low = pObj.pRange.toY(pData.low);
      var close = pObj.pRange.toY(pData.close);

      if (candleStickStyle === "CandleStickHLC") {
        open = pObj.pRange.toY(pDataPre.close);
      }

      var dif_open = Math.abs(open - y);
      var dif_high = Math.abs(high - y);
      var dif_low = Math.abs(low - y);
      var dif_close = Math.abs(close - y);

      if (dif_open <= dif_high && dif_open <= dif_low && dif_open <= dif_close) {
        if (dif_open < 6) result = pData.open;
      }

      if (dif_high <= dif_open && dif_high <= dif_low && dif_high <= dif_close) {
        if (dif_high < 6) result = pData.high;
      }

      if (dif_low <= dif_open && dif_low <= dif_high && dif_low <= dif_close) {
        if (dif_low < 6) result = pData.low;
      }

      if (dif_close <= dif_open && dif_close <= dif_high && dif_close <= dif_low) {
        if (dif_close < 6) result = pData.close;
      }

      return result;
    }
  }]);

  return CPoint;
}(__WEBPACK_IMPORTED_MODULE_1__named_object__["a" /* NamedObject */]);
CPoint.state = {
  Hide: 0,
  Show: 1,
  Highlight: 2
};

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return CToolObject; });
/* unused harmony export CBiToolObject */
/* unused harmony export CTriToolObject */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CBandLineObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CBiParallelLineObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CBiParallelRayLineObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CFibFansObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CFibRetraceObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CHoriRayLineObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return CHoriSegLineObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return CHoriStraightLineObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return CRayLineObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return CSegLineObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return CStraightLineObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return CTriParallelLineObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return CVertiStraightLineObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return CPriceLineObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CArrowLineObject; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chart_manager__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__named_object__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cpoint__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_sources__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__plotters__ = __webpack_require__(11);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var CToolObject =
/*#__PURE__*/
function (_NamedObject) {
  _inherits(CToolObject, _NamedObject);

  function CToolObject(name) {
    var _this;

    _classCallCheck(this, CToolObject);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CToolObject).call(this, name));
    _this.drawer = null;
    _this.state = CToolObject.state.BeforeDraw;
    _this.points = [];
    _this.step = 0;
    return _this;
  }

  _createClass(CToolObject, [{
    key: "getChartObjects",
    value: function getChartObjects() {
      var ppMgr = __WEBPACK_IMPORTED_MODULE_0__chart_manager__["a" /* ChartManager */].instance;
      var ppCDS = ppMgr.getDataSource("frame0.k0");
      if (ppCDS === null || !__WEBPACK_IMPORTED_MODULE_3__util__["a" /* Util */].isInstance(ppCDS, __WEBPACK_IMPORTED_MODULE_4__data_sources__["b" /* MainDataSource */])) return null;
      var ppTimeline = ppMgr.getTimeline("frame0.k0");
      if (ppTimeline === null) return null;
      var ppArea = ppMgr.getArea('frame0.k0.main');
      if (ppArea === null) return null;
      var ppRange = ppMgr.getRange("frame0.k0.main");
      if (ppRange === null) return null;
      return {
        pMgr: ppMgr,
        pCDS: ppCDS,
        pTimeline: ppTimeline,
        pArea: ppArea,
        pRange: ppRange
      };
    }
  }, {
    key: "isValidMouseXY",
    value: function isValidMouseXY(x, y) {
      var pObj = this.getChartObjects();
      var areaPos = {
        left: pObj.pArea.getLeft(),
        top: pObj.pArea.getTop(),
        right: pObj.pArea.getRight(),
        bottom: pObj.pArea.getBottom()
      };
      return !(x < areaPos.left || x > areaPos.right || y < areaPos.top || y > areaPos.bottom);
    }
  }, {
    key: "getPlotter",
    value: function getPlotter() {
      return this.drawer;
    }
  }, {
    key: "setState",
    value: function setState(s) {
      this.state = s;
    }
  }, {
    key: "getState",
    value: function getState() {
      return this.state;
    }
  }, {
    key: "addPoint",
    value: function addPoint(point) {
      this.points.push(point);
    }
  }, {
    key: "getPoint",
    value: function getPoint(i) {
      return this.points[i];
    }
  }, {
    key: "acceptMouseMoveEvent",
    value: function acceptMouseMoveEvent(x, y) {
      if (this.isValidMouseXY(x, y) === false) {
        return false;
      }

      if (this.state === CToolObject.state.BeforeDraw) {
        this.setBeforeDrawPos(x, y);
      } else if (this.state === CToolObject.state.Draw) {
        this.setDrawPos(x, y);
      } else if (this.state === CToolObject.state.AfterDraw) {
        this.setAfterDrawPos(x, y);
      }

      return true;
    }
  }, {
    key: "acceptMouseDownEvent",
    value: function acceptMouseDownEvent(x, y) {
      if (this.isValidMouseXY(x, y) === false) {
        return false;
      }

      if (this.state === CToolObject.state.BeforeDraw) {
        this.setDrawPos(x, y);
        this.setState(CToolObject.state.Draw);
      } else if (this.state === CToolObject.state.Draw) {
        this.setAfterDrawPos(x, y);
        if (this.step === 0) this.setState(CToolObject.state.AfterDraw);
      } else if (this.state === CToolObject.state.AfterDraw) {
        if (CToolObject.prototype.isSelected(x, y)) {
          this.setDrawPos(x, y);
          this.setState(CToolObject.state.Draw);
        } else {
          this.oldx = x;
          this.oldy = y;
        }
      }

      return true;
    }
  }, {
    key: "acceptMouseDownMoveEvent",
    value: function acceptMouseDownMoveEvent(x, y) {
      if (this.isValidMouseXY(x, y) === false) {
        return false;
      }

      if (this.state === CToolObject.state.Draw) {
        this.setDrawPos(x, y);
      } else if (this.state === CToolObject.state.AfterDraw) {
        var pObj = this.getChartObjects();

        var _width = pObj.pTimeline.getItemWidth();

        var _height = pObj.pRange;
        if (Math.abs(x - this.oldx) < _width && Math.abs(y - this.oldy) === 0) return true;

        var _old_x = pObj.pTimeline.toIndex(this.oldx);

        var _old_y = pObj.pRange.toValue(this.oldy);

        var _new_x = pObj.pTimeline.toIndex(x);

        var _new_y = pObj.pRange.toValue(y);

        this.oldx = x;
        this.oldy = y;

        var _dif_x = _new_x - _old_x;

        var _dif_y = _new_y - _old_y;

        for (var index in this.points) {
          this.points[index].pos.index += _dif_x;
          this.points[index].pos.value += _dif_y;
        }
      }

      return true;
    }
  }, {
    key: "acceptMouseUpEvent",
    value: function acceptMouseUpEvent(x, y) {
      if (this.isValidMouseXY(x, y) === false) {
        return false;
      }

      if (this.state === CToolObject.state.Draw) {
        this.setAfterDrawPos(x, y);
        if (this.step === 0) this.setState(CToolObject.state.AfterDraw);
        return true;
      }

      return false;
    }
  }, {
    key: "setBeforeDrawPos",
    value: function setBeforeDrawPos(x, y) {
      for (var index in this.points) {
        this.points[index].setPosXY(x, y);
        this.points[index].setState(__WEBPACK_IMPORTED_MODULE_2__cpoint__["a" /* CPoint */].state.Show);
      }
    }
  }, {
    key: "setDrawPos",
    value: function setDrawPos(x, y) {
      for (var index in this.points) {
        if (this.points[index].getState() === __WEBPACK_IMPORTED_MODULE_2__cpoint__["a" /* CPoint */].state.Highlight) {
          this.points[index].setPosXY(x, y);
        }
      }
    }
  }, {
    key: "setAfterDrawPos",
    value: function setAfterDrawPos(x, y) {
      if (this.step !== 0) {
        this.step -= 1;
      }

      for (var index in this.points) {
        this.points[index].setState(__WEBPACK_IMPORTED_MODULE_2__cpoint__["a" /* CPoint */].state.Hide);
      }

      if (this.step === 0) {
        var pObj = this.getChartObjects();
        pObj.pMgr.setNormalMode();
      }
    }
  }, {
    key: "isSelected",
    value: function isSelected(x, y) {
      var isFind = false;

      for (var index in this.points) {
        if (this.points[index].isSelected(x, y)) {
          this.points[index].setState(__WEBPACK_IMPORTED_MODULE_2__cpoint__["a" /* CPoint */].state.Highlight);
          isFind = true;
          break;
        }
      }

      if (isFind === true) {
        this.select();
        return true;
      }

      return false;
    }
  }, {
    key: "select",
    value: function select() {
      for (var index in this.points) {
        if (this.points[index].getState() === __WEBPACK_IMPORTED_MODULE_2__cpoint__["a" /* CPoint */].state.Hide) {
          this.points[index].setState(__WEBPACK_IMPORTED_MODULE_2__cpoint__["a" /* CPoint */].state.Show);
        }
      }
    }
  }, {
    key: "unselect",
    value: function unselect() {
      for (var index in this.points) {
        if (this.points[index].getState() !== __WEBPACK_IMPORTED_MODULE_2__cpoint__["a" /* CPoint */].state.Hide) {
          this.points[index].setState(__WEBPACK_IMPORTED_MODULE_2__cpoint__["a" /* CPoint */].state.Hide);
        }
      }
    }
  }, {
    key: "calcDistance",
    value: function calcDistance(point1, point2, point3) {
      var xa = point1.getPosXY().x;
      var ya = point1.getPosXY().y;
      var xb = point2.getPosXY().x;
      var yb = point2.getPosXY().y;
      var xc = point3.getPosXY().x;
      var yc = point3.getPosXY().y;
      var a1 = xa - xc;
      var a2 = ya - yc;
      var b1 = xb - xc;
      var b2 = yb - yc;
      var area = Math.abs(a1 * b2 - a2 * b1);
      var len = Math.sqrt(Math.pow(xb - xa, 2) + Math.pow(yb - ya, 2));
      return area / len;
    }
  }, {
    key: "calcGap",
    value: function calcGap(r, x, y) {
      var xa = r.sx;
      var ya = r.sy;
      var xb = r.ex;
      var yb = r.ey;
      var xc = x;
      var yc = y;
      var a1 = xa - xc;
      var a2 = ya - yc;
      var b1 = xb - xc;
      var b2 = yb - yc;
      var area = Math.abs(a1 * b2 - a2 * b1);
      var len = Math.sqrt(Math.pow(xb - xa, 2) + Math.pow(yb - ya, 2));
      return area / len;
    }
  }, {
    key: "isWithRect",
    value: function isWithRect(point1, point2, point3) {
      var sx = point1.getPosXY().x;
      var sy = point1.getPosXY().y;
      var ex = point2.getPosXY().x;
      var ey = point2.getPosXY().y;
      var x = point3.getPosXY().x;
      var y = point3.getPosXY().y;

      if (sx > ex) {
        sx += 4;
        ex -= 4;
      } else {
        sx -= 4;
        ex += 4;
      }

      if (sy > ey) {
        sy += 4;
        ey -= 4;
      } else {
        sy -= 4;
        ey += 4;
      }

      if (sx <= x && ex >= x && sy <= y && ey >= y) {
        return true;
      }

      if (sx >= x && ex <= x && sy <= y && ey >= y) {
        return true;
      }

      if (sx <= x && ex >= x && sy >= y && ey <= y) {
        return true;
      }

      if (sx >= x && ex <= x && sy >= y && ey <= y) {
        return true;
      }

      return false;
    }
  }]);

  return CToolObject;
}(__WEBPACK_IMPORTED_MODULE_1__named_object__["a" /* NamedObject */]);
CToolObject.state = {
  BeforeDraw: 0,
  Draw: 1,
  AfterDraw: 2
};
var CBiToolObject =
/*#__PURE__*/
function (_CToolObject) {
  _inherits(CBiToolObject, _CToolObject);

  function CBiToolObject(name) {
    var _this2;

    _classCallCheck(this, CBiToolObject);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(CBiToolObject).call(this, name));

    _this2.addPoint(new __WEBPACK_IMPORTED_MODULE_2__cpoint__["a" /* CPoint */](name));

    _this2.addPoint(new __WEBPACK_IMPORTED_MODULE_2__cpoint__["a" /* CPoint */](name));

    return _this2;
  }

  _createClass(CBiToolObject, [{
    key: "setBeforeDrawPos",
    value: function setBeforeDrawPos(x, y) {
      this.step = 1;

      _get(_getPrototypeOf(CBiToolObject.prototype), "setBeforeDrawPos", this).call(this, x, y);

      this.getPoint(0).setState(__WEBPACK_IMPORTED_MODULE_2__cpoint__["a" /* CPoint */].state.Show);
      this.getPoint(1).setState(__WEBPACK_IMPORTED_MODULE_2__cpoint__["a" /* CPoint */].state.Highlight);
    }
  }]);

  return CBiToolObject;
}(CToolObject);
var CTriToolObject =
/*#__PURE__*/
function (_CToolObject2) {
  _inherits(CTriToolObject, _CToolObject2);

  function CTriToolObject(name) {
    var _this3;

    _classCallCheck(this, CTriToolObject);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(CTriToolObject).call(this, name));

    _this3.addPoint(new __WEBPACK_IMPORTED_MODULE_2__cpoint__["a" /* CPoint */](name));

    _this3.addPoint(new __WEBPACK_IMPORTED_MODULE_2__cpoint__["a" /* CPoint */](name));

    _this3.addPoint(new __WEBPACK_IMPORTED_MODULE_2__cpoint__["a" /* CPoint */](name));

    return _this3;
  }

  _createClass(CTriToolObject, [{
    key: "setBeforeDrawPos",
    value: function setBeforeDrawPos(x, y) {
      this.step = 2;

      _get(_getPrototypeOf(CTriToolObject.prototype), "setBeforeDrawPos", this).call(this, x, y);

      this.getPoint(0).setState(__WEBPACK_IMPORTED_MODULE_2__cpoint__["a" /* CPoint */].state.Show);
      this.getPoint(1).setState(__WEBPACK_IMPORTED_MODULE_2__cpoint__["a" /* CPoint */].state.Show);
      this.getPoint(2).setState(__WEBPACK_IMPORTED_MODULE_2__cpoint__["a" /* CPoint */].state.Highlight);
    }
  }, {
    key: "setAfterDrawPos",
    value: function setAfterDrawPos(x, y) {
      if (this.step !== 0) this.step -= 1;

      if (this.step === 0) {
        for (var index in this.points) {
          this.points[index].setState(__WEBPACK_IMPORTED_MODULE_2__cpoint__["a" /* CPoint */].state.Hide);
        }
      } else {
        this.getPoint(0).setState(__WEBPACK_IMPORTED_MODULE_2__cpoint__["a" /* CPoint */].state.Show);
        this.getPoint(1).setState(__WEBPACK_IMPORTED_MODULE_2__cpoint__["a" /* CPoint */].state.Highlight);
        this.getPoint(2).setState(__WEBPACK_IMPORTED_MODULE_2__cpoint__["a" /* CPoint */].state.Show);
      }

      if (this.step === 0) {
        var pObj = this.getChartObjects();
        pObj.pMgr.setNormalMode();
      }
    }
  }]);

  return CTriToolObject;
}(CToolObject);
var CBandLineObject =
/*#__PURE__*/
function (_CBiToolObject) {
  _inherits(CBandLineObject, _CBiToolObject);

  function CBandLineObject(name) {
    var _this4;

    _classCallCheck(this, CBandLineObject);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(CBandLineObject).call(this, name));
    _this4.drawer = new __WEBPACK_IMPORTED_MODULE_5__plotters__["j" /* DrawBandLinesPlotter */](name, _assertThisInitialized(_this4));
    return _this4;
  }

  _createClass(CBandLineObject, [{
    key: "isSelected",
    value: function isSelected(x, y) {
      if (_get(_getPrototypeOf(CBandLineObject.prototype), "isSelected", this).call(this, x, y) === true) {
        return true;
      }

      var c = new __WEBPACK_IMPORTED_MODULE_2__cpoint__["a" /* CPoint */]("frame0.k0");
      c.setPosXY(x, y);
      var sx = this.getPoint(0).getPosXY().x;
      var sy = this.getPoint(0).getPosXY().y;
      var ex = this.getPoint(1).getPosXY().x;
      var ey = this.getPoint(1).getPosXY().y;
      var fibSequence = [100.0, 87.5, 75.0, 62.5, 50.0, 37.5, 25.0, 12.5, 0.0];

      for (var i = 0; i < fibSequence.length; i++) {
        var stage_y = sy + (100 - fibSequence[i]) / 100 * (ey - sy);

        if (stage_y < y + 4 && stage_y > y - 4) {
          this.select();
          return true;
        }
      }

      return false;
    }
  }]);

  return CBandLineObject;
}(CBiToolObject);
var CBiParallelLineObject =
/*#__PURE__*/
function (_CTriToolObject) {
  _inherits(CBiParallelLineObject, _CTriToolObject);

  function CBiParallelLineObject(name) {
    var _this5;

    _classCallCheck(this, CBiParallelLineObject);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(CBiParallelLineObject).call(this, name));
    _this5.drawer = new __WEBPACK_IMPORTED_MODULE_5__plotters__["k" /* DrawBiParallelLinesPlotter */](name, _assertThisInitialized(_this5));
    return _this5;
  }

  _createClass(CBiParallelLineObject, [{
    key: "isSelected",
    value: function isSelected(x, y) {
      if (_get(_getPrototypeOf(CBiParallelLineObject.prototype), "isSelected", this).call(this, x, y) === true) {
        return true;
      }

      var _0x = this.getPoint(0).getPosXY().x;
      var _0y = this.getPoint(0).getPosXY().y;
      var _1x = this.getPoint(1).getPosXY().x;
      var _1y = this.getPoint(1).getPosXY().y;
      var _2x = this.getPoint(2).getPosXY().x;
      var _2y = this.getPoint(2).getPosXY().y;
      var _a = {
        x: _0x - _1x,
        y: _0y - _1y
      };
      var _b = {
        x: _0x - _2x,
        y: _0y - _2y
      };
      var _c = {
        x: _a.x + _b.x,
        y: _a.y + _b.y
      };

      var _3x = _0x - _c.x;

      var _3y = _0y - _c.y;

      var r1 = {
        sx: _0x,
        sy: _0y,
        ex: _2x,
        ey: _2y
      };
      var r2 = {
        sx: _1x,
        sy: _1y,
        ex: _3x,
        ey: _3y
      };

      if (this.calcGap(r1, x, y) > 4 && this.calcGap(r2, x, y) > 4) {
        return false;
      }

      return true;
    }
  }]);

  return CBiParallelLineObject;
}(CTriToolObject);
var CBiParallelRayLineObject =
/*#__PURE__*/
function (_CTriToolObject2) {
  _inherits(CBiParallelRayLineObject, _CTriToolObject2);

  function CBiParallelRayLineObject(name) {
    var _this6;

    _classCallCheck(this, CBiParallelRayLineObject);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(CBiParallelRayLineObject).call(this, name));
    _this6.drawer = new __WEBPACK_IMPORTED_MODULE_5__plotters__["l" /* DrawBiParallelRayLinesPlotter */](name, _assertThisInitialized(_this6));
    return _this6;
  }

  _createClass(CBiParallelRayLineObject, [{
    key: "isSelected",
    value: function isSelected(x, y) {
      if (_get(_getPrototypeOf(CBiParallelRayLineObject.prototype), "isSelected", this).call(this, x, y) === true) {
        return true;
      }

      var _0x = this.getPoint(0).getPosXY().x;
      var _0y = this.getPoint(0).getPosXY().y;
      var _1x = this.getPoint(1).getPosXY().x;
      var _1y = this.getPoint(1).getPosXY().y;
      var _2x = this.getPoint(2).getPosXY().x;
      var _2y = this.getPoint(2).getPosXY().y;
      var _a = {
        x: _0x - _1x,
        y: _0y - _1y
      };
      var _b = {
        x: _0x - _2x,
        y: _0y - _2y
      };
      var _c = {
        x: _a.x + _b.x,
        y: _a.y + _b.y
      };

      var _3x = _0x - _c.x;

      var _3y = _0y - _c.y;

      var r1 = {
        sx: _0x,
        sy: _0y,
        ex: _2x,
        ey: _2y
      };
      var r2 = {
        sx: _1x,
        sy: _1y,
        ex: _3x,
        ey: _3y
      };

      if (r1.ex > r1.sx && x > r1.sx - 4 || r1.ex < r1.sx && x < r1.sx + 4 || r2.ex > r2.sx && x > r2.sx - 4 || r2.ex < r2.sx && x < r2.sx + 4) {
        if (this.calcGap(r1, x, y) > 4 && this.calcGap(r2, x, y) > 4) {
          return false;
        }
      } else {
        return false;
      }

      this.select();
      return true;
    }
  }]);

  return CBiParallelRayLineObject;
}(CTriToolObject);
var CFibFansObject =
/*#__PURE__*/
function (_CBiToolObject2) {
  _inherits(CFibFansObject, _CBiToolObject2);

  function CFibFansObject(name) {
    var _this7;

    _classCallCheck(this, CFibFansObject);

    _this7 = _possibleConstructorReturn(this, _getPrototypeOf(CFibFansObject).call(this, name));
    _this7.drawer = new __WEBPACK_IMPORTED_MODULE_5__plotters__["m" /* DrawFibFansPlotter */](name, _assertThisInitialized(_this7));
    return _this7;
  }

  _createClass(CFibFansObject, [{
    key: "isSelected",
    value: function isSelected(x, y) {
      if (_get(_getPrototypeOf(CFibFansObject.prototype), "isSelected", this).call(this, x, y) === true) {
        return true;
      }

      var c = new __WEBPACK_IMPORTED_MODULE_2__cpoint__["a" /* CPoint */]("frame0.k0");
      c.setPosXY(x, y);
      var sx = this.getPoint(0).getPosXY().x;
      var sy = this.getPoint(0).getPosXY().y;
      var ex = this.getPoint(1).getPosXY().x;
      var ey = this.getPoint(1).getPosXY().y;
      var pObj = this.getChartObjects();
      var areaPos = {
        left: pObj.pArea.getLeft(),
        top: pObj.pArea.getTop(),
        right: pObj.pArea.getRight(),
        bottom: pObj.pArea.getBottom()
      };
      var fibFansSequence = [0, 38.2, 50, 61.8];

      for (var i = 0; i < fibFansSequence.length; i++) {
        var stageY = sy + (100 - fibFansSequence[i]) / 100 * (ey - sy);
        var tempStartPt = {
          x: sx,
          y: sy
        };
        var tempEndPt = {
          x: ex,
          y: stageY
        };
        var crossPt = this.getRectCrossPt(areaPos, tempStartPt, tempEndPt);
        var lenToStartPt = Math.pow(crossPt[0].x - sx, 2) + Math.pow(crossPt[0].y - sy, 2);
        var lenToEndPt = Math.pow(crossPt[0].x - ex, 2) + Math.pow(crossPt[0].y - ey, 2);
        var tempCrossPt = lenToStartPt > lenToEndPt ? {
          x: crossPt[0].x,
          y: crossPt[0].y
        } : {
          x: crossPt[1].x,
          y: crossPt[1].y
        };
        if (tempCrossPt.x > sx && x < sx) continue;
        if (tempCrossPt.x < sx && x > sx) continue;
        var a = new __WEBPACK_IMPORTED_MODULE_2__cpoint__["a" /* CPoint */]("frame0.k0");
        a.setPosXY(sx, sy);
        var b = new __WEBPACK_IMPORTED_MODULE_2__cpoint__["a" /* CPoint */]("frame0.k0");
        b.setPosXY(tempCrossPt.x, tempCrossPt.y);

        if (this.calcDistance(a, b, c) > 4) {
          continue;
        }

        this.select();
        return true;
      }

      return false;
    }
  }]);

  return CFibFansObject;
}(CBiToolObject);
var CFibRetraceObject =
/*#__PURE__*/
function (_CBiToolObject3) {
  _inherits(CFibRetraceObject, _CBiToolObject3);

  function CFibRetraceObject(name) {
    var _this8;

    _classCallCheck(this, CFibRetraceObject);

    _this8 = _possibleConstructorReturn(this, _getPrototypeOf(CFibRetraceObject).call(this, name));
    _this8.drawer = new __WEBPACK_IMPORTED_MODULE_5__plotters__["n" /* DrawFibRetracePlotter */](name, _assertThisInitialized(_this8));
    return _this8;
  }

  _createClass(CFibRetraceObject, [{
    key: "isSelected",
    value: function isSelected(x, y) {
      if (_get(_getPrototypeOf(CFibRetraceObject.prototype), "isSelected", this).call(this, x, y) === true) {
        return true;
      }

      var c = new __WEBPACK_IMPORTED_MODULE_2__cpoint__["a" /* CPoint */]("frame0.k0");
      c.setPosXY(x, y);
      var sx = this.getPoint(0).getPosXY().x;
      var sy = this.getPoint(0).getPosXY().y;
      var ex = this.getPoint(1).getPosXY().x;
      var ey = this.getPoint(1).getPosXY().y;
      var fibSequence = [100.0, 78.6, 61.8, 50.0, 38.2, 23.6, 0.0];

      for (var i = 0; i < fibSequence.length; i++) {
        var stage_y = sy + (100 - fibSequence[i]) / 100 * (ey - sy);

        if (stage_y < y + 4 && stage_y > y - 4) {
          this.select();
          return true;
        }
      }

      return false;
    }
  }]);

  return CFibRetraceObject;
}(CBiToolObject);
var CHoriRayLineObject =
/*#__PURE__*/
function (_CBiToolObject4) {
  _inherits(CHoriRayLineObject, _CBiToolObject4);

  function CHoriRayLineObject(name) {
    var _this9;

    _classCallCheck(this, CHoriRayLineObject);

    _this9 = _possibleConstructorReturn(this, _getPrototypeOf(CHoriRayLineObject).call(this, name));
    _this9.drawer = new __WEBPACK_IMPORTED_MODULE_5__plotters__["o" /* DrawHoriRayLinesPlotter */](name, _assertThisInitialized(_this9));
    return _this9;
  }

  _createClass(CHoriRayLineObject, [{
    key: "setDrawPos",
    value: function setDrawPos(x, y) {
      if (this.points[0].getState() === __WEBPACK_IMPORTED_MODULE_2__cpoint__["a" /* CPoint */].state.Highlight) {
        this.points[0].setPosXY(x, y);
        this.points[1].setPosXYNoSnap(this.points[1].getPosXY().x, this.points[0].getPosXY().y);
        return;
      }

      if (this.points[1].getState() === __WEBPACK_IMPORTED_MODULE_2__cpoint__["a" /* CPoint */].state.Highlight) {
        this.points[1].setPosXY(x, y);
        this.points[0].setPosXYNoSnap(this.points[0].getPosXY().x, this.points[1].getPosXY().y);
      }
    }
  }, {
    key: "isSelected",
    value: function isSelected(x, y) {
      if (_get(_getPrototypeOf(CHoriRayLineObject.prototype), "isSelected", this).call(this, x, y) === true) {
        return true;
      }

      var c = new __WEBPACK_IMPORTED_MODULE_2__cpoint__["a" /* CPoint */]("frame0.k0");
      c.setPosXY(x, y);
      var sy = this.getPoint(0).getPosXY().y;
      var sx = this.getPoint(0).getPosXY().x;
      var ex = this.getPoint(1).getPosXY().x;

      if (y > sy + 4 || y < sy - 4) {
        return false;
      }

      if (ex > sx && x < sx - 4) {
        return false;
      }

      if (ex < sx && x > sx + 4) {
        return false;
      }

      this.select();
      return true;
    }
  }]);

  return CHoriRayLineObject;
}(CBiToolObject);
var CHoriSegLineObject =
/*#__PURE__*/
function (_CBiToolObject5) {
  _inherits(CHoriSegLineObject, _CBiToolObject5);

  function CHoriSegLineObject(name) {
    var _this10;

    _classCallCheck(this, CHoriSegLineObject);

    _this10 = _possibleConstructorReturn(this, _getPrototypeOf(CHoriSegLineObject).call(this, name));
    _this10.drawer = new __WEBPACK_IMPORTED_MODULE_5__plotters__["p" /* DrawHoriSegLinesPlotter */](name, _assertThisInitialized(_this10));
    return _this10;
  }

  _createClass(CHoriSegLineObject, [{
    key: "setDrawPos",
    value: function setDrawPos(x, y) {
      if (this.points[0].getState() === __WEBPACK_IMPORTED_MODULE_2__cpoint__["a" /* CPoint */].state.Highlight) {
        this.points[0].setPosXY(x, y);
        this.points[1].setPosXYNoSnap(this.points[1].getPosXY().x, this.points[0].getPosXY().y);
        return;
      }

      if (this.points[1].getState() === __WEBPACK_IMPORTED_MODULE_2__cpoint__["a" /* CPoint */].state.Highlight) {
        this.points[1].setPosXY(x, y);
        this.points[0].setPosXYNoSnap(this.points[0].getPosXY().x, this.points[1].getPosXY().y);
      }
    }
  }, {
    key: "isSelected",
    value: function isSelected(x, y) {
      if (_get(_getPrototypeOf(CHoriSegLineObject.prototype), "isSelected", this).call(this, x, y) === true) {
        return true;
      }

      var c = new __WEBPACK_IMPORTED_MODULE_2__cpoint__["a" /* CPoint */]("frame0.k0");
      c.setPosXY(x, y);
      var sy = this.getPoint(0).getPosXY().y;
      var sx = this.getPoint(0).getPosXY().x;
      var ex = this.getPoint(1).getPosXY().x;

      if (y > sy + 4 || y < sy - 4) {
        return false;
      }

      if (sx > ex && (x > sx + 4 || x < ex - 4)) {
        return false;
      }

      if (sx < ex && (x < sx - 4 || x > ex + 4)) {
        return false;
      }

      this.select();
      return true;
    }
  }]);

  return CHoriSegLineObject;
}(CBiToolObject);
var CHoriStraightLineObject =
/*#__PURE__*/
function (_CBiToolObject6) {
  _inherits(CHoriStraightLineObject, _CBiToolObject6);

  function CHoriStraightLineObject(name) {
    var _this11;

    _classCallCheck(this, CHoriStraightLineObject);

    _this11 = _possibleConstructorReturn(this, _getPrototypeOf(CHoriStraightLineObject).call(this, name));
    _this11.drawer = new __WEBPACK_IMPORTED_MODULE_5__plotters__["q" /* DrawHoriStraightLinesPlotter */](name, _assertThisInitialized(_this11));
    return _this11;
  }

  _createClass(CHoriStraightLineObject, [{
    key: "setDrawPos",
    value: function setDrawPos(x, y) {
      for (var index in this.points) {
        this.points[index].setPosXY(x, y);
      }
    }
  }, {
    key: "isSelected",
    value: function isSelected(x, y) {
      if (_get(_getPrototypeOf(CHoriStraightLineObject.prototype), "isSelected", this).call(this, x, y) === true) {
        return true;
      }

      var c = new __WEBPACK_IMPORTED_MODULE_2__cpoint__["a" /* CPoint */]("frame0.k0");
      c.setPosXY(x, y);
      var sy = this.getPoint(0).getPosXY().y;

      if (y > sy + 4 || y < sy - 4) {
        return false;
      }

      this.select();
      return true;
    }
  }]);

  return CHoriStraightLineObject;
}(CBiToolObject);
var CRayLineObject =
/*#__PURE__*/
function (_CBiToolObject7) {
  _inherits(CRayLineObject, _CBiToolObject7);

  function CRayLineObject(name) {
    var _this12;

    _classCallCheck(this, CRayLineObject);

    _this12 = _possibleConstructorReturn(this, _getPrototypeOf(CRayLineObject).call(this, name));
    _this12.drawer = new __WEBPACK_IMPORTED_MODULE_5__plotters__["s" /* DrawRayLinesPlotter */](name, _assertThisInitialized(_this12));
    return _this12;
  }

  _createClass(CRayLineObject, [{
    key: "isSelected",
    value: function isSelected(x, y) {
      if (_get(_getPrototypeOf(CRayLineObject.prototype), "isSelected", this).call(this, x, y) === true) {
        return true;
      }

      var c = new __WEBPACK_IMPORTED_MODULE_2__cpoint__["a" /* CPoint */]("frame0.k0");
      c.setPosXY(x, y);
      var sx = this.getPoint(0).getPosXY().x;
      var ex = this.getPoint(1).getPosXY().x;

      if (ex > sx && x < sx - 4) {
        return false;
      }

      if (ex < sx && x > sx + 4) {
        return false;
      }

      if (this.calcDistance(this.getPoint(0), this.getPoint(1), c) < 4) {
        this.select();
        return true;
      }

      return false;
    }
  }]);

  return CRayLineObject;
}(CBiToolObject);
var CSegLineObject =
/*#__PURE__*/
function (_CBiToolObject8) {
  _inherits(CSegLineObject, _CBiToolObject8);

  function CSegLineObject(name) {
    var _this13;

    _classCallCheck(this, CSegLineObject);

    _this13 = _possibleConstructorReturn(this, _getPrototypeOf(CSegLineObject).call(this, name));
    _this13.drawer = new __WEBPACK_IMPORTED_MODULE_5__plotters__["t" /* DrawSegLinesPlotter */](name, _assertThisInitialized(_this13));
    return _this13;
  }

  _createClass(CSegLineObject, [{
    key: "isSelected",
    value: function isSelected(x, y) {
      if (_get(_getPrototypeOf(CSegLineObject.prototype), "isSelected", this).call(this, x, y) === true) {
        return true;
      }

      var c = new __WEBPACK_IMPORTED_MODULE_2__cpoint__["a" /* CPoint */]("frame0.k0");
      c.setPosXY(x, y);

      if (this.isWithRect(this.getPoint(0), this.getPoint(1), c) === false) {
        return false;
      }

      if (this.calcDistance(this.getPoint(0), this.getPoint(1), c) < 4) {
        this.select();
        return true;
      }

      return false;
    }
  }]);

  return CSegLineObject;
}(CBiToolObject);
var CStraightLineObject =
/*#__PURE__*/
function (_CBiToolObject9) {
  _inherits(CStraightLineObject, _CBiToolObject9);

  function CStraightLineObject(name) {
    var _this14;

    _classCallCheck(this, CStraightLineObject);

    _this14 = _possibleConstructorReturn(this, _getPrototypeOf(CStraightLineObject).call(this, name));
    _this14.drawer = new __WEBPACK_IMPORTED_MODULE_5__plotters__["u" /* DrawStraightLinesPlotter */](name, _assertThisInitialized(_this14));
    return _this14;
  }

  _createClass(CStraightLineObject, [{
    key: "isSelected",
    value: function isSelected(x, y) {
      if (_get(_getPrototypeOf(CStraightLineObject.prototype), "isSelected", this).call(this, x, y) === true) {
        return true;
      }

      var c = new __WEBPACK_IMPORTED_MODULE_2__cpoint__["a" /* CPoint */]("frame0.k0");
      c.setPosXY(x, y);

      if (this.calcDistance(this.getPoint(0), this.getPoint(1), c) < 4) {
        this.select();
        return true;
      }

      return false;
    }
  }]);

  return CStraightLineObject;
}(CBiToolObject);
var CTriParallelLineObject =
/*#__PURE__*/
function (_CTriToolObject3) {
  _inherits(CTriParallelLineObject, _CTriToolObject3);

  function CTriParallelLineObject(name) {
    var _this15;

    _classCallCheck(this, CTriParallelLineObject);

    _this15 = _possibleConstructorReturn(this, _getPrototypeOf(CTriParallelLineObject).call(this, name));
    _this15.drawer = new __WEBPACK_IMPORTED_MODULE_5__plotters__["v" /* DrawTriParallelLinesPlotter */](name, _assertThisInitialized(_this15));
    return _this15;
  }

  _createClass(CTriParallelLineObject, [{
    key: "isSelected",
    value: function isSelected(x, y) {
      if (_get(_getPrototypeOf(CTriParallelLineObject.prototype), "isSelected", this).call(this, x, y) === true) {
        return true;
      }

      var pObj = this.getChartObjects();
      var _0x = this.getPoint(0).getPosXY().x;
      var _0y = this.getPoint(0).getPosXY().y;
      var _1x = this.getPoint(1).getPosXY().x;
      var _1y = this.getPoint(1).getPosXY().y;
      var _2x = this.getPoint(2).getPosXY().x;
      var _2y = this.getPoint(2).getPosXY().y;
      var _a = {
        x: _0x - _1x,
        y: _0y - _1y
      };
      var _b = {
        x: _0x - _2x,
        y: _0y - _2y
      };
      var _c = {
        x: _a.x + _b.x,
        y: _a.y + _b.y
      };

      var _3x = _0x - _c.x;

      var _3y = _0y - _c.y;

      var r1 = {
        sx: _0x,
        sy: _0y,
        ex: _2x,
        ey: _2y
      };
      var r2 = {
        sx: _1x,
        sy: _1y,
        ex: _3x,
        ey: _3y
      };
      var _i = {
        x: _0x - _1x,
        y: _0y - _1y
      };
      var _j = {
        x: _2x - _3x,
        y: _2y - _3y
      };
      var _ri = {
        x: _1x - _0x,
        y: _1y - _0y
      };
      var _rj = {
        x: _3x - _2x,
        y: _3y - _2y
      };

      var _4x = Math.abs(_ri.x - _0x);

      var _4y = Math.abs(_ri.y - _0y);

      var _5x = Math.abs(_rj.x - _2x);

      var _5y = Math.abs(_rj.y - _2y);

      var r3 = {
        sx: _4x,
        sy: _4y,
        ex: _5x,
        ey: _5y
      };

      if (this.calcGap(r1, x, y) > 4 && this.calcGap(r2, x, y) > 4 && this.calcGap(r3, x, y) > 4) {
        return false;
      }

      this.select();
      return true;
    }
  }]);

  return CTriParallelLineObject;
}(CTriToolObject);
var CVertiStraightLineObject =
/*#__PURE__*/
function (_CBiToolObject10) {
  _inherits(CVertiStraightLineObject, _CBiToolObject10);

  function CVertiStraightLineObject(name) {
    var _this16;

    _classCallCheck(this, CVertiStraightLineObject);

    _this16 = _possibleConstructorReturn(this, _getPrototypeOf(CVertiStraightLineObject).call(this, name));
    _this16.drawer = new __WEBPACK_IMPORTED_MODULE_5__plotters__["w" /* DrawVertiStraightLinesPlotter */](name, _assertThisInitialized(_this16));
    return _this16;
  }

  _createClass(CVertiStraightLineObject, [{
    key: "setDrawPos",
    value: function setDrawPos(x, y) {
      for (var index in this.points) {
        this.points[index].setPosXY(x, y);
      }
    }
  }, {
    key: "isSelected",
    value: function isSelected(x, y) {
      if (_get(_getPrototypeOf(CVertiStraightLineObject.prototype), "isSelected", this).call(this, x, y) === true) {
        return true;
      }

      var c = new __WEBPACK_IMPORTED_MODULE_2__cpoint__["a" /* CPoint */]("frame0.k0");
      c.setPosXY(x, y);
      var sx = this.getPoint(0).getPosXY().x;

      if (x > sx + 4 || x < sx - 4) {
        return false;
      }

      this.select();
      return true;
    }
  }]);

  return CVertiStraightLineObject;
}(CBiToolObject);
var CPriceLineObject =
/*#__PURE__*/
function (_CSegLineObject) {
  _inherits(CPriceLineObject, _CSegLineObject);

  function CPriceLineObject(name) {
    var _this17;

    _classCallCheck(this, CPriceLineObject);

    _this17 = _possibleConstructorReturn(this, _getPrototypeOf(CPriceLineObject).call(this, name));
    _this17.drawer = new __WEBPACK_IMPORTED_MODULE_5__plotters__["r" /* DrawPriceLinesPlotter */](name, _assertThisInitialized(_this17));
    return _this17;
  }

  _createClass(CPriceLineObject, [{
    key: "setDrawPos",
    value: function setDrawPos(x, y) {
      for (var index in this.points) {
        this.points[index].setPosXY(x, y);
      }
    }
  }, {
    key: "isSelected",
    value: function isSelected(x, y) {
      if (_get(_getPrototypeOf(CPriceLineObject.prototype), "isSelected", this).call(this, x, y) === true) {
        return true;
      }

      var c = new __WEBPACK_IMPORTED_MODULE_2__cpoint__["a" /* CPoint */]("frame0.k0");
      c.setPosXY(x, y);
      var sx = this.getPoint(0).getPosXY().x;
      var sy = this.getPoint(0).getPosXY().y;
      var ex = this.getPoint(1).getPosXY().x;
      var ey = this.getPoint(1).getPosXY().y;

      if (x < sx - 4) {
        return false;
      }

      if (y >= sy + 4 || y <= sy - 4) {
        return false;
      }

      this.select();
      return true;
    }
  }]);

  return CPriceLineObject;
}(CSegLineObject);
var CArrowLineObject =
/*#__PURE__*/
function (_CSegLineObject2) {
  _inherits(CArrowLineObject, _CSegLineObject2);

  function CArrowLineObject(name) {
    var _this18;

    _classCallCheck(this, CArrowLineObject);

    _this18 = _possibleConstructorReturn(this, _getPrototypeOf(CArrowLineObject).call(this, name));
    _this18.drawer = new __WEBPACK_IMPORTED_MODULE_5__plotters__["i" /* DrawArrowLinesPlotter */](name, _assertThisInitialized(_this18));
    return _this18;
  }

  return CArrowLineObject;
}(CSegLineObject);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Plotter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackgroundPlotter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return MainAreaBackgroundPlotter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return RangeAreaBackgroundPlotter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return TimelineAreaBackgroundPlotter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CGridPlotter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return CandlestickPlotter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CandlestickHLCPlotter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return OHLCPlotter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return MainInfoPlotter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return IndicatorPlotter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return IndicatorInfoPlotter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return MinMaxPlotter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return TimelinePlotter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return RangePlotter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return COrderGraphPlotter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return LastVolumePlotter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return LastClosePlotter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return SelectionPlotter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return TimelineSelectionPlotter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return RangeSelectionPlotter; });
/* unused harmony export CToolPlotter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return DrawStraightLinesPlotter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return DrawSegLinesPlotter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return DrawRayLinesPlotter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return DrawArrowLinesPlotter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return DrawHoriStraightLinesPlotter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return DrawHoriRayLinesPlotter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return DrawHoriSegLinesPlotter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return DrawVertiStraightLinesPlotter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return DrawPriceLinesPlotter; });
/* unused harmony export ParallelLinesPlotter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return DrawBiParallelLinesPlotter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return DrawBiParallelRayLinesPlotter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return DrawTriParallelLinesPlotter; });
/* unused harmony export BandLinesPlotter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return DrawFibRetracePlotter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return DrawBandLinesPlotter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return DrawFibFansPlotter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CDynamicLinePlotter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__kline__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__named_object__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chart_manager__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cpoint__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__exprs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__themes__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_providers__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data_sources__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ctools__ = __webpack_require__(10);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











var Plotter =
/*#__PURE__*/
function (_NamedObject) {
  _inherits(Plotter, _NamedObject);

  function Plotter(name) {
    _classCallCheck(this, Plotter);

    return _possibleConstructorReturn(this, _getPrototypeOf(Plotter).call(this, name));
  }

  _createClass(Plotter, null, [{
    key: "drawLine",
    value: function drawLine(context, x1, y1, x2, y2) {
      context.beginPath();
      context.moveTo((x1 << 0) + 0.5, (y1 << 0) + 0.5);
      context.lineTo((x2 << 0) + 0.5, (y2 << 0) + 0.5);
      context.stroke();
    }
  }, {
    key: "drawLines",
    value: function drawLines(context, points) {
      var i,
          cnt = points.length;
      context.beginPath();
      context.moveTo(points[0].x, points[0].y);

      for (i = 1; i < cnt; i++) {
        context.lineTo(points[i].x, points[i].y);
      }

      if (Plotter.isChrome) {
        context.moveTo(points[0].x, points[0].y);

        for (i = 1; i < cnt; i++) {
          context.lineTo(points[i].x, points[i].y);
        }
      }

      context.stroke();
    }
  }, {
    key: "drawDashedLine",
    value: function drawDashedLine(context, x1, y1, x2, y2, dashLen, dashSolid) {
      if (dashLen < 2) {
        dashLen = 2;
      }

      var dX = x2 - x1;
      var dY = y2 - y1;
      context.beginPath();

      if (dY === 0) {
        var count = dX / dashLen + 0.5 << 0;

        for (var i = 0; i < count; i++) {
          context.rect(x1, y1, dashSolid, 1);
          x1 += dashLen;
        }

        context.fill();
      } else {
        var _count = Math.sqrt(dX * dX + dY * dY) / dashLen + 0.5 << 0;

        dX = dX / _count;
        dY = dY / _count;
        var dashX = dX * dashSolid / dashLen;
        var dashY = dY * dashSolid / dashLen;

        for (var _i = 0; _i < _count; _i++) {
          context.moveTo(x1 + 0.5, y1 + 0.5);
          context.lineTo(x1 + 0.5 + dashX, y1 + 0.5 + dashY);
          x1 += dX;
          y1 += dY;
        }

        context.stroke();
      }
    }
  }, {
    key: "createHorzDashedLine",
    value: function createHorzDashedLine(context, x1, x2, y, dashLen, dashSolid) {
      if (dashLen < 2) {
        dashLen = 2;
      }

      var dX = x2 - x1;
      var count = dX / dashLen + 0.5 << 0;

      for (var i = 0; i < count; i++) {
        context.rect(x1, y, dashSolid, 1);
        x1 += dashLen;
      }
    }
  }, {
    key: "createRectangles",
    value: function createRectangles(context, rects) {
      context.beginPath();
      var e,
          i,
          cnt = rects.length;

      for (i = 0; i < cnt; i++) {
        e = rects[i];
        context.rect(e.x, e.y, e.w, e.h);
      }
    }
  }, {
    key: "createPolygon",
    value: function createPolygon(context, points) {
      context.beginPath();
      context.moveTo(points[0].x + 0.5, points[0].y + 0.5);
      var i,
          cnt = points.length;

      for (i = 1; i < cnt; i++) {
        context.lineTo(points[i].x + 0.5, points[i].y + 0.5);
      }

      context.closePath();
    }
  }, {
    key: "drawString",
    value: function drawString(context, str, rect) {
      var w = context.measureText(str).width;

      if (rect.w < w) {
        return false;
      }

      context.fillText(str, rect.x, rect.y);
      rect.x += w;
      rect.w -= w;
      return true;
    }
  }]);

  return Plotter;
}(__WEBPACK_IMPORTED_MODULE_1__named_object__["a" /* NamedObject */]);
Plotter.isChrome = navigator.userAgent.toLowerCase().match(/chrome/) !== null;
var BackgroundPlotter =
/*#__PURE__*/
function (_Plotter) {
  _inherits(BackgroundPlotter, _Plotter);

  function BackgroundPlotter(name) {
    var _this;

    _classCallCheck(this, BackgroundPlotter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BackgroundPlotter).call(this, name));
    _this._color = __WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Background;
    return _this;
  }

  _createClass(BackgroundPlotter, [{
    key: "getColor",
    value: function getColor() {
      return this._color;
    }
  }, {
    key: "setColor",
    value: function setColor(c) {
      this._color = c;
    }
  }, {
    key: "Draw",
    value: function Draw(context) {
      var mgr = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance;
      var area = mgr.getArea(this.getAreaName());
      var theme = mgr.getTheme(this.getFrameName());
      context.fillStyle = theme.getColor(this._color);
      context.fillRect(area.getLeft(), area.getTop(), area.getWidth(), area.getHeight());
    }
  }]);

  return BackgroundPlotter;
}(Plotter);
var MainAreaBackgroundPlotter =
/*#__PURE__*/
function (_BackgroundPlotter) {
  _inherits(MainAreaBackgroundPlotter, _BackgroundPlotter);

  function MainAreaBackgroundPlotter(name) {
    _classCallCheck(this, MainAreaBackgroundPlotter);

    return _possibleConstructorReturn(this, _getPrototypeOf(MainAreaBackgroundPlotter).call(this, name));
  }

  _createClass(MainAreaBackgroundPlotter, [{
    key: "Draw",
    value: function Draw(context) {
      var mgr = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance;
      var area = mgr.getArea(this.getAreaName());
      var timeline = mgr.getTimeline(this.getDataSourceName());
      var range = mgr.getRange(this.getAreaName());
      var theme = mgr.getTheme(this.getFrameName());
      var rect = area.getRect();

      if (!area.isChanged() && !timeline.isUpdated() && !range.isUpdated()) {
        var first = timeline.getFirstIndex();
        var last = timeline.getLastIndex() - 2;
        var start = Math.max(first, last);
        rect.X = timeline.toColumnLeft(start);
        rect.Width = area.getRight() - rect.X;
      }

      context.fillStyle = theme.getColor(this._color);
      context.fillRect(rect.X, rect.Y, rect.Width, rect.Height);
    }
  }]);

  return MainAreaBackgroundPlotter;
}(BackgroundPlotter);
var RangeAreaBackgroundPlotter =
/*#__PURE__*/
function (_BackgroundPlotter2) {
  _inherits(RangeAreaBackgroundPlotter, _BackgroundPlotter2);

  function RangeAreaBackgroundPlotter(name) {
    _classCallCheck(this, RangeAreaBackgroundPlotter);

    return _possibleConstructorReturn(this, _getPrototypeOf(RangeAreaBackgroundPlotter).call(this, name));
  }

  _createClass(RangeAreaBackgroundPlotter, [{
    key: "Draw",
    value: function Draw(context) {
      var mgr = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance;
      var areaName = this.getAreaName();
      var area = mgr.getArea(areaName);
      var range = mgr.getRange(areaName.substring(0, areaName.lastIndexOf("Range")));
      var isMainRange = range.getNameObject().getCompAt(2) === "main";

      if (!isMainRange && !area.isChanged() && !range.isUpdated()) {
        return;
      }

      var theme = mgr.getTheme(this.getFrameName());
      context.fillStyle = theme.getColor(this._color);
      context.fillRect(area.getLeft(), area.getTop(), area.getWidth(), area.getHeight());
    }
  }]);

  return RangeAreaBackgroundPlotter;
}(BackgroundPlotter);
var TimelineAreaBackgroundPlotter =
/*#__PURE__*/
function (_BackgroundPlotter3) {
  _inherits(TimelineAreaBackgroundPlotter, _BackgroundPlotter3);

  function TimelineAreaBackgroundPlotter(name) {
    _classCallCheck(this, TimelineAreaBackgroundPlotter);

    return _possibleConstructorReturn(this, _getPrototypeOf(TimelineAreaBackgroundPlotter).call(this, name));
  }

  _createClass(TimelineAreaBackgroundPlotter, [{
    key: "Draw",
    value: function Draw(context) {
      var mgr = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance;
      var area = mgr.getArea(this.getAreaName());
      var timeline = mgr.getTimeline(this.getDataSourceName());
      if (!area.isChanged() && !timeline.isUpdated()) return;
      var theme = mgr.getTheme(this.getFrameName());
      context.fillStyle = theme.getColor(this._color);
      context.fillRect(area.getLeft(), area.getTop(), area.getWidth(), area.getHeight());
    }
  }]);

  return TimelineAreaBackgroundPlotter;
}(BackgroundPlotter);
var CGridPlotter =
/*#__PURE__*/
function (_NamedObject2) {
  _inherits(CGridPlotter, _NamedObject2);

  function CGridPlotter(name) {
    _classCallCheck(this, CGridPlotter);

    return _possibleConstructorReturn(this, _getPrototypeOf(CGridPlotter).call(this, name));
  }

  _createClass(CGridPlotter, [{
    key: "Draw",
    value: function Draw(context) {
      var mgr = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance;
      var area = mgr.getArea(this.getAreaName());
      var timeline = mgr.getTimeline(this.getDataSourceName());
      var range = mgr.getRange(this.getAreaName());
      var clipped = false;

      if (!area.isChanged() && !timeline.isUpdated() && !range.isUpdated()) {
        var first = timeline.getFirstIndex();
        var last = timeline.getLastIndex();
        var start = Math.max(first, last - 2);
        var left = timeline.toColumnLeft(start);
        context.save();
        context.rect(left, area.getTop(), area.getRight() - left, area.getHeight());
        context.clip();
        clipped = true;
      }

      var theme = mgr.getTheme(this.getFrameName());
      context.fillStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Grid0);
      context.beginPath();
      var dashLen = 4,
          dashSolid = 1;

      if (Plotter.isChrome) {
        dashLen = 4;
        dashSolid = 1;
      }

      var gradations = range.getGradations();

      for (var n in gradations) {
        Plotter.createHorzDashedLine(context, area.getLeft(), area.getRight(), range.toY(gradations[n]), dashLen, dashSolid);
      }

      context.fill();

      if (clipped) {
        context.restore();
      }
    }
  }]);

  return CGridPlotter;
}(__WEBPACK_IMPORTED_MODULE_1__named_object__["a" /* NamedObject */]);
var CandlestickPlotter =
/*#__PURE__*/
function (_NamedObject3) {
  _inherits(CandlestickPlotter, _NamedObject3);

  function CandlestickPlotter(name) {
    _classCallCheck(this, CandlestickPlotter);

    return _possibleConstructorReturn(this, _getPrototypeOf(CandlestickPlotter).call(this, name));
  }

  _createClass(CandlestickPlotter, [{
    key: "Draw",
    value: function Draw(context) {
      var mgr = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance;
      var ds = mgr.getDataSource(this.getDataSourceName());

      if (ds.getDataCount() < 1) {
        return;
      }

      var area = mgr.getArea(this.getAreaName());
      var timeline = mgr.getTimeline(this.getDataSourceName());
      var range = mgr.getRange(this.getAreaName());

      if (range.getRange() === 0.0) {
        return;
      }

      var theme = mgr.getTheme(this.getFrameName());
      var dark = __WEBPACK_IMPORTED_MODULE_3__util__["a" /* Util */].isInstance(theme, __WEBPACK_IMPORTED_MODULE_6__themes__["a" /* DarkTheme */]);
      var first = timeline.getFirstIndex();
      var last = timeline.getLastIndex();
      var start;
      if (area.isChanged() || timeline.isUpdated() || range.isUpdated()) start = first;else start = Math.max(first, last - 2);
      var cW = timeline.getColumnWidth();
      var iW = timeline.getItemWidth();
      var left = timeline.toItemLeft(start);
      var center = timeline.toItemCenter(start);
      var strokePosRects = [];
      var fillPosRects = [];
      var fillUchRects = [];
      var fillNegRects = [];

      for (var i = start; i < last; i++) {
        var data = ds.getDataAt(i);
        var high = range.toY(data.high);
        var low = range.toY(data.low);
        var open = data.open;
        var close = data.close;

        if (close > open) {
          var top = range.toY(close);
          var bottom = range.toY(open);
          var iH = Math.max(bottom - top, 1);
          if (iH > 1 && iW > 1 && dark) strokePosRects.push({
            x: left + 0.5,
            y: top + 0.5,
            w: iW - 1,
            h: iH - 1
          });else fillPosRects.push({
            x: left,
            y: top,
            w: Math.max(iW, 1),
            h: Math.max(iH, 1)
          });

          if (data.high > close) {
            high = Math.min(high, top - 1);
            fillPosRects.push({
              x: center,
              y: high,
              w: 1,
              h: top - high
            });
          }

          if (open > data.low) {
            low = Math.max(low, bottom + 1);
            fillPosRects.push({
              x: center,
              y: bottom,
              w: 1,
              h: low - bottom
            });
          }
        } else if (close === open) {
          var _top = range.toY(close);

          fillUchRects.push({
            x: left,
            y: _top,
            w: Math.max(iW, 1),
            h: 1
          });
          if (data.high > close) high = Math.min(high, _top - 1);
          if (open > data.low) low = Math.max(low, _top + 1);
          if (high < low) fillUchRects.push({
            x: center,
            y: high,
            w: 1,
            h: low - high
          });
        } else {
          var _top2 = range.toY(open);

          var _bottom = range.toY(close);

          var _iH = Math.max(_bottom - _top2, 1);

          fillNegRects.push({
            x: left,
            y: _top2,
            w: Math.max(iW, 1),
            h: Math.max(_iH, 1)
          });
          if (data.high > open) high = Math.min(high, _top2 - 1);
          if (close > data.low) low = Math.max(low, _bottom + 1);
          if (high < low) fillNegRects.push({
            x: center,
            y: high,
            w: 1,
            h: low - high
          });
        }

        left += cW;
        center += cW;
      }

      if (strokePosRects.length > 0) {
        context.strokeStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Negative);
        Plotter.createRectangles(context, strokePosRects);
        context.stroke();
      }

      if (fillPosRects.length > 0) {
        context.fillStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Negative);
        Plotter.createRectangles(context, fillPosRects);
        context.fill();
      }

      if (fillUchRects.length > 0) {
        context.fillStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Positive);
        Plotter.createRectangles(context, fillUchRects);
        context.fill();
      }

      if (fillNegRects.length > 0) {
        context.fillStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Positive);
        Plotter.createRectangles(context, fillNegRects);
        context.fill();
      }
    }
  }]);

  return CandlestickPlotter;
}(__WEBPACK_IMPORTED_MODULE_1__named_object__["a" /* NamedObject */]);
var CandlestickHLCPlotter =
/*#__PURE__*/
function (_Plotter2) {
  _inherits(CandlestickHLCPlotter, _Plotter2);

  function CandlestickHLCPlotter(name) {
    _classCallCheck(this, CandlestickHLCPlotter);

    return _possibleConstructorReturn(this, _getPrototypeOf(CandlestickHLCPlotter).call(this, name));
  }

  _createClass(CandlestickHLCPlotter, [{
    key: "Draw",
    value: function Draw(context) {
      var mgr = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance;
      var ds = mgr.getDataSource(this.getDataSourceName());

      if (!__WEBPACK_IMPORTED_MODULE_3__util__["a" /* Util */].isInstance(ds, __WEBPACK_IMPORTED_MODULE_8__data_sources__["b" /* MainDataSource */]) || ds.getDataCount() < 1) {
        return;
      }

      var area = mgr.getArea(this.getAreaName());
      var timeline = mgr.getTimeline(this.getDataSourceName());
      var range = mgr.getRange(this.getAreaName());

      if (range.getRange() === 0.0) {
        return;
      }

      var theme = mgr.getTheme(this.getFrameName());
      var dark = __WEBPACK_IMPORTED_MODULE_3__util__["a" /* Util */].isInstance(theme, __WEBPACK_IMPORTED_MODULE_6__themes__["a" /* DarkTheme */]);
      var first = timeline.getFirstIndex();
      var last = timeline.getLastIndex();
      var start;

      if (area.isChanged() || timeline.isUpdated() || range.isUpdated()) {
        start = first;
      } else {
        start = Math.max(first, last - 2);
      }

      var cW = timeline.getColumnWidth();
      var iW = timeline.getItemWidth();
      var left = timeline.toItemLeft(start);
      var center = timeline.toItemCenter(start);
      var strokePosRects = [];
      var fillPosRects = [];
      var fillUchRects = [];
      var fillNegRects = [];

      for (var i = start; i < last; i++) {
        var data = ds.getDataAt(i);
        var high = range.toY(data.high);
        var low = range.toY(data.low);
        var open = data.open;

        if (i > 0) {
          open = ds.getDataAt(i - 1).close;
        }

        var close = data.close;

        if (close > open) {
          var top = range.toY(close);
          var bottom = range.toY(open);
          var iH = Math.max(bottom - top, 1);

          if (iH > 1 && iW > 1 && dark) {
            strokePosRects.push({
              x: left + 0.5,
              y: top + 0.5,
              w: iW - 1,
              h: iH - 1
            });
          } else {
            fillPosRects.push({
              x: left,
              y: top,
              w: Math.max(iW, 1),
              h: Math.max(iH, 1)
            });
          }

          if (data.high > close) {
            high = Math.min(high, top - 1);
            fillPosRects.push({
              x: center,
              y: high,
              w: 1,
              h: top - high
            });
          }

          if (open > data.low) {
            low = Math.max(low, bottom + 1);
            fillPosRects.push({
              x: center,
              y: bottom,
              w: 1,
              h: low - bottom
            });
          }
        } else if (close === open) {
          var _top3 = range.toY(close);

          fillUchRects.push({
            x: left,
            y: _top3,
            w: Math.max(iW, 1),
            h: 1
          });

          if (data.high > close) {
            high = Math.min(high, _top3 - 1);
          }

          if (open > data.low) {
            low = Math.max(low, _top3 + 1);
          }

          if (high < low) {
            fillUchRects.push({
              x: center,
              y: high,
              w: 1,
              h: low - high
            });
          }
        } else {
          var _top4 = range.toY(open);

          var _bottom2 = range.toY(close);

          var _iH2 = Math.max(_bottom2 - _top4, 1);

          fillNegRects.push({
            x: left,
            y: _top4,
            w: Math.max(iW, 1),
            h: Math.max(_iH2, 1)
          });

          if (data.high > open) {
            high = Math.min(high, _top4 - 1);
          }

          if (close > data.low) {
            low = Math.max(low, _bottom2 + 1);
          }

          if (high < low) {
            fillNegRects.push({
              x: center,
              y: high,
              w: 1,
              h: low - high
            });
          }
        }

        left += cW;
        center += cW;
      }

      if (strokePosRects.length > 0) {
        context.strokeStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Negative);
        Plotter.createRectangles(context, strokePosRects);
        context.stroke();
      }

      if (fillPosRects.length > 0) {
        context.fillStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Negative);
        Plotter.createRectangles(context, fillPosRects);
        context.fill();
      }

      if (fillUchRects.length > 0) {
        context.fillStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Positive);
        Plotter.createRectangles(context, fillUchRects);
        context.fill();
      }

      if (fillNegRects.length > 0) {
        context.fillStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Positive);
        Plotter.createRectangles(context, fillNegRects);
        context.fill();
      }
    }
  }]);

  return CandlestickHLCPlotter;
}(Plotter);
var OHLCPlotter =
/*#__PURE__*/
function (_Plotter3) {
  _inherits(OHLCPlotter, _Plotter3);

  function OHLCPlotter(name) {
    _classCallCheck(this, OHLCPlotter);

    return _possibleConstructorReturn(this, _getPrototypeOf(OHLCPlotter).call(this, name));
  }

  _createClass(OHLCPlotter, [{
    key: "Draw",
    value: function Draw(context) {
      var mgr = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance;
      var ds = mgr.getDataSource(this.getDataSourceName());

      if (!__WEBPACK_IMPORTED_MODULE_3__util__["a" /* Util */].isInstance(ds, __WEBPACK_IMPORTED_MODULE_8__data_sources__["b" /* MainDataSource */]) || ds.getDataCount() < 1) {
        return;
      }

      var area = mgr.getArea(this.getAreaName());
      var timeline = mgr.getTimeline(this.getDataSourceName());
      var range = mgr.getRange(this.getAreaName());

      if (range.getRange() === 0.0) {
        return;
      }

      var theme = mgr.getTheme(this.getFrameName());
      var first = timeline.getFirstIndex();
      var last = timeline.getLastIndex();
      var start;

      if (area.isChanged() || timeline.isUpdated() || range.isUpdated()) {
        start = first;
      } else {
        start = Math.max(first, last - 2);
      }

      var cW = timeline.getColumnWidth();
      var iW = timeline.getItemWidth() >> 1;
      var left = timeline.toItemLeft(start);
      var center = timeline.toItemCenter(start);
      var right = left + timeline.getItemWidth();
      var fillPosRects = [];
      var fillUchRects = [];
      var fillNegRects = [];

      for (var i = start; i < last; i++) {
        var data = ds.getDataAt(i);
        var high = range.toY(data.high);
        var low = range.toY(data.low);
        var iH = Math.max(low - high, 1);

        if (data.close > data.open) {
          var top = range.toY(data.close);
          var bottom = range.toY(data.open);
          fillPosRects.push({
            x: center,
            y: high,
            w: 1,
            h: iH
          });
          fillPosRects.push({
            x: left,
            y: top,
            w: iW,
            h: 1
          });
          fillPosRects.push({
            x: center,
            y: bottom,
            w: iW,
            h: 1
          });
        } else if (data.close === data.open) {
          var y = range.toY(data.close);
          fillUchRects.push({
            x: center,
            y: high,
            w: 1,
            h: iH
          });
          fillUchRects.push({
            x: left,
            y: y,
            w: iW,
            h: 1
          });
          fillUchRects.push({
            x: center,
            y: y,
            w: iW,
            h: 1
          });
        } else {
          var _top5 = range.toY(data.open);

          var _bottom3 = range.toY(data.close);

          fillNegRects.push({
            x: center,
            y: high,
            w: 1,
            h: iH
          });
          fillNegRects.push({
            x: left,
            y: _top5,
            w: iW,
            h: 1
          });
          fillNegRects.push({
            x: center,
            y: _bottom3,
            w: iW,
            h: 1
          });
        }

        left += cW;
        center += cW;
        right += cW;
      }

      if (fillPosRects.length > 0) {
        context.fillStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Negative);
        Plotter.createRectangles(context, fillPosRects);
        context.fill();
      }

      if (fillUchRects.length > 0) {
        context.fillStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Positive);
        Plotter.createRectangles(context, fillUchRects);
        context.fill();
      }

      if (fillNegRects.length > 0) {
        context.fillStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Positive);
        Plotter.createRectangles(context, fillNegRects);
        context.fill();
      }
    }
  }]);

  return OHLCPlotter;
}(Plotter);
var MainInfoPlotter =
/*#__PURE__*/
function (_Plotter4) {
  _inherits(MainInfoPlotter, _Plotter4);

  function MainInfoPlotter(name) {
    _classCallCheck(this, MainInfoPlotter);

    return _possibleConstructorReturn(this, _getPrototypeOf(MainInfoPlotter).call(this, name));
  }

  _createClass(MainInfoPlotter, [{
    key: "Draw",
    value: function Draw(context) {
      var mgr = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance;
      var area = mgr.getArea(this.getAreaName());
      var timeline = mgr.getTimeline(this.getDataSourceName());
      var ds = mgr.getDataSource(this.getDataSourceName());
      var theme = mgr.getTheme(this.getFrameName());
      context.font = theme.getFont(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Font.Default);
      context.textAlign = "left";
      context.textBaseline = "top";
      context.fillStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Text4);
      var rect = {
        x: area.getLeft() + 4,
        y: area.getTop() + 2,
        w: area.getWidth() - 8,
        h: 20
      };
      var selIndex = timeline.getSelectedIndex();
      if (selIndex < 0) return;
      var data = ds.getDataAt(selIndex);
      var digits = ds.getDecimalDigits();
      var time = new Date(data.date);
      var year = time.getFullYear();
      var month = __WEBPACK_IMPORTED_MODULE_3__util__["a" /* Util */].formatTime(time.getMonth() + 1);
      var date = __WEBPACK_IMPORTED_MODULE_3__util__["a" /* Util */].formatTime(time.getDate());
      var hour = __WEBPACK_IMPORTED_MODULE_3__util__["a" /* Util */].formatTime(time.getHours());
      var minute = __WEBPACK_IMPORTED_MODULE_3__util__["a" /* Util */].formatTime(time.getMinutes());
      var lang = mgr.getLanguage();

      if (lang === "zh-cn") {
        // if (!Plotter.drawString(context, '时间: ' +
        //         year + '-' + month + '-' + date + '  ' + hour + ':' + minute, rect))
        //     return;
        if (!Plotter.drawString(context, '  开: ' + data.open.toFixed(digits), rect)) return;
        if (!Plotter.drawString(context, '  高: ' + data.high.toFixed(digits), rect)) return;
        if (!Plotter.drawString(context, '  低: ' + data.low.toFixed(digits), rect)) return;
        if (!Plotter.drawString(context, '  收: ' + data.close.toFixed(digits), rect)) return;
      } else if (lang === "en-us") {
        // if (!Plotter.drawString(context, 'DATE: ' +
        //         year + '-' + month + '-' + date + '  ' + hour + ':' + minute, rect))
        //     return;
        if (!Plotter.drawString(context, '  O: ' + data.open.toFixed(digits), rect)) return;
        if (!Plotter.drawString(context, '  H: ' + data.high.toFixed(digits), rect)) return;
        if (!Plotter.drawString(context, '  L: ' + data.low.toFixed(digits), rect)) return;
        if (!Plotter.drawString(context, '  C: ' + data.close.toFixed(digits), rect)) return;
      } else if (lang === "zh-tw") {
        // if (!Plotter.drawString(context, '時間: ' +
        //         year + '-' + month + '-' + date + '  ' + hour + ':' + minute, rect))
        //     return;
        if (!Plotter.drawString(context, '  開: ' + data.open.toFixed(digits), rect)) return;
        if (!Plotter.drawString(context, '  高: ' + data.high.toFixed(digits), rect)) return;
        if (!Plotter.drawString(context, '  低: ' + data.low.toFixed(digits), rect)) return;
        if (!Plotter.drawString(context, '  收: ' + data.close.toFixed(digits), rect)) return;
      }

      if (selIndex > 0) {
        if (lang === "zh-cn") {
          if (!Plotter.drawString(context, '  涨幅: ', rect)) return;
        } else if (lang === "en-us") {
          if (!Plotter.drawString(context, '  CHANGE: ', rect)) return;
        } else if (lang === "zh-tw") {
          if (!Plotter.drawString(context, '  漲幅: ', rect)) return;
        }

        var prev = ds.getDataAt(selIndex - 1);
        var change;

        if ((data.close - prev.close) / prev.close * 100.0) {
          change = (data.close - prev.close) / prev.close * 100.0;
        } else {
          change = 0.00;
        }

        if (change >= 0) {
          change = ' ' + change.toFixed(2);
          context.fillStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.TextNegative);
        } else {
          change = change.toFixed(2);
          context.fillStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.TextPositive);
        }

        if (!Plotter.drawString(context, change, rect)) return;
        context.fillStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Text4);
        if (!Plotter.drawString(context, ' %', rect)) return;
      }

      var amplitude;

      if ((data.high - data.low) / data.low * 100.0) {
        amplitude = (data.high - data.low) / data.low * 100.0;
      } else {
        amplitude = 0.00;
      }

      if (lang === "zh-cn") {
        if (!Plotter.drawString(context, '  振幅: ' + amplitude.toFixed(2) + ' %', rect)) {
          return;
        } // if (!Plotter.drawString(context, '  量: ' + data.volume.toFixed(2), rect)) {
        //     return;
        // }

      } else if (lang === "en-us") {
        if (!Plotter.drawString(context, '  AMPLITUDE: ' + amplitude.toFixed(2) + ' %', rect)) {
          return;
        } // if (!Plotter.drawString(context, '  V: ' + data.volume.toFixed(2), rect)) {
        //     return;
        // }

      } else if (lang === "zh-tw") {
        if (!Plotter.drawString(context, '  振幅: ' + amplitude.toFixed(2) + ' %', rect)) {
          return;
        } // if (!Plotter.drawString(context, '  量: ' + data.volume.toFixed(2), rect)) {
        //     return;
        // }

      }

      var dp = mgr.getDataProvider(this.getAreaName() + ".secondary");

      if (dp === undefined) {
        return;
      }

      var indic = dp.getIndicator();
      var n,
          cnt = indic.getOutputCount();

      for (n = 0; n < cnt; n++) {
        var out = indic.getOutputAt(n);
        var v = out.execute(selIndex);

        if (isNaN(v)) {
          continue;
        }

        var info = "  " + out.getName() + ": " + v.toFixed(digits);
        var color = out.getColor();

        if (color === undefined) {
          color = __WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Indicator0 + n;
        }

        context.fillStyle = theme.getColor(color);

        if (!Plotter.drawString(context, info, rect)) {
          return;
        }
      }
    }
  }]);

  return MainInfoPlotter;
}(Plotter);
var IndicatorPlotter =
/*#__PURE__*/
function (_NamedObject4) {
  _inherits(IndicatorPlotter, _NamedObject4);

  function IndicatorPlotter(name) {
    _classCallCheck(this, IndicatorPlotter);

    return _possibleConstructorReturn(this, _getPrototypeOf(IndicatorPlotter).call(this, name));
  }

  _createClass(IndicatorPlotter, [{
    key: "Draw",
    value: function Draw(context) {
      var mgr = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance;
      var area = mgr.getArea(this.getAreaName());
      var timeline = mgr.getTimeline(this.getDataSourceName());
      var range = mgr.getRange(this.getAreaName());
      if (range.getRange() === 0.0) return;
      var dp = mgr.getDataProvider(this.getName());
      if (!__WEBPACK_IMPORTED_MODULE_3__util__["a" /* Util */].isInstance(dp, __WEBPACK_IMPORTED_MODULE_7__data_providers__["a" /* IndicatorDataProvider */])) return;
      var theme = mgr.getTheme(this.getFrameName());
      var cW = timeline.getColumnWidth();
      var first = timeline.getFirstIndex();
      var last = timeline.getLastIndex();
      var start;
      if (area.isChanged() || timeline.isUpdated() || range.isUpdated()) start = first;else start = Math.max(first, last - 2);
      var indic = dp.getIndicator();
      var out,
          n,
          outCount = indic.getOutputCount();

      for (n = 0; n < outCount; n++) {
        out = indic.getOutputAt(n);
        var style = out.getStyle();

        if (style === __WEBPACK_IMPORTED_MODULE_5__exprs__["y" /* OutputExpr */].outputStyle.VolumeStick) {
          this.drawVolumeStick(context, theme, mgr.getDataSource(this.getDataSourceName()), start, last, timeline.toItemLeft(start), cW, timeline.getItemWidth(), range);
        } else if (style === __WEBPACK_IMPORTED_MODULE_5__exprs__["y" /* OutputExpr */].outputStyle.MACDStick) {
          this.drawMACDStick(context, theme, out, start, last, timeline.toItemLeft(start), cW, timeline.getItemWidth(), range);
        } else if (style === __WEBPACK_IMPORTED_MODULE_5__exprs__["y" /* OutputExpr */].outputStyle.SARPoint) {
          this.drawSARPoint(context, theme, out, start, last, timeline.toItemCenter(start), cW, timeline.getItemWidth(), range);
        }
      }

      var left = timeline.toColumnLeft(start);
      var center = timeline.toItemCenter(start);
      context.save();
      context.rect(left, area.getTop(), area.getRight() - left, area.getHeight());
      context.clip();
      context.translate(0.5, 0.5);

      for (n = 0; n < outCount; n++) {
        var x = center;
        out = indic.getOutputAt(n);

        if (out.getStyle() === __WEBPACK_IMPORTED_MODULE_5__exprs__["y" /* OutputExpr */].outputStyle.Line) {
          var v = void 0,
              points = [];

          if (start > first) {
            v = out.execute(start - 1);
            if (isNaN(v) === false) points.push({
              "x": x - cW,
              "y": range.toY(v)
            });
          }

          for (var i = start; i < last; i++, x += cW) {
            v = out.execute(i);
            if (isNaN(v) === false) points.push({
              "x": x,
              "y": range.toY(v)
            });
          }

          if (points.length > 0) {
            var color = out.getColor();
            if (color === undefined) color = __WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Indicator0 + n;
            context.strokeStyle = theme.getColor(color);
            Plotter.drawLines(context, points);
          }
        }
      }

      context.restore();
    }
  }, {
    key: "drawVolumeStick",
    value: function drawVolumeStick(context, theme, ds, first, last, startX, cW, iW, range) {
      var dark = __WEBPACK_IMPORTED_MODULE_3__util__["a" /* Util */].isInstance(theme, __WEBPACK_IMPORTED_MODULE_6__themes__["a" /* DarkTheme */]);
      var left = startX;
      var bottom = range.toY(0);
      var strokePosRects = [];
      var fillPosRects = [];
      var fillNegRects = [];

      for (var i = first; i < last; i++) {
        var data = ds.getDataAt(i);
        var top = range.toY(data.volume);
        var iH = range.toHeight(data.volume);

        if (data.close > data.open) {
          if (iH > 1 && iW > 1 && dark) {
            strokePosRects.push({
              x: left + 0.5,
              y: top + 0.5,
              w: iW - 1,
              h: iH - 1
            });
          } else {
            fillPosRects.push({
              x: left,
              y: top,
              w: Math.max(iW, 1),
              h: Math.max(iH, 1)
            });
          }
        } else if (data.close === data.open) {
          if (i > 0 && data.close >= ds.getDataAt(i - 1).close) {
            if (iH > 1 && iW > 1 && dark) {
              strokePosRects.push({
                x: left + 0.5,
                y: top + 0.5,
                w: iW - 1,
                h: iH - 1
              });
            } else {
              fillPosRects.push({
                x: left,
                y: top,
                w: Math.max(iW, 1),
                h: Math.max(iH, 1)
              });
            }
          } else {
            fillNegRects.push({
              x: left,
              y: top,
              w: Math.max(iW, 1),
              h: Math.max(iH, 1)
            });
          }
        } else {
          fillNegRects.push({
            x: left,
            y: top,
            w: Math.max(iW, 1),
            h: Math.max(iH, 1)
          });
        }

        left += cW;
      }

      if (strokePosRects.length > 0) {
        context.strokeStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Negative);
        Plotter.createRectangles(context, strokePosRects);
        context.stroke();
      }

      if (fillPosRects.length > 0) {
        context.fillStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Negative);
        Plotter.createRectangles(context, fillPosRects);
        context.fill();
      }

      if (fillNegRects.length > 0) {
        context.fillStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Positive);
        Plotter.createRectangles(context, fillNegRects);
        context.fill();
      }
    }
  }, {
    key: "drawMACDStick",
    value: function drawMACDStick(context, theme, output, first, last, startX, cW, iW, range) {
      var left = startX;
      var middle = range.toY(0);
      var strokePosRects = [];
      var strokeNegRects = [];
      var fillPosRects = [];
      var fillNegRects = [];
      var prevMACD = first > 0 ? output.execute(first - 1) : NaN;

      for (var i = first; i < last; i++) {
        var MACD = output.execute(i);

        if (MACD >= 0) {
          var iH = range.toHeight(MACD);
          if ((i === 0 || MACD >= prevMACD) && iH > 1 && iW > 1) strokePosRects.push({
            x: left + 0.5,
            y: middle - iH + 0.5,
            w: iW - 1,
            h: iH - 1
          });else fillPosRects.push({
            x: left,
            y: middle - iH,
            w: Math.max(iW, 1),
            h: Math.max(iH, 1)
          });
        } else {
          var _iH3 = range.toHeight(-MACD);

          if ((i === 0 || MACD >= prevMACD) && _iH3 > 1 && iW > 1) strokeNegRects.push({
            x: left + 0.5,
            y: middle + 0.5,
            w: iW - 1,
            h: _iH3 - 1
          });else fillNegRects.push({
            x: left,
            y: middle,
            w: Math.max(iW, 1),
            h: Math.max(_iH3, 1)
          });
        }

        prevMACD = MACD;
        left += cW;
      }

      if (strokePosRects.length > 0) {
        context.strokeStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Negative);
        Plotter.createRectangles(context, strokePosRects);
        context.stroke();
      }

      if (strokeNegRects.length > 0) {
        context.strokeStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Positive);
        Plotter.createRectangles(context, strokeNegRects);
        context.stroke();
      }

      if (fillPosRects.length > 0) {
        context.fillStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Negative);
        Plotter.createRectangles(context, fillPosRects);
        context.fill();
      }

      if (fillNegRects.length > 0) {
        context.fillStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Positive);
        Plotter.createRectangles(context, fillNegRects);
        context.fill();
      }
    }
  }, {
    key: "drawSARPoint",
    value: function drawSARPoint(context, theme, output, first, last, startX, cW, iW, range) {
      var r = iW >> 1;
      if (r < 0.5) r = 0.5;
      if (r > 4) r = 4;
      var center = startX;
      var right = center + r;
      var endAngle = 2 * Math.PI;
      context.save();
      context.translate(0.5, 0.5);
      context.strokeStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Indicator3);
      context.beginPath();

      for (var i = first; i < last; i++) {
        var y = range.toY(output.execute(i));
        context.moveTo(right, y);
        context.arc(center, y, r, 0, endAngle);
        center += cW;
        right += cW;
      }

      context.stroke();
      context.restore();
    }
  }]);

  return IndicatorPlotter;
}(__WEBPACK_IMPORTED_MODULE_1__named_object__["a" /* NamedObject */]);
var IndicatorInfoPlotter =
/*#__PURE__*/
function (_Plotter5) {
  _inherits(IndicatorInfoPlotter, _Plotter5);

  function IndicatorInfoPlotter(name) {
    _classCallCheck(this, IndicatorInfoPlotter);

    return _possibleConstructorReturn(this, _getPrototypeOf(IndicatorInfoPlotter).call(this, name));
  }

  _createClass(IndicatorInfoPlotter, [{
    key: "Draw",
    value: function Draw(context) {
      var mgr = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance;
      var area = mgr.getArea(this.getAreaName());
      var timeline = mgr.getTimeline(this.getDataSourceName());
      var dp = mgr.getDataProvider(this.getAreaName() + ".secondary");
      var theme = mgr.getTheme(this.getFrameName());
      context.font = theme.getFont(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Font.Default);
      context.textAlign = "left";
      context.textBaseline = "top";
      context.fillStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Text4);
      var rect = {
        x: area.getLeft() + 4,
        y: area.getTop() + 2,
        w: area.getWidth() - 8,
        h: 20
      };
      var indic = dp.getIndicator();
      var title;

      switch (indic.getParameterCount()) {
        case 0:
          title = indic.getName();
          break;

        case 1:
          title = indic.getName() + "(" + indic.getParameterAt(0).getValue() + ")";
          break;

        case 2:
          title = indic.getName() + "(" + indic.getParameterAt(0).getValue() + "," + indic.getParameterAt(1).getValue() + ")";
          break;

        case 3:
          title = indic.getName() + "(" + indic.getParameterAt(0).getValue() + "," + indic.getParameterAt(1).getValue() + "," + indic.getParameterAt(2).getValue() + ")";
          break;

        case 4:
          title = indic.getName() + "(" + indic.getParameterAt(0).getValue() + "," + indic.getParameterAt(1).getValue() + "," + indic.getParameterAt(2).getValue() + "," + indic.getParameterAt(3).getValue() + ")";
          break;

        default:
          return;
      }

      if (!Plotter.drawString(context, title, rect)) return;
      var selIndex = timeline.getSelectedIndex();
      if (selIndex < 0) return;
      var out, v, info, color;
      var n,
          cnt = indic.getOutputCount();

      for (n = 0; n < cnt; n++) {
        out = indic.getOutputAt(n);
        v = out.execute(selIndex);
        if (isNaN(v)) continue;
        info = "  " + out.getName() + ": " + v.toFixed(2);
        color = out.getColor();
        if (color === undefined) color = __WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Indicator0 + n;
        context.fillStyle = theme.getColor(color);
        if (!Plotter.drawString(context, info, rect)) return;
      }
    }
  }]);

  return IndicatorInfoPlotter;
}(Plotter);
var MinMaxPlotter =
/*#__PURE__*/
function (_NamedObject5) {
  _inherits(MinMaxPlotter, _NamedObject5);

  function MinMaxPlotter(name) {
    _classCallCheck(this, MinMaxPlotter);

    return _possibleConstructorReturn(this, _getPrototypeOf(MinMaxPlotter).call(this, name));
  }

  _createClass(MinMaxPlotter, [{
    key: "Draw",
    value: function Draw(context) {
      var mgr = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance;
      var ds = mgr.getDataSource(this.getDataSourceName());
      if (ds.getDataCount() < 1) return;
      var timeline = mgr.getTimeline(this.getDataSourceName());
      if (timeline.getInnerWidth() < timeline.getColumnWidth()) return;
      var range = mgr.getRange(this.getAreaName());
      if (range.getRange() === 0) return;
      var dp = mgr.getDataProvider(this.getAreaName() + ".main");
      var first = timeline.getFirstIndex();
      var center = first + timeline.getLastIndex() >> 1;
      var theme = mgr.getTheme(this.getFrameName());
      context.font = theme.getFont(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Font.Default);
      context.textBaseline = "middle";
      context.fillStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Text4);
      context.strokeStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Text4);
      var digits = ds.getDecimalDigits();
      this.drawMark(context, dp.getMinValue(), digits, range.toY(dp.getMinValue()), first, center, dp.getMinValueIndex(), timeline);
      this.drawMark(context, dp.getMaxValue(), digits, range.toY(dp.getMaxValue()), first, center, dp.getMaxValueIndex(), timeline);
    }
  }, {
    key: "drawMark",
    value: function drawMark(context, v, digits, y, first, center, index, timeline) {
      var arrowStart, arrowStop, _arrowStop;

      var textStart;

      if (index > center) {
        context.textAlign = "right";
        arrowStart = timeline.toItemCenter(index) - 4;
        arrowStop = arrowStart - 7;
        _arrowStop = arrowStart - 3;
        textStart = arrowStop - 4;
      } else {
        context.textAlign = "left";
        arrowStart = timeline.toItemCenter(index) + 4;
        arrowStop = arrowStart + 7;
        _arrowStop = arrowStart + 3;
        textStart = arrowStop + 4;
      }

      Plotter.drawLine(context, arrowStart, y, arrowStop, y);
      Plotter.drawLine(context, arrowStart, y, _arrowStop, y + 2);
      Plotter.drawLine(context, arrowStart, y, _arrowStop, y - 2);
      context.fillText(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* Util */].fromFloat(v, digits), textStart, y);
    }
  }]);

  return MinMaxPlotter;
}(__WEBPACK_IMPORTED_MODULE_1__named_object__["a" /* NamedObject */]);
var TimelinePlotter =
/*#__PURE__*/
function (_Plotter6) {
  _inherits(TimelinePlotter, _Plotter6);

  function TimelinePlotter(name) {
    _classCallCheck(this, TimelinePlotter);

    return _possibleConstructorReturn(this, _getPrototypeOf(TimelinePlotter).call(this, name));
  }

  _createClass(TimelinePlotter, [{
    key: "Draw",
    value: function Draw(context) {
      var mgr = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance;
      var area = mgr.getArea(this.getAreaName());
      var timeline = mgr.getTimeline(this.getDataSourceName());
      if (!area.isChanged() && !timeline.isUpdated()) return;
      var ds = mgr.getDataSource(this.getDataSourceName());
      if (ds.getDataCount() < 2) return;
      var timeInterval = ds.getDataAt(1).date - ds.getDataAt(0).date;
      var n,
          cnt = TimelinePlotter.TIME_INTERVAL.length;

      for (n = 0; n < cnt; n++) {
        if (timeInterval < TimelinePlotter.TIME_INTERVAL[n]) break;
      }

      for (; n < cnt; n++) {
        if (TimelinePlotter.TIME_INTERVAL[n] % timeInterval === 0) if (TimelinePlotter.TIME_INTERVAL[n] / timeInterval * timeline.getColumnWidth() > 60) break;
      }

      var first = timeline.getFirstIndex();
      var last = timeline.getLastIndex();
      var d = new Date();
      var local_utc_diff = d.getTimezoneOffset() * 60 * 1000;
      var theme = mgr.getTheme(this.getFrameName());
      context.font = theme.getFont(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Font.Default);
      context.textAlign = "center";
      context.textBaseline = "middle";
      var lang = mgr.getLanguage();
      var gridRects = [];
      var top = area.getTop();
      var middle = area.getMiddle();

      for (var i = first; i < last; i++) {
        var utcDate = ds.getDataAt(i).date;
        var localDate = utcDate - local_utc_diff;
        var time = new Date(utcDate);
        var year = time.getFullYear();
        var month = time.getMonth() + 1;
        var date = time.getDate();
        var hour = time.getHours();
        var minute = time.getMinutes();
        var text = "";

        if (n < cnt) {
          var m = Math.max(TimelinePlotter.TP_DAY, TimelinePlotter.TIME_INTERVAL[n]);

          if (localDate % m === 0) {
            if (lang === "zh-cn") text = month.toString() + "月" + date.toString() + "日";else if (lang === "zh-tw") text = month.toString() + "月" + date.toString() + "日";else if (lang === "en-us") text = TimelinePlotter.MonthConvert[month] + " " + date.toString();
            context.fillStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Text4);
          } else if (localDate % TimelinePlotter.TIME_INTERVAL[n] === 0) {
            var strMinute = minute.toString();
            if (minute < 10) strMinute = "0" + strMinute;
            text = hour.toString() + ":" + strMinute;
            context.fillStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Text2);
          }
        } else if (date === 1 && hour < timeInterval / TimelinePlotter.TP_HOUR) {
          if (month === 1) {
            text = year.toString();
            if (lang === "zh-cn") text += "年";else if (lang === "zh-tw") text += "年";
          } else {
            if (lang === "zh-cn") text = month.toString() + "月";else if (lang === "zh-tw") text = month.toString() + "月";else if (lang === "en-us") text = TimelinePlotter.MonthConvert[month];
          }

          context.fillStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Text4);
        }

        if (text.length > 0) {
          var x = timeline.toItemCenter(i);
          gridRects.push({
            x: x,
            y: top,
            w: 1,
            h: 4
          });
          context.fillText(text, x, middle);
        }
      }

      if (gridRects.length > 0) {
        context.fillStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Grid1);
        Plotter.createRectangles(context, gridRects);
        context.fill();
      }
    }
  }]);

  return TimelinePlotter;
}(Plotter);
TimelinePlotter.TP_MINUTE = 60 * 1000;
TimelinePlotter.TP_HOUR = 60 * TimelinePlotter.TP_MINUTE;
TimelinePlotter.TP_DAY = 24 * TimelinePlotter.TP_HOUR;
TimelinePlotter.TIME_INTERVAL = [5 * TimelinePlotter.TP_MINUTE, 10 * TimelinePlotter.TP_MINUTE, 15 * TimelinePlotter.TP_MINUTE, 30 * TimelinePlotter.TP_MINUTE, TimelinePlotter.TP_HOUR, 2 * TimelinePlotter.TP_HOUR, 3 * TimelinePlotter.TP_HOUR, 6 * TimelinePlotter.TP_HOUR, 12 * TimelinePlotter.TP_HOUR, TimelinePlotter.TP_DAY, 2 * TimelinePlotter.TP_DAY];
TimelinePlotter.MonthConvert = {
  1: "Jan.",
  2: "Feb.",
  3: "Mar.",
  4: "Apr.",
  5: "May.",
  6: "Jun.",
  7: "Jul.",
  8: "Aug.",
  9: "Sep.",
  10: "Oct.",
  11: "Nov.",
  12: "Dec."
};
var RangePlotter =
/*#__PURE__*/
function (_NamedObject6) {
  _inherits(RangePlotter, _NamedObject6);

  function RangePlotter(name) {
    _classCallCheck(this, RangePlotter);

    return _possibleConstructorReturn(this, _getPrototypeOf(RangePlotter).call(this, name));
  }

  _createClass(RangePlotter, [{
    key: "getRequiredWidth",
    value: function getRequiredWidth(context, v) {
      var mgr = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance;
      var theme = mgr.getTheme(this.getFrameName());
      context.font = theme.getFont(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Font.Default);
      return context.measureText((Math.floor(v) + 0.88).toString()).width + 16;
    }
  }, {
    key: "Draw",
    value: function Draw(context) {
      var mgr = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance;
      var areaName = this.getAreaName();
      var area = mgr.getArea(areaName);
      var rangeName = areaName.substring(0, areaName.lastIndexOf("Range"));
      var range = mgr.getRange(rangeName);
      if (range.getRange() === 0.0) return;
      var isMainRange = range.getNameObject().getCompAt(2) === "main";

      if (isMainRange) {} else {
        if (!area.isChanged() && !range.isUpdated()) return;
      }

      var gradations = range.getGradations();
      if (gradations.length === 0) return;
      var left = area.getLeft();
      var right = area.getRight();
      var center = area.getCenter();
      var theme = mgr.getTheme(this.getFrameName());
      context.font = theme.getFont(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Font.Default);
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Text2);
      var gridRects = [];

      for (var n in gradations) {
        var y = range.toY(gradations[n]);
        gridRects.push({
          x: left,
          y: y,
          w: 6,
          h: 1
        });
        gridRects.push({
          x: right - 6,
          y: y,
          w: 6,
          h: 1
        });
        context.fillText(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* Util */].fromFloat(gradations[n], 2), center, y);
      }

      if (gridRects.length > 0) {
        context.fillStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Grid1);
        Plotter.createRectangles(context, gridRects);
        context.fill();
      }
    }
  }]);

  return RangePlotter;
}(__WEBPACK_IMPORTED_MODULE_1__named_object__["a" /* NamedObject */]);
var COrderGraphPlotter =
/*#__PURE__*/
function (_NamedObject7) {
  _inherits(COrderGraphPlotter, _NamedObject7);

  function COrderGraphPlotter(name) {
    _classCallCheck(this, COrderGraphPlotter);

    return _possibleConstructorReturn(this, _getPrototypeOf(COrderGraphPlotter).call(this, name));
  }

  _createClass(COrderGraphPlotter, [{
    key: "Draw",
    value: function Draw(context) {
      return this._Draw_(context);
    }
  }, {
    key: "_Draw_",
    value: function _Draw_(context) {
      if (this.Update() === false) return;
      if (this.updateData() === false) return;
      this.m_top = this.m_pArea.getTop();
      this.m_bottom = this.m_pArea.getBottom();
      this.m_left = this.m_pArea.getLeft();
      this.m_right = this.m_pArea.getRight();
      context.save();
      context.rect(this.m_left, this.m_top, this.m_right - this.m_left, this.m_bottom - this.m_top);
      context.clip();

      var all = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.getChart()._depthData;

      this.x_offset = 0;
      this.y_offset = 0;
      var ask_tmp = {};
      var bid_tmp = {};
      ask_tmp.x = this.m_left + all.array[this.m_ask_si].amounts * this.m_Step;
      ask_tmp.y = this.m_pRange.toY(all.array[this.m_ask_si].rate);
      bid_tmp.x = this.m_left + all.array[this.m_bid_si].amounts * this.m_Step;
      bid_tmp.y = this.m_pRange.toY(all.array[this.m_bid_si].rate);

      if (Math.abs(ask_tmp.y - bid_tmp.y) < 1) {
        this.y_offset = 1;
      }

      this.x_offset = 1;
      this.DrawBackground(context);
      this.UpdatePoints();
      this.FillBlack(context);
      this.DrawGradations(context);
      this.DrawLine(context);
      context.restore();
    }
  }, {
    key: "DrawBackground",
    value: function DrawBackground(context) {
      context.fillStyle = this.m_pTheme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Background);
      context.fillRect(this.m_left, this.m_top, this.m_right - this.m_left, this.m_bottom - this.m_top);

      var all = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.getChart()._depthData;

      if (this.m_mode === 0) {
        var ask_bottom = this.m_pRange.toY(all.array[this.m_ask_si].rate) - this.y_offset;
        var bid_top = this.m_pRange.toY(all.array[this.m_bid_si].rate) + this.y_offset;
        var ask_gradient = context.createLinearGradient(this.m_left, 0, this.m_right, 0);
        ask_gradient.addColorStop(0, this.m_pTheme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Background));
        ask_gradient.addColorStop(1, this.m_pTheme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.PositiveDark));
        context.fillStyle = ask_gradient;
        context.fillRect(this.m_left, this.m_top, this.m_right - this.m_left, ask_bottom - this.m_top);
        var bid_gradient = context.createLinearGradient(this.m_left, 0, this.m_right, 0);
        bid_gradient.addColorStop(0, this.m_pTheme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Background));
        bid_gradient.addColorStop(1, this.m_pTheme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.NegativeDark));
        context.fillStyle = bid_gradient;
        context.fillRect(this.m_left, bid_top, this.m_right - this.m_left, this.m_bottom - bid_top);
      } else if (this.m_mode === 1) {
        var _ask_gradient = context.createLinearGradient(this.m_left, 0, this.m_right, 0);

        _ask_gradient.addColorStop(0, this.m_pTheme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Background));

        _ask_gradient.addColorStop(1, this.m_pTheme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.PositiveDark));

        context.fillStyle = _ask_gradient;
        context.fillRect(this.m_left, this.m_top, this.m_right - this.m_left, this.m_bottom - this.m_top);
      } else if (this.m_mode === 2) {
        var _bid_gradient = context.createLinearGradient(this.m_left, 0, this.m_right, 0);

        _bid_gradient.addColorStop(0, this.m_pTheme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Background));

        _bid_gradient.addColorStop(1, this.m_pTheme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.NegativeDark));

        context.fillStyle = _bid_gradient;
        context.fillRect(this.m_left, this.m_top, this.m_right - this.m_left, this.m_bottom - this.m_top);
      }
    }
  }, {
    key: "DrawLine",
    value: function DrawLine(context) {
      if (this.m_mode === 0 || this.m_mode === 1) {
        context.strokeStyle = this.m_pTheme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Positive);
        context.beginPath();
        context.moveTo(Math.floor(this.m_ask_points[0].x) + 0.5, Math.floor(this.m_ask_points[0].y) + 0.5);

        for (var i = 1; i < this.m_ask_points.length; i++) {
          context.lineTo(Math.floor(this.m_ask_points[i].x) + 0.5, Math.floor(this.m_ask_points[i].y) + 0.5);
        }

        context.stroke();
      }

      if (this.m_mode === 0 || this.m_mode === 2) {
        context.strokeStyle = this.m_pTheme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Negative);
        context.beginPath();
        context.moveTo(this.m_bid_points[0].x + 0.5, this.m_bid_points[0].y + 0.5);

        for (var _i2 = 1; _i2 < this.m_bid_points.length; _i2++) {
          context.lineTo(this.m_bid_points[_i2].x + 0.5, this.m_bid_points[_i2].y + 0.5);
        }

        context.stroke();
      }
    }
  }, {
    key: "UpdatePoints",
    value: function UpdatePoints() {
      var all = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.getChart()._depthData;

      this.m_ask_points = [];
      var index_ask = {};
      index_ask.x = Math.floor(this.m_left);
      index_ask.y = Math.floor(this.m_pRange.toY(all.array[this.m_ask_si].rate) - this.y_offset);
      this.m_ask_points.push(index_ask);
      var ask_p_i = 0;

      for (var i = this.m_ask_si; i >= this.m_ask_ei; i--) {
        var index0 = {};
        var index1 = {};

        if (i === this.m_ask_si) {
          index0.x = Math.floor(this.m_left + all.array[i].amounts * this.m_Step + this.x_offset);
          index0.y = Math.floor(this.m_pRange.toY(all.array[i].rate) - this.y_offset);
          this.m_ask_points.push(index0);
          ask_p_i = 1;
        } else {
          index0.x = Math.floor(this.m_left + all.array[i].amounts * this.m_Step + this.x_offset);
          index0.y = Math.floor(this.m_ask_points[ask_p_i].y);
          index1.x = Math.floor(index0.x);
          index1.y = Math.floor(this.m_pRange.toY(all.array[i].rate) - this.y_offset);
          this.m_ask_points.push(index0);
          ask_p_i++;
          this.m_ask_points.push(index1);
          ask_p_i++;
        }
      }

      this.m_bid_points = [];
      var index_bid = {};
      index_bid.x = Math.floor(this.m_left);
      index_bid.y = Math.ceil(this.m_pRange.toY(all.array[this.m_bid_si].rate) + this.y_offset);
      this.m_bid_points.push(index_bid);
      var bid_p_i = 0;

      for (var _i3 = this.m_bid_si; _i3 <= this.m_bid_ei; _i3++) {
        var _index = {};
        var _index2 = {};

        if (_i3 === this.m_bid_si) {
          _index.x = Math.floor(this.m_left + all.array[_i3].amounts * this.m_Step + this.x_offset);
          _index.y = Math.ceil(this.m_pRange.toY(all.array[_i3].rate) + this.y_offset);
          this.m_bid_points.push(_index);
          bid_p_i = 1;
        } else {
          _index.x = Math.floor(this.m_left + all.array[_i3].amounts * this.m_Step + this.x_offset);
          _index.y = Math.ceil(this.m_bid_points[bid_p_i].y);
          _index2.x = Math.floor(_index.x);
          _index2.y = Math.ceil(this.m_pRange.toY(all.array[_i3].rate) + this.x_offset);
          this.m_bid_points.push(_index);
          bid_p_i++;
          this.m_bid_points.push(_index2);
          bid_p_i++;
        }
      }
    }
  }, {
    key: "updateData",
    value: function updateData() {
      var all = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.getChart()._depthData;

      if (all.array === null) return false;
      if (all.array.length <= 50) return false;
      var minRange = this.m_pRange.getOuterMinValue();
      var maxRange = this.m_pRange.getOuterMaxValue();
      this.m_ask_si = all.asks_si;
      this.m_ask_ei = all.asks_si;

      for (var i = all.asks_si; i >= all.asks_ei; i--) {
        if (all.array[i].rate < maxRange) this.m_ask_ei = i;else break;
      }

      this.m_bid_si = all.bids_si;
      this.m_bid_ei = all.bids_si;

      for (var _i4 = all.bids_si; _i4 <= all.bids_ei; _i4++) {
        if (all.array[_i4].rate > minRange) this.m_bid_ei = _i4;else break;
      }

      if (this.m_ask_ei === this.m_ask_si) this.m_mode = 2;else if (this.m_bid_ei === this.m_bid_si) this.m_mode = 1;else this.m_mode = 0;
      this.m_Step = this.m_pArea.getWidth();

      if (this.m_mode === 0) {
        /*
         * View: B     --------    T
         * Data: Lo      -----     Hi
         */
        if (this.m_ask_ei === all.asks_ei && this.m_bid_ei === all.bids_ei) {
          this.m_Step /= Math.min(all.array[this.m_ask_ei].amounts, all.array[this.m_bid_ei].amounts);
        }
        /*
         * View: B     --------     T
         * Data: Lo         -----   Hi
         */
        else if (this.m_ask_ei !== all.asks_ei && this.m_bid_ei === all.bids_ei) {
            this.m_Step /= all.array[this.m_bid_ei].amounts;
          }
          /*
           * View: B     --------    T
           * Data: Lo  -----         Hi
           */
          else if (this.m_ask_ei === all.asks_ei && this.m_bid_ei !== all.bids_ei) {
              this.m_Step /= all.array[this.m_ask_ei].amounts;
            }
            /*
             * View: B     --------    T
             * Data: Lo  ------------  Hi
             */
            else if (this.m_ask_ei !== all.asks_ei && this.m_bid_ei !== all.bids_ei) {
                this.m_Step /= Math.max(all.array[this.m_ask_ei].amounts, all.array[this.m_bid_ei].amounts);
              }
      } else if (this.m_mode === 1) {
        this.m_Step /= all.array[this.m_ask_ei].amounts;
      } else if (this.m_mode === 2) {
        this.m_Step /= all.array[this.m_bid_ei].amounts;
      }

      return true;
    }
  }, {
    key: "Update",
    value: function Update() {
      this.m_pMgr = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance;
      var areaName = this.getAreaName();
      this.m_pArea = this.m_pMgr.getArea(areaName);
      if (this.m_pArea === null) return false;
      var rangeName = areaName.substring(0, areaName.lastIndexOf("Range"));
      this.m_pRange = this.m_pMgr.getRange(rangeName);
      if (this.m_pRange === null || this.m_pRange.getRange() === 0.0) return false;
      this.m_pTheme = this.m_pMgr.getTheme(this.getFrameName());

      if (this.m_pTheme === null) {
        return false;
      }

      return true;
    }
  }, {
    key: "DrawGradations",
    value: function DrawGradations(context) {
      var mgr = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance;
      var areaName = this.getAreaName();
      var area = mgr.getArea(areaName);
      var rangeName = areaName.substring(0, areaName.lastIndexOf("Range"));
      var range = mgr.getRange(rangeName);
      if (range.getRange() === 0.0) return;
      var gradations = range.getGradations();
      if (gradations.length === 0) return;
      var left = area.getLeft();
      var right = area.getRight();
      var gridRects = [];

      for (var n in gradations) {
        var y = range.toY(gradations[n]);
        gridRects.push({
          x: left,
          y: y,
          w: 6,
          h: 1
        });
        gridRects.push({
          x: right - 6,
          y: y,
          w: 6,
          h: 1
        });
      }

      if (gridRects.length > 0) {
        var theme = mgr.getTheme(this.getFrameName());
        context.fillStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Grid1);
        Plotter.createRectangles(context, gridRects);
        context.fill();
      }
    }
  }, {
    key: "FillBlack",
    value: function FillBlack(context) {
      var ask_point = this.m_ask_points;
      var bid_point = this.m_bid_points;
      var ask_first_add = {};
      var ask_last_add = {};
      ask_first_add.x = this.m_right;
      ask_first_add.y = ask_point[0].y;
      ask_last_add.x = this.m_right;
      ask_last_add.y = ask_point[ask_point.length - 1].y;
      var bid_first_add = {};
      var bid_last_add = {};
      bid_first_add.x = this.m_right;
      bid_first_add.y = bid_point[0].y - 1;
      bid_last_add.x = this.m_right;
      bid_last_add.y = bid_point[bid_point.length - 1].y;
      ask_point.unshift(ask_first_add);
      ask_point.push(ask_last_add);
      bid_point.unshift(bid_first_add);
      bid_point.push(bid_last_add);
      context.fillStyle = this.m_pTheme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Background);
      context.beginPath();
      context.moveTo(Math.floor(ask_point[0].x) + 0.5, Math.floor(ask_point[0].y) + 0.5);

      for (var i = 1; i < ask_point.length; i++) {
        context.lineTo(Math.floor(ask_point[i].x) + 0.5, Math.floor(ask_point[i].y) + 0.5);
      }

      context.fill();
      context.beginPath();
      context.moveTo(Math.floor(bid_point[0].x) + 0.5, Math.floor(bid_point[0].y) + 0.5);

      for (var _i5 = 1; _i5 < bid_point.length; _i5++) {
        context.lineTo(Math.floor(bid_point[_i5].x) + 0.5, Math.floor(bid_point[_i5].y) + 0.5);
      }

      context.fill();
      ask_point.shift();
      ask_point.pop();
      bid_point.shift();
      bid_point.pop();
    }
  }, {
    key: "DrawTickerGraph",
    value: function DrawTickerGraph(context) {
      // return;
      var mgr = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance;
      var ds = mgr.getDataSource(this.getDataSourceName());
      var ticker = ds._dataItems[ds._dataItems.length - 1].close;
      var p1x = this.m_left + 1;
      var p1y = this.m_pRange.toY(ticker);
      var p2x = p1x + 5;
      var p2y = p1y + 2.5;
      var p3x = p1x + 5;
      var p3y = p1y - 2.5;
      context.fillStyle = this.m_pTheme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Mark);
      context.strokeStyle = this.m_pTheme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Mark);
    }
  }]);

  return COrderGraphPlotter;
}(__WEBPACK_IMPORTED_MODULE_1__named_object__["a" /* NamedObject */]);
var LastVolumePlotter =
/*#__PURE__*/
function (_Plotter7) {
  _inherits(LastVolumePlotter, _Plotter7);

  function LastVolumePlotter(name) {
    _classCallCheck(this, LastVolumePlotter);

    return _possibleConstructorReturn(this, _getPrototypeOf(LastVolumePlotter).call(this, name));
  }

  _createClass(LastVolumePlotter, [{
    key: "Draw",
    value: function Draw(context) {
      var mgr = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance;
      var timeline = mgr.getTimeline(this.getDataSourceName());
      var areaName = this.getAreaName();
      var area = mgr.getArea(areaName);
      var rangeName = areaName.substring(0, areaName.lastIndexOf("Range"));
      var range = mgr.getRange(rangeName);
      if (range.getRange() === 0.0) return;
      var ds = mgr.getDataSource(this.getDataSourceName());
      if (ds.getDataCount() < 1) return;
      var theme = mgr.getTheme(this.getFrameName());
      context.font = theme.getFont(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Font.Default);
      context.textAlign = "left";
      context.textBaseline = "middle";
      context.fillStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.RangeMark);
      context.strokeStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.RangeMark);
      var v = ds.getDataAt(ds.getDataCount() - 1).volume;
      var y = range.toY(v);
      var left = area.getLeft() + 1;
      Plotter.drawLine(context, left, y, left + 7, y);
      Plotter.drawLine(context, left, y, left + 3, y + 2);
      Plotter.drawLine(context, left, y, left + 3, y - 2);
      context.fillText(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* Util */].fromFloat(v, 2), left + 10, y);
    }
  }]);

  return LastVolumePlotter;
}(Plotter);
var LastClosePlotter =
/*#__PURE__*/
function (_Plotter8) {
  _inherits(LastClosePlotter, _Plotter8);

  function LastClosePlotter(name) {
    _classCallCheck(this, LastClosePlotter);

    return _possibleConstructorReturn(this, _getPrototypeOf(LastClosePlotter).call(this, name));
  }

  _createClass(LastClosePlotter, [{
    key: "Draw",
    value: function Draw(context) {
      var mgr = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance;
      var timeline = mgr.getTimeline(this.getDataSourceName());
      var areaName = this.getAreaName();
      var area = mgr.getArea(areaName);
      var rangeName = areaName.substring(0, areaName.lastIndexOf("Range"));
      var range = mgr.getRange(rangeName);
      if (range.getRange() === 0.0) return;
      var ds = mgr.getDataSource(this.getDataSourceName());
      if (ds.getDataCount() < 1) return;
      var v = ds._dataItems[ds._dataItems.length - 1].close;
      if (v <= range.getMinValue() || v >= range.getMaxValue()) return;
      var theme = mgr.getTheme(this.getFrameName());
      context.font = theme.getFont(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Font.Default);
      context.textAlign = "left";
      context.textBaseline = "middle";
      context.fillStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.RangeMark);
      context.strokeStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.RangeMark);
      var y = range.toY(v);
      var left = area.getLeft() + 1;
      Plotter.drawLine(context, left, y, left + 7, y);
      Plotter.drawLine(context, left, y, left + 3, y + 2);
      Plotter.drawLine(context, left, y, left + 3, y - 2);
      context.fillText(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* Util */].fromFloat(v, ds.getDecimalDigits()), left + 10, y);
    }
  }]);

  return LastClosePlotter;
}(Plotter);
var SelectionPlotter =
/*#__PURE__*/
function (_Plotter9) {
  _inherits(SelectionPlotter, _Plotter9);

  function SelectionPlotter(name) {
    _classCallCheck(this, SelectionPlotter);

    return _possibleConstructorReturn(this, _getPrototypeOf(SelectionPlotter).call(this, name));
  }

  _createClass(SelectionPlotter, [{
    key: "Draw",
    value: function Draw(context) {
      var mgr = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance;

      if (mgr._drawingTool !== __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].DrawingTool.CrossCursor) {
        return;
      }

      var area = mgr.getArea(this.getAreaName());
      var timeline = mgr.getTimeline(this.getDataSourceName());

      if (timeline.getSelectedIndex() < 0) {
        return;
      }

      var range = mgr.getRange(this.getAreaName());
      var theme = mgr.getTheme(this.getFrameName());
      context.strokeStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Cursor);
      var x = timeline.toItemCenter(timeline.getSelectedIndex());
      Plotter.drawLine(context, x, area.getTop() - 1, x, area.getBottom());
      var pos = range.getSelectedPosition();

      if (pos >= 0) {
        Plotter.drawLine(context, area.getLeft(), pos, area.getRight(), pos);
      }
    }
  }]);

  return SelectionPlotter;
}(Plotter);
var TimelineSelectionPlotter =
/*#__PURE__*/
function (_Plotter10) {
  _inherits(TimelineSelectionPlotter, _Plotter10);

  function TimelineSelectionPlotter(name) {
    _classCallCheck(this, TimelineSelectionPlotter);

    return _possibleConstructorReturn(this, _getPrototypeOf(TimelineSelectionPlotter).call(this, name));
  }

  _createClass(TimelineSelectionPlotter, [{
    key: "Draw",
    value: function Draw(context) {
      var mgr = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance;
      var area = mgr.getArea(this.getAreaName());
      var timeline = mgr.getTimeline(this.getDataSourceName());
      if (timeline.getSelectedIndex() < 0) return;
      var ds = mgr.getDataSource(this.getDataSourceName());
      if (!__WEBPACK_IMPORTED_MODULE_3__util__["a" /* Util */].isInstance(ds, __WEBPACK_IMPORTED_MODULE_8__data_sources__["b" /* MainDataSource */])) return;
      var theme = mgr.getTheme(this.getFrameName());
      var lang = mgr.getLanguage();
      var x = timeline.toItemCenter(timeline.getSelectedIndex());
      context.fillStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Background);
      context.fillRect(x - 52.5, area.getTop() + 2.5, 106, 18);
      context.strokeStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Grid3);
      context.strokeRect(x - 52.5, area.getTop() + 2.5, 106, 18);
      context.font = theme.getFont(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Font.Default);
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Text4);
      var time = new Date(ds.getDataAt(timeline.getSelectedIndex()).date);
      var month = time.getMonth() + 1;
      var date = time.getDate();
      var hour = time.getHours();
      var minute = time.getMinutes();
      var second = time.getSeconds();
      var strMonth = month.toString();
      var strDate = date.toString();
      var strHour = hour.toString();
      var strMinute = minute.toString();
      var strSecond = second.toString();

      if (minute < 10) {
        strMinute = "0" + strMinute;
      }

      if (second < 10) {
        strSecond = "0" + strSecond;
      }

      var text = "";

      if (lang === "zh-cn") {
        text = strMonth + "月" + strDate + "日  " + strHour + ":" + strMinute;
      } else if (lang === "zh-tw") {
        text = strMonth + "月" + strDate + "日  " + strHour + ":" + strMinute;
      } else if (lang === "en-us") {
        text = TimelineSelectionPlotter.MonthConvert[month] + " " + strDate + "  " + strHour + ":" + strMinute;
      }

      if (__WEBPACK_IMPORTED_MODULE_0__kline__["a" /* default */].instance.range < 60000) {
        text += ":" + strSecond;
      }

      context.fillText(text, x, area.getMiddle());
    }
  }]);

  return TimelineSelectionPlotter;
}(Plotter);
TimelineSelectionPlotter.MonthConvert = {
  1: "Jan.",
  2: "Feb.",
  3: "Mar.",
  4: "Apr.",
  5: "May.",
  6: "Jun.",
  7: "Jul.",
  8: "Aug.",
  9: "Sep.",
  10: "Oct.",
  11: "Nov.",
  12: "Dec."
};
var RangeSelectionPlotter =
/*#__PURE__*/
function (_NamedObject8) {
  _inherits(RangeSelectionPlotter, _NamedObject8);

  function RangeSelectionPlotter(name) {
    _classCallCheck(this, RangeSelectionPlotter);

    return _possibleConstructorReturn(this, _getPrototypeOf(RangeSelectionPlotter).call(this, name));
  }

  _createClass(RangeSelectionPlotter, [{
    key: "Draw",
    value: function Draw(context) {
      var mgr = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance;
      var areaName = this.getAreaName();
      var area = mgr.getArea(areaName);
      var timeline = mgr.getTimeline(this.getDataSourceName());

      if (timeline.getSelectedIndex() < 0) {
        return;
      }

      var rangeName = areaName.substring(0, areaName.lastIndexOf("Range"));
      var range = mgr.getRange(rangeName);

      if (range.getRange() === 0.0 || range.getSelectedPosition() < 0) {
        return;
      }

      var v = range.getSelectedValue();

      if (v === -Number.MAX_VALUE) {
        return;
      }

      var y = range.getSelectedPosition();
      Plotter.createPolygon(context, [{
        "x": area.getLeft(),
        "y": y
      }, {
        "x": area.getLeft() + 5,
        "y": y + 10
      }, {
        "x": area.getRight() - 3,
        "y": y + 10
      }, {
        "x": area.getRight() - 3,
        "y": y - 10
      }, {
        "x": area.getLeft() + 5,
        "y": y - 10
      }]);
      var theme = mgr.getTheme(this.getFrameName());
      context.fillStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Background);
      context.fill();
      context.strokeStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Grid4);
      context.stroke();
      context.font = theme.getFont(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Font.Default);
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.Text3);
      var digits = 2;

      if (range.getNameObject().getCompAt(2) === "main") {
        digits = mgr.getDataSource(this.getDataSourceName()).getDecimalDigits();
      }

      context.fillText(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* Util */].fromFloat(v, digits), area.getCenter(), y);
    }
  }]);

  return RangeSelectionPlotter;
}(__WEBPACK_IMPORTED_MODULE_1__named_object__["a" /* NamedObject */]);
var CToolPlotter =
/*#__PURE__*/
function (_NamedObject9) {
  _inherits(CToolPlotter, _NamedObject9);

  function CToolPlotter(name, toolObject) {
    var _this2;

    _classCallCheck(this, CToolPlotter);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(CToolPlotter).call(this, name));
    _this2.toolObject = toolObject;
    var pMgr = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance;
    var pArea = pMgr.getArea('frame0.k0.main');

    if (pArea === null) {
      _this2.areaPos = {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      };
      return _possibleConstructorReturn(_this2);
    }

    _this2.areaPos = {
      left: pArea.getLeft(),
      top: pArea.getTop(),
      right: pArea.getRight(),
      bottom: pArea.getBottom()
    };
    _this2.crossPt = {};
    _this2.normalSize = 4;
    _this2.selectedSize = 6;
    _this2.cursorLen = 4;
    _this2.cursorGapLen = 3;
    _this2.theme = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.getTheme(_this2.getFrameName());
    return _this2;
  }

  _createClass(CToolPlotter, [{
    key: "drawCursor",
    value: function drawCursor(context) {
      this.drawCrossCursor(context);
    }
  }, {
    key: "drawCrossCursor",
    value: function drawCrossCursor(context) {
      context.strokeStyle = this.theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.LineColorNormal);
      context.fillStyle = this.theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.LineColorNormal);
      var tempPt = this.toolObject.getPoint(0).getPosXY();

      if (tempPt === null) {
        return;
      }

      var x = tempPt.x;
      var y = tempPt.y;
      var cursorLen = this.cursorLen;
      var cursorGapLen = this.cursorGapLen;
      context.fillRect(x, y, 1, 1);
      Plotter.drawLine(context, x - cursorLen - cursorGapLen, y, x - cursorGapLen, y);
      Plotter.drawLine(context, x + cursorLen + cursorGapLen, y, x + cursorGapLen, y);
      Plotter.drawLine(context, x, y - cursorLen - cursorGapLen, x, y - cursorGapLen);
      Plotter.drawLine(context, x, y + cursorLen + cursorGapLen, x, y + cursorGapLen);
    }
  }, {
    key: "drawCircle",
    value: function drawCircle(context, center, radius) {
      var centerX = center.x;
      var centerY = center.y;
      context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      context.fillStyle = this.theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.CircleColorFill);
      context.fill();
      context.stroke();
    }
  }, {
    key: "drawCtrlPt",
    value: function drawCtrlPt(context) {
      context.strokeStyle = this.theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.CircleColorStroke);

      for (var i = 0; i < this.ctrlPtsNum; i++) {
        this.drawCircle(context, this.ctrlPts[1][i], this.normalSize);
      }
    }
  }, {
    key: "highlightCtrlPt",
    value: function highlightCtrlPt(context) {
      context.strokeStyle = this.theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.CircleColorStroke);

      for (var i = 0; i < this.ctrlPtsNum; i++) {
        if (this.toolObject.getPoint(i).getState() === __WEBPACK_IMPORTED_MODULE_4__cpoint__["a" /* CPoint */].state.Highlight) this.drawCircle(context, this.ctrlPts[1][i], this.selectedSize);
      }
    }
  }, {
    key: "drawFibRayLines",
    value: function drawFibRayLines(context, startPoint, endPoint) {
      for (var i = 0; i < this.fiboFansSequence.length; i++) {
        var stageY = startPoint.y + (100 - this.fiboFansSequence[i]) / 100 * (endPoint.y - startPoint.y);
        var tempStartPt = {
          x: startPoint.x,
          y: startPoint.y
        };
        var tempEndPt = {
          x: endPoint.x,
          y: stageY
        };
        this.drawRayLines(context, tempStartPt, tempEndPt);
      }
    }
  }, {
    key: "drawRayLines",
    value: function drawRayLines(context, startPoint, endPoint) {
      this.getAreaPos();
      var tempStartPt = {
        x: startPoint.x,
        y: startPoint.y
      };
      var tempEndPt = {
        x: endPoint.x,
        y: endPoint.y
      };
      var crossPt = this.getRectCrossPt(this.areaPos, tempStartPt, tempEndPt);
      var tempCrossPt;

      if (endPoint.x === startPoint.x) {
        if (endPoint.y === startPoint.y) {
          tempCrossPt = endPoint;
        } else {
          tempCrossPt = endPoint.y > startPoint.y ? {
            x: crossPt[1].x,
            y: crossPt[1].y
          } : {
            x: crossPt[0].x,
            y: crossPt[0].y
          };
        }
      } else {
        tempCrossPt = endPoint.x > startPoint.x ? {
          x: crossPt[1].x,
          y: crossPt[1].y
        } : {
          x: crossPt[0].x,
          y: crossPt[0].y
        };
      }

      Plotter.drawLine(context, startPoint.x, startPoint.y, tempCrossPt.x, tempCrossPt.y);
    }
  }, {
    key: "lenBetweenPts",
    value: function lenBetweenPts(pt1, pt2) {
      return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
    }
  }, {
    key: "getCtrlPts",
    value: function getCtrlPts() {
      for (var i = 0; i < this.ctrlPtsNum; i++) {
        this.ctrlPts[0][i] = this.toolObject.getPoint(i);
      }
    }
  }, {
    key: "updateCtrlPtPos",
    value: function updateCtrlPtPos() {
      for (var i = 0; i < this.ctrlPtsNum; i++) {
        this.ctrlPts[1][i] = this.ctrlPts[0][i].getPosXY();
      }
    }
  }, {
    key: "getAreaPos",
    value: function getAreaPos() {
      var pMgr = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance;
      var pArea = pMgr.getArea('frame0.k0.main');

      if (pArea === null) {
        this.areaPos = {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        };
        return;
      }

      this.areaPos = {
        left: Math.floor(pArea.getLeft()),
        top: Math.floor(pArea.getTop()),
        right: Math.floor(pArea.getRight()),
        bottom: Math.floor(pArea.getBottom())
      };
    }
  }, {
    key: "updateDraw",
    value: function updateDraw(context) {
      context.strokeStyle = this.theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.LineColorNormal);
      this.draw(context);
      this.drawCtrlPt(context);
    }
  }, {
    key: "finishDraw",
    value: function finishDraw(context) {
      context.strokeStyle = this.theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.LineColorNormal);
      this.draw(context);
    }
  }, {
    key: "highlight",
    value: function highlight(context) {
      context.strokeStyle = this.theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.LineColorSelected);
      this.draw(context);
      this.drawCtrlPt(context);
      this.highlightCtrlPt(context);
    }
  }]);

  return CToolPlotter;
}(__WEBPACK_IMPORTED_MODULE_1__named_object__["a" /* NamedObject */]);
var DrawStraightLinesPlotter =
/*#__PURE__*/
function (_CToolPlotter) {
  _inherits(DrawStraightLinesPlotter, _CToolPlotter);

  function DrawStraightLinesPlotter(name, toolObject) {
    var _this3;

    _classCallCheck(this, DrawStraightLinesPlotter);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(DrawStraightLinesPlotter).call(this, name, toolObject));
    _this3.toolObject = toolObject;
    _this3.ctrlPtsNum = 2;
    _this3.ctrlPts = [new Array(_this3.ctrlPtsNum), new Array(2)];

    _this3.getCtrlPts();

    return _this3;
  }

  _createClass(DrawStraightLinesPlotter, [{
    key: "draw",
    value: function draw(context) {
      this.updateCtrlPtPos();
      this.getAreaPos();
      this.startPoint = this.ctrlPts[1][0];
      this.endPoint = this.ctrlPts[1][1];

      if (this.startPoint.x === this.endPoint.x && this.startPoint.y === this.endPoint.y) {
        Plotter.drawLine(context, this.areaPos.left, this.startPoint.y, this.areaPos.right, this.startPoint.y);
      } else {
        this.crossPt = this.getRectCrossPt(this.areaPos, this.startPoint, this.endPoint);
        Plotter.drawLine(context, this.crossPt[0].x, this.crossPt[0].y, this.crossPt[1].x, this.crossPt[1].y);
      }
    }
  }]);

  return DrawStraightLinesPlotter;
}(CToolPlotter);
var DrawSegLinesPlotter =
/*#__PURE__*/
function (_CToolPlotter2) {
  _inherits(DrawSegLinesPlotter, _CToolPlotter2);

  function DrawSegLinesPlotter(name, toolObject) {
    var _this4;

    _classCallCheck(this, DrawSegLinesPlotter);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(DrawSegLinesPlotter).call(this, name, toolObject));
    _this4.toolObject = toolObject;
    _this4.ctrlPtsNum = 2;
    _this4.ctrlPts = [new Array(_this4.ctrlPtsNum), new Array(2)];

    _this4.getCtrlPts();

    return _this4;
  }

  _createClass(DrawSegLinesPlotter, [{
    key: "draw",
    value: function draw(context) {
      this.updateCtrlPtPos();
      this.startPoint = this.ctrlPts[1][0];
      this.endPoint = this.ctrlPts[1][1];

      if (this.startPoint.x === this.endPoint.x && this.startPoint.y === this.endPoint.y) {
        this.endPoint.x += 1;
      }

      Plotter.drawLine(context, this.startPoint.x, this.startPoint.y, this.endPoint.x, this.endPoint.y);
    }
  }]);

  return DrawSegLinesPlotter;
}(CToolPlotter);
var DrawRayLinesPlotter =
/*#__PURE__*/
function (_CToolPlotter3) {
  _inherits(DrawRayLinesPlotter, _CToolPlotter3);

  function DrawRayLinesPlotter(name, toolObject) {
    var _this5;

    _classCallCheck(this, DrawRayLinesPlotter);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(DrawRayLinesPlotter).call(this, name));
    _this5.toolObject = toolObject;
    _this5.ctrlPtsNum = 2;
    _this5.ctrlPts = [new Array(_this5.ctrlPtsNum), new Array(2)];

    _this5.getCtrlPts();

    return _this5;
  }

  _createClass(DrawRayLinesPlotter, [{
    key: "draw",
    value: function draw(context) {
      this.updateCtrlPtPos();
      this.getAreaPos();
      this.startPoint = this.ctrlPts[1][0];
      this.endPoint = this.ctrlPts[1][1];

      if (this.startPoint.x === this.endPoint.x && this.startPoint.y === this.endPoint.y) {
        this.endPoint.x += 1;
      }

      this.drawRayLines(context, this.startPoint, this.endPoint);
    }
  }]);

  return DrawRayLinesPlotter;
}(CToolPlotter);
var DrawArrowLinesPlotter =
/*#__PURE__*/
function (_CToolPlotter4) {
  _inherits(DrawArrowLinesPlotter, _CToolPlotter4);

  function DrawArrowLinesPlotter(name, toolObject) {
    var _this6;

    _classCallCheck(this, DrawArrowLinesPlotter);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(DrawArrowLinesPlotter).call(this, name, toolObject));
    _this6.toolObject = toolObject;
    _this6.arrowSizeRatio = 0.03;
    _this6.arrowSize = 4;
    _this6.crossPt = {
      x: -1,
      y: -1
    };
    _this6.ctrlPtsNum = 2;
    _this6.ctrlPts = [new Array(_this6.ctrlPtsNum), new Array(2)];

    _this6.getCtrlPts();

    return _this6;
  }

  _createClass(DrawArrowLinesPlotter, [{
    key: "drawArrow",
    value: function drawArrow(context, startPoint, endPoint) {
      var len = this.lenBetweenPts(startPoint, endPoint);
      var vectorA = [endPoint.x - startPoint.x, endPoint.y - startPoint.y];
      this.crossPt.x = startPoint.x + (1 - this.arrowSize / len) * vectorA[0];
      this.crossPt.y = startPoint.y + (1 - this.arrowSize / len) * vectorA[1];
      var vectorAautho = [-vectorA[1], vectorA[0]];
      var Aautho = {
        x: vectorAautho[0],
        y: vectorAautho[1]
      };
      var origin = {
        x: 0,
        y: 0
      };
      vectorAautho[0] = this.arrowSize * Aautho.x / this.lenBetweenPts(Aautho, origin);
      vectorAautho[1] = this.arrowSize * Aautho.y / this.lenBetweenPts(Aautho, origin);
      var arrowEndPt = [this.crossPt.x + vectorAautho[0], this.crossPt.y + vectorAautho[1]];
      Plotter.drawLine(context, endPoint.x, endPoint.y, arrowEndPt[0], arrowEndPt[1]);
      arrowEndPt = [this.crossPt.x - vectorAautho[0], this.crossPt.y - vectorAautho[1]];
      Plotter.drawLine(context, endPoint.x, endPoint.y, arrowEndPt[0], arrowEndPt[1]);
    }
  }, {
    key: "draw",
    value: function draw(context) {
      this.updateCtrlPtPos();
      this.startPoint = this.ctrlPts[1][0];
      this.endPoint = this.ctrlPts[1][1];

      if (this.startPoint.x === this.endPoint.x && this.startPoint.y === this.endPoint.y) {
        this.endPoint.x += 1;
      }

      Plotter.drawLine(context, this.startPoint.x, this.startPoint.y, this.endPoint.x, this.endPoint.y);
      this.drawArrow(context, this.startPoint, this.endPoint);
    }
  }]);

  return DrawArrowLinesPlotter;
}(CToolPlotter);
var DrawHoriStraightLinesPlotter =
/*#__PURE__*/
function (_CToolPlotter5) {
  _inherits(DrawHoriStraightLinesPlotter, _CToolPlotter5);

  function DrawHoriStraightLinesPlotter(name, toolObject) {
    var _this7;

    _classCallCheck(this, DrawHoriStraightLinesPlotter);

    _this7 = _possibleConstructorReturn(this, _getPrototypeOf(DrawHoriStraightLinesPlotter).call(this, name));
    _this7.toolObject = toolObject;
    _this7.ctrlPtsNum = 1;
    _this7.ctrlPts = [new Array(_this7.ctrlPtsNum), new Array(2)];

    _this7.getCtrlPts();

    return _this7;
  }

  _createClass(DrawHoriStraightLinesPlotter, [{
    key: "draw",
    value: function draw(context) {
      this.updateCtrlPtPos();
      this.getAreaPos();
      this.startPoint = this.ctrlPts[1][0];
      Plotter.drawLine(context, this.areaPos.left, this.startPoint.y, this.areaPos.right, this.startPoint.y);
    }
  }]);

  return DrawHoriStraightLinesPlotter;
}(CToolPlotter);
var DrawHoriRayLinesPlotter =
/*#__PURE__*/
function (_CToolPlotter6) {
  _inherits(DrawHoriRayLinesPlotter, _CToolPlotter6);

  function DrawHoriRayLinesPlotter(name, toolObject) {
    var _this8;

    _classCallCheck(this, DrawHoriRayLinesPlotter);

    _this8 = _possibleConstructorReturn(this, _getPrototypeOf(DrawHoriRayLinesPlotter).call(this, name));
    _this8.toolObject = toolObject;
    _this8.ctrlPtsNum = 2;
    _this8.ctrlPts = [new Array(_this8.ctrlPtsNum), new Array(2)];

    _this8.getCtrlPts();

    return _this8;
  }

  _createClass(DrawHoriRayLinesPlotter, [{
    key: "draw",
    value: function draw(context) {
      this.updateCtrlPtPos();
      this.getAreaPos();
      this.startPoint = this.ctrlPts[1][0];
      this.endPoint = this.ctrlPts[1][1];

      if (this.startPoint.x === this.endPoint.x) {
        Plotter.drawLine(context, this.startPoint.x, this.startPoint.y, this.areaPos.right, this.startPoint.y);
      } else {
        var tempEndPt = {
          x: this.endPoint.x,
          y: this.startPoint.y
        };
        this.drawRayLines(context, this.startPoint, tempEndPt);
      }
    }
  }]);

  return DrawHoriRayLinesPlotter;
}(CToolPlotter);
var DrawHoriSegLinesPlotter =
/*#__PURE__*/
function (_CToolPlotter7) {
  _inherits(DrawHoriSegLinesPlotter, _CToolPlotter7);

  function DrawHoriSegLinesPlotter(name, toolObject) {
    var _this9;

    _classCallCheck(this, DrawHoriSegLinesPlotter);

    _this9 = _possibleConstructorReturn(this, _getPrototypeOf(DrawHoriSegLinesPlotter).call(this, name, toolObject));
    _this9.toolObject = toolObject;
    _this9.ctrlPtsNum = 2;
    _this9.ctrlPts = [new Array(_this9.ctrlPtsNum), new Array(2)];

    _this9.getCtrlPts();

    return _this9;
  }

  _createClass(DrawHoriSegLinesPlotter, [{
    key: "draw",
    value: function draw(context) {
      this.updateCtrlPtPos();
      this.startPoint = this.ctrlPts[1][0];
      this.endPoint = this.ctrlPts[1][1];
      this.endPoint.y = this.startPoint.y;

      if (this.startPoint.x === this.endPoint.x && this.startPoint.y === this.endPoint.y) {
        Plotter.drawLine(context, this.startPoint.x, this.startPoint.y, this.endPoint.x + 1, this.startPoint.y);
      } else {
        Plotter.drawLine(context, this.startPoint.x, this.startPoint.y, this.endPoint.x, this.startPoint.y);
      }
    }
  }]);

  return DrawHoriSegLinesPlotter;
}(CToolPlotter);
var DrawVertiStraightLinesPlotter =
/*#__PURE__*/
function (_CToolPlotter8) {
  _inherits(DrawVertiStraightLinesPlotter, _CToolPlotter8);

  function DrawVertiStraightLinesPlotter(name, toolObject) {
    var _this10;

    _classCallCheck(this, DrawVertiStraightLinesPlotter);

    _this10 = _possibleConstructorReturn(this, _getPrototypeOf(DrawVertiStraightLinesPlotter).call(this, name));
    _this10.toolObject = toolObject;
    _this10.ctrlPtsNum = 1;
    _this10.ctrlPts = [new Array(_this10.ctrlPtsNum), new Array(2)];

    _this10.getCtrlPts();

    return _this10;
  }

  _createClass(DrawVertiStraightLinesPlotter, [{
    key: "draw",
    value: function draw(context) {
      this.updateCtrlPtPos();
      this.getAreaPos();
      this.startPoint = this.ctrlPts[1][0];
      Plotter.drawLine(context, this.startPoint.x, this.areaPos.top, this.startPoint.x, this.areaPos.bottom);
    }
  }]);

  return DrawVertiStraightLinesPlotter;
}(CToolPlotter);
var DrawPriceLinesPlotter =
/*#__PURE__*/
function (_CToolPlotter9) {
  _inherits(DrawPriceLinesPlotter, _CToolPlotter9);

  function DrawPriceLinesPlotter(name, toolObject) {
    var _this11;

    _classCallCheck(this, DrawPriceLinesPlotter);

    _this11 = _possibleConstructorReturn(this, _getPrototypeOf(DrawPriceLinesPlotter).call(this, name));
    _this11.toolObject = toolObject;
    _this11.ctrlPtsNum = 1;
    _this11.ctrlPts = [new Array(_this11.ctrlPtsNum), new Array(2)];

    _this11.getCtrlPts();

    return _this11;
  }

  _createClass(DrawPriceLinesPlotter, [{
    key: "draw",
    value: function draw(context) {
      context.font = "12px Tahoma";
      context.textAlign = "left";
      context.fillStyle = this.theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.LineColorNormal);
      this.updateCtrlPtPos();
      this.getAreaPos();
      this.startPoint = this.ctrlPts[1][0];
      var text = this.ctrlPts[0][0].getPosIV().v;
      Plotter.drawLine(context, this.startPoint.x, this.startPoint.y, this.areaPos.right, this.startPoint.y);
      context.fillText(text.toFixed(2), this.startPoint.x + 2, this.startPoint.y - 15);
    }
  }]);

  return DrawPriceLinesPlotter;
}(CToolPlotter);
var ParallelLinesPlotter =
/*#__PURE__*/
function (_CToolPlotter10) {
  _inherits(ParallelLinesPlotter, _CToolPlotter10);

  function ParallelLinesPlotter(name, toolObject) {
    var _this12;

    _classCallCheck(this, ParallelLinesPlotter);

    _this12 = _possibleConstructorReturn(this, _getPrototypeOf(ParallelLinesPlotter).call(this, name));
    _this12.toolObject = toolObject;
    return _this12;
  }

  _createClass(ParallelLinesPlotter, [{
    key: "getParaPt",
    value: function getParaPt() {
      var vectorA = [];
      vectorA[0] = this.endPoint.x - this.startPoint.x;
      vectorA[1] = this.endPoint.y - this.startPoint.y;
      var vectorB = [];
      vectorB[0] = this.paraStartPoint.x - this.startPoint.x;
      vectorB[1] = this.paraStartPoint.y - this.startPoint.y;
      this.paraEndPoint = {
        x: -1,
        y: -1
      };
      this.paraEndPoint.x = vectorA[0] + vectorB[0] + this.startPoint.x;
      this.paraEndPoint.y = vectorA[1] + vectorB[1] + this.startPoint.y;
    }
  }]);

  return ParallelLinesPlotter;
}(CToolPlotter);
var DrawBiParallelLinesPlotter =
/*#__PURE__*/
function (_ParallelLinesPlotter) {
  _inherits(DrawBiParallelLinesPlotter, _ParallelLinesPlotter);

  function DrawBiParallelLinesPlotter(name, toolObject) {
    var _this13;

    _classCallCheck(this, DrawBiParallelLinesPlotter);

    _this13 = _possibleConstructorReturn(this, _getPrototypeOf(DrawBiParallelLinesPlotter).call(this, name, toolObject));
    _this13.toolObject = toolObject;
    _this13.ctrlPtsNum = 3;
    _this13.ctrlPts = [new Array(_this13.ctrlPtsNum), new Array(2)];

    _this13.getCtrlPts();

    return _this13;
  }

  _createClass(DrawBiParallelLinesPlotter, [{
    key: "draw",
    value: function draw(context) {
      this.updateCtrlPtPos();
      this.getAreaPos();
      this.startPoint = this.ctrlPts[1][0];
      this.paraStartPoint = this.ctrlPts[1][1];
      this.endPoint = this.ctrlPts[1][2];
      this.getParaPt();
      this.getAreaPos();
      this.crossPt0 = this.getRectCrossPt(this.areaPos, this.startPoint, this.endPoint);
      Plotter.drawLine(context, this.crossPt0[0].x, this.crossPt0[0].y, this.crossPt0[1].x, this.crossPt0[1].y);
      this.crossPt1 = this.getRectCrossPt(this.areaPos, this.paraStartPoint, this.paraEndPoint);
      Plotter.drawLine(context, this.crossPt1[0].x, this.crossPt1[0].y, this.crossPt1[1].x, this.crossPt1[1].y);
    }
  }]);

  return DrawBiParallelLinesPlotter;
}(ParallelLinesPlotter);
var DrawBiParallelRayLinesPlotter =
/*#__PURE__*/
function (_ParallelLinesPlotter2) {
  _inherits(DrawBiParallelRayLinesPlotter, _ParallelLinesPlotter2);

  function DrawBiParallelRayLinesPlotter(name, toolObject) {
    var _this14;

    _classCallCheck(this, DrawBiParallelRayLinesPlotter);

    _this14 = _possibleConstructorReturn(this, _getPrototypeOf(DrawBiParallelRayLinesPlotter).call(this, name, toolObject));
    _this14.toolObject = toolObject;
    _this14.ctrlPtsNum = 3;
    _this14.ctrlPts = [new Array(_this14.ctrlPtsNum), new Array(2)];

    _this14.getCtrlPts();

    return _this14;
  }

  _createClass(DrawBiParallelRayLinesPlotter, [{
    key: "draw",
    value: function draw(context) {
      this.updateCtrlPtPos();
      this.getAreaPos();
      this.startPoint = this.ctrlPts[1][0];
      this.paraStartPoint = this.ctrlPts[1][1];
      this.endPoint = this.ctrlPts[1][2];

      if (this.startPoint.x === this.endPoint.x && this.startPoint.y === this.endPoint.y) {
        this.endPoint.x += 1;
      }

      this.getParaPt();
      this.drawRayLines(context, this.startPoint, this.endPoint);
      this.drawRayLines(context, this.paraStartPoint, this.paraEndPoint);
    }
  }]);

  return DrawBiParallelRayLinesPlotter;
}(ParallelLinesPlotter);
var DrawTriParallelLinesPlotter =
/*#__PURE__*/
function (_ParallelLinesPlotter3) {
  _inherits(DrawTriParallelLinesPlotter, _ParallelLinesPlotter3);

  function DrawTriParallelLinesPlotter(name, toolObject) {
    var _this15;

    _classCallCheck(this, DrawTriParallelLinesPlotter);

    _this15 = _possibleConstructorReturn(this, _getPrototypeOf(DrawTriParallelLinesPlotter).call(this, name, toolObject));
    _this15.toolObject = toolObject;
    _this15.ctrlPtsNum = 3;
    _this15.ctrlPts = [new Array(_this15.ctrlPtsNum), new Array(2)];

    _this15.getCtrlPts();

    return _this15;
  }

  _createClass(DrawTriParallelLinesPlotter, [{
    key: "draw",
    value: function draw(context) {
      this.updateCtrlPtPos();
      this.getAreaPos();
      this.startPoint = this.ctrlPts[1][0];
      this.paraStartPoint = this.ctrlPts[1][1];
      this.endPoint = this.ctrlPts[1][2];
      var vectorA = [];
      vectorA[0] = this.endPoint.x - this.startPoint.x;
      vectorA[1] = this.endPoint.y - this.startPoint.y;
      var vectorB = [];
      vectorB[0] = this.paraStartPoint.x - this.startPoint.x;
      vectorB[1] = this.paraStartPoint.y - this.startPoint.y;
      this.para1EndPoint = {
        x: -1,
        y: -1
      };
      this.para2EndPoint = {
        x: -1,
        y: -1
      };
      this.para2StartPoint = {
        x: -1,
        y: -1
      };
      this.para1EndPoint.x = vectorA[0] + vectorB[0] + this.startPoint.x;
      this.para1EndPoint.y = vectorA[1] + vectorB[1] + this.startPoint.y;
      this.para2StartPoint.x = this.startPoint.x - vectorB[0];
      this.para2StartPoint.y = this.startPoint.y - vectorB[1];
      this.para2EndPoint.x = this.endPoint.x - vectorB[0];
      this.para2EndPoint.y = this.endPoint.y - vectorB[1];
      this.getAreaPos();
      this.crossPt0 = this.getRectCrossPt(this.areaPos, this.startPoint, this.endPoint);
      Plotter.drawLine(context, this.crossPt0[0].x, this.crossPt0[0].y, this.crossPt0[1].x, this.crossPt0[1].y);
      this.crossPt1 = this.getRectCrossPt(this.areaPos, this.paraStartPoint, this.para1EndPoint);
      Plotter.drawLine(context, this.crossPt1[0].x, this.crossPt1[0].y, this.crossPt1[1].x, this.crossPt1[1].y);
      this.crossPt2 = this.getRectCrossPt(this.areaPos, this.para2StartPoint, this.para2EndPoint);
      Plotter.drawLine(context, this.crossPt2[0].x, this.crossPt2[0].y, this.crossPt2[1].x, this.crossPt2[1].y);
    }
  }]);

  return DrawTriParallelLinesPlotter;
}(ParallelLinesPlotter);
var BandLinesPlotter =
/*#__PURE__*/
function (_CToolPlotter11) {
  _inherits(BandLinesPlotter, _CToolPlotter11);

  function BandLinesPlotter(name, toolObject) {
    var _this16;

    _classCallCheck(this, BandLinesPlotter);

    _this16 = _possibleConstructorReturn(this, _getPrototypeOf(BandLinesPlotter).call(this, name));
    _this16.toolObject = toolObject;
    _this16.ctrlPtsNum = 2;
    _this16.ctrlPts = [new Array(_this16.ctrlPtsNum), new Array(2)];

    _this16.getCtrlPts();

    return _this16;
  }

  _createClass(BandLinesPlotter, [{
    key: "drawLinesAndInfo",
    value: function drawLinesAndInfo(context, startPoint, endPoint) {
      context.font = "12px Tahoma";
      context.textAlign = "left";
      context.fillStyle = this.theme.getColor(__WEBPACK_IMPORTED_MODULE_6__themes__["c" /* Theme */].Color.LineColorNormal);
      var text;

      if (this.toolObject.state === __WEBPACK_IMPORTED_MODULE_9__ctools__["n" /* CToolObject */].state.Draw) {
        this.startPtValue = this.toolObject.getPoint(0).getPosIV().v;
        this.endPtValue = this.toolObject.getPoint(1).getPosIV().v;
      }

      this.getAreaPos();

      for (var i = 0; i < this.fiboSequence.length; i++) {
        var stageY = startPoint.y + (100 - this.fiboSequence[i]) / 100 * (endPoint.y - startPoint.y);
        if (stageY > this.areaPos.bottom) continue;
        var stageYvalue = this.startPtValue + (100 - this.fiboSequence[i]) / 100 * (this.endPtValue - this.startPtValue);
        Plotter.drawLine(context, this.areaPos.left, stageY, this.areaPos.right, stageY);
        text = this.fiboSequence[i].toFixed(1) + '% ' + stageYvalue.toFixed(1);
        context.fillText(text, this.areaPos.left + 2, stageY - 15);
      }
    }
  }, {
    key: "draw",
    value: function draw(context) {
      this.updateCtrlPtPos();
      this.getAreaPos();
      this.startPoint = this.ctrlPts[1][0];
      this.endPoint = this.ctrlPts[1][1];
      this.drawLinesAndInfo(context, this.startPoint, this.endPoint);
    }
  }]);

  return BandLinesPlotter;
}(CToolPlotter);
var DrawFibRetracePlotter =
/*#__PURE__*/
function (_BandLinesPlotter) {
  _inherits(DrawFibRetracePlotter, _BandLinesPlotter);

  function DrawFibRetracePlotter(name, toolObject) {
    var _this17;

    _classCallCheck(this, DrawFibRetracePlotter);

    _this17 = _possibleConstructorReturn(this, _getPrototypeOf(DrawFibRetracePlotter).call(this, name, toolObject));
    _this17.toolObject = toolObject;
    _this17.fiboSequence = [100.0, 78.6, 61.8, 50.0, 38.2, 23.6, 0.0];
    return _this17;
  }

  return DrawFibRetracePlotter;
}(BandLinesPlotter);
var DrawBandLinesPlotter =
/*#__PURE__*/
function (_BandLinesPlotter2) {
  _inherits(DrawBandLinesPlotter, _BandLinesPlotter2);

  function DrawBandLinesPlotter(name, toolObject) {
    var _this18;

    _classCallCheck(this, DrawBandLinesPlotter);

    _this18 = _possibleConstructorReturn(this, _getPrototypeOf(DrawBandLinesPlotter).call(this, name, toolObject));
    _this18.toolObject = toolObject;
    _this18.fiboSequence = [0, 12.5, 25, 37.5, 50, 62.5, 75, 87.5, 100];
    return _this18;
  }

  return DrawBandLinesPlotter;
}(BandLinesPlotter);
var DrawFibFansPlotter =
/*#__PURE__*/
function (_CToolPlotter12) {
  _inherits(DrawFibFansPlotter, _CToolPlotter12);

  function DrawFibFansPlotter(name, toolObject) {
    var _this19;

    _classCallCheck(this, DrawFibFansPlotter);

    _this19 = _possibleConstructorReturn(this, _getPrototypeOf(DrawFibFansPlotter).call(this, name));
    _this19.toolObject = toolObject;
    _this19.fiboFansSequence = [0, 38.2, 50, 61.8];
    _this19.ctrlPtsNum = 2;
    _this19.ctrlPts = [new Array(_this19.ctrlPtsNum), new Array(2)];

    _this19.getCtrlPts();

    return _this19;
  }

  _createClass(DrawFibFansPlotter, [{
    key: "drawLinesAndInfo",
    value: function drawLinesAndInfo(context, startPoint, endPoint) {
      this.drawFibRayLines(context, startPoint, endPoint);
    }
  }, {
    key: "draw",
    value: function draw(context) {
      this.updateCtrlPtPos();
      this.getAreaPos();
      this.startPoint = this.ctrlPts[1][0];
      this.endPoint = this.ctrlPts[1][1];

      if (this.startPoint.x === this.endPoint.x && this.startPoint.y === this.endPoint.y) {
        this.endPoint.x += 1;
      }

      this.drawLinesAndInfo(context, this.startPoint, this.endPoint);
    }
  }]);

  return DrawFibFansPlotter;
}(CToolPlotter);
var CDynamicLinePlotter =
/*#__PURE__*/
function (_NamedObject10) {
  _inherits(CDynamicLinePlotter, _NamedObject10);

  function CDynamicLinePlotter(name) {
    var _this20;

    _classCallCheck(this, CDynamicLinePlotter);

    _this20 = _possibleConstructorReturn(this, _getPrototypeOf(CDynamicLinePlotter).call(this, name));
    _this20.flag = true;
    _this20.context = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance._overlayContext;
    return _this20;
  }

  _createClass(CDynamicLinePlotter, [{
    key: "getAreaPos",
    value: function getAreaPos() {
      var pMgr = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance;
      var pArea = pMgr.getArea('frame0.k0.main');

      if (pArea === null) {
        this.areaPos = {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        };
        return;
      }

      this.areaPos = {
        left: Math.floor(pArea.getLeft()),
        top: Math.floor(pArea.getTop()),
        right: Math.floor(pArea.getRight()),
        bottom: Math.floor(pArea.getBottom())
      };
    }
  }, {
    key: "Draw",
    value: function Draw(context) {
      this.getAreaPos();
      var pMgr = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance;
      var pTDP = pMgr.getDataSource(this.getDataSourceName());
      if (pTDP === null || !__WEBPACK_IMPORTED_MODULE_3__util__["a" /* Util */].isInstance(pTDP, __WEBPACK_IMPORTED_MODULE_8__data_sources__["b" /* MainDataSource */])) return;
      this.context.save();
      this.context.rect(this.areaPos.left, this.areaPos.top, this.areaPos.right - this.areaPos.left, this.areaPos.bottom - this.areaPos.top);
      this.context.clip();
      var count = pTDP.getToolObjectCount();

      for (var i = 0; i < count; i++) {
        var toolObject = pTDP.getToolObject(i);
        var state = toolObject.getState();

        switch (state) {
          case __WEBPACK_IMPORTED_MODULE_9__ctools__["n" /* CToolObject */].state.BeforeDraw:
            toolObject.getPlotter().theme = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.getTheme(this.getFrameName());
            toolObject.getPlotter().drawCursor(this.context);
            break;

          case __WEBPACK_IMPORTED_MODULE_9__ctools__["n" /* CToolObject */].state.Draw:
            toolObject.getPlotter().theme = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.getTheme(this.getFrameName());
            toolObject.getPlotter().updateDraw(this.context);
            break;

          case __WEBPACK_IMPORTED_MODULE_9__ctools__["n" /* CToolObject */].state.AfterDraw:
            toolObject.getPlotter().theme = __WEBPACK_IMPORTED_MODULE_2__chart_manager__["a" /* ChartManager */].instance.getTheme(this.getFrameName());
            toolObject.getPlotter().finishDraw(this.context);
            break;

          default:
            break;
        }
      }

      var sel = pTDP.getSelectToolObjcet();
      if (sel !== null && sel !== __WEBPACK_IMPORTED_MODULE_9__ctools__["n" /* CToolObject */].state.Draw) sel.getPlotter().highlight(this.context);
      this.context.restore();
    }
  }]);

  return CDynamicLinePlotter;
}(__WEBPACK_IMPORTED_MODULE_1__named_object__["a" /* NamedObject */]);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DataProvider */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MainDataProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndicatorDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__named_object__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chart_manager__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_sources__ = __webpack_require__(2);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var DataProvider =
/*#__PURE__*/
function (_NamedObject) {
  _inherits(DataProvider, _NamedObject);

  function DataProvider(name) {
    var _this;

    _classCallCheck(this, DataProvider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DataProvider).call(this, name));
    _this._minValue = 0;
    _this._maxValue = 0;
    _this._minValueIndex = -1;
    _this._maxValueIndex = -1;
    return _this;
  }

  _createClass(DataProvider, [{
    key: "getMinValue",
    value: function getMinValue() {
      return this._minValue;
    }
  }, {
    key: "getMaxValue",
    value: function getMaxValue() {
      return this._maxValue;
    }
  }, {
    key: "getMinValueIndex",
    value: function getMinValueIndex() {
      return this._minValueIndex;
    }
  }, {
    key: "getMaxValueIndex",
    value: function getMaxValueIndex() {
      return this._maxValueIndex;
    }
  }, {
    key: "getMinMaxAt",
    value: function getMinMaxAt(index, minmax) {
      return true;
    }
  }, {
    key: "calcRange",
    value: function calcRange(firstIndexes, lastIndex, minmaxes, indexes) {
      var min = Number.MAX_VALUE;
      var max = -Number.MAX_VALUE;
      var minIndex = -1;
      var maxIndex = -1;
      var minmax = {};
      var i = lastIndex - 1;
      var n = firstIndexes.length - 1;

      for (; n >= 0; n--) {
        var first = firstIndexes[n];

        if (i < first) {
          minmaxes[n] = {
            "min": min,
            "max": max
          };
        } else {
          for (; i >= first; i--) {
            if (this.getMinMaxAt(i, minmax) === false) {
              continue;
            }

            if (min > minmax.min) {
              min = minmax.min;
              minIndex = i;
            }

            if (max < minmax.max) {
              max = minmax.max;
              maxIndex = i;
            }
          }

          minmaxes[n] = {
            "min": min,
            "max": max
          };
        }

        if (indexes !== null && indexes !== undefined) {
          indexes[n] = {
            "minIndex": minIndex,
            "maxIndex": maxIndex
          };
        }
      }
    }
  }, {
    key: "updateRange",
    value: function updateRange() {
      var mgr = __WEBPACK_IMPORTED_MODULE_1__chart_manager__["a" /* ChartManager */].instance;
      var timeline = mgr.getTimeline(this.getDataSourceName());
      var firstIndexes = [timeline.getFirstIndex()];
      var minmaxes = [{}];
      var indexes = [{}];
      this.calcRange(firstIndexes, timeline.getLastIndex(), minmaxes, indexes);
      this._minValue = minmaxes[0].min;
      this._maxValue = minmaxes[0].max;
      this._minValueIndex = indexes[0].minIndex;
      this._maxValueIndex = indexes[0].maxIndex;
    }
  }]);

  return DataProvider;
}(__WEBPACK_IMPORTED_MODULE_0__named_object__["a" /* NamedObject */]);
var MainDataProvider =
/*#__PURE__*/
function (_DataProvider) {
  _inherits(MainDataProvider, _DataProvider);

  function MainDataProvider(name) {
    var _this2;

    _classCallCheck(this, MainDataProvider);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(MainDataProvider).call(this, name));
    _this2._candlestickDS = null;
    return _this2;
  }

  _createClass(MainDataProvider, [{
    key: "updateData",
    value: function updateData() {
      var mgr = __WEBPACK_IMPORTED_MODULE_1__chart_manager__["a" /* ChartManager */].instance;
      var ds = mgr.getDataSource(this.getDataSourceName());

      if (!__WEBPACK_IMPORTED_MODULE_2__util__["a" /* Util */].isInstance(ds, __WEBPACK_IMPORTED_MODULE_3__data_sources__["b" /* MainDataSource */])) {
        return;
      }

      this._candlestickDS = ds;
    }
  }, {
    key: "getMinMaxAt",
    value: function getMinMaxAt(index, minmax) {
      var data = this._candlestickDS.getDataAt(index);

      minmax.min = data.low;
      minmax.max = data.high;
      return true;
    }
  }]);

  return MainDataProvider;
}(DataProvider);
var IndicatorDataProvider =
/*#__PURE__*/
function (_DataProvider2) {
  _inherits(IndicatorDataProvider, _DataProvider2);

  function IndicatorDataProvider() {
    _classCallCheck(this, IndicatorDataProvider);

    return _possibleConstructorReturn(this, _getPrototypeOf(IndicatorDataProvider).apply(this, arguments));
  }

  _createClass(IndicatorDataProvider, [{
    key: "getIndicator",
    value: function getIndicator() {
      return this._indicator;
    }
  }, {
    key: "setIndicator",
    value: function setIndicator(v) {
      this._indicator = v;
      this.refresh();
    }
  }, {
    key: "refresh",
    value: function refresh() {
      var mgr = __WEBPACK_IMPORTED_MODULE_1__chart_manager__["a" /* ChartManager */].instance;
      var ds = mgr.getDataSource(this.getDataSourceName());

      if (ds.getDataCount() < 1) {
        return;
      }

      var indic = this._indicator;
      var i,
          last = ds.getDataCount();
      indic.clear();
      indic.reserve(last);

      for (i = 0; i < last; i++) {
        indic.execute(ds, i);
      }
    }
  }, {
    key: "updateData",
    value: function updateData() {
      var mgr = __WEBPACK_IMPORTED_MODULE_1__chart_manager__["a" /* ChartManager */].instance;
      var ds = mgr.getDataSource(this.getDataSourceName());

      if (ds.getDataCount() < 1) {
        return;
      }

      var indic = this._indicator;
      var mode = ds.getUpdateMode();

      switch (mode) {
        case __WEBPACK_IMPORTED_MODULE_3__data_sources__["a" /* DataSource */].UpdateMode.Refresh:
          {
            this.refresh();
            break;
          }

        case __WEBPACK_IMPORTED_MODULE_3__data_sources__["a" /* DataSource */].UpdateMode.Append:
          {
            indic.reserve(ds.getAppendedCount());
            break;
          }

        case __WEBPACK_IMPORTED_MODULE_3__data_sources__["a" /* DataSource */].UpdateMode.Update:
          {
            var i,
                last = ds.getDataCount();
            var cnt = ds.getUpdatedCount() + ds.getAppendedCount();

            for (i = last - cnt; i < last; i++) {
              indic.execute(ds, i);
            }

            break;
          }
      }
    }
  }, {
    key: "getMinMaxAt",
    value: function getMinMaxAt(index, minmax) {
      minmax.min = Number.MAX_VALUE;
      minmax.max = -Number.MAX_VALUE;
      var result,
          valid = false;

      var i,
          cnt = this._indicator.getOutputCount();

      for (i = 0; i < cnt; i++) {
        result = this._indicator.getOutputAt(i).execute(index);

        if (isNaN(result) === false) {
          valid = true;

          if (minmax.min > result) {
            minmax.min = result;
          }

          if (minmax.max < result) {
            minmax.max = result;
          }
        }
      }

      return valid;
    }
  }]);

  return IndicatorDataProvider;
}(DataProvider);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return MainArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return IndicatorArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return MainRangeArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return IndicatorRangeArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return TimelineArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ChartAreaGroup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__named_object__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chart_manager__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mevent__ = __webpack_require__(17);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ChartArea =
/*#__PURE__*/
function (_NamedObject) {
  _inherits(ChartArea, _NamedObject);

  function ChartArea(name) {
    var _this;

    _classCallCheck(this, ChartArea);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ChartArea).call(this, name));
    _this._left = 0;
    _this._top = 0;
    _this._right = 0;
    _this._bottom = 0;
    _this._changed = false;
    _this._highlighted = false;
    _this._pressed = false;
    _this._selected = false;
    _this.Measuring = new __WEBPACK_IMPORTED_MODULE_2__mevent__["a" /* MEvent */]();
    return _this;
  }

  _createClass(ChartArea, [{
    key: "getDockStyle",
    value: function getDockStyle() {
      return this._dockStyle;
    }
  }, {
    key: "setDockStyle",
    value: function setDockStyle(dockStyle) {
      this._dockStyle = dockStyle;
    }
  }, {
    key: "getLeft",
    value: function getLeft() {
      return this._left;
    }
  }, {
    key: "getTop",
    value: function getTop() {
      return this._top;
    }
  }, {
    key: "setTop",
    value: function setTop(v) {
      if (this._top !== v) {
        this._top = v;
        this._changed = true;
      }
    }
  }, {
    key: "getRight",
    value: function getRight() {
      return this._right;
    }
  }, {
    key: "getBottom",
    value: function getBottom() {
      return this._bottom;
    }
  }, {
    key: "setBottom",
    value: function setBottom(v) {
      if (this._bottom !== v) {
        this._bottom = v;
        this._changed = true;
      }
    }
  }, {
    key: "getCenter",
    value: function getCenter() {
      return this._left + this._right >> 1;
    }
  }, {
    key: "getMiddle",
    value: function getMiddle() {
      return this._top + this._bottom >> 1;
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      return this._right - this._left;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return this._bottom - this._top;
    }
  }, {
    key: "getRect",
    value: function getRect() {
      return {
        X: this._left,
        Y: this._top,
        Width: this._right - this._left,
        Height: this._bottom - this._top
      };
    }
  }, {
    key: "contains",
    value: function contains(x, y) {
      if (x >= this._left && x < this._right) if (y >= this._top && y < this._bottom) return [this];
      return null;
    }
  }, {
    key: "getMeasuredWidth",
    value: function getMeasuredWidth() {
      return this._measuredWidth;
    }
  }, {
    key: "getMeasuredHeight",
    value: function getMeasuredHeight() {
      return this._measuredHeight;
    }
  }, {
    key: "setMeasuredDimension",
    value: function setMeasuredDimension(width, height) {
      this._measuredWidth = width;
      this._measuredHeight = height;
    }
  }, {
    key: "measure",
    value: function measure(context, width, height) {
      this._measuredWidth = 0;
      this._measuredHeight = 0;
      this.Measuring.raise(this, {
        Width: width,
        Height: height
      });
      if (this._measuredWidth === 0 && this._measuredHeight === 0) this.setMeasuredDimension(width, height);
    }
  }, {
    key: "layout",
    value: function layout(left, top, right, bottom, forceChange) {
      left <<= 0;

      if (this._left !== left) {
        this._left = left;
        this._changed = true;
      }

      top <<= 0;

      if (this._top !== top) {
        this._top = top;
        this._changed = true;
      }

      right <<= 0;

      if (this._right !== right) {
        this._right = right;
        this._changed = true;
      }

      bottom <<= 0;

      if (this._bottom !== bottom) {
        this._bottom = bottom;
        this._changed = true;
      }

      if (forceChange) this._changed = true;
    }
  }, {
    key: "isChanged",
    value: function isChanged() {
      return this._changed;
    }
  }, {
    key: "setChanged",
    value: function setChanged(v) {
      this._changed = v;
    }
  }, {
    key: "isHighlighted",
    value: function isHighlighted() {
      return this._highlighted;
    }
  }, {
    key: "getHighlightedArea",
    value: function getHighlightedArea() {
      return this._highlighted ? this : null;
    }
  }, {
    key: "highlight",
    value: function highlight(area) {
      this._highlighted = this === area;
      return this._highlighted ? this : null;
    }
  }, {
    key: "isPressed",
    value: function isPressed() {
      return this._pressed;
    }
  }, {
    key: "setPressed",
    value: function setPressed(v) {
      this._pressed = v;
    }
  }, {
    key: "isSelected",
    value: function isSelected() {
      return this._selected;
    }
  }, {
    key: "getSelectedArea",
    value: function getSelectedArea() {
      return this._selected ? this : null;
    }
  }, {
    key: "select",
    value: function select(area) {
      this._selected = this === area;
      return this._selected ? this : null;
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(x, y) {
      return null;
    }
  }, {
    key: "onMouseLeave",
    value: function onMouseLeave(x, y) {}
  }, {
    key: "onMouseDown",
    value: function onMouseDown(x, y) {
      return null;
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp(x, y) {
      return null;
    }
  }]);

  return ChartArea;
}(__WEBPACK_IMPORTED_MODULE_0__named_object__["a" /* NamedObject */]);
ChartArea.DockStyle = {
  Left: 0,
  Top: 1,
  Right: 2,
  Bottom: 3,
  Fill: 4
};
var MainArea =
/*#__PURE__*/
function (_ChartArea) {
  _inherits(MainArea, _ChartArea);

  function MainArea(name) {
    var _this2;

    _classCallCheck(this, MainArea);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(MainArea).call(this, name));
    _this2._dragStarted = false;
    _this2._oldX = 0;
    _this2._oldY = 0;
    _this2._passMoveEventToToolManager = true;
    return _this2;
  }

  _createClass(MainArea, [{
    key: "onMouseMove",
    value: function onMouseMove(x, y) {
      var mgr = __WEBPACK_IMPORTED_MODULE_1__chart_manager__["a" /* ChartManager */].instance;
      if (mgr._capturingMouseArea === this) if (this._dragStarted === false) if (Math.abs(this._oldX - x) > 1 || Math.abs(this._oldY - y) > 1) this._dragStarted = true;

      if (this._dragStarted) {
        mgr.hideCursor();
        if (mgr.onToolMouseDrag(this.getFrameName(), x, y)) return this;
        mgr.getTimeline(this.getDataSourceName()).move(x - this._oldX);
        return this;
      }

      if (this._passMoveEventToToolManager && mgr.onToolMouseMove(this.getFrameName(), x, y)) {
        mgr.hideCursor();
        return this;
      }

      switch (mgr._drawingTool) {
        case __WEBPACK_IMPORTED_MODULE_1__chart_manager__["a" /* ChartManager */].DrawingTool.Cursor:
          mgr.showCursor();
          break;

        case __WEBPACK_IMPORTED_MODULE_1__chart_manager__["a" /* ChartManager */].DrawingTool.CrossCursor:
          if (mgr.showCrossCursor(this, x, y)) mgr.hideCursor();else mgr.showCursor();
          break;

        default:
          mgr.hideCursor();
          break;
      }

      return this;
    }
  }, {
    key: "onMouseLeave",
    value: function onMouseLeave(x, y) {
      this._dragStarted = false;
      this._passMoveEventToToolManager = true;
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(x, y) {
      var mgr = __WEBPACK_IMPORTED_MODULE_1__chart_manager__["a" /* ChartManager */].instance;
      mgr.getTimeline(this.getDataSourceName()).startMove();
      this._oldX = x;
      this._oldY = y;
      this._dragStarted = false;
      if (mgr.onToolMouseDown(this.getFrameName(), x, y)) this._passMoveEventToToolManager = false;
      return this;
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp(x, y) {
      var mgr = __WEBPACK_IMPORTED_MODULE_1__chart_manager__["a" /* ChartManager */].instance;
      var ret = null;

      if (this._dragStarted) {
        this._dragStarted = false;
        ret = this;
      }

      if (mgr.onToolMouseUp(this.getFrameName(), x, y)) ret = this;
      this._passMoveEventToToolManager = true;
      return ret;
    }
  }]);

  return MainArea;
}(ChartArea);
var IndicatorArea =
/*#__PURE__*/
function (_ChartArea2) {
  _inherits(IndicatorArea, _ChartArea2);

  function IndicatorArea(name) {
    var _this3;

    _classCallCheck(this, IndicatorArea);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(IndicatorArea).call(this, name));
    _this3._dragStarted = false;
    _this3._oldX = 0;
    _this3._oldY = 0;
    return _this3;
  }

  _createClass(IndicatorArea, [{
    key: "onMouseMove",
    value: function onMouseMove(x, y) {
      var mgr = __WEBPACK_IMPORTED_MODULE_1__chart_manager__["a" /* ChartManager */].instance;

      if (mgr._capturingMouseArea === this) {
        if (this._dragStarted === false) {
          if (this._oldX !== x || this._oldY !== y) {
            this._dragStarted = true;
          }
        }
      }

      if (this._dragStarted) {
        mgr.hideCursor();
        mgr.getTimeline(this.getDataSourceName()).move(x - this._oldX);
        return this;
      }

      switch (mgr._drawingTool) {
        case __WEBPACK_IMPORTED_MODULE_1__chart_manager__["a" /* ChartManager */].DrawingTool.CrossCursor:
          if (mgr.showCrossCursor(this, x, y)) mgr.hideCursor();else mgr.showCursor();
          break;

        default:
          mgr.showCursor();
          break;
      }

      return this;
    }
  }, {
    key: "onMouseLeave",
    value: function onMouseLeave(x, y) {
      this._dragStarted = false;
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(x, y) {
      var mgr = __WEBPACK_IMPORTED_MODULE_1__chart_manager__["a" /* ChartManager */].instance;
      mgr.getTimeline(this.getDataSourceName()).startMove();
      this._oldX = x;
      this._oldY = y;
      this._dragStarted = false;
      return this;
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp(x, y) {
      if (this._dragStarted) {
        this._dragStarted = false;
        return this;
      }

      return null;
    }
  }]);

  return IndicatorArea;
}(ChartArea);
var MainRangeArea =
/*#__PURE__*/
function (_ChartArea3) {
  _inherits(MainRangeArea, _ChartArea3);

  function MainRangeArea(name) {
    _classCallCheck(this, MainRangeArea);

    return _possibleConstructorReturn(this, _getPrototypeOf(MainRangeArea).call(this, name));
  }

  _createClass(MainRangeArea, [{
    key: "onMouseMove",
    value: function onMouseMove(x, y) {
      __WEBPACK_IMPORTED_MODULE_1__chart_manager__["a" /* ChartManager */].instance.showCursor();
      return this;
    }
  }]);

  return MainRangeArea;
}(ChartArea);
var IndicatorRangeArea =
/*#__PURE__*/
function (_ChartArea4) {
  _inherits(IndicatorRangeArea, _ChartArea4);

  function IndicatorRangeArea(name) {
    _classCallCheck(this, IndicatorRangeArea);

    return _possibleConstructorReturn(this, _getPrototypeOf(IndicatorRangeArea).call(this, name));
  }

  _createClass(IndicatorRangeArea, [{
    key: "onMouseMove",
    value: function onMouseMove(x, y) {
      __WEBPACK_IMPORTED_MODULE_1__chart_manager__["a" /* ChartManager */].instance.showCursor();
      return this;
    }
  }]);

  return IndicatorRangeArea;
}(ChartArea);
var TimelineArea =
/*#__PURE__*/
function (_ChartArea5) {
  _inherits(TimelineArea, _ChartArea5);

  function TimelineArea(name) {
    _classCallCheck(this, TimelineArea);

    return _possibleConstructorReturn(this, _getPrototypeOf(TimelineArea).call(this, name));
  }

  _createClass(TimelineArea, [{
    key: "onMouseMove",
    value: function onMouseMove(x, y) {
      __WEBPACK_IMPORTED_MODULE_1__chart_manager__["a" /* ChartManager */].instance.showCursor();
      return this;
    }
  }]);

  return TimelineArea;
}(ChartArea);
var ChartAreaGroup =
/*#__PURE__*/
function (_ChartArea6) {
  _inherits(ChartAreaGroup, _ChartArea6);

  function ChartAreaGroup(name) {
    var _this4;

    _classCallCheck(this, ChartAreaGroup);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(ChartAreaGroup).call(this, name));
    _this4._areas = [];
    _this4._highlightedArea = null;
    _this4._selectedArea = null;
    return _this4;
  }

  _createClass(ChartAreaGroup, [{
    key: "contains",
    value: function contains(x, y) {
      var areas;
      var a,
          i,
          cnt = this._areas.length;

      for (i = 0; i < cnt; i++) {
        a = this._areas[i];
        areas = a.contains(x, y);

        if (areas !== null) {
          areas.push(this);
          return areas;
        }
      }

      return _get(_getPrototypeOf(ChartAreaGroup.prototype), "contains", this).call(this, x, y);
    }
  }, {
    key: "getAreaCount",
    value: function getAreaCount() {
      return this._areas.length;
    }
  }, {
    key: "getAreaAt",
    value: function getAreaAt(index) {
      if (index < 0 || index >= this._areas.length) {
        return null;
      }

      return this._areas[index];
    }
  }, {
    key: "addArea",
    value: function addArea(area) {
      this._areas.push(area);
    }
  }, {
    key: "removeArea",
    value: function removeArea(area) {
      var i,
          cnt = this._areas.length;

      for (i = 0; i < cnt; i++) {
        if (area === this._areas[i]) {
          this._areas.splice(i);

          this.setChanged(true);
          break;
        }
      }
    }
  }, {
    key: "getGridColor",
    value: function getGridColor() {
      return this._gridColor;
    }
  }, {
    key: "setGridColor",
    value: function setGridColor(c) {
      this._gridColor = c;
    }
  }, {
    key: "getHighlightedArea",
    value: function getHighlightedArea() {
      if (this._highlightedArea !== null) {
        return this._highlightedArea.getHighlightedArea();
      }

      return null;
    }
  }, {
    key: "highlight",
    value: function highlight(area) {
      this._highlightedArea = null;
      var e,
          i,
          cnt = this._areas.length;

      for (i = 0; i < cnt; i++) {
        e = this._areas[i].highlight(area);

        if (e !== null) {
          this._highlightedArea = e;
          return this;
        }
      }

      return null;
    }
  }, {
    key: "getSelectedArea",
    value: function getSelectedArea() {
      if (this._selectedArea !== null) {
        return this._selectedArea.getSelectedArea();
      }

      return null;
    }
  }, {
    key: "select",
    value: function select(area) {
      this._selectedArea = null;
      var e,
          i,
          cnt = this._areas.length;

      for (i = 0; i < cnt; i++) {
        e = this._areas[i].select(area);

        if (e !== null) {
          this._selectedArea = e;
          return this;
        }
      }

      return null;
    }
  }, {
    key: "onMouseLeave",
    value: function onMouseLeave(x, y) {
      var i,
          cnt = this._areas.length;

      for (i = 0; i < cnt; i++) {
        this._areas[i].onMouseLeave(x, y);
      }
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp(x, y) {
      var a,
          i,
          cnt = this._areas.length;

      for (i = 0; i < cnt; i++) {
        a = this._areas[i].onMouseUp(x, y);
        if (a !== null) return a;
      }

      return null;
    }
  }]);

  return ChartAreaGroup;
}(ChartArea);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KlineTrade; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chart_manager__ = __webpack_require__(0);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var KlineTrade =
/*#__PURE__*/
function () {
  function KlineTrade(option) {
    _classCallCheck(this, KlineTrade);

    this.browerState = 0;
    this.tradeDate = new Date();
    this.tradesLimit = 20;
    this.lastDepth = null;
    this.depthShowSize = 15;
    this.priceDecimalDigits = 6;
    this.amountDecimalDigits = 4;
    this.symbol = null;
    this.curPrice = null;
    this.title = "";
    Object.assign(this, option);

    if (!KlineTrade.created) {
      KlineTrade.instance = this;
      KlineTrade.created = true;
    }

    return KlineTrade.instance;
  }

  _createClass(KlineTrade, [{
    key: "reset",
    value: function reset(symbol) {
      this.symbol = symbol;
      this.lastDepth = null;
      this.curPrice = null;
      this.klineTradeInit = false;
      $("#trades .trades_list").empty();
      $("#gasks .table").empty();
      $("#gbids .table").empty();
      $("#asks .table").empty();
      $("#bids .table").empty();
    }
  }, {
    key: "pushTrades",
    value: function pushTrades(array) {
      var $trades = $("#trades .trades_list");
      var totalUls = "";

      for (var i = 0; i < array.length; i++) {
        var item = array[i];

        if (i >= array.length - this.tradesLimit) {
          this.tradeDate.setTime(item.time);
          var dateStr = this.dateFormatTf(this.tradeDate.getHours()) + ":" + this.dateFormatTf(this.tradeDate.getMinutes()) + ":" + this.dateFormatTf(this.tradeDate.getSeconds());
          var arr = (item.amount.toFixed(4) + "").split(".");
          var price = item.price;

          if (price > 1) {
            price = price.toFixed(2);
          }

          if (price < 1 && price > 0.00001) {
            price = price.toFixed(4);
          }

          if (price < 0.00001) {
            price = price.toFixed(6);
          }

          if (this.klineTradeInit) {
            totalUls = "<ul class='newul'><li class='tm'>" + dateStr + "</li><li class='pr-" + (item.type === 'buy' ? 'red' : 'green') + "'>" + price + "</li><li class='vl'>" + arr[0] + "<g>" + (arr.length > 1 ? '.' + arr[1] : '') + "</g></li></ul>" + totalUls;
          } else {
            totalUls = "<ul><li class='tm'>" + dateStr + "</li><li class='pr-" + (item.type === 'buy' ? 'red' : 'green') + "'>" + price + "</li><li class='vl'>" + arr[0] + "<g>" + (arr.length > 1 ? '.' + arr[1] : '') + "</g></li></ul>" + totalUls;
          }
        }
      }

      var j = 0;
      var that = this;

      if (this.klineTradeInit) {
        clearInterval(myTime);
        var myTime = setInterval(function () {
          var item = array[j]; //that.curPrice = item.price

          var price = Number(item.price);

          if (price > 1) {
            price = price.toFixed(2);
          }

          if (price < 1 && price > 0.0001) {
            price = price.toFixed(4);
          }

          if (price < 0.0001) {
            price = price.toFixed(6);
          }

          that.curPrice = price;
          $("div#price").attr("class", item.type === 'buy' ? 'red' : 'green').text(price);
          j++;

          if (j >= array.length) {
            clearInterval(myTime);
          }
        }, 100);
      } else {
        if (array.length > 0) {
          //this.curPrice=array[array.length-1].price.toFixed(6);
          var _price = Number(array[array.length - 1].price);

          if (_price > 1) {
            _price = _price.toFixed(2);
          }

          if (_price < 1 && _price > 0.0001) {
            _price = _price.toFixed(4);
          }

          if (_price < 0.0001) {
            _price = _price.toFixed(6);
          }

          that.curPrice = _price;
          $("div#price").attr("class", array[array.length - 1].type === 'buy' ? 'red' : 'green').text(_price);
        }
      }

      if (this.klineTradeInit) {
        $trades.prepend(totalUls);
      } else {
        $trades.append(totalUls);
      }

      totalUls = null;
      $trades.find("ul.newul").slideDown(1000, function () {
        $(this).removeClass("newul");
      });
      $trades.find("ul:gt(" + (this.tradesLimit - 1) + ")").remove();
    }
  }, {
    key: "updateDepth",
    value: function updateDepth(data) {
      __WEBPACK_IMPORTED_MODULE_0__chart_manager__["a" /* ChartManager */].instance.getChart().updateDepth(data);
      if (!data) return;
      $("#gasks .table").html(this.getgview(this.getgasks(data.asks)));
      $("#gbids .table").html(this.getgview(this.getgbids(data.bids)));

      if (this.lastDepth === null) {
        this.lastDepth = {};
        this.lastDepth.asks = this.getAsks(data.asks, this.depthShowSize);
        this.depthInit(this.lastDepth.asks, $("#asks .table"));
        this.lastDepth.bids = this.getBids(data.bids, this.depthShowSize);
        this.depthInit(this.lastDepth.bids, $("#bids .table"));
      } else {
        var parentAsks = $("#asks .table");
        parentAsks.find("div.remove").remove();
        parentAsks.find("div.add").removeClass("add");
        var newasks = this.getAsks(data.asks, this.depthShowSize);
        var oldasks = this.lastDepth.asks;
        this.lastDepth.asks = newasks;
        this.asksAndBids(newasks.slice(0), oldasks, parentAsks);
        var parentBids = $("#bids .table");
        parentBids.find("div.remove").remove();
        parentBids.find("div.add").removeClass("add");
        var newbids = this.getBids(data.bids, this.depthShowSize);
        var oldbids = this.lastDepth.bids;
        this.lastDepth.bids = newbids;
        this.asksAndBids(newbids.slice(0), oldbids, $("#bids .table"));
      }
    }
  }, {
    key: "depthInit",
    value: function depthInit(data, $obj) {
      $obj.empty();

      if (data && data.length > 0) {
        var lastInt,
            view = "";

        for (var i = 0; i < data.length; i++) {
          var arr = (data[i][0] + "").split(".");
          var prices = this.getPrice(arr, lastInt);
          lastInt = arr[0];
          arr = (data[i][1] + "").split(".");
          var amounts = this.getAmount(arr);
          view += "<div class='row'><span class='price'>" + prices[0] + "<g>" + prices[1] + "</g></span> <span class='amount'>" + amounts[0] + "<g>" + amounts[1] + "</g></span></div>";
        }

        $obj.append(view);
        view = null;
      }
    }
  }, {
    key: "asksAndBids",
    value: function asksAndBids(addasks, oldasks, tbDiv) {
      for (var i = 0; i < oldasks.length; i++) {
        var isExist = false;

        for (var j = 0; j < addasks.length; j++) {
          if (oldasks[i][0] === addasks[j][0]) {
            isExist = true;

            if (oldasks[i][1] !== addasks[j][1]) {
              var $amount = tbDiv.find("div:eq(" + i + ") .amount");
              $amount.addClass(oldasks[i][1] > addasks[j][1] ? "green" : "red");
              var amounts = this.getAmount((addasks[j][1] + "").split("."));
              setTimeout(function ($amount, amounts) {
                return function () {
                  $amount.html(amounts[0] + "<g>" + amounts[1] + "</g>");
                  $amount.removeClass("green").removeClass("red");
                  $amount = null;
                  amounts = null;
                };
              }($amount, amounts), 500);
            }

            addasks.splice(j, 1);
            break;
          }
        }

        if (!isExist) {
          tbDiv.find("div:eq(" + i + ")").addClass("remove");
          oldasks[i][2] = -1; //标识该数据对应div被移除
        }
      }

      for (var _j = 0; _j < oldasks.length; _j++) {
        for (var _i = 0; _i < addasks.length; _i++) {
          if (addasks[_i][0] > oldasks[_j][0]) {
            var arr = (addasks[_i][1] + "").split(".");

            var _amounts = this.getAmount(arr);

            tbDiv.find("div:eq(" + _j + ")").before("<div class='row add'><span class='price'></span> <span class='amount'>" + _amounts[0] + "<g>" + _amounts[1] + "</g></span></div>");
            oldasks.splice(_j, 0, addasks[_i]);
            addasks.splice(_i, 1);
            break;
          }
        }
      }

      var totalDiv = "";

      for (var _i2 = 0; _i2 < addasks.length; _i2++) {
        oldasks.push(addasks[_i2]);

        var _arr = (addasks[_i2][1] + "").split(".");

        var _amounts2 = this.getAmount(_arr);

        totalDiv += "<div class='row add'><span class='price'></span> <span class='amount'>" + _amounts2[0] + "<g>" + _amounts2[1] + "</g></span></div>";
      }

      if (totalDiv.length > 0) {
        tbDiv.append(totalDiv);
      }

      totalDiv = null;
      var lastInt;

      for (var _i3 = 0; _i3 < oldasks.length; _i3++) {
        var $div = tbDiv.find("div:eq(" + _i3 + ")");

        if (!(oldasks[_i3].length >= 3 && oldasks[_i3][2] === -1)) {
          var _arr2 = (oldasks[_i3][0] + "").split(".");

          var prices = this.getPrice(_arr2, lastInt);
          lastInt = _arr2[0];
          $div.find(".price").html(prices[0] + "<g>" + prices[1] + "</g>");
        }
      }

      addasks = null;
      oldasks = null;
      tbDiv.find("div.add").slideDown(800);
      setTimeout(function ($remove, $add) {
        return function () {
          $remove.slideUp(500, function () {
            $(this).remove();
          });
          $add.removeClass("add");
        };
      }(tbDiv.find("div.remove"), tbDiv.find("div.add")), 1000);
    }
  }, {
    key: "getAsks",
    value: function getAsks(array, len) {
      if (array.length > len) {
        array.splice(0, array.length - len);
      }

      return array;
    }
  }, {
    key: "getBids",
    value: function getBids(array, len) {
      if (array.length > len) {
        array.splice(len, array.length - 1);
      }

      return array;
    }
  }, {
    key: "getgview",
    value: function getgview(g) {
      var gstr = "";
      var lastInt;

      for (var i = 0; i < g.length; i++) {
        var arr = g[i][0].split(".");

        if (arr.length === 1 || arr[0] !== lastInt) {
          gstr += "<div class='row'><span class='price'>" + g[i][0] + "</span> <span class='amount'>" + g[i][1] + "</span></div>";
          lastInt = arr[0];
        } else {
          gstr += "<div class='row'><span class='price'><h>" + arr[0] + ".</h>" + arr[1] + "</span> <span class='amount'>" + g[i][1] + "</span></div>";
        }
      }

      return gstr;
    }
  }, {
    key: "getgasks",
    value: function getgasks(array) {
      if (array.length < 2) {
        return [];
      }

      var low = array[array.length - 1][0]; //最低价

      var high = array[0][0]; //最高价

      var r = high - low;
      var block = this.getBlock(r, 100);
      var n = Math.abs(Number(Math.log(block) / Math.log(10))).toFixed(0); //精确小数位数

      if (r / block < 2) {
        block = block / 2;
        n++;
      }

      if (block >= 1) n = 0;
      low = parseInt(low / block) * block;
      high = parseInt(high / block) * block;
      var gasks = [];
      var amount = 0;

      for (var i = array.length - 1; i >= 0; i--) {
        if (array[i][0] > low) {
          var amountInt = parseInt(amount, 10);

          if (amountInt > 0) {
            gasks.unshift([Number(low).toFixed(n), amountInt]);
          }

          if (low >= high) {
            break;
          }

          low += block;
        }

        amount += array[i][1];
      }

      return gasks;
    }
  }, {
    key: "getgbids",
    value: function getgbids(array) {
      if (array.length < 2) {
        return [];
      }

      var low = array[array.length - 1][0];
      var high = array[0][0];
      var r = high - low;
      var block = this.getBlock(r, 100);
      var n = Math.abs(Number(Math.log(block) / Math.log(10))).toFixed(0); //精确小数位数

      if (r / block < 2) {
        block = block / 2;
        n++;
      }

      if (block >= 1) n = 0;
      low = parseInt(low / block) * block;
      high = parseInt(high / block) * block;
      var gbids = [];
      var amount = 0;

      for (var i = 0; i < array.length; i++) {
        if (array[i][0] < high) {
          var amountInt = parseInt(amount, 10);

          if (amountInt > 0) {
            gbids.push([Number(high).toFixed(n), amountInt]);
          }

          if (high <= low) {
            break;
          }

          high -= block;
        }

        amount += array[i][1];
      }

      return gbids;
    }
  }, {
    key: "getBlock",
    value: function getBlock(b, scale) {
      if (b > scale || b <= 0) {
        return scale;
      } else {
        scale = scale / 10;
        return this.getBlock(b, scale);
      }
    }
  }, {
    key: "getZeros",
    value: function getZeros(i) {
      var zeros = "";

      while (i > 0) {
        i--;
        zeros += "0";
      }

      return zeros;
    }
  }, {
    key: "getPrice",
    value: function getPrice(arr, lastInt) {
      var price1 = arr[0];

      if (lastInt === price1) {
        price1 = "<h>" + price1 + ".</h>";
      } else {
        price1 += ".";
      }

      var price2 = "";

      if (arr.length === 1) {
        price1 += "0";
        price2 = this.getZeros(this.priceDecimalDigits - 1);
      } else {
        price1 += arr[1];
        price2 = this.getZeros(this.priceDecimalDigits - arr[1].length);
      }

      return [price1, price2];
    }
  }, {
    key: "getAmount",
    value: function getAmount(arr) {
      var amount1 = arr[0];
      var amount2 = "";
      var zerosLen = this.amountDecimalDigits - amount1.length + 1;

      if (zerosLen > 0) {
        amount2 = ".";

        if (arr.length === 1) {
          amount2 += this.getZeros(zerosLen);
        } else if (zerosLen > arr[1].length) {
          amount2 += arr[1] + this.getZeros(zerosLen - arr[1].length);
        } else if (zerosLen === arr[1].length) {
          amount2 += arr[1];
        } else {
          amount2 += arr[1].substring(0, zerosLen);
        }
      }

      return [amount1, amount2];
    }
  }, {
    key: "dateFormatTf",
    value: function dateFormatTf(i) {
      return (i < 10 ? '0' : '') + i;
    }
  }]);

  return KlineTrade;
}();
KlineTrade.created = false;
KlineTrade.instance = null;

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CName; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CName =
/*#__PURE__*/
function () {
  function CName(name) {
    _classCallCheck(this, CName);

    this._names = [];
    this._comps = [];

    if (name instanceof CName) {
      this._names = name._names;
      this._comps = name._comps;
    } else {
      var comps = name.split(".");
      var dotNum = comps.length - 1;

      if (dotNum > 0) {
        this._comps = comps;

        this._names.push(comps[0]);

        for (var i = 1; i <= dotNum; i++) {
          this._names.push(this._names[i - 1] + "." + comps[i]);
        }
      } else {
        this._comps.push(name);

        this._names.push(name);
      }
    }
  }

  _createClass(CName, [{
    key: "getCompAt",
    value: function getCompAt(index) {
      if (index >= 0 && index < this._comps.length) return this._comps[index];
      return "";
    }
  }, {
    key: "getName",
    value: function getName(index) {
      if (index < 0) {
        if (this._names.length > 0) return this._names[this._names.length - 1];
      } else if (index < this._names.length) {
        return this._names[index];
      }

      return "";
    }
  }]);

  return CName;
}();

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return ExprEnv; });
/* unused harmony export Expr */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return OpenExpr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return HighExpr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return LowExpr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CloseExpr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return VolumeExpr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ConstExpr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return ParameterExpr; });
/* unused harmony export OpAExpr */
/* unused harmony export OpABExpr */
/* unused harmony export OpABCExpr */
/* unused harmony export OpABCDExpr */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return NegExpr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AddExpr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return SubExpr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return MulExpr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return DivExpr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return GtExpr; });
/* unused harmony export GeExpr */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return LtExpr; });
/* unused harmony export LeExpr */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return EqExpr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return MaxExpr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbsExpr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return RefExpr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AndExpr; });
/* unused harmony export OrExpr */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return IfExpr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return AssignExpr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return OutputExpr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return RangeOutputExpr; });
/* unused harmony export RangeExpr */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return HhvExpr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LlvExpr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CountExpr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return SumExpr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return StdExpr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return MaExpr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return EmaExpr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return ExpmemaExpr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return SmaExpr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return SarExpr; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ExprEnv =
/*#__PURE__*/
function () {
  function ExprEnv() {
    _classCallCheck(this, ExprEnv);

    this._ds = null;
    this._firstIndex = null;
  }

  _createClass(ExprEnv, [{
    key: "getDataSource",
    value: function getDataSource() {
      return this._ds;
    }
  }, {
    key: "setDataSource",
    value: function setDataSource(ds) {
      return this._ds = ds;
    }
  }, {
    key: "getFirstIndex",
    value: function getFirstIndex() {
      return this._firstIndex;
    }
  }, {
    key: "setFirstIndex",
    value: function setFirstIndex(n) {
      return this._firstIndex = n;
    }
  }], [{
    key: "get",
    value: function get() {
      return this.inst;
    }
  }, {
    key: "set",
    value: function set(env) {
      this.inst = env;
    }
  }]);

  return ExprEnv;
}();
ExprEnv.inst = null;
var Expr =
/*#__PURE__*/
function () {
  function Expr() {
    _classCallCheck(this, Expr);

    this._rid = 0;
  }

  _createClass(Expr, [{
    key: "execute",
    value: function execute(index) {}
  }, {
    key: "reserve",
    value: function reserve(rid, count) {}
  }, {
    key: "clear",
    value: function clear() {}
  }]);

  return Expr;
}();
var OpenExpr =
/*#__PURE__*/
function (_Expr) {
  _inherits(OpenExpr, _Expr);

  function OpenExpr() {
    _classCallCheck(this, OpenExpr);

    return _possibleConstructorReturn(this, _getPrototypeOf(OpenExpr).apply(this, arguments));
  }

  _createClass(OpenExpr, [{
    key: "execute",
    value: function execute(index) {
      return ExprEnv.get()._ds.getDataAt(index).open;
    }
  }]);

  return OpenExpr;
}(Expr);
var HighExpr =
/*#__PURE__*/
function (_Expr2) {
  _inherits(HighExpr, _Expr2);

  function HighExpr() {
    _classCallCheck(this, HighExpr);

    return _possibleConstructorReturn(this, _getPrototypeOf(HighExpr).apply(this, arguments));
  }

  _createClass(HighExpr, [{
    key: "execute",
    value: function execute(index) {
      return ExprEnv.get()._ds.getDataAt(index).high;
    }
  }]);

  return HighExpr;
}(Expr);
var LowExpr =
/*#__PURE__*/
function (_Expr3) {
  _inherits(LowExpr, _Expr3);

  function LowExpr() {
    _classCallCheck(this, LowExpr);

    return _possibleConstructorReturn(this, _getPrototypeOf(LowExpr).apply(this, arguments));
  }

  _createClass(LowExpr, [{
    key: "execute",
    value: function execute(index) {
      return ExprEnv.get()._ds.getDataAt(index).low;
    }
  }]);

  return LowExpr;
}(Expr);
var CloseExpr =
/*#__PURE__*/
function (_Expr4) {
  _inherits(CloseExpr, _Expr4);

  function CloseExpr() {
    _classCallCheck(this, CloseExpr);

    return _possibleConstructorReturn(this, _getPrototypeOf(CloseExpr).apply(this, arguments));
  }

  _createClass(CloseExpr, [{
    key: "execute",
    value: function execute(index) {
      return ExprEnv.get()._ds.getDataAt(index).close;
    }
  }]);

  return CloseExpr;
}(Expr);
var VolumeExpr =
/*#__PURE__*/
function (_Expr5) {
  _inherits(VolumeExpr, _Expr5);

  function VolumeExpr() {
    _classCallCheck(this, VolumeExpr);

    return _possibleConstructorReturn(this, _getPrototypeOf(VolumeExpr).apply(this, arguments));
  }

  _createClass(VolumeExpr, [{
    key: "execute",
    value: function execute(index) {
      return ExprEnv.get()._ds.getDataAt(index).volume;
    }
  }]);

  return VolumeExpr;
}(Expr);
var ConstExpr =
/*#__PURE__*/
function (_Expr6) {
  _inherits(ConstExpr, _Expr6);

  function ConstExpr(v) {
    var _this;

    _classCallCheck(this, ConstExpr);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ConstExpr).call(this));
    _this._value = v;
    return _this;
  }

  _createClass(ConstExpr, [{
    key: "execute",
    value: function execute(index) {
      return this._value;
    }
  }]);

  return ConstExpr;
}(Expr);
var ParameterExpr =
/*#__PURE__*/
function (_Expr7) {
  _inherits(ParameterExpr, _Expr7);

  function ParameterExpr(name, minValue, maxValue, defaultValue) {
    var _this2;

    _classCallCheck(this, ParameterExpr);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(ParameterExpr).call(this));
    _this2._name = name;
    _this2._minValue = minValue;
    _this2._maxValue = maxValue;
    _this2._value = _this2._defaultValue = defaultValue;
    return _this2;
  }

  _createClass(ParameterExpr, [{
    key: "execute",
    value: function execute(index) {
      return this._value;
    }
  }, {
    key: "getMinValue",
    value: function getMinValue() {
      return this._minValue;
    }
  }, {
    key: "getMaxValue",
    value: function getMaxValue() {
      return this._maxValue;
    }
  }, {
    key: "getDefaultValue",
    value: function getDefaultValue() {
      return this._defaultValue;
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this._value;
    }
  }, {
    key: "setValue",
    value: function setValue(v) {
      if (v === 0) this._value = 0;else if (v < this._minValue) this._value = this._minValue;else if (v > this._maxValue) this._value = this._maxValue;else this._value = v;
    }
  }]);

  return ParameterExpr;
}(Expr);
var OpAExpr =
/*#__PURE__*/
function (_Expr8) {
  _inherits(OpAExpr, _Expr8);

  function OpAExpr(a) {
    var _this3;

    _classCallCheck(this, OpAExpr);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(OpAExpr).call(this));
    _this3._exprA = a;
    return _this3;
  }

  _createClass(OpAExpr, [{
    key: "reserve",
    value: function reserve(rid, count) {
      if (this._rid < rid) {
        this._rid = rid;

        this._exprA.reserve(rid, count);
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      this._exprA.clear();
    }
  }]);

  return OpAExpr;
}(Expr);
var OpABExpr =
/*#__PURE__*/
function (_Expr9) {
  _inherits(OpABExpr, _Expr9);

  function OpABExpr(a, b) {
    var _this4;

    _classCallCheck(this, OpABExpr);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(OpABExpr).call(this));
    _this4._exprA = a;
    _this4._exprB = b;
    return _this4;
  }

  _createClass(OpABExpr, [{
    key: "reserve",
    value: function reserve(rid, count) {
      if (this._rid < rid) {
        this._rid = rid;

        this._exprA.reserve(rid, count);

        this._exprB.reserve(rid, count);
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      this._exprA.clear();

      this._exprB.clear();
    }
  }]);

  return OpABExpr;
}(Expr);
var OpABCExpr =
/*#__PURE__*/
function (_Expr10) {
  _inherits(OpABCExpr, _Expr10);

  function OpABCExpr(a, b, c) {
    var _this5;

    _classCallCheck(this, OpABCExpr);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(OpABCExpr).call(this));
    _this5._exprA = a;
    _this5._exprB = b;
    _this5._exprC = c;
    return _this5;
  }

  _createClass(OpABCExpr, [{
    key: "reserve",
    value: function reserve(rid, count) {
      if (this._rid < rid) {
        this._rid = rid;

        this._exprA.reserve(rid, count);

        this._exprB.reserve(rid, count);

        this._exprC.reserve(rid, count);
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      this._exprA.clear();

      this._exprB.clear();

      this._exprC.clear();
    }
  }]);

  return OpABCExpr;
}(Expr);
var OpABCDExpr =
/*#__PURE__*/
function (_Expr11) {
  _inherits(OpABCDExpr, _Expr11);

  function OpABCDExpr(a, b, c, d) {
    var _this6;

    _classCallCheck(this, OpABCDExpr);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(OpABCDExpr).call(this));
    _this6._exprA = a;
    _this6._exprB = b;
    _this6._exprC = c;
    _this6._exprD = d;
    return _this6;
  }

  _createClass(OpABCDExpr, [{
    key: "reserve",
    value: function reserve(rid, count) {
      if (this._rid < rid) {
        this._rid = rid;

        this._exprA.reserve(rid, count);

        this._exprB.reserve(rid, count);

        this._exprC.reserve(rid, count);

        this._exprD.reserve(rid, count);
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      this._exprA.clear();

      this._exprB.clear();

      this._exprC.clear();

      this._exprD.clear();
    }
  }]);

  return OpABCDExpr;
}(Expr);
var NegExpr =
/*#__PURE__*/
function (_OpAExpr) {
  _inherits(NegExpr, _OpAExpr);

  function NegExpr(a) {
    _classCallCheck(this, NegExpr);

    return _possibleConstructorReturn(this, _getPrototypeOf(NegExpr).call(this, a));
  }

  _createClass(NegExpr, [{
    key: "execute",
    value: function execute(index) {
      return -this._exprA.execute(index);
    }
  }]);

  return NegExpr;
}(OpAExpr);
var AddExpr =
/*#__PURE__*/
function (_OpABExpr) {
  _inherits(AddExpr, _OpABExpr);

  function AddExpr(a, b) {
    _classCallCheck(this, AddExpr);

    return _possibleConstructorReturn(this, _getPrototypeOf(AddExpr).call(this, a, b));
  }

  _createClass(AddExpr, [{
    key: "execute",
    value: function execute(index) {
      return this._exprA.execute(index) + this._exprB.execute(index);
    }
  }]);

  return AddExpr;
}(OpABExpr);
var SubExpr =
/*#__PURE__*/
function (_OpABExpr2) {
  _inherits(SubExpr, _OpABExpr2);

  function SubExpr(a, b) {
    _classCallCheck(this, SubExpr);

    return _possibleConstructorReturn(this, _getPrototypeOf(SubExpr).call(this, a, b));
  }

  _createClass(SubExpr, [{
    key: "execute",
    value: function execute(index) {
      return this._exprA.execute(index) - this._exprB.execute(index);
    }
  }]);

  return SubExpr;
}(OpABExpr);
var MulExpr =
/*#__PURE__*/
function (_OpABExpr3) {
  _inherits(MulExpr, _OpABExpr3);

  function MulExpr(a, b) {
    _classCallCheck(this, MulExpr);

    return _possibleConstructorReturn(this, _getPrototypeOf(MulExpr).call(this, a, b));
  }

  _createClass(MulExpr, [{
    key: "execute",
    value: function execute(index) {
      return this._exprA.execute(index) * this._exprB.execute(index);
    }
  }]);

  return MulExpr;
}(OpABExpr);
var DivExpr =
/*#__PURE__*/
function (_OpABExpr4) {
  _inherits(DivExpr, _OpABExpr4);

  function DivExpr(a, b) {
    _classCallCheck(this, DivExpr);

    return _possibleConstructorReturn(this, _getPrototypeOf(DivExpr).call(this, a, b));
  }

  _createClass(DivExpr, [{
    key: "execute",
    value: function execute(index) {
      var a = this._exprA.execute(index);

      var b = this._exprB.execute(index);

      if (a === 0) return a;
      if (b === 0) return a > 0 ? 1000000 : -1000000;
      return a / b;
    }
  }]);

  return DivExpr;
}(OpABExpr);
var GtExpr =
/*#__PURE__*/
function (_OpABExpr5) {
  _inherits(GtExpr, _OpABExpr5);

  function GtExpr(a, b) {
    _classCallCheck(this, GtExpr);

    return _possibleConstructorReturn(this, _getPrototypeOf(GtExpr).call(this, a, b));
  }

  _createClass(GtExpr, [{
    key: "execute",
    value: function execute(index) {
      return this._exprA.execute(index) > this._exprB.execute(index) ? 1 : 0;
    }
  }]);

  return GtExpr;
}(OpABExpr);
var GeExpr =
/*#__PURE__*/
function (_OpABExpr6) {
  _inherits(GeExpr, _OpABExpr6);

  function GeExpr(a, b) {
    _classCallCheck(this, GeExpr);

    return _possibleConstructorReturn(this, _getPrototypeOf(GeExpr).call(this, a, b));
  }

  _createClass(GeExpr, [{
    key: "execute",
    value: function execute(index) {
      return this._exprA.execute(index) >= this._exprB.execute(index) ? 1 : 0;
    }
  }]);

  return GeExpr;
}(OpABExpr);
var LtExpr =
/*#__PURE__*/
function (_OpABExpr7) {
  _inherits(LtExpr, _OpABExpr7);

  function LtExpr(a, b) {
    _classCallCheck(this, LtExpr);

    return _possibleConstructorReturn(this, _getPrototypeOf(LtExpr).call(this, a, b));
  }

  _createClass(LtExpr, [{
    key: "execute",
    value: function execute(index) {
      return this._exprA.execute(index) < this._exprB.execute(index) ? 1 : 0;
    }
  }]);

  return LtExpr;
}(OpABExpr);
var LeExpr =
/*#__PURE__*/
function (_OpABExpr8) {
  _inherits(LeExpr, _OpABExpr8);

  function LeExpr(a, b) {
    _classCallCheck(this, LeExpr);

    return _possibleConstructorReturn(this, _getPrototypeOf(LeExpr).call(this, a, b));
  }

  _createClass(LeExpr, [{
    key: "execute",
    value: function execute(index) {
      return this._exprA.execute(index) <= this._exprB.execute(index) ? 1 : 0;
    }
  }]);

  return LeExpr;
}(OpABExpr);
var EqExpr =
/*#__PURE__*/
function (_OpABExpr9) {
  _inherits(EqExpr, _OpABExpr9);

  function EqExpr(a, b) {
    _classCallCheck(this, EqExpr);

    return _possibleConstructorReturn(this, _getPrototypeOf(EqExpr).call(this, a, b));
  }

  _createClass(EqExpr, [{
    key: "execute",
    value: function execute(index) {
      return this._exprA.execute(index) === this._exprB.execute(index) ? 1 : 0;
    }
  }]);

  return EqExpr;
}(OpABExpr);
var MaxExpr =
/*#__PURE__*/
function (_OpABExpr10) {
  _inherits(MaxExpr, _OpABExpr10);

  function MaxExpr(a, b) {
    _classCallCheck(this, MaxExpr);

    return _possibleConstructorReturn(this, _getPrototypeOf(MaxExpr).call(this, a, b));
  }

  _createClass(MaxExpr, [{
    key: "execute",
    value: function execute(index) {
      return Math.max(this._exprA.execute(index), this._exprB.execute(index));
    }
  }]);

  return MaxExpr;
}(OpABExpr);
var AbsExpr =
/*#__PURE__*/
function (_OpAExpr2) {
  _inherits(AbsExpr, _OpAExpr2);

  function AbsExpr(a) {
    _classCallCheck(this, AbsExpr);

    return _possibleConstructorReturn(this, _getPrototypeOf(AbsExpr).call(this, a));
  }

  _createClass(AbsExpr, [{
    key: "execute",
    value: function execute(index) {
      return Math.abs(this._exprA.execute(index));
    }
  }]);

  return AbsExpr;
}(OpAExpr);
var RefExpr =
/*#__PURE__*/
function (_OpABExpr11) {
  _inherits(RefExpr, _OpABExpr11);

  function RefExpr(a, b) {
    _classCallCheck(this, RefExpr);

    return _possibleConstructorReturn(this, _getPrototypeOf(RefExpr).call(this, a, b));
  }

  _createClass(RefExpr, [{
    key: "execute",
    value: function execute(index) {
      if (this._offset === undefined || this._offset < 0) {
        this._offset = this._exprB.execute(index);

        if (this._offset < 0) {
          throw "offset < 0";
        }
      }

      index -= this._offset;

      if (index < 0) {
        throw "index < 0";
      }

      var result = this._exprA.execute(index);

      if (isNaN(result)) {
        throw "NaN";
      }

      return result;
    }
  }]);

  return RefExpr;
}(OpABExpr);
var AndExpr =
/*#__PURE__*/
function (_OpABExpr12) {
  _inherits(AndExpr, _OpABExpr12);

  function AndExpr(a, b) {
    _classCallCheck(this, AndExpr);

    return _possibleConstructorReturn(this, _getPrototypeOf(AndExpr).call(this, a, b));
  }

  _createClass(AndExpr, [{
    key: "execute",
    value: function execute(index) {
      return this._exprA.execute(index) !== 0 && this._exprB.execute(index) !== 0 ? 1 : 0;
    }
  }]);

  return AndExpr;
}(OpABExpr);
var OrExpr =
/*#__PURE__*/
function (_OpABExpr13) {
  _inherits(OrExpr, _OpABExpr13);

  function OrExpr(a, b) {
    _classCallCheck(this, OrExpr);

    return _possibleConstructorReturn(this, _getPrototypeOf(OrExpr).call(this, a, b));
  }

  _createClass(OrExpr, [{
    key: "execute",
    value: function execute(index) {
      return this._exprA.execute(index) !== 0 || this._exprB.execute(index) !== 0 ? 1 : 0;
    }
  }]);

  return OrExpr;
}(OpABExpr);
var IfExpr =
/*#__PURE__*/
function (_OpABCExpr) {
  _inherits(IfExpr, _OpABCExpr);

  function IfExpr(a, b, c) {
    _classCallCheck(this, IfExpr);

    return _possibleConstructorReturn(this, _getPrototypeOf(IfExpr).call(this, a, b, c));
  }

  _createClass(IfExpr, [{
    key: "execute",
    value: function execute(index) {
      return this._exprA.execute(index) !== 0 ? this._exprB.execute(index) : this._exprC.execute(index);
    }
  }]);

  return IfExpr;
}(OpABCExpr);
var AssignExpr =
/*#__PURE__*/
function (_OpAExpr3) {
  _inherits(AssignExpr, _OpAExpr3);

  function AssignExpr(name, a) {
    var _this7;

    _classCallCheck(this, AssignExpr);

    _this7 = _possibleConstructorReturn(this, _getPrototypeOf(AssignExpr).call(this, a));
    _this7._name = name;
    _this7._buf = [];
    return _this7;
  }

  _createClass(AssignExpr, [{
    key: "getName",
    value: function getName() {
      return this._name;
    }
  }, {
    key: "execute",
    value: function execute(index) {
      return this._buf[index];
    }
  }, {
    key: "assign",
    value: function assign(index) {
      this._buf[index] = this._exprA.execute(index);

      if (ExprEnv.get()._firstIndex >= 0) {
        if (isNaN(this._buf[index]) && !isNaN(this._buf[index - 1])) {
          throw this._name + ".assign(" + index + "): NaN";
        }
      }
    }
  }, {
    key: "reserve",
    value: function reserve(rid, count) {
      if (this._rid < rid) {
        for (var c = count; c > 0; c--) {
          this._buf.push(NaN);
        }
      }

      _get(_getPrototypeOf(AssignExpr.prototype), "reserve", this).call(this, rid, count);
    }
  }, {
    key: "clear",
    value: function clear() {
      _get(_getPrototypeOf(AssignExpr.prototype), "clear", this).call(this);

      this._buf = [];
    }
  }]);

  return AssignExpr;
}(OpAExpr);
var OutputExpr =
/*#__PURE__*/
function (_AssignExpr) {
  _inherits(OutputExpr, _AssignExpr);

  function OutputExpr(name, a, style, color) {
    var _this8;

    _classCallCheck(this, OutputExpr);

    _this8 = _possibleConstructorReturn(this, _getPrototypeOf(OutputExpr).call(this, name, a));
    _this8._style = style === undefined ? OutputExpr.outputStyle.Line : style;
    _this8._color = color;
    return _this8;
  }

  _createClass(OutputExpr, [{
    key: "getStyle",
    value: function getStyle() {
      return this._style;
    }
  }, {
    key: "getColor",
    value: function getColor() {
      return this._color;
    }
  }]);

  return OutputExpr;
}(AssignExpr);
OutputExpr.outputStyle = {
  None: 0,
  Line: 1,
  VolumeStick: 2,
  MACDStick: 3,
  SARPoint: 4
};
var RangeOutputExpr =
/*#__PURE__*/
function (_OutputExpr) {
  _inherits(RangeOutputExpr, _OutputExpr);

  function RangeOutputExpr(name, a, style, color) {
    _classCallCheck(this, RangeOutputExpr);

    return _possibleConstructorReturn(this, _getPrototypeOf(RangeOutputExpr).call(this, name, a, style, color));
  }

  _createClass(RangeOutputExpr, [{
    key: "getName",
    value: function getName() {
      return this._name + this._exprA.getRange();
    }
  }]);

  return RangeOutputExpr;
}(OutputExpr);
var RangeExpr =
/*#__PURE__*/
function (_OpABExpr14) {
  _inherits(RangeExpr, _OpABExpr14);

  function RangeExpr(a, b) {
    var _this9;

    _classCallCheck(this, RangeExpr);

    _this9 = _possibleConstructorReturn(this, _getPrototypeOf(RangeExpr).call(this, a, b));
    _this9._range = -1;
    _this9._buf = [];
    return _this9;
  }

  _createClass(RangeExpr, [{
    key: "getRange",
    value: function getRange() {
      return this._range;
    }
  }, {
    key: "initRange",
    value: function initRange() {
      this._range = this._exprB.execute(0);
    }
  }, {
    key: "execute",
    value: function execute(index) {
      if (this._range < 0) {
        this.initRange();
      }

      var rA = this._buf[index].resultA = this._exprA.execute(index);

      return this._buf[index].result = this.calcResult(index, rA);
    }
  }, {
    key: "reserve",
    value: function reserve(rid, count) {
      if (this._rid < rid) {
        for (var c = count; c > 0; c--) {
          this._buf.push({
            resultA: NaN,
            result: NaN
          });
        }
      }

      _get(_getPrototypeOf(RangeExpr.prototype), "reserve", this).call(this, rid, count);
    }
  }, {
    key: "clear",
    value: function clear() {
      _get(_getPrototypeOf(RangeExpr.prototype), "clear", this).call(this);

      this._range = -1;
      this._buf = [];
    }
  }]);

  return RangeExpr;
}(OpABExpr);
var HhvExpr =
/*#__PURE__*/
function (_RangeExpr) {
  _inherits(HhvExpr, _RangeExpr);

  function HhvExpr(a, b) {
    _classCallCheck(this, HhvExpr);

    return _possibleConstructorReturn(this, _getPrototypeOf(HhvExpr).call(this, a, b));
  }

  _createClass(HhvExpr, [{
    key: "calcResult",
    value: function calcResult(index, resultA) {
      if (this._range === 0) {
        return NaN;
      }

      var first = ExprEnv.get()._firstIndex;

      if (first < 0) {
        return resultA;
      }

      if (index > first) {
        var n = this._range;
        var result = resultA;
        var start = index - n + 1;
        var i = Math.max(first, start);

        for (; i < index; i++) {
          var p = this._buf[i];

          if (result < p.resultA) {
            result = p.resultA;
          }
        }

        return result;
      } else {
        return resultA;
      }
    }
  }]);

  return HhvExpr;
}(RangeExpr);
var LlvExpr =
/*#__PURE__*/
function (_RangeExpr2) {
  _inherits(LlvExpr, _RangeExpr2);

  function LlvExpr(a, b) {
    _classCallCheck(this, LlvExpr);

    return _possibleConstructorReturn(this, _getPrototypeOf(LlvExpr).call(this, a, b));
  }

  _createClass(LlvExpr, [{
    key: "calcResult",
    value: function calcResult(index, resultA) {
      if (this._range === 0) return NaN;

      var first = ExprEnv.get()._firstIndex;

      if (first < 0) return resultA;

      if (index > first) {
        var n = this._range;
        var result = resultA;
        var start = index - n + 1;
        var i = Math.max(first, start);

        for (; i < index; i++) {
          var p = this._buf[i];
          if (result > p.resultA) result = p.resultA;
        }

        return result;
      } else {
        return resultA;
      }
    }
  }]);

  return LlvExpr;
}(RangeExpr);
var CountExpr =
/*#__PURE__*/
function (_RangeExpr3) {
  _inherits(CountExpr, _RangeExpr3);

  function CountExpr(a, b) {
    _classCallCheck(this, CountExpr);

    return _possibleConstructorReturn(this, _getPrototypeOf(CountExpr).call(this, a, b));
  }

  _createClass(CountExpr, [{
    key: "calcResult",
    value: function calcResult(index, resultA) {
      if (this._range === 0) return NaN;

      var first = ExprEnv.get()._firstIndex;

      if (first < 0) return 0;

      if (index >= first) {
        var n = this._range - 1;
        if (n > index - first) n = index - first;
        var count = 0;

        for (; n >= 0; n--) {
          if (this._buf[index - n].resultA !== 0.0) count++;
        }

        return count;
      } else {
        return 0;
      }
    }
  }]);

  return CountExpr;
}(RangeExpr);
var SumExpr =
/*#__PURE__*/
function (_RangeExpr4) {
  _inherits(SumExpr, _RangeExpr4);

  function SumExpr(a, b) {
    _classCallCheck(this, SumExpr);

    return _possibleConstructorReturn(this, _getPrototypeOf(SumExpr).call(this, a, b));
  }

  _createClass(SumExpr, [{
    key: "calcResult",
    value: function calcResult(index, resultA) {
      var first = ExprEnv.get()._firstIndex;

      if (first < 0) return resultA;

      if (index > first) {
        var n = this._range;

        if (n === 0 || n >= index + 1 - first) {
          return this._buf[index - 1].result + resultA;
        }

        return this._buf[index - 1].result + resultA - this._buf[index - n].resultA;
      } else {
        return resultA;
      }
    }
  }]);

  return SumExpr;
}(RangeExpr);
var StdExpr =
/*#__PURE__*/
function (_RangeExpr5) {
  _inherits(StdExpr, _RangeExpr5);

  function StdExpr(a, b) {
    _classCallCheck(this, StdExpr);

    return _possibleConstructorReturn(this, _getPrototypeOf(StdExpr).call(this, a, b));
  }

  _createClass(StdExpr, [{
    key: "calcResult",
    value: function calcResult(index, resultA) {
      if (this._range === 0) return NaN;
      var stdData = this._stdBuf[index];

      var first = ExprEnv.get()._firstIndex;

      if (first < 0) {
        stdData.resultMA = resultA;
        return 0.0;
      }

      if (index > first) {
        var n = this._range;

        if (n >= index + 1 - first) {
          n = index + 1 - first;
          stdData.resultMA = this._stdBuf[index - 1].resultMA * (1.0 - 1.0 / n) + resultA / n;
        } else {
          stdData.resultMA = this._stdBuf[index - 1].resultMA + (resultA - this._buf[index - n].resultA) / n;
        }

        var sum = 0;

        for (var i = index - n + 1; i <= index; i++) {
          sum += Math.pow(this._buf[i].resultA - stdData.resultMA, 2);
        }

        return Math.sqrt(sum / n);
      }

      stdData.resultMA = resultA;
      return 0.0;
    }
  }, {
    key: "reserve",
    value: function reserve(rid, count) {
      if (this._rid < rid) {
        for (var c = count; c > 0; c--) {
          this._stdBuf.push({
            resultMA: NaN
          });
        }
      }

      _get(_getPrototypeOf(StdExpr.prototype), "reserve", this).call(this, rid, count);
    }
  }, {
    key: "clear",
    value: function clear() {
      _get(_getPrototypeOf(StdExpr.prototype), "clear", this).call(this);

      this._stdBuf = [];
    }
  }]);

  return StdExpr;
}(RangeExpr);
var MaExpr =
/*#__PURE__*/
function (_RangeExpr6) {
  _inherits(MaExpr, _RangeExpr6);

  function MaExpr(a, b) {
    _classCallCheck(this, MaExpr);

    return _possibleConstructorReturn(this, _getPrototypeOf(MaExpr).call(this, a, b));
  }

  _createClass(MaExpr, [{
    key: "calcResult",
    value: function calcResult(index, resultA) {
      if (this._range === 0) return NaN;

      var first = ExprEnv.get()._firstIndex;

      if (first < 0) return resultA;

      if (index > first) {
        var n = this._range;

        if (n >= index + 1 - first) {
          n = index + 1 - first;
          return this._buf[index - 1].result * (1.0 - 1.0 / n) + resultA / n;
        }

        return this._buf[index - 1].result + (resultA - this._buf[index - n].resultA) / n;
      } else {
        return resultA;
      }
    }
  }]);

  return MaExpr;
}(RangeExpr);
var EmaExpr =
/*#__PURE__*/
function (_RangeExpr7) {
  _inherits(EmaExpr, _RangeExpr7);

  function EmaExpr(a, b) {
    _classCallCheck(this, EmaExpr);

    return _possibleConstructorReturn(this, _getPrototypeOf(EmaExpr).call(this, a, b));
  }

  _createClass(EmaExpr, [{
    key: "initRange",
    value: function initRange() {
      _get(_getPrototypeOf(EmaExpr.prototype), "initRange", this).call(this);

      this._alpha = 2.0 / (this._range + 1);
    }
  }, {
    key: "calcResult",
    value: function calcResult(index, resultA) {
      if (this._range === 0) return NaN;

      var first = ExprEnv.get()._firstIndex;

      if (first < 0) return resultA;

      if (index > first) {
        var prev = this._buf[index - 1];
        return this._alpha * (resultA - prev.result) + prev.result;
      }

      return resultA;
    }
  }]);

  return EmaExpr;
}(RangeExpr);
var ExpmemaExpr =
/*#__PURE__*/
function (_EmaExpr) {
  _inherits(ExpmemaExpr, _EmaExpr);

  function ExpmemaExpr(a, b) {
    _classCallCheck(this, ExpmemaExpr);

    return _possibleConstructorReturn(this, _getPrototypeOf(ExpmemaExpr).call(this, a, b));
  }

  _createClass(ExpmemaExpr, [{
    key: "calcResult",
    value: function calcResult(index, resultA) {
      var first = ExprEnv.get()._firstIndex;

      if (first < 0) return resultA;

      if (index > first) {
        var n = this._range;
        var prev = this._buf[index - 1];

        if (n >= index + 1 - first) {
          n = index + 1 - first;
          return prev.result * (1.0 - 1.0 / n) + resultA / n;
        }

        return this._alpha * (resultA - prev.result) + prev.result;
      }

      return resultA;
    }
  }]);

  return ExpmemaExpr;
}(EmaExpr);
var SmaExpr =
/*#__PURE__*/
function (_RangeExpr8) {
  _inherits(SmaExpr, _RangeExpr8);

  function SmaExpr(a, b, c) {
    var _this10;

    _classCallCheck(this, SmaExpr);

    _this10 = _possibleConstructorReturn(this, _getPrototypeOf(SmaExpr).call(this, a, b));
    _this10._exprC = c;
    _this10._mul = null;
    return _this10;
  }

  _createClass(SmaExpr, [{
    key: "initRange",
    value: function initRange() {
      _get(_getPrototypeOf(SmaExpr.prototype), "initRange", this).call(this);

      this._mul = this._exprC.execute(0);
    }
  }, {
    key: "calcResult",
    value: function calcResult(index, resultA) {
      if (this._range === 0) return NaN;

      var first = ExprEnv.get()._firstIndex;

      if (first < 0) return resultA;

      if (index > first) {
        var n = this._range;
        if (n > index + 1 - first) n = index + 1 - first;
        return ((n - 1) * this._buf[index - 1].result + resultA * this._mul) / n;
      }

      return resultA;
    }
  }]);

  return SmaExpr;
}(RangeExpr);
var SarExpr =
/*#__PURE__*/
function (_OpABCDExpr) {
  _inherits(SarExpr, _OpABCDExpr);

  function SarExpr(a, b, c, d) {
    var _this11;

    _classCallCheck(this, SarExpr);

    _this11 = _possibleConstructorReturn(this, _getPrototypeOf(SarExpr).call(this, a, b, c, d));
    _this11._buf = [];
    _this11._range = -1;
    _this11._min = null;
    _this11._step = null;
    _this11._max = null;
    return _this11;
  }

  _createClass(SarExpr, [{
    key: "execute",
    value: function execute(index) {
      if (this._range < 0) {
        this._range = this._exprA.execute(0);
        this._min = this._exprB.execute(0) / 100.0;
        this._step = this._exprC.execute(0) / 100.0;
        this._max = this._exprD.execute(0) / 100.0;
      }

      var data = this._buf[index];
      var exprEnv = ExprEnv.get();
      var first = exprEnv._firstIndex;

      if (first < 0) {
        data.longPos = true;
        data.sar = exprEnv._ds.getDataAt(index).low;
        data.ep = exprEnv._ds.getDataAt(index).high;
        data.af = 0.02;
      } else {
        var high = exprEnv._ds.getDataAt(index).high;

        var low = exprEnv._ds.getDataAt(index).low;

        var prev = this._buf[index - 1];
        data.sar = prev.sar + prev.af * (prev.ep - prev.sar);

        if (prev.longPos) {
          data.longPos = true;

          if (high > prev.ep) {
            data.ep = high;
            data.af = Math.min(prev.af + this._step, this._max);
          } else {
            data.ep = prev.ep;
            data.af = prev.af;
          }

          if (data.sar > low) {
            data.longPos = false;
            var i = index - this._range + 1;

            for (i = Math.max(i, first); i < index; i++) {
              var h = exprEnv._ds.getDataAt(i).high;

              if (high < h) high = h;
            }

            data.sar = high;
            data.ep = low;
            data.af = 0.02;
          }
        } else {
          data.longPos = false;

          if (low < prev.ep) {
            data.ep = low;
            data.af = Math.min(prev.af + this._step, this._max);
          } else {
            data.ep = prev.ep;
            data.af = prev.af;
          }

          if (data.sar < high) {
            data.longPos = true;

            var _i = index - this._range + 1;

            for (_i = Math.max(_i, first); _i < index; _i++) {
              var l = exprEnv._ds.getDataAt(_i).low;

              if (low > l) low = l;
            }

            data.sar = low;
            data.ep = high;
            data.af = 0.02;
          }
        }
      }

      return data.sar;
    }
  }, {
    key: "reserve",
    value: function reserve(rid, count) {
      if (this._rid < rid) {
        for (var c = count; c > 0; c--) {
          this._buf.push({
            longPos: true,
            sar: NaN,
            ep: NaN,
            af: NaN
          });
        }
      }

      _get(_getPrototypeOf(SarExpr.prototype), "reserve", this).call(this, rid, count);
    }
  }, {
    key: "clear",
    value: function clear() {
      _get(_getPrototypeOf(SarExpr.prototype), "clear", this).call(this);

      this._range = -1;
    }
  }]);

  return SarExpr;
}(OpABCDExpr);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MEvent; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MEvent =
/*#__PURE__*/
function () {
  function MEvent() {
    _classCallCheck(this, MEvent);

    this._handlers = [];
  }

  _createClass(MEvent, [{
    key: "addHandler",
    value: function addHandler(o, f) {
      if (this.indexOf(o, f) < 0) this._handlers.push({
        obj: o,
        func: f
      });
    }
  }, {
    key: "removeHandler",
    value: function removeHandler(o, f) {
      var i = this.indexOf(o, f);
      if (i >= 0) this._handlers.splice(i, 1);
    }
  }, {
    key: "raise",
    value: function raise(s, g) {
      var a = this._handlers;
      var e,
          i,
          c = a.length;

      for (i = 0; i < c; i++) {
        e = a[i];
        e.func(s, g);
      }
    }
  }, {
    key: "indexOf",
    value: function indexOf(o, f) {
      var a = this._handlers;
      var e,
          i,
          c = a.length;

      for (i = 0; i < c; i++) {
        e = a[i];
        if (o === e.obj && f === e.func) return i;
      }

      return -1;
    }
  }]);

  return MEvent;
}();

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PositiveRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ZeroBasedPositiveRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ZeroCenteredRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PercentageRange; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__named_object__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chart_manager__ = __webpack_require__(0);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Range =
/*#__PURE__*/
function (_NamedObject) {
  _inherits(Range, _NamedObject);

  function Range(name) {
    var _this;

    _classCallCheck(this, Range);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Range).call(this, name));
    _this._updated = true;
    _this._minValue = Number.MAX_VALUE;
    _this._maxValue = -Number.MAX_VALUE;
    _this._outerMinValue = Number.MAX_VALUE;
    _this._outerMaxValue = -Number.MAX_VALUE;
    _this._ratio = 0;
    _this._top = 0;
    _this._bottom = 0;
    _this._paddingTop = 0;
    _this._paddingBottom = 0;
    _this._minInterval = 36;
    _this._selectedPosition = -1;
    _this._selectedValue = -Number.MAX_VALUE;
    _this._gradations = [];
    return _this;
  }

  _createClass(Range, [{
    key: "isUpdated",
    value: function isUpdated() {
      return this._updated;
    }
  }, {
    key: "setUpdated",
    value: function setUpdated(v) {
      this._updated = v;
    }
  }, {
    key: "getMinValue",
    value: function getMinValue() {
      return this._minValue;
    }
  }, {
    key: "getMaxValue",
    value: function getMaxValue() {
      return this._maxValue;
    }
  }, {
    key: "getRange",
    value: function getRange() {
      return this._maxValue - this._minValue;
    }
  }, {
    key: "getOuterMinValue",
    value: function getOuterMinValue() {
      return this._outerMinValue;
    }
  }, {
    key: "getOuterMaxValue",
    value: function getOuterMaxValue() {
      return this._outerMaxValue;
    }
  }, {
    key: "getOuterRange",
    value: function getOuterRange() {
      return this._outerMaxValue - this._outerMinValue;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return Math.max(0, this._bottom - this._top);
    }
  }, {
    key: "getGradations",
    value: function getGradations() {
      return this._gradations;
    }
  }, {
    key: "getMinInterval",
    value: function getMinInterval() {
      return this._minInterval;
    }
  }, {
    key: "setMinInterval",
    value: function setMinInterval(v) {
      this._minInterval = v;
    }
  }, {
    key: "getSelectedPosition",
    value: function getSelectedPosition() {
      if (this._selectedPosition >= 0) {
        return this._selectedPosition;
      }

      if (this._selectedValue > -Number.MAX_VALUE) {
        return this.toY(this._selectedValue);
      }

      return -1;
    }
  }, {
    key: "getSelectedValue",
    value: function getSelectedValue() {
      if (this._selectedValue > -Number.MAX_VALUE) {
        return this._selectedValue;
      }

      var mgr = __WEBPACK_IMPORTED_MODULE_1__chart_manager__["a" /* ChartManager */].instance;
      var area = mgr.getArea(this.getAreaName());

      if (area === null) {
        return -Number.MAX_VALUE;
      }

      if (this._selectedPosition < area.getTop() + 12 || this._selectedPosition >= area.getBottom() - 4) {
        return -Number.MAX_VALUE;
      }

      return this.toValue(this._selectedPosition);
    }
  }, {
    key: "setPaddingTop",
    value: function setPaddingTop(p) {
      this._paddingTop = p;
    }
  }, {
    key: "setPaddingBottom",
    value: function setPaddingBottom(p) {
      this._paddingBottom = p;
    }
  }, {
    key: "toValue",
    value: function toValue(y) {
      return this._maxValue - (y - this._top) / this._ratio;
    }
  }, {
    key: "toY",
    value: function toY(value) {
      if (this._ratio > 0) {
        return this._top + Math.floor((this._maxValue - value) * this._ratio + 0.5);
      }

      return this._top;
    }
  }, {
    key: "toHeight",
    value: function toHeight(value) {
      if (value == Infinity || this._ratio == 0) {
        return 1.5;
      }

      return Math.floor(value * this._ratio + 1.5);
    }
  }, {
    key: "update",
    value: function update() {
      var min = Number.MAX_VALUE;
      var max = -Number.MAX_VALUE;
      var mgr = __WEBPACK_IMPORTED_MODULE_1__chart_manager__["a" /* ChartManager */].instance;
      var dp,
          dpNames = [".main", ".secondary"];

      for (var i = 0; i < dpNames.length; i++) {
        dp = mgr.getDataProvider(this.getName() + dpNames[i]);

        if (dp !== null && dp !== undefined) {
          min = Math.min(min, dp.getMinValue());
          max = Math.max(max, dp.getMaxValue());
        }
      }

      var r = {
        "min": min,
        "max": max
      };
      this.preSetRange(r);
      this.setRange(r.min, r.max);
    }
  }, {
    key: "select",
    value: function select(v) {
      this._selectedValue = v;
      this._selectedPosition = -1;
    }
  }, {
    key: "selectAt",
    value: function selectAt(y) {
      this._selectedPosition = y;
      this._selectedValue = -Number.MAX_VALUE;
    }
  }, {
    key: "unselect",
    value: function unselect() {
      this._selectedPosition = -1;
      this._selectedValue = -Number.MAX_VALUE;
    }
  }, {
    key: "preSetRange",
    value: function preSetRange(r) {
      if (r.min === r.max) {
        r.min = -1.0;
        r.max = 1.0;
      }
    }
  }, {
    key: "setRange",
    value: function setRange(minValue, maxValue) {
      var mgr = __WEBPACK_IMPORTED_MODULE_1__chart_manager__["a" /* ChartManager */].instance;
      var area = mgr.getArea(this.getAreaName());

      if (this._minValue === minValue && this._maxValue === maxValue && !area.isChanged()) {
        return;
      }

      this._updated = true;
      this._minValue = minValue;
      this._maxValue = maxValue;
      this._gradations = [];

      var top = area.getTop() + this._paddingTop;

      var bottom = area.getBottom() - (this._paddingBottom + 1);

      if (top >= bottom) {
        this._minValue = this._maxValue;
        return;
      }

      this._top = top;
      this._bottom = bottom;
      if (this._maxValue > this._minValue) this._ratio = (bottom - top) / (this._maxValue - this._minValue);else {
        this._ratio = 1;
      }
      this._outerMinValue = this.toValue(area.getBottom());
      this._outerMaxValue = this.toValue(area.getTop());
      this.updateGradations();
    }
  }, {
    key: "calcInterval",
    value: function calcInterval() {
      var H = this.getHeight();
      var h = this.getMinInterval();

      if (H / h <= 1) {
        h = H >> 1;
      }

      var d = this.getRange();
      var i = 0;

      while (i > -2 && Math.floor(d) < d) {
        d *= 10.0;
        i--;
      }

      var m, c;

      for (;; i++) {
        c = Math.pow(10.0, i);
        m = c;
        if (this.toHeight(m) > h) break;
        m = 2.0 * c;
        if (this.toHeight(m) > h) break;
        m = 5.0 * c;
        if (this.toHeight(m) > h) break;
      }

      return m;
    }
  }, {
    key: "updateGradations",
    value: function updateGradations() {
      this._gradations = [];
      var interval = this.calcInterval();

      if (interval <= 0.0) {
        return;
      }

      var v = Math.floor(this.getMaxValue() / interval) * interval;

      do {
        this._gradations.push(v);

        v -= interval;
      } while (v > this.getMinValue());
    }
  }]);

  return Range;
}(__WEBPACK_IMPORTED_MODULE_0__named_object__["a" /* NamedObject */]);
var PositiveRange =
/*#__PURE__*/
function (_Range) {
  _inherits(PositiveRange, _Range);

  function PositiveRange(name) {
    _classCallCheck(this, PositiveRange);

    return _possibleConstructorReturn(this, _getPrototypeOf(PositiveRange).call(this, name));
  }

  _createClass(PositiveRange, [{
    key: "preSetRange",
    value: function preSetRange(r) {
      if (r.min < 0) r.min = 0;
      if (r.max < 0) r.max = 0;
    }
  }]);

  return PositiveRange;
}(Range);
var ZeroBasedPositiveRange =
/*#__PURE__*/
function (_Range2) {
  _inherits(ZeroBasedPositiveRange, _Range2);

  function ZeroBasedPositiveRange(name) {
    _classCallCheck(this, ZeroBasedPositiveRange);

    return _possibleConstructorReturn(this, _getPrototypeOf(ZeroBasedPositiveRange).call(this, name));
  }

  _createClass(ZeroBasedPositiveRange, [{
    key: "preSetRange",
    value: function preSetRange(r) {
      r.min = 0;
      if (r.max < 0) r.max = 0;
    }
  }]);

  return ZeroBasedPositiveRange;
}(Range);
var MainRange =
/*#__PURE__*/
function (_Range3) {
  _inherits(MainRange, _Range3);

  function MainRange(name) {
    _classCallCheck(this, MainRange);

    return _possibleConstructorReturn(this, _getPrototypeOf(MainRange).call(this, name));
  }

  _createClass(MainRange, [{
    key: "preSetRange",
    value: function preSetRange(r) {
      var mgr = __WEBPACK_IMPORTED_MODULE_1__chart_manager__["a" /* ChartManager */].instance;
      var timeline = mgr.getTimeline(this.getDataSourceName());
      var dIndex = timeline.getMaxIndex() - timeline.getLastIndex();

      if (dIndex < 25) {
        var ds = mgr.getDataSource(this.getDataSourceName());
        var data = ds.getDataAt(ds.getDataCount() - 1);
        var d = (r.max - r.min) / 4 * (1 - dIndex / 25);
        r.min = Math.min(r.min, Math.max(data.low - d, 0));
        r.max = Math.max(r.max, data.high + d);
      }

      if (r.min > 0) {
        var a = r.max / r.min;

        if (a < 1.016) {
          var m = (r.max + r.min) / 2.0;
          var c = (a - 1.0) * 1.5;
          r.max = m * (1.0 + c);
          r.min = m * (1.0 - c);
        } else if (a < 1.048) {
          var _m = (r.max + r.min) / 2.0;

          r.max = _m * 1.024;
          r.min = _m * 0.976;
        }
      }

      if (r.min < 0) r.min = 0;
      if (r.max < 0) r.max = 0;
    }
  }]);

  return MainRange;
}(Range);
var ZeroCenteredRange =
/*#__PURE__*/
function (_Range4) {
  _inherits(ZeroCenteredRange, _Range4);

  function ZeroCenteredRange(name) {
    _classCallCheck(this, ZeroCenteredRange);

    return _possibleConstructorReturn(this, _getPrototypeOf(ZeroCenteredRange).call(this, name));
  }

  _createClass(ZeroCenteredRange, [{
    key: "calcInterval",
    value: function calcInterval(area) {
      var h = this.getMinInterval();

      if (area.getHeight() / h < 2) {
        return 0.0;
      }

      var r = this.getRange();
      var i;

      for (i = 3;; i += 2) {
        if (this.toHeight(r / i) <= h) break;
      }

      i -= 2;
      return r / i;
    }
  }, {
    key: "updateGradations",
    value: function updateGradations() {
      this._gradations = [];
      var mgr = __WEBPACK_IMPORTED_MODULE_1__chart_manager__["a" /* ChartManager */].instance;
      var area = mgr.getArea(this.getAreaName());
      var interval = this.calcInterval(area);

      if (interval <= 0.0) {
        return;
      }

      var v = interval / 2.0;

      do {
        this._gradations.push(v);

        this._gradations.push(-v);

        v += interval;
      } while (v <= this.getMaxValue());
    }
  }, {
    key: "preSetRange",
    value: function preSetRange(r) {
      var abs = Math.max(Math.abs(r.min), Math.abs(r.max));
      r.min = -abs;
      r.max = abs;
    }
  }]);

  return ZeroCenteredRange;
}(Range);
var PercentageRange =
/*#__PURE__*/
function (_Range5) {
  _inherits(PercentageRange, _Range5);

  function PercentageRange(name) {
    _classCallCheck(this, PercentageRange);

    return _possibleConstructorReturn(this, _getPrototypeOf(PercentageRange).call(this, name));
  }

  _createClass(PercentageRange, [{
    key: "updateGradations",
    value: function updateGradations() {
      this._gradations = [];
      var mgr = __WEBPACK_IMPORTED_MODULE_1__chart_manager__["a" /* ChartManager */].instance;
      var area = mgr.getArea(this.getAreaName());
      var interval = 10.0;
      var h = Math.floor(this.toHeight(interval));
      if (h << 2 > area.getHeight()) return;
      var v = Math.ceil(this.getMinValue() / interval) * interval;
      if (v === 0.0) v = 0;

      if (h << 2 < 24) {
        if (h << 1 < 8) return;

        do {
          if (v === 20.0 || v === 80.0) this._gradations.push(v);
          v += interval;
        } while (v < this.getMaxValue());
      } else {
        do {
          if (h < 8) {
            if (v === 20.0 || v === 50.0 || v === 80.0) this._gradations.push(v);
          } else {
            if (v === 0.0 || v === 20.0 || v === 50.0 || v === 80.0 || v === 100.0) this._gradations.push(v);
          }

          v += interval;
        } while (v < this.getMaxValue());
      }
    }
  }]);

  return PercentageRange;
}(Range);

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_kline__ = __webpack_require__(3);

window.Kline = __WEBPACK_IMPORTED_MODULE_0__js_kline__["a" /* default */];
/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__js_kline__["a" /* default */]);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chart; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chart_manager__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__control__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__kline__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__templates__ = __webpack_require__(7);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Chart =
/*#__PURE__*/
function () {
  function Chart() {
    _classCallCheck(this, Chart);

    this._data = null;
    this._charStyle = "CandleStick";
    this._depthData = {
      array: null,
      asks_count: 0,
      bids_count: 0,
      asks_si: 0,
      asks_ei: 0,
      bids_si: 0,
      bids_ei: 0
    };
    this.strIsLine = false;
    this._range = __WEBPACK_IMPORTED_MODULE_2__kline__["a" /* default */].instance.range;
    this._symbol = __WEBPACK_IMPORTED_MODULE_2__kline__["a" /* default */].instance.symbol;
  }

  _createClass(Chart, [{
    key: "setTitle",
    value: function setTitle() {
      var lang = __WEBPACK_IMPORTED_MODULE_0__chart_manager__["a" /* ChartManager */].instance.getLanguage();
      var title = __WEBPACK_IMPORTED_MODULE_2__kline__["a" /* default */].instance.symbolName;
      title += ' ';
      title += this.strIsLine ? Chart.strPeriod[lang]['line'] : Chart.strPeriod[lang][this._range];
      title += (this._contract_unit + '/' + this._money_type).toUpperCase();
      __WEBPACK_IMPORTED_MODULE_0__chart_manager__["a" /* ChartManager */].instance.setTitle('frame0.k0', title);
    }
  }, {
    key: "setSymbol",
    value: function setSymbol(symbol) {
      this._symbol = symbol;
      this.updateDataAndDisplay();
    }
  }, {
    key: "updateDataAndDisplay",
    value: function updateDataAndDisplay() {
      __WEBPACK_IMPORTED_MODULE_2__kline__["a" /* default */].instance.symbol = this._symbol;
      __WEBPACK_IMPORTED_MODULE_2__kline__["a" /* default */].instance.range = this._range;
      __WEBPACK_IMPORTED_MODULE_0__chart_manager__["a" /* ChartManager */].instance.setCurrentDataSource('frame0.k0', this._symbol + '.' + this._range);
      __WEBPACK_IMPORTED_MODULE_0__chart_manager__["a" /* ChartManager */].instance.setNormalMode();
      var f = __WEBPACK_IMPORTED_MODULE_2__kline__["a" /* default */].instance.chartMgr.getDataSource("frame0.k0").getLastDate();
      $('.symbol-title>a').text(__WEBPACK_IMPORTED_MODULE_2__kline__["a" /* default */].instance.symbolName);

      if (f === -1) {
        __WEBPACK_IMPORTED_MODULE_2__kline__["a" /* default */].instance.requestParam = __WEBPACK_IMPORTED_MODULE_1__control__["a" /* Control */].setHttpRequestParam(__WEBPACK_IMPORTED_MODULE_2__kline__["a" /* default */].instance.symbol, __WEBPACK_IMPORTED_MODULE_2__kline__["a" /* default */].instance.range, __WEBPACK_IMPORTED_MODULE_2__kline__["a" /* default */].instance.limit, null);
        __WEBPACK_IMPORTED_MODULE_1__control__["a" /* Control */].requestData(true);
      } else {
        __WEBPACK_IMPORTED_MODULE_2__kline__["a" /* default */].instance.requestParam = __WEBPACK_IMPORTED_MODULE_1__control__["a" /* Control */].setHttpRequestParam(__WEBPACK_IMPORTED_MODULE_2__kline__["a" /* default */].instance.symbol, __WEBPACK_IMPORTED_MODULE_2__kline__["a" /* default */].instance.range, null, f.toString());
        __WEBPACK_IMPORTED_MODULE_1__control__["a" /* Control */].requestData();
      }

      __WEBPACK_IMPORTED_MODULE_0__chart_manager__["a" /* ChartManager */].instance.redraw('All', false);
    }
  }, {
    key: "setCurrentContractUnit",
    value: function setCurrentContractUnit(contractUnit) {
      this._contract_unit = contractUnit;
      this.updateDataAndDisplay();
    }
  }, {
    key: "setCurrentMoneyType",
    value: function setCurrentMoneyType(moneyType) {
      this._money_type = moneyType;
      this.updateDataAndDisplay();
    }
  }, {
    key: "setCurrentPeriod",
    value: function setCurrentPeriod(period) {
      this._range = __WEBPACK_IMPORTED_MODULE_2__kline__["a" /* default */].instance.periodMap[period];

      if (__WEBPACK_IMPORTED_MODULE_2__kline__["a" /* default */].instance.type === "stomp" && __WEBPACK_IMPORTED_MODULE_2__kline__["a" /* default */].instance.stompClient.ws.readyState === 1) {
        __WEBPACK_IMPORTED_MODULE_2__kline__["a" /* default */].instance.subscribed.unsubscribe();
        __WEBPACK_IMPORTED_MODULE_2__kline__["a" /* default */].instance.subscribed = __WEBPACK_IMPORTED_MODULE_2__kline__["a" /* default */].instance.stompClient.subscribe(__WEBPACK_IMPORTED_MODULE_2__kline__["a" /* default */].instance.subscribePath + '/' + __WEBPACK_IMPORTED_MODULE_2__kline__["a" /* default */].instance.symbol + '/' + this._range, __WEBPACK_IMPORTED_MODULE_1__control__["a" /* Control */].subscribeCallback);
      }

      this.updateDataAndDisplay();
      __WEBPACK_IMPORTED_MODULE_2__kline__["a" /* default */].instance.onRangeChange(this._range);
    }
  }, {
    key: "updateDataSource",
    value: function updateDataSource(data) {
      this._data = data;
      __WEBPACK_IMPORTED_MODULE_0__chart_manager__["a" /* ChartManager */].instance.updateData("frame0.k0", this._data);
    }
  }, {
    key: "updateDepth",
    value: function updateDepth(array) {
      if (array === null) {
        this._depthData.array = [];
        __WEBPACK_IMPORTED_MODULE_0__chart_manager__["a" /* ChartManager */].instance.redraw('All', false);
        return;
      }

      if (!array.asks || !array.bids || array.asks === '' || array.bids === '') return;
      var _data = this._depthData;
      _data.array = [];

      for (var i = 0; i < array.asks.length; i++) {
        var data = {};
        data.rate = array.asks[i][0];
        data.amount = array.asks[i][1];

        _data.array.push(data);
      }

      for (var _i = 0; _i < array.bids.length; _i++) {
        var _data2 = {};
        _data2.rate = array.bids[_i][0];
        _data2.amount = array.bids[_i][1];

        _data.array.push(_data2);
      }

      _data.asks_count = array.asks.length;
      _data.bids_count = array.bids.length;
      _data.asks_si = _data.asks_count - 1;
      _data.asks_ei = 0;
      _data.bids_si = _data.asks_count - 1;
      _data.bids_ei = _data.asks_count + _data.bids_count - 2;

      for (var _i2 = _data.asks_si; _i2 >= _data.asks_ei; _i2--) {
        if (_i2 === _data.asks_si && _data.array[_i2] !== undefined) {
          _data.array[_i2].amounts = _data.array[_i2].amount;
        } else if (_data.array[_i2 + 1] !== undefined) {
          _data.array[_i2].amounts = _data.array[_i2 + 1].amounts + _data.array[_i2].amount;
        }
      }

      for (var _i3 = _data.bids_si; _i3 <= _data.bids_ei; _i3++) {
        if (_i3 === _data.bids_si && _data.array[_i3] !== undefined) {
          _data.array[_i3].amounts = _data.array[_i3].amount;
        } else if (_data.array[_i3 - 1] !== undefined) {
          _data.array[_i3].amounts = _data.array[_i3 - 1].amounts + _data.array[_i3].amount;
        }
      }

      __WEBPACK_IMPORTED_MODULE_0__chart_manager__["a" /* ChartManager */].instance.redraw('All', false);
    }
  }, {
    key: "setMainIndicator",
    value: function setMainIndicator(indicName) {
      this._mainIndicator = indicName;

      if (indicName === 'NONE') {
        __WEBPACK_IMPORTED_MODULE_0__chart_manager__["a" /* ChartManager */].instance.removeMainIndicator('frame0.k0');
      } else {
        __WEBPACK_IMPORTED_MODULE_0__chart_manager__["a" /* ChartManager */].instance.setMainIndicator('frame0.k0', indicName);
      }

      __WEBPACK_IMPORTED_MODULE_0__chart_manager__["a" /* ChartManager */].instance.redraw('All', true);
    }
  }, {
    key: "setIndicator",
    value: function setIndicator(index, indicName) {
      if (indicName === 'NONE') {
        var _index = 2;
        if (__WEBPACK_IMPORTED_MODULE_3__templates__["b" /* Template */].displayVolume === false) _index = 1;
        var areaName = __WEBPACK_IMPORTED_MODULE_0__chart_manager__["a" /* ChartManager */].instance.getIndicatorAreaName('frame0.k0', _index);
        if (areaName !== '') __WEBPACK_IMPORTED_MODULE_0__chart_manager__["a" /* ChartManager */].instance.removeIndicator(areaName);
      } else {
        var _index2 = 2;
        if (__WEBPACK_IMPORTED_MODULE_3__templates__["b" /* Template */].displayVolume === false) _index2 = 1;

        var _areaName = __WEBPACK_IMPORTED_MODULE_0__chart_manager__["a" /* ChartManager */].instance.getIndicatorAreaName('frame0.k0', _index2);

        if (_areaName === '') {
          __WEBPACK_IMPORTED_MODULE_3__templates__["b" /* Template */].createIndicatorChartComps('frame0.k0', indicName);
        } else {
          __WEBPACK_IMPORTED_MODULE_0__chart_manager__["a" /* ChartManager */].instance.setIndicator(_areaName, indicName);
        }
      }

      __WEBPACK_IMPORTED_MODULE_0__chart_manager__["a" /* ChartManager */].instance.redraw('All', true);
    }
  }, {
    key: "addIndicator",
    value: function addIndicator(indicName) {
      __WEBPACK_IMPORTED_MODULE_0__chart_manager__["a" /* ChartManager */].instance.addIndicator(indicName);
      __WEBPACK_IMPORTED_MODULE_0__chart_manager__["a" /* ChartManager */].instance.redraw('All', true);
    }
  }, {
    key: "removeIndicator",
    value: function removeIndicator(indicName) {
      var areaName = __WEBPACK_IMPORTED_MODULE_0__chart_manager__["a" /* ChartManager */].instance.getIndicatorAreaName(2);
      __WEBPACK_IMPORTED_MODULE_0__chart_manager__["a" /* ChartManager */].instance.removeIndicator(areaName);
      __WEBPACK_IMPORTED_MODULE_0__chart_manager__["a" /* ChartManager */].instance.redraw('All', true);
    }
  }]);

  return Chart;
}();
Chart.strPeriod = {
  'zh-cn': {
    'line': '(分时)',
    '1min': '(1分钟)',
    '5min': '(5分钟)',
    '15min': '(15分钟)',
    '30min': '(30分钟)',
    '1hour': '(1小时)',
    '1day': '(日线)',
    '1week': '(周线)',
    '3min': '(3分钟)',
    '2hour': '(2小时)',
    '4hour': '(4小时)',
    '6hour': '(6小时)',
    '12hour': '(12小时)',
    '3day': '(3天)'
  },
  'en-us': {
    'line': '(Line)',
    '1min': '(1m)',
    '5min': '(5m)',
    '15min': '(15m)',
    '30min': '(30m)',
    '1hour': '(1h)',
    '1day': '(1d)',
    '1week': '(1w)',
    '3min': '(3m)',
    '2hour': '(2h)',
    '4hour': '(4h)',
    '6hour': '(6h)',
    '12hour': '(12h)',
    '3day': '(3d)'
  },
  'zh-tw': {
    'line': '(分時)',
    '1min': '(1分鐘)',
    '5min': '(5分鐘)',
    '15min': '(15分鐘)',
    '30min': '(30分鐘)',
    '1hour': '(1小時)',
    '1day': '(日線)',
    '1week': '(周線)',
    '3min': '(3分鐘)',
    '2hour': '(2小時)',
    '4hour': '(4小時)',
    '6hour': '(6小時)',
    '12hour': '(12小時)',
    '3day': '(3天)'
  }
};

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CToolManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__named_object__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cpoint__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ctools__ = __webpack_require__(10);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var CToolManager =
/*#__PURE__*/
function (_NamedObject) {
  _inherits(CToolManager, _NamedObject);

  function CToolManager(name) {
    var _this;

    _classCallCheck(this, CToolManager);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CToolManager).call(this, name));
    _this.selectedObject = -1;
    _this.toolObjects = [];
    return _this;
  }

  _createClass(CToolManager, [{
    key: "getToolObjectCount",
    value: function getToolObjectCount() {
      return this.toolObjects.length;
    }
  }, {
    key: "addToolObject",
    value: function addToolObject(o) {
      this.toolObjects.push(o);
    }
  }, {
    key: "getToolObject",
    value: function getToolObject(i) {
      if (i < this.toolObjects.length && i >= 0) {
        return this.toolObjects[i];
      }

      return null;
    }
  }, {
    key: "getCurrentObject",
    value: function getCurrentObject() {
      return this.getToolObject(this.getToolObjectCount() - 1);
    }
  }, {
    key: "getSelectedObject",
    value: function getSelectedObject() {
      return this.getToolObject(this.selectedObject);
    }
  }, {
    key: "delCurrentObject",
    value: function delCurrentObject() {
      this.toolObjects.splice(this.getToolObjectCount() - 1, 1);
    }
  }, {
    key: "delSelectedObject",
    value: function delSelectedObject() {
      this.toolObjects.splice(this.selectedObject, 1);
      this.selectedObject = -1;
    }
  }, {
    key: "acceptMouseMoveEvent",
    value: function acceptMouseMoveEvent(x, y) {
      if (this.selectedObject === -1) {
        var curr = this.toolObjects[this.getToolObjectCount() - 1];
        if (curr !== null && curr !== undefined && curr.getState() !== __WEBPACK_IMPORTED_MODULE_2__ctools__["n" /* CToolObject */].state.AfterDraw) return curr.acceptMouseMoveEvent(x, y);
      } else {
        var sel = this.toolObjects[this.selectedObject];

        if (sel.getState() === __WEBPACK_IMPORTED_MODULE_2__ctools__["n" /* CToolObject */].state.Draw) {
          return sel.acceptMouseMoveEvent(x, y);
        }

        sel.unselect();
        this.selectedObject = -1;
      }

      for (var index in this.toolObjects) {
        if (this.toolObjects[index].isSelected(x, y)) {
          this.selectedObject = index;
          return false;
        }
      }

      return false;
    }
  }, {
    key: "acceptMouseDownEvent",
    value: function acceptMouseDownEvent(x, y) {
      this.mouseDownMove = false;

      if (this.selectedObject === -1) {
        var curr = this.toolObjects[this.getToolObjectCount() - 1];
        if (curr !== null && curr !== undefined && curr.getState() !== __WEBPACK_IMPORTED_MODULE_2__ctools__["n" /* CToolObject */].state.AfterDraw) return curr.acceptMouseDownEvent(x, y);
      } else {
        var sel = this.toolObjects[this.selectedObject];
        if (sel.getState() !== __WEBPACK_IMPORTED_MODULE_2__ctools__["n" /* CToolObject */].state.BeforeDraw) return sel.acceptMouseDownEvent(x, y);
      }

      return false;
    }
  }, {
    key: "acceptMouseDownMoveEvent",
    value: function acceptMouseDownMoveEvent(x, y) {
      this.mouseDownMove = true;

      if (this.selectedObject === -1) {
        var curr = this.toolObjects[this.getToolObjectCount() - 1];
        if (curr !== null && curr !== undefined && curr.getState() === __WEBPACK_IMPORTED_MODULE_2__ctools__["n" /* CToolObject */].state.Draw) return curr.acceptMouseDownMoveEvent(x, y);
        return false;
      } else {
        var sel = this.toolObjects[this.selectedObject];

        if (sel.getState() !== __WEBPACK_IMPORTED_MODULE_2__ctools__["n" /* CToolObject */].state.BeforeDraw) {
          if (sel.acceptMouseDownMoveEvent(x, y) === true) {
            var point = this.toolObjects[this.selectedObject].points;

            for (var i = 0; i < point.length; i++) {
              if (point[i].state === __WEBPACK_IMPORTED_MODULE_1__cpoint__["a" /* CPoint */].state.Highlight || point[i].state === __WEBPACK_IMPORTED_MODULE_1__cpoint__["a" /* CPoint */].state.Show) {
                return true;
              }
            }
          }

          return true;
        }
      }
    }
  }, {
    key: "acceptMouseUpEvent",
    value: function acceptMouseUpEvent(x, y) {
      if (this.mouseDownMove === true) {
        if (this.selectedObject === -1) {
          var _curr = this.toolObjects[this.getToolObjectCount() - 1];
          if (_curr !== null && _curr !== undefined && _curr.getState() === __WEBPACK_IMPORTED_MODULE_2__ctools__["n" /* CToolObject */].state.Draw) return _curr.acceptMouseUpEvent(x, y);
          return true;
        } else {
          var sel = this.toolObjects[this.selectedObject];
          if (sel.getState() !== __WEBPACK_IMPORTED_MODULE_2__ctools__["n" /* CToolObject */].state.BeforeDraw) return sel.acceptMouseUpEvent(x, y);
        }
      }

      if (this.selectedObject !== -1) {
        return true;
      }

      var curr = this.toolObjects[this.getToolObjectCount() - 1];

      if (curr !== null && curr !== undefined) {
        if (curr.getState() === __WEBPACK_IMPORTED_MODULE_2__ctools__["n" /* CToolObject */].state.Draw) return true;

        if (!curr.isValidMouseXY(x, y)) {
          return false;
        }

        if (curr.isSelected(x, y)) {
          return true;
        }
      }

      return false;
    }
  }]);

  return CToolManager;
}(__WEBPACK_IMPORTED_MODULE_0__named_object__["a" /* NamedObject */]);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Timeline; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__named_object__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chart_manager__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_sources__ = __webpack_require__(2);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Timeline =
/*#__PURE__*/
function (_NamedObject) {
  _inherits(Timeline, _NamedObject);

  function Timeline(name) {
    var _this;

    _classCallCheck(this, Timeline);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Timeline).call(this, name));
    _this._updated = false;
    _this._innerLeft = 0;
    _this._innerWidth = 0;
    _this._firstColumnLeft = 0;
    _this._scale = 3;
    _this._lastScale = -1;
    _this._maxItemCount = 0;
    _this._maxIndex = 0;
    _this._firstIndex = -1;
    _this._selectedIndex = -1;
    _this._savedFirstIndex = -1;
    return _this;
  }

  _createClass(Timeline, [{
    key: "isLatestShown",
    value: function isLatestShown() {
      return this.getLastIndex() === this._maxIndex;
    }
  }, {
    key: "isUpdated",
    value: function isUpdated() {
      return this._updated;
    }
  }, {
    key: "setUpdated",
    value: function setUpdated(v) {
      this._updated = v;
    }
  }, {
    key: "getItemWidth",
    value: function getItemWidth() {
      return Timeline.itemWidth[this._scale];
    }
  }, {
    key: "getSpaceWidth",
    value: function getSpaceWidth() {
      return Timeline.spaceWidth[this._scale];
    }
  }, {
    key: "getColumnWidth",
    value: function getColumnWidth() {
      return this.getSpaceWidth() + this.getItemWidth();
    }
  }, {
    key: "getInnerWidth",
    value: function getInnerWidth() {
      return this._innerWidth;
    }
  }, {
    key: "getItemLeftOffset",
    value: function getItemLeftOffset() {
      return this.getSpaceWidth();
    }
  }, {
    key: "getItemCenterOffset",
    value: function getItemCenterOffset() {
      return this.getSpaceWidth() + (this.getItemWidth() >> 1);
    }
  }, {
    key: "getFirstColumnLeft",
    value: function getFirstColumnLeft() {
      return this._firstColumnLeft;
    }
  }, {
    key: "getMaxItemCount",
    value: function getMaxItemCount() {
      return this._maxItemCount;
    }
  }, {
    key: "getFirstIndex",
    value: function getFirstIndex() {
      return this._firstIndex;
    }
  }, {
    key: "getLastIndex",
    value: function getLastIndex() {
      return Math.min(this._firstIndex + this._maxItemCount, this._maxIndex);
    }
  }, {
    key: "getSelectedIndex",
    value: function getSelectedIndex() {
      return this._selectedIndex;
    }
  }, {
    key: "getMaxIndex",
    value: function getMaxIndex() {
      return this._maxIndex;
    }
  }, {
    key: "calcColumnCount",
    value: function calcColumnCount(w) {
      return Math.floor(w / this.getColumnWidth()) << 0;
    }
  }, {
    key: "calcFirstColumnLeft",
    value: function calcFirstColumnLeft(maxItemCount) {
      return this._innerLeft + this._innerWidth - this.getColumnWidth() * maxItemCount;
    }
  }, {
    key: "calcFirstIndexAlignRight",
    value: function calcFirstIndexAlignRight(oldFirstIndex, oldMaxItemCount, newMaxItemCount) {
      return Math.max(0, oldFirstIndex + Math.max(oldMaxItemCount, 1) - Math.max(newMaxItemCount, 1));
    }
  }, {
    key: "calcFirstIndex",
    value: function calcFirstIndex(newMaxItemCount) {
      return this.validateFirstIndex(this.calcFirstIndexAlignRight(this._firstIndex, this._maxItemCount, newMaxItemCount), newMaxItemCount);
    }
  }, {
    key: "updateMaxItemCount",
    value: function updateMaxItemCount() {
      var newMaxItemCount = this.calcColumnCount(this._innerWidth);
      var newFirstIndex;

      if (this._maxItemCount < 1) {
        newFirstIndex = this.calcFirstIndex(newMaxItemCount);
      } else if (this._lastScale === this._scale) {
        newFirstIndex = this.validateFirstIndex(this._firstIndex - (newMaxItemCount - this._maxItemCount));
      } else {
        var focusedIndex = this._selectedIndex >= 0 ? this._selectedIndex : this.getLastIndex() - 1;
        newFirstIndex = this.validateFirstIndex(focusedIndex - Math.round((focusedIndex - this._firstIndex) * newMaxItemCount / this._maxItemCount));
      }

      this._lastScale = this._scale;

      if (this._firstIndex !== newFirstIndex) {
        if (this._selectedIndex === this._firstIndex) this._selectedIndex = newFirstIndex;
        this._firstIndex = newFirstIndex;
        this._updated = true;
      }

      if (this._maxItemCount !== newMaxItemCount) {
        this._maxItemCount = newMaxItemCount;
        this._updated = true;
      }

      this._firstColumnLeft = this.calcFirstColumnLeft(newMaxItemCount);
    }
  }, {
    key: "validateFirstIndex",
    value: function validateFirstIndex(firstIndex, maxItemCount) {
      if (this._maxIndex < 1) {
        return -1;
      }

      if (firstIndex < 0) {
        return 0;
      }

      var lastFirst = Math.max(0, this._maxIndex - 1
      /*maxItemCount*/
      );

      if (firstIndex > lastFirst) {
        return lastFirst;
      }

      return firstIndex;
    }
  }, {
    key: "validateSelectedIndex",
    value: function validateSelectedIndex() {
      if (this._selectedIndex < this._firstIndex) this._selectedIndex = -1;else if (this._selectedIndex >= this.getLastIndex()) this._selectedIndex = -1;
    }
  }, {
    key: "onLayout",
    value: function onLayout() {
      var mgr = __WEBPACK_IMPORTED_MODULE_1__chart_manager__["a" /* ChartManager */].instance;
      var area = mgr.getArea(this.getDataSourceName() + ".main");

      if (area !== null) {
        this._innerLeft = area.getLeft() + Timeline.PADDING_LEFT;
        var w = Math.max(0, area.getWidth() - (Timeline.PADDING_LEFT + Timeline.PADDING_RIGHT));

        if (this._innerWidth !== w) {
          this._innerWidth = w;
          this.updateMaxItemCount();
        }
      }
    }
  }, {
    key: "toIndex",
    value: function toIndex(x) {
      return this._firstIndex + this.calcColumnCount(x - this._firstColumnLeft);
    }
  }, {
    key: "toColumnLeft",
    value: function toColumnLeft(index) {
      return this._firstColumnLeft + this.getColumnWidth() * (index - this._firstIndex);
    }
  }, {
    key: "toItemLeft",
    value: function toItemLeft(index) {
      return this.toColumnLeft(index) + this.getItemLeftOffset();
    }
  }, {
    key: "toItemCenter",
    value: function toItemCenter(index) {
      return this.toColumnLeft(index) + this.getItemCenterOffset();
    }
  }, {
    key: "selectAt",
    value: function selectAt(x) {
      this._selectedIndex = this.toIndex(x);
      this.validateSelectedIndex();
      return this._selectedIndex >= 0;
    }
  }, {
    key: "unselect",
    value: function unselect() {
      this._selectedIndex = -1;
    }
  }, {
    key: "update",
    value: function update() {
      var mgr = __WEBPACK_IMPORTED_MODULE_1__chart_manager__["a" /* ChartManager */].instance;
      var ds = mgr.getDataSource(this.getDataSourceName());
      var oldMaxIndex = this._maxIndex;
      this._maxIndex = ds.getDataCount();

      switch (ds.getUpdateMode()) {
        case __WEBPACK_IMPORTED_MODULE_2__data_sources__["a" /* DataSource */].UpdateMode.Refresh:
          if (this._maxIndex < 1) this._firstIndex = -1;else this._firstIndex = Math.max(this._maxIndex - this._maxItemCount, 0);
          this._selectedIndex = -1;
          this._updated = true;
          break;

        case __WEBPACK_IMPORTED_MODULE_2__data_sources__["a" /* DataSource */].UpdateMode.Append:
          var lastIndex = this.getLastIndex();
          var erasedCount = ds.getErasedCount();

          if (lastIndex < oldMaxIndex) {
            if (erasedCount > 0) {
              this._firstIndex = Math.max(this._firstIndex - erasedCount, 0);

              if (this._selectedIndex >= 0) {
                this._selectedIndex -= erasedCount;
                this.validateSelectedIndex();
              }

              this._updated = true;
            }
          } else if (lastIndex === oldMaxIndex) {
            this._firstIndex += this._maxIndex - oldMaxIndex;

            if (this._selectedIndex >= 0) {
              this._selectedIndex -= erasedCount;
              this.validateSelectedIndex();
            }

            this._updated = true;
          }

          break;
      }
    }
  }, {
    key: "move",
    value: function move(x) {
      if (this.isLatestShown()) {
        __WEBPACK_IMPORTED_MODULE_1__chart_manager__["a" /* ChartManager */].instance.getArea(this.getDataSourceName() + ".mainRange").setChanged(true);
      }

      this._firstIndex = this.validateFirstIndex(this._savedFirstIndex - this.calcColumnCount(x), this._maxItemCount);
      this._updated = true;
      if (this._selectedIndex >= 0) this.validateSelectedIndex();
    }
  }, {
    key: "startMove",
    value: function startMove() {
      this._savedFirstIndex = this._firstIndex;
    }
  }, {
    key: "scale",
    value: function scale(s) {
      this._scale += s;

      if (this._scale < 0) {
        this._scale = 0;
      } else if (this._scale >= Timeline.itemWidth.length) {
        this._scale = Timeline.itemWidth.length - 1;
      }

      this.updateMaxItemCount();

      if (this._selectedIndex >= 0) {
        this.validateSelectedIndex();
      }
    }
  }]);

  return Timeline;
}(__WEBPACK_IMPORTED_MODULE_0__named_object__["a" /* NamedObject */]);
Timeline.itemWidth = [1, 3, 3, 5, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29];
Timeline.spaceWidth = [1, 1, 2, 2, 3, 3, 3, 3, 3, 3, 5, 5, 5, 5, 7, 7, 7];
Timeline.PADDING_LEFT = 4;
Timeline.PADDING_RIGHT = 8;

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TableLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DockableLayout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__areas__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chart_manager__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__themes__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chart_settings__ = __webpack_require__(4);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var TableLayout =
/*#__PURE__*/
function (_areas$ChartAreaGroup) {
  _inherits(TableLayout, _areas$ChartAreaGroup);

  function TableLayout(name) {
    var _this;

    _classCallCheck(this, TableLayout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TableLayout).call(this, name));
    _this._nextRowId = 0;
    _this._focusedRowIndex = -1;
    return _this;
  }

  _createClass(TableLayout, [{
    key: "getNextRowId",
    value: function getNextRowId() {
      return this._nextRowId++;
    }
  }, {
    key: "measure",
    value: function measure(context, width, height) {
      this.setMeasuredDimension(width, height);
      var rowH,
          prevH = 0,
          totalH = 0;
      var h, rows;
      var rh = [];
      var i,
          cnt = this._areas.length;

      for (i = 0; i < cnt; i += 2) {
        rowH = this._areas[i].getHeight();

        if (rowH === 0) {
          if (i === 0) {
            rows = cnt + 1 >> 1;
            var n = rows * 2 + 5;
            var nh = height / n * 2 << 0;
            h = height;

            for (i = rows - 1; i > 0; i--) {
              rh.unshift(nh);
              h -= nh;
            }

            rh.unshift(h);
            break;
          } else if (i === 2) {
            rowH = prevH / 3;
          } else {
            rowH = prevH;
          }
        }

        totalH += rowH;
        prevH = rowH;
        rh.push(rowH);
      }

      if (totalH > 0) {
        var rate = height / totalH;
        rows = cnt + 1 >> 1;
        h = height;

        for (i = rows - 1; i > 0; i--) {
          rh[i] *= rate;
          h -= rh[i];
        }

        rh[0] = h;
      }

      var nw = 8; // chart depths sidebar (深度图侧边栏宽度)

      var minRW = 76;
      var maxRW = Math.min(240, width >> 1);
      var rw = minRW;
      var mgr = __WEBPACK_IMPORTED_MODULE_1__chart_manager__["a" /* ChartManager */].instance;
      var timeline = mgr.getTimeline(this.getDataSourceName());

      if (timeline.getFirstIndex() >= 0) {
        var firstIndexes = [];

        for (rw = minRW; rw < maxRW; rw += nw) {
          firstIndexes.push(timeline.calcFirstIndex(timeline.calcColumnCount(width - rw)));
        }

        var lastIndex = timeline.getLastIndex();
        var dpNames = [".main", ".secondary"];
        var minmaxes = new Array(firstIndexes.length);
        var iArea, iIndex;

        for (iArea = 0, iIndex = 0, rw = minRW; iArea < this._areas.length && iIndex < firstIndexes.length; iArea += 2) {
          var area = this._areas[iArea];
          var plotter = mgr.getPlotter(area.getName() + "Range.main");

          for (var iDp in dpNames) {
            var dp = mgr.getDataProvider(area.getName() + dpNames[iDp]);

            if (dp === undefined) {
              continue;
            }

            dp.calcRange(firstIndexes, lastIndex, minmaxes, null);

            while (iIndex < firstIndexes.length) {
              var minW = plotter.getRequiredWidth(context, minmaxes[iIndex].min);
              var maxW = plotter.getRequiredWidth(context, minmaxes[iIndex].max);

              if (Math.max(minW, maxW) < rw) {
                break;
              }

              iIndex++;
              rw += nw;
            }
          }
        }
      }

      for (i = 1; i < this._areas.length; i += 2) {
        this._areas[i].measure(context, rw, rh[i >> 1]);
      }

      var lw = width - rw;

      for (i = 0; i < this._areas.length; i += 2) {
        this._areas[i].measure(context, lw, rh[i >> 1]);
      }
    }
  }, {
    key: "layout",
    value: function layout(left, top, right, bottom, forceChange) {
      _get(_getPrototypeOf(TableLayout.prototype), "layout", this).call(this, left, top, right, bottom, forceChange);

      if (this._areas.length < 1) return;
      var area;

      var center = left + this._areas[0].getMeasuredWidth();

      var t = top,
          b;
      if (!forceChange) forceChange = this.isChanged();
      var i,
          cnt = this._areas.length;

      for (i = 0; i < cnt; i++) {
        area = this._areas[i];
        b = t + area.getMeasuredHeight();
        area.layout(left, t, center, b, forceChange);
        i++;
        area = this._areas[i];
        area.layout(center, t, this.getRight(), b, forceChange);
        t = b;
      }

      this.setChanged(false);
    }
  }, {
    key: "drawGrid",
    value: function drawGrid(context) {
      if (this._areas.length < 1) {
        return;
      }

      var mgr = __WEBPACK_IMPORTED_MODULE_1__chart_manager__["a" /* ChartManager */].instance;
      var theme = mgr.getTheme(this.getFrameName());
      context.fillStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_2__themes__["c" /* Theme */].Color.Grid1);
      context.fillRect(this._areas[0].getRight(), this.getTop(), 1, this.getHeight());
      var i,
          cnt = this._areas.length - 2;

      for (i = 0; i < cnt; i += 2) {
        context.fillRect(this.getLeft(), this._areas[i].getBottom(), this.getWidth(), 1);
      }

      if (!mgr.getCaptureMouseWheelDirectly()) {
        for (i = 0, cnt += 2; i < cnt; i += 2) {
          if (this._areas[i].isSelected()) {
            context.strokeStyle = theme.getColor(__WEBPACK_IMPORTED_MODULE_2__themes__["c" /* Theme */].Color.Indicator1);
            context.strokeRect(this.getLeft() + 0.5, this.getTop() + 0.5, this.getWidth() - 1, this.getHeight() - 1);
            break;
          }
        }
      }
    }
  }, {
    key: "highlight",
    value: function highlight(area) {
      this._highlightedArea = null;
      var e,
          i,
          cnt = this._areas.length;

      for (i = 0; i < cnt; i++) {
        e = this._areas[i];

        if (e === area) {
          i &= ~1;
          e = this._areas[i];
          e.highlight(e);
          this._highlightedArea = e;
          i++;
          e = this._areas[i];
          e.highlight(null);
          e.highlight(e);
        } else {
          e.highlight(null);
        }
      }

      return this._highlightedArea !== null ? this : null;
    }
  }, {
    key: "select",
    value: function select(area) {
      this._selectedArea = null;
      var e,
          i,
          cnt = this._areas.length;

      for (i = 0; i < cnt; i++) {
        e = this._areas[i];

        if (e === area) {
          i &= ~1;
          e = this._areas[i];
          e.select(e);
          this._selectedArea = e;
          i++;
          e = this._areas[i];
          e.select(e);
        } else {
          e.select(null);
        }
      }

      return this._selectedArea !== null ? this : null;
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(x, y) {
      if (this._focusedRowIndex >= 0) {
        var upper = this._areas[this._focusedRowIndex];
        var lower = this._areas[this._focusedRowIndex + 2];
        var d = y - this._oldY;
        if (d === 0) return this;
        var upperBottom = this._oldUpperBottom + d;
        var lowerTop = this._oldLowerTop + d;

        if (upperBottom - upper.getTop() >= 60 && lower.getBottom() - lowerTop >= 60) {
          upper.setBottom(upperBottom);
          lower.setTop(lowerTop);
        }

        return this;
      }

      var i,
          cnt = this._areas.length - 2;

      for (i = 0; i < cnt; i += 2) {
        var b = this._areas[i].getBottom();

        if (y >= b - 4 && y < b + 4) {
          __WEBPACK_IMPORTED_MODULE_1__chart_manager__["a" /* ChartManager */].instance.showCursor('n-resize');
          return this;
        }
      }

      return null;
    }
  }, {
    key: "onMouseLeave",
    value: function onMouseLeave(x, y) {
      this._focusedRowIndex = -1;
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(x, y) {
      var i,
          cnt = this._areas.length - 2;

      for (i = 0; i < cnt; i += 2) {
        var b = this._areas[i].getBottom();

        if (y >= b - 4 && y < b + 4) {
          this._focusedRowIndex = i;
          this._oldY = y;
          this._oldUpperBottom = b;
          this._oldLowerTop = this._areas[i + 2].getTop();
          return this;
        }
      }

      return null;
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp(x, y) {
      if (this._focusedRowIndex >= 0) {
        this._focusedRowIndex = -1;
        var i,
            cnt = this._areas.length;
        var height = [];

        for (i = 0; i < cnt; i += 2) {
          height.push(this._areas[i].getHeight());
        }

        __WEBPACK_IMPORTED_MODULE_3__chart_settings__["a" /* ChartSettings */].get().charts.areaHeight = height;
        __WEBPACK_IMPORTED_MODULE_3__chart_settings__["a" /* ChartSettings */].save();
      }

      return this;
    }
  }]);

  return TableLayout;
}(__WEBPACK_IMPORTED_MODULE_0__areas__["b" /* ChartAreaGroup */]);
var DockableLayout =
/*#__PURE__*/
function (_areas$ChartAreaGroup2) {
  _inherits(DockableLayout, _areas$ChartAreaGroup2);

  function DockableLayout(name) {
    _classCallCheck(this, DockableLayout);

    return _possibleConstructorReturn(this, _getPrototypeOf(DockableLayout).call(this, name));
  }

  _createClass(DockableLayout, [{
    key: "measure",
    value: function measure(context, width, height) {
      _get(_getPrototypeOf(DockableLayout.prototype), "measure", this).call(this, context, width, height);

      width = this.getMeasuredWidth();
      height = this.getMeasuredHeight();

      for (var i in this._areas) {
        var area = this._areas[i];
        area.measure(context, width, height);

        switch (area.getDockStyle()) {
          case __WEBPACK_IMPORTED_MODULE_0__areas__["a" /* ChartArea */].DockStyle.left:
          case __WEBPACK_IMPORTED_MODULE_0__areas__["a" /* ChartArea */].DockStyle.Right:
            width -= area.getMeasuredWidth();
            break;

          case __WEBPACK_IMPORTED_MODULE_0__areas__["a" /* ChartArea */].DockStyle.Top:
          case __WEBPACK_IMPORTED_MODULE_0__areas__["a" /* ChartArea */].DockStyle.Bottom:
            height -= area.getMeasuredHeight();
            break;

          case __WEBPACK_IMPORTED_MODULE_0__areas__["a" /* ChartArea */].DockStyle.Fill:
            width = 0;
            height = 0;
            break;
        }
      }
    }
  }, {
    key: "layout",
    value: function layout(left, top, right, bottom, forceChange) {
      _get(_getPrototypeOf(DockableLayout.prototype), "layout", this).call(this, left, top, right, bottom, forceChange);

      left = this.getLeft();
      top = this.getTop();
      right = this.getRight();
      bottom = this.getBottom();
      var w, h;

      if (!forceChange) {
        forceChange = this.isChanged();
      }

      for (var i in this._areas) {
        var area = this._areas[i];

        switch (area.getDockStyle()) {
          case __WEBPACK_IMPORTED_MODULE_0__areas__["a" /* ChartArea */].DockStyle.left:
            w = area.getMeasuredWidth();
            area.layout(left, top, left + w, bottom, forceChange);
            left += w;
            break;

          case __WEBPACK_IMPORTED_MODULE_0__areas__["a" /* ChartArea */].DockStyle.Top:
            h = area.getMeasuredHeight();
            area.layout(left, top, right, top + h, forceChange);
            top += h;
            break;

          case __WEBPACK_IMPORTED_MODULE_0__areas__["a" /* ChartArea */].DockStyle.Right:
            w = area.getMeasuredWidth();
            area.layout(right - w, top, right, bottom, forceChange);
            right -= w;
            break;

          case __WEBPACK_IMPORTED_MODULE_0__areas__["a" /* ChartArea */].DockStyle.Bottom:
            h = area.getMeasuredHeight();
            area.layout(left, bottom - h, right, bottom, forceChange);
            bottom -= h;
            break;

          case __WEBPACK_IMPORTED_MODULE_0__areas__["a" /* ChartArea */].DockStyle.Fill:
            area.layout(left, top, right, bottom, forceChange);
            left = right;
            top = bottom;
            break;
        }
      }

      this.setChanged(false);
    }
  }, {
    key: "drawGrid",
    value: function drawGrid(context) {
      var mgr = __WEBPACK_IMPORTED_MODULE_1__chart_manager__["a" /* ChartManager */].instance;
      var theme = mgr.getTheme(this.getFrameName());
      var left = this.getLeft();
      var top = this.getTop();
      var right = this.getRight();
      var bottom = this.getBottom();
      context.fillStyle = theme.getColor(this._gridColor);

      for (var i in this._areas) {
        var area = this._areas[i];

        switch (area.getDockStyle()) {
          case __WEBPACK_IMPORTED_MODULE_0__areas__["a" /* ChartArea */].DockStyle.Left:
            context.fillRect(area.getRight(), top, 1, bottom - top);
            left += area.getWidth();
            break;

          case __WEBPACK_IMPORTED_MODULE_0__areas__["a" /* ChartArea */].DockStyle.Top:
            context.fillRect(left, area.getBottom(), right - left, 1);
            top += area.getHeight();
            break;

          case __WEBPACK_IMPORTED_MODULE_0__areas__["a" /* ChartArea */].DockStyle.Right:
            context.fillRect(area.getLeft(), top, 1, bottom - top);
            right -= area.getWidth();
            break;

          case __WEBPACK_IMPORTED_MODULE_0__areas__["a" /* ChartArea */].DockStyle.Bottom:
            context.fillRect(left, area.getTop(), right - left, 1);
            bottom -= area.getHeight();
            break;
        }
      }
    }
  }]);

  return DockableLayout;
}(__WEBPACK_IMPORTED_MODULE_0__areas__["b" /* ChartAreaGroup */]);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Indicator */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return HLCIndicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return MAIndicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return EMAIndicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return VOLUMEIndicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return MACDIndicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DMIIndicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DMAIndicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return TRIXIndicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BRARIndicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return VRIndicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return OBVIndicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return EMVIndicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return RSIIndicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return WRIndicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return SARIndicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return KDJIndicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return ROCIndicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return MTMIndicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BOLLIndicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return PSYIndicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return STOCHRSIIndicator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exprs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__themes__ = __webpack_require__(6);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Indicator =
/*#__PURE__*/
function () {
  function Indicator() {
    _classCallCheck(this, Indicator);

    this._exprEnv = new __WEBPACK_IMPORTED_MODULE_0__exprs__["l" /* ExprEnv */]();
    this._rid = 0;
    this._params = [];
    this._assigns = [];
    this._outputs = [];
  }

  _createClass(Indicator, [{
    key: "addParameter",
    value: function addParameter(expr) {
      this._params.push(expr);
    }
  }, {
    key: "addAssign",
    value: function addAssign(expr) {
      this._assigns.push(expr);
    }
  }, {
    key: "addOutput",
    value: function addOutput(expr) {
      this._outputs.push(expr);
    }
  }, {
    key: "getParameterCount",
    value: function getParameterCount() {
      return this._params.length;
    }
  }, {
    key: "getParameterAt",
    value: function getParameterAt(index) {
      return this._params[index];
    }
  }, {
    key: "getOutputCount",
    value: function getOutputCount() {
      return this._outputs.length;
    }
  }, {
    key: "getOutputAt",
    value: function getOutputAt(index) {
      return this._outputs[index];
    }
  }, {
    key: "clear",
    value: function clear() {
      this._exprEnv.setFirstIndex(-1);

      var i, cnt;
      cnt = this._assigns.length;

      for (i = 0; i < cnt; i++) {
        this._assigns[i].clear();
      }

      cnt = this._outputs.length;

      for (i = 0; i < cnt; i++) {
        this._outputs[i].clear();
      }
    }
  }, {
    key: "reserve",
    value: function reserve(count) {
      this._rid++;
      var i, cnt;
      cnt = this._assigns.length;

      for (i = 0; i < cnt; i++) {
        this._assigns[i].reserve(this._rid, count);
      }

      cnt = this._outputs.length;

      for (i = 0; i < cnt; i++) {
        this._outputs[i].reserve(this._rid, count);
      }
    }
  }, {
    key: "execute",
    value: function execute(ds, index) {
      if (index < 0) {
        return;
      }

      this._exprEnv.setDataSource(ds);

      __WEBPACK_IMPORTED_MODULE_0__exprs__["l" /* ExprEnv */].set(this._exprEnv);

      try {
        var i, cnt;
        cnt = this._assigns.length;

        for (i = 0; i < cnt; i++) {
          this._assigns[i].assign(index);
        }

        cnt = this._outputs.length;

        for (i = 0; i < cnt; i++) {
          this._outputs[i].assign(index);
        }

        if (this._exprEnv.getFirstIndex() < 0) {
          this._exprEnv.setFirstIndex(index);
        }
      } catch (e) {
        if (this._exprEnv.getFirstIndex() >= 0) {
          alert(e);
          throw e;
        }
      }
    }
  }, {
    key: "getParameters",
    value: function getParameters() {
      var params = [];
      var i,
          cnt = this._params.length;

      for (i = 0; i < cnt; i++) {
        params.push(this._params[i].getValue());
      }

      return params;
    }
  }, {
    key: "setParameters",
    value: function setParameters(params) {
      if (params instanceof Array && params.length === this._params.length) {
        for (var i in this._params) {
          this._params[i].setValue(params[i]);
        }
      }
    }
  }]);

  return Indicator;
}();
var HLCIndicator =
/*#__PURE__*/
function (_Indicator) {
  _inherits(HLCIndicator, _Indicator);

  function HLCIndicator() {
    var _this;

    _classCallCheck(this, HLCIndicator);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HLCIndicator).call(this));
    var M1 = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("M1", 2, 1000, 60);

    _this.addParameter(M1);

    _this.addOutput(new __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */]("HIGH", new __WEBPACK_IMPORTED_MODULE_0__exprs__["o" /* HighExpr */](), __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */].outputStyle.None));

    _this.addOutput(new __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */]("LOW", new __WEBPACK_IMPORTED_MODULE_0__exprs__["r" /* LowExpr */](), __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */].outputStyle.None));

    _this.addOutput(new __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */]("CLOSE", new __WEBPACK_IMPORTED_MODULE_0__exprs__["e" /* CloseExpr */](), __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */].outputStyle.Line, __WEBPACK_IMPORTED_MODULE_1__themes__["c" /* Theme */].Color.Indicator0));

    _this.addOutput(new __WEBPACK_IMPORTED_MODULE_0__exprs__["A" /* RangeOutputExpr */]("MA", new __WEBPACK_IMPORTED_MODULE_0__exprs__["t" /* MaExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["e" /* CloseExpr */](), M1), __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */].outputStyle.Line, __WEBPACK_IMPORTED_MODULE_1__themes__["c" /* Theme */].Color.Indicator1));

    return _this;
  }

  _createClass(HLCIndicator, [{
    key: "getName",
    value: function getName() {
      return "CLOSE";
    }
  }]);

  return HLCIndicator;
}(Indicator);
var MAIndicator =
/*#__PURE__*/
function (_Indicator2) {
  _inherits(MAIndicator, _Indicator2);

  function MAIndicator() {
    var _this2;

    _classCallCheck(this, MAIndicator);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(MAIndicator).call(this));
    var M1 = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("M1", 2, 1000, 7);
    var M2 = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("M2", 2, 1000, 30);
    var M3 = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("M3", 2, 1000, 0);
    var M4 = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("M4", 2, 1000, 0);
    var M5 = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("M5", 2, 1000, 0);
    var M6 = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("M6", 2, 1000, 0);

    _this2.addParameter(M1);

    _this2.addParameter(M2);

    _this2.addParameter(M3);

    _this2.addParameter(M4);

    _this2.addParameter(M5);

    _this2.addParameter(M6);

    _this2.addOutput(new __WEBPACK_IMPORTED_MODULE_0__exprs__["A" /* RangeOutputExpr */]("MA", new __WEBPACK_IMPORTED_MODULE_0__exprs__["t" /* MaExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["e" /* CloseExpr */](), M1)));

    _this2.addOutput(new __WEBPACK_IMPORTED_MODULE_0__exprs__["A" /* RangeOutputExpr */]("MA", new __WEBPACK_IMPORTED_MODULE_0__exprs__["t" /* MaExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["e" /* CloseExpr */](), M2)));

    _this2.addOutput(new __WEBPACK_IMPORTED_MODULE_0__exprs__["A" /* RangeOutputExpr */]("MA", new __WEBPACK_IMPORTED_MODULE_0__exprs__["t" /* MaExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["e" /* CloseExpr */](), M3)));

    _this2.addOutput(new __WEBPACK_IMPORTED_MODULE_0__exprs__["A" /* RangeOutputExpr */]("MA", new __WEBPACK_IMPORTED_MODULE_0__exprs__["t" /* MaExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["e" /* CloseExpr */](), M4)));

    _this2.addOutput(new __WEBPACK_IMPORTED_MODULE_0__exprs__["A" /* RangeOutputExpr */]("MA", new __WEBPACK_IMPORTED_MODULE_0__exprs__["t" /* MaExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["e" /* CloseExpr */](), M5)));

    _this2.addOutput(new __WEBPACK_IMPORTED_MODULE_0__exprs__["A" /* RangeOutputExpr */]("MA", new __WEBPACK_IMPORTED_MODULE_0__exprs__["t" /* MaExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["e" /* CloseExpr */](), M6)));

    return _this2;
  }

  _createClass(MAIndicator, [{
    key: "getName",
    value: function getName() {
      return "MA";
    }
  }]);

  return MAIndicator;
}(Indicator);
var EMAIndicator =
/*#__PURE__*/
function (_Indicator3) {
  _inherits(EMAIndicator, _Indicator3);

  function EMAIndicator() {
    var _this3;

    _classCallCheck(this, EMAIndicator);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(EMAIndicator).call(this));
    var M1 = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("M1", 2, 1000, 7);
    var M2 = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("M2", 2, 1000, 30);
    var M3 = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("M3", 2, 1000, 0);
    var M4 = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("M4", 2, 1000, 0);
    var M5 = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("M5", 2, 1000, 0);
    var M6 = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("M6", 2, 1000, 0);

    _this3.addParameter(M1);

    _this3.addParameter(M2);

    _this3.addParameter(M3);

    _this3.addParameter(M4);

    _this3.addParameter(M5);

    _this3.addParameter(M6);

    _this3.addOutput(new __WEBPACK_IMPORTED_MODULE_0__exprs__["A" /* RangeOutputExpr */]("EMA", new __WEBPACK_IMPORTED_MODULE_0__exprs__["i" /* EmaExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["e" /* CloseExpr */](), M1)));

    _this3.addOutput(new __WEBPACK_IMPORTED_MODULE_0__exprs__["A" /* RangeOutputExpr */]("EMA", new __WEBPACK_IMPORTED_MODULE_0__exprs__["i" /* EmaExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["e" /* CloseExpr */](), M2)));

    _this3.addOutput(new __WEBPACK_IMPORTED_MODULE_0__exprs__["A" /* RangeOutputExpr */]("EMA", new __WEBPACK_IMPORTED_MODULE_0__exprs__["i" /* EmaExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["e" /* CloseExpr */](), M3)));

    _this3.addOutput(new __WEBPACK_IMPORTED_MODULE_0__exprs__["A" /* RangeOutputExpr */]("EMA", new __WEBPACK_IMPORTED_MODULE_0__exprs__["i" /* EmaExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["e" /* CloseExpr */](), M4)));

    _this3.addOutput(new __WEBPACK_IMPORTED_MODULE_0__exprs__["A" /* RangeOutputExpr */]("EMA", new __WEBPACK_IMPORTED_MODULE_0__exprs__["i" /* EmaExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["e" /* CloseExpr */](), M5)));

    _this3.addOutput(new __WEBPACK_IMPORTED_MODULE_0__exprs__["A" /* RangeOutputExpr */]("EMA", new __WEBPACK_IMPORTED_MODULE_0__exprs__["i" /* EmaExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["e" /* CloseExpr */](), M6)));

    return _this3;
  }

  _createClass(EMAIndicator, [{
    key: "getName",
    value: function getName() {
      return "EMA";
    }
  }]);

  return EMAIndicator;
}(Indicator);
var VOLUMEIndicator =
/*#__PURE__*/
function (_Indicator4) {
  _inherits(VOLUMEIndicator, _Indicator4);

  function VOLUMEIndicator() {
    var _this4;

    _classCallCheck(this, VOLUMEIndicator);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(VOLUMEIndicator).call(this));
    var M1 = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("M1", 2, 500, 5);
    var M2 = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("M2", 2, 500, 10);

    _this4.addParameter(M1);

    _this4.addParameter(M2);

    var VOLUME = new __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */]("VOLUME", new __WEBPACK_IMPORTED_MODULE_0__exprs__["H" /* VolumeExpr */](), __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */].outputStyle.VolumeStick, __WEBPACK_IMPORTED_MODULE_1__themes__["c" /* Theme */].Color.Text4);

    _this4.addOutput(VOLUME);

    _this4.addOutput(new __WEBPACK_IMPORTED_MODULE_0__exprs__["A" /* RangeOutputExpr */]("MA", new __WEBPACK_IMPORTED_MODULE_0__exprs__["t" /* MaExpr */](VOLUME, M1), __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */].outputStyle.Line, __WEBPACK_IMPORTED_MODULE_1__themes__["c" /* Theme */].Color.Indicator0));

    _this4.addOutput(new __WEBPACK_IMPORTED_MODULE_0__exprs__["A" /* RangeOutputExpr */]("MA", new __WEBPACK_IMPORTED_MODULE_0__exprs__["t" /* MaExpr */](VOLUME, M2), __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */].outputStyle.Line, __WEBPACK_IMPORTED_MODULE_1__themes__["c" /* Theme */].Color.Indicator1));

    return _this4;
  }

  _createClass(VOLUMEIndicator, [{
    key: "getName",
    value: function getName() {
      return "VOLUME";
    }
  }]);

  return VOLUMEIndicator;
}(Indicator);
var MACDIndicator =
/*#__PURE__*/
function (_Indicator5) {
  _inherits(MACDIndicator, _Indicator5);

  function MACDIndicator() {
    var _this5;

    _classCallCheck(this, MACDIndicator);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(MACDIndicator).call(this));
    var SHORT = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("SHORT", 2, 200, 12);
    var LONG = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("LONG", 2, 200, 26);
    var MID = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("MID", 2, 200, 9);

    _this5.addParameter(SHORT);

    _this5.addParameter(LONG);

    _this5.addParameter(MID);

    var DIF = new __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */]("DIF", new __WEBPACK_IMPORTED_MODULE_0__exprs__["F" /* SubExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["i" /* EmaExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["e" /* CloseExpr */](), SHORT), new __WEBPACK_IMPORTED_MODULE_0__exprs__["i" /* EmaExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["e" /* CloseExpr */](), LONG)));

    _this5.addOutput(DIF);

    var DEA = new __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */]("DEA", new __WEBPACK_IMPORTED_MODULE_0__exprs__["i" /* EmaExpr */](DIF, MID));

    _this5.addOutput(DEA);

    var MACD = new __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */]("MACD", new __WEBPACK_IMPORTED_MODULE_0__exprs__["v" /* MulExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["F" /* SubExpr */](DIF, DEA), new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](2)), __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */].outputStyle.MACDStick);

    _this5.addOutput(MACD);

    return _this5;
  }

  _createClass(MACDIndicator, [{
    key: "getName",
    value: function getName() {
      return "MACD";
    }
  }]);

  return MACDIndicator;
}(Indicator);
var DMIIndicator =
/*#__PURE__*/
function (_Indicator6) {
  _inherits(DMIIndicator, _Indicator6);

  function DMIIndicator() {
    var _this6;

    _classCallCheck(this, DMIIndicator);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(DMIIndicator).call(this));
    var N = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("N", 2, 90, 14);
    var MM = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("MM", 2, 60, 6);

    _this6.addParameter(N);

    _this6.addParameter(MM);

    var MTR = new __WEBPACK_IMPORTED_MODULE_0__exprs__["d" /* AssignExpr */]("MTR", new __WEBPACK_IMPORTED_MODULE_0__exprs__["k" /* ExpmemaExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["u" /* MaxExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["u" /* MaxExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["F" /* SubExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["o" /* HighExpr */](), new __WEBPACK_IMPORTED_MODULE_0__exprs__["r" /* LowExpr */]()), new __WEBPACK_IMPORTED_MODULE_0__exprs__["a" /* AbsExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["F" /* SubExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["o" /* HighExpr */](), new __WEBPACK_IMPORTED_MODULE_0__exprs__["B" /* RefExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["e" /* CloseExpr */](), new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](1))))), new __WEBPACK_IMPORTED_MODULE_0__exprs__["a" /* AbsExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["F" /* SubExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["B" /* RefExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["e" /* CloseExpr */](), new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](1)), new __WEBPACK_IMPORTED_MODULE_0__exprs__["r" /* LowExpr */]()))), N));

    _this6.addAssign(MTR);

    var HD = new __WEBPACK_IMPORTED_MODULE_0__exprs__["d" /* AssignExpr */]("HD", new __WEBPACK_IMPORTED_MODULE_0__exprs__["F" /* SubExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["o" /* HighExpr */](), new __WEBPACK_IMPORTED_MODULE_0__exprs__["B" /* RefExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["o" /* HighExpr */](), new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](1))));

    _this6.addAssign(HD);

    var LD = new __WEBPACK_IMPORTED_MODULE_0__exprs__["d" /* AssignExpr */]("LD", new __WEBPACK_IMPORTED_MODULE_0__exprs__["F" /* SubExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["B" /* RefExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["r" /* LowExpr */](), new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](1)), new __WEBPACK_IMPORTED_MODULE_0__exprs__["r" /* LowExpr */]()));

    _this6.addAssign(LD);

    var DMP = new __WEBPACK_IMPORTED_MODULE_0__exprs__["d" /* AssignExpr */]("DMP", new __WEBPACK_IMPORTED_MODULE_0__exprs__["k" /* ExpmemaExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["p" /* IfExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["c" /* AndExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["m" /* GtExpr */](HD, new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](0)), new __WEBPACK_IMPORTED_MODULE_0__exprs__["m" /* GtExpr */](HD, LD)), HD, new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](0)), N));

    _this6.addAssign(DMP);

    var DMM = new __WEBPACK_IMPORTED_MODULE_0__exprs__["d" /* AssignExpr */]("DMM", new __WEBPACK_IMPORTED_MODULE_0__exprs__["k" /* ExpmemaExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["p" /* IfExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["c" /* AndExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["m" /* GtExpr */](LD, new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](0)), new __WEBPACK_IMPORTED_MODULE_0__exprs__["m" /* GtExpr */](LD, HD)), LD, new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](0)), N));

    _this6.addAssign(DMM);

    var PDI = new __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */]("PDI", new __WEBPACK_IMPORTED_MODULE_0__exprs__["v" /* MulExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["h" /* DivExpr */](DMP, MTR), new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](100)));

    _this6.addOutput(PDI);

    var MDI = new __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */]("MDI", new __WEBPACK_IMPORTED_MODULE_0__exprs__["v" /* MulExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["h" /* DivExpr */](DMM, MTR), new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](100)));

    _this6.addOutput(MDI);

    var ADX = new __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */]("ADX", new __WEBPACK_IMPORTED_MODULE_0__exprs__["k" /* ExpmemaExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["v" /* MulExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["h" /* DivExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["a" /* AbsExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["F" /* SubExpr */](MDI, PDI)), new __WEBPACK_IMPORTED_MODULE_0__exprs__["b" /* AddExpr */](MDI, PDI)), new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](100)), MM));

    _this6.addOutput(ADX);

    var ADXR = new __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */]("ADXR", new __WEBPACK_IMPORTED_MODULE_0__exprs__["k" /* ExpmemaExpr */](ADX, MM));

    _this6.addOutput(ADXR);

    return _this6;
  }

  _createClass(DMIIndicator, [{
    key: "getName",
    value: function getName() {
      return "DMI";
    }
  }]);

  return DMIIndicator;
}(Indicator);
var DMAIndicator =
/*#__PURE__*/
function (_Indicator7) {
  _inherits(DMAIndicator, _Indicator7);

  function DMAIndicator() {
    var _this7;

    _classCallCheck(this, DMAIndicator);

    _this7 = _possibleConstructorReturn(this, _getPrototypeOf(DMAIndicator).call(this));
    var N1 = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("N1", 2, 60, 10);
    var N2 = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("N2", 2, 250, 50);
    var M = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("M", 2, 100, 10);

    _this7.addParameter(N1);

    _this7.addParameter(N2);

    _this7.addParameter(M);

    var DIF = new __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */]("DIF", new __WEBPACK_IMPORTED_MODULE_0__exprs__["F" /* SubExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["t" /* MaExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["e" /* CloseExpr */](), N1), new __WEBPACK_IMPORTED_MODULE_0__exprs__["t" /* MaExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["e" /* CloseExpr */](), N2)));

    _this7.addOutput(DIF);

    var DIFMA = new __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */]("DIFMA", new __WEBPACK_IMPORTED_MODULE_0__exprs__["t" /* MaExpr */](DIF, M));

    _this7.addOutput(DIFMA);

    return _this7;
  }

  _createClass(DMAIndicator, [{
    key: "getName",
    value: function getName() {
      return "DMA";
    }
  }]);

  return DMAIndicator;
}(Indicator);
var TRIXIndicator =
/*#__PURE__*/
function (_Indicator8) {
  _inherits(TRIXIndicator, _Indicator8);

  function TRIXIndicator() {
    var _this8;

    _classCallCheck(this, TRIXIndicator);

    _this8 = _possibleConstructorReturn(this, _getPrototypeOf(TRIXIndicator).call(this));
    var N = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("N", 2, 100, 12);
    var M = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("M", 2, 100, 9);

    _this8.addParameter(N);

    _this8.addParameter(M);

    var MTR = new __WEBPACK_IMPORTED_MODULE_0__exprs__["d" /* AssignExpr */]("MTR", new __WEBPACK_IMPORTED_MODULE_0__exprs__["i" /* EmaExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["i" /* EmaExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["i" /* EmaExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["e" /* CloseExpr */](), N), N), N));

    _this8.addAssign(MTR);

    var TRIX = new __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */]("TRIX", new __WEBPACK_IMPORTED_MODULE_0__exprs__["v" /* MulExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["h" /* DivExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["F" /* SubExpr */](MTR, new __WEBPACK_IMPORTED_MODULE_0__exprs__["B" /* RefExpr */](MTR, new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](1))), new __WEBPACK_IMPORTED_MODULE_0__exprs__["B" /* RefExpr */](MTR, new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](1))), new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](100)));

    _this8.addOutput(TRIX);

    var MATRIX = new __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */]("MATRIX", new __WEBPACK_IMPORTED_MODULE_0__exprs__["t" /* MaExpr */](TRIX, M));

    _this8.addOutput(MATRIX);

    return _this8;
  }

  _createClass(TRIXIndicator, [{
    key: "getName",
    value: function getName() {
      return "TRIX";
    }
  }]);

  return TRIXIndicator;
}(Indicator);
var BRARIndicator =
/*#__PURE__*/
function (_Indicator9) {
  _inherits(BRARIndicator, _Indicator9);

  function BRARIndicator() {
    var _this9;

    _classCallCheck(this, BRARIndicator);

    _this9 = _possibleConstructorReturn(this, _getPrototypeOf(BRARIndicator).call(this));
    var N = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("N", 2, 120, 26);

    _this9.addParameter(N);

    var REF_CLOSE_1 = new __WEBPACK_IMPORTED_MODULE_0__exprs__["d" /* AssignExpr */]("REF_CLOSE_1", new __WEBPACK_IMPORTED_MODULE_0__exprs__["B" /* RefExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["e" /* CloseExpr */](), new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](1)));

    _this9.addAssign(REF_CLOSE_1);

    var BR = new __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */]("BR", new __WEBPACK_IMPORTED_MODULE_0__exprs__["v" /* MulExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["h" /* DivExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["G" /* SumExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["u" /* MaxExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](0), new __WEBPACK_IMPORTED_MODULE_0__exprs__["F" /* SubExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["o" /* HighExpr */](), REF_CLOSE_1)), N), new __WEBPACK_IMPORTED_MODULE_0__exprs__["G" /* SumExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["u" /* MaxExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](0), new __WEBPACK_IMPORTED_MODULE_0__exprs__["F" /* SubExpr */](REF_CLOSE_1, new __WEBPACK_IMPORTED_MODULE_0__exprs__["r" /* LowExpr */]())), N)), new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](100)));

    _this9.addOutput(BR);

    var AR = new __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */]("AR", new __WEBPACK_IMPORTED_MODULE_0__exprs__["v" /* MulExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["h" /* DivExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["G" /* SumExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["F" /* SubExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["o" /* HighExpr */](), new __WEBPACK_IMPORTED_MODULE_0__exprs__["x" /* OpenExpr */]()), N), new __WEBPACK_IMPORTED_MODULE_0__exprs__["G" /* SumExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["F" /* SubExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["x" /* OpenExpr */](), new __WEBPACK_IMPORTED_MODULE_0__exprs__["r" /* LowExpr */]()), N)), new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](100)));

    _this9.addOutput(AR);

    return _this9;
  }

  _createClass(BRARIndicator, [{
    key: "getName",
    value: function getName() {
      return "BRAR";
    }
  }]);

  return BRARIndicator;
}(Indicator);
var VRIndicator =
/*#__PURE__*/
function (_Indicator10) {
  _inherits(VRIndicator, _Indicator10);

  function VRIndicator() {
    var _this10;

    _classCallCheck(this, VRIndicator);

    _this10 = _possibleConstructorReturn(this, _getPrototypeOf(VRIndicator).call(this));
    var N = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("N", 2, 100, 26);
    var M = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("M", 2, 100, 6);

    _this10.addParameter(N);

    _this10.addParameter(M);

    var REF_CLOSE_1 = new __WEBPACK_IMPORTED_MODULE_0__exprs__["d" /* AssignExpr */]("REF_CLOSE_1", new __WEBPACK_IMPORTED_MODULE_0__exprs__["B" /* RefExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["e" /* CloseExpr */](), new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](1)));

    _this10.addAssign(REF_CLOSE_1);

    var TH = new __WEBPACK_IMPORTED_MODULE_0__exprs__["d" /* AssignExpr */]("TH", new __WEBPACK_IMPORTED_MODULE_0__exprs__["G" /* SumExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["p" /* IfExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["m" /* GtExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["e" /* CloseExpr */](), REF_CLOSE_1), new __WEBPACK_IMPORTED_MODULE_0__exprs__["H" /* VolumeExpr */](), new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](0)), N));

    _this10.addAssign(TH);

    var TL = new __WEBPACK_IMPORTED_MODULE_0__exprs__["d" /* AssignExpr */]("TL", new __WEBPACK_IMPORTED_MODULE_0__exprs__["G" /* SumExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["p" /* IfExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["s" /* LtExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["e" /* CloseExpr */](), REF_CLOSE_1), new __WEBPACK_IMPORTED_MODULE_0__exprs__["H" /* VolumeExpr */](), new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](0)), N));

    _this10.addAssign(TL);

    var TQ = new __WEBPACK_IMPORTED_MODULE_0__exprs__["d" /* AssignExpr */]("TQ", new __WEBPACK_IMPORTED_MODULE_0__exprs__["G" /* SumExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["p" /* IfExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["j" /* EqExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["e" /* CloseExpr */](), REF_CLOSE_1), new __WEBPACK_IMPORTED_MODULE_0__exprs__["H" /* VolumeExpr */](), new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](0)), N));

    _this10.addAssign(TQ);

    var VR = new __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */]("VR", new __WEBPACK_IMPORTED_MODULE_0__exprs__["v" /* MulExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["h" /* DivExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["b" /* AddExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["v" /* MulExpr */](TH, new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](2)), TQ), new __WEBPACK_IMPORTED_MODULE_0__exprs__["b" /* AddExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["v" /* MulExpr */](TL, new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](2)), TQ)), new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](100)));

    _this10.addOutput(VR);

    var MAVR = new __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */]("MAVR", new __WEBPACK_IMPORTED_MODULE_0__exprs__["t" /* MaExpr */](VR, M));

    _this10.addOutput(MAVR);

    return _this10;
  }

  _createClass(VRIndicator, [{
    key: "getName",
    value: function getName() {
      return "VR";
    }
  }]);

  return VRIndicator;
}(Indicator);
var OBVIndicator =
/*#__PURE__*/
function (_Indicator11) {
  _inherits(OBVIndicator, _Indicator11);

  function OBVIndicator() {
    var _this11;

    _classCallCheck(this, OBVIndicator);

    _this11 = _possibleConstructorReturn(this, _getPrototypeOf(OBVIndicator).call(this));
    var M = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("M", 2, 100, 30);

    _this11.addParameter(M);

    var REF_CLOSE_1 = new __WEBPACK_IMPORTED_MODULE_0__exprs__["d" /* AssignExpr */]("REF_CLOSE_1", new __WEBPACK_IMPORTED_MODULE_0__exprs__["B" /* RefExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["e" /* CloseExpr */](), new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](1)));

    _this11.addAssign(REF_CLOSE_1);

    var VA = new __WEBPACK_IMPORTED_MODULE_0__exprs__["d" /* AssignExpr */]("VA", new __WEBPACK_IMPORTED_MODULE_0__exprs__["p" /* IfExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["m" /* GtExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["e" /* CloseExpr */](), REF_CLOSE_1), new __WEBPACK_IMPORTED_MODULE_0__exprs__["H" /* VolumeExpr */](), new __WEBPACK_IMPORTED_MODULE_0__exprs__["w" /* NegExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["H" /* VolumeExpr */]())));

    _this11.addAssign(VA);

    var OBV = new __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */]("OBV", new __WEBPACK_IMPORTED_MODULE_0__exprs__["G" /* SumExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["p" /* IfExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["j" /* EqExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["e" /* CloseExpr */](), REF_CLOSE_1), new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](0), VA), new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](0)));

    _this11.addOutput(OBV);

    var MAOBV = new __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */]("MAOBV", new __WEBPACK_IMPORTED_MODULE_0__exprs__["t" /* MaExpr */](OBV, M));

    _this11.addOutput(MAOBV);

    return _this11;
  }

  _createClass(OBVIndicator, [{
    key: "getName",
    value: function getName() {
      return "OBV";
    }
  }]);

  return OBVIndicator;
}(Indicator);
var EMVIndicator =
/*#__PURE__*/
function (_Indicator12) {
  _inherits(EMVIndicator, _Indicator12);

  function EMVIndicator() {
    var _this12;

    _classCallCheck(this, EMVIndicator);

    _this12 = _possibleConstructorReturn(this, _getPrototypeOf(EMVIndicator).call(this));
    var N = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("N", 2, 90, 14);
    var M = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("M", 2, 60, 9);

    _this12.addParameter(N);

    _this12.addParameter(M);

    var VOLUME = new __WEBPACK_IMPORTED_MODULE_0__exprs__["d" /* AssignExpr */]("VOLUME", new __WEBPACK_IMPORTED_MODULE_0__exprs__["h" /* DivExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["t" /* MaExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["H" /* VolumeExpr */](), N), new __WEBPACK_IMPORTED_MODULE_0__exprs__["H" /* VolumeExpr */]()));

    _this12.addAssign(VOLUME);

    var MID = new __WEBPACK_IMPORTED_MODULE_0__exprs__["d" /* AssignExpr */]("MID", new __WEBPACK_IMPORTED_MODULE_0__exprs__["v" /* MulExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["h" /* DivExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["F" /* SubExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["b" /* AddExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["o" /* HighExpr */](), new __WEBPACK_IMPORTED_MODULE_0__exprs__["r" /* LowExpr */]()), new __WEBPACK_IMPORTED_MODULE_0__exprs__["B" /* RefExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["b" /* AddExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["o" /* HighExpr */](), new __WEBPACK_IMPORTED_MODULE_0__exprs__["r" /* LowExpr */]()), new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](1))), new __WEBPACK_IMPORTED_MODULE_0__exprs__["b" /* AddExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["o" /* HighExpr */](), new __WEBPACK_IMPORTED_MODULE_0__exprs__["r" /* LowExpr */]())), new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](100)));

    _this12.addAssign(MID);

    var EMV = new __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */]("EMV", new __WEBPACK_IMPORTED_MODULE_0__exprs__["t" /* MaExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["h" /* DivExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["v" /* MulExpr */](MID, new __WEBPACK_IMPORTED_MODULE_0__exprs__["v" /* MulExpr */](VOLUME, new __WEBPACK_IMPORTED_MODULE_0__exprs__["F" /* SubExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["o" /* HighExpr */](), new __WEBPACK_IMPORTED_MODULE_0__exprs__["r" /* LowExpr */]()))), new __WEBPACK_IMPORTED_MODULE_0__exprs__["t" /* MaExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["F" /* SubExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["o" /* HighExpr */](), new __WEBPACK_IMPORTED_MODULE_0__exprs__["r" /* LowExpr */]()), N)), N));

    _this12.addOutput(EMV);

    var MAEMV = new __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */]("MAEMV", new __WEBPACK_IMPORTED_MODULE_0__exprs__["t" /* MaExpr */](EMV, M));

    _this12.addOutput(MAEMV);

    return _this12;
  }

  _createClass(EMVIndicator, [{
    key: "getName",
    value: function getName() {
      return "EMV";
    }
  }]);

  return EMVIndicator;
}(Indicator);
var RSIIndicator =
/*#__PURE__*/
function (_Indicator13) {
  _inherits(RSIIndicator, _Indicator13);

  function RSIIndicator() {
    var _this13;

    _classCallCheck(this, RSIIndicator);

    _this13 = _possibleConstructorReturn(this, _getPrototypeOf(RSIIndicator).call(this));
    var N1 = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("N1", 2, 120, 6);
    var N2 = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("N2", 2, 250, 12);
    var N3 = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("N3", 2, 500, 24);

    _this13.addParameter(N1);

    _this13.addParameter(N2);

    _this13.addParameter(N3);

    var LC = new __WEBPACK_IMPORTED_MODULE_0__exprs__["d" /* AssignExpr */]("LC", new __WEBPACK_IMPORTED_MODULE_0__exprs__["B" /* RefExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["e" /* CloseExpr */](), new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](1)));

    _this13.addAssign(LC);

    var CLOSE_LC = new __WEBPACK_IMPORTED_MODULE_0__exprs__["d" /* AssignExpr */]("CLOSE_LC", new __WEBPACK_IMPORTED_MODULE_0__exprs__["F" /* SubExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["e" /* CloseExpr */](), LC));

    _this13.addAssign(CLOSE_LC);

    _this13.addOutput(new __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */]("RSI1", new __WEBPACK_IMPORTED_MODULE_0__exprs__["v" /* MulExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["h" /* DivExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["D" /* SmaExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["u" /* MaxExpr */](CLOSE_LC, new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](0)), N1, new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](1)), new __WEBPACK_IMPORTED_MODULE_0__exprs__["D" /* SmaExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["a" /* AbsExpr */](CLOSE_LC), N1, new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](1))), new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](100))));

    _this13.addOutput(new __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */]("RSI2", new __WEBPACK_IMPORTED_MODULE_0__exprs__["v" /* MulExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["h" /* DivExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["D" /* SmaExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["u" /* MaxExpr */](CLOSE_LC, new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](0)), N2, new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](1)), new __WEBPACK_IMPORTED_MODULE_0__exprs__["D" /* SmaExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["a" /* AbsExpr */](CLOSE_LC), N2, new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](1))), new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](100))));

    _this13.addOutput(new __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */]("RSI3", new __WEBPACK_IMPORTED_MODULE_0__exprs__["v" /* MulExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["h" /* DivExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["D" /* SmaExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["u" /* MaxExpr */](CLOSE_LC, new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](0)), N3, new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](1)), new __WEBPACK_IMPORTED_MODULE_0__exprs__["D" /* SmaExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["a" /* AbsExpr */](CLOSE_LC), N3, new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](1))), new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](100))));

    return _this13;
  }

  _createClass(RSIIndicator, [{
    key: "getName",
    value: function getName() {
      return "RSI";
    }
  }]);

  return RSIIndicator;
}(Indicator);
var WRIndicator =
/*#__PURE__*/
function (_Indicator14) {
  _inherits(WRIndicator, _Indicator14);

  function WRIndicator() {
    var _this14;

    _classCallCheck(this, WRIndicator);

    _this14 = _possibleConstructorReturn(this, _getPrototypeOf(WRIndicator).call(this));
    var N = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("N", 2, 100, 10);
    var N1 = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("N1", 2, 100, 6);

    _this14.addParameter(N);

    _this14.addParameter(N1);

    var HHV = new __WEBPACK_IMPORTED_MODULE_0__exprs__["d" /* AssignExpr */]("HHV", new __WEBPACK_IMPORTED_MODULE_0__exprs__["n" /* HhvExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["o" /* HighExpr */](), N));

    _this14.addAssign(HHV);

    var HHV1 = new __WEBPACK_IMPORTED_MODULE_0__exprs__["d" /* AssignExpr */]("HHV1", new __WEBPACK_IMPORTED_MODULE_0__exprs__["n" /* HhvExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["o" /* HighExpr */](), N1));

    _this14.addAssign(HHV1);

    var LLV = new __WEBPACK_IMPORTED_MODULE_0__exprs__["d" /* AssignExpr */]("LLV", new __WEBPACK_IMPORTED_MODULE_0__exprs__["q" /* LlvExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["r" /* LowExpr */](), N));

    _this14.addAssign(LLV);

    var LLV1 = new __WEBPACK_IMPORTED_MODULE_0__exprs__["d" /* AssignExpr */]("LLV1", new __WEBPACK_IMPORTED_MODULE_0__exprs__["q" /* LlvExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["r" /* LowExpr */](), N1));

    _this14.addAssign(LLV1);

    var WR1 = new __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */]("WR1", new __WEBPACK_IMPORTED_MODULE_0__exprs__["v" /* MulExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["h" /* DivExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["F" /* SubExpr */](HHV, new __WEBPACK_IMPORTED_MODULE_0__exprs__["e" /* CloseExpr */]()), new __WEBPACK_IMPORTED_MODULE_0__exprs__["F" /* SubExpr */](HHV, LLV)), new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](100)));

    _this14.addOutput(WR1);

    var WR2 = new __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */]("WR2", new __WEBPACK_IMPORTED_MODULE_0__exprs__["v" /* MulExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["h" /* DivExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["F" /* SubExpr */](HHV1, new __WEBPACK_IMPORTED_MODULE_0__exprs__["e" /* CloseExpr */]()), new __WEBPACK_IMPORTED_MODULE_0__exprs__["F" /* SubExpr */](HHV1, LLV1)), new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](100)));

    _this14.addOutput(WR2);

    return _this14;
  }

  _createClass(WRIndicator, [{
    key: "getName",
    value: function getName() {
      return "WR";
    }
  }]);

  return WRIndicator;
}(Indicator);
var SARIndicator =
/*#__PURE__*/
function (_Indicator15) {
  _inherits(SARIndicator, _Indicator15);

  function SARIndicator() {
    var _this15;

    _classCallCheck(this, SARIndicator);

    _this15 = _possibleConstructorReturn(this, _getPrototypeOf(SARIndicator).call(this));
    var N = new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](4);
    var MIN = new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](2);
    var STEP = new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](2);
    var MAX = new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](20);

    _this15.addOutput(new __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */]("SAR", new __WEBPACK_IMPORTED_MODULE_0__exprs__["C" /* SarExpr */](N, MIN, STEP, MAX), __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */].outputStyle.SARPoint));

    return _this15;
  }

  _createClass(SARIndicator, [{
    key: "getName",
    value: function getName() {
      return "SAR";
    }
  }]);

  return SARIndicator;
}(Indicator);
var KDJIndicator =
/*#__PURE__*/
function (_Indicator16) {
  _inherits(KDJIndicator, _Indicator16);

  function KDJIndicator() {
    var _this16;

    _classCallCheck(this, KDJIndicator);

    _this16 = _possibleConstructorReturn(this, _getPrototypeOf(KDJIndicator).call(this));
    var N = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("N", 2, 90, 9);
    var M1 = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("M1", 2, 30, 3);
    var M2 = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("M2", 2, 30, 3);

    _this16.addParameter(N);

    _this16.addParameter(M1);

    _this16.addParameter(M2);

    var HHV = new __WEBPACK_IMPORTED_MODULE_0__exprs__["d" /* AssignExpr */]("HHV", new __WEBPACK_IMPORTED_MODULE_0__exprs__["n" /* HhvExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["o" /* HighExpr */](), N));

    _this16.addAssign(HHV);

    var LLV = new __WEBPACK_IMPORTED_MODULE_0__exprs__["d" /* AssignExpr */]("LLV", new __WEBPACK_IMPORTED_MODULE_0__exprs__["q" /* LlvExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["r" /* LowExpr */](), N));

    _this16.addAssign(LLV);

    var RSV = new __WEBPACK_IMPORTED_MODULE_0__exprs__["d" /* AssignExpr */]("RSV", new __WEBPACK_IMPORTED_MODULE_0__exprs__["v" /* MulExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["h" /* DivExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["F" /* SubExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["e" /* CloseExpr */](), LLV), new __WEBPACK_IMPORTED_MODULE_0__exprs__["F" /* SubExpr */](HHV, LLV)), new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](100)));

    _this16.addAssign(RSV);

    var K = new __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */]("K", new __WEBPACK_IMPORTED_MODULE_0__exprs__["D" /* SmaExpr */](RSV, M1, new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](1)));

    _this16.addOutput(K);

    var D = new __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */]("D", new __WEBPACK_IMPORTED_MODULE_0__exprs__["D" /* SmaExpr */](K, M2, new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](1)));

    _this16.addOutput(D);

    var J = new __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */]("J", new __WEBPACK_IMPORTED_MODULE_0__exprs__["F" /* SubExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["v" /* MulExpr */](K, new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](3)), new __WEBPACK_IMPORTED_MODULE_0__exprs__["v" /* MulExpr */](D, new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](2))));

    _this16.addOutput(J);

    return _this16;
  }

  _createClass(KDJIndicator, [{
    key: "getName",
    value: function getName() {
      return "KDJ";
    }
  }]);

  return KDJIndicator;
}(Indicator);
var ROCIndicator =
/*#__PURE__*/
function (_Indicator17) {
  _inherits(ROCIndicator, _Indicator17);

  function ROCIndicator() {
    var _this17;

    _classCallCheck(this, ROCIndicator);

    _this17 = _possibleConstructorReturn(this, _getPrototypeOf(ROCIndicator).call(this));
    var N = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("N", 2, 120, 12);
    var M = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("M", 2, 60, 6);

    _this17.addParameter(N);

    _this17.addParameter(M);

    var REF_CLOSE_N = new __WEBPACK_IMPORTED_MODULE_0__exprs__["d" /* AssignExpr */]("REF_CLOSE_N", new __WEBPACK_IMPORTED_MODULE_0__exprs__["B" /* RefExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["e" /* CloseExpr */](), N));

    _this17.addAssign(REF_CLOSE_N);

    var ROC = new __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */]("ROC", new __WEBPACK_IMPORTED_MODULE_0__exprs__["v" /* MulExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["h" /* DivExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["F" /* SubExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["e" /* CloseExpr */](), REF_CLOSE_N), REF_CLOSE_N), new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](100)));

    _this17.addOutput(ROC);

    var MAROC = new __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */]("MAROC", new __WEBPACK_IMPORTED_MODULE_0__exprs__["t" /* MaExpr */](ROC, M));

    _this17.addOutput(MAROC);

    return _this17;
  }

  _createClass(ROCIndicator, [{
    key: "getName",
    value: function getName() {
      return "ROC";
    }
  }]);

  return ROCIndicator;
}(Indicator);
var MTMIndicator =
/*#__PURE__*/
function (_Indicator18) {
  _inherits(MTMIndicator, _Indicator18);

  function MTMIndicator() {
    var _this18;

    _classCallCheck(this, MTMIndicator);

    _this18 = _possibleConstructorReturn(this, _getPrototypeOf(MTMIndicator).call(this));
    var N = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("N", 2, 120, 12);
    var M = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("M", 2, 60, 6);

    _this18.addParameter(N);

    _this18.addParameter(M);

    var MTM = new __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */]("MTM", new __WEBPACK_IMPORTED_MODULE_0__exprs__["F" /* SubExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["e" /* CloseExpr */](), new __WEBPACK_IMPORTED_MODULE_0__exprs__["B" /* RefExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["e" /* CloseExpr */](), N)));

    _this18.addOutput(MTM);

    var MTMMA = new __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */]("MTMMA", new __WEBPACK_IMPORTED_MODULE_0__exprs__["t" /* MaExpr */](MTM, M));

    _this18.addOutput(MTMMA);

    return _this18;
  }

  _createClass(MTMIndicator, [{
    key: "getName",
    value: function getName() {
      return "MTM";
    }
  }]);

  return MTMIndicator;
}(Indicator);
var BOLLIndicator =
/*#__PURE__*/
function (_Indicator19) {
  _inherits(BOLLIndicator, _Indicator19);

  function BOLLIndicator() {
    var _this19;

    _classCallCheck(this, BOLLIndicator);

    _this19 = _possibleConstructorReturn(this, _getPrototypeOf(BOLLIndicator).call(this));
    var N = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("N", 2, 120, 20);

    _this19.addParameter(N);

    var STD_CLOSE_N = new __WEBPACK_IMPORTED_MODULE_0__exprs__["d" /* AssignExpr */]("STD_CLOSE_N", new __WEBPACK_IMPORTED_MODULE_0__exprs__["E" /* StdExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["e" /* CloseExpr */](), N));

    _this19.addAssign(STD_CLOSE_N);

    var BOLL = new __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */]("BOLL", new __WEBPACK_IMPORTED_MODULE_0__exprs__["t" /* MaExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["e" /* CloseExpr */](), N));

    _this19.addOutput(BOLL);

    var UB = new __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */]("UB", new __WEBPACK_IMPORTED_MODULE_0__exprs__["b" /* AddExpr */](BOLL, new __WEBPACK_IMPORTED_MODULE_0__exprs__["v" /* MulExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](2), STD_CLOSE_N)));

    _this19.addOutput(UB);

    var LB = new __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */]("LB", new __WEBPACK_IMPORTED_MODULE_0__exprs__["F" /* SubExpr */](BOLL, new __WEBPACK_IMPORTED_MODULE_0__exprs__["v" /* MulExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](2), STD_CLOSE_N)));

    _this19.addOutput(LB);

    return _this19;
  }

  _createClass(BOLLIndicator, [{
    key: "getName",
    value: function getName() {
      return "BOLL";
    }
  }]);

  return BOLLIndicator;
}(Indicator);
var PSYIndicator =
/*#__PURE__*/
function (_Indicator20) {
  _inherits(PSYIndicator, _Indicator20);

  function PSYIndicator() {
    var _this20;

    _classCallCheck(this, PSYIndicator);

    _this20 = _possibleConstructorReturn(this, _getPrototypeOf(PSYIndicator).call(this));
    var N = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("N", 2, 100, 12);
    var M = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("M", 2, 100, 6);

    _this20.addParameter(N);

    _this20.addParameter(M);

    var PSY = new __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */]("PSY", new __WEBPACK_IMPORTED_MODULE_0__exprs__["v" /* MulExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["h" /* DivExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["g" /* CountExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["m" /* GtExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["e" /* CloseExpr */](), new __WEBPACK_IMPORTED_MODULE_0__exprs__["B" /* RefExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["e" /* CloseExpr */](), new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](1))), N), N), new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](100)));

    _this20.addOutput(PSY);

    var PSYMA = new __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */]("PSYMA", new __WEBPACK_IMPORTED_MODULE_0__exprs__["t" /* MaExpr */](PSY, M));

    _this20.addOutput(PSYMA);

    return _this20;
  }

  _createClass(PSYIndicator, [{
    key: "getName",
    value: function getName() {
      return "PSY";
    }
  }]);

  return PSYIndicator;
}(Indicator);
var STOCHRSIIndicator =
/*#__PURE__*/
function (_Indicator21) {
  _inherits(STOCHRSIIndicator, _Indicator21);

  function STOCHRSIIndicator() {
    var _this21;

    _classCallCheck(this, STOCHRSIIndicator);

    _this21 = _possibleConstructorReturn(this, _getPrototypeOf(STOCHRSIIndicator).call(this));

    _this21.getName = function () {
      return "StochRSI";
    };

    var N = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("N", 3, 100, 14);
    var M = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("M", 3, 100, 14);
    var P1 = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("P1", 2, 50, 3);
    var P2 = new __WEBPACK_IMPORTED_MODULE_0__exprs__["z" /* ParameterExpr */]("P2", 2, 50, 3);

    _this21.addParameter(N);

    _this21.addParameter(M);

    _this21.addParameter(P1);

    _this21.addParameter(P2);

    var LC = new __WEBPACK_IMPORTED_MODULE_0__exprs__["d" /* AssignExpr */]("LC", new __WEBPACK_IMPORTED_MODULE_0__exprs__["B" /* RefExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["e" /* CloseExpr */](), new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](1)));

    _this21.addAssign(LC);

    var CLOSE_LC = new __WEBPACK_IMPORTED_MODULE_0__exprs__["d" /* AssignExpr */]("CLOSE_LC", new __WEBPACK_IMPORTED_MODULE_0__exprs__["F" /* SubExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["e" /* CloseExpr */](), LC));

    _this21.addAssign(CLOSE_LC);

    var RSI = new __WEBPACK_IMPORTED_MODULE_0__exprs__["d" /* AssignExpr */]("RSI", new __WEBPACK_IMPORTED_MODULE_0__exprs__["v" /* MulExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["h" /* DivExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["D" /* SmaExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["u" /* MaxExpr */](CLOSE_LC, new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](0)), N, new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](1)), new __WEBPACK_IMPORTED_MODULE_0__exprs__["D" /* SmaExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["a" /* AbsExpr */](CLOSE_LC), N, new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](1))), new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](100)));

    _this21.addAssign(RSI);

    var STOCHRSI = new __WEBPACK_IMPORTED_MODULE_0__exprs__["y" /* OutputExpr */]("STOCHRSI", new __WEBPACK_IMPORTED_MODULE_0__exprs__["v" /* MulExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["h" /* DivExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["t" /* MaExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["F" /* SubExpr */](RSI, new __WEBPACK_IMPORTED_MODULE_0__exprs__["q" /* LlvExpr */](RSI, M)), P1), new __WEBPACK_IMPORTED_MODULE_0__exprs__["t" /* MaExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["F" /* SubExpr */](new __WEBPACK_IMPORTED_MODULE_0__exprs__["n" /* HhvExpr */](RSI, M), new __WEBPACK_IMPORTED_MODULE_0__exprs__["q" /* LlvExpr */](RSI, M)), P1)), new __WEBPACK_IMPORTED_MODULE_0__exprs__["f" /* ConstExpr */](100)));

    _this21.addOutput(STOCHRSI);

    _this21.addOutput(new __WEBPACK_IMPORTED_MODULE_0__exprs__["A" /* RangeOutputExpr */]("MA", new __WEBPACK_IMPORTED_MODULE_0__exprs__["t" /* MaExpr */](STOCHRSI, P2)));

    return _this21;
  }

  return STOCHRSIIndicator;
}(Indicator);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(27);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(40)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./main.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./main.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(28);
exports = module.exports = __webpack_require__(29)(false);
// imports


// module
exports.push([module.i, "html,\r\nbody {\r\n    min-height: 100%;\r\n    margin: 0;\r\n    min-width: 100%\r\n}\r\n\r\n.chart_container {\r\n    cursor: default;\r\n    font-family: arial, sans, serif;\r\n    font-size: 12px;\r\n    height: 100%;\r\n    position: relative;\r\n    width: 100%\r\n}\r\n\r\n.chart_container div,\r\n.chart_container ul,\r\n.chart_container form {\r\n    margin: 0;\r\n    padding: 0\r\n}\r\n\r\n.chart_container a:hover {\r\n    text-decoration: none\r\n}\r\n\r\n.chart_container ul {\r\n    list-style: none;\r\n    border: 0;\r\n    margin: 0;\r\n    padding: 0\r\n}\r\n\r\n.chart_container button {\r\n    cursor: pointer\r\n}\r\n\r\n#chart_dom_elem_cache {\r\n    *font-weight: bold;\r\n    position: absolute;\r\n    visibility: hidden;\r\n    z-index: -1\r\n}\r\n\r\n#chart_toolbar {\r\n    border-bottom: 1px solid;\r\n    *font-weight: bold;\r\n    height: 29px;\r\n    position: absolute;\r\n    z-index: 3\r\n}\r\n\r\n.chart_container.dark #chart_toolbar {\r\n    background-color: #0a0a0a;\r\n    border-bottom-color: #404040\r\n}\r\n\r\n.chart_container.light #chart_toolbar {\r\n    background-color: #fff;\r\n    border-bottom-color: #afb1b3\r\n}\r\n\r\n.chart_container .chart_toolbar_sep {\r\n    float: left;\r\n    height: 100%;\r\n    width: 16px\r\n}\r\n\r\n.chart_container .chart_toolbar_minisep {\r\n    float: left;\r\n    height: 100%;\r\n    width: 4px\r\n}\r\n\r\n.chart_container .chart_dropdown {\r\n    display: inline-block;\r\n    float: left;\r\n    position: relative;\r\n    z-index: 100\r\n}\r\n\r\n.chart_container .chart_dropdown_t {\r\n    background-origin: content-box;\r\n    background-repeat: no-repeat;\r\n    border: 1px solid;\r\n    border-bottom-width: 0;\r\n    margin-top: 3px;\r\n    padding-right: 10px;\r\n    z-index: 101;\r\n    position: relative\r\n}\r\n\r\n.chart_container .chart_dropdown_t a {\r\n    display: inline-block;\r\n    padding: 3px 12px 5px 10px\r\n}\r\n\r\n.chart_container .chart_dropdown_data {\r\n    border: 1px solid;\r\n    display: none;\r\n    position: absolute;\r\n    padding: 6px 8px 6px 8px;\r\n    margin-top: -1px;\r\n    z-index: 100\r\n}\r\n\r\n.chart_container .chart_dropdown_data table {\r\n    border-collapse: collapse;\r\n    font-weight: normal;\r\n    white-space: nowrap\r\n}\r\n\r\n.chart_container .chart_dropdown_data td {\r\n    border-bottom: 1px solid;\r\n    padding: 8px 6px;\r\n    vertical-align: top\r\n}\r\n\r\n.market_chooser .chart_dropdown_data {\r\n    width: 370px\r\n}\r\n\r\n.market_chooser .chart_dropdown_data td {\r\n    border-bottom: 1px solid;\r\n    padding: 1px 6px !important;\r\n    vertical-align: top;\r\n    line-height: 24px\r\n}\r\n\r\n.market_chooser li {\r\n    float: left;\r\n    width: 80px;\r\n    height: 24px;\r\n    line-height: 24px\r\n}\r\n\r\n.chart_container .chart_dropdown_data td.marketName_ a.dark {\r\n    color: #fff\r\n}\r\n\r\n.chart_container .chart_dropdown_data td.marketName_ a.light {\r\n    color: #000\r\n}\r\n\r\n.chart_container .chart_dropdown_data table tr:last-child td {\r\n    border-bottom: 0\r\n}\r\n\r\n.chart_container .chart_dropdown_data li {\r\n    white-space: nowrap;\r\n    display: inline-block\r\n}\r\n\r\n.chart_container .chart_dropdown_data a {\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    padding: 5px 6px 5px 6px\r\n}\r\n\r\n.chart_container .chart_dropdown-hover.chart_dropdown_data {\r\n    display: block\r\n}\r\n\r\n#chart_dropdown_symbols .chart_dropdown_data td {\r\n    padding: 8px 6px 0 6px\r\n}\r\n\r\n#chart_dropdown_symbols .chart_dropdown_data li {\r\n    display: block;\r\n    height: 26px\r\n}\r\n\r\n#chart_dropdown_symbols .chart_dropdown_data a {\r\n    cursor: pointer\r\n}\r\n\r\n#chart_dropdown_themes .chart_dropdown_data td:first-child {\r\n    padding: 6px 1px 7px 6px\r\n}\r\n\r\n.chart_container.dark .chart_dropdown_t {\r\n    background-image: url(" + escape(__webpack_require__(30)) + ");\r\n    background-position: right 9px;\r\n    border-color: #0a0a0a;\r\n    color: #e5e5e5\r\n}\r\n\r\n.chart_container.dark .chart_dropdown-hover.chart_dropdown_t {\r\n    background-color: #0a0a0a;\r\n    background-image: url(" + escape(__webpack_require__(31)) + ");\r\n    background-position: right 8px;\r\n    border-color: #606060;\r\n    color: #fff\r\n}\r\n\r\n.chart_container.dark .chart_dropdown_data {\r\n    background-color: rgba(10, 10, 10, 0.8);\r\n    border-color: #606060\r\n}\r\n\r\n.chart_container.dark .chart_dropdown_data td {\r\n    border-bottom-color: #404040;\r\n    color: #e5e5e5\r\n}\r\n\r\n.chart_container.dark .chart_dropdown_data li a {\r\n    color: #1987da\r\n}\r\n\r\n.chart_container.dark .chart_dropdown_data li a:hover {\r\n    background-color: #383838\r\n}\r\n\r\n.chart_container.dark .chart_dropdown_data li a.selected {\r\n    color: #ffac00\r\n}\r\n\r\n.chart_container.light .chart_dropdown_t {\r\n    background-image: url(" + escape(__webpack_require__(32)) + ");\r\n    background-position: right 10px;\r\n    border-color: #fff;\r\n    color: #393c40\r\n}\r\n\r\n.chart_container.light .chart_dropdown-hover.chart_dropdown_t {\r\n    background-color: #fff;\r\n    background-image: url(" + escape(__webpack_require__(33)) + ");\r\n    background-position: right 9px;\r\n    border-color: #4c4f53;\r\n    color: #393c40\r\n}\r\n\r\n.chart_container.light .chart_dropdown_data {\r\n    background-color: #fff;\r\n    border-color: #4c4f53\r\n}\r\n\r\n.chart_container.light .chart_dropdown_data td {\r\n    border-bottom-color: #e4e5e6;\r\n    color: #393c40\r\n}\r\n\r\n.chart_container.light .chart_dropdown_data li a {\r\n    color: #1478c8\r\n}\r\n\r\n.chart_container.light .chart_dropdown_data a:hover {\r\n    background-color: #f4f4f4\r\n}\r\n\r\n.chart_container.light .chart_dropdown_data a.selected {\r\n    color: #f27935\r\n}\r\n\r\n.chart_container .chart_toolbar_label {\r\n    cursor: default;\r\n    display: inline-block;\r\n    float: left;\r\n    padding: 7px 4px\r\n}\r\n\r\n.chart_container.dark .chart_toolbar_label {\r\n    border-color: #232323;\r\n    color: #e5e5e5\r\n}\r\n\r\n.chart_container.light .chart_toolbar_label {\r\n    border-color: #fff;\r\n    color: #393c40\r\n}\r\n\r\n.chart_container .chart_toolbar_button {\r\n    border: 1px solid;\r\n    cursor: pointer;\r\n    float: left;\r\n    margin: 3px 2px;\r\n    padding: 3px 10px;\r\n    position: relative;\r\n    z-index: 100\r\n}\r\n\r\n.chart_container.dark .chart_toolbar_button {\r\n    border-color: #404040;\r\n    color: #e5e5e5\r\n}\r\n\r\n.chart_container.dark .chart_toolbar_button:hover {\r\n    background-color: #383838;\r\n    border-color: #606060;\r\n    color: #fff\r\n}\r\n\r\n.chart_container.dark .chart_toolbar_button.selected {\r\n    background-color: #383838;\r\n    border-color: #606060;\r\n    color: #ffac00\r\n}\r\n\r\n.chart_container.dark .chart_toolbar_button.selected:hover {\r\n    background-color: #474747;\r\n    border-color: #808080;\r\n    color: #ffac00\r\n}\r\n\r\n.chart_container.light .chart_toolbar_button {\r\n    border-color: #ccc;\r\n    color: #393c40\r\n}\r\n\r\n.chart_container.light .chart_toolbar_button:hover {\r\n    background-color: #f4f4f4;\r\n    color: #393c40\r\n}\r\n\r\n.chart_container.light .chart_toolbar_button.selected {\r\n    background-color: #f4f4f4;\r\n    border-color: #f27935;\r\n    color: #f27935\r\n}\r\n\r\n.chart_container .chart_toolbar_tabgroup {\r\n    float: left\r\n}\r\n\r\n.chart_container .chart_toolbar_tabgroup li {\r\n    display: inline-block;\r\n    padding: 4px 0;\r\n    margin: 3px 0\r\n}\r\n\r\n.chart_container .chart_toolbar_tabgroup li a {\r\n    cursor: pointer;\r\n    padding: 4px 4px\r\n}\r\n\r\n.chart_container .chart_toolbar_tabgroup li a:hover {\r\n    text-decoration: none\r\n}\r\n\r\n.chart_container.dark .chart_toolbar_tabgroup li a {\r\n    color: #1987da\r\n}\r\n\r\n.chart_container.dark .chart_toolbar_tabgroup li a:hover {\r\n    background-color: #383838\r\n}\r\n\r\n.chart_container.dark .chart_toolbar_tabgroup li a.selected {\r\n    color: #ffac00\r\n}\r\n\r\n.chart_container.light .chart_toolbar_tabgroup li a {\r\n    color: #1478c8\r\n}\r\n\r\n.chart_container.light .chart_toolbar_tabgroup li a:hover {\r\n    background-color: #f4f4f4\r\n}\r\n\r\n.chart_container.light .chart_toolbar_tabgroup li a.selected {\r\n    color: #f27935\r\n}\r\n\r\n#chart_toolbar_periods_horz {\r\n    display: inline-block;\r\n    float: left;\r\n    position: relative;\r\n    z-index: 100\r\n}\r\n\r\n#chart_toolbar_periods_vert {\r\n    float: left\r\n}\r\n\r\n.chart_container a.chart_icon {\r\n    border: 1px solid;\r\n    height: 16px;\r\n    padding: 0;\r\n    width: 16px;\r\n    box-sizing:border-box;\r\n}\r\n\r\n.chart_container a.chart_icon:hover {\r\n    border-width: 2px;\r\n}\r\n\r\n.chart_container .chart_dropdown_data a.chart_icon {\r\n    display: inline-block;\r\n    margin: 0 6px 0 6px\r\n}\r\n\r\n.chart_container a.chart_icon_theme_dark,\r\n.chart_container .chart_dropdown_data li a.chart_icon_theme_dark:hover {\r\n    background-color: #000\r\n}\r\n\r\n.chart_container a.chart_icon_theme_light,\r\n.chart_container .chart_dropdown_data li a.chart_icon_theme_light:hover {\r\n    background-color: #fff\r\n}\r\n\r\n.chart_container #chart_toolbar_theme {\r\n    float: left;\r\n    padding: 0 8px\r\n}\r\n\r\n.chart_container #chart_toolbar_theme a.chart_icon {\r\n    cursor: pointer;\r\n    float: left;\r\n    margin: 6px 4px\r\n}\r\n\r\n.chart_container #chart_select_theme td:last-child {\r\n    padding: 6px 6px 0 8px\r\n}\r\n\r\n.chart_container #chart_select_theme li {\r\n    padding: 0 4px 0 4px\r\n}\r\n\r\n.chart_container.dark a.chart_icon {\r\n    border-color: #aaa\r\n}\r\n\r\n.chart_container.dark a.chart_icon:hover {\r\n    border-color: #1987da\r\n}\r\n\r\n.chart_container.dark a.chart_icon.selected {\r\n    border-color: #ffac00\r\n}\r\n\r\n.chart_container.light a.chart_icon {\r\n    border-color: #aaa\r\n}\r\n\r\n.chart_container.light a.chart_icon.selected {\r\n    border-color: #f27935\r\n}\r\n\r\n.chart_container #chart_updated_time {\r\n    float: right;\r\n    margin: 4px 3px;\r\n    padding: 3px 10px\r\n}\r\n\r\n.chart_container.dark #chart_updated_time {\r\n    color: #e5e5e5\r\n}\r\n\r\n.chart_container.light #chart_updated_time {\r\n    color: #393c40\r\n}\r\n\r\n#chart_toolpanel {\r\n    border-right: 1px solid;\r\n    display: none;\r\n    position: absolute;\r\n    width: 32px;\r\n    z-index: 2\r\n}\r\n\r\n#chart_toolpanel .chart_toolpanel_separator {\r\n    position: relative;\r\n    height: 4px\r\n}\r\n\r\n#chart_toolpanel .chart_toolpanel_button {\r\n    position: relative;\r\n    z-index: 100\r\n}\r\n\r\n#chart_toolpanel .chart_toolpanel_icon {\r\n    background-origin: content-box;\r\n    background-repeat: no-repeat;\r\n    border: 1px solid;\r\n    cursor: pointer;\r\n    height: 16px;\r\n    margin: 1px 4px 1px 4px;\r\n    padding: 3px;\r\n    position: relative;\r\n    width: 16px;\r\n    z-index: 101\r\n}\r\n\r\n#chart_toolpanel .chart_toolpanel_tip {\r\n    border-radius: 4px;\r\n    border: 1px solid;\r\n    display: none;\r\n    *font-weight: bold;\r\n    position: absolute;\r\n    padding: 3px 6px 4px 6px;\r\n    margin-left: 36px;\r\n    margin-top: -25px;\r\n    white-space: nowrap;\r\n    z-index: 100\r\n}\r\n\r\n#chart_toolpanel .chart_toolpanel_button:hover .chart_toolpanel_tip {\r\n    display: block\r\n}\r\n\r\n.chart_container.dark #chart_toolpanel {\r\n    background-color: #0a0a0a;\r\n    border-right-color: #404040\r\n}\r\n\r\n.chart_container.dark .chart_toolpanel_icon {\r\n    background-color: #0a0a0a;\r\n    border-color: #0a0a0a\r\n}\r\n\r\n.chart_container.dark .chart_toolpanel_button:hover .chart_toolpanel_icon {\r\n    background-color: #404040;\r\n    border-color: #666\r\n}\r\n\r\n.chart_container.dark .chart_toolpanel_button.selected .chart_toolpanel_icon {\r\n    background-color: #080808;\r\n    border-color: #666\r\n}\r\n\r\n.chart_container.dark .chart_toolpanel_tip {\r\n    background-color: #ffac00;\r\n    border-color: #ffac00;\r\n    color: #0a0a0a\r\n}\r\n\r\n.chart_container.light #chart_toolpanel {\r\n    background-color: #fff;\r\n    border-right-color: #afb1b3\r\n}\r\n\r\n.chart_container.light .chart_toolpanel_icon {\r\n    background-color: #fff;\r\n    border-color: #fff\r\n}\r\n\r\n.chart_container.light .chart_toolpanel_button:hover .chart_toolpanel_icon {\r\n    background-color: #eee;\r\n    border-color: #afb1b3\r\n}\r\n\r\n.chart_container.light .chart_toolpanel_button.selected .chart_toolpanel_icon {\r\n    background-color: #f4f4f4;\r\n    border-color: #afb1b3\r\n}\r\n\r\n.chart_container.light .chart_toolpanel_tip {\r\n    background-color: #f27938;\r\n    border-color: #f27938;\r\n    color: #eee\r\n}\r\n\r\n.chart_container.dark #chart_toolpanel .chart_toolpanel_button .chart_toolpanel_icon {\r\n    background-image: url(" + escape(__webpack_require__(34)) + ")\r\n}\r\n\r\n.chart_container.dark #chart_toolpanel .chart_toolpanel_button.selected .chart_toolpanel_icon {\r\n    background-image: url(" + escape(__webpack_require__(35)) + ")\r\n}\r\n\r\n.chart_container.dark #chart_toolbar .chart_BoxSize {\r\n    background: url(" + escape(__webpack_require__(36)) + ") no-repeat;\r\n}\r\n\r\n.chart_container.light #chart_toolpanel .chart_toolpanel_button .chart_toolpanel_icon {\r\n    background-image: url(" + escape(__webpack_require__(37)) + ")\r\n}\r\n\r\n.chart_container.light #chart_toolpanel .chart_toolpanel_button.selected .chart_toolpanel_icon {\r\n    background-image: url(" + escape(__webpack_require__(38)) + ")\r\n}\r\n\r\n.chart_container.light #chart_toolbar .chart_BoxSize {\r\n    background: url(" + escape(__webpack_require__(39)) + ") no-repeat;\r\n}\r\n\r\n.chart_container #chart_toolpanel #chart_Cursor {\r\n    background-position: 0 0\r\n}\r\n\r\n.chart_container #chart_toolpanel #chart_CrossCursor {\r\n    background-position: 0 -20px\r\n}\r\n\r\n.chart_container #chart_toolpanel #chart_SegLine {\r\n    background-position: 0 -40px\r\n}\r\n\r\n.chart_container #chart_toolpanel #chart_StraightLine {\r\n    background-position: 0 -60px\r\n}\r\n\r\n.chart_container #chart_toolpanel #chart_RayLine {\r\n    background-position: 0 -100px\r\n}\r\n\r\n.chart_container #chart_toolpanel #chart_ArrowLine {\r\n    background-position: 0 -80px\r\n}\r\n\r\n.chart_container #chart_toolpanel #chart_HoriSegLine {\r\n    background-position: 0 -160px\r\n}\r\n\r\n.chart_container #chart_toolpanel #chart_HoriStraightLine {\r\n    background-position: 0 -120px\r\n}\r\n\r\n.chart_container #chart_toolpanel #chart_HoriRayLine {\r\n    background-position: 0 -140px\r\n}\r\n\r\n.chart_container #chart_toolpanel #chart_VertiStraightLine {\r\n    background-position: 0 -180px\r\n}\r\n\r\n.chart_container #chart_toolpanel #chart_PriceLine {\r\n    background-position: 0 -200px\r\n}\r\n\r\n.chart_container #chart_toolpanel #chart_TriParallelLine {\r\n    background-position: 0 -220px\r\n}\r\n\r\n.chart_container #chart_toolpanel #chart_BiParallelLine {\r\n    background-position: 0 -240px\r\n}\r\n\r\n.chart_container #chart_toolpanel #chart_BiParallelRayLine {\r\n    background-position: 0 -260px\r\n}\r\n\r\n.chart_container .chart_toolpanel_button #chart_DrawFibRetrace {\r\n    background-position: 0 -280px\r\n}\r\n\r\n.chart_container #chart_toolpanel #chart_DrawFibFans {\r\n    background-position: 0 -300px\r\n}\r\n\r\n#chart_tabbar {\r\n    border-top: 1px solid;\r\n    cursor: default;\r\n    display: none;\r\n    *font-weight: bold;\r\n    height: 22px;\r\n    overflow: hidden;\r\n    position: absolute;\r\n    z-index: 1\r\n}\r\n\r\n#chart_tabbar ul {\r\n    height: 100%;\r\n    list-style: none;\r\n    padding: 0 0 0 4px\r\n}\r\n\r\n#chart_tabbar li {\r\n    display: inline-block;\r\n    height: 100%;\r\n    margin: 0\r\n}\r\n\r\n#chart_tabbar a {\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    height: 100%;\r\n    margin: 0;\r\n    padding: 3px 4px 0 4px;\r\n    overflow: hidden\r\n}\r\n\r\n#chart_tabbar a:hover {\r\n    text-decoration: none\r\n}\r\n\r\n.chart_container.dark #chart_tabbar {\r\n    background-color: #0a0a0a;\r\n    border-top-color: #404040\r\n}\r\n\r\n.chart_container.dark #chart_tabbar a {\r\n    color: #e5e5e5\r\n}\r\n\r\n.chart_container.dark #chart_tabbar a:hover {\r\n    background-color: #383838;\r\n    color: #fff\r\n}\r\n\r\n.chart_container.dark #chart_tabbar a.selected {\r\n    color: #ffac00\r\n}\r\n\r\n.chart_container.light #chart_tabbar {\r\n    background-color: #fff;\r\n    border-top-color: #afb1b3\r\n}\r\n\r\n.chart_container.light #chart_tabbar a {\r\n    color: #393c40\r\n}\r\n\r\n.chart_container.light #chart_tabbar a:hover {\r\n    background-color: #f4f4f4;\r\n    color: #393c40\r\n}\r\n\r\n.chart_container.light #chart_tabbar a.selected {\r\n    color: #f27935\r\n}\r\n\r\n#chart_canvasGroup {\r\n    position: absolute;\r\n    z-index: 0\r\n}\r\n\r\n#chart_mainCanvas {\r\n    overflow: hidden;\r\n    position: absolute;\r\n    z-index: 0\r\n}\r\n\r\n#chart_overlayCanvas {\r\n    overflow: hidden;\r\n    position: absolute;\r\n    z-index: 2\r\n}\r\n\r\n#chart_loading {\r\n    border: 1px solid;\r\n    border-radius: 4px;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    line-height: 48px;\r\n    overflow: hidden;\r\n    position: absolute;\r\n    text-align: center;\r\n    visibility: hidden;\r\n    width: 200px;\r\n    z-index: 200\r\n}\r\n\r\n#chart_loading.activated {\r\n    visibility: visible\r\n}\r\n\r\n.chart_container.dark #chart_loading {\r\n    border-color: #aaa;\r\n    background-color: rgba(0, 0, 0, 0.6);\r\n    color: #ccc\r\n}\r\n\r\n.chart_container.light #chart_loading {\r\n    border-color: #afb1b3;\r\n    background-color: rgba(244, 244, 244, 0.8);\r\n    color: #393c40\r\n}\r\n\r\n#chart_parameter_settings {\r\n    border-radius: 4px;\r\n    border: 1px solid;\r\n    width: 640px;\r\n    position: absolute;\r\n    overflow: hidden;\r\n    visibility: hidden;\r\n    z-index: 500\r\n}\r\n\r\n#chart_parameter_settings.clicked {\r\n    visibility: visible\r\n}\r\n\r\n#chart_parameter_settings h2 {\r\n    padding: 8px 12px;\r\n    margin: 0\r\n}\r\n\r\n#chart_parameter_settings table {\r\n    border-collapse: collapse;\r\n    width: 100%\r\n}\r\n\r\n#chart_parameter_settings tr {\r\n    line-height: 32px\r\n}\r\n\r\n#chart_parameter_settings th {\r\n    text-align: right;\r\n    padding: 0 4px 0 16px\r\n}\r\n\r\n#chart_parameter_settings input {\r\n    width: 2em;\r\n    margin: 0 2px 0 2px\r\n}\r\n\r\n#chart_parameter_settings #close_settings {\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    margin: 8px auto;\r\n    padding: 5px 24px 5px 24px;\r\n    width: 84px\r\n}\r\n\r\n#chart_parameter_settings .chart_str_default {\r\n    margin-right: 24px\r\n}\r\n\r\n.chart_container.dark #chart_parameter_settings {\r\n    background-color: rgba(0, 0, 0, 0.9);\r\n    border-color: rgba(0, 0, 0, 0.9);\r\n    color: #ccc;\r\n}\r\n\r\n.chart_container.dark #chart_parameter_settings #close_settings {\r\n    background: #1887da;\r\n    color: #eee\r\n}\r\n\r\n.chart_container.light #chart_parameter_settings {\r\n    background-color: rgba(244, 244, 244, 0.8);\r\n    border-color: #afb1b3;\r\n    color: #393c40\r\n}\r\n\r\n.chart_container.light #chart_parameter_settings #close_settings {\r\n    background: #1478c8;\r\n    color: #eee\r\n}\r\n\r\n.chart_container input,\r\n.chart_container button {\r\n    border-radius: 4px;\r\n    border: 1px solid;\r\n    padding: 4px\r\n}\r\n\r\n.chart_container input[type=text] {\r\n    width: 12em\r\n}\r\n\r\n.chart_container input[type=button],\r\n.chart_container input[type=submit],\r\n.chart_container button {\r\n    font-family: arial, sans, serif;\r\n    padding: 4px 8px;\r\n    cursor: pointer\r\n}\r\n\r\n.chart_container.dark input,\r\n.chart_container.dark button {\r\n    background-color: #151515;\r\n    border-color: #333;\r\n    color: #ccc\r\n}\r\n\r\n.chart_container.light input,\r\n.chart_container.light button {\r\n    background-color: #ddd;\r\n    border-color: #ddd;\r\n    color: #222\r\n}\r\n\r\n.trade_container {\r\n    width: 250px;\r\n    height: 100%;\r\n    float: right;\r\n    z-index: 99999;\r\n    font-size: 12px;\r\n    overflow: hidden\r\n}\r\n\r\n.trade_container.dark {\r\n    background: #0a0a0a;\r\n    color: #f1f1f1\r\n}\r\n\r\n.m_righttop {\r\n    position: fixed;\r\n    top: 0;\r\n    height: 41px;\r\n    line-height: 41px;\r\n    width: 230px;\r\n    text-align: right;\r\n    padding-right: 20px;\r\n    font-size: 16px;\r\n    color: #f78d15;\r\n    font-family: Gotham, \"Helvetica Neue\", Helvetica, Arial, sans-serif\r\n}\r\n\r\n.m_righttop em {\r\n    width: 123px;\r\n    height: 28px;\r\n    background-position: 0 0;\r\n    display: block;\r\n    float: right;\r\n    margin-top: 5px\r\n}\r\n\r\n.dark .m_righttop em {\r\n    background-position: 0 0\r\n}\r\n\r\n.m_rightbot {\r\n    height: 22px;\r\n    line-height: 22px;\r\n    border-top: 1px solid #404040;\r\n    width: 230px;\r\n    text-align: right;\r\n    padding-right: 20px;\r\n    background-color: #0a0a0a;\r\n    border-bottom-color: #404040\r\n}\r\n\r\n.m_guadan {\r\n    margin-top: 29px;\r\n    overflow: hidden;\r\n    border-left: 1px solid #404040;\r\n    border-top: 1px solid #404040\r\n}\r\n\r\n.m_guadan a {\r\n    font-weight: bold;\r\n    color: #FFF;\r\n    text-decoration: none\r\n}\r\n\r\n.light .m_guadan {\r\n    margin-top: 29px;\r\n    overflow: hidden;\r\n    border-left: 1px solid #afb1b3;\r\n    border-top: 1px solid #afb1b3\r\n}\r\n\r\n#orderbook #asks,\r\n#orderbook #gasks,\r\n#orderbook #bids,\r\n#orderbook #gbids {\r\n    height: 195px;\r\n    position: relative;\r\n    display: inline-block;\r\n    overflow: hidden\r\n}\r\n\r\n.symbol-title {\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    height: 16px;\r\n    line-height: 16px;\r\n    font-family: Arial, sans, serif;\r\n    padding: 5px\r\n}\r\n\r\n.symbol-title .dark {\r\n    color: #6BF\r\n}\r\n\r\n.symbol-title .infoDepth {\r\n    margin-left: 8px;\r\n    color: #f78d15\r\n}\r\n\r\n.symbol-title a:hover {\r\n    text-decoration: underline\r\n}\r\n\r\n#asks,\r\n#bids {\r\n    width: 150px\r\n}\r\n\r\n#orderbook {\r\n    padding-left: 3px;\r\n    border-bottom: 1px solid #222;\r\n    padding-bottom: 2px;\r\n    margin-left: 5px;\r\n    margin-bottom: 2px\r\n}\r\n\r\n#orderbook .table {\r\n    position: absolute;\r\n    border-collapse: collapse;\r\n    padding: 0;\r\n    margin: 0\r\n}\r\n\r\n#gasks .table,\r\n#asks .table {\r\n    bottom: 0\r\n}\r\n\r\n#orderbook .table .row {\r\n    padding: 0;\r\n    margin: 0;\r\n    height: 13px;\r\n    line-height: 13px;\r\n    font-family: Consolas, monospace\r\n}\r\n\r\n#orderbook .table .row {\r\n    line-height: 13px\r\n}\r\n\r\n#orderbook .table .g {\r\n    color: #666\r\n}\r\n\r\n#gasks,\r\n#gbids {\r\n    width: 80px\r\n}\r\n\r\n#gasks .amount,\r\n#gbids .amount {\r\n    float: right\r\n}\r\n\r\n#gasks .price,\r\n#gbids .price {\r\n    float: left;\r\n    text-align: right\r\n}\r\n\r\n.price {\r\n    margin-right: 10px\r\n}\r\n\r\n.price h {\r\n    visibility: hidden\r\n}\r\n\r\n.price g,\r\n.amount g {\r\n    color: #666\r\n}\r\n\r\n#price {\r\n    text-align: center;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    height: 25px;\r\n    line-height: 25px\r\n}\r\n\r\n.trade_container .green {\r\n    color: #0F0\r\n}\r\n\r\n.trade_container .red {\r\n    color: #F00\r\n}\r\n\r\n.trade_container.dark #orderbook div.table div.remove g,\r\n.trade_container.dark #orderbook div.table div.remove span {\r\n    color: #444\r\n}\r\n\r\n.trade_container.light #orderbook div.table div.remove g,\r\n.trade_container.light #orderbook div.table div.remove span {\r\n    color: #ddd\r\n}\r\n\r\n.trade_container.dark #orderbook div.table div.add {\r\n    display: none;\r\n    background-color: rgba(238, 238, 238, 0.2)\r\n}\r\n\r\n.trade_container.light #orderbook div.table div.add {\r\n    display: none;\r\n    background-color: rgba(100, 100, 100, 0.2)\r\n}\r\n\r\n#trades {\r\n    overflow-y: auto;\r\n    text-align: left;\r\n    color: #666;\r\n    padding-top: 5px\r\n}\r\n\r\n.trade_container.light {\r\n    background: #fff;\r\n    border-left: 1px solid #afb1b3;\r\n    color: #000\r\n}\r\n\r\n.trade_container.light .m_righttop em {\r\n    background-position: 0 -32px\r\n}\r\n\r\n.trade_container.light .m_righttop {\r\n    position: fixed;\r\n    top: 0;\r\n    height: 40px;\r\n    line-height: 40px;\r\n    background: #FFF;\r\n    width: 230px;\r\n    border-bottom: 1px solid #afb1b3;\r\n    text-align: right;\r\n    padding-right: 20px\r\n}\r\n\r\n.trade_container.light #trades.trades table {\r\n    color: #333\r\n}\r\n\r\n.trade_container.light #trades.trades .v {\r\n    color: #333\r\n}\r\n\r\n.trade_container.light #trades.trades .v g {\r\n    color: #333\r\n}\r\n\r\n.trade_container.light .m_rightbot {\r\n    background: #fff;\r\n    border-top: 1px solid #afb1b3\r\n}\r\n\r\n.trade_container.light #orderbook {\r\n    border-bottom: 1px solid #afb1b3\r\n}\r\n\r\n.trades_list {\r\n    padding-left: 25px\r\n}\r\n\r\n.trades_list ul {\r\n    width: 200px;\r\n    height: 14px;\r\n    line-height: 14px;\r\n    text-align: left;\r\n    list-style: none;\r\n    clear: both;\r\n    zoom: 1;\r\n    margin: 0;\r\n    padding: 0\r\n}\r\n\r\n.trades_list ul li {\r\n    height: 14px;\r\n    line-height: 14px;\r\n    color: #999;\r\n    font-size: 12px;\r\n    list-style: none;\r\n    float: left;\r\n    *display: inline;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: Consolas, monospace\r\n}\r\n\r\n.trades_list ul li.tm {\r\n    width: 62px;\r\n    color: #999\r\n}\r\n\r\n.trades_list ul li.pr-green {\r\n    width: 65px;\r\n    color: #6c6\r\n}\r\n\r\n.trades_list ul li.pr-red {\r\n    width: 65px;\r\n    color: #c66\r\n}\r\n\r\n.trades_list ul li.vl {\r\n    width: 60px;\r\n    color: #ccc\r\n}\r\n\r\n.trades_list ul li.vl g {\r\n    color: #666\r\n}\r\n\r\n.trade_container.dark .trades_list ul.newul {\r\n    display: none;\r\n    background-color: rgba(238, 238, 238, 0.2)\r\n}\r\n\r\n.trade_container.light .trades_list ul.newul {\r\n    display: none;\r\n    background-color: rgba(100, 100, 100, 0.2)\r\n}\r\n\r\n.light .trades_list ul li.tm {\r\n    color: #333\r\n}\r\n\r\n.light .trades_list ul li.pr-green {\r\n    color: #6c6\r\n}\r\n\r\n.light .trades_list ul li.pr-red {\r\n    color: #c66\r\n}\r\n\r\n.light .trades_list ul li.vl {\r\n    color: #333\r\n}\r\n\r\n.light .trades_list ul li.vl g {\r\n    color: #333\r\n}\r\n\r\n.container .nav {\r\n    margin: 0;\r\n    list-style: none;\r\n    padding: 0 0 0 3px;\r\n    height: 41px\r\n}\r\n\r\n.container .nav li {\r\n    display: inline-block;\r\n    margin-right: 9px\r\n}\r\n\r\n.container a {\r\n    text-decoration: none;\r\n    color: #6BF;\r\n    font-family: Arial, sans, serif\r\n}\r\n\r\n.container a:hover {\r\n    text-decoration: underline\r\n}\r\n\r\n.container a.active {\r\n    color: #FC9\r\n}\r\n\r\n.container span {\r\n    margin-left: 3px;\r\n    font-family: Consolas, monospace;\r\n    color: #ccc\r\n}\r\n\r\n.light .container span {\r\n    color: #333\r\n}\r\n\r\n.light .container a {\r\n    text-decoration: none;\r\n    color: #1478c8;\r\n    font-family: Arial, sans, serif\r\n}\r\n\r\n.chart_BoxSize {\r\n    width: 20px;\r\n    height: 20px\r\n}\r\n", ""]);

// exports


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 29 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAFCAYAAABmWJ3mAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAJn2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICAgICAgICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICAgICAgICAgIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyI+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj42PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT42NTUzNTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+NTwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDoxZjBjZTZmNC1lNGU1LWM4NDctYjI5OC00Y2Q2NGJjMGRjMDY8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxNC0xMi0wM1QxNzo1Njo1MiswODowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDozNjIzYmJlYi1iNGU2LWNhNDktOTRjZi05MTIyY2Q1Y2NiZTk8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOjM2MjNiYmViLWI0ZTYtY2E0OS05NGNmLTkxMjJjZDVjY2JlOTwveG1wTU06SW5zdGFuY2VJRD4KICAgICAgICAgPHhtcE1NOkRvY3VtZW50SUQ+eG1wLmRpZDo2QzE5MkVEOTY1N0UxMUU0QUUwMkE5RkYyNDYyQTBBODwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkRlcml2ZWRGcm9tIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgPHN0UmVmOmluc3RhbmNlSUQ+eG1wLmlpZDo4MzE3OTEwZi1kOTE5LTY4NDAtYWVhOS0zNzI5NWE2NGI1NmU8L3N0UmVmOmluc3RhbmNlSUQ+CiAgICAgICAgICAgIDxzdFJlZjpkb2N1bWVudElEPnhtcC5kaWQ6MWYwY2U2ZjQtZTRlNS1jODQ3LWIyOTgtNGNkNjRiYzBkYzA2PC9zdFJlZjpkb2N1bWVudElEPgogICAgICAgICA8L3htcE1NOkRlcml2ZWRGcm9tPgogICAgICAgICA8eG1wOk1ldGFkYXRhRGF0ZT4yMDE0LTEyLTAzVDE3OjU2OjUyKzA4OjAwPC94bXA6TWV0YWRhdGFEYXRlPgogICAgICAgICA8eG1wOkNyZWF0ZURhdGU+MjAxNC0xMi0wM1QxNzo1NjoyOCswODowMDwveG1wOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDE0LTEyLTAzVDE3OjU2OjUyKzA4OjAwPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgqC9xe+AAAAWUlEQVQIHWO8cOHCFgYGBm8gRgZbmRgZGXOBIj+QRH8wMTHlMenr69////9/J0wCxNbT07vHCBK4f/8+x8ePH6+B2Pz8/FqKioo/mEAcEAOoEmRkHogNEgMA0qYfb8X3frQAAAAASUVORK5CYII="

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAFCAYAAABmWJ3mAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA21pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxZjBjZTZmNC1lNGU1LWM4NDctYjI5OC00Y2Q2NGJjMGRjMDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0E5Qjc0ODc3QUQ0MTFFNDhCN0ZBNEVBQTM1QTBFNjgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0E5Qjc0ODY3QUQ0MTFFNDhCN0ZBNEVBQTM1QTBFNjgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM2MjNiYmViLWI0ZTYtY2E0OS05NGNmLTkxMjJjZDVjY2JlOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2QzE5MkVEOTY1N0UxMUU0QUUwMkE5RkYyNDYyQTBBOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvrZrC8AAABOSURBVHjaYvz//z8DCFy8eNEbSDHq6+tvAfEZQRJAQQ4g+xoDBGgBJX8wQTkVQKwIxRVgHRcuXFCEquaAKvoBxNogHZORBBmg7EkAAQYAImEV+46peUgAAAAASUVORK5CYII="

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAFCAYAAABmWJ3mAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxZjBjZTZmNC1lNGU1LWM4NDctYjI5OC00Y2Q2NGJjMGRjMDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkMxOTJFRDk2NTdFMTFFNEFFMDJBOUZGMjQ2MkEwQTgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkMxOTJFRDg2NTdFMTFFNEFFMDJBOUZGMjQ2MkEwQTgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjgzMTc5MTBmLWQ5MTktNjg0MC1hZWE5LTM3Mjk1YTY0YjU2ZSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxZjBjZTZmNC1lNGU1LWM4NDctYjI5OC00Y2Q2NGJjMGRjMDYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5MkIK1AAAAPklEQVR42mJ0CUvewsDA4M2ACrYyAYlcIP6BJAhi54Ek7gNxJ5IEiH2PCcrpgCq4D2UzsCBpBxnJCDMWIMAAVuANgw9cJ2UAAAAASUVORK5CYII="

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAFCAYAAABmWJ3mAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADcWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMTQgNzkuMTUxNDgxLCAyMDEzLzAzLzEzLTEyOjA5OjE1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjFmMGNlNmY0LWU0ZTUtYzg0Ny1iMjk4LTRjZDY0YmMwZGMwNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2QzE5MkVEOTY1N0UxMUU0QUUwMkE5RkYyNDYyQTBBOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2QzE5MkVEODY1N0UxMUU0QUUwMkE5RkYyNDYyQTBBOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODMxNzkxMGYtZDkxOS02ODQwLWFlYTktMzcyOTVhNjRiNTZlIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjFmMGNlNmY0LWU0ZTUtYzg0Ny1iMjk4LTRjZDY0YmMwZGMwNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkyQgrUAAABCSURBVBhXY3QJS2aAAh8g/g/EW0EcJhABBBxAPAmIJ0PZcIkKIFaEYhAbLKEExOUgDhSA2IogCZARYO1QAGQzTAYAPbkH1E4jJr8AAAAASUVORK5CYII="

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAFACAYAAAC1CvwiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxZjBjZTZmNC1lNGU1LWM4NDctYjI5OC00Y2Q2NGJjMGRjMDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0EwQTE5MkI4MTFEMTFFNEI4Njg4OEVFQzVGMTEyOTIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0EwQTE5MkE4MTFEMTFFNEI4Njg4OEVFQzVGMTEyOTIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjYzNEUzRUIyODExOTExRTRBNkJDQzhDODM5MEQxQTkwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjYzNEUzRUIzODExOTExRTRBNkJDQzhDODM5MEQxQTkwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+VsD84AAABMxJREFUeNrsXEloFEEU7QztBgoKkmgueogajSQRBEEQJ3jITVDUgxL1YoggHlSU6MHlKkEQ3FFREEEviogexJlTDqIxcQl60Is4oujFDVFhfN+p1kqlu7ZZMhN+w6My1f1fVXf9ev2r+6eDfD4fRMhkMpeBaXKdCalg5NYFPMpms0sDy62OWKINhtGPn8ABoC+dTud1BKmE+onAUeAOSBt8CKKtExgESafrKagb1fcB+3FKv1x68K8hYA/Qj0aafAiijUZnACRdUUVoYfQbuA8MAy+BF8BzG4LPwARgCtCLcx9wGYVXwHLgqvjd6zKMGWAZWqRunhF1a3HeC2wITtHYw/gT/UD5AMWQOG6v0Q/iNrTcI4jJvZtA+sZ1GK8AX4V773J1ZTqNLyjOi16ccD4Fp+lcmwRavYM+Zlw10XljghIQ1NFQafa3k6xr5kkH+8H48AOWtDEgGBUGuQSVYoLl5b8r6wfofqu43QcuMZJsfARYAiEZdOqBZHxINrYNMBKNjQQmYy2BjXEiga1xLIGLcVy0HhkfhPGQ7Y1FPYd2W+NCWKr4tuvcKHouhIaVCktaOQlw4etRvE95GpPHngUafVR5xFyxVST1oP+y5iPlJXVlW00cUsK7uirVRO3Vtlmx+IhL6UbBdLW1BD5qLKvyLJSnfYwjTXwHNMD4A0taBQkw7ItQbAXmWhMIo/UCLaK6L3RoeAP5ilJ30TVOpOcoPeLnMHynJeWoxrOlh1PXrZc8irhQDw4D1zhO5DiR48SaeZ5oiJvqqfQV1chjt1cmTtRNNBdZj52lJkUyx0y+EWr5I1XbmIk1kTWRCZig/ASqeyet4HTvWNKRkSDLOt0bbad56Pjkgv2ACZiACewjFJunV6MIrLRPF2AoPejgCIUJmIAJakMTVfEJZSPaCWRMrcrHO2tibA9cNVE+nv2ACaqDgPPSqjqtzHbtXPTStzRPsopZO7MncoIjE5SDALMvJ8SjMfpbEpTYurgZmHOpCzVakLOpS+xBXKtOPVBbjLsGVTSMscPjShAZCbL+omQdZOucCWLHmKdzrROY3vpp8xMtjEfnJ9omtankYdJ6UDbWkVvfXIk8akAmD6VueT1TC5OywZVzTiQPA807VhP53w3q2paguq3ADaBdt98rP1EeSufwVu2ZU4ykzT8wvWvX5h+Y3nhrc/dN+YmmiWWTn6h9F8+ayJrImlikJkbgnG3O2WZNLLUmOhrH5ycmGetmaWg7hZMEN6UTzKIfxtlqYuLOymui7VBqPZHzEz2f6vLb/zHOjCs+sc3mFanoUaYspzBOXlxn2JXZlVnSKkSAEZmB4gKwG6PxWt5ne2vbCdxWjbUxUsztblJ5XNn34qGHZDvZ650r6ueh2AfcSgqyiPgccAkXLqvUbwZWAcew72HSKGwEcorx/KDwr4nTgW1kHDsKOHAOijVAt/hNn/vaAqwUrQ7oojSasseBezjwJn43B4UPbD2h9QHqvpv8YHVQ+DbaXRhTD1YEhe/Gxa0b6LtZzfLSd6a4cPQtrE3AY9HqD7F/KorFAMWS9F+mRDAcLX1HxYrAW6BNGC0EiOgZ8JRKEH8bcQpKpugO4KMwoI+tnVS/FSc/Q4nz8W7T9/LU1bt3sitrYhD8EWAAdoU1AmCjen8AAAAASUVORK5CYII="

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAFACAYAAAC1CvwiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxZjBjZTZmNC1lNGU1LWM4NDctYjI5OC00Y2Q2NGJjMGRjMDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjI0MkEyMUI4MTIwMTFFNDgxNjhGRjc0RjJGMjMwQkQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjI0MkEyMUE4MTIwMTFFNDgxNjhGRjc0RjJGMjMwQkQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjZDNzdDQUY4NjU3RTExRTRBRTAyQTlGRjI0NjJBMEE4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjZDNzdDQUY5NjU3RTExRTRBRTAyQTlGRjI0NjJBMEE4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+s3AxtQAABPZJREFUeNrsXE1oHkUYnvkYq0IFC5ImubRI1WolSUEoFIqWHnIr6KqHStWLtaceJFhyUryG4ElKf8RaKELNYkFETyYXPYhNW3+CHtqL+NX+XdoKxQrTZ3bny7ffdv43+Wziu/BssrP7Pjs7M++z7+683zIpJVvEDDsBPNJT5kGL9S57gTMs58+xwKVlKHsC+A4kEwBPIVDLGmAK+Bok61MIOss4cA4k46kEahnUNZkCHkghUItqiwnge5BsSiHoLKp35kGyt1MgAoz+Bb4FFoDfgd+AX0MIbgDqmh8GJlkm52Ma8QKwHfhMb0/G9MIssA1nVNU8rMtewnU/FUJwqOj7TF4vtjL5A9bn9XHvGrtHOYRzyfl+TfwPsAmkf8R240nglh7e79R3+rsxkzdRi481wUfxl5DojauGIOez//s2WBEEHLcyV1eNFbJu95Od7nsfyGPvjdSN/804IElrTCCiLXIum9cgk7xA/8dBzkf07T6hDUrjD4CtqH5XZIKC6hk2ApwGxur7Ghn7CTzGboIAYztBoLGZIML4XoKu8WjoI4+oj+3iZpLJ88HjA2eTlRrImAeuJbmxCJOLkqgutyZ29WEA68utRGMlLkeAYRY7cOq+IlKkvEfWAs9qHe596IWywazDXSRJeY87N9REEdzaVkEJbO1lFpSA1vYpUqe14wRVi+pgrJTXe+ESsB5nvkKa2E9NzPkzWL8JbBSRRq9obNGl0zE1eBV4r1b2SWycqN7m7NdbCxg7W1qRUj5UeTn1eXgjdn3l/UIfcv4X/j8VpsoUJ1KcSHHi/U5QxomsWZyY86HGcWIj4zgCi5f6ojR/zJQaofYhUg2MmURyhGptA9JE0kQioGjdJ6j6Jey9Q9k+x/LColFJNhf77Bzk5rH3BfJGIiACInBoYqD2uUW1qn0BKQNuVVaT0RShEAEREMHK0MTa8WmaWDk+XhONNYjVxMrxpIlEsBIIKD+xPwR2PQjUypZX+zwiu8yTdSFaSRmSlOBIBMvhjTlvax0YXvy/qw3mMoMHtmPKXK8D2yFlwiNpw9ZtTeZTpLazDe4LXxDGxqlfe9A46BgpspzPNJP1TL4cT2Dqd1KkFU+gpgxzfhoYs+wfULf/ltW4mndi3l/kJwpHMLHVYdwhvyRsz4M9xg7y8EasBlwV8mpeWtI7NeGdoPWRO+dYg3JxUo31/l53TunK6JmdWs3ifMEwQsPzE23DO2jG25m778tP9OZkqcaaYQOOgNs5F0+qTJpImthUE43ORDnblLNNmpisicmRifl3LLYzO7xUBLuwRXBbLsFs/jIuwEtFYFjj+B1LQ02knG1G+YmMMuOW5O2+CE4bsRzXeIJiFYwDEZt7syrbgIYySVrfCHK+DvgCeDy1BgeAr9CVF9OHMmMP+h+6ljzd2N0uyvahtDnXnKtPoh0EvhQO9uPAp2i4uVr568Au4EPs+9HWC3uAds34SVb+NPFR4C1lbO6FnG/A+kVgn95Wn/t6A3hen3XePg7KT7xNFNXP5FVsb9ZnXQu8bfpeWL0Gu1n5bbRvYKxqsAOYtjx0qM9ebe7qQc4fw/ooK7+F9RpwtngqyeRtvV/V4llAxc/qV6aKYKEkMMWKjP0JjGqjpwFF9Avwc/E3k393Fal8iKhmyR8DrmmDn5j6yFom79hE1TTG98EgSOvMlxCR7EqiythdAQYAbEvqZUahHBUAAAAASUVORK5CYII="

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABC0lEQVQ4T7WTYVEDMRSEv1VAJYCDOmgdgAPAASigKGhx0CoACcUBEsDBVcFj9ibpvF6TDn/IzM0kL9l9t5usImIFvHA6niVtcikinoB1qg3AmyIiSnEslPle0n5CsAT8eZjsChgqwaEUtpIeJ39zsoyILXAPjJhK8Apcl40uSQLvgG9LPxJIWqUDZyQZLOmhemcC6/mqmlskU7A1RYT9mKultwDuLEvSEBE2+MOdp+ebBKXDzOBLhnrvfwiKhFvgJkl4b13xJRN3VXPH2Dmw6F3jEVw9mJLka/RTzg/pDNwiAX7yQ7LbM6ALbpCMGEvwZAwGUBP42QnTIoXJDQ8mcJxrumqjv8TZYdr8Ai/uwaXkPGIcAAAAAElFTkSuQmCC"

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAFACAYAAAC1CvwiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxZjBjZTZmNC1lNGU1LWM4NDctYjI5OC00Y2Q2NGJjMGRjMDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEI1Q0Q4QzI4MTIxMTFFNEFGNzk4NUQxNjVEMjU2RTYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEI1Q0Q4QzE4MTIxMTFFNEFGNzk4NUQxNjVEMjU2RTYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkMwNTdERDc2N0U4RDExRTRCOUQ1Q0FDNDRFM0JBN0QwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMwNTdERDc3N0U4RDExRTRCOUQ1Q0FDNDRFM0JBN0QwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+R+XfywAABNVJREFUeNrsXEloFEEU7QztBgoKkmgueogajSQRBFEMJnjITVDUgxL1YogXDypK9OBylSAI4r6CCOpBEdGDOAEhB9GYuIR40Is4QdGLG6LC+H6mWsua7lq6Z8aZ8Bsela7u/7q669ebX10/7WWzWS/A0uWtl4Apcp0JKe/frQN4vKylbbFnuVURS7DBMNj5AewDevoepLM6glRE/XjgMHAHpDVxCIKtHRgASbvrLagb1fcAe3FLP11a8OdCwC6gDxepi0MQbNQ7/SDpCCp8C6NfwH1gCHgJDAMvbAg+AeOASUA37r3fpRde0TMFroj9bpduTANLcEVq5klRtwb3Pc+G4Dj1PYw/0g7KhygGxXm7jX4QtuHKXYKY3LsOpG9cu/Ey8EW49w5XV6bb+IzirGjFMedbcBrOlUmg1TvoY9pVE503JigAQRV1leZ4M8m6Zpy0sR+MDT9gSUtO4Lsa5IVBLkGlGGBZ+e/S+gGa3yh+7t2fgTA+BCyCkAw4tUAyPiAb2wYYkcZGApOxlsDGOJLA1jiUwMU4LFoPjPfDeND2h0W9h2Zb49FN9W3XsZF4LPiGmQprYjE0UXK6ahTvUjGNyWNPAbV+TONgrIzYKpJ60l9ZiyPlBXVlW00cVMK7qjLVRO3TtpmxxBGXwvWC6WlrCeKosazKM1CeiGMcDOcRoAbG71kTS6iJ6PYFKLYAs61bIIzWCTSI6h6XFqwnX1HqzrvGifQepUvsDsF3GlKOajxTejl1zXrKo4gLteAgcJXjRI4TOU6smPeJhripmspYLZA8dltp4kTdQHOR9dBRalIkc8wUN0ItfqRqGzOxJrImMgETFJ9Ade+oGZxujaU1MBJkvU6/jbbD3Hd8c8F+wARMwAT2EYrN26s8Aivts32HMroYzREKEzABE1SEJqri48tGdBBIm64qn++siaEtcNVE+Xz2AyYoDwLOSyvrtDLbuXPiqW9h3mQlmTuzJ3KCIxMUgwCjLyPEozb4WxKU0LqwEZhxqfM1WpCxqYtsQdhVnVqgXjHsGZRRN4Z2j6sqB0ZEBlxPJOsgW+tMENrHPJwrhEA3nLWrftr8RAvj/PxE26Q2dd3Zj5oPysY6cusfVyIPLiCT+1KzYr1T86OywZV7jiT3Pc0aq4l8dIO6NkWobiNwA2jWHY+Vnyh3pXN4q7bMKUbS5h+Y1tq1+QemFW9t7r4pP9E0sGzyE7Vr8ayJrImsiQk1MQDnbHPONmtioTXR0Tg8PzHKWDdKfdshHCW4KZ1gJn4ZZ6uJkQdLr4m2Xal1Zc5PjDmcefX/P2fGJU9ss1kiFS1KF+UWxsjCdZpdmV2ZJa1EBOiRaSjOATvRG6/lY7Y/bduB26qxKVJVmzahOK4c9+GhhWQ7MdaaK+rnoNgD3PI17BeAi3hwvUr9JmAlcATHHkX1wgYgoxjP9XL/mjgV2ErGob2AE2ehWA10in363NdmYIW4ar8uSqMhexS4hxNvYr/ey31g6ynND1D3zeQHq7zct9Huwpha0OLlvhsXNm+g72bVy1Pf6ShOe7lvYW0EnoirfhfHJ6NYCFAsSf9lSgRDwdQ3L1YE3gJNwmg+QETPgWdUgvirPHdWM0XPAB+EAd3/sPqtOPkdSpiPd5q+l6fO3mMnu7Imet5vAQYAtaODAARZxFkAAAAASUVORK5CYII="

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAFACAYAAAC1CvwiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxZjBjZTZmNC1lNGU1LWM4NDctYjI5OC00Y2Q2NGJjMGRjMDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEY5QjlCQTA4MTIyMTFFNEIwQUVBMkM3NjgwODE3OTYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEY5QjlCOUY4MTIyMTFFNEIwQUVBMkM3NjgwODE3OTYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkMwNTdERDdBN0U4RDExRTRCOUQ1Q0FDNDRFM0JBN0QwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMwNTdERDdCN0U4RDExRTRCOUQ1Q0FDNDRFM0JBN0QwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+2tcnMAAABOxJREFUeNrsXDtoFUEU3SzjDwwoiNE0WsS/aAQ/IIiKRTpBUQvBT+MPxEKDEhs1hU0IVvEHahREUAtBRCu10UI0RtSghTbiE39NoiAqPM9NZnWzmZm9My/vaeIdOGx2svfs7Myds3d37tuoWCxGCbqbFl0AqtN1eYij/mUT8Kjn4OKFEbPEhrppwD2QNAJVIQRURgItwE2Q1IQQJKUB6ARJQygBlUm6JS3AiBACKtQXjcB9kNSFECSFRqcDJJuSCsUw+gncBrqAl8AL4DmHoBugax4DNFUffdDh04mvgKXAJb3f5DMKd4AlOCM185SuW4vrnsEhOEFjD+PPtIPtA2ye6OP2G4eHJoSr4Mw7NfF3oA6kb3yH8SLwRbv3Xm9Hwhl7sDmjW9HmfQmhs3G4EGAI7/zvfTA0CKpwK3MNVT3JumOerHTe94jc994ow/hX/EAkrXQC5WsAnSyW3ALMwipC5f0AzZ+nb/f+faCNm4EFaH6nVx+kjA+njVkELmPOrc1p7CTgGFsJuMZGAh/jAcOYMj4E4yfcG0vWk+q5xn0BMQhSN5KizwPXoNxYlGmKiqiWWRNTTjcRm/dxoDF57GmgNg40TubKO8U0yo71H1njuKvL3cs/Cvqare6uQqR8UDVRsXvbVri9XV5B4fR2niIlHeYnqFqV6SXLSR8pz7bgHVAD4w+iiRXURAz7bGy2AlOVp9F6jTm6utWnBRvIVzJ153zjRHqPslPvdsF35sQexuTuk1Mvp66ExonUgiPAZe6LKIkTJU6UOPGfJtBxYlgnpjx2V8lxYlyCcadXH9hmaV6Ulh8zhUao5Y9UuTGTCo1QRRNFE4VACHwUqZ+LJi9hTdPZtsayIjHSZHdzn1xDnmJ97wsyG4VACISAH6HYtM8pqmnt46QMOFW5dzFaIhQhEAIh+CtxIjcetAVeQZqYPt5bE40t8NXE9PGiiUIwBAgkP7FScaJND7haGedpX57IlnexjqWVkiEpCY5CUIbZiNlX0DpQm/yd0gZjnWkGFnzqXK8DC5w6lSNptbb9hCxPkQquPvg35oIydU722ll+kBgRGXC1JFkH2TpvAlMPiyINSUHJTCTnqp8zP5Fh/Ds/UTmCiQUOY3N+Yvp5MG3sImd3YjrgGrDuHJrUljw7OxdoOfmJ1jVWzuqvYhi7hrK533QOGUrvlR3UzwOuAfXecaLpstj5ic78g7z8RFeH5uYn5o0GJz/RuRYvqiyaKJqoC2bjfI7y2BCkidZnZ8nZlpzt/1gT40BjsybajF2zVHGnsE1wY5dglvwyjquJnLCmQprIHUqnK0t+YvgLCFn9L5MmVubtvuKmjdiOK3mBYhj4gfLNvRmOfSCuLJIWVeq3fRiR8dicBfZhNF6HtGAPcCNr7OXKKKNyH7oGPd04p1/IdnTQmivq6ZNoB4DrysHeDpxHx93N1G8GVgHH8L+HtlHYCBQyxtOjvp8mjgO2kbFxFHDgFGzWANv1Pn3uawuwXJ+1w+oH+hNv9Fmzdhz4Efsz9VnHAjtM3wvLtmB11PdttFswphYsA1otzw303ayZ6UffCVHfT0/b9IPoY32t3/T/qRVzAYol6VemRNDVKyiG4aKPCr0F5mujWQARPQOe0hbEX/tdQiZLfjfwSRvQx9aO4/8/bKJq8vHtMGBpnfESfJJdRVSj6JcAAwDMequ4kXXO2QAAAABJRU5ErkJggg=="

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABKElEQVQ4T7VTwU0DMRCcrYArwby9j3QQOoAOgA5CBYQKCB0kFUAJoQMe9v/o4JD8X7SWfVo5vhMfLJ1krT3jm9kdYuY9gGeYJSJPMcaDrXnvd0T0amoTgDdiZinFXCj7cwjhbAmY+QaAfrp2AK4ATJXgRwsicowxPlpgu/feH4noHkDGVIIXEXF6sEZSwSJyIqJRpc8EIYS9uXDxJxYcY3yo3lEx56tq7pG0YJWlnojIhnp6C+AupeTGcZyYeRKRD325vd8l0EvOuUHBa4bq2f8QFAm3KaVrI+G91+I1E09V84KxGyLaLrVxBlcPWpK5jWWU7SBdgHskRPRtB0ndHnTCeq1qQlVHOWNUgm5yMADUBH4uhGlrwjRoHpRA41zTlc//GGcN0+EXyGXo9iBlz1cAAAAASUVORK5CYII="

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(41);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 41 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "<div class=\"trade_container dark hide\">\r\n    <div class=\"m_cent\">\r\n        <div class=\"m_guadan\">\r\n            <div class=\"symbol-title\">\r\n                <a class=\"dark\"></a>\r\n            </div>\r\n            <div id=\"orderbook\">\r\n                <div id=\"asks\">\r\n                    <div class=\"table\"></div>\r\n                </div>\r\n                <div id=\"gasks\">\r\n                    <div class=\"table\"></div>\r\n                </div>\r\n                <div id=\"price\" class=\"green\"></div>\r\n                <div id=\"bids\">\r\n                    <div class=\"table\"></div>\r\n                </div>\r\n                <div id=\"gbids\">\r\n                    <div class=\"table\"></div>\r\n                </div>\r\n            </div>\r\n            <div id=\"trades\" class=\"trades\">\r\n                <div class=\"trades_list\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"chart_container dark\">\r\n    <div id=\"chart_dom_elem_cache\"></div>\r\n    <!-- ToolBar -->\r\n    <div id=\"chart_toolbar\">\r\n        <div class=\"chart_toolbar_minisep\"></div>\r\n        <!-- Periods -->\r\n        <div class=\"chart_dropdown\" id=\"chart_toolbar_periods_vert\">\r\n            <div class=\"chart_dropdown_t\"><a class=\"chart_str_period\">周期</a></div>\r\n            <div class=\"chart_dropdown_data\" style=\"margin-left: -58px;\">\r\n                <table>\r\n                    <tbody>\r\n                    <tr>\r\n                        <td>\r\n                            <ul>\r\n                                <li id=\"chart_period_1w_v\" style=\"display:none;\" name=\"1w\">\r\n                                    <a class=\"chart_str_period_1w\">周线</a>\r\n                                </li>\r\n                                <li id=\"chart_period_3d_v\" style=\"display:none;\" name=\"3d\">\r\n                                    <a class=\"chart_str_period_3d\">3日</a>\r\n                                </li>\r\n                                <li id=\"chart_period_1d_v\" style=\"display:none;\" name=\"1d\">\r\n                                    <a class=\"chart_str_period_1d\">日线</a>\r\n                                </li>\r\n                                <li id=\"chart_period_12h_v\" style=\"display:none;\" name=\"12h\">\r\n                                    <a class=\"chart_str_period_12h\">12小时</a>\r\n                                </li>\r\n                                <li id=\"chart_period_6h_v\" style=\"display:none;\" name=\"6h\">\r\n                                    <a class=\"chart_str_period_6h\">6小时</a>\r\n                                </li>\r\n                                <li id=\"chart_period_4h_v\" style=\"display:none;\" name=\"4h\">\r\n                                    <a class=\"chart_str_period_4h\">4小时</a>\r\n                                </li>\r\n                                <li id=\"chart_period_2h_v\" style=\"display:none;\" name=\"2h\">\r\n                                    <a class=\"chart_str_period_2h\">2小时</a>\r\n                                </li>\r\n                                <li id=\"chart_period_1h_v\" style=\"display:none;\" name=\"1h\">\r\n                                    <a class=\"chart_str_period_1h\">1小时</a>\r\n                                </li>\r\n                            </ul>\r\n                        </td>\r\n\r\n                    </tr>\r\n\r\n                    <tr>\r\n                        <td>\r\n                            <ul>\r\n                                <li id=\"chart_period_30m_v\" style=\"display:none;\" name=\"30m\">\r\n                                    <a class=\"chart_str_period_30m\">30分钟</a>\r\n                                </li>\r\n                                <li id=\"chart_period_15m_v\" style=\"display:none;\" name=\"15m\">\r\n                                    <a class=\"chart_str_period_15m\">15分钟</a>\r\n                                </li>\r\n                                <li id=\"chart_period_5m_v\" style=\"display:none;\" name=\"5m\">\r\n                                    <a class=\"chart_str_period_5m\">5分钟</a>\r\n                                </li>\r\n                                <li id=\"chart_period_3m_v\" style=\"display:none;\" name=\"3m\">\r\n                                    <a class=\"chart_str_period_3m\">3分钟</a>\r\n                                </li>\r\n                                <li id=\"chart_period_1m_v\" style=\"display:none;\" name=\"1m\">\r\n                                    <a class=\"chart_str_period_1m selected\">1分钟</a>\r\n                                </li>\r\n                                <li id=\"chart_period_line_v\" style=\"display:none;\" name=\"line\">\r\n                                    <a class=\"chart_str_period_line\">分时</a>\r\n                                </li>\r\n                            </ul>\r\n                        </td>\r\n                    </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n        <div id=\"chart_toolbar_periods_horz\">\r\n            <ul class=\"chart_toolbar_tabgroup\" style=\"padding-left:5px; padding-right:11px;\">\r\n                <li id=\"chart_period_1w_h\" name=\"1w\" style=\"display: none;\">\r\n                    <a class=\"chart_str_period_1w\">周线</a>\r\n                </li>\r\n                <li id=\"chart_period_3d_h\" name=\"3d\" style=\"display: none;\">\r\n                    <a class=\"chart_str_period_3d\">3日</a>\r\n                </li>\r\n                <li id=\"chart_period_1d_h\" name=\"1d\" style=\"display: none;\">\r\n                    <a class=\"chart_str_period_1d\">日线</a>\r\n                </li>\r\n                <li id=\"chart_period_12h_h\" name=\"12h\" style=\"display: none;\">\r\n                    <a class=\"chart_str_period_12h\">12小时</a>\r\n                </li>\r\n                <li id=\"chart_period_6h_h\" name=\"6h\" style=\"display: none;\">\r\n                    <a class=\"chart_str_period_6h\">6小时</a>\r\n                </li>\r\n                <li id=\"chart_period_4h_h\" name=\"4h\" style=\"display: none;\">\r\n                    <a class=\"chart_str_period_4h\">4小时</a>\r\n                </li>\r\n                <li id=\"chart_period_2h_h\" name=\"2h\" style=\"display: none;\">\r\n                    <a class=\"chart_str_period_2h\">2小时</a>\r\n                </li>\r\n                <li id=\"chart_period_1h_h\" name=\"1h\" style=\"display: none;\">\r\n                    <a class=\"chart_str_period_1h\">1小时</a>\r\n                </li>\r\n                <li id=\"chart_period_30m_h\" name=\"30m\" style=\"display: none;\">\r\n                    <a class=\"chart_str_period_30m\">30分钟</a>\r\n                </li>\r\n                <li id=\"chart_period_15m_h\" name=\"15m\" style=\"display: none;\">\r\n                    <a class=\"chart_str_period_15m\">15分钟</a>\r\n                </li>\r\n                <li id=\"chart_period_5m_h\" name=\"5m\" style=\"display: none;\">\r\n                    <a class=\"chart_str_period_5m\">5分钟</a>\r\n                </li>\r\n                <li id=\"chart_period_3m_h\" name=\"3m\" style=\"display: none;\">\r\n                    <a class=\"chart_str_period_3m\">3分钟</a>\r\n                </li>\r\n                <li id=\"chart_period_1m_h\" name=\"1m\" style=\"display: none;\">\r\n                    <a class=\"chart_str_period_1m selected\">1分钟</a>\r\n                </li>\r\n                <li id=\"chart_period_line_h\" name=\"line\" style=\"display: none;\">\r\n                    <a class=\"chart_str_period_line\">分时</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <div id=\"chart_show_indicator\" class=\"chart_toolbar_button chart_str_indicator_cap selected\">技术指标</div>\r\n        <div id=\"chart_show_tools\" class=\"chart_toolbar_button chart_str_tools_cap\">画线工具</div>\r\n        <div id=\"chart_toolbar_theme\">\r\n            <div class=\"chart_toolbar_label chart_str_theme_cap\">\r\n                主题选择\r\n            </div>\r\n            <a name=\"dark\" class=\"chart_icon chart_icon_theme_dark selected\"></a>\r\n            <a name=\"light\" class=\"chart_icon chart_icon_theme_light\"></a>\r\n        </div>\r\n        <div class=\"chart_dropdown\" id=\"chart_dropdown_settings\">\r\n            <div class=\"chart_dropdown_t\"><a class=\"chart_str_settings\">更多</a></div>\r\n\r\n            <div class=\"chart_dropdown_data\" style=\"margin-left: -142px;\">\r\n                <table>\r\n                    <tbody>\r\n                    <tr id=\"chart_select_main_indicator\">\r\n                        <td class=\"chart_str_main_indicator\">主指标</td>\r\n                        <td>\r\n                            <ul>\r\n                                <li><a name=\"MA\" class=\"selected\">MA</a></li>\r\n                                <li><a name=\"EMA\" class=\"\">EMA</a></li>\r\n                                <li><a name=\"BOLL\" class=\"\">BOLL</a></li>\r\n                                <li><a name=\"SAR\" class=\"\">SAR</a></li>\r\n                                <li><a name=\"NONE\" class=\"\">None</a></li>\r\n                            </ul>\r\n                        </td>\r\n                    </tr>\r\n\r\n                    <tr id=\"chart_select_chart_style\">\r\n                        <td class=\"chart_str_chart_style\">主图样式</td>\r\n                        <td>\r\n                            <ul>\r\n                                <li><a class=\"selected\">CandleStick</a></li>\r\n                                <li><a>CandleStickHLC</a></li>\r\n                                <li><a class=\"\">OHLC</a></li>\r\n                            </ul>\r\n                        </td>\r\n                    </tr>\r\n\r\n                    <tr id=\"chart_select_theme\" style=\"display: none;\">\r\n                        <td class=\"chart_str_theme\">主题选择</td>\r\n                        <td>\r\n                            <ul>\r\n                                <li>\r\n                                    <a name=\"dark\" class=\"chart_icon chart_icon_theme_dark selected\"></a>\r\n                                </li>\r\n\r\n                                <li>\r\n                                    <a name=\"light\" class=\"chart_icon chart_icon_theme_light\"></a>\r\n                                </li>\r\n                            </ul>\r\n                        </td>\r\n                    </tr>\r\n                    <tr id=\"chart_enable_tools\" style=\"display: none;\">\r\n                        <td class=\"chart_str_tools\">画线工具</td>\r\n                        <td>\r\n                            <ul>\r\n                                <li><a name=\"on\" class=\"chart_str_on\">开启</a></li>\r\n                                <li><a name=\"off\" class=\"chart_str_off selected\">关闭</a></li>\r\n\r\n                            </ul>\r\n\r\n                        </td>\r\n                    </tr>\r\n                    <tr id=\"chart_enable_indicator\" style=\"display: none;\">\r\n                        <td class=\"chart_str_indicator\">技术指标</td>\r\n                        <td>\r\n                            <ul>\r\n                                <li><a name=\"on\" class=\"chart_str_on selected\">开启</a></li>\r\n                                <li><a name=\"off\" class=\"chart_str_off\">关闭</a></li>\r\n                            </ul>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td></td>\r\n                        <td>\r\n                            <ul>\r\n                                <li>\r\n                                    <a id=\"chart_btn_parameter_settings\" class=\"chart_str_indicator_parameters\">指标参数设置</a>\r\n                                </li>\r\n                            </ul>\r\n                        </td>\r\n                    </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"chart_dropdown\" id=\"chart_language_setting_div\" style=\"padding-left: 5px;\">\r\n            <div class=\"chart_dropdown_t\">\r\n                <a class=\"charts\">QUANTAXIS CHARTS</a>\r\n            </div>\r\n            <div class=\"chart_dropdown_data\" style=\"padding-top: 15px; margin-left: -12px;\">\r\n                <ul>\r\n                    <li style=\"height: 25px;\">\r\n                        <a name=\"zh-cn\" class=\"selected\">服务器设置</a>\r\n                    </li>\r\n                    <li style=\"height: 20px\">\r\n                        <a>QUANTAXIS 2019</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- <div class=\"chart_dropdown\" id=\"chart_language_setting_div\" style=\"padding-left: 5px;\">\r\n            <div class=\"chart_dropdown_t\">\r\n                <a class=\"chart_language_setting\">语言(LANG)</a>\r\n            </div>\r\n            <div class=\"chart_dropdown_data\" style=\"padding-top: 15px; margin-left: -12px;\">\r\n                <ul>\r\n                    <li style=\"height: 25px;\">\r\n                        <a name=\"zh-cn\" class=\"selected\">简体中文(zh-CN)</a>\r\n                    </li>\r\n                    <li style=\"height: 25px;\">\r\n                        <a name=\"en-us\">English(en-US)</a>\r\n                    </li>\r\n                    <li style=\"height: 25px;\">\r\n                        <a name=\"zh-tw\">繁體中文(zh-HK)</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div> -->\r\n        <div id=\"chart_updated_time\">\r\n            <div id=\"sizeIcon\" class=\"chart_BoxSize\"></div>\r\n\r\n        </div>\r\n    </div>\r\n               <!-- ToolPanel -->\r\n    <div id=\"chart_toolpanel\">\r\n        <div class=\"chart_toolpanel_separator\"></div>\r\n\r\n        <div class=\"chart_toolpanel_button\">\r\n            <div class=\"chart_toolpanel_icon\" id=\"chart_Cursor\" name=\"Cursor\"></div>\r\n            <div class=\"chart_toolpanel_tip chart_str_cursor\">\r\n                光标\r\n            </div>\r\n        </div>\r\n        <div class=\"chart_toolpanel_button\">\r\n            <div class=\"chart_toolpanel_icon\" id=\"chart_CrossCursor\" name=\"CrossCursor\"></div>\r\n            <div class=\"chart_toolpanel_tip chart_str_cross_cursor\">\r\n                十字光标\r\n            </div>\r\n        </div>\r\n        <div class=\"chart_toolpanel_button\">\r\n            <div class=\"chart_toolpanel_icon\" id=\"chart_SegLine\" name=\"SegLine\"></div>\r\n            <div class=\"chart_toolpanel_tip chart_str_seg_line\">\r\n                线段\r\n            </div>\r\n        </div>\r\n        <div class=\"chart_toolpanel_button\">\r\n            <div class=\"chart_toolpanel_icon\" id=\"chart_StraightLine\" name=\"StraightLine\"></div>\r\n            <div class=\"chart_toolpanel_tip chart_str_straight_line\">\r\n                直线\r\n            </div>\r\n        </div>\r\n        <div class=\"chart_toolpanel_button\">\r\n            <div class=\"chart_toolpanel_icon\" id=\"chart_RayLine\" name=\"RayLine\"></div>\r\n            <div class=\"chart_toolpanel_tip chart_str_ray_line\">\r\n                射线\r\n            </div>\r\n        </div>\r\n        <div class=\"chart_toolpanel_button\">\r\n            <div class=\"chart_toolpanel_icon\" id=\"chart_ArrowLine\" name=\"ArrowLine\"></div>\r\n            <div class=\"chart_toolpanel_tip chart_str_arrow_line\">\r\n                箭头\r\n            </div>\r\n        </div>\r\n        <div class=\"chart_toolpanel_button\">\r\n            <div class=\"chart_toolpanel_icon\" id=\"chart_HoriSegLine\" name=\"HoriSegLine\"></div>\r\n            <div class=\"chart_toolpanel_tip chart_str_horz_seg_line\">\r\n                水平线段\r\n            </div>\r\n        </div>\r\n        <div class=\"chart_toolpanel_button\">\r\n            <div class=\"chart_toolpanel_icon\" id=\"chart_HoriStraightLine\" name=\"HoriStraightLine\"></div>\r\n            <div class=\"chart_toolpanel_tip chart_str_horz_straight_line\">\r\n                水平直线\r\n            </div>\r\n        </div>\r\n        <div class=\"chart_toolpanel_button\">\r\n            <div class=\"chart_toolpanel_icon\" id=\"chart_HoriRayLine\" name=\"HoriRayLine\"></div>\r\n            <div class=\"chart_toolpanel_tip chart_str_horz_ray_line\">\r\n                水平射线\r\n            </div>\r\n        </div>\r\n        <div class=\"chart_toolpanel_button\">\r\n            <div class=\"chart_toolpanel_icon\" id=\"chart_VertiStraightLine\" name=\"VertiStraightLine\"></div>\r\n            <div class=\"chart_toolpanel_tip chart_str_vert_straight_line\">\r\n                垂直直线\r\n            </div>\r\n        </div>\r\n        <div class=\"chart_toolpanel_button\">\r\n            <div class=\"chart_toolpanel_icon\" id=\"chart_PriceLine\" name=\"PriceLine\"></div>\r\n            <div class=\"chart_toolpanel_tip chart_str_price_line\">\r\n                价格线\r\n            </div>\r\n        </div>\r\n        <div class=\"chart_toolpanel_button\">\r\n            <div class=\"chart_toolpanel_icon\" id=\"chart_TriParallelLine\" name=\"TriParallelLine\"></div>\r\n            <div class=\"chart_toolpanel_tip chart_str_tri_parallel_line\">\r\n                价格通道线\r\n            </div>\r\n        </div>\r\n        <div class=\"chart_toolpanel_button\">\r\n            <div class=\"chart_toolpanel_icon\" id=\"chart_BiParallelLine\" name=\"BiParallelLine\"></div>\r\n            <div class=\"chart_toolpanel_tip chart_str_bi_parallel_line\">\r\n                平行直线\r\n            </div>\r\n        </div>\r\n        <div class=\"chart_toolpanel_button\">\r\n            <div class=\"chart_toolpanel_icon\" id=\"chart_BiParallelRayLine\" name=\"BiParallelRayLine\"></div>\r\n            <div class=\"chart_toolpanel_tip chart_str_bi_parallel_ray\">\r\n                平行射线\r\n            </div>\r\n        </div>\r\n        <div class=\"chart_toolpanel_button\">\r\n            <div class=\"chart_toolpanel_icon\" id=\"chart_DrawFibRetrace\" name=\"DrawFibRetrace\"></div>\r\n            <div class=\"chart_toolpanel_tip chart_str_fib_retrace\">\r\n                斐波纳契回调\r\n            </div>\r\n        </div>\r\n        <div class=\"chart_toolpanel_button\">\r\n            <div class=\"chart_toolpanel_icon\" id=\"chart_DrawFibFans\" name=\"DrawFibFans\"></div>\r\n            <div class=\"chart_toolpanel_tip chart_str_fib_fans\">\r\n                斐波纳契扇形\r\n            </div>\r\n        </div>\r\n        <div style=\"padding-left: 3px;padding-top: 10px;\">\r\n            <button style=\"color: red;\" id=\"clearCanvas\" title=\"Clear All\">X</button>\r\n        </div>\r\n    </div>\r\n    <div id=\"chart_canvasGroup\" class=\"temp\">\r\n        <canvas class=\"chart_canvas\" id=\"chart_mainCanvas\" style=\"cursor: default;\"></canvas>\r\n        <canvas class=\"chart_canvas\" id=\"chart_overlayCanvas\" style=\"cursor: default;\"></canvas>\r\n    </div>\r\n    <div id=\"chart_tabbar\">\r\n        <ul>\r\n            <li><a name=\"MACD\" class=\"\">MACD</a></li>\r\n\r\n            <li><a name=\"KDJ\" class=\"\">KDJ</a></li>\r\n\r\n            <li><a name=\"StochRSI\" class=\"\">StochRSI</a></li>\r\n\r\n            <li><a name=\"RSI\" class=\"\">RSI</a></li>\r\n\r\n            <li><a name=\"DMI\" class=\"\">DMI</a></li>\r\n\r\n            <li><a name=\"OBV\" class=\"\">OBV</a></li>\r\n\r\n            <li><a name=\"BOLL\" class=\"\">BOLL</a></li>\r\n\r\n            <li><a name=\"SAR\" class=\"\">SAR</a></li>\r\n\r\n            <li><a name=\"DMA\" class=\"\">DMA</a></li>\r\n\r\n            <li><a name=\"TRIX\" class=\"\">TRIX</a></li>\r\n\r\n            <li><a name=\"BRAR\" class=\"\">BRAR</a></li>\r\n\r\n            <li><a name=\"VR\" class=\"\">VR</a></li>\r\n\r\n            <li><a name=\"EMV\" class=\"\">EMV</a></li>\r\n\r\n            <li><a name=\"WR\" class=\"\">WR</a></li>\r\n\r\n            <li><a name=\"ROC\" class=\"\">ROC</a></li>\r\n\r\n            <li><a name=\"MTM\" class=\"\">MTM</a></li>\r\n\r\n            <li><a name=\"PSY\">PSY</a></li>\r\n\r\n        </ul>\r\n\r\n    </div>\r\n\r\n    <div id=\"chart_parameter_settings\">\r\n        <h2 class=\"chart_str_indicator_parameters\">指标参数设置</h2>\r\n        <table>\r\n            <tbody>\r\n            <tr>\r\n                <th>MA</th>\r\n                <td><input name=\"MA\"><input name=\"MA\"><input name=\"MA\"><input name=\"MA\"><br><input\r\n                        name=\"MA\"><input\r\n                        name=\"MA\">\r\n                </td>\r\n                <td>\r\n                    <button class=\"chart_str_default\">默认值</button>\r\n                </td>\r\n\r\n                <th>DMA</th>\r\n                <td><input name=\"DMA\"><input name=\"DMA\"><input name=\"DMA\"></td>\r\n                <td>\r\n                    <button class=\"chart_str_default\">默认值</button>\r\n                </td>\r\n            </tr>\r\n\r\n            <tr>\r\n                <th>EMA</th>\r\n                <td>\r\n                    <input name=\"EMA\"><input name=\"EMA\"><input name=\"EMA\"><input name=\"EMA\"><br>\r\n                    <input name=\"EMA\"><input name=\"EMA\">\r\n                </td>\r\n                <td>\r\n                    <button class=\"chart_str_default\">默认值</button>\r\n                </td>\r\n\r\n                <th>TRIX</th>\r\n                <td><input name=\"TRIX\"><input name=\"TRIX\"></td>\r\n                <td>\r\n                    <button class=\"chart_str_default\">默认值</button>\r\n                </td>\r\n            </tr>\r\n\r\n            <tr>\r\n                <th>VOLUME</th>\r\n                <td><input name=\"VOLUME\"><input name=\"VOLUME\"></td>\r\n                <td>\r\n                    <button class=\"chart_str_default\">默认值</button>\r\n                </td>\r\n\r\n                <th>BRAR</th>\r\n                <td><input name=\"BRAR\"></td>\r\n                <td>\r\n                    <button class=\"chart_str_default\">默认值</button>\r\n                </td>\r\n            </tr>\r\n\r\n            <tr>\r\n                <th>MACD</th>\r\n                <td>\r\n                    <input name=\"MACD\"><input name=\"MACD\"><input name=\"MACD\">\r\n                </td>\r\n                <td>\r\n                    <button class=\"chart_str_default\">默认值</button>\r\n                </td>\r\n\r\n                <th>VR</th>\r\n                <td><input name=\"VR\"><input name=\"VR\"></td>\r\n                <td>\r\n                    <button class=\"chart_str_default\">默认值</button>\r\n                </td>\r\n            </tr>\r\n\r\n            <tr>\r\n                <th>KDJ</th>\r\n                <td>\r\n                    <input name=\"KDJ\"><input name=\"KDJ\"><input name=\"KDJ\">\r\n                </td>\r\n                <td>\r\n                    <button class=\"chart_str_default\">默认值</button>\r\n                </td>\r\n\r\n                <th>EMV</th>\r\n                <td>\r\n                    <input name=\"EMV\"><input name=\"EMV\">\r\n                </td>\r\n                <td>\r\n                    <button class=\"chart_str_default\">默认值</button>\r\n                </td>\r\n            </tr>\r\n\r\n            <tr>\r\n                <th>StochRSI</th>\r\n                <td>\r\n                    <input name=\"StochRSI\"><input name=\"StochRSI\"><input name=\"StochRSI\"><input name=\"StochRSI\">\r\n                </td>\r\n                <td>\r\n                    <button class=\"chart_str_default\">默认值</button>\r\n                </td>\r\n\r\n                <th>WR</th>\r\n                <td>\r\n                    <input name=\"WR\"><input name=\"WR\">\r\n                </td>\r\n                <td>\r\n                    <button class=\"chart_str_default\">默认值</button>\r\n                </td>\r\n            </tr>\r\n\r\n            <tr>\r\n                <th>RSI</th>\r\n                <td>\r\n                    <input name=\"RSI\"><input name=\"RSI\"><input name=\"RSI\">\r\n                </td>\r\n                <td>\r\n                    <button class=\"chart_str_default\">默认值</button>\r\n                </td>\r\n\r\n                <th>ROC</th>\r\n                <td>\r\n                    <input name=\"ROC\"><input name=\"ROC\">\r\n                </td>\r\n                <td>\r\n                    <button class=\"chart_str_default\">默认值</button>\r\n                </td>\r\n            </tr>\r\n\r\n            <tr>\r\n                <th>DMI</th>\r\n                <td>\r\n                    <input name=\"DMI\"><input name=\"DMI\">\r\n                </td>\r\n                <td>\r\n                    <button class=\"chart_str_default\">默认值</button>\r\n                </td>\r\n\r\n                <th>MTM</th>\r\n                <td>\r\n                    <input name=\"MTM\"><input name=\"MTM\">\r\n                </td>\r\n                <td>\r\n                    <button class=\"chart_str_default\">默认值</button>\r\n                </td>\r\n            </tr>\r\n\r\n            <tr>\r\n                <th>OBV</th>\r\n                <td>\r\n                    <input name=\"OBV\">\r\n                </td>\r\n                <td>\r\n                    <button class=\"chart_str_default\">默认值</button>\r\n                </td>\r\n\r\n                <th>PSY</th>\r\n                <td>\r\n                    <input name=\"PSY\"><input name=\"PSY\">\r\n                </td>\r\n                <td>\r\n                    <button class=\"chart_str_default\">默认值</button>\r\n                </td>\r\n            </tr>\r\n\r\n            <tr>\r\n                <th>BOLL</th>\r\n                <td>\r\n                    <input name=\"BOLL\">\r\n                </td>\r\n                <td>\r\n                    <button class=\"chart_str_default\">默认值</button>\r\n                </td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n\r\n        <div id=\"close_settings\"><a class=\"chart_str_close\">关闭</a></div>\r\n\r\n    </div>\r\n\r\n    <!-- Loading -->\r\n    <div id=\"chart_loading\" class=\"chart_str_loading\">正在读取数据...</div>\r\n</div>\r\n\r\n<div style=\"display: none\" id=\"chart_language_switch_tmp\">\r\n    <span name=\"chart_str_period\" zh_tw=\"週期\" zh_cn=\"周期\" en_us=\"TIME\"></span>\r\n    <span name=\"chart_str_period_line\" zh_tw=\"分時\" zh_cn=\"分时\" en_us=\"Line\"></span>\r\n    <span name=\"chart_str_period_1m\" zh_tw=\"1分鐘\" zh_cn=\"1分钟\" en_us=\"1m\"></span>\r\n    <span name=\"chart_str_period_3m\" zh_tw=\"3分鐘\" zh_cn=\"3分钟\" en_us=\"3m\"></span>\r\n    <span name=\"chart_str_period_5m\" zh_tw=\"5分鐘\" zh_cn=\"5分钟\" en_us=\"5m\"></span>\r\n    <span name=\"chart_str_period_15m\" zh_tw=\"15分鐘\" zh_cn=\"15分钟\" en_us=\"15m\"></span>\r\n    <span name=\"chart_str_period_30m\" zh_tw=\"30分鐘\" zh_cn=\"30分钟\" en_us=\"30m\"></span>\r\n    <span name=\"chart_str_period_1h\" zh_tw=\"1小時\" zh_cn=\"1小时\" en_us=\"1h\"></span>\r\n    <span name=\"chart_str_period_2h\" zh_tw=\"2小時\" zh_cn=\"2小时\" en_us=\"2h\"></span>\r\n    <span name=\"chart_str_period_4h\" zh_tw=\"4小時\" zh_cn=\"4小时\" en_us=\"4h\"></span>\r\n    <span name=\"chart_str_period_6h\" zh_tw=\"6小時\" zh_cn=\"6小时\" en_us=\"6h\"></span>\r\n    <span name=\"chart_str_period_12h\" zh_tw=\"12小時\" zh_cn=\"12小时\" en_us=\"12h\"></span>\r\n    <span name=\"chart_str_period_1d\" zh_tw=\"日線\" zh_cn=\"日线\" en_us=\"1d\"></span>\r\n    <span name=\"chart_str_period_3d\" zh_tw=\"3日\" zh_cn=\"3日\" en_us=\"3d\"></span>\r\n    <span name=\"chart_str_period_1w\" zh_tw=\"周線\" zh_cn=\"周线\" en_us=\"1w\"></span>\r\n    <span name=\"chart_str_settings\" zh_tw=\"更多\" zh_cn=\"更多\" en_us=\"MORE\"></span>\r\n    <span name=\"chart_setting_main_indicator\" zh_tw=\"均線設置\" zh_cn=\"均线设置\" en_us=\"Main Indicator\"></span>\r\n    <span name=\"chart_setting_main_indicator_none\" zh_tw=\"關閉均線\" zh_cn=\"关闭均线\" en_us=\"None\"></span>\r\n    <span name=\"chart_setting_indicator_parameters\" zh_tw=\"指標參數設置\" zh_cn=\"指标参数设置\" en_us=\"Indicator Parameters\"></span>\r\n    <span name=\"chart_str_chart_style\" zh_tw=\"主圖樣式\" zh_cn=\"主图样式\" en_us=\"Chart Style\"></span>\r\n    <span name=\"chart_str_main_indicator\" zh_tw=\"主指標\" zh_cn=\"主指标\" en_us=\"Main Indicator\"></span>\r\n    <span name=\"chart_str_indicator\" zh_tw=\"技術指標\" zh_cn=\"技术指标\" en_us=\"Indicator\"></span>\r\n    <span name=\"chart_str_indicator_cap\" zh_tw=\"技術指標\" zh_cn=\"技术指标\" en_us=\"INDICATOR\"></span>\r\n    <span name=\"chart_str_tools\" zh_tw=\"畫線工具\" zh_cn=\"画线工具\" en_us=\"Tools\"></span>\r\n    <span name=\"chart_str_tools_cap\" zh_tw=\"畫線工具\" zh_cn=\"画线工具\" en_us=\"TOOLS\"></span>\r\n    <span name=\"chart_str_theme\" zh_tw=\"主題選擇\" zh_cn=\"主题选择\" en_us=\"Theme\"></span>\r\n    <span name=\"chart_str_theme_cap\" zh_tw=\"主題選擇\" zh_cn=\"主题选择\" en_us=\"THEME\"></span>\r\n    <span name=\"chart_language_setting\" zh_tw=\"語言(LANG)\" zh_cn=\"语言(LANG)\" en_us=\"LANGUAGE\"></span>\r\n    <span name=\"chart_exchanges_setting\" zh_tw=\"更多市場\" zh_cn=\"更多市场\" en_us=\"MORE MARKETS\"></span>\r\n    <span name=\"chart_othercoin_setting\" zh_tw=\"其它市場\" zh_cn=\"其它市场\" en_us=\"OTHER MARKETS\"></span>\r\n\r\n    <span name=\"chart_str_none\" zh_tw=\"關閉\" zh_cn=\"关闭\" en_us=\"None\"></span>\r\n    <span name=\"chart_str_theme_dark\" zh_tw=\"深色主題\" zh_cn=\"深色主题\" en_us=\"Dark\"></span>\r\n    <span name=\"chart_str_theme_light\" zh_tw=\"淺色主題\" zh_cn=\"浅色主题\" en_us=\"Light\"></span>\r\n    <span name=\"chart_str_on\" zh_tw=\"開啟\" zh_cn=\"开启\" en_us=\"On\"></span>\r\n    <span name=\"chart_str_off\" zh_tw=\"關閉\" zh_cn=\"关闭\" en_us=\"Off\"></span>\r\n    <span name=\"chart_str_close\" zh_tw=\"關閉\" zh_cn=\"关闭\" en_us=\"CLOSE\"></span>\r\n    <span name=\"chart_str_default\" zh_tw=\"默認值\" zh_cn=\"默认值\" en_us=\"default\"></span>\r\n    <span name=\"chart_str_loading\" zh_tw=\"正在讀取數據...\" zh_cn=\"正在读取数据...\" en_us=\"Loading...\"></span>\r\n    <span name=\"chart_str_indicator_parameters\" zh_tw=\"指標參數設置\" zh_cn=\"指标参数设置\" en_us=\"Indicator Parameters\"></span>\r\n    <span name=\"chart_str_cursor\" zh_tw=\"光標\" zh_cn=\"光标\" en_us=\"Cursor\"></span>\r\n    <span name=\"chart_str_cross_cursor\" zh_tw=\"十字光標\" zh_cn=\"十字光标\" en_us=\"Cross Cursor\"></span>\r\n    <span name=\"chart_str_seg_line\" zh_tw=\"線段\" zh_cn=\"线段\" en_us=\"Trend Line\"></span>\r\n    <span name=\"chart_str_straight_line\" zh_tw=\"直線\" zh_cn=\"直线\" en_us=\"Extended\"></span>\r\n    <span name=\"chart_str_ray_line\" zh_tw=\"射線\" zh_cn=\"射线\" en_us=\"Ray\"></span>\r\n    <span name=\"chart_str_arrow_line\" zh_tw=\"箭頭\" zh_cn=\"箭头\" en_us=\"Arrow\"></span>\r\n    <span name=\"chart_str_horz_seg_line\" zh_tw=\"水平線段\" zh_cn=\"水平线段\" en_us=\"Horizontal Line\"></span>\r\n    <span name=\"chart_str_horz_straight_line\" zh_tw=\"水平直線\" zh_cn=\"水平直线\" en_us=\"Horizontal Extended\"></span>\r\n    <span name=\"chart_str_horz_ray_line\" zh_tw=\"水平射線\" zh_cn=\"水平射线\" en_us=\"Horizontal Ray\"></span>\r\n    <span name=\"chart_str_vert_straight_line\" zh_tw=\"垂直直線\" zh_cn=\"垂直直线\" en_us=\"Vertical Extended\"></span>\r\n    <span name=\"chart_str_price_line\" zh_tw=\"價格線\" zh_cn=\"价格线\" en_us=\"Price Line\"></span>\r\n    <span name=\"chart_str_tri_parallel_line\" zh_tw=\"價格通道線\" zh_cn=\"价格通道线\" en_us=\"Parallel Channel\"></span>\r\n    <span name=\"chart_str_bi_parallel_line\" zh_tw=\"平行直線\" zh_cn=\"平行直线\" en_us=\"Parallel Lines\"></span>\r\n    <span name=\"chart_str_bi_parallel_ray\" zh_tw=\"平行射線\" zh_cn=\"平行射线\" en_us=\"Parallel Rays\"></span>\r\n    <span name=\"chart_str_fib_retrace\" zh_tw=\"斐波納契回調\" zh_cn=\"斐波纳契回调\" en_us=\"Fibonacci Retracements\"></span>\r\n    <span name=\"chart_str_fib_fans\" zh_tw=\"斐波納契扇形\" zh_cn=\"斐波纳契扇形\" en_us=\"Fibonacci Fans\"></span>\r\n    <span name=\"chart_str_updated\" zh_tw=\"更新於\" zh_cn=\"更新于\" en_us=\"Updated\"></span>\r\n    <span name=\"chart_str_ago\" zh_tw=\"前\" zh_cn=\"前\" en_us=\"ago\"></span>\r\n</div>\r\n";

/***/ })
/******/ ]);
});
//# sourceMappingURL=kline.js.map