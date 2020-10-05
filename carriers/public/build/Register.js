(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Register"],{

/***/ "./assets/Pages/Register.jsx":
/*!***********************************!*\
  !*** ./assets/Pages/Register.jsx ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../utilities */ "./assets/utilities.js");




















function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var formSchema = yup__WEBPACK_IMPORTED_MODULE_22__["object"]().shape({
  carrier_id: yup__WEBPACK_IMPORTED_MODULE_22__["number"]().min(0, "Seleccione un transportista").required("Este campo es obligatorio"),
  other_carrier: yup__WEBPACK_IMPORTED_MODULE_22__["string"](),
  scac: yup__WEBPACK_IMPORTED_MODULE_22__["string"]().max(10, ""),
  carrier_email: yup__WEBPACK_IMPORTED_MODULE_22__["string"]().email("El correo no es válido").required("Este campo es obligatorio"),
  provider_id: yup__WEBPACK_IMPORTED_MODULE_22__["number"]().min(0, "Seleccione un proveedor").required("Este campo es obligatorio"),
  other_provider: yup__WEBPACK_IMPORTED_MODULE_22__["string"](),
  provider_email: yup__WEBPACK_IMPORTED_MODULE_22__["string"]().email("El correo no es válido").required("Este campo es obligatorio"),
  provider_notes: yup__WEBPACK_IMPORTED_MODULE_22__["string"]()
});

