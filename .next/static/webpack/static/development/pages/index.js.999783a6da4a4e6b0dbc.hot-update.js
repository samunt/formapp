webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Avatar */ \"./node_modules/@material-ui/core/esm/Avatar/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControl */ \"./node_modules/@material-ui/core/esm/FormControl/index.js\");\n/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ \"./node_modules/@material-ui/core/esm/FormControlLabel/index.js\");\n/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Checkbox */ \"./node_modules/@material-ui/core/esm/Checkbox/index.js\");\n/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Input */ \"./node_modules/@material-ui/core/esm/Input/index.js\");\n/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/InputLabel */ \"./node_modules/@material-ui/core/esm/InputLabel/index.js\");\n/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/LockOutlined */ \"./node_modules/@material-ui/icons/LockOutlined.js\");\n/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Paper */ \"./node_modules/@material-ui/core/esm/Paper/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/MenuItem */ \"./node_modules/@material-ui/core/esm/MenuItem/index.js\");\n/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Select */ \"./node_modules/@material-ui/core/esm/Select/index.js\");\n/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ \"./node_modules/@material-ui/core/styles/withStyles.js\");\n/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _styles_FormStyles__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../styles/FormStyles */ \"./styles/FormStyles.js\");\n/* harmony import */ var _contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../contexts/LanguageContext */ \"./contexts/LanguageContext.js\");\n\n\n\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar words = {\n  english: {\n    email: \"email\",\n    signIn: \"sign in\",\n    password: \"password\",\n    remember: \"remember me\"\n  },\n  french: {\n    email: \"adresse electronique\",\n    signIn: \"se conntetor\",\n    password: \"mot de passe\",\n    remember: \"souviens\"\n  },\n  spanish: {\n    email: \"correo electronico\",\n    signIn: \"registrarse\",\n    password: \"contrasena\",\n    remember: \"recuerdame\"\n  }\n};\n\nfunction Index(props) {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_17__[\"LanguageContext\"]),\n      language = _useContext.language,\n      changeLanguage = _useContext.changeLanguage;\n\n  var classes = props.classes;\n  var _words$language = words[language],\n      email = _words$language.email,\n      signIn = _words$language.signIn,\n      password = _words$language.password,\n      remember = _words$language.remember;\n  return __jsx(\"main\", {\n    className: classes.main\n  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    className: classes.paper\n  }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    className: classes.avatarClass\n  }, __jsx(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_10___default.a, null)), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n    variant: \"h5\"\n  }, \"Sign In\"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n    value: language,\n    onChange: changeLanguage\n  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n    value: \"english\"\n  }, \"English\"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n    value: \"french\"\n  }, \"French\"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n    value: \"spanish\"\n  }, \"Spanish\")), __jsx(\"form\", {\n    className: classes.form\n  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    margin: \"normal\",\n    required: true,\n    fullWidth: true\n  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    htmlFor: \"email\"\n  }, email), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    id: \"email\",\n    name: \"email\",\n    autoFocus: true\n  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    margin: \"normal\",\n    required: true,\n    fullWidth: true\n  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    htmlFor: \"password\"\n  }, password), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    id: \"password\",\n    name: \"password\",\n    autoFocus: true\n  })), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      color: \"primary\"\n    }),\n    label: remember\n  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    variant: \"contained\",\n    type: \"submit\",\n    fullWidth: true,\n    color: \"primary\",\n    className: classes.submitClass\n  }, signIn))));\n} // get intiial props runs first time on the server,\n// and each consecutive time on the client\n\n\n_s(Index, \"eufKsGpumGHcePPS9UK0Jwtfv04=\");\n\n_c = Index;\n\nIndex.getInitialProps = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            return _context.abrupt(\"return\", {});\n\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_15___default()(_styles_FormStyles__WEBPACK_IMPORTED_MODULE_16__[\"default\"])(Index));\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIndvcmRzIiwiZW5nbGlzaCIsImVtYWlsIiwic2lnbkluIiwicGFzc3dvcmQiLCJyZW1lbWJlciIsImZyZW5jaCIsInNwYW5pc2giLCJJbmRleCIsInByb3BzIiwidXNlQ29udGV4dCIsIkxhbmd1YWdlQ29udGV4dCIsImxhbmd1YWdlIiwiY2hhbmdlTGFuZ3VhZ2UiLCJjbGFzc2VzIiwibWFpbiIsInBhcGVyIiwiYXZhdGFyQ2xhc3MiLCJmb3JtIiwic3VibWl0Q2xhc3MiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJ3aXRoU3R5bGVzIiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsS0FBSyxHQUFHO0FBQ1ZDLFNBQU8sRUFBRTtBQUNMQyxTQUFLLEVBQUUsT0FERjtBQUVMQyxVQUFNLEVBQUUsU0FGSDtBQUdMQyxZQUFRLEVBQUUsVUFITDtBQUlMQyxZQUFRLEVBQUU7QUFKTCxHQURDO0FBT1ZDLFFBQU0sRUFBRTtBQUNKSixTQUFLLEVBQUUsc0JBREg7QUFFSkMsVUFBTSxFQUFFLGNBRko7QUFHSkMsWUFBUSxFQUFFLGNBSE47QUFJSkMsWUFBUSxFQUFFO0FBSk4sR0FQRTtBQWNWRSxTQUFPLEVBQUU7QUFDTEwsU0FBSyxFQUFFLG9CQURGO0FBRUxDLFVBQU0sRUFBRSxhQUZIO0FBR0xDLFlBQVEsRUFBRSxZQUhMO0FBSUxDLFlBQVEsRUFBRTtBQUpMO0FBZEMsQ0FBZDs7QUFzQkEsU0FBU0csS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQUE7O0FBQUEsb0JBQ2lCQyx3REFBVSxDQUFDQywwRUFBRCxDQUQzQjtBQUFBLE1BQ1hDLFFBRFcsZUFDWEEsUUFEVztBQUFBLE1BQ0RDLGNBREMsZUFDREEsY0FEQzs7QUFBQSxNQUVYQyxPQUZXLEdBRUFMLEtBRkEsQ0FFWEssT0FGVztBQUFBLHdCQUcwQmQsS0FBSyxDQUFDWSxRQUFELENBSC9CO0FBQUEsTUFHWFYsS0FIVyxtQkFHWEEsS0FIVztBQUFBLE1BR0pDLE1BSEksbUJBR0pBLE1BSEk7QUFBQSxNQUdJQyxRQUhKLG1CQUdJQSxRQUhKO0FBQUEsTUFHY0MsUUFIZCxtQkFHY0EsUUFIZDtBQUlsQixTQUNJO0FBQU0sYUFBUyxFQUFFUyxPQUFPLENBQUNDO0FBQXpCLEtBQ0ksTUFBQyxnRUFBRDtBQUFPLGFBQVMsRUFBRUQsT0FBTyxDQUFDRTtBQUExQixLQUNJLE1BQUMsZ0VBQUQ7QUFBUSxhQUFTLEVBQUVGLE9BQU8sQ0FBQ0c7QUFBM0IsS0FDSSxNQUFDLHVFQUFELE9BREosQ0FESixFQUlJLE1BQUMscUVBQUQ7QUFBWSxXQUFPLEVBQUM7QUFBcEIsZUFKSixFQUtJLE1BQUMsaUVBQUQ7QUFBUSxTQUFLLEVBQUVMLFFBQWY7QUFBeUIsWUFBUSxFQUFFQztBQUFuQyxLQUNJLE1BQUMsbUVBQUQ7QUFBVSxTQUFLLEVBQUM7QUFBaEIsZUFESixFQUVJLE1BQUMsbUVBQUQ7QUFBVSxTQUFLLEVBQUM7QUFBaEIsY0FGSixFQUdJLE1BQUMsbUVBQUQ7QUFBVSxTQUFLLEVBQUM7QUFBaEIsZUFISixDQUxKLEVBVUk7QUFBTSxhQUFTLEVBQUVDLE9BQU8sQ0FBQ0k7QUFBekIsS0FDSSxNQUFDLHFFQUFEO0FBQWEsVUFBTSxFQUFDLFFBQXBCO0FBQTZCLFlBQVEsTUFBckM7QUFBc0MsYUFBUztBQUEvQyxLQUNJLE1BQUMsb0VBQUQ7QUFBWSxXQUFPLEVBQUM7QUFBcEIsS0FBNkJoQixLQUE3QixDQURKLEVBRUksTUFBQywrREFBRDtBQUFPLE1BQUUsRUFBQyxPQUFWO0FBQWtCLFFBQUksRUFBQyxPQUF2QjtBQUErQixhQUFTO0FBQXhDLElBRkosQ0FESixFQUtJLE1BQUMscUVBQUQ7QUFBYSxVQUFNLEVBQUMsUUFBcEI7QUFBNkIsWUFBUSxNQUFyQztBQUFzQyxhQUFTO0FBQS9DLEtBQ0ksTUFBQyxvRUFBRDtBQUFZLFdBQU8sRUFBQztBQUFwQixLQUFnQ0UsUUFBaEMsQ0FESixFQUVJLE1BQUMsK0RBQUQ7QUFBTyxNQUFFLEVBQUMsVUFBVjtBQUFxQixRQUFJLEVBQUMsVUFBMUI7QUFBcUMsYUFBUztBQUE5QyxJQUZKLENBTEosRUFTSSxNQUFDLDBFQUFEO0FBQWtCLFdBQU8sRUFBRSxNQUFDLGtFQUFEO0FBQVUsV0FBSyxFQUFDO0FBQWhCLE1BQTNCO0FBQXdELFNBQUssRUFBRUM7QUFBL0QsSUFUSixFQVVJLE1BQUMsZ0VBQUQ7QUFBUSxXQUFPLEVBQUMsV0FBaEI7QUFBNEIsUUFBSSxFQUFDLFFBQWpDO0FBQTBDLGFBQVMsTUFBbkQ7QUFBb0QsU0FBSyxFQUFDLFNBQTFEO0FBQW9FLGFBQVMsRUFBRVMsT0FBTyxDQUFDSztBQUF2RixLQUFxR2hCLE1BQXJHLENBVkosQ0FWSixDQURKLENBREo7QUEyQkgsQyxDQUdEO0FBQ0E7OztHQW5DU0ssSzs7S0FBQUEsSzs7QUFvQ1RBLEtBQUssQ0FBQ1ksZUFBTjtBQUFBLDhMQUF3QixpQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBS2IsRUFMYTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFTZUMsMElBQVUsQ0FBQ0MsMkRBQUQsQ0FBVixDQUFtQmYsS0FBbkIsQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEF2YXRhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xcIjtcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsXCI7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94XCI7XG5pbXBvcnQgSW5wdXQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0XCI7XG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRMYWJlbFwiO1xuaW1wb3J0IExvY2tPdXRsaW5lZEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Mb2NrT3V0bGluZWRcIjtcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCI7XG5pbXBvcnQgU2VsZWN0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3RcIlxuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Gb3JtU3R5bGVzJztcbmltcG9ydCB7TGFuZ3VhZ2VDb250ZXh0fSBmcm9tIFwiLi4vY29udGV4dHMvTGFuZ3VhZ2VDb250ZXh0XCI7XG5jb25zdCB3b3JkcyA9IHtcbiAgICBlbmdsaXNoOiB7XG4gICAgICAgIGVtYWlsOiBcImVtYWlsXCIsXG4gICAgICAgIHNpZ25JbjogXCJzaWduIGluXCIsXG4gICAgICAgIHBhc3N3b3JkOiBcInBhc3N3b3JkXCIsXG4gICAgICAgIHJlbWVtYmVyOiBcInJlbWVtYmVyIG1lXCJcbiAgICB9LFxuICAgIGZyZW5jaDoge1xuICAgICAgICBlbWFpbDogXCJhZHJlc3NlIGVsZWN0cm9uaXF1ZVwiLFxuICAgICAgICBzaWduSW46IFwic2UgY29ubnRldG9yXCIsXG4gICAgICAgIHBhc3N3b3JkOiBcIm1vdCBkZSBwYXNzZVwiLFxuICAgICAgICByZW1lbWJlcjogXCJzb3V2aWVuc1wiXG5cbiAgICB9LFxuICAgIHNwYW5pc2g6IHtcbiAgICAgICAgZW1haWw6IFwiY29ycmVvIGVsZWN0cm9uaWNvXCIsXG4gICAgICAgIHNpZ25JbjogXCJyZWdpc3RyYXJzZVwiLFxuICAgICAgICBwYXNzd29yZDogXCJjb250cmFzZW5hXCIsXG4gICAgICAgIHJlbWVtYmVyOiBcInJlY3VlcmRhbWVcIlxuXG4gICAgfVxufTtcbmZ1bmN0aW9uIEluZGV4KHByb3BzKSB7XG4gICAgY29uc3Qge2xhbmd1YWdlLCBjaGFuZ2VMYW5ndWFnZX0gPSB1c2VDb250ZXh0KExhbmd1YWdlQ29udGV4dClcbiAgICBjb25zdCB7Y2xhc3Nlc30gPSBwcm9wcztcbiAgICBjb25zdCB7ZW1haWwsIHNpZ25JbiwgcGFzc3dvcmQsIHJlbWVtYmVyfSA9IHdvcmRzW2xhbmd1YWdlXTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbn0+XG4gICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cbiAgICAgICAgICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJDbGFzc30+XG4gICAgICAgICAgICAgICAgICAgIDxMb2NrT3V0bGluZWRJY29uLz5cbiAgICAgICAgICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNSc+U2lnbiBJbjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8U2VsZWN0IHZhbHVlPXtsYW5ndWFnZX0gb25DaGFuZ2U9e2NoYW5nZUxhbmd1YWdlfT5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPSdlbmdsaXNoJz5FbmdsaXNoPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPSdmcmVuY2gnPkZyZW5jaDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT0nc3BhbmlzaCc+U3BhbmlzaDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgbWFyZ2luPSdub3JtYWwnIHJlcXVpcmVkIGZ1bGxXaWR0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9J2VtYWlsJz57ZW1haWx9PC9JbnB1dExhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IGlkPSdlbWFpbCcgbmFtZT0nZW1haWwnIGF1dG9Gb2N1cy8+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBtYXJnaW49J25vcm1hbCcgcmVxdWlyZWQgZnVsbFdpZHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj0ncGFzc3dvcmQnPntwYXNzd29yZH08L0lucHV0TGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgaWQ9J3Bhc3N3b3JkJyBuYW1lPSdwYXNzd29yZCcgYXV0b0ZvY3VzLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgY29udHJvbD17PENoZWNrYm94IGNvbG9yPSdwcmltYXJ5Jy8+fSBsYWJlbD17cmVtZW1iZXJ9PjwvRm9ybUNvbnRyb2xMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdjb250YWluZWQnIHR5cGU9J3N1Ym1pdCcgZnVsbFdpZHRoIGNvbG9yPSdwcmltYXJ5JyBjbGFzc05hbWU9e2NsYXNzZXMuc3VibWl0Q2xhc3N9PntzaWduSW59PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgPC9tYWluPlxuICAgIClcbn1cblxuXG4vLyBnZXQgaW50aWlhbCBwcm9wcyBydW5zIGZpcnN0IHRpbWUgb24gdGhlIHNlcnZlcixcbi8vIGFuZCBlYWNoIGNvbnNlY3V0aXZlIHRpbWUgb24gdGhlIGNsaWVudFxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuXG4gICAgLy8gY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMnKVxuICAgIC8vIGNvbnN0IHtkYXRhfSA9IHJlcztcbiAgICAvLyByZXR1cm4ge3Bvc3RzOiBkYXRhfSAvL211c3QgYmUgYW4gb2JqZWN0XG4gICAgcmV0dXJuIHt9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShJbmRleClcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})