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
var labels = {
  mx: {
    carrier: "Transportista",
    scac: "SCAC",
    other_carrier: "Nombre del transportista",
    carrier_email: "Correo electrónico del transportista",
    provider: "Proveedor de GPS",
    other_provider: "Nombre del proveedor de GPS",
    provider_email: "Correo electrónico del proveedor",
    notes: "Notas",
    send: "Enviar",
    other: "Otro",
    select: "Seleccione"
  },
  us: {
    carrier: "Carrier",
    scac: "SCAC",
    other_carrier: "Carrier",
    carrier_email: "Email carrier",
    provider: "GPS Provider",
    other_provider: "GPS privder",
    provider_email: "Email provider",
    notes: "Notes",
    send: "Send",
    other: "Other",
    select: "Choose"
  }
};

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
    carrier: "Transportista",
    scac: "SCAC",
    other_carrier: "Nombre del transportista",
    carrier_email: "Correo electrónico del transportista",
    provider: "Proveedor de GPS",
    other_provider: "Nombre del proveedor de GPS",
    provider_email: "Correo electrónico del proveedor",
    notes: "Notas",
    send: "Enviar",
    other: "Otro",
    select: "Seleccione"
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      traduction = _useState6[0],
      setTraduction = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_19__["useState"])({
    carrier_id: -1,
    other_carrier: "",
    scac: "",
    carrier_email: "",
    provider_id: -1,
    other_provider: "",
    provider_email: "",
    provider_notes: ""
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      initValues = _useState8[0],
      setInitValues = _useState8[1];

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
    var local = jquery__WEBPACK_IMPORTED_MODULE_23___default()("#local").val();
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
    setTraduction(labels[local]);
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
  }, traduction.carrier), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("select", {
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
  }, "<", traduction.select, ">"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("option", {
    value: 999
  }, "[", traduction.other, "]"), carriers.map(function (carrier, index) {
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
  }, traduction.other_carrier), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("input", {
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
  }, traduction.scac), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("input", {
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
  }, traduction.carrier_email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("input", {
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
  }, traduction.provider), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("select", {
    className: "block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
    id: "provider_id",
    name: "provider_id",
    onChange: formik.handleChange,
    value: formik.values.provider_id,
    onBlur: formik.handleBlur
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("option", {
    value: -1
  }, "<", traduction.select, ">"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("option", {
    value: 999
  }, "[", traduction.other, "]"), providers.map(function (provider, index) {
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
  }, traduction.other_provider), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("input", {
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
  }, traduction.provider_email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("input", {
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
  }, traduction.notes), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("textarea", {
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
  }, traduction.send))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvUGFnZXMvUmVnaXN0ZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy91dGlsaXRpZXMuanMiXSwibmFtZXMiOlsiZm9ybVNjaGVtYSIsIll1cCIsInNoYXBlIiwiY2Fycmllcl9pZCIsIm1pbiIsInJlcXVpcmVkIiwib3RoZXJfY2FycmllciIsInNjYWMiLCJtYXgiLCJjYXJyaWVyX2VtYWlsIiwiZW1haWwiLCJwcm92aWRlcl9pZCIsIm90aGVyX3Byb3ZpZGVyIiwicHJvdmlkZXJfZW1haWwiLCJwcm92aWRlcl9ub3RlcyIsImxhYmVscyIsIm14IiwiY2FycmllciIsInByb3ZpZGVyIiwibm90ZXMiLCJzZW5kIiwib3RoZXIiLCJzZWxlY3QiLCJ1cyIsIlJlZ2lzdGVyIiwidXNlU3RhdGUiLCJwcm92aWRlcnMiLCJzZXRQcm92aWRlcnMiLCJjYXJyaWVycyIsInNldENhcnJpZXJzIiwidHJhZHVjdGlvbiIsInNldFRyYWR1Y3Rpb24iLCJpbml0VmFsdWVzIiwic2V0SW5pdFZhbHVlcyIsImdldEZmcyIsInVybCIsIiQiLCJ2YWwiLCJkb0FqYXhQb3N0IiwicmVzdWx0IiwiZXJyb3IiLCJkYXRhIiwidXNlRWZmZWN0IiwibG9jYWwiLCJpc1N1YnNjcmliZWQiLCJnZXREYXRhIiwicmVzcG9uc2UiLCJvblN1Ym1pdCIsInZhbHVlcyIsIm9yaWdpbiIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJOdW1iZXIiLCJjb2RlIiwiYWxlcnQiLCJtc2ciLCJmb3JtaWsiLCJ1c2VGb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwidmFsaWRhdGlvblNjaGVtYSIsImVuYWJsZVJlaW5pdGlhbGl6ZSIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUJsdXIiLCJldiIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiY2FycmllclNlbGVjdGVkIiwiZmluZCIsImlkIiwiT2JqZWN0IiwiYXNzaWduIiwibWFwIiwiaW5kZXgiLCJuYW1lIiwidG91Y2hlZCIsImVycm9ycyIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFqYXgiLCJ0eXBlIiwicHJvY2Vzc0RhdGEiLCJjb250ZW50VHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBR0MsMkNBQUEsR0FBYUMsS0FBYixDQUFtQjtBQUNsQ0MsWUFBVSxFQUFFRiwyQ0FBQSxHQUFhRyxHQUFiLENBQWlCLENBQWpCLEVBQW9CLDZCQUFwQixFQUFtREMsUUFBbkQsQ0FBNEQsMkJBQTVELENBRHNCO0FBRWxDQyxlQUFhLEVBQUVMLDJDQUFBLEVBRm1CO0FBR2xDTSxNQUFJLEVBQUVOLDJDQUFBLEdBQWFPLEdBQWIsQ0FBaUIsRUFBakIsRUFBcUIsRUFBckIsQ0FINEI7QUFJbENDLGVBQWEsRUFBRVIsMkNBQUEsR0FBYVMsS0FBYixDQUFtQix3QkFBbkIsRUFBNkNMLFFBQTdDLENBQXNELDJCQUF0RCxDQUptQjtBQUtsQ00sYUFBVyxFQUFFViwyQ0FBQSxHQUFhRyxHQUFiLENBQWlCLENBQWpCLEVBQW9CLHlCQUFwQixFQUErQ0MsUUFBL0MsQ0FBd0QsMkJBQXhELENBTHFCO0FBTWxDTyxnQkFBYyxFQUFFWCwyQ0FBQSxFQU5rQjtBQU9sQ1ksZ0JBQWMsRUFBRVosMkNBQUEsR0FBYVMsS0FBYixDQUFtQix3QkFBbkIsRUFBNkNMLFFBQTdDLENBQXNELDJCQUF0RCxDQVBrQjtBQVFsQ1MsZ0JBQWMsRUFBRWIsMkNBQUE7QUFSa0IsQ0FBbkIsQ0FBbkI7QUFXQSxJQUFNYyxNQUFNLEdBQUc7QUFDWEMsSUFBRSxFQUFFO0FBQ0FDLFdBQU8sRUFBRSxlQURUO0FBRUFWLFFBQUksRUFBRSxNQUZOO0FBR0FELGlC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Ozs7OztBQzNVQTtBQUVPLElBQU0zQyxVQUFVO0FBQUEscUVBQUcsaUJBQU9ILEdBQVAsRUFBWWUsUUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNIZCw2Q0FBQyxDQUFDOEMsSUFBRixDQUFPO0FBQ3RCL0MsaUJBQUcsRUFBRUEsR0FEaUI7QUFFdEJnRCxrQkFBSSxFQUFFLE1BRmdCO0FBR3RCQyx5QkFBVyxFQUFFLEtBSFM7QUFHRDtBQUNyQkMseUJBQVcsRUFBRSxLQUpTO0FBS3RCNUMsa0JBQUksRUFBRVM7QUFMZ0IsYUFBUCxDQURHOztBQUFBO0FBQ2xCWCxrQkFEa0I7QUFBQSw2Q0FTZkEsTUFUZTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFWRCxVQUFVO0FBQUE7QUFBQTtBQUFBLEdBQWhCLEMiLCJmaWxlIjoiUmVnaXN0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgZG9BamF4UG9zdCB9IGZyb20gXCIuLi91dGlsaXRpZXNcIjtcblxuY29uc3QgZm9ybVNjaGVtYSA9IFl1cC5vYmplY3QoKS5zaGFwZSh7XG4gICAgY2Fycmllcl9pZDogWXVwLm51bWJlcigpLm1pbigwLCBcIlNlbGVjY2lvbmUgdW4gdHJhbnNwb3J0aXN0YVwiKS5yZXF1aXJlZChcIkVzdGUgY2FtcG8gZXMgb2JsaWdhdG9yaW9cIiksXG4gICAgb3RoZXJfY2FycmllcjogWXVwLnN0cmluZygpLFxuICAgIHNjYWM6IFl1cC5zdHJpbmcoKS5tYXgoMTAsIFwiXCIpLFxuICAgIGNhcnJpZXJfZW1haWw6IFl1cC5zdHJpbmcoKS5lbWFpbChcIkVsIGNvcnJlbyBubyBlcyB2w6FsaWRvXCIpLnJlcXVpcmVkKFwiRXN0ZSBjYW1wbyBlcyBvYmxpZ2F0b3Jpb1wiKSxcbiAgICBwcm92aWRlcl9pZDogWXVwLm51bWJlcigpLm1pbigwLCBcIlNlbGVjY2lvbmUgdW4gcHJvdmVlZG9yXCIpLnJlcXVpcmVkKFwiRXN0ZSBjYW1wbyBlcyBvYmxpZ2F0b3Jpb1wiKSxcbiAgICBvdGhlcl9wcm92aWRlcjogWXVwLnN0cmluZygpLFxuICAgIHByb3ZpZGVyX2VtYWlsOiBZdXAuc3RyaW5nKCkuZW1haWwoXCJFbCBjb3JyZW8gbm8gZXMgdsOhbGlkb1wiKS5yZXF1aXJlZChcIkVzdGUgY2FtcG8gZXMgb2JsaWdhdG9yaW9cIiksXG4gICAgcHJvdmlkZXJfbm90ZXM6IFl1cC5zdHJpbmcoKVxufSk7XG5cbmNvbnN0IGxhYmVscyA9IHtcbiAgICBteDoge1xuICAgICAgICBjYXJyaWVyOiBcIlRyYW5zcG9ydGlzdGFcIixcbiAgICAgICAgc2NhYzogXCJTQ0FDXCIsXG4gICAgICAgIG90aGVyX2NhcnJpZXI6IFwiTm9tYnJlIGRlbCB0cmFuc3BvcnRpc3RhXCIsXG4gICAgICAgIGNhcnJpZXJfZW1haWw6IFwiQ29ycmVvIGVsZWN0csOzbmljbyBkZWwgdHJhbnNwb3J0aXN0YVwiLFxuICAgICAgICBwcm92aWRlcjogXCJQcm92ZWVkb3IgZGUgR1BTXCIsXG4gICAgICAgIG90aGVyX3Byb3ZpZGVyOiBcIk5vbWJyZSBkZWwgcHJvdmVlZG9yIGRlIEdQU1wiLFxuICAgICAgICBwcm92aWRlcl9lbWFpbDogXCJDb3JyZW8gZWxlY3Ryw7NuaWNvIGRlbCBwcm92ZWVkb3JcIixcbiAgICAgICAgbm90ZXM6IFwiTm90YXNcIixcbiAgICAgICAgc2VuZDogXCJFbnZpYXJcIixcbiAgICAgICAgb3RoZXI6IFwiT3Ryb1wiLFxuICAgICAgICBzZWxlY3Q6IFwiU2VsZWNjaW9uZVwiXG4gICAgfSxcbiAgICB1czoge1xuICAgICAgICBjYXJyaWVyOiBcIkNhcnJpZXJcIixcbiAgICAgICAgc2NhYzogXCJTQ0FDXCIsXG4gICAgICAgIG90aGVyX2NhcnJpZXI6IFwiQ2FycmllclwiLFxuICAgICAgICBjYXJyaWVyX2VtYWlsOiBcIkVtYWlsIGNhcnJpZXJcIixcbiAgICAgICAgcHJvdmlkZXI6IFwiR1BTIFByb3ZpZGVyXCIsXG4gICAgICAgIG90aGVyX3Byb3ZpZGVyOiBcIkdQUyBwcml2ZGVyXCIsXG4gICAgICAgIHByb3ZpZGVyX2VtYWlsOiBcIkVtYWlsIHByb3ZpZGVyXCIsXG4gICAgICAgIG5vdGVzOiBcIk5vdGVzXCIsXG4gICAgICAgIHNlbmQ6IFwiU2VuZFwiLFxuICAgICAgICBvdGhlcjogXCJPdGhlclwiLFxuICAgICAgICBzZWxlY3Q6IFwiQ2hvb3NlXCJcbiAgICB9XG59O1xuXG5jb25zdCBSZWdpc3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBbcHJvdmlkZXJzLCBzZXRQcm92aWRlcnNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtjYXJyaWVycywgc2V0Q2FycmllcnNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFt0cmFkdWN0aW9uLCBzZXRUcmFkdWN0aW9uXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgY2FycmllcjogXCJUcmFuc3BvcnRpc3RhXCIsXG4gICAgICAgIHNjYWM6IFwiU0NBQ1wiLFxuICAgICAgICBvdGhlcl9jYXJyaWVyOiBcIk5vbWJyZSBkZWwgdHJhbnNwb3J0aXN0YVwiLFxuICAgICAgICBjYXJyaWVyX2VtYWlsOiBcIkNvcnJlbyBlbGVjdHLDs25pY28gZGVsIHRyYW5zcG9ydGlzdGFcIixcbiAgICAgICAgcHJvdmlkZXI6IFwiUHJvdmVlZG9yIGRlIEdQU1wiLFxuICAgICAgICBvdGhlcl9wcm92aWRlcjogXCJOb21icmUgZGVsIHByb3ZlZWRvciBkZSBHUFNcIixcbiAgICAgICAgcHJvdmlkZXJfZW1haWw6IFwiQ29ycmVvIGVsZWN0csOzbmljbyBkZWwgcHJvdmVlZG9yXCIsXG4gICAgICAgIG5vdGVzOiBcIk5vdGFzXCIsXG4gICAgICAgIHNlbmQ6IFwiRW52aWFyXCIsXG4gICAgICAgIG90aGVyOiBcIk90cm9cIixcbiAgICAgICAgc2VsZWN0OiBcIlNlbGVjY2lvbmVcIlxuICAgIH0pO1xuXG4gICAgY29uc3QgW2luaXRWYWx1ZXMsIHNldEluaXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xuICAgICAgICBjYXJyaWVyX2lkOiAtMSxcbiAgICAgICAgb3RoZXJfY2FycmllcjogXCJcIixcbiAgICAgICAgc2NhYzogXCJcIixcbiAgICAgICAgY2Fycmllcl9lbWFpbDogXCJcIixcblxuICAgICAgICBwcm92aWRlcl9pZDogLTEsXG4gICAgICAgIG90aGVyX3Byb3ZpZGVyOiBcIlwiLFxuICAgICAgICBwcm92aWRlcl9lbWFpbDogXCJcIixcbiAgICAgICAgcHJvdmlkZXJfbm90ZXM6IFwiXCJcbiAgICB9KTtcblxuXG4gICAgY29uc3QgZ2V0RmZzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBsZXQgdXJsID0gJChcIiNnZXRGZlwiKS52YWwoKTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGRvQWpheFBvc3QodXJsLCB7fSk7XG4gICAgICAgIHJldHVybiAhcmVzdWx0LmVycm9yICYmIHJlc3VsdC5kYXRhIDtcbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IGxvY2FsID0gJChcIiNsb2NhbFwiKS52YWwoKTtcbiAgICAgICAgbGV0IGlzU3Vic2NyaWJlZCA9IHRydWU7XG4gICAgICAgIGNvbnN0IGdldERhdGEgPSBhc3luYygpID0+IHtcblxuICAgICAgICAgICAgaWYgKGlzU3Vic2NyaWJlZCkge1xuICAgICAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGdldEZmcygpO1xuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB7Y2FycmllcnMsIHByb3ZpZGVyc30gPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgc2V0UHJvdmlkZXJzKHByb3ZpZGVycyk7XG4gICAgICAgICAgICAgICAgICAgIHNldENhcnJpZXJzKGNhcnJpZXJzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZ2V0RGF0YSgpO1xuXG4gICAgICAgIHNldFRyYWR1Y3Rpb24obGFiZWxzW2xvY2FsXSk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jICh2YWx1ZXMpID0+IHtcbiAgICAgICAgbGV0IHVybCA9ICQoXCIjc2VuZEluZm9VcmxcIikudmFsKCk7XG4gICAgICAgIGxldCBvcmlnaW4gPSAkKFwiI29yaWdpblwiKS52YWwoKTtcblxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiY2Fycmllcl9pZFwiLCBOdW1iZXIodmFsdWVzLmNhcnJpZXJfaWQpID09PSA5OTkgPyBcIlwiIDogdmFsdWVzLmNhcnJpZXJfaWQpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJjYXJyaWVyX25hbWVcIiwgdmFsdWVzLm90aGVyX2NhcnJpZXIpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJjYXJyaWVyX2VtYWlsXCIsIHZhbHVlcy5jYXJyaWVyX2VtYWlsKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwic2NhY1wiLCB2YWx1ZXMuc2NhYyk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInByb3ZpZGVyX2lkXCIsIE51bWJlcih2YWx1ZXMucHJvdmlkZXJfaWQpID09PSA5OTkgPyBcIlwiIDogdmFsdWVzLnByb3ZpZGVyX2lkKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwicHJvdmlkZXJfbmFtZVwiLCB2YWx1ZXMub3RoZXJfcHJvdmlkZXIpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJwcm92aWRlcl9lbWFpbFwiLCB2YWx1ZXMucHJvdmlkZXJfZW1haWwpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJub3Rlc1wiLCB2YWx1ZXMucHJvdmlkZXJfbm90ZXMpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJvcmlnaW5cIiwgb3JpZ2luKTtcblxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBkb0FqYXhQb3N0KHVybCwgZm9ybURhdGEpO1xuXG4gICAgICAgIGlmKHJlc3BvbnNlLmNvZGUgPT09IDQwMCkge1xuICAgICAgICAgICAgYWxlcnQocmVzcG9uc2UubXNnKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoXCJTZSByZWFsaXrDsyBlbCByZWdpc3RybyBjb3JyZWN0YW1lbnRlXCIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XG4gICAgICAgIGluaXRpYWxWYWx1ZXM6IGluaXRWYWx1ZXMsXG4gICAgICAgIHZhbGlkYXRpb25TY2hlbWE6IGZvcm1TY2hlbWEsXG4gICAgICAgIG9uU3VibWl0OiBvblN1Ym1pdCxcbiAgICAgICAgZW5hYmxlUmVpbml0aWFsaXplOiB0cnVlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctMnhsXCIgb25TdWJtaXQ9e2Zvcm1pay5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgLW14LTMgbWItMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBtYi02IFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JheS03MDAgdGV4dC14cyBmb250LWJvbGQgbWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImNhcnJpZXJfaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRyYWR1Y3Rpb24uY2FycmllciB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJibG9jayBhcHBlYXJhbmNlLW5vbmUgdy1mdWxsIGJnLWdyYXktMjAwIGJvcmRlciBib3JkZXItZ3JheS0yMDAgdGV4dC1ncmF5LTcwMCBweS0zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHgtNCBwci04IGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLXdoaXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXM6Ym9yZGVyLWdyYXktNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNhcnJpZXJfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjYXJyaWVyX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2Zvcm1pay5oYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXYpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWlrLmhhbmRsZUNoYW5nZShldik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHt0YXJnZXR9ID0gZXY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB7dmFsdWV9ID0gdGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2FycmllclNlbGVjdGVkID0gY2FycmllcnMuZmluZChjYXJyaWVyID0+IGNhcnJpZXIuaWQgPT09IHZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJbml0VmFsdWVzKE9iamVjdC5hc3NpZ24oe30sIGZvcm1pay52YWx1ZXMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWM6IGNhcnJpZXJTZWxlY3RlZCA/IGNhcnJpZXJTZWxlY3RlZC5zY2FjIDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJyaWVyX2lkOiB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLmNhcnJpZXJfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17LTF9PiZsdDt7dHJhZHVjdGlvbi5zZWxlY3R9Jmd0Ozwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezk5OX0+W3t0cmFkdWN0aW9uLm90aGVyfV08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcnJpZXJzLm1hcCgoY2FycmllciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIHZhbHVlPXtjYXJyaWVyLmlkfSBrZXk9e2luZGV4fT57Y2Fycmllci5uYW1lfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQuY2Fycmllcl9pZCAmJiBmb3JtaWsuZXJyb3JzLmNhcnJpZXJfaWQgPyA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMCB0ZXh0LXNtXCI+e2Zvcm1pay5lcnJvcnMuY2Fycmllcl9pZH08L2Rpdj4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKGZvcm1pay52YWx1ZXMuY2Fycmllcl9pZCkgPT09IDk5OSA/IDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgbWItNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyYXktNzAwIHRleHQteHMgZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwib3RoZXJTY2FjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdHJhZHVjdGlvbi5vdGhlcl9jYXJyaWVyIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyYXktMjAwIHRleHQtZ3JheS03MDAgYm9yZGVyIGJvcmRlci1ncmF5LTIwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBweS0zIHB4LTQgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6Ym9yZGVyLWdyYXktNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJvdGhlcl9jYXJyaWVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm90aGVyX2NhcnJpZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17MTAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVzY3JpYmEgZWwgbm9tYnJlIGRlbCB0cmFuc3BvcnRpc3RhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLm90aGVyX2NhcnJpZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtaWsudG91Y2hlZC5vdGhlcl9jYXJyaWVyICYmIGZvcm1pay5lcnJvcnMub3RoZXJfY2FycmllciA/IDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yZWQtNjAwIHRleHQtc21cIj57Zm9ybWlrLmVycm9ycy5vdGhlcl9jYXJyaWVyfTwvZGl2PiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBudWxsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyYXktNzAwIHRleHQteHMgZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwic2NhY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRyYWR1Y3Rpb24uc2NhYyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmF5LTIwMCB0ZXh0LWdyYXktNzAwIGJvcmRlciBib3JkZXItZ3JheS0yMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHktMyBweC00IGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLXdoaXRlIGZvY3VzOmJvcmRlci1ncmF5LTUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2NhY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzY2FjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezEwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMuc2NhY31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtaWsudG91Y2hlZC5zY2FjICYmIGZvcm1pay5lcnJvcnMuc2NhYyA/IDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yZWQtNjAwIHRleHQtc21cIj57Zm9ybWlrLmVycm9ycy5zY2FjfTwvZGl2PiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yLzNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmF5LTcwMCB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImNhcnJpZXJFbWFpbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRyYWR1Y3Rpb24uY2Fycmllcl9lbWFpbCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmF5LTIwMCB0ZXh0LWdyYXktNzAwIGJvcmRlciBib3JkZXItZ3JheS0yMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHktMyBweC00IGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLXdoaXRlIGZvY3VzOmJvcmRlci1ncmF5LTUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY2Fycmllcl9lbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjYXJyaWVyX2VtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezUwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMuY2Fycmllcl9lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtaWsudG91Y2hlZC5jYXJyaWVyX2VtYWlsICYmIGZvcm1pay5lcnJvcnMuY2Fycmllcl9lbWFpbCA/IDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yZWQtNjAwIHRleHQtc21cIj57Zm9ybWlrLmVycm9ycy5jYXJyaWVyX2VtYWlsfTwvZGl2PiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgLW14LTMgbXQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBtYi02IFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JheS03MDAgdGV4dC14cyBmb250LWJvbGQgbWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInByb3ZpZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0cmFkdWN0aW9uLnByb3ZpZGVyIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImJsb2NrIGFwcGVhcmFuY2Utbm9uZSB3LWZ1bGwgYmctZ3JheS0yMDAgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCB0ZXh0LWdyYXktNzAwIHB5LTNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBweC00IHByLTggbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ymctd2hpdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1czpib3JkZXItZ3JheS01MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicHJvdmlkZXJfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm92aWRlcl9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMucHJvdmlkZXJfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXstMX0+Jmx0O3t0cmFkdWN0aW9uLnNlbGVjdH0mZ3Q7PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17OTk5fT5be3RyYWR1Y3Rpb24ub3RoZXJ9XTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzLm1hcCgocHJvdmlkZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiB2YWx1ZT17cHJvdmlkZXIuaWR9IGtleT17aW5kZXh9ID57cHJvdmlkZXIubmFtZX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtaWsudG91Y2hlZC5wcm92aWRlcl9pZCAmJiBmb3JtaWsuZXJyb3JzLnByb3ZpZGVyX2lkID8gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDAgdGV4dC1zbVwiPntmb3JtaWsuZXJyb3JzLnByb3ZpZGVyX2lkfTwvZGl2PiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoZm9ybWlrLnZhbHVlcy5wcm92aWRlcl9pZCkgPT09IDk5OSA/IDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgbWItNiBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmF5LTcwMCB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIm90aGVyUHJvdmlkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0cmFkdWN0aW9uLm90aGVyX3Byb3ZpZGVyIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyYXktMjAwIHRleHQtZ3JheS03MDAgYm9yZGVyIGJvcmRlci1ncmF5LTIwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHktMyBweC00IGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLXdoaXRlIGZvY3VzOmJvcmRlci1ncmF5LTUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwib3RoZXJfcHJvdmlkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwib3RoZXJfcHJvdmlkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17MTAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMub3RoZXJfcHJvdmlkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQub3RoZXJfcHJvdmlkZXIgJiYgZm9ybWlrLmVycm9ycy5vdGhlcl9wcm92aWRlciA/IDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yZWQtNjAwIHRleHQtc21cIj57Zm9ybWlrLmVycm9ycy5vdGhlcl9wcm92aWRlcn08L2Rpdj4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogbnVsbFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMyBtYi02IHctMi8zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmF5LTcwMCB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwicHJvdmlkZXJFbWFpbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdHJhZHVjdGlvbi5wcm92aWRlcl9lbWFpbCB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JheS0yMDAgdGV4dC1ncmF5LTcwMCBib3JkZXIgYm9yZGVyLWdyYXktMjAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB5LTMgcHgtNCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpiZy13aGl0ZSBmb2N1czpib3JkZXItZ3JheS01MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicHJvdmlkZXJfZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm92aWRlcl9lbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17NTB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMucHJvdmlkZXJfZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQucHJvdmlkZXJfZW1haWwgJiYgZm9ybWlrLmVycm9ycy5wcm92aWRlcl9lbWFpbCA/IDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yZWQtNjAwIHRleHQtc21cIj57Zm9ybWlrLmVycm9ycy5wcm92aWRlcl9lbWFpbH08L2Rpdj4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBtYi02IFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JheS03MDAgdGV4dC14cyBmb250LWJvbGQgbWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInByb3ZpZGVyTm90ZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRyYWR1Y3Rpb24ubm90ZXMgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyYXktMjAwIHRleHQtZ3JheS03MDAgYm9yZGVyIGJvcmRlci1ncmF5LTIwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBweS0zIHB4LTQgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6Ym9yZGVyLWdyYXktNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXs2fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicHJvdmlkZXJfbm90ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm92aWRlcl9ub3Rlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsyNTZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMucHJvdmlkZXJfbm90ZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQucHJvdmlkZXJfbm90ZXMgJiYgZm9ybWlrLmVycm9ycy5wcm92aWRlcl9ub3RlcyA/IDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yZWQtNjAwIHRleHQtc21cIj57Zm9ybWlrLmVycm9ycy5wcm92aWRlcl9ub3Rlc308L2Rpdj4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMi8xMiBmbGV4LXNocmluay0wIGJnLXRlYWwtNTAwIGhvdmVyOmJnLXRlYWwtNzAwIGJnLWdyZWVuLXRpbC0yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXI6Ym9yZGVyLXRlYWwtNzAwIHRleHQtc20gYm9yZGVyLTEgdGV4dC13aGl0ZSBweS0xIHB4LTIgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdHJhZHVjdGlvbi5zZW5kIH1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn07XG5cblxuUmVhY3RET00ucmVuZGVyKDxSZWdpc3RlciAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7IiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuXG5leHBvcnQgY29uc3QgZG9BamF4UG9zdCA9IGFzeW5jICh1cmwsIGZvcm1EYXRhKSA9PiB7XG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0ICQuYWpheCh7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLCAgLy8gdGVsbCBqUXVlcnkgbm90IHRvIHByb2Nlc3MgdGhlIGRhdGFcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxuICAgICAgICBkYXRhOiBmb3JtRGF0YSxcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59OyJdLCJzb3VyY2VSb290IjoiIn0=