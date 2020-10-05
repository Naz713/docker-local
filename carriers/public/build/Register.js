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
/* harmony import */ var _images_loading_gif_gif__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../images/loading-gif.gif */ "./assets/images/loading-gif.gif");




















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
var init = {
  carrier_id: -1,
  other_carrier: "",
  scac: "",
  carrier_email: "",
  provider_id: -1,
  other_provider: "",
  provider_email: "",
  provider_notes: ""
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

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_19__["useState"])(labels.mx),
      _useState6 = _slicedToArray(_useState5, 2),
      traduction = _useState6[0],
      setTraduction = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_19__["useState"])(init),
      _useState8 = _slicedToArray(_useState7, 2),
      initValues = _useState8[0],
      setInitValues = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_19__["useState"])(false),
      _useState10 = _slicedToArray(_useState9, 2),
      loading = _useState10[0],
      setLoading = _useState10[1];

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
              setLoading(true);
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
              _context3.next = 15;
              return Object(_utilities__WEBPACK_IMPORTED_MODULE_24__["doAjaxPost"])(url, formData);

            case 15:
              response = _context3.sent;

              if (response.code === 400) {
                alert(response.msg);
              } else {
                alert("Se realizó el registro correctamente");
                setInitValues(init);
              }

              setLoading(false);

            case 18:
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
    type: "submit",
    disabled: loading
  }, traduction.send))), loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("div", {
    className: "absolute flex justify-center items-center w-full h-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("img", {
    src: _images_loading_gif_gif__WEBPACK_IMPORTED_MODULE_25__["default"],
    alt: "",
    className: "w-10 h-10"
  })) : null);
};

react_dom__WEBPACK_IMPORTED_MODULE_20___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(Register, null), document.getElementById('root'));

/***/ }),

/***/ "./assets/images/loading-gif.gif":
/*!***************************************!*\
  !*** ./assets/images/loading-gif.gif ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/build/images/loading-gif.19050de8.gif");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvUGFnZXMvUmVnaXN0ZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvbG9hZGluZy1naWYuZ2lmIiwid2VicGFjazovLy8uL2Fzc2V0cy91dGlsaXRpZXMuanMiXSwibmFtZXMiOlsiZm9ybVNjaGVtYSIsIll1cCIsInNoYXBlIiwiY2Fycmllcl9pZCIsIm1pbiIsInJlcXVpcmVkIiwib3RoZXJfY2FycmllciIsInNjYWMiLCJtYXgiLCJjYXJyaWVyX2VtYWlsIiwiZW1haWwiLCJwcm92aWRlcl9pZCIsIm90aGVyX3Byb3ZpZGVyIiwicHJvdmlkZXJfZW1haWwiLCJwcm92aWRlcl9ub3RlcyIsImxhYmVscyIsIm14IiwiY2FycmllciIsInByb3ZpZGVyIiwibm90ZXMiLCJzZW5kIiwib3RoZXIiLCJzZWxlY3QiLCJ1cyIsImluaXQiLCJSZWdpc3RlciIsInVzZVN0YXRlIiwicHJvdmlkZXJzIiwic2V0UHJvdmlkZXJzIiwiY2FycmllcnMiLCJzZXRDYXJyaWVycyIsInRyYWR1Y3Rpb24iLCJzZXRUcmFkdWN0aW9uIiwiaW5pdFZhbHVlcyIsInNldEluaXRWYWx1ZXMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImdldEZmcyIsInVybCIsIiQiLCJ2YWwiLCJkb0FqYXhQb3N0IiwicmVzdWx0IiwiZXJyb3IiLCJkYXRhIiwidXNlRWZmZWN0IiwibG9jYWwiLCJpc1N1YnNjcmliZWQiLCJnZXREYXRhIiwicmVzcG9uc2UiLCJvblN1Ym1pdCIsInZhbHVlcyIsIm9yaWdpbiIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJOdW1iZXIiLCJjb2RlIiwiYWxlcnQiLCJtc2ciLCJmb3JtaWsiLCJ1c2VGb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwidmFsaWRhdGlvblNjaGVtYSIsImVuYWJsZVJlaW5pdGlhbGl6ZSIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUJsdXIiLCJldiIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiY2FycmllclNlbGVjdGVkIiwiZmluZCIsImlkIiwiT2JqZWN0IiwiYXNzaWduIiwibWFwIiwiaW5kZXgiLCJuYW1lIiwidG91Y2hlZCIsImVycm9ycyIsImxvYWRlckdpZiIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFqYXgiLCJ0eXBlIiwicHJvY2Vzc0RhdGEiLCJjb250ZW50VHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBR0MsMkNBQUEsR0FBYUMsS0FBYixDQUFtQjtBQUNsQ0MsWUFBVSxFQUFFRiwyQ0FBQSxHQUFhRyxHQUFiLENBQWlCLENBQWpCLEVBQW9CLDZCQUFwQixFQUFtREMsUUFBbkQsQ0FBNEQsMkJBQTVELENBRHNCO0FBRWxDQyxlQUFhLEVBQUVMLDJDQUFBLEVBRm1CO0FBR2xDTSxNQUFJLEVBQUVOLDJDQUFBLEdBQWFPLEdBQWIsQ0FBaUIsRUFBakIsRUFBcUIsRUFBckIsQ0FINEI7QUFJbENDLGVBQWEsRUFBRVIsMkNBQUEsR0FBYVMsS0FBYixDQUFtQix3QkFBbkIsRUFBNkNMLFFBQTdDLENBQXNELDJCQUF0RCxDQUptQjtBQUtsQ00sYUFBVyxFQUFFViwyQ0FBQSxHQUFhRyxHQUFiLENBQWlCLENBQWpCLEVBQW9CLHlCQUFwQixFQUErQ0MsUUFBL0MsQ0FBd0QsMkJBQXhELENBTHFCO0FBTWxDTyxnQkFBYyxFQUFFWCwyQ0FBQSxFQU5rQjtBQU9sQ1ksZ0JBQWMsRUFBRVosMkNBQUEsR0FBYVMsS0FBYixDQUFtQix3QkFBbkIsRUFBNkNMLFFBQTdDLENBQXNELDJCQUF0RCxDQVBrQjtBQVFsQ1MsZ0JBQWMsRUFBRWIsMkNBQUE7QUFSa0IsQ0FBbkIs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QXRDLElBRE0sQ0FBSCxHQUVFLElBaE1qQixDQURKO0FBcU1ILENBNVFEOztBQStRQUMsaURBQVEsQ0FBQ0MsTUFBVCxlQUFnQiw0REFBQyxRQUFELE9BQWhCLEVBQThCQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBOUIsRTs7Ozs7Ozs7Ozs7O0FDMVVBO0FBQWUsdUdBQXdDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F2RDtBQUVPLElBQU01QyxVQUFVO0FBQUEscUVBQUcsaUJBQU9ILEdBQVAsRUFBWWUsUUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNIZCw2Q0FBQyxDQUFDK0MsSUFBRixDQUFPO0FBQ3RCaEQsaUJBQUcsRUFBRUEsR0FEaUI7QUFFdEJpRCxrQkFBSSxFQUFFLE1BRmdCO0FBR3RCQyx5QkFBVyxFQUFFLEtBSFM7QUFHRDtBQUNyQkMseUJBQVcsRUFBRSxLQUpTO0FBS3RCN0Msa0JBQUksRUFBRVM7QUFMZ0IsYUFBUCxDQURHOztBQUFBO0FBQ2xCWCxrQkFEa0I7QUFBQSw2Q0FTZkEsTUFUZTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFWRCxVQUFVO0FBQUE7QUFBQTtBQUFBLEdBQWhCLEMiLCJmaWxlIjoiUmVnaXN0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgZG9BamF4UG9zdCB9IGZyb20gXCIuLi91dGlsaXRpZXNcIjtcbmltcG9ydCBsb2FkZXJHaWYgZnJvbSAnLi4vaW1hZ2VzL2xvYWRpbmctZ2lmLmdpZic7XG5cbmNvbnN0IGZvcm1TY2hlbWEgPSBZdXAub2JqZWN0KCkuc2hhcGUoe1xuICAgIGNhcnJpZXJfaWQ6IFl1cC5udW1iZXIoKS5taW4oMCwgXCJTZWxlY2Npb25lIHVuIHRyYW5zcG9ydGlzdGFcIikucmVxdWlyZWQoXCJFc3RlIGNhbXBvIGVzIG9ibGlnYXRvcmlvXCIpLFxuICAgIG90aGVyX2NhcnJpZXI6IFl1cC5zdHJpbmcoKSxcbiAgICBzY2FjOiBZdXAuc3RyaW5nKCkubWF4KDEwLCBcIlwiKSxcbiAgICBjYXJyaWVyX2VtYWlsOiBZdXAuc3RyaW5nKCkuZW1haWwoXCJFbCBjb3JyZW8gbm8gZXMgdsOhbGlkb1wiKS5yZXF1aXJlZChcIkVzdGUgY2FtcG8gZXMgb2JsaWdhdG9yaW9cIiksXG4gICAgcHJvdmlkZXJfaWQ6IFl1cC5udW1iZXIoKS5taW4oMCwgXCJTZWxlY2Npb25lIHVuIHByb3ZlZWRvclwiKS5yZXF1aXJlZChcIkVzdGUgY2FtcG8gZXMgb2JsaWdhdG9yaW9cIiksXG4gICAgb3RoZXJfcHJvdmlkZXI6IFl1cC5zdHJpbmcoKSxcbiAgICBwcm92aWRlcl9lbWFpbDogWXVwLnN0cmluZygpLmVtYWlsKFwiRWwgY29ycmVvIG5vIGVzIHbDoWxpZG9cIikucmVxdWlyZWQoXCJFc3RlIGNhbXBvIGVzIG9ibGlnYXRvcmlvXCIpLFxuICAgIHByb3ZpZGVyX25vdGVzOiBZdXAuc3RyaW5nKClcbn0pO1xuXG5jb25zdCBsYWJlbHMgPSB7XG4gICAgbXg6IHtcbiAgICAgICAgY2FycmllcjogXCJUcmFuc3BvcnRpc3RhXCIsXG4gICAgICAgIHNjYWM6IFwiU0NBQ1wiLFxuICAgICAgICBvdGhlcl9jYXJyaWVyOiBcIk5vbWJyZSBkZWwgdHJhbnNwb3J0aXN0YVwiLFxuICAgICAgICBjYXJyaWVyX2VtYWlsOiBcIkNvcnJlbyBlbGVjdHLDs25pY28gZGVsIHRyYW5zcG9ydGlzdGFcIixcbiAgICAgICAgcHJvdmlkZXI6IFwiUHJvdmVlZG9yIGRlIEdQU1wiLFxuICAgICAgICBvdGhlcl9wcm92aWRlcjogXCJOb21icmUgZGVsIHByb3ZlZWRvciBkZSBHUFNcIixcbiAgICAgICAgcHJvdmlkZXJfZW1haWw6IFwiQ29ycmVvIGVsZWN0csOzbmljbyBkZWwgcHJvdmVlZG9yXCIsXG4gICAgICAgIG5vdGVzOiBcIk5vdGFzXCIsXG4gICAgICAgIHNlbmQ6IFwiRW52aWFyXCIsXG4gICAgICAgIG90aGVyOiBcIk90cm9cIixcbiAgICAgICAgc2VsZWN0OiBcIlNlbGVjY2lvbmVcIlxuICAgIH0sXG4gICAgdXM6IHtcbiAgICAgICAgY2FycmllcjogXCJDYXJyaWVyXCIsXG4gICAgICAgIHNjYWM6IFwiU0NBQ1wiLFxuICAgICAgICBvdGhlcl9jYXJyaWVyOiBcIkNhcnJpZXJcIixcbiAgICAgICAgY2Fycmllcl9lbWFpbDogXCJFbWFpbCBjYXJyaWVyXCIsXG4gICAgICAgIHByb3ZpZGVyOiBcIkdQUyBQcm92aWRlclwiLFxuICAgICAgICBvdGhlcl9wcm92aWRlcjogXCJHUFMgcHJpdmRlclwiLFxuICAgICAgICBwcm92aWRlcl9lbWFpbDogXCJFbWFpbCBwcm92aWRlclwiLFxuICAgICAgICBub3RlczogXCJOb3Rlc1wiLFxuICAgICAgICBzZW5kOiBcIlNlbmRcIixcbiAgICAgICAgb3RoZXI6IFwiT3RoZXJcIixcbiAgICAgICAgc2VsZWN0OiBcIkNob29zZVwiXG4gICAgfVxufTtcblxuY29uc3QgaW5pdCA9IHtcbiAgICBjYXJyaWVyX2lkOiAtMSxcbiAgICBvdGhlcl9jYXJyaWVyOiBcIlwiLFxuICAgIHNjYWM6IFwiXCIsXG4gICAgY2Fycmllcl9lbWFpbDogXCJcIixcbiAgICBwcm92aWRlcl9pZDogLTEsXG4gICAgb3RoZXJfcHJvdmlkZXI6IFwiXCIsXG4gICAgcHJvdmlkZXJfZW1haWw6IFwiXCIsXG4gICAgcHJvdmlkZXJfbm90ZXM6IFwiXCJcbn07XG5cbmNvbnN0IFJlZ2lzdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IFtwcm92aWRlcnMsIHNldFByb3ZpZGVyc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2NhcnJpZXJzLCBzZXRDYXJyaWVyc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW3RyYWR1Y3Rpb24sIHNldFRyYWR1Y3Rpb25dID0gdXNlU3RhdGUobGFiZWxzLm14KTtcbiAgICBjb25zdCBbaW5pdFZhbHVlcywgc2V0SW5pdFZhbHVlc10gPSB1c2VTdGF0ZShpbml0KTtcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBnZXRGZnMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGxldCB1cmwgPSAkKFwiI2dldEZmXCIpLnZhbCgpO1xuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgZG9BamF4UG9zdCh1cmwsIHt9KTtcbiAgICAgICAgcmV0dXJuICFyZXN1bHQuZXJyb3IgJiYgcmVzdWx0LmRhdGEgO1xuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgbG9jYWwgPSAkKFwiI2xvY2FsXCIpLnZhbCgpO1xuICAgICAgICBsZXQgaXNTdWJzY3JpYmVkID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jKCkgPT4ge1xuXG4gICAgICAgICAgICBpZiAoaXNTdWJzY3JpYmVkKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZ2V0RmZzKCk7XG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHtjYXJyaWVycywgcHJvdmlkZXJzfSA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgICAgICBzZXRQcm92aWRlcnMocHJvdmlkZXJzKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2FycmllcnMoY2FycmllcnMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBnZXREYXRhKCk7XG5cbiAgICAgICAgc2V0VHJhZHVjdGlvbihsYWJlbHNbbG9jYWxdKTtcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgaXNTdWJzY3JpYmVkID0gZmFsc2VcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKHZhbHVlcykgPT4ge1xuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICBsZXQgdXJsID0gJChcIiNzZW5kSW5mb1VybFwiKS52YWwoKTtcbiAgICAgICAgbGV0IG9yaWdpbiA9ICQoXCIjb3JpZ2luXCIpLnZhbCgpO1xuXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJjYXJyaWVyX2lkXCIsIE51bWJlcih2YWx1ZXMuY2Fycmllcl9pZCkgPT09IDk5OSA/IFwiXCIgOiB2YWx1ZXMuY2Fycmllcl9pZCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImNhcnJpZXJfbmFtZVwiLCB2YWx1ZXMub3RoZXJfY2Fycmllcik7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImNhcnJpZXJfZW1haWxcIiwgdmFsdWVzLmNhcnJpZXJfZW1haWwpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJzY2FjXCIsIHZhbHVlcy5zY2FjKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwicHJvdmlkZXJfaWRcIiwgTnVtYmVyKHZhbHVlcy5wcm92aWRlcl9pZCkgPT09IDk5OSA/IFwiXCIgOiB2YWx1ZXMucHJvdmlkZXJfaWQpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJwcm92aWRlcl9uYW1lXCIsIHZhbHVlcy5vdGhlcl9wcm92aWRlcik7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInByb3ZpZGVyX2VtYWlsXCIsIHZhbHVlcy5wcm92aWRlcl9lbWFpbCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcIm5vdGVzXCIsIHZhbHVlcy5wcm92aWRlcl9ub3Rlcyk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcIm9yaWdpblwiLCBvcmlnaW4pO1xuXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGRvQWpheFBvc3QodXJsLCBmb3JtRGF0YSk7XG5cbiAgICAgICAgaWYocmVzcG9uc2UuY29kZSA9PT0gNDAwKSB7XG4gICAgICAgICAgICBhbGVydChyZXNwb25zZS5tc2cpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBhbGVydChcIlNlIHJlYWxpesOzIGVsIHJlZ2lzdHJvIGNvcnJlY3RhbWVudGVcIik7XG4gICAgICAgICAgICBzZXRJbml0VmFsdWVzKGluaXQpO1xuICAgICAgICB9XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH07XG5cbiAgICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xuICAgICAgICBpbml0aWFsVmFsdWVzOiBpbml0VmFsdWVzLFxuICAgICAgICB2YWxpZGF0aW9uU2NoZW1hOiBmb3JtU2NoZW1hLFxuICAgICAgICBvblN1Ym1pdDogb25TdWJtaXQsXG4gICAgICAgIGVuYWJsZVJlaW5pdGlhbGl6ZTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCIgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LTJ4bFwiIG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIC1teC0zIG1iLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgbWItNiBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyYXktNzAwIHRleHQteHMgZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJjYXJyaWVyX2lkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0cmFkdWN0aW9uLmNhcnJpZXIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiYmxvY2sgYXBwZWFyYW5jZS1ub25lIHctZnVsbCBiZy1ncmF5LTIwMCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHRleHQtZ3JheS03MDAgcHktM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB4LTQgcHItOCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpiZy13aGl0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzOmJvcmRlci1ncmF5LTUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjYXJyaWVyX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2Fycmllcl9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1pay5oYW5kbGVDaGFuZ2UoZXYpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB7dGFyZ2V0fSA9IGV2O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQge3ZhbHVlfSA9IHRhcmdldDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhcnJpZXJTZWxlY3RlZCA9IGNhcnJpZXJzLmZpbmQoY2FycmllciA9PiBjYXJyaWVyLmlkID09PSB2YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW5pdFZhbHVlcyhPYmplY3QuYXNzaWduKHt9LCBmb3JtaWsudmFsdWVzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FjOiBjYXJyaWVyU2VsZWN0ZWQgPyBjYXJyaWVyU2VsZWN0ZWQuc2NhYyA6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Fycmllcl9pZDogdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5jYXJyaWVyX2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ey0xfT4mbHQ7e3RyYWR1Y3Rpb24uc2VsZWN0fSZndDs8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXs5OTl9Plt7dHJhZHVjdGlvbi5vdGhlcn1dPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJyaWVycy5tYXAoKGNhcnJpZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiB2YWx1ZT17Y2Fycmllci5pZH0ga2V5PXtpbmRleH0+e2NhcnJpZXIubmFtZX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cblxuICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLmNhcnJpZXJfaWQgJiYgZm9ybWlrLmVycm9ycy5jYXJyaWVyX2lkID8gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDAgdGV4dC1zbVwiPntmb3JtaWsuZXJyb3JzLmNhcnJpZXJfaWR9PC9kaXY+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihmb3JtaWsudmFsdWVzLmNhcnJpZXJfaWQpID09PSA5OTkgPyA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweC0zIG1iLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmF5LTcwMCB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIm90aGVyU2NhY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRyYWR1Y3Rpb24ub3RoZXJfY2FycmllciB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmF5LTIwMCB0ZXh0LWdyYXktNzAwIGJvcmRlciBib3JkZXItZ3JheS0yMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHktMyBweC00IGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLXdoaXRlIGZvY3VzOmJvcmRlci1ncmF5LTUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwib3RoZXJfY2FycmllclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJvdGhlcl9jYXJyaWVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezEwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFc2NyaWJhIGVsIG5vbWJyZSBkZWwgdHJhbnNwb3J0aXN0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5vdGhlcl9jYXJyaWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQub3RoZXJfY2FycmllciAmJiBmb3JtaWsuZXJyb3JzLm90aGVyX2NhcnJpZXIgPyA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMCB0ZXh0LXNtXCI+e2Zvcm1pay5lcnJvcnMub3RoZXJfY2Fycmllcn08L2Rpdj4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogbnVsbFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmF5LTcwMCB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInNjYWNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0cmFkdWN0aW9uLnNjYWMgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JheS0yMDAgdGV4dC1ncmF5LTcwMCBib3JkZXIgYm9yZGVyLWdyYXktMjAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB5LTMgcHgtNCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpiZy13aGl0ZSBmb2N1czpib3JkZXItZ3JheS01MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNjYWNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2NhY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsxMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLnNjYWN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQuc2NhYyAmJiBmb3JtaWsuZXJyb3JzLnNjYWMgPyA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMCB0ZXh0LXNtXCI+e2Zvcm1pay5lcnJvcnMuc2NhY308L2Rpdj4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMi8zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JheS03MDAgdGV4dC14cyBmb250LWJvbGQgbWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJjYXJyaWVyRW1haWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0cmFkdWN0aW9uLmNhcnJpZXJfZW1haWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JheS0yMDAgdGV4dC1ncmF5LTcwMCBib3JkZXIgYm9yZGVyLWdyYXktMjAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB5LTMgcHgtNCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpiZy13aGl0ZSBmb2N1czpib3JkZXItZ3JheS01MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNhcnJpZXJfZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2Fycmllcl9lbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXs1MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLmNhcnJpZXJfZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQuY2Fycmllcl9lbWFpbCAmJiBmb3JtaWsuZXJyb3JzLmNhcnJpZXJfZW1haWwgPyA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMCB0ZXh0LXNtXCI+e2Zvcm1pay5lcnJvcnMuY2Fycmllcl9lbWFpbH08L2Rpdj4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIC1teC0zIG10LTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgbWItNiBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyYXktNzAwIHRleHQteHMgZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJwcm92aWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdHJhZHVjdGlvbi5wcm92aWRlciB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJibG9jayBhcHBlYXJhbmNlLW5vbmUgdy1mdWxsIGJnLWdyYXktMjAwIGJvcmRlciBib3JkZXItZ3JheS0yMDAgdGV4dC1ncmF5LTcwMCBweS0zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHgtNCBwci04IGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLXdoaXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXM6Ym9yZGVyLWdyYXktNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInByb3ZpZGVyX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvdmlkZXJfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLnByb3ZpZGVyX2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17LTF9PiZsdDt7dHJhZHVjdGlvbi5zZWxlY3R9Jmd0Ozwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezk5OX0+W3t0cmFkdWN0aW9uLm90aGVyfV08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVycy5tYXAoKHByb3ZpZGVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxvcHRpb24gdmFsdWU9e3Byb3ZpZGVyLmlkfSBrZXk9e2luZGV4fSA+e3Byb3ZpZGVyLm5hbWV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQucHJvdmlkZXJfaWQgJiYgZm9ybWlrLmVycm9ycy5wcm92aWRlcl9pZCA/IDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yZWQtNjAwIHRleHQtc21cIj57Zm9ybWlrLmVycm9ycy5wcm92aWRlcl9pZH08L2Rpdj4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKGZvcm1pay52YWx1ZXMucHJvdmlkZXJfaWQpID09PSA5OTkgPyA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweC0zIG1iLTYgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JheS03MDAgdGV4dC14cyBmb250LWJvbGQgbWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJvdGhlclByb3ZpZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdHJhZHVjdGlvbi5vdGhlcl9wcm92aWRlciB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmF5LTIwMCB0ZXh0LWdyYXktNzAwIGJvcmRlciBib3JkZXItZ3JheS0yMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB5LTMgcHgtNCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpiZy13aGl0ZSBmb2N1czpib3JkZXItZ3JheS01MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm90aGVyX3Byb3ZpZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm90aGVyX3Byb3ZpZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezEwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLm90aGVyX3Byb3ZpZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2Zvcm1pay5oYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLm90aGVyX3Byb3ZpZGVyICYmIGZvcm1pay5lcnJvcnMub3RoZXJfcHJvdmlkZXIgPyA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMCB0ZXh0LXNtXCI+e2Zvcm1pay5lcnJvcnMub3RoZXJfcHJvdmlkZXJ9PC9kaXY+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTMgbWItNiB3LTIvM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JheS03MDAgdGV4dC14cyBmb250LWJvbGQgbWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInByb3ZpZGVyRW1haWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRyYWR1Y3Rpb24ucHJvdmlkZXJfZW1haWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyYXktMjAwIHRleHQtZ3JheS03MDAgYm9yZGVyIGJvcmRlci1ncmF5LTIwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBweS0zIHB4LTQgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6Ym9yZGVyLWdyYXktNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInByb3ZpZGVyX2VtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvdmlkZXJfZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezUwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLnByb3ZpZGVyX2VtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLnByb3ZpZGVyX2VtYWlsICYmIGZvcm1pay5lcnJvcnMucHJvdmlkZXJfZW1haWwgPyA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMCB0ZXh0LXNtXCI+e2Zvcm1pay5lcnJvcnMucHJvdmlkZXJfZW1haWx9PC9kaXY+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgbWItNiBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyYXktNzAwIHRleHQteHMgZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJwcm92aWRlck5vdGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0cmFkdWN0aW9uLm5vdGVzIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmF5LTIwMCB0ZXh0LWdyYXktNzAwIGJvcmRlciBib3JkZXItZ3JheS0yMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHktMyBweC00IGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLXdoaXRlIGZvY3VzOmJvcmRlci1ncmF5LTUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17Nn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInByb3ZpZGVyX25vdGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvdmlkZXJfbm90ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17MjU2fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLnByb3ZpZGVyX25vdGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLnByb3ZpZGVyX25vdGVzICYmIGZvcm1pay5lcnJvcnMucHJvdmlkZXJfbm90ZXMgPyA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMCB0ZXh0LXNtXCI+e2Zvcm1pay5lcnJvcnMucHJvdmlkZXJfbm90ZXN9PC9kaXY+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTIvMTIgZmxleC1zaHJpbmstMCBiZy10ZWFsLTUwMCBob3ZlcjpiZy10ZWFsLTcwMCBiZy1ncmVlbi10aWwtMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyOmJvcmRlci10ZWFsLTcwMCB0ZXh0LXNtIGJvcmRlci0xIHRleHQtd2hpdGUgcHktMSBweC0yIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IHRyYWR1Y3Rpb24uc2VuZCB9XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxvYWRpbmcgPyA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctZnVsbCBoLWZ1bGxcIiA+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsb2FkZXJHaWZ9IGFsdD1cIlwiIGNsYXNzTmFtZT1cInctMTAgaC0xMFwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn07XG5cblxuUmVhY3RET00ucmVuZGVyKDxSZWdpc3RlciAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7IiwiZXhwb3J0IGRlZmF1bHQgXCIvYnVpbGQvaW1hZ2VzL2xvYWRpbmctZ2lmLjE5MDUwZGU4LmdpZlwiOyIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcblxuZXhwb3J0IGNvbnN0IGRvQWpheFBvc3QgPSBhc3luYyAodXJsLCBmb3JtRGF0YSkgPT4ge1xuICAgIGxldCByZXN1bHQgPSBhd2FpdCAkLmFqYXgoe1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSwgIC8vIHRlbGwgalF1ZXJ5IG5vdCB0byBwcm9jZXNzIHRoZSBkYXRhXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcbiAgICAgICAgZGF0YTogZm9ybURhdGEsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTsiXSwic291cmNlUm9vdCI6IiJ9