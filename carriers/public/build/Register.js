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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvUGFnZXMvUmVnaXN0ZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy91dGlsaXRpZXMuanMiXSwibmFtZXMiOlsiZm9ybVNjaGVtYSIsIll1cCIsInNoYXBlIiwiY2Fycmllcl9pZCIsIm1pbiIsInJlcXVpcmVkIiwib3RoZXJfY2FycmllciIsInNjYWMiLCJtYXgiLCJjYXJyaWVyX2VtYWlsIiwiZW1haWwiLCJwcm92aWRlcl9pZCIsIm90aGVyX3Byb3ZpZGVyIiwicHJvdmlkZXJfZW1haWwiLCJwcm92aWRlcl9ub3RlcyIsIlJlZ2lzdGVyIiwidXNlU3RhdGUiLCJwcm92aWRlcnMiLCJzZXRQcm92aWRlcnMiLCJjYXJyaWVycyIsInNldENhcnJpZXJzIiwiaW5pdFZhbHVlcyIsInNldEluaXRWYWx1ZXMiLCJmb3JtaWsiLCJ1c2VGb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwidmFsaWRhdGlvblNjaGVtYSIsIm9uU3VibWl0IiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsImVuYWJsZVJlaW5pdGlhbGl6ZSIsImdldEZmcyIsInVybCIsIiQiLCJ2YWwiLCJkb0FqYXhQb3N0IiwicmVzdWx0IiwiZXJyb3IiLCJkYXRhIiwidXNlRWZmZWN0IiwiaXNTdWJzY3JpYmVkIiwiZ2V0RGF0YSIsInJlc3BvbnNlIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImNvZGUiLCJhbGVydCIsIm1zZyIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUJsdXIiLCJldiIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiY2FycmllclNlbGVjdGVkIiwiZmluZCIsImNhcnJpZXIiLCJpZCIsIk9iamVjdCIsImFzc2lnbiIsIm1hcCIsImluZGV4IiwibmFtZSIsInRvdWNoZWQiLCJlcnJvcnMiLCJOdW1iZXIiLCJwcm92aWRlciIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFqYXgi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QXVDUyxNQUFNLENBQUMyQyxNQUFQLENBQWNwRCxjQUFyRCxDQUFoRSxHQUE2SSxJQWZsSixDQTdESixDQW5HSixlQWtMSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJO0FBQ0ksYUFBUyxFQUFDLGlJQURkO0FBR0ksUUFBSSxFQUFDO0FBSFQsY0FESixDQWxMSixDQURKLENBREo7QUErTEgsQ0ExUUQ7O0FBNlFBdUQsaURBQVEsQ0FBQ0MsTUFBVCxlQUFnQiw0REFBQyxRQUFELE9BQWhCLEVBQThCQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBOUIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL1JBO0FBRU8sSUFBTXBDLFVBQVU7QUFBQSxxRUFBRyxpQkFBT0gsR0FBUCxFQUFZVyxRQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0hWLDZDQUFDLENBQUN1QyxJQUFGLENBQU87QUFDdEJ4QyxpQkFBRyxFQUFFQSxHQURpQjtBQUV0QnlDLGtCQUFJLEVBQUUsTUFGZ0I7QUFHdEJDLHlCQUFXLEVBQUUsS0FIUztBQUdEO0FBQ3JCQyx5QkFBVyxFQUFFLEtBSlM7QUFLdEJyQyxrQkFBSSxFQUFFSztBQUxnQixhQUFQLENBREc7O0FBQUE7QUFDbEJQLGtCQURrQjtBQUFBLDZDQVNmQSxNQVRlOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVZELFVBQVU7QUFBQTtBQUFBO0FBQUEsR0FBaEIsQyIsImZpbGUiOiJSZWdpc3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCI7XG5pbXBvcnQgKiBhcyBZdXAgZnJvbSAneXVwJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBkb0FqYXhQb3N0IH0gZnJvbSBcIi4uL3V0aWxpdGllc1wiO1xuXG5jb25zdCBmb3JtU2NoZW1hID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcbiAgICBjYXJyaWVyX2lkOiBZdXAubnVtYmVyKCkubWluKDAsIFwiU2VsZWNjaW9uZSB1biB0cmFuc3BvcnRpc3RhXCIpLnJlcXVpcmVkKFwiRXN0ZSBjYW1wbyBlcyBvYmxpZ2F0b3Jpb1wiKSxcbiAgICBvdGhlcl9jYXJyaWVyOiBZdXAuc3RyaW5nKCksXG4gICAgc2NhYzogWXVwLnN0cmluZygpLm1heCgxMCwgXCJcIiksXG4gICAgY2Fycmllcl9lbWFpbDogWXVwLnN0cmluZygpLmVtYWlsKFwiRWwgY29ycmVvIG5vIGVzIHbDoWxpZG9cIikucmVxdWlyZWQoXCJFc3RlIGNhbXBvIGVzIG9ibGlnYXRvcmlvXCIpLFxuICAgIHByb3ZpZGVyX2lkOiBZdXAubnVtYmVyKCkubWluKDAsIFwiU2VsZWNjaW9uZSB1biBwcm92ZWVkb3JcIikucmVxdWlyZWQoXCJFc3RlIGNhbXBvIGVzIG9ibGlnYXRvcmlvXCIpLFxuICAgIG90aGVyX3Byb3ZpZGVyOiBZdXAuc3RyaW5nKCksXG4gICAgcHJvdmlkZXJfZW1haWw6IFl1cC5zdHJpbmcoKS5lbWFpbChcIkVsIGNvcnJlbyBubyBlcyB2w6FsaWRvXCIpLnJlcXVpcmVkKFwiRXN0ZSBjYW1wbyBlcyBvYmxpZ2F0b3Jpb1wiKSxcbiAgICBwcm92aWRlcl9ub3RlczogWXVwLnN0cmluZygpXG59KTtcblxuY29uc3QgUmVnaXN0ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgW3Byb3ZpZGVycywgc2V0UHJvdmlkZXJzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbY2FycmllcnMsIHNldENhcnJpZXJzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIGNvbnN0IFtpbml0VmFsdWVzLCBzZXRJbml0VmFsdWVzXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgY2Fycmllcl9pZDogLTEsXG4gICAgICAgIG90aGVyX2NhcnJpZXI6IFwiXCIsXG4gICAgICAgIHNjYWM6IFwiXCIsXG4gICAgICAgIGNhcnJpZXJfZW1haWw6IFwiXCIsXG5cbiAgICAgICAgcHJvdmlkZXJfaWQ6IC0xLFxuICAgICAgICBvdGhlcl9wcm92aWRlcjogXCJcIixcbiAgICAgICAgcHJvdmlkZXJfZW1haWw6IFwiXCIsXG4gICAgICAgIHByb3ZpZGVyX25vdGVzOiBcIlwiXG4gICAgfSk7XG5cbiAgICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xuICAgICAgICBpbml0aWFsVmFsdWVzOiBpbml0VmFsdWVzLFxuICAgICAgICB2YWxpZGF0aW9uU2NoZW1hOiBmb3JtU2NoZW1hLFxuICAgICAgICBvblN1Ym1pdDogKHZhbHVlcykgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWVzKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5hYmxlUmVpbml0aWFsaXplOiB0cnVlXG4gICAgfSk7XG5cbiAgICBjb25zdCBnZXRGZnMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGxldCB1cmwgPSAkKFwiI2dldEZmXCIpLnZhbCgpO1xuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgZG9BamF4UG9zdCh1cmwsIHt9KTtcbiAgICAgICAgcmV0dXJuICFyZXN1bHQuZXJyb3IgJiYgcmVzdWx0LmRhdGEgO1xuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgaXNTdWJzY3JpYmVkID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jKCkgPT4ge1xuXG4gICAgICAgICAgICBpZiAoaXNTdWJzY3JpYmVkKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZ2V0RmZzKCk7XG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHtjYXJyaWVycywgcHJvdmlkZXJzfSA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgICAgICBzZXRQcm92aWRlcnMocHJvdmlkZXJzKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2FycmllcnMoY2FycmllcnMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGdldERhdGEoKTtcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgaXNTdWJzY3JpYmVkID0gZmFsc2VcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKHZhbHVlcykgPT4ge1xuICAgICAgICBsZXQgdXJsID0gJChcIiNzZW5kSW5mb1VybFwiKS52YWwoKTtcblxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiY2Fycmllcl9pZFwiLCB2YWx1ZXMuY2Fycmllcl9pZCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImNhcnJpZXJfbmFtZVwiLCB2YWx1ZXMub3RoZXJfY2Fycmllcik7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImNhcnJpZXJfZW1haWxcIiwgdmFsdWVzLmNhcnJpZXJfZW1haWwpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJzY2FjXCIsIHZhbHVlcy5zY2FjKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwicHJvdmlkZXJfaWRcIiwgdmFsdWVzLnByb3ZpZGVyX2lkKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwicHJvdmlkZXJfbmFtZVwiLCB2YWx1ZXMub3RoZXJfcHJvdmlkZXIpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJwcm92aWRlcl9lbWFpbFwiLCB2YWx1ZXMucHJvdmlkZXJfZW1haWwpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJub3Rlc1wiLCB2YWx1ZXMucHJvdmlkZXJfbm90ZXMpO1xuXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGRvQWpheFBvc3QodXJsLCBmb3JtRGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2VcIiwgcmVzcG9uc2UpO1xuICAgICAgICBpZihyZXNwb25zZS5jb2RlID09PSA0MDApIHtcbiAgICAgICAgICAgIGFsZXJ0KHJlc3BvbnNlLm1zZyk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiU2UgcmVhbGl6w7MgZWwgcmVnaXN0cm8gY29ycmVjdGFtZW50ZVwiKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctMnhsXCIgb25TdWJtaXQ9e2Zvcm1pay5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgLW14LTMgbWItMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBtYi02IFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JheS03MDAgdGV4dC14cyBmb250LWJvbGQgbWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImNhcnJpZXJfaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUcmFuc3BvcnRpc3RhXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJibG9jayBhcHBlYXJhbmNlLW5vbmUgdy1mdWxsIGJnLWdyYXktMjAwIGJvcmRlciBib3JkZXItZ3JheS0yMDAgdGV4dC1ncmF5LTcwMCBweS0zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHgtNCBwci04IGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLXdoaXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXM6Ym9yZGVyLWdyYXktNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNhcnJpZXJfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjYXJyaWVyX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2Zvcm1pay5oYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXYpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWlrLmhhbmRsZUNoYW5nZShldik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHt0YXJnZXR9ID0gZXY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB7dmFsdWV9ID0gdGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2FycmllclNlbGVjdGVkID0gY2FycmllcnMuZmluZChjYXJyaWVyID0+IGNhcnJpZXIuaWQgPT09IHZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJbml0VmFsdWVzKE9iamVjdC5hc3NpZ24oe30sIGZvcm1pay52YWx1ZXMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWM6IGNhcnJpZXJTZWxlY3RlZCA/IGNhcnJpZXJTZWxlY3RlZC5zY2FjIDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJyaWVyX2lkOiB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLmNhcnJpZXJfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17LTF9PiZsdDtTZWxlY2Npb25lJmd0Ozwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezk5OX0+W090cm9dPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJyaWVycy5tYXAoKGNhcnJpZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiB2YWx1ZT17Y2Fycmllci5pZH0ga2V5PXtpbmRleH0+e2NhcnJpZXIubmFtZX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQuY2Fycmllcl9pZCAmJiBmb3JtaWsuZXJyb3JzLmNhcnJpZXJfaWQgPyA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMCB0ZXh0LXNtXCI+e2Zvcm1pay5lcnJvcnMuY2Fycmllcl9pZH08L2Rpdj4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKGZvcm1pay52YWx1ZXMuY2Fycmllcl9pZCkgPT09IDk5OSA/IDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgbWItNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyYXktNzAwIHRleHQteHMgZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwib3RoZXJTY2FjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE90cm8gdHJhbnNwb3J0aXN0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JheS0yMDAgdGV4dC1ncmF5LTcwMCBib3JkZXIgYm9yZGVyLWdyYXktMjAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB5LTMgcHgtNCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpiZy13aGl0ZSBmb2N1czpib3JkZXItZ3JheS01MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm90aGVyX2NhcnJpZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwib3RoZXJfY2FycmllclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsxMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXNjcmliYSBlbCBub21icmUgZGVsIHRyYW5zcG9ydGlzdGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMub3RoZXJfY2Fycmllcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2Zvcm1pay5oYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLm90aGVyX2NhcnJpZXIgJiYgZm9ybWlrLmVycm9ycy5vdGhlcl9jYXJyaWVyID8gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDAgdGV4dC1zbVwiPntmb3JtaWsuZXJyb3JzLm90aGVyX2NhcnJpZXJ9PC9kaXY+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweC0zIGZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS80XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JheS03MDAgdGV4dC14cyBmb250LWJvbGQgbWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJzY2FjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNDQUNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyYXktMjAwIHRleHQtZ3JheS03MDAgYm9yZGVyIGJvcmRlci1ncmF5LTIwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBweS0zIHB4LTQgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6Ym9yZGVyLWdyYXktNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzY2FjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNjYWNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17MTB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5zY2FjfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2Zvcm1pay5oYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLnNjYWMgJiYgZm9ybWlrLmVycm9ycy5zY2FjID8gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDAgdGV4dC1zbVwiPntmb3JtaWsuZXJyb3JzLnNjYWN9PC9kaXY+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTIvM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyYXktNzAwIHRleHQteHMgZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiY2FycmllckVtYWlsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcnJlbyBlbGVjdHLDs25pY28gZGVsIHRyYW5zcG9ydGlzdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyYXktMjAwIHRleHQtZ3JheS03MDAgYm9yZGVyIGJvcmRlci1ncmF5LTIwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBweS0zIHB4LTQgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6Ym9yZGVyLWdyYXktNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjYXJyaWVyX2VtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNhcnJpZXJfZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17NTB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5jYXJyaWVyX2VtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2Zvcm1pay5oYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLmNhcnJpZXJfZW1haWwgJiYgZm9ybWlrLmVycm9ycy5jYXJyaWVyX2VtYWlsID8gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDAgdGV4dC1zbVwiPntmb3JtaWsuZXJyb3JzLmNhcnJpZXJfZW1haWx9PC9kaXY+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCAtbXgtMyBtdC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweC0zIG1iLTYgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmF5LTcwMCB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwicHJvdmlkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm92ZWVkb3IgZGUgR1BTXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJibG9jayBhcHBlYXJhbmNlLW5vbmUgdy1mdWxsIGJnLWdyYXktMjAwIGJvcmRlciBib3JkZXItZ3JheS0yMDAgdGV4dC1ncmF5LTcwMCBweS0zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHgtNCBwci04IGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLXdoaXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXM6Ym9yZGVyLWdyYXktNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInByb3ZpZGVyX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvdmlkZXJfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLnByb3ZpZGVyX2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17LTF9PiZsdDtTZWxlY2Npb25lJmd0Ozwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezk5OX0+W090cm9dPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcnMubWFwKChwcm92aWRlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIHZhbHVlPXtwcm92aWRlci5pZH0ga2V5PXtpbmRleH0gPntwcm92aWRlci5uYW1lfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLnByb3ZpZGVyX2lkICYmIGZvcm1pay5lcnJvcnMucHJvdmlkZXJfaWQgPyA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMCB0ZXh0LXNtXCI+e2Zvcm1pay5lcnJvcnMucHJvdmlkZXJfaWR9PC9kaXY+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihmb3JtaWsudmFsdWVzLnByb3ZpZGVyX2lkKSA9PT0gOTk5ID8gPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBtYi02IFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyYXktNzAwIHRleHQteHMgZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwib3RoZXJQcm92aWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPdHJvIHByb3ZlZWRvciBkZSBHUFNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyYXktMjAwIHRleHQtZ3JheS03MDAgYm9yZGVyIGJvcmRlci1ncmF5LTIwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHktMyBweC00IGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLXdoaXRlIGZvY3VzOmJvcmRlci1ncmF5LTUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwib3RoZXJfcHJvdmlkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwib3RoZXJfcHJvdmlkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17MTAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMub3RoZXJfcHJvdmlkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQub3RoZXJfcHJvdmlkZXIgJiYgZm9ybWlrLmVycm9ycy5vdGhlcl9wcm92aWRlciA/IDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yZWQtNjAwIHRleHQtc21cIj57Zm9ybWlrLmVycm9ycy5vdGhlcl9wcm92aWRlcn08L2Rpdj4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogbnVsbFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMyBtYi02IHctMi8zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmF5LTcwMCB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwicHJvdmlkZXJFbWFpbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcnJlbyBlbGVjdHLDs25pY28gZGVsIHByb3ZlZWRvclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyYXktMjAwIHRleHQtZ3JheS03MDAgYm9yZGVyIGJvcmRlci1ncmF5LTIwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBweS0zIHB4LTQgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6Ym9yZGVyLWdyYXktNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInByb3ZpZGVyX2VtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvdmlkZXJfZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezUwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLnByb3ZpZGVyX2VtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLnByb3ZpZGVyX2VtYWlsICYmIGZvcm1pay5lcnJvcnMucHJvdmlkZXJfZW1haWwgPyA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMCB0ZXh0LXNtXCI+e2Zvcm1pay5lcnJvcnMucHJvdmlkZXJfZW1haWx9PC9kaXY+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgbWItNiBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyYXktNzAwIHRleHQteHMgZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJwcm92aWRlck5vdGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTm90YXNcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmF5LTIwMCB0ZXh0LWdyYXktNzAwIGJvcmRlciBib3JkZXItZ3JheS0yMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHktMyBweC00IGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLXdoaXRlIGZvY3VzOmJvcmRlci1ncmF5LTUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17Nn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInByb3ZpZGVyX25vdGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvdmlkZXJfbm90ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17MjU2fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLnByb3ZpZGVyX25vdGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLnByb3ZpZGVyX25vdGVzICYmIGZvcm1pay5lcnJvcnMucHJvdmlkZXJfbm90ZXMgPyA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMCB0ZXh0LXNtXCI+e2Zvcm1pay5lcnJvcnMucHJvdmlkZXJfbm90ZXN9PC9kaXY+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTIvMTIgZmxleC1zaHJpbmstMCBiZy10ZWFsLTUwMCBob3ZlcjpiZy10ZWFsLTcwMCBib3JkZXItdGVhbC01MDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Zlcjpib3JkZXItdGVhbC03MDAgdGV4dC1zbSBib3JkZXItNCB0ZXh0LXdoaXRlIHB5LTEgcHgtMiBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgRW52aWFyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59O1xuXG5cblJlYWN0RE9NLnJlbmRlcig8UmVnaXN0ZXIgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpOyIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcblxuZXhwb3J0IGNvbnN0IGRvQWpheFBvc3QgPSBhc3luYyAodXJsLCBmb3JtRGF0YSkgPT4ge1xuICAgIGxldCByZXN1bHQgPSBhd2FpdCAkLmFqYXgoe1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSwgIC8vIHRlbGwgalF1ZXJ5IG5vdCB0byBwcm9jZXNzIHRoZSBkYXRhXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcbiAgICAgICAgZGF0YTogZm9ybURhdGEsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTsiXSwic291cmNlUm9vdCI6IiJ9