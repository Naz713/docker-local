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

  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_21__["useFormik"])({
    initialValues: initValues,
    validationSchema: formSchema,
    onSubmit: function onSubmit(values) {
      console.log(values);
    },
    enableReinitialize: true
  });

  var getFfs = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var url, result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = jquery__WEBPACK_IMPORTED_MODULE_23___default()("#getFf").val();
              _context.next = 3;
              return jquery__WEBPACK_IMPORTED_MODULE_23___default.a.ajax({
                url: url,
                type: "POST",
                processData: false,
                // tell jQuery not to process the data
                contentType: false,
                data: {}
              });

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
    className: "w-2/12 flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 ",
    type: "submit"
  }, "Enviar"))));
};

react_dom__WEBPACK_IMPORTED_MODULE_20___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(Register, null), document.getElementById('root'));

/***/ })

},[["./assets/Pages/Register.jsx","runtime","vendors~Login~Register","vendors~Register~app","vendors~Register"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvUGFnZXMvUmVnaXN0ZXIuanN4Il0sIm5hbWVzIjpbImZvcm1TY2hlbWEiLCJZdXAiLCJzaGFwZSIsImNhcnJpZXJfaWQiLCJtaW4iLCJyZXF1aXJlZCIsIm90aGVyX2NhcnJpZXIiLCJzY2FjIiwibWF4IiwiY2Fycmllcl9lbWFpbCIsImVtYWlsIiwicHJvdmlkZXJfaWQiLCJvdGhlcl9wcm92aWRlciIsInByb3ZpZGVyX2VtYWlsIiwicHJvdmlkZXJfbm90ZXMiLCJSZWdpc3RlciIsInVzZVN0YXRlIiwicHJvdmlkZXJzIiwic2V0UHJvdmlkZXJzIiwiY2FycmllcnMiLCJzZXRDYXJyaWVycyIsImluaXRWYWx1ZXMiLCJzZXRJbml0VmFsdWVzIiwiZm9ybWlrIiwidXNlRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsInZhbGlkYXRpb25TY2hlbWEiLCJvblN1Ym1pdCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJlbmFibGVSZWluaXRpYWxpemUiLCJnZXRGZnMiLCJ1cmwiLCIkIiwidmFsIiwiYWpheCIsInR5cGUiLCJwcm9jZXNzRGF0YSIsImNvbnRlbnRUeXBlIiwiZGF0YSIsInJlc3VsdCIsImVycm9yIiwidXNlRWZmZWN0IiwiaXNTdWJzY3JpYmVkIiwiZ2V0RGF0YSIsInJlc3BvbnNlIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQmx1ciIsImV2IiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJjYXJyaWVyU2VsZWN0ZWQiLCJmaW5kIiwiY2FycmllciIsImlkIiwiT2JqZWN0IiwiYXNzaWduIiwibWFwIiwiaW5kZXgiLCJuYW1lIiwidG91Y2hlZCIsImVycm9ycyIsIk51bWJlciIsInByb3ZpZGVyIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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ZUFrTEk7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSTtBQUNJLGFBQVMsRUFBQyxpSUFEZDtBQUdJLFFBQUksRUFBQztBQUhULGNBREosQ0FsTEosQ0FESixDQURKO0FBK0xILENBM1BEOztBQThQQW9ELGlEQUFRLENBQUNDLE1BQVQsZUFBZ0IsNERBQUMsUUFBRCxPQUFoQixFQUE4QkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQTlCLEUiLCJmaWxlIjoiUmVnaXN0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5jb25zdCBmb3JtU2NoZW1hID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcbiAgICBjYXJyaWVyX2lkOiBZdXAubnVtYmVyKCkubWluKDAsIFwiU2VsZWNjaW9uZSB1biB0cmFuc3BvcnRpc3RhXCIpLnJlcXVpcmVkKFwiRXN0ZSBjYW1wbyBlcyBvYmxpZ2F0b3Jpb1wiKSxcbiAgICBvdGhlcl9jYXJyaWVyOiBZdXAuc3RyaW5nKCksXG4gICAgc2NhYzogWXVwLnN0cmluZygpLm1heCgxMCwgXCJcIiksXG4gICAgY2Fycmllcl9lbWFpbDogWXVwLnN0cmluZygpLmVtYWlsKFwiRWwgY29ycmVvIG5vIGVzIHbDoWxpZG9cIikucmVxdWlyZWQoXCJFc3RlIGNhbXBvIGVzIG9ibGlnYXRvcmlvXCIpLFxuICAgIHByb3ZpZGVyX2lkOiBZdXAubnVtYmVyKCkubWluKDAsIFwiU2VsZWNjaW9uZSB1biBwcm92ZWVkb3JcIikucmVxdWlyZWQoXCJFc3RlIGNhbXBvIGVzIG9ibGlnYXRvcmlvXCIpLFxuICAgIG90aGVyX3Byb3ZpZGVyOiBZdXAuc3RyaW5nKCksXG4gICAgcHJvdmlkZXJfZW1haWw6IFl1cC5zdHJpbmcoKS5lbWFpbChcIkVsIGNvcnJlbyBubyBlcyB2w6FsaWRvXCIpLnJlcXVpcmVkKFwiRXN0ZSBjYW1wbyBlcyBvYmxpZ2F0b3Jpb1wiKSxcbiAgICBwcm92aWRlcl9ub3RlczogWXVwLnN0cmluZygpXG59KTtcblxuY29uc3QgUmVnaXN0ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgW3Byb3ZpZGVycywgc2V0UHJvdmlkZXJzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbY2FycmllcnMsIHNldENhcnJpZXJzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIGNvbnN0IFtpbml0VmFsdWVzLCBzZXRJbml0VmFsdWVzXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgY2Fycmllcl9pZDogLTEsXG4gICAgICAgIG90aGVyX2NhcnJpZXI6IFwiXCIsXG4gICAgICAgIHNjYWM6IFwiXCIsXG4gICAgICAgIGNhcnJpZXJfZW1haWw6IFwiXCIsXG5cbiAgICAgICAgcHJvdmlkZXJfaWQ6IC0xLFxuICAgICAgICBvdGhlcl9wcm92aWRlcjogXCJcIixcbiAgICAgICAgcHJvdmlkZXJfZW1haWw6IFwiXCIsXG4gICAgICAgIHByb3ZpZGVyX25vdGVzOiBcIlwiXG4gICAgfSk7XG5cbiAgICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xuICAgICAgICBpbml0aWFsVmFsdWVzOiBpbml0VmFsdWVzLFxuICAgICAgICB2YWxpZGF0aW9uU2NoZW1hOiBmb3JtU2NoZW1hLFxuICAgICAgICBvblN1Ym1pdDogKHZhbHVlcykgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWVzKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5hYmxlUmVpbml0aWFsaXplOiB0cnVlXG4gICAgfSk7XG5cbiAgICBjb25zdCBnZXRGZnMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGxldCB1cmwgPSAkKFwiI2dldEZmXCIpLnZhbCgpO1xuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsICAvLyB0ZWxsIGpRdWVyeSBub3QgdG8gcHJvY2VzcyB0aGUgZGF0YVxuICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxuICAgICAgICAgICAgZGF0YToge30sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAhcmVzdWx0LmVycm9yICYmIHJlc3VsdC5kYXRhIDtcbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IGlzU3Vic2NyaWJlZCA9IHRydWU7XG4gICAgICAgIGNvbnN0IGdldERhdGEgPSBhc3luYygpID0+IHtcblxuICAgICAgICAgICAgaWYgKGlzU3Vic2NyaWJlZCkge1xuICAgICAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGdldEZmcygpO1xuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB7Y2FycmllcnMsIHByb3ZpZGVyc30gPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgc2V0UHJvdmlkZXJzKHByb3ZpZGVycyk7XG4gICAgICAgICAgICAgICAgICAgIHNldENhcnJpZXJzKGNhcnJpZXJzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBnZXREYXRhKCk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctMnhsXCIgb25TdWJtaXQ9e2Zvcm1pay5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgLW14LTMgbWItMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBtYi02IFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JheS03MDAgdGV4dC14cyBmb250LWJvbGQgbWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImNhcnJpZXJfaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUcmFuc3BvcnRpc3RhXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJibG9jayBhcHBlYXJhbmNlLW5vbmUgdy1mdWxsIGJnLWdyYXktMjAwIGJvcmRlciBib3JkZXItZ3JheS0yMDAgdGV4dC1ncmF5LTcwMCBweS0zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHgtNCBwci04IGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLXdoaXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXM6Ym9yZGVyLWdyYXktNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNhcnJpZXJfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjYXJyaWVyX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2Zvcm1pay5oYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXYpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWlrLmhhbmRsZUNoYW5nZShldik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHt0YXJnZXR9ID0gZXY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB7dmFsdWV9ID0gdGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2FycmllclNlbGVjdGVkID0gY2FycmllcnMuZmluZChjYXJyaWVyID0+IGNhcnJpZXIuaWQgPT09IHZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJbml0VmFsdWVzKE9iamVjdC5hc3NpZ24oe30sIGZvcm1pay52YWx1ZXMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWM6IGNhcnJpZXJTZWxlY3RlZCA/IGNhcnJpZXJTZWxlY3RlZC5zY2FjIDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJyaWVyX2lkOiB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLmNhcnJpZXJfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17LTF9PiZsdDtTZWxlY2Npb25lJmd0Ozwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezk5OX0+W090cm9dPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJyaWVycy5tYXAoKGNhcnJpZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiB2YWx1ZT17Y2Fycmllci5pZH0ga2V5PXtpbmRleH0+e2NhcnJpZXIubmFtZX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQuY2Fycmllcl9pZCAmJiBmb3JtaWsuZXJyb3JzLmNhcnJpZXJfaWQgPyA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMCB0ZXh0LXNtXCI+e2Zvcm1pay5lcnJvcnMuY2Fycmllcl9pZH08L2Rpdj4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKGZvcm1pay52YWx1ZXMuY2Fycmllcl9pZCkgPT09IDk5OSA/IDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgbWItNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyYXktNzAwIHRleHQteHMgZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwib3RoZXJTY2FjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE90cm8gdHJhbnNwb3J0aXN0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JheS0yMDAgdGV4dC1ncmF5LTcwMCBib3JkZXIgYm9yZGVyLWdyYXktMjAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB5LTMgcHgtNCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpiZy13aGl0ZSBmb2N1czpib3JkZXItZ3JheS01MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm90aGVyX2NhcnJpZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwib3RoZXJfY2FycmllclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsxMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXNjcmliYSBlbCBub21icmUgZGVsIHRyYW5zcG9ydGlzdGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMub3RoZXJfY2Fycmllcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2Zvcm1pay5oYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLm90aGVyX2NhcnJpZXIgJiYgZm9ybWlrLmVycm9ycy5vdGhlcl9jYXJyaWVyID8gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDAgdGV4dC1zbVwiPntmb3JtaWsuZXJyb3JzLm90aGVyX2NhcnJpZXJ9PC9kaXY+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweC0zIGZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS80XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JheS03MDAgdGV4dC14cyBmb250LWJvbGQgbWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJzY2FjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNDQUNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyYXktMjAwIHRleHQtZ3JheS03MDAgYm9yZGVyIGJvcmRlci1ncmF5LTIwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBweS0zIHB4LTQgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6Ym9yZGVyLWdyYXktNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzY2FjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNjYWNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17MTB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5zY2FjfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2Zvcm1pay5oYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLnNjYWMgJiYgZm9ybWlrLmVycm9ycy5zY2FjID8gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDAgdGV4dC1zbVwiPntmb3JtaWsuZXJyb3JzLnNjYWN9PC9kaXY+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTIvM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyYXktNzAwIHRleHQteHMgZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiY2FycmllckVtYWlsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcnJlbyBlbGVjdHLDs25pY28gZGVsIHRyYW5zcG9ydGlzdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyYXktMjAwIHRleHQtZ3JheS03MDAgYm9yZGVyIGJvcmRlci1ncmF5LTIwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBweS0zIHB4LTQgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6Ym9yZGVyLWdyYXktNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjYXJyaWVyX2VtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNhcnJpZXJfZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17NTB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5jYXJyaWVyX2VtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2Zvcm1pay5oYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLmNhcnJpZXJfZW1haWwgJiYgZm9ybWlrLmVycm9ycy5jYXJyaWVyX2VtYWlsID8gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDAgdGV4dC1zbVwiPntmb3JtaWsuZXJyb3JzLmNhcnJpZXJfZW1haWx9PC9kaXY+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCAtbXgtMyBtdC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweC0zIG1iLTYgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmF5LTcwMCB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwicHJvdmlkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm92ZWVkb3IgZGUgR1BTXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJibG9jayBhcHBlYXJhbmNlLW5vbmUgdy1mdWxsIGJnLWdyYXktMjAwIGJvcmRlciBib3JkZXItZ3JheS0yMDAgdGV4dC1ncmF5LTcwMCBweS0zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHgtNCBwci04IGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLXdoaXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXM6Ym9yZGVyLWdyYXktNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInByb3ZpZGVyX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvdmlkZXJfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLnByb3ZpZGVyX2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17LTF9PiZsdDtTZWxlY2Npb25lJmd0Ozwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezk5OX0+W090cm9dPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcnMubWFwKChwcm92aWRlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIHZhbHVlPXtwcm92aWRlci5pZH0ga2V5PXtpbmRleH0gPntwcm92aWRlci5uYW1lfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLnByb3ZpZGVyX2lkICYmIGZvcm1pay5lcnJvcnMucHJvdmlkZXJfaWQgPyA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMCB0ZXh0LXNtXCI+e2Zvcm1pay5lcnJvcnMucHJvdmlkZXJfaWR9PC9kaXY+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihmb3JtaWsudmFsdWVzLnByb3ZpZGVyX2lkKSA9PT0gOTk5ID8gPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBtYi02IFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyYXktNzAwIHRleHQteHMgZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwib3RoZXJQcm92aWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPdHJvIHByb3ZlZWRvciBkZSBHUFNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyYXktMjAwIHRleHQtZ3JheS03MDAgYm9yZGVyIGJvcmRlci1ncmF5LTIwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHktMyBweC00IGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLXdoaXRlIGZvY3VzOmJvcmRlci1ncmF5LTUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwib3RoZXJfcHJvdmlkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwib3RoZXJfcHJvdmlkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17MTAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMub3RoZXJfcHJvdmlkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQub3RoZXJfcHJvdmlkZXIgJiYgZm9ybWlrLmVycm9ycy5vdGhlcl9wcm92aWRlciA/IDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yZWQtNjAwIHRleHQtc21cIj57Zm9ybWlrLmVycm9ycy5vdGhlcl9wcm92aWRlcn08L2Rpdj4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogbnVsbFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMyBtYi02IHctMi8zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmF5LTcwMCB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwicHJvdmlkZXJFbWFpbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcnJlbyBlbGVjdHLDs25pY28gZGVsIHByb3ZlZWRvclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyYXktMjAwIHRleHQtZ3JheS03MDAgYm9yZGVyIGJvcmRlci1ncmF5LTIwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBweS0zIHB4LTQgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6Ym9yZGVyLWdyYXktNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInByb3ZpZGVyX2VtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvdmlkZXJfZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezUwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLnByb3ZpZGVyX2VtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLnByb3ZpZGVyX2VtYWlsICYmIGZvcm1pay5lcnJvcnMucHJvdmlkZXJfZW1haWwgPyA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMCB0ZXh0LXNtXCI+e2Zvcm1pay5lcnJvcnMucHJvdmlkZXJfZW1haWx9PC9kaXY+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgbWItNiBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyYXktNzAwIHRleHQteHMgZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJwcm92aWRlck5vdGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTm90YXNcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmF5LTIwMCB0ZXh0LWdyYXktNzAwIGJvcmRlciBib3JkZXItZ3JheS0yMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHktMyBweC00IGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLXdoaXRlIGZvY3VzOmJvcmRlci1ncmF5LTUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17Nn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInByb3ZpZGVyX25vdGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvdmlkZXJfbm90ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17MjU2fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLnByb3ZpZGVyX25vdGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLnByb3ZpZGVyX25vdGVzICYmIGZvcm1pay5lcnJvcnMucHJvdmlkZXJfbm90ZXMgPyA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMCB0ZXh0LXNtXCI+e2Zvcm1pay5lcnJvcnMucHJvdmlkZXJfbm90ZXN9PC9kaXY+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTIvMTIgZmxleC1zaHJpbmstMCBiZy10ZWFsLTUwMCBob3ZlcjpiZy10ZWFsLTcwMCBib3JkZXItdGVhbC01MDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Zlcjpib3JkZXItdGVhbC03MDAgdGV4dC1zbSBib3JkZXItNCB0ZXh0LXdoaXRlIHB5LTEgcHgtMiBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgRW52aWFyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59O1xuXG5cblJlYWN0RE9NLnJlbmRlcig8UmVnaXN0ZXIgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpOyJdLCJzb3VyY2VSb290IjoiIn0=