var Register = function Register() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_19__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      providers = _useState2[0],
      setProviders = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_19__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      carriers = _useState4[0],
      setCarriers = _useState4[1];

  var traduction = {
    mx: {},
    us: {}
  };

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_19__["useState"])({
    carrier_id: -1,
    other_carrier: "",
    scac: "",
    carrier_email: "",
    provider_id: -1,
    other_provider: "",
    provider_email: "",
    provider_notes: ""
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      initValues = _useState6[0],
      setInitValues = _useState6[1];

  var getFfs = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var url, result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = jquery__WEBPACK_IMPORTED_MODULE_23___default()("#getFf").val();
              _context.next = 3;
              return Object(_utilities__WEBPACK_IMPORTED_MODULE_24__["doAjaxPost"])(url, {});

            case 3:
              result = _context.sent;
              return _context.abrupt("return", !result.error && result.data);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getFfs() {
      return _ref.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_19__["useEffect"])(function () {
    var isSubscribed = true;

    var getData = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var response, _carriers, _providers;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!isSubscribed) {
                  _context2.next = 5;
                  break;
                }

                _context2.next = 3;
                return getFfs();

              case 3:
                response = _context2.sent;

                if (response) {
                  _carriers = response.carriers, _providers = response.providers;
                  setProviders(_providers);
                  setCarriers(_carriers);
                }

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function getData() {
        return _ref2.apply(this, arguments);
      };
    }();

    getData();
    return function () {
      isSubscribed = false;
    };
  }, []);

  var onSubmit = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(values) {
      var url, origin, formData, response;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              url = jquery__WEBPACK_IMPORTED_MODULE_23___default()("#sendInfoUrl").val();
              origin = jquery__WEBPACK_IMPORTED_MODULE_23___default()("#origin").val();
              formData = new FormData();
              formData.append("carrier_id", Number(values.carrier_id) === 999 ? "" : values.carrier_id);
              formData.append("carrier_name", values.other_carrier);
              formData.append("carrier_email", values.carrier_email);
              formData.append("scac", values.scac);
              formData.append("provider_id", Number(values.provider_id) === 999 ? "" : values.provider_id);
              formData.append("provider_name", values.other_provider);
              formData.append("provider_email", values.provider_email);
              formData.append("notes", values.provider_notes);
              formData.append("origin", origin);
              _context3.next = 14;
              return Object(_utilities__WEBPACK_IMPORTED_MODULE_24__["doAjaxPost"])(url, formData);

            case 14:
              response = _context3.sent;

              if (response.code === 400) {
                alert(response.msg);
              } else {
                alert("Se realizó el registro correctamente");
              }

            case 16:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function onSubmit(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_21__["useFormik"])({
    initialValues: initValues,
    validationSchema: formSchema,
    onSubmit: onSubmit,
    enableReinitialize: true
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("div", {
    className: "flex justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("form", {
    action: "#",
    className: "w-full max-w-2xl",
    onSubmit: formik.handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("div", {
    className: "flex flex-wrap -mx-3 mb-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("div", {
    className: "w-full px-3 mb-6 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("label", {
    className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
    htmlFor: "carrier_id"
  }, "Transportista"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("select", {
    className: "block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
    id: "carrier_id",
    name: "carrier_id",
    onBlur: formik.handleBlur,
    onChange: function onChange(ev) {
      formik.handleChange(ev);
      var target = ev.target;
      var value = target.value;
      var carrierSelected = carriers.find(function (carrier) {
        return carrier.id === value;
      });
      setInitValues(Object.assign({}, formik.values, {
        scac: carrierSelected ? carrierSelected.scac : '',
        carrier_id: value
      }));
    },
    value: formik.values.carrier_id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("option", {
    value: -1
  }, "<Seleccione>"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("option", {
    value: 999
  }, "[Otro]"), carriers.map(function (carrier, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("option", {
      value: carrier.id,
      key: index
    }, carrier.name);
  })), formik.touched.carrier_id && formik.errors.carrier_id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("div", {
    className: "text-red-600 text-sm"
  }, formik.errors.carrier_id) : null), Number(formik.values.carrier_id) === 999 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("div", {
    className: "w-full px-3 mb-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("label", {
    className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
    htmlFor: "otherScac"
  }, "Otro transportista"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("input", {
    className: "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
    id: "other_carrier",
    name: "other_carrier",
    type: "text",
    maxLength: 100,
    placeholder: "Escriba el nombre del transportista",
    onChange: formik.handleChange,
    value: formik.values.other_carrier,
    onBlur: formik.handleBlur
  }), formik.touched.other_carrier && formik.errors.other_carrier ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("div", {
    className: "text-red-600 text-sm"
  }, formik.errors.other_carrier) : null) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("div", {
    className: "w-full px-3 flex justify-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("div", {
    className: "w-1/4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("label", {
    className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
    htmlFor: "scac"
  }, "SCAC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("input", {
    className: "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
    id: "scac",
    name: "scac",
    type: "text",
    maxLength: 10,
    onChange: formik.handleChange,
    value: formik.values.scac,
    onBlur: formik.handleBlur
  }), formik.touched.scac && formik.errors.scac ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("div", {
    className: "text-red-600 text-sm"
  }, formik.errors.scac) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("div", {
    className: "w-2/3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("label", {
    className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
    htmlFor: "carrierEmail"
  }, "Correo electr\xF3nico del transportista"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("input", {
    className: "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
    id: "carrier_email",
    name: "carrier_email",
    type: "text",
    maxLength: 50,
    onChange: formik.handleChange,
    value: formik.values.carrier_email,
    onBlur: formik.handleBlur
  }), formik.touched.carrier_email && formik.errors.carrier_email ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("div", {
    className: "text-red-600 text-sm"
  }, formik.errors.carrier_email) : null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("div", {
    className: "flex flex-wrap -mx-3 mt-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("div", {
    className: "w-full px-3 mb-6 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("label", {
    className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
    htmlFor: "provider"
  }, "Proveedor de GPS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("select", {
    className: "block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
    id: "provider_id",
    name: "provider_id",
    onChange: formik.handleChange,
    value: formik.values.provider_id,
    onBlur: formik.handleBlur
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("option", {
    value: -1
  }, "<Seleccione>"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("option", {
    value: 999
  }, "[Otro]"), providers.map(function (provider, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("option", {
      value: provider.id,
      key: index
    }, provider.name);
  })), formik.touched.provider_id && formik.errors.provider_id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("div", {
    className: "text-red-600 text-sm"
  }, formik.errors.provider_id) : null), Number(formik.values.provider_id) === 999 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("div", {
    className: "w-full px-3 mb-6 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("label", {
    className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
    htmlFor: "otherProvider"
  }, "Otro proveedor de GPS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("input", {
    className: "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
    id: "other_provider",
    name: "other_provider",
    type: "text",
    maxLength: 100,
    onChange: formik.handleChange,
    value: formik.values.other_provider,
    onBlur: formik.handleBlur
  }), formik.touched.other_provider && formik.errors.other_provider ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("div", {
    className: "text-red-600 text-sm"
  }, formik.errors.other_provider) : null) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("div", {
    className: "px-3 mb-6 w-2/3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("label", {
    className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
    htmlFor: "providerEmail"
  }, "Correo electr\xF3nico del proveedor"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("input", {
    className: "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
    id: "provider_email",
    name: "provider_email",
    type: "text",
    maxLength: 50,
    onChange: formik.handleChange,
    value: formik.values.provider_email,
    onBlur: formik.handleBlur
  }), formik.touched.provider_email && formik.errors.provider_email ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("div", {
    className: "text-red-600 text-sm"
  }, formik.errors.provider_email) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("div", {
    className: "w-full px-3 mb-6 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("label", {
    className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
    htmlFor: "providerNotes"
  }, "Notas"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("textarea", {
    className: "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
    rows: 6,
    id: "provider_notes",
    name: "provider_notes",
    maxLength: 256,
    onChange: formik.handleChange,
    value: formik.values.provider_notes,
    onBlur: formik.handleBlur
  }), formik.touched.provider_notes && formik.errors.provider_notes ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("div", {
    className: "text-red-600 text-sm"
  }, formik.errors.provider_notes) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("div", {
    className: "w-full flex justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("button", {
    className: "w-2/12 flex-shrink-0 bg-teal-500 hover:bg-teal-700 bg-green-til-2 hover:border-teal-700 text-sm border-1 text-white py-1 px-2 ",
    type: "submit"
  }, "Enviar"))));
};

react_dom__WEBPACK_IMPORTED_MODULE_20___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(Register, null), document.getElementById('root'));

/***/ }),

/***/ "./assets/utilities.js":
/*!*****************************!*\
  !*** ./assets/utilities.js ***!
  \*****************************/
/*! exports provided: doAjaxPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doAjaxPost", function() { return doAjaxPost; });
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var doAjaxPost = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url, formData) {
    var result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return jquery__WEBPACK_IMPORTED_MODULE_3___default.a.ajax({
              url: url,
              type: "POST",
              processData: false,
              // tell jQuery not to process the data
              contentType: false,
              data: formData
            });

          case 2:
            result = _context.sent;
            return _context.abrupt("return", result);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function doAjaxPost(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ })

},[["./assets/Pages/Register.jsx","runtime","vendors~Login~Register","vendors~Register~app","vendors~Register"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvUGFnZXMvUmVnaXN0ZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy91dGlsaXRpZXMuanMiXSwibmFtZXMiOlsiZm9ybVNjaGVtYSIsIll1cCIsInNoYXBlIiwiY2Fycmllcl9pZCIsIm1pbiIsInJlcXVpcmVkIiwib3RoZXJfY2FycmllciIsInNjYWMiLCJtYXgiLCJjYXJyaWVyX2VtYWlsIiwiZW1haWwiLCJwcm92aWRlcl9pZCIsIm90aGVyX3Byb3ZpZGVyIiwicHJvdmlkZXJfZW1haWwiLCJwcm92aWRlcl9ub3RlcyIsIlJlZ2lzdGVyIiwidXNlU3RhdGUiLCJwcm92aWRlcnMiLCJzZXRQcm92aWRlcnMiLCJjYXJyaWVycyIsInNldENhcnJpZXJzIiwidHJhZHVjdGlvbiIsIm14IiwidXMiLCJpbml0VmFsdWVzIiwic2V0SW5pdFZhbHVlcyIsImdldEZmcyIsInVybCIsIiQiLCJ2YWwiLCJkb0FqYXhQb3N0IiwicmVzdWx0IiwiZXJyb3IiLCJkYXRhIiwidXNlRWZmZWN0IiwiaXNTdWJzY3JpYmVkIiwiZ2V0RGF0YSIsInJlc3BvbnNlIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJvcmlnaW4iLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiTnVtYmVyIiwiY29kZSIsImFsZXJ0IiwibXNnIiwiZm9ybWlrIiwidXNlRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsInZhbGlkYXRpb25TY2hlbWEiLCJlbmFibGVSZWluaXRpYWxpemUiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVCbHVyIiwiZXYiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNhcnJpZXJTZWxlY3RlZCIsImZpbmQiLCJjYXJyaWVyIiwiaWQiLCJPYmplY3QiLCJhc3NpZ24iLCJtYXAiLCJpbmRleCIsIm5hbWUiLCJ0b3VjaGVkIiwiZXJyb3JzIiwicHJvdmlkZXIiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxl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c0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gXCJmb3JtaWtcIjtcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IGRvQWpheFBvc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzXCI7XG5cbmNvbnN0IGZvcm1TY2hlbWEgPSBZdXAub2JqZWN0KCkuc2hhcGUoe1xuICAgIGNhcnJpZXJfaWQ6IFl1cC5udW1iZXIoKS5taW4oMCwgXCJTZWxlY2Npb25lIHVuIHRyYW5zcG9ydGlzdGFcIikucmVxdWlyZWQoXCJFc3RlIGNhbXBvIGVzIG9ibGlnYXRvcmlvXCIpLFxuICAgIG90aGVyX2NhcnJpZXI6IFl1cC5zdHJpbmcoKSxcbiAgICBzY2FjOiBZdXAuc3RyaW5nKCkubWF4KDEwLCBcIlwiKSxcbiAgICBjYXJyaWVyX2VtYWlsOiBZdXAuc3RyaW5nKCkuZW1haWwoXCJFbCBjb3JyZW8gbm8gZXMgdsOhbGlkb1wiKS5yZXF1aXJlZChcIkVzdGUgY2FtcG8gZXMgb2JsaWdhdG9yaW9cIiksXG4gICAgcHJvdmlkZXJfaWQ6IFl1cC5udW1iZXIoKS5taW4oMCwgXCJTZWxlY2Npb25lIHVuIHByb3ZlZWRvclwiKS5yZXF1aXJlZChcIkVzdGUgY2FtcG8gZXMgb2JsaWdhdG9yaW9cIiksXG4gICAgb3RoZXJfcHJvdmlkZXI6IFl1cC5zdHJpbmcoKSxcbiAgICBwcm92aWRlcl9lbWFpbDogWXVwLnN0cmluZygpLmVtYWlsKFwiRWwgY29ycmVvIG5vIGVzIHbDoWxpZG9cIikucmVxdWlyZWQoXCJFc3RlIGNhbXBvIGVzIG9ibGlnYXRvcmlvXCIpLFxuICAgIHByb3ZpZGVyX25vdGVzOiBZdXAuc3RyaW5nKClcbn0pO1xuXG5jb25zdCBSZWdpc3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBbcHJvdmlkZXJzLCBzZXRQcm92aWRlcnNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtjYXJyaWVycywgc2V0Q2FycmllcnNdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgY29uc3QgdHJhZHVjdGlvbiA9IHtcbiAgICAgICAgbXg6IHtcbiAgICAgICAgICAgIFxuICAgICAgICB9LFxuICAgICAgICB1czoge1xuXG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IFtpbml0VmFsdWVzLCBzZXRJbml0VmFsdWVzXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgY2Fycmllcl9pZDogLTEsXG4gICAgICAgIG90aGVyX2NhcnJpZXI6IFwiXCIsXG4gICAgICAgIHNjYWM6IFwiXCIsXG4gICAgICAgIGNhcnJpZXJfZW1haWw6IFwiXCIsXG5cbiAgICAgICAgcHJvdmlkZXJfaWQ6IC0xLFxuICAgICAgICBvdGhlcl9wcm92aWRlcjogXCJcIixcbiAgICAgICAgcHJvdmlkZXJfZW1haWw6IFwiXCIsXG4gICAgICAgIHByb3ZpZGVyX25vdGVzOiBcIlwiXG4gICAgfSk7XG5cblxuICAgIGNvbnN0IGdldEZmcyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgbGV0IHVybCA9ICQoXCIjZ2V0RmZcIikudmFsKCk7XG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBkb0FqYXhQb3N0KHVybCwge30pO1xuICAgICAgICByZXR1cm4gIXJlc3VsdC5lcnJvciAmJiByZXN1bHQuZGF0YSA7XG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCBpc1N1YnNjcmliZWQgPSB0cnVlO1xuICAgICAgICBjb25zdCBnZXREYXRhID0gYXN5bmMoKSA9PiB7XG5cbiAgICAgICAgICAgIGlmIChpc1N1YnNjcmliZWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBnZXRGZnMoKTtcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQge2NhcnJpZXJzLCBwcm92aWRlcnN9ID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgIHNldFByb3ZpZGVycyhwcm92aWRlcnMpO1xuICAgICAgICAgICAgICAgICAgICBzZXRDYXJyaWVycyhjYXJyaWVycyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZ2V0RGF0YSgpO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBpc1N1YnNjcmliZWQgPSBmYWxzZVxuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAodmFsdWVzKSA9PiB7XG4gICAgICAgIGxldCB1cmwgPSAkKFwiI3NlbmRJbmZvVXJsXCIpLnZhbCgpO1xuICAgICAgICBsZXQgb3JpZ2luID0gJChcIiNvcmlnaW5cIikudmFsKCk7XG5cbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImNhcnJpZXJfaWRcIiwgTnVtYmVyKHZhbHVlcy5jYXJyaWVyX2lkKSA9PT0gOTk5ID8gXCJcIiA6IHZhbHVlcy5jYXJyaWVyX2lkKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiY2Fycmllcl9uYW1lXCIsIHZhbHVlcy5vdGhlcl9jYXJyaWVyKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiY2Fycmllcl9lbWFpbFwiLCB2YWx1ZXMuY2Fycmllcl9lbWFpbCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInNjYWNcIiwgdmFsdWVzLnNjYWMpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJwcm92aWRlcl9pZFwiLCBOdW1iZXIodmFsdWVzLnByb3ZpZGVyX2lkKSA9PT0gOTk5ID8gXCJcIiA6IHZhbHVlcy5wcm92aWRlcl9pZCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInByb3ZpZGVyX25hbWVcIiwgdmFsdWVzLm90aGVyX3Byb3ZpZGVyKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwicHJvdmlkZXJfZW1haWxcIiwgdmFsdWVzLnByb3ZpZGVyX2VtYWlsKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwibm90ZXNcIiwgdmFsdWVzLnByb3ZpZGVyX25vdGVzKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwib3JpZ2luXCIsIG9yaWdpbik7XG5cbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZG9BamF4UG9zdCh1cmwsIGZvcm1EYXRhKTtcblxuICAgICAgICBpZihyZXNwb25zZS5jb2RlID09PSA0MDApIHtcbiAgICAgICAgICAgIGFsZXJ0KHJlc3BvbnNlLm1zZyk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiU2UgcmVhbGl6w7MgZWwgcmVnaXN0cm8gY29ycmVjdGFtZW50ZVwiKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xuICAgICAgICBpbml0aWFsVmFsdWVzOiBpbml0VmFsdWVzLFxuICAgICAgICB2YWxpZGF0aW9uU2NoZW1hOiBmb3JtU2NoZW1hLFxuICAgICAgICBvblN1Ym1pdDogb25TdWJtaXQsXG4gICAgICAgIGVuYWJsZVJlaW5pdGlhbGl6ZTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCIgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LTJ4bFwiIG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIC1teC0zIG1iLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgbWItNiBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyYXktNzAwIHRleHQteHMgZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJjYXJyaWVyX2lkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJhbnNwb3J0aXN0YVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiYmxvY2sgYXBwZWFyYW5jZS1ub25lIHctZnVsbCBiZy1ncmF5LTIwMCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHRleHQtZ3JheS03MDAgcHktM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB4LTQgcHItOCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpiZy13aGl0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzOmJvcmRlci1ncmF5LTUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjYXJyaWVyX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2Fycmllcl9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1pay5oYW5kbGVDaGFuZ2UoZXYpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB7dGFyZ2V0fSA9IGV2O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQge3ZhbHVlfSA9IHRhcmdldDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhcnJpZXJTZWxlY3RlZCA9IGNhcnJpZXJzLmZpbmQoY2FycmllciA9PiBjYXJyaWVyLmlkID09PSB2YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW5pdFZhbHVlcyhPYmplY3QuYXNzaWduKHt9LCBmb3JtaWsudmFsdWVzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FjOiBjYXJyaWVyU2VsZWN0ZWQgPyBjYXJyaWVyU2VsZWN0ZWQuc2NhYyA6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Fycmllcl9pZDogdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5jYXJyaWVyX2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ey0xfT4mbHQ7U2VsZWNjaW9uZSZndDs8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXs5OTl9PltPdHJvXTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FycmllcnMubWFwKChjYXJyaWVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxvcHRpb24gdmFsdWU9e2NhcnJpZXIuaWR9IGtleT17aW5kZXh9PntjYXJyaWVyLm5hbWV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtaWsudG91Y2hlZC5jYXJyaWVyX2lkICYmIGZvcm1pay5lcnJvcnMuY2Fycmllcl9pZCA/IDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yZWQtNjAwIHRleHQtc21cIj57Zm9ybWlrLmVycm9ycy5jYXJyaWVyX2lkfTwvZGl2PiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoZm9ybWlrLnZhbHVlcy5jYXJyaWVyX2lkKSA9PT0gOTk5ID8gPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBtYi02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JheS03MDAgdGV4dC14cyBmb250LWJvbGQgbWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJvdGhlclNjYWNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT3RybyB0cmFuc3BvcnRpc3RhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmF5LTIwMCB0ZXh0LWdyYXktNzAwIGJvcmRlciBib3JkZXItZ3JheS0yMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHktMyBweC00IGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLXdoaXRlIGZvY3VzOmJvcmRlci1ncmF5LTUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwib3RoZXJfY2FycmllclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJvdGhlcl9jYXJyaWVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezEwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFc2NyaWJhIGVsIG5vbWJyZSBkZWwgdHJhbnNwb3J0aXN0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5vdGhlcl9jYXJyaWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQub3RoZXJfY2FycmllciAmJiBmb3JtaWsuZXJyb3JzLm90aGVyX2NhcnJpZXIgPyA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMCB0ZXh0LXNtXCI+e2Zvcm1pay5lcnJvcnMub3RoZXJfY2Fycmllcn08L2Rpdj4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogbnVsbFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmF5LTcwMCB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInNjYWNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU0NBQ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JheS0yMDAgdGV4dC1ncmF5LTcwMCBib3JkZXIgYm9yZGVyLWdyYXktMjAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB5LTMgcHgtNCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpiZy13aGl0ZSBmb2N1czpib3JkZXItZ3JheS01MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNjYWNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2NhY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsxMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLnNjYWN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQuc2NhYyAmJiBmb3JtaWsuZXJyb3JzLnNjYWMgPyA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMCB0ZXh0LXNtXCI+e2Zvcm1pay5lcnJvcnMuc2NhY308L2Rpdj4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMi8zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JheS03MDAgdGV4dC14cyBmb250LWJvbGQgbWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJjYXJyaWVyRW1haWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29ycmVvIGVsZWN0csOzbmljbyBkZWwgdHJhbnNwb3J0aXN0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JheS0yMDAgdGV4dC1ncmF5LTcwMCBib3JkZXIgYm9yZGVyLWdyYXktMjAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB5LTMgcHgtNCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpiZy13aGl0ZSBmb2N1czpib3JkZXItZ3JheS01MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNhcnJpZXJfZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2Fycmllcl9lbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXs1MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLmNhcnJpZXJfZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQuY2Fycmllcl9lbWFpbCAmJiBmb3JtaWsuZXJyb3JzLmNhcnJpZXJfZW1haWwgPyA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMCB0ZXh0LXNtXCI+e2Zvcm1pay5lcnJvcnMuY2Fycmllcl9lbWFpbH08L2Rpdj4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIC1teC0zIG10LTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgbWItNiBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyYXktNzAwIHRleHQteHMgZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJwcm92aWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb3ZlZWRvciBkZSBHUFNcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImJsb2NrIGFwcGVhcmFuY2Utbm9uZSB3LWZ1bGwgYmctZ3JheS0yMDAgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCB0ZXh0LWdyYXktNzAwIHB5LTNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBweC00IHByLTggbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ymctd2hpdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1czpib3JkZXItZ3JheS01MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicHJvdmlkZXJfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm92aWRlcl9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMucHJvdmlkZXJfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXstMX0+Jmx0O1NlbGVjY2lvbmUmZ3Q7PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17OTk5fT5bT3Ryb108L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVycy5tYXAoKHByb3ZpZGVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxvcHRpb24gdmFsdWU9e3Byb3ZpZGVyLmlkfSBrZXk9e2luZGV4fSA+e3Byb3ZpZGVyLm5hbWV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQucHJvdmlkZXJfaWQgJiYgZm9ybWlrLmVycm9ycy5wcm92aWRlcl9pZCA/IDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yZWQtNjAwIHRleHQtc21cIj57Zm9ybWlrLmVycm9ycy5wcm92aWRlcl9pZH08L2Rpdj4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKGZvcm1pay52YWx1ZXMucHJvdmlkZXJfaWQpID09PSA5OTkgPyA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweC0zIG1iLTYgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JheS03MDAgdGV4dC14cyBmb250LWJvbGQgbWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJvdGhlclByb3ZpZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE90cm8gcHJvdmVlZG9yIGRlIEdQU1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JheS0yMDAgdGV4dC1ncmF5LTcwMCBib3JkZXIgYm9yZGVyLWdyYXktMjAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBweS0zIHB4LTQgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6Ym9yZGVyLWdyYXktNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJvdGhlcl9wcm92aWRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJvdGhlcl9wcm92aWRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsxMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5vdGhlcl9wcm92aWRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtaWsudG91Y2hlZC5vdGhlcl9wcm92aWRlciAmJiBmb3JtaWsuZXJyb3JzLm90aGVyX3Byb3ZpZGVyID8gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDAgdGV4dC1zbVwiPntmb3JtaWsuZXJyb3JzLm90aGVyX3Byb3ZpZGVyfTwvZGl2PiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBudWxsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0zIG1iLTYgdy0yLzNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyYXktNzAwIHRleHQteHMgZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJwcm92aWRlckVtYWlsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29ycmVvIGVsZWN0csOzbmljbyBkZWwgcHJvdmVlZG9yXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JheS0yMDAgdGV4dC1ncmF5LTcwMCBib3JkZXIgYm9yZGVyLWdyYXktMjAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB5LTMgcHgtNCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpiZy13aGl0ZSBmb2N1czpib3JkZXItZ3JheS01MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicHJvdmlkZXJfZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm92aWRlcl9lbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17NTB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMucHJvdmlkZXJfZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQucHJvdmlkZXJfZW1haWwgJiYgZm9ybWlrLmVycm9ycy5wcm92aWRlcl9lbWFpbCA/IDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yZWQtNjAwIHRleHQtc21cIj57Zm9ybWlrLmVycm9ycy5wcm92aWRlcl9lbWFpbH08L2Rpdj4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBtYi02IFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JheS03MDAgdGV4dC14cyBmb250LWJvbGQgbWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInByb3ZpZGVyTm90ZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3Rhc1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyYXktMjAwIHRleHQtZ3JheS03MDAgYm9yZGVyIGJvcmRlci1ncmF5LTIwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBweS0zIHB4LTQgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6Ym9yZGVyLWdyYXktNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXs2fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicHJvdmlkZXJfbm90ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm92aWRlcl9ub3Rlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsyNTZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMucHJvdmlkZXJfbm90ZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQucHJvdmlkZXJfbm90ZXMgJiYgZm9ybWlrLmVycm9ycy5wcm92aWRlcl9ub3RlcyA/IDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yZWQtNjAwIHRleHQtc21cIj57Zm9ybWlrLmVycm9ycy5wcm92aWRlcl9ub3Rlc308L2Rpdj4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMi8xMiBmbGV4LXNocmluay0wIGJnLXRlYWwtNTAwIGhvdmVyOmJnLXRlYWwtNzAwIGJnLWdyZWVuLXRpbC0yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXI6Ym9yZGVyLXRlYWwtNzAwIHRleHQtc20gYm9yZGVyLTEgdGV4dC13aGl0ZSBweS0xIHB4LTIgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEVudmlhclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTtcblxuXG5SZWFjdERPTS5yZW5kZXIoPFJlZ2lzdGVyIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTsiLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5cbmV4cG9ydCBjb25zdCBkb0FqYXhQb3N0ID0gYXN5bmMgKHVybCwgZm9ybURhdGEpID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgJC5hamF4KHtcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsICAvLyB0ZWxsIGpRdWVyeSBub3QgdG8gcHJvY2VzcyB0aGUgZGF0YVxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXG4gICAgICAgIGRhdGE6IGZvcm1EYXRhLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==