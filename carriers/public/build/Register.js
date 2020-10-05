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
      var url, formData, response;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              url = jquery__WEBPACK_IMPORTED_MODULE_23___default()("#sendInfoUrl").val();
              formData = new FormData();
              formData.append("carrier_id", values.carrier_id);
              formData.append("carrier_name", values.other_carrier);
              formData.append("carrier_email", values.carrier_email);
              formData.append("scac", values.scac);
              formData.append("provider_id", values.provider_id);
              formData.append("provider_name", values.other_provider);
              formData.append("provider_email", values.provider_email);
              formData.append("notes", values.provider_notes);
              _context3.next = 12;
              return Object(_utilities__WEBPACK_IMPORTED_MODULE_24__["doAjaxPost"])(url, formData);

            case 12:
              response = _context3.sent;
              console.log("response", response);

              if (response.code === 400) {
                alert(response.msg);
              } else {
                alert("Se realizó el registro correctamente");
              }

            case 15:
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
    className: "w-2/12 flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 ",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvUGFnZXMvUmVnaXN0ZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy91dGlsaXRpZXMuanMiXSwibmFtZXMiOlsiZm9ybVNjaGVtYSIsIll1cCIsInNoYXBlIiwiY2Fycmllcl9pZCIsIm1pbiIsInJlcXVpcmVkIiwib3RoZXJfY2FycmllciIsInNjYWMiLCJtYXgiLCJjYXJyaWVyX2VtYWlsIiwiZW1haWwiLCJwcm92aWRlcl9pZCIsIm90aGVyX3Byb3ZpZGVyIiwicHJvdmlkZXJfZW1haWwiLCJwcm92aWRlcl9ub3RlcyIsIlJlZ2lzdGVyIiwidXNlU3RhdGUiLCJwcm92aWRlcnMiLCJzZXRQcm92aWRlcnMiLCJjYXJyaWVycyIsInNldENhcnJpZXJzIiwiaW5pdFZhbHVlcyIsInNldEluaXRWYWx1ZXMiLCJnZXRGZnMiLCJ1cmwiLCIkIiwidmFsIiwiZG9BamF4UG9zdCIsInJlc3VsdCIsImVycm9yIiwiZGF0YSIsInVzZUVmZmVjdCIsImlzU3Vic2NyaWJlZCIsImdldERhdGEiLCJyZXNwb25zZSIsIm9uU3VibWl0IiwidmFsdWVzIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImNvbnNvbGUiLCJsb2ciLCJjb2RlIiwiYWxlcnQiLCJtc2ciLCJmb3JtaWsiLCJ1c2VGb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwidmFsaWRhdGlvblNjaGVtYSIsImVuYWJsZVJlaW5pdGlhbGl6ZSIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUJsdXIiLCJldiIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiY2FycmllclNlbGVjdGVkIiwiZmluZCIsImNhcnJpZXIiLCJpZCIsIk9iamVjdCIsImFzc2lnbiIsIm1hcCIsImluZGV4IiwibmFtZSIsInRvdWNoZWQiLCJlcnJvcnMiLCJOdW1iZXIiLCJwcm92aWRlciIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFqYXgi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UyxFQUFDO0FBQWYsa0JBQ0k7QUFDSSxhQUFTLEVBQUMsaUlBRGQ7QUFHSSxRQUFJLEVBQUM7QUFIVCxjQURKLENBbExKLENBREosQ0FESjtBQStMSCxDQXpRRDs7QUE0UUF1RCxpREFBUSxDQUFDQyxNQUFULGVBQWdCLDREQUFDLFFBQUQsT0FBaEIsRUFBOEJDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUE5QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5UkE7QUFFTyxJQUFNN0MsVUFBVTtBQUFBLHFFQUFHLGlCQUFPSCxHQUFQLEVBQVlhLFFBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDSFosNkNBQUMsQ0FBQ2dELElBQUYsQ0FBTztBQUN0QmpELGlCQUFHLEVBQUVBLEdBRGlCO0FBRXRCa0Qsa0JBQUksRUFBRSxNQUZnQjtBQUd0QkMseUJBQVcsRUFBRSxLQUhTO0FBR0Q7QUFDckJDLHlCQUFXLEVBQUUsS0FKUztBQUt0QjlDLGtCQUFJLEVBQUVPO0FBTGdCLGFBQVAsQ0FERzs7QUFBQTtBQUNsQlQsa0JBRGtCO0FBQUEsNkNBU2ZBLE1BVGU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBVkQsVUFBVTtBQUFBO0FBQUE7QUFBQSxHQUFoQixDIiwiZmlsZSI6IlJlZ2lzdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gXCJmb3JtaWtcIjtcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IGRvQWpheFBvc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzXCI7XG5cbmNvbnN0IGZvcm1TY2hlbWEgPSBZdXAub2JqZWN0KCkuc2hhcGUoe1xuICAgIGNhcnJpZXJfaWQ6IFl1cC5udW1iZXIoKS5taW4oMCwgXCJTZWxlY2Npb25lIHVuIHRyYW5zcG9ydGlzdGFcIikucmVxdWlyZWQoXCJFc3RlIGNhbXBvIGVzIG9ibGlnYXRvcmlvXCIpLFxuICAgIG90aGVyX2NhcnJpZXI6IFl1cC5zdHJpbmcoKSxcbiAgICBzY2FjOiBZdXAuc3RyaW5nKCkubWF4KDEwLCBcIlwiKSxcbiAgICBjYXJyaWVyX2VtYWlsOiBZdXAuc3RyaW5nKCkuZW1haWwoXCJFbCBjb3JyZW8gbm8gZXMgdsOhbGlkb1wiKS5yZXF1aXJlZChcIkVzdGUgY2FtcG8gZXMgb2JsaWdhdG9yaW9cIiksXG4gICAgcHJvdmlkZXJfaWQ6IFl1cC5udW1iZXIoKS5taW4oMCwgXCJTZWxlY2Npb25lIHVuIHByb3ZlZWRvclwiKS5yZXF1aXJlZChcIkVzdGUgY2FtcG8gZXMgb2JsaWdhdG9yaW9cIiksXG4gICAgb3RoZXJfcHJvdmlkZXI6IFl1cC5zdHJpbmcoKSxcbiAgICBwcm92aWRlcl9lbWFpbDogWXVwLnN0cmluZygpLmVtYWlsKFwiRWwgY29ycmVvIG5vIGVzIHbDoWxpZG9cIikucmVxdWlyZWQoXCJFc3RlIGNhbXBvIGVzIG9ibGlnYXRvcmlvXCIpLFxuICAgIHByb3ZpZGVyX25vdGVzOiBZdXAuc3RyaW5nKClcbn0pO1xuXG5jb25zdCBSZWdpc3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBbcHJvdmlkZXJzLCBzZXRQcm92aWRlcnNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtjYXJyaWVycywgc2V0Q2FycmllcnNdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgY29uc3QgW2luaXRWYWx1ZXMsIHNldEluaXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xuICAgICAgICBjYXJyaWVyX2lkOiAtMSxcbiAgICAgICAgb3RoZXJfY2FycmllcjogXCJcIixcbiAgICAgICAgc2NhYzogXCJcIixcbiAgICAgICAgY2Fycmllcl9lbWFpbDogXCJcIixcblxuICAgICAgICBwcm92aWRlcl9pZDogLTEsXG4gICAgICAgIG90aGVyX3Byb3ZpZGVyOiBcIlwiLFxuICAgICAgICBwcm92aWRlcl9lbWFpbDogXCJcIixcbiAgICAgICAgcHJvdmlkZXJfbm90ZXM6IFwiXCJcbiAgICB9KTtcblxuXG4gICAgY29uc3QgZ2V0RmZzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBsZXQgdXJsID0gJChcIiNnZXRGZlwiKS52YWwoKTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGRvQWpheFBvc3QodXJsLCB7fSk7XG4gICAgICAgIHJldHVybiAhcmVzdWx0LmVycm9yICYmIHJlc3VsdC5kYXRhIDtcbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IGlzU3Vic2NyaWJlZCA9IHRydWU7XG4gICAgICAgIGNvbnN0IGdldERhdGEgPSBhc3luYygpID0+IHtcblxuICAgICAgICAgICAgaWYgKGlzU3Vic2NyaWJlZCkge1xuICAgICAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGdldEZmcygpO1xuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB7Y2FycmllcnMsIHByb3ZpZGVyc30gPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgc2V0UHJvdmlkZXJzKHByb3ZpZGVycyk7XG4gICAgICAgICAgICAgICAgICAgIHNldENhcnJpZXJzKGNhcnJpZXJzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBnZXREYXRhKCk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jICh2YWx1ZXMpID0+IHtcbiAgICAgICAgbGV0IHVybCA9ICQoXCIjc2VuZEluZm9VcmxcIikudmFsKCk7XG5cbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImNhcnJpZXJfaWRcIiwgdmFsdWVzLmNhcnJpZXJfaWQpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJjYXJyaWVyX25hbWVcIiwgdmFsdWVzLm90aGVyX2NhcnJpZXIpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJjYXJyaWVyX2VtYWlsXCIsIHZhbHVlcy5jYXJyaWVyX2VtYWlsKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwic2NhY1wiLCB2YWx1ZXMuc2NhYyk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInByb3ZpZGVyX2lkXCIsIHZhbHVlcy5wcm92aWRlcl9pZCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInByb3ZpZGVyX25hbWVcIiwgdmFsdWVzLm90aGVyX3Byb3ZpZGVyKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwicHJvdmlkZXJfZW1haWxcIiwgdmFsdWVzLnByb3ZpZGVyX2VtYWlsKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwibm90ZXNcIiwgdmFsdWVzLnByb3ZpZGVyX25vdGVzKTtcblxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBkb0FqYXhQb3N0KHVybCwgZm9ybURhdGEpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlXCIsIHJlc3BvbnNlKTtcbiAgICAgICAgaWYocmVzcG9uc2UuY29kZSA9PT0gNDAwKSB7XG4gICAgICAgICAgICBhbGVydChyZXNwb25zZS5tc2cpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBhbGVydChcIlNlIHJlYWxpesOzIGVsIHJlZ2lzdHJvIGNvcnJlY3RhbWVudGVcIik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZm9ybWlrID0gdXNlRm9ybWlrKHtcbiAgICAgICAgaW5pdGlhbFZhbHVlczogaW5pdFZhbHVlcyxcbiAgICAgICAgdmFsaWRhdGlvblNjaGVtYTogZm9ybVNjaGVtYSxcbiAgICAgICAgb25TdWJtaXQ6IG9uU3VibWl0LFxuICAgICAgICBlbmFibGVSZWluaXRpYWxpemU6IHRydWVcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiIGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy0yeGxcIiBvblN1Ym1pdD17Zm9ybWlrLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCAtbXgtMyBtYi0xMlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweC0zIG1iLTYgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmF5LTcwMCB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiY2Fycmllcl9pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRyYW5zcG9ydGlzdGFcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImJsb2NrIGFwcGVhcmFuY2Utbm9uZSB3LWZ1bGwgYmctZ3JheS0yMDAgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCB0ZXh0LWdyYXktNzAwIHB5LTNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBweC00IHByLTggbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ymctd2hpdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1czpib3JkZXItZ3JheS01MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY2Fycmllcl9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNhcnJpZXJfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtaWsuaGFuZGxlQ2hhbmdlKGV2KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQge3RhcmdldH0gPSBldjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHt2YWx1ZX0gPSB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYXJyaWVyU2VsZWN0ZWQgPSBjYXJyaWVycy5maW5kKGNhcnJpZXIgPT4gY2Fycmllci5pZCA9PT0gdmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEluaXRWYWx1ZXMoT2JqZWN0LmFzc2lnbih7fSwgZm9ybWlrLnZhbHVlcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhYzogY2FycmllclNlbGVjdGVkID8gY2FycmllclNlbGVjdGVkLnNjYWMgOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcnJpZXJfaWQ6IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMuY2Fycmllcl9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXstMX0+Jmx0O1NlbGVjY2lvbmUmZ3Q7PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17OTk5fT5bT3Ryb108L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcnJpZXJzLm1hcCgoY2FycmllciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIHZhbHVlPXtjYXJyaWVyLmlkfSBrZXk9e2luZGV4fT57Y2Fycmllci5uYW1lfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtaWsudG91Y2hlZC5jYXJyaWVyX2lkICYmIGZvcm1pay5lcnJvcnMuY2Fycmllcl9pZCA/IDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yZWQtNjAwIHRleHQtc21cIj57Zm9ybWlrLmVycm9ycy5jYXJyaWVyX2lkfTwvZGl2PiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoZm9ybWlrLnZhbHVlcy5jYXJyaWVyX2lkKSA9PT0gOTk5ID8gPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBtYi02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JheS03MDAgdGV4dC14cyBmb250LWJvbGQgbWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJvdGhlclNjYWNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT3RybyB0cmFuc3BvcnRpc3RhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmF5LTIwMCB0ZXh0LWdyYXktNzAwIGJvcmRlciBib3JkZXItZ3JheS0yMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHktMyBweC00IGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLXdoaXRlIGZvY3VzOmJvcmRlci1ncmF5LTUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwib3RoZXJfY2FycmllclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJvdGhlcl9jYXJyaWVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezEwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFc2NyaWJhIGVsIG5vbWJyZSBkZWwgdHJhbnNwb3J0aXN0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5vdGhlcl9jYXJyaWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQub3RoZXJfY2FycmllciAmJiBmb3JtaWsuZXJyb3JzLm90aGVyX2NhcnJpZXIgPyA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMCB0ZXh0LXNtXCI+e2Zvcm1pay5lcnJvcnMub3RoZXJfY2Fycmllcn08L2Rpdj4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogbnVsbFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmF5LTcwMCB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInNjYWNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU0NBQ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JheS0yMDAgdGV4dC1ncmF5LTcwMCBib3JkZXIgYm9yZGVyLWdyYXktMjAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB5LTMgcHgtNCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpiZy13aGl0ZSBmb2N1czpib3JkZXItZ3JheS01MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNjYWNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2NhY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsxMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLnNjYWN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQuc2NhYyAmJiBmb3JtaWsuZXJyb3JzLnNjYWMgPyA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMCB0ZXh0LXNtXCI+e2Zvcm1pay5lcnJvcnMuc2NhY308L2Rpdj4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMi8zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JheS03MDAgdGV4dC14cyBmb250LWJvbGQgbWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJjYXJyaWVyRW1haWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29ycmVvIGVsZWN0csOzbmljbyBkZWwgdHJhbnNwb3J0aXN0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JheS0yMDAgdGV4dC1ncmF5LTcwMCBib3JkZXIgYm9yZGVyLWdyYXktMjAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB5LTMgcHgtNCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpiZy13aGl0ZSBmb2N1czpib3JkZXItZ3JheS01MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNhcnJpZXJfZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2Fycmllcl9lbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXs1MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLmNhcnJpZXJfZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQuY2Fycmllcl9lbWFpbCAmJiBmb3JtaWsuZXJyb3JzLmNhcnJpZXJfZW1haWwgPyA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMCB0ZXh0LXNtXCI+e2Zvcm1pay5lcnJvcnMuY2Fycmllcl9lbWFpbH08L2Rpdj4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIC1teC0zIG10LTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgbWItNiBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyYXktNzAwIHRleHQteHMgZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJwcm92aWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb3ZlZWRvciBkZSBHUFNcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImJsb2NrIGFwcGVhcmFuY2Utbm9uZSB3LWZ1bGwgYmctZ3JheS0yMDAgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCB0ZXh0LWdyYXktNzAwIHB5LTNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBweC00IHByLTggbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ymctd2hpdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1czpib3JkZXItZ3JheS01MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicHJvdmlkZXJfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm92aWRlcl9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMucHJvdmlkZXJfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXstMX0+Jmx0O1NlbGVjY2lvbmUmZ3Q7PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17OTk5fT5bT3Ryb108L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVycy5tYXAoKHByb3ZpZGVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxvcHRpb24gdmFsdWU9e3Byb3ZpZGVyLmlkfSBrZXk9e2luZGV4fSA+e3Byb3ZpZGVyLm5hbWV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQucHJvdmlkZXJfaWQgJiYgZm9ybWlrLmVycm9ycy5wcm92aWRlcl9pZCA/IDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yZWQtNjAwIHRleHQtc21cIj57Zm9ybWlrLmVycm9ycy5wcm92aWRlcl9pZH08L2Rpdj4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKGZvcm1pay52YWx1ZXMucHJvdmlkZXJfaWQpID09PSA5OTkgPyA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweC0zIG1iLTYgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JheS03MDAgdGV4dC14cyBmb250LWJvbGQgbWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJvdGhlclByb3ZpZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE90cm8gcHJvdmVlZG9yIGRlIEdQU1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JheS0yMDAgdGV4dC1ncmF5LTcwMCBib3JkZXIgYm9yZGVyLWdyYXktMjAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBweS0zIHB4LTQgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6Ym9yZGVyLWdyYXktNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJvdGhlcl9wcm92aWRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJvdGhlcl9wcm92aWRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsxMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5vdGhlcl9wcm92aWRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtaWsudG91Y2hlZC5vdGhlcl9wcm92aWRlciAmJiBmb3JtaWsuZXJyb3JzLm90aGVyX3Byb3ZpZGVyID8gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDAgdGV4dC1zbVwiPntmb3JtaWsuZXJyb3JzLm90aGVyX3Byb3ZpZGVyfTwvZGl2PiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBudWxsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0zIG1iLTYgdy0yLzNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyYXktNzAwIHRleHQteHMgZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJwcm92aWRlckVtYWlsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29ycmVvIGVsZWN0csOzbmljbyBkZWwgcHJvdmVlZG9yXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JheS0yMDAgdGV4dC1ncmF5LTcwMCBib3JkZXIgYm9yZGVyLWdyYXktMjAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB5LTMgcHgtNCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpiZy13aGl0ZSBmb2N1czpib3JkZXItZ3JheS01MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicHJvdmlkZXJfZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm92aWRlcl9lbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17NTB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMucHJvdmlkZXJfZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQucHJvdmlkZXJfZW1haWwgJiYgZm9ybWlrLmVycm9ycy5wcm92aWRlcl9lbWFpbCA/IDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yZWQtNjAwIHRleHQtc21cIj57Zm9ybWlrLmVycm9ycy5wcm92aWRlcl9lbWFpbH08L2Rpdj4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBtYi02IFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JheS03MDAgdGV4dC14cyBmb250LWJvbGQgbWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInByb3ZpZGVyTm90ZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3Rhc1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyYXktMjAwIHRleHQtZ3JheS03MDAgYm9yZGVyIGJvcmRlci1ncmF5LTIwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBweS0zIHB4LTQgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6Ym9yZGVyLWdyYXktNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXs2fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicHJvdmlkZXJfbm90ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm92aWRlcl9ub3Rlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsyNTZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMucHJvdmlkZXJfbm90ZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQucHJvdmlkZXJfbm90ZXMgJiYgZm9ybWlrLmVycm9ycy5wcm92aWRlcl9ub3RlcyA/IDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yZWQtNjAwIHRleHQtc21cIj57Zm9ybWlrLmVycm9ycy5wcm92aWRlcl9ub3Rlc308L2Rpdj4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMi8xMiBmbGV4LXNocmluay0wIGJnLXRlYWwtNTAwIGhvdmVyOmJnLXRlYWwtNzAwIGJvcmRlci10ZWFsLTUwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyOmJvcmRlci10ZWFsLTcwMCB0ZXh0LXNtIGJvcmRlci00IHRleHQtd2hpdGUgcHktMSBweC0yIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBFbnZpYXJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn07XG5cblxuUmVhY3RET00ucmVuZGVyKDxSZWdpc3RlciAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7IiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuXG5leHBvcnQgY29uc3QgZG9BamF4UG9zdCA9IGFzeW5jICh1cmwsIGZvcm1EYXRhKSA9PiB7XG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0ICQuYWpheCh7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLCAgLy8gdGVsbCBqUXVlcnkgbm90IHRvIHByb2Nlc3MgdGhlIGRhdGFcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxuICAgICAgICBkYXRhOiBmb3JtRGF0YSxcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59OyJdLCJzb3VyY2VSb290IjoiIn0=