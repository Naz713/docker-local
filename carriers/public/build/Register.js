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
              formData.append("carrier_id", values.carrier_id === 999 ? "" : values.carrier_id);
              formData.append("carrier_name", values.other_carrier);
              formData.append("carrier_email", values.carrier_email);
              formData.append("scac", values.scac);
              formData.append("provider_id", values.provider_id === 999 ? "" : values.provider_id);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvUGFnZXMvUmVnaXN0ZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy91dGlsaXRpZXMuanMiXSwibmFtZXMiOlsiZm9ybVNjaGVtYSIsIll1cCIsInNoYXBlIiwiY2Fycmllcl9pZCIsIm1pbiIsInJlcXVpcmVkIiwib3RoZXJfY2FycmllciIsInNjYWMiLCJtYXgiLCJjYXJyaWVyX2VtYWlsIiwiZW1haWwiLCJwcm92aWRlcl9pZCIsIm90aGVyX3Byb3ZpZGVyIiwicHJvdmlkZXJfZW1haWwiLCJwcm92aWRlcl9ub3RlcyIsIlJlZ2lzdGVyIiwidXNlU3RhdGUiLCJwcm92aWRlcnMiLCJzZXRQcm92aWRlcnMiLCJjYXJyaWVycyIsInNldENhcnJpZXJzIiwiaW5pdFZhbHVlcyIsInNldEluaXRWYWx1ZXMiLCJnZXRGZnMiLCJ1cmwiLCIkIiwidmFsIiwiZG9BamF4UG9zdCIsInJlc3VsdCIsImVycm9yIiwiZGF0YSIsInVzZUVmZmVjdCIsImlzU3Vic2NyaWJlZCIsImdldERhdGEiLCJyZXNwb25zZSIsIm9uU3VibWl0IiwidmFsdWVzIiwib3JpZ2luIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImNvZGUiLCJhbGVydCIsIm1zZyIsImZvcm1payIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJ2YWxpZGF0aW9uU2NoZW1hIiwiZW5hYmxlUmVpbml0aWFsaXplIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQmx1ciIsImV2IiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJjYXJyaWVyU2VsZWN0ZWQiLCJmaW5kIiwiY2FycmllciIsImlkIiwiT2JqZWN0IiwiYXNzaWduIiwibWFwIiwiaW5kZXgiLCJuYW1lIiwidG91Y2hlZCIsImVycm9ycyIsIk51bWJlciIsInByb3ZpZGVyIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWpheCIsInR5cGUi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QWYsSUFBaUM4QixNQUFNLENBQUNxQixNQUFQLENBQWNuRCxjQUEvQyxnQkFBZ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUF1QzhCLE1BQU0sQ0FBQ3FCLE1BQVAsQ0FBY25ELGNBQXJELENBQWhFLEdBQTZJLElBZmxKLENBN0RKLENBbEdKLGVBaUxJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFDSSxhQUFTLEVBQUMsZ0lBRGQ7QUFHSSxRQUFJLEVBQUM7QUFIVCxjQURKLENBakxKLENBREosQ0FESjtBQThMSCxDQTFRRDs7QUE2UUFzRCxpREFBUSxDQUFDQyxNQUFULGVBQWdCLDREQUFDLFFBQUQsT0FBaEIsRUFBOEJDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUE5QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvUkE7QUFFTyxJQUFNNUMsVUFBVTtBQUFBLHFFQUFHLGlCQUFPSCxHQUFQLEVBQVljLFFBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDSGIsNkNBQUMsQ0FBQytDLElBQUYsQ0FBTztBQUN0QmhELGlCQUFHLEVBQUVBLEdBRGlCO0FBRXRCaUQsa0JBQUksRUFBRSxNQUZnQjtBQUd0QkMseUJBQVcsRUFBRSxLQUhTO0FBR0Q7QUFDckJDLHlCQUFXLEVBQUUsS0FKUztBQUt0QjdDLGtCQUFJLEVBQUVRO0FBTGdCLGFBQVAsQ0FERzs7QUFBQTtBQUNsQlYsa0JBRGtCO0FBQUEsNkNBU2ZBLE1BVGU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBVkQsVUFBVTtBQUFBO0FBQUE7QUFBQSxHQUFoQixDIiwiZmlsZSI6IlJlZ2lzdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gXCJmb3JtaWtcIjtcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IGRvQWpheFBvc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzXCI7XG5cbmNvbnN0IGZvcm1TY2hlbWEgPSBZdXAub2JqZWN0KCkuc2hhcGUoe1xuICAgIGNhcnJpZXJfaWQ6IFl1cC5udW1iZXIoKS5taW4oMCwgXCJTZWxlY2Npb25lIHVuIHRyYW5zcG9ydGlzdGFcIikucmVxdWlyZWQoXCJFc3RlIGNhbXBvIGVzIG9ibGlnYXRvcmlvXCIpLFxuICAgIG90aGVyX2NhcnJpZXI6IFl1cC5zdHJpbmcoKSxcbiAgICBzY2FjOiBZdXAuc3RyaW5nKCkubWF4KDEwLCBcIlwiKSxcbiAgICBjYXJyaWVyX2VtYWlsOiBZdXAuc3RyaW5nKCkuZW1haWwoXCJFbCBjb3JyZW8gbm8gZXMgdsOhbGlkb1wiKS5yZXF1aXJlZChcIkVzdGUgY2FtcG8gZXMgb2JsaWdhdG9yaW9cIiksXG4gICAgcHJvdmlkZXJfaWQ6IFl1cC5udW1iZXIoKS5taW4oMCwgXCJTZWxlY2Npb25lIHVuIHByb3ZlZWRvclwiKS5yZXF1aXJlZChcIkVzdGUgY2FtcG8gZXMgb2JsaWdhdG9yaW9cIiksXG4gICAgb3RoZXJfcHJvdmlkZXI6IFl1cC5zdHJpbmcoKSxcbiAgICBwcm92aWRlcl9lbWFpbDogWXVwLnN0cmluZygpLmVtYWlsKFwiRWwgY29ycmVvIG5vIGVzIHbDoWxpZG9cIikucmVxdWlyZWQoXCJFc3RlIGNhbXBvIGVzIG9ibGlnYXRvcmlvXCIpLFxuICAgIHByb3ZpZGVyX25vdGVzOiBZdXAuc3RyaW5nKClcbn0pO1xuXG5jb25zdCBSZWdpc3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBbcHJvdmlkZXJzLCBzZXRQcm92aWRlcnNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtjYXJyaWVycywgc2V0Q2FycmllcnNdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgY29uc3QgW2luaXRWYWx1ZXMsIHNldEluaXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xuICAgICAgICBjYXJyaWVyX2lkOiAtMSxcbiAgICAgICAgb3RoZXJfY2FycmllcjogXCJcIixcbiAgICAgICAgc2NhYzogXCJcIixcbiAgICAgICAgY2Fycmllcl9lbWFpbDogXCJcIixcblxuICAgICAgICBwcm92aWRlcl9pZDogLTEsXG4gICAgICAgIG90aGVyX3Byb3ZpZGVyOiBcIlwiLFxuICAgICAgICBwcm92aWRlcl9lbWFpbDogXCJcIixcbiAgICAgICAgcHJvdmlkZXJfbm90ZXM6IFwiXCJcbiAgICB9KTtcblxuXG4gICAgY29uc3QgZ2V0RmZzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBsZXQgdXJsID0gJChcIiNnZXRGZlwiKS52YWwoKTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGRvQWpheFBvc3QodXJsLCB7fSk7XG4gICAgICAgIHJldHVybiAhcmVzdWx0LmVycm9yICYmIHJlc3VsdC5kYXRhIDtcbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IGlzU3Vic2NyaWJlZCA9IHRydWU7XG4gICAgICAgIGNvbnN0IGdldERhdGEgPSBhc3luYygpID0+IHtcblxuICAgICAgICAgICAgaWYgKGlzU3Vic2NyaWJlZCkge1xuICAgICAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGdldEZmcygpO1xuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB7Y2FycmllcnMsIHByb3ZpZGVyc30gPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgc2V0UHJvdmlkZXJzKHByb3ZpZGVycyk7XG4gICAgICAgICAgICAgICAgICAgIHNldENhcnJpZXJzKGNhcnJpZXJzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBnZXREYXRhKCk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jICh2YWx1ZXMpID0+IHtcbiAgICAgICAgbGV0IHVybCA9ICQoXCIjc2VuZEluZm9VcmxcIikudmFsKCk7XG4gICAgICAgIGxldCBvcmlnaW4gPSAkKFwiI29yaWdpblwiKS52YWwoKTtcblxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiY2Fycmllcl9pZFwiLCB2YWx1ZXMuY2Fycmllcl9pZCA9PT0gOTk5ID8gXCJcIiA6IHZhbHVlcy5jYXJyaWVyX2lkKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiY2Fycmllcl9uYW1lXCIsIHZhbHVlcy5vdGhlcl9jYXJyaWVyKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiY2Fycmllcl9lbWFpbFwiLCB2YWx1ZXMuY2Fycmllcl9lbWFpbCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInNjYWNcIiwgdmFsdWVzLnNjYWMpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJwcm92aWRlcl9pZFwiLCB2YWx1ZXMucHJvdmlkZXJfaWQgPT09IDk5OSA/IFwiXCIgOiB2YWx1ZXMucHJvdmlkZXJfaWQpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJwcm92aWRlcl9uYW1lXCIsIHZhbHVlcy5vdGhlcl9wcm92aWRlcik7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInByb3ZpZGVyX2VtYWlsXCIsIHZhbHVlcy5wcm92aWRlcl9lbWFpbCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcIm5vdGVzXCIsIHZhbHVlcy5wcm92aWRlcl9ub3Rlcyk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcIm9yaWdpblwiLCBvcmlnaW4pO1xuXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGRvQWpheFBvc3QodXJsLCBmb3JtRGF0YSk7XG5cbiAgICAgICAgaWYocmVzcG9uc2UuY29kZSA9PT0gNDAwKSB7XG4gICAgICAgICAgICBhbGVydChyZXNwb25zZS5tc2cpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBhbGVydChcIlNlIHJlYWxpesOzIGVsIHJlZ2lzdHJvIGNvcnJlY3RhbWVudGVcIik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZm9ybWlrID0gdXNlRm9ybWlrKHtcbiAgICAgICAgaW5pdGlhbFZhbHVlczogaW5pdFZhbHVlcyxcbiAgICAgICAgdmFsaWRhdGlvblNjaGVtYTogZm9ybVNjaGVtYSxcbiAgICAgICAgb25TdWJtaXQ6IG9uU3VibWl0LFxuICAgICAgICBlbmFibGVSZWluaXRpYWxpemU6IHRydWVcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiIGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy0yeGxcIiBvblN1Ym1pdD17Zm9ybWlrLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCAtbXgtMyBtYi0xMlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweC0zIG1iLTYgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmF5LTcwMCB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiY2Fycmllcl9pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRyYW5zcG9ydGlzdGFcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImJsb2NrIGFwcGVhcmFuY2Utbm9uZSB3LWZ1bGwgYmctZ3JheS0yMDAgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCB0ZXh0LWdyYXktNzAwIHB5LTNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBweC00IHByLTggbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ymctd2hpdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1czpib3JkZXItZ3JheS01MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY2Fycmllcl9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNhcnJpZXJfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtaWsuaGFuZGxlQ2hhbmdlKGV2KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQge3RhcmdldH0gPSBldjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHt2YWx1ZX0gPSB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYXJyaWVyU2VsZWN0ZWQgPSBjYXJyaWVycy5maW5kKGNhcnJpZXIgPT4gY2Fycmllci5pZCA9PT0gdmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEluaXRWYWx1ZXMoT2JqZWN0LmFzc2lnbih7fSwgZm9ybWlrLnZhbHVlcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhYzogY2FycmllclNlbGVjdGVkID8gY2FycmllclNlbGVjdGVkLnNjYWMgOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcnJpZXJfaWQ6IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMuY2Fycmllcl9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXstMX0+Jmx0O1NlbGVjY2lvbmUmZ3Q7PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17OTk5fT5bT3Ryb108L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcnJpZXJzLm1hcCgoY2FycmllciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIHZhbHVlPXtjYXJyaWVyLmlkfSBrZXk9e2luZGV4fT57Y2Fycmllci5uYW1lfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQuY2Fycmllcl9pZCAmJiBmb3JtaWsuZXJyb3JzLmNhcnJpZXJfaWQgPyA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMCB0ZXh0LXNtXCI+e2Zvcm1pay5lcnJvcnMuY2Fycmllcl9pZH08L2Rpdj4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKGZvcm1pay52YWx1ZXMuY2Fycmllcl9pZCkgPT09IDk5OSA/IDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgbWItNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyYXktNzAwIHRleHQteHMgZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwib3RoZXJTY2FjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE90cm8gdHJhbnNwb3J0aXN0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JheS0yMDAgdGV4dC1ncmF5LTcwMCBib3JkZXIgYm9yZGVyLWdyYXktMjAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB5LTMgcHgtNCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpiZy13aGl0ZSBmb2N1czpib3JkZXItZ3JheS01MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm90aGVyX2NhcnJpZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwib3RoZXJfY2FycmllclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsxMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXNjcmliYSBlbCBub21icmUgZGVsIHRyYW5zcG9ydGlzdGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMub3RoZXJfY2Fycmllcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2Zvcm1pay5oYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLm90aGVyX2NhcnJpZXIgJiYgZm9ybWlrLmVycm9ycy5vdGhlcl9jYXJyaWVyID8gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDAgdGV4dC1zbVwiPntmb3JtaWsuZXJyb3JzLm90aGVyX2NhcnJpZXJ9PC9kaXY+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweC0zIGZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS80XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JheS03MDAgdGV4dC14cyBmb250LWJvbGQgbWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJzY2FjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNDQUNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyYXktMjAwIHRleHQtZ3JheS03MDAgYm9yZGVyIGJvcmRlci1ncmF5LTIwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBweS0zIHB4LTQgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6Ym9yZGVyLWdyYXktNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzY2FjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNjYWNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17MTB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5zY2FjfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2Zvcm1pay5oYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLnNjYWMgJiYgZm9ybWlrLmVycm9ycy5zY2FjID8gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDAgdGV4dC1zbVwiPntmb3JtaWsuZXJyb3JzLnNjYWN9PC9kaXY+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTIvM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyYXktNzAwIHRleHQteHMgZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiY2FycmllckVtYWlsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcnJlbyBlbGVjdHLDs25pY28gZGVsIHRyYW5zcG9ydGlzdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyYXktMjAwIHRleHQtZ3JheS03MDAgYm9yZGVyIGJvcmRlci1ncmF5LTIwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBweS0zIHB4LTQgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6Ym9yZGVyLWdyYXktNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjYXJyaWVyX2VtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNhcnJpZXJfZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17NTB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5jYXJyaWVyX2VtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2Zvcm1pay5oYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLmNhcnJpZXJfZW1haWwgJiYgZm9ybWlrLmVycm9ycy5jYXJyaWVyX2VtYWlsID8gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDAgdGV4dC1zbVwiPntmb3JtaWsuZXJyb3JzLmNhcnJpZXJfZW1haWx9PC9kaXY+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCAtbXgtMyBtdC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweC0zIG1iLTYgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmF5LTcwMCB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwicHJvdmlkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm92ZWVkb3IgZGUgR1BTXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJibG9jayBhcHBlYXJhbmNlLW5vbmUgdy1mdWxsIGJnLWdyYXktMjAwIGJvcmRlciBib3JkZXItZ3JheS0yMDAgdGV4dC1ncmF5LTcwMCBweS0zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHgtNCBwci04IGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLXdoaXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXM6Ym9yZGVyLWdyYXktNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInByb3ZpZGVyX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvdmlkZXJfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLnByb3ZpZGVyX2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17LTF9PiZsdDtTZWxlY2Npb25lJmd0Ozwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezk5OX0+W090cm9dPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcnMubWFwKChwcm92aWRlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIHZhbHVlPXtwcm92aWRlci5pZH0ga2V5PXtpbmRleH0gPntwcm92aWRlci5uYW1lfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLnByb3ZpZGVyX2lkICYmIGZvcm1pay5lcnJvcnMucHJvdmlkZXJfaWQgPyA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMCB0ZXh0LXNtXCI+e2Zvcm1pay5lcnJvcnMucHJvdmlkZXJfaWR9PC9kaXY+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihmb3JtaWsudmFsdWVzLnByb3ZpZGVyX2lkKSA9PT0gOTk5ID8gPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBtYi02IFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyYXktNzAwIHRleHQteHMgZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwib3RoZXJQcm92aWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPdHJvIHByb3ZlZWRvciBkZSBHUFNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyYXktMjAwIHRleHQtZ3JheS03MDAgYm9yZGVyIGJvcmRlci1ncmF5LTIwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHktMyBweC00IGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLXdoaXRlIGZvY3VzOmJvcmRlci1ncmF5LTUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwib3RoZXJfcHJvdmlkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwib3RoZXJfcHJvdmlkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17MTAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMub3RoZXJfcHJvdmlkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQub3RoZXJfcHJvdmlkZXIgJiYgZm9ybWlrLmVycm9ycy5vdGhlcl9wcm92aWRlciA/IDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yZWQtNjAwIHRleHQtc21cIj57Zm9ybWlrLmVycm9ycy5vdGhlcl9wcm92aWRlcn08L2Rpdj4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogbnVsbFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMyBtYi02IHctMi8zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmF5LTcwMCB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwicHJvdmlkZXJFbWFpbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcnJlbyBlbGVjdHLDs25pY28gZGVsIHByb3ZlZWRvclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyYXktMjAwIHRleHQtZ3JheS03MDAgYm9yZGVyIGJvcmRlci1ncmF5LTIwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBweS0zIHB4LTQgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6Ym9yZGVyLWdyYXktNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInByb3ZpZGVyX2VtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvdmlkZXJfZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezUwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLnByb3ZpZGVyX2VtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLnByb3ZpZGVyX2VtYWlsICYmIGZvcm1pay5lcnJvcnMucHJvdmlkZXJfZW1haWwgPyA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMCB0ZXh0LXNtXCI+e2Zvcm1pay5lcnJvcnMucHJvdmlkZXJfZW1haWx9PC9kaXY+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgbWItNiBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyYXktNzAwIHRleHQteHMgZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJwcm92aWRlck5vdGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTm90YXNcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmF5LTIwMCB0ZXh0LWdyYXktNzAwIGJvcmRlciBib3JkZXItZ3JheS0yMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHktMyBweC00IGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLXdoaXRlIGZvY3VzOmJvcmRlci1ncmF5LTUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17Nn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInByb3ZpZGVyX25vdGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvdmlkZXJfbm90ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17MjU2fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLnByb3ZpZGVyX25vdGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLnByb3ZpZGVyX25vdGVzICYmIGZvcm1pay5lcnJvcnMucHJvdmlkZXJfbm90ZXMgPyA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMCB0ZXh0LXNtXCI+e2Zvcm1pay5lcnJvcnMucHJvdmlkZXJfbm90ZXN9PC9kaXY+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTIvMTIgZmxleC1zaHJpbmstMCBiZy10ZWFsLTUwMCBob3ZlcjpiZy10ZWFsLTcwMCBiZy1ncmVlbi10aWwtMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyOmJvcmRlci10ZWFsLTcwMCB0ZXh0LXNtIGJvcmRlci0xIHRleHQtd2hpdGUgcHktMSBweC0yIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBFbnZpYXJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn07XG5cblxuUmVhY3RET00ucmVuZGVyKDxSZWdpc3RlciAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7IiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuXG5leHBvcnQgY29uc3QgZG9BamF4UG9zdCA9IGFzeW5jICh1cmwsIGZvcm1EYXRhKSA9PiB7XG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0ICQuYWpheCh7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLCAgLy8gdGVsbCBqUXVlcnkgbm90IHRvIHByb2Nlc3MgdGhlIGRhdGFcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxuICAgICAgICBkYXRhOiBmb3JtRGF0YSxcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59OyJdLCJzb3VyY2VSb290IjoiIn0=