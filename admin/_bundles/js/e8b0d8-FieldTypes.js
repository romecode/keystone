require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	danger: _theme2.default.alert.color.danger,
	error: _theme2.default.alert.color.danger,
	info: _theme2.default.alert.color.info,
	success: _theme2.default.alert.color.success,
	warning: _theme2.default.alert.color.warning
};

},{"../../../theme":73}],2:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _glamor = require('glamor');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// clone children if a class exists for the tagname
var cloneWithClassnames = function cloneWithClassnames(c) {
	var type = c.type && c.type.displayName ? c.type.displayName : c.type || null;

	if (!type || !_styles2.default[type]) return c;

	return (0, _react.cloneElement)(c, {
		className: (0, _glamor.css)(_styles2.default[type])
	});
};

function Alert(_ref) {
	var children = _ref.children;
	var className = _ref.className;
	var color = _ref.color;
	var Component = _ref.component;

	var props = _objectWithoutProperties(_ref, ['children', 'className', 'color', 'component']);

	props.className = (0, _glamor.css)(_styles2.default.alert, _styles2.default[color], className);
	props.children = _react.Children.map(children, cloneWithClassnames);

	return _react2.default.createElement(Component, _extends({}, props, { 'data-alert-type': color }));
};

Alert.propTypes = {
	color: _react.PropTypes.oneOf(Object.keys(_colors2.default)).isRequired,
	component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string])
};
Alert.defaultProps = {
	component: 'div'
};

module.exports = Alert;

},{"./colors":1,"./styles":3,"glamor":undefined,"react":undefined}],3:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // ==============================
// Alert
// ==============================

/* eslint quote-props: ["error", "as-needed"] */

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Prepare variants
var colorVariants = {};
Object.keys(_colors2.default).forEach(function (color) {
	colorVariants[color] = {
		backgroundColor: _colors2.default[color].background,
		borderColor: _colors2.default[color].border,
		color: _colors2.default[color].text
	};
});

// Prepare headings
var headingTagnames = {};
['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(function (tag) {
	headingTagnames[tag] = { color: 'inherit' };
});

var linkStyles = {
	color: 'inherit',
	textDecoration: 'underline',

	':hover': { color: 'inherit' },
	':focus': { color: 'inherit' }
};

module.exports = _extends({
	alert: {
		borderColor: 'transparent',
		borderRadius: _theme2.default.alert.borderRadius,
		borderStyle: 'solid',
		borderWidth: _theme2.default.alert.borderWidth,
		margin: _theme2.default.alert.margin,
		padding: _theme2.default.alert.padding
	},

	// tagnames
	a: linkStyles,
	Link: linkStyles,
	strong: {
		fontWeight: 500
	}

}, headingTagnames, colorVariants);

},{"../../../theme":73,"./colors":1}],4:[function(require,module,exports){
'use strict';

var _glamor = require('glamor');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function BlankState(_ref) {
	var className = _ref.className;
	var children = _ref.children;
	var heading = _ref.heading;
	var Component = _ref.component;

	var props = _objectWithoutProperties(_ref, ['className', 'children', 'heading', 'component']);

	props.className = (0, _glamor.css)(classes.container, className);

	return _react2.default.createElement(
		Component,
		props,
		!!heading && _react2.default.createElement(
			'h2',
			{ 'data-e2e-blank-state-heading': true, className: (0, _glamor.css)(classes.heading) },
			heading
		),
		children
	);
};

BlankState.propTypes = {
	component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
	heading: _react.PropTypes.string
};
BlankState.defaultProps = {
	component: 'div'
};

/* eslint quote-props: ["error", "as-needed"] */

var classes = {
	container: {
		backgroundColor: _theme2.default.blankstate.background,
		borderRadius: _theme2.default.blankstate.borderRadius,
		color: _theme2.default.blankstate.color,
		paddingBottom: _theme2.default.blankstate.paddingVertical,
		paddingLeft: _theme2.default.blankstate.paddingHorizontal,
		paddingRight: _theme2.default.blankstate.paddingHorizontal,
		paddingTop: _theme2.default.blankstate.paddingVertical,
		textAlign: 'center'
	},

	heading: {
		color: 'inherit',

		':last-child': {
			marginBottom: 0
		}
	}
};

module.exports = BlankState;

},{"../../../theme":73,"glamor":undefined,"react":undefined}],5:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _glamor = require('glamor');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var commonClasses = _styles2.default.common;
var stylesheetCache = {};
function getStyleSheet(variant, color) {
	var cacheKey = variant + '-' + color;
	if (!stylesheetCache[cacheKey]) {
		var variantStyles = _styles2.default[variant](color);
		stylesheetCache[cacheKey] = variantStyles;
	}
	return stylesheetCache[cacheKey];
}

var BUTTON_SIZES = ['large', 'medium', 'small', 'xsmall'];
var BUTTON_VARIANTS = ['fill', 'hollow', 'link'];
var BUTTON_COLORS = ['default', 'primary', 'success', 'warning', 'danger', 'cancel', 'delete'];

// NOTE must NOT be functional component to allow `refs`

var Button = function (_Component) {
	_inherits(Button, _Component);

	function Button() {
		_classCallCheck(this, Button);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Button).apply(this, arguments));
	}

	_createClass(Button, [{
		key: 'render',
		value: function render() {
			var _props = this.props;
			var active = _props.active;
			var aphroditeStyles = _props.aphroditeStyles;
			var block = _props.block;
			var className = _props.className;
			var color = _props.color;
			var Tag = _props.component;
			var disabled = _props.disabled;
			var size = _props.size;
			var variant = _props.variant;

			var props = _objectWithoutProperties(_props, ['active', 'aphroditeStyles', 'block', 'className', 'color', 'component', 'disabled', 'size', 'variant']);

			// get the styles


			var variantClasses = getStyleSheet(variant, color);
			props.className = _glamor.css.apply(undefined, [commonClasses.base, commonClasses[size], variantClasses.base, block ? commonClasses.block : null, disabled ? commonClasses.disabled : null, active ? variantClasses.active : null].concat(_toConsumableArray(aphroditeStyles)));
			if (className) {
				props.className += ' ' + className;
			}

			// return an anchor or button
			if (!Tag) {
				Tag = props.href ? 'a' : 'button';
			}
			// Ensure buttons don't submit by default
			if (Tag === 'button' && !props.type) {
				props.type = 'button';
			}

			return _react2.default.createElement(Tag, props);
		}
	}]);

	return Button;
}(_react.Component);

;

Button.propTypes = {
	active: _react.PropTypes.bool,
	aphroditeStyles: _react.PropTypes.arrayOf(_react.PropTypes.shape({
		_definition: _react.PropTypes.object,
		_name: _react.PropTypes.string
	})),
	block: _react.PropTypes.bool,
	color: _react.PropTypes.oneOf(BUTTON_COLORS),
	component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]),
	disabled: _react.PropTypes.bool,
	href: _react.PropTypes.string,
	size: _react.PropTypes.oneOf(BUTTON_SIZES),
	variant: _react.PropTypes.oneOf(BUTTON_VARIANTS)
};
Button.defaultProps = {
	aphroditeStyles: [],
	color: 'default',
	variant: 'fill'
};

module.exports = Button;

},{"./styles":6,"glamor":undefined,"react":undefined}],6:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // ==============================
// Button
// ==============================

var _css = require('../../../utils/css');

var _color = require('../../../utils/color');

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Common Styles
// ----------------

exports.common = {
	// Base Button
	// ----------------
	base: {
		'appearance': 'none',
		'background': 'none',
		'borderWidth': _theme2.default.button.borderWidth,
		'borderStyle': 'solid',
		'borderColor': 'transparent',
		'borderRadius': _theme2.default.button.borderRadius,
		'cursor': 'pointer',
		'display': 'inline-block',
		'fontWeight': _theme2.default.button.font.weight,
		'height': _theme2.default.component.height,
		'lineHeight': _theme2.default.component.lineHeight,
		'marginBottom': 0,
		'padding': '0 ' + _theme2.default.button.paddingHorizontal,
		'outline': 0,
		'textAlign': 'center',
		'touchAction': 'manipulation',
		'userSelect': 'none',
		'verticalAlign': 'middle',
		'whiteSpace': 'nowrap',

		':hover': {
			color: _theme2.default.button.default.textColor,
			textDecoration: 'none'
		},
		':focus': {
			color: _theme2.default.button.default.textColor,
			textDecoration: 'none'
		}
	},
	// Block Display
	// ----------------
	block: {
		display: 'block',
		width: '100%'
	},
	// Disabled
	// ----------------
	disabled: {
		opacity: 0.4,
		pointerEvents: 'none'
	},
	// Sizes
	// ----------------
	large: {
		fontSize: _theme2.default.font.size.large
	},
	default: {
		fontSize: _theme2.default.font.size.default
	},
	small: {
		fontSize: _theme2.default.font.size.small
	},
	xsmall: {
		fontSize: _theme2.default.font.size.xsmall,
		lineHeight: '1.9',
		paddingLeft: '.66em',
		paddingRight: '.66em'
	}
};

// Fill Variant
// ----------------
function buttonFillVariant(textColor, bgColor) {
	var hoverStyles = _extends({}, (0, _css.gradientVertical)((0, _color.lighten)(bgColor, 10), (0, _color.darken)(bgColor, 5)), {
		borderColor: (0, _color.darken)(bgColor, 5) + ' ' + (0, _color.darken)(bgColor, 10) + ' ' + (0, _color.darken)(bgColor, 15),
		boxShadow: '0 1px 0 rgba(0,0,0,0.1)',
		color: textColor,
		outline: 'none'
	});
	var focusStyles = _extends({}, (0, _css.gradientVertical)((0, _color.lighten)(bgColor, 10), (0, _color.darken)(bgColor, 5)), {
		borderColor: (0, _color.darken)(bgColor, 5) + ' ' + (0, _color.darken)(bgColor, 10) + ' ' + (0, _color.darken)(bgColor, 15),
		boxShadow: '0 0 0 3px ' + (0, _color.fade)(bgColor, 25),
		color: textColor,
		outline: 'none'
	});
	var activeStyles = {
		backgroundColor: (0, _color.darken)(bgColor, 10),
		backgroundImage: 'none',
		borderColor: (0, _color.darken)(bgColor, 25) + ' ' + (0, _color.darken)(bgColor, 15) + ' ' + (0, _color.darken)(bgColor, 10),
		boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)'
	};
	return {
		base: _extends({}, (0, _css.gradientVertical)((0, _color.lighten)(bgColor, 5), (0, _color.darken)(bgColor, 10), bgColor), {
			'borderColor': (0, _color.darken)(bgColor, 10) + ' ' + (0, _color.darken)(bgColor, 20) + ' ' + (0, _color.darken)(bgColor, 25),
			'boxShadow': 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
			'color': textColor,
			'fontWeight': 400,
			'textShadow': '0 -1px 0 rgba(0, 0, 0, 0.25)',

			':hover': hoverStyles,
			':focus': focusStyles,
			':active': activeStyles
		}),
		active: activeStyles
	};
}
// TODO: This is pretty hacky, needs to be consolidated with the Variant() method
// above (needs more theme variables to be implemented though)
function buttonFillDefault() {
	var borderColor = _theme2.default.input.border.color.default;
	var hoverStyles = _extends({}, (0, _css.gradientVertical)('#fff', '#eee'), {
		borderColor: (0, _color.darken)(borderColor, 5) + ' ' + (0, _color.darken)(borderColor, 5) + ' ' + (0, _color.darken)(borderColor, 10),
		boxShadow: '0 1px 0 rgba(0,0,0,0.1)',
		color: _theme2.default.color.text
	});
	var focusStyles = {
		borderColor: _theme2.default.color.primary,
		boxShadow: '0 0 0 3px ' + (0, _color.fade)(_theme2.default.color.primary, 10),
		color: _theme2.default.color.text,
		outline: 'none'
	};
	var activeStyles = {
		background: '#e6e6e6',
		borderColor: (0, _color.darken)(borderColor, 10),
		boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
		color: _theme2.default.color.text
	};
	return {
		base: _extends({}, (0, _css.gradientVertical)('#fafafa', '#eaeaea'), {
			'borderColor': borderColor + ' ' + (0, _color.darken)(borderColor, 6) + ' ' + (0, _color.darken)(borderColor, 12),
			'color': _theme2.default.color.text,
			'textShadow': '0 1px 0 white',

			':hover': hoverStyles,
			':focus': focusStyles,
			':active': activeStyles
		}),

		// gross hack
		active: _extends({}, activeStyles, {

			':hover': activeStyles,
			':focus': _extends({}, activeStyles, focusStyles, {
				boxShadow: '0 0 0 3px ' + (0, _color.fade)(_theme2.default.color.primary, 10) + ', inset 0 1px 2px rgba(0, 0, 0, 0.1)'
			}),
			':active': activeStyles
		})
	};
}
exports.fill = function (color) {
	switch (color) {
		case 'default':
			return buttonFillDefault();
		case 'cancel':
		case 'delete':
			return buttonFillVariant('white', _theme2.default.button.danger.bgColor);
		default:
			return buttonFillVariant('white', _theme2.default.button[color].bgColor);
	}
};

// Hollow Variant
// ----------------
function buttonHollowVariant(textColor, borderColor) {
	var focusAndHoverStyles = {
		backgroundImage: 'none',
		backgroundColor: (0, _color.fade)(borderColor, 15),
		borderColor: (0, _color.darken)(borderColor, 15),
		boxShadow: 'none',
		color: textColor,
		outline: 'none'
	};
	var focusOnlyStyles = {
		boxShadow: '0 0 0 3px ' + (0, _color.fade)(borderColor, 10)
	};
	var activeStyles = {
		backgroundColor: (0, _color.fade)(borderColor, 35),
		borderColor: (0, _color.darken)(borderColor, 25),
		boxShadow: 'none'
	};

	return {
		base: {
			'background': 'none',
			'borderColor': borderColor,
			'color': textColor,

			':hover': focusAndHoverStyles,
			':focus ': _extends({}, focusAndHoverStyles, focusOnlyStyles),
			':active': activeStyles
		},
		active: activeStyles
	};
};
exports.hollow = function (color) {
	// TODO: better handling of cancel and delete colors
	if (color === 'cancel' || color === 'delete') color = 'danger';

	return buttonHollowVariant(_theme2.default.button[color].bgColor, _theme2.default.button[color].borderColor);
};

// Link Variant
// ----------------
function buttonLinkVariant(textColor, hoverColor) {
	var hoverStyles = {
		color: hoverColor,
		textDecoration: 'underline'
	};
	return {
		base: {
			'background': 'none',
			'border': 0,
			'boxShadow': 'none',
			'color': textColor,
			'fontWeight': 'normal',
			'outline': 'none',

			':hover': hoverStyles,
			':focus': hoverStyles,
			':active': hoverStyles
		},
		active: hoverStyles
	};
};
function buttonLinkDelete() {
	var styles = buttonLinkVariant(_theme2.default.color.gray40, _theme2.default.color.danger);
	var hoverStyles = _extends({}, (0, _css.gradientVertical)((0, _color.lighten)(_theme2.default.color.danger, 10), (0, _color.darken)(_theme2.default.color.danger, 10)), {
		backgroundColor: _theme2.default.color.danger,
		borderColor: (0, _color.darken)(_theme2.default.color.danger, 4) + ' ' + (0, _color.darken)(_theme2.default.color.danger, 8) + ' ' + (0, _color.darken)(_theme2.default.color.danger, 12),
		boxShadow: '0 1px 0 rgba(0,0,0,0.1)',
		color: 'white',
		textDecoration: 'none'
	});
	var activeStyles = {
		backgroundColor: (0, _color.darken)(_theme2.default.color.danger, 4),
		backgroundImage: 'none',
		borderColor: (0, _color.darken)(_theme2.default.color.danger, 12) + ' ' + (0, _color.darken)(_theme2.default.color.danger, 8) + ' ' + (0, _color.darken)(_theme2.default.color.danger, 8),
		boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
		color: 'white'
	};
	return {
		base: _extends({}, styles.base, {
			':hover': hoverStyles,
			':focus': hoverStyles,
			':active': activeStyles
		}),
		active: activeStyles
	};
}

exports.link = function (color) {
	switch (color) {
		case 'default':
			return buttonLinkVariant(_theme2.default.color.link, _theme2.default.color.linkHover);
		case 'cancel':
			return buttonLinkVariant(_theme2.default.color.gray40, _theme2.default.color.danger);
		case 'delete':
			return buttonLinkDelete();
		default:
			return buttonLinkVariant(_theme2.default.color[color], _theme2.default.color[color]);
	}
};

},{"../../../theme":73,"../../../utils/color":75,"../../../utils/css":77}],7:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _glamor = require('glamor');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Center(_ref) {
	var className = _ref.className;
	var Component = _ref.component;
	var height = _ref.height;
	var style = _ref.style;

	var props = _objectWithoutProperties(_ref, ['className', 'component', 'height', 'style']);

	props.className = (0, _glamor.css)(_styles2.default.center, className);
	props.style = _extends({ height: height }, style);

	return _react2.default.createElement(Component, props);
};
Center.propTypes = {
	component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]),
	height: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
};
Center.defaultProps = {
	component: 'div',
	height: 'auto'
};

module.exports = Center;

},{"./styles":8,"glamor":undefined,"react":undefined}],8:[function(require,module,exports){
'use strict';

// ==============================
// Center
// ==============================

module.exports = {
	center: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	}
};

},{}],9:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

var _color = require('../../../utils/color');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseColors = {};
['danger', 'info', 'primary', 'success', 'warning'].forEach(function (color) {
	baseColors[color] = {
		background: (0, _color.fade)(_theme2.default.color[color], 10),
		backgroundActive: (0, _color.fade)(_theme2.default.color[color], 20),
		backgroundHover: (0, _color.fade)(_theme2.default.color[color], 15),
		text: _theme2.default.color[color]
	};
});
var invertedColors = {};
['danger', 'info', 'primary', 'success', 'warning'].forEach(function (color) {
	invertedColors[color + '__inverted'] = {
		background: _theme2.default.color[color],
		backgroundActive: (0, _color.lighten)(_theme2.default.color[color], 5),
		backgroundHover: (0, _color.lighten)(_theme2.default.color[color], 15),
		text: 'white'
	};
});

module.exports = _extends({
	default: {
		background: _theme2.default.color.gray10,
		backgroundActive: _theme2.default.color.gray20,
		backgroundHover: _theme2.default.color.gray15,
		text: _theme2.default.color.gray60
	}
}, baseColors, {

	// inverted
	default__inverted: {
		background: _theme2.default.color.gray60,
		backgroundActive: (0, _color.lighten)(_theme2.default.color.gray60, 5),
		backgroundHover: (0, _color.lighten)(_theme2.default.color.gray60, 15),
		text: 'white'
	}
}, invertedColors);

},{"../../../theme":73,"../../../utils/color":75}],10:[function(require,module,exports){
'use strict';

var _glamor = require('glamor');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Chip(_ref) {
	var className = _ref.className;
	var children = _ref.children;
	var color = _ref.color;
	var inverted = _ref.inverted;
	var label = _ref.label;
	var onClear = _ref.onClear;
	var onClick = _ref.onClick;

	var props = _objectWithoutProperties(_ref, ['className', 'children', 'color', 'inverted', 'label', 'onClear', 'onClick']);

	props.className = (0, _glamor.css)(_styles2.default.chip, className);
	var labelClassName = (0, _glamor.css)(_styles2.default.button, _styles2.default.label, _styles2.default['button__' + color + (inverted ? '__inverted' : '')]);
	var clearClassName = (0, _glamor.css)(_styles2.default.button, _styles2.default.clear, _styles2.default['button__' + color + (inverted ? '__inverted' : '')]);

	return _react2.default.createElement(
		'div',
		props,
		_react2.default.createElement(
			'button',
			{ type: 'button', onClick: onClick, className: labelClassName },
			label,
			children
		),
		!!onClear && _react2.default.createElement(
			'button',
			{ type: 'button', onClick: onClear, className: clearClassName },
			'×'
		)
	);
};

Chip.propTypes = {
	color: _react.PropTypes.oneOf(Object.keys(_colors2.default)).isRequired,
	inverted: _react.PropTypes.bool,
	label: _react2.default.PropTypes.string.isRequired,
	onClear: _react2.default.PropTypes.func,
	onClick: _react2.default.PropTypes.func
};
Chip.defaultProps = {
	color: 'default'
};

module.exports = Chip;

},{"./colors":9,"./styles":11,"glamor":undefined,"react":undefined}],11:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // ==============================
// Alert
// ==============================

/* eslint quote-props: ["error", "as-needed"] */

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

var _css = require('../../../utils/css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Prepare variants
var colorVariants = {};
Object.keys(_colors2.default).forEach(function (color) {
	var hoverStyles = {
		backgroundColor: _colors2.default[color].backgroundHover
	};

	colorVariants['button__' + color] = {
		backgroundColor: _colors2.default[color].background,
		color: _colors2.default[color].text,

		':hover': hoverStyles,
		':focus': hoverStyles,
		':active': {
			backgroundColor: _colors2.default[color].backgroundActive
		}
	};
});

module.exports = _extends({
	chip: {
		display: 'inline-block',
		fontSize: _theme2.default.font.size.small,
		fontWeight: 500,
		marginRight: '0.5em',
		overflow: 'hidden',
		lineHeight: '2.2em'
	},

	// tagnames
	button: {
		appearance: 'none',
		background: 'none',
		border: 'none',
		cursor: 'pointer',
		display: 'block',
		float: 'left',
		padding: '0 .9em',
		outline: 'none',

		// make pills - exaggerate the padding toward the radii so it looks even
		':first-child': _extends({}, (0, _css.borderLeftRadius)('3em'), {
			paddingLeft: '1.1em'
		}),
		':last-child': _extends({}, (0, _css.borderRightRadius)('3em'), {
			paddingRight: '1.1em'
		})
	},

	// provide separation between the label and clear buttons
	// floating stops the margins from collapsing into eaching

	label: { marginRight: 1 },
	clear: { marginLeft: 1 }

}, colorVariants);

},{"../../../theme":73,"../../../utils/css":77,"./colors":9}],12:[function(require,module,exports){
'use strict';

var _glamor = require('glamor');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _sizes = require('./sizes');

var _sizes2 = _interopRequireDefault(_sizes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Container(_ref) {
	var className = _ref.className;
	var clearFloatingChildren = _ref.clearFloatingChildren;
	var Component = _ref.component;
	var width = _ref.width;

	var props = _objectWithoutProperties(_ref, ['className', 'clearFloatingChildren', 'component', 'width']);

	props.className = (0, _glamor.css)(_styles2.default.container, _styles2.default[width], clearFloatingChildren ? _styles2.default.clearfix : null, className);

	return _react2.default.createElement(Component, props);
};

Container.propTypes = {
	clearFloatingChildren: _react.PropTypes.bool,
	component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
	width: _react.PropTypes.oneOf(Object.keys(_sizes2.default)).isRequired
};
Container.defaultProps = {
	component: 'div',
	width: 'large'
};

module.exports = Container;

},{"./sizes":13,"./styles":14,"glamor":undefined,"react":undefined}],13:[function(require,module,exports){
'use strict';

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	small: _theme2.default.container.size.small,
	medium: _theme2.default.container.size.medium,
	large: _theme2.default.container.size.large
};

},{"../../../theme":73}],14:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // ==============================
// Container
// ==============================

/* eslint quote-props: ["error", "as-needed"] */

var _sizes = require('./sizes');

var _sizes2 = _interopRequireDefault(_sizes);

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Prepare sizes
var sizeVariants = {};
Object.keys(_sizes2.default).forEach(function (size) {
	sizeVariants[size] = {
		maxWidth: _sizes2.default[size]
	};
});

/*
	Micro clearfix hack
	1.	The space content is one way to avoid an Opera bug when the
			contenteditable attribute is included anywhere else in the document.
			Otherwise it causes space to appear at the top and bottom of elements
			that are clearfixed.
	2.	The use of `table` rather than `block` is only necessary if using
			`:before` to contain the top-margins of child elements.
*/
var clearfixStyles = {
	clear: 'both',
	content: '" "', // 1
	display: 'table' };

module.exports = _extends({
	container: {
		marginLeft: 'auto',
		marginRight: 'auto',
		paddingLeft: _theme2.default.container.gutter,
		paddingRight: _theme2.default.container.gutter
	},

	// clear floating children
	clearfix: {
		':before': clearfixStyles,
		':after': clearfixStyles
	}

}, sizeVariants);

},{"../../../theme":73,"./sizes":13}],15:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _glamor = require('glamor');

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /* eslint quote-props: ["error", "as-needed"] */

function DropdownButton(_ref) {
	var children = _ref.children;

	var props = _objectWithoutProperties(_ref, ['children']);

	return _react2.default.createElement(
		_Button2.default,
		props,
		children,
		_react2.default.createElement('span', { className: (0, _glamor.css)(classes.arrow) })
	);
};

// NOTE
// 1: take advantage of `currentColor` by leaving border top color undefined
// 2: even though the arrow is vertically centered, visually it appears too low
//    because of lowercase characters beside it
var classes = {
	arrow: {
		borderLeft: '0.3em solid transparent',
		borderRight: '0.3em solid transparent',
		borderTop: '0.3em solid', // 1
		display: 'inline-block',
		height: 0,
		marginTop: '-0.125em', // 2
		verticalAlign: 'middle',
		width: 0,

		// add spacing
		':first-child': {
			marginRight: '0.5em'
		},
		':last-child': {
			marginLeft: '0.5em'
		}
	}
};

module.exports = DropdownButton;

},{"../Button":5,"glamor":undefined,"react":undefined}],16:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _glamor = require('glamor');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_Component) {
	_inherits(Form, _Component);

	function Form() {
		_classCallCheck(this, Form);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Form).apply(this, arguments));
	}

	_createClass(Form, [{
		key: 'getChildContext',
		value: function getChildContext() {
			return {
				formLayout: this.props.layout,
				labelWidth: this.props.labelWidth
			};
		}
	}, {
		key: 'render',
		value: function render() {
			// NOTE `labelWidth` is declared to remove it from `props`, though never used
			var _props = this.props;
			var className = _props.className;
			var Component = _props.component;
			var labelWidth = _props.labelWidth;
			var layout = _props.layout;

			var props = _objectWithoutProperties(_props, ['className', 'component', 'labelWidth', 'layout']);

			props.className = (0, _glamor.css)(_styles2.default.Form, _styles2.default['Form__' + layout], className);

			return _react2.default.createElement(Component, props);
		}
	}]);

	return Form;
}(_react.Component);

;

Form.childContextTypes = {
	formLayout: _react.PropTypes.oneOf(['basic', 'horizontal', 'inline']),
	labelWidth: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
};
Form.propTypes = {
	children: _react.PropTypes.node.isRequired,
	component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
	layout: _react.PropTypes.oneOf(['basic', 'horizontal', 'inline'])
};
Form.defaultProps = {
	component: 'form',
	layout: 'basic'
};

module.exports = Form;

},{"./styles":17,"glamor":undefined,"react":undefined}],17:[function(require,module,exports){
"use strict";

// ==============================
// Form
// ==============================

module.exports = {
	Form: {}
};

},{}],18:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _glamor = require('glamor');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _FormLabel = require('../FormLabel');

var _FormLabel2 = _interopRequireDefault(_FormLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormField = function (_Component) {
	_inherits(FormField, _Component);

	function FormField() {
		_classCallCheck(this, FormField);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FormField).call(this));

		_this.formFieldId = generateId();
		return _this;
	}

	_createClass(FormField, [{
		key: 'getChildContext',
		value: function getChildContext() {
			return {
				formFieldId: this.formFieldId
			};
		}
	}, {
		key: 'render',
		value: function render() {
			var _context = this.context;
			var _context$formLayout = _context.formLayout;
			var formLayout = _context$formLayout === undefined ? 'basic' : _context$formLayout;
			var labelWidth = _context.labelWidth;
			var _props = this.props;
			var aphroditeStyles = _props.aphroditeStyles;
			var children = _props.children;
			var className = _props.className;
			var cropLabel = _props.cropLabel;
			var htmlFor = _props.htmlFor;
			var label = _props.label;
			var offsetAbsentLabel = _props.offsetAbsentLabel;

			var props = _objectWithoutProperties(_props, ['aphroditeStyles', 'children', 'className', 'cropLabel', 'htmlFor', 'label', 'offsetAbsentLabel']);

			props.className = (0, _glamor.css)(_styles2.default.FormField, _styles2.default['FormField--form-layout-' + formLayout], offsetAbsentLabel ? _styles2.default['FormField--offset-absent-label'] : null, aphroditeStyles);
			if (className) {
				props.className += ' ' + className;
			}
			if (offsetAbsentLabel && labelWidth) {
				props.style = _extends({
					paddingLeft: labelWidth
				}, props.style);
			}

			// elements
			var componentLabel = label ? _react2.default.createElement(
				_FormLabel2.default,
				{ htmlFor: htmlFor, cropText: cropLabel },
				label
			) : null;

			return _react2.default.createElement(
				'div',
				_extends({}, props, { htmlFor: htmlFor }),
				componentLabel,
				children
			);
		}
	}]);

	return FormField;
}(_react.Component);

;

var stylesShape = {
	_definition: _react.PropTypes.object,
	_name: _react.PropTypes.string
};

FormField.contextTypes = {
	formLayout: _react.PropTypes.oneOf(['basic', 'horizontal', 'inline']),
	labelWidth: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
};
FormField.childContextTypes = {
	formFieldId: _react.PropTypes.string
};
FormField.propTypes = {
	aphroditeStyles: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.shape(stylesShape)), _react.PropTypes.shape(stylesShape)]),
	children: _react.PropTypes.node,
	cropLabel: _react.PropTypes.bool,
	htmlFor: _react2.default.PropTypes.string,
	label: _react2.default.PropTypes.string,
	offsetAbsentLabel: _react2.default.PropTypes.bool
};

function generateId() {
	return Math.random().toString(36).substr(2, 9);
};

module.exports = FormField;

},{"../FormLabel":23,"./styles":19,"glamor":undefined,"react":undefined}],19:[function(require,module,exports){
'use strict';

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } // ==============================
// Form Field
// ==============================

module.exports = {
	'FormField': {
		marginBottom: '1em',
		position: 'relative'
	},

	// when inside a horizontal form

	'FormField--form-layout-horizontal': _defineProperty({}, '@media (min-width: ' + _theme2.default.breakpoint.tabletLandscapeMin + ')', {
		display: 'table',
		tableLayout: 'fixed',
		width: '100%'
	}),

	// inside horizontal form
	// typically for use with submit button inside
	'FormField--offset-absent-label': {
		paddingLeft: _theme2.default.form.label.width
	},

	// when inside an inline form

	'FormField--form-layout-inline': {
		'display': 'inline-block',
		'paddingLeft': '0.25em',
		'paddingRight': '0.25em',
		'verticalAlign': 'top',

		':first-child': { paddingLeft: 0 },
		':last-child': { paddingRight: 0 }
	}
};

},{"../../../theme":73}],20:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _glamor = require('glamor');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _concatClassnames = require('../../../utils/concatClassnames');

var _concatClassnames2 = _interopRequireDefault(_concatClassnames);

var _noedit = require('./noedit');

var _noedit2 = _interopRequireDefault(_noedit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// NOTE must NOT be functional component to allow `refs`

var FormInput = function (_Component) {
	_inherits(FormInput, _Component);

	function FormInput() {
		_classCallCheck(this, FormInput);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(FormInput).apply(this, arguments));
	}

	_createClass(FormInput, [{
		key: 'blur',
		value: function blur() {
			this.target.blur();
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.target.focus();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props;
			var aphroditeStyles = _props.aphroditeStyles;
			var className = _props.className;
			var disabled = _props.disabled;
			var id = _props.id;
			var multiline = _props.multiline;
			var noedit = _props.noedit;
			var size = _props.size;

			var props = _objectWithoutProperties(_props, ['aphroditeStyles', 'className', 'disabled', 'id', 'multiline', 'noedit', 'size']);

			// NOTE return a different component for `noedit`


			if (noedit) return _react2.default.createElement(_noedit2.default, this.props);

			var _context = this.context;
			var formFieldId = _context.formFieldId;
			var formLayout = _context.formLayout;


			props.id = id || formFieldId;
			props.className = _glamor.css.apply(undefined, [_styles2.default.FormInput, _styles2.default['FormInput__size--' + size], disabled ? _styles2.default['FormInput--disabled'] : null, formLayout ? _styles2.default['FormInput--form-layout-' + formLayout] : null].concat(_toConsumableArray((0, _concatClassnames2.default)(aphroditeStyles))));
			if (className) {
				props.className += ' ' + className;
			}

			var setRef = function setRef(n) {
				return _this2.target = n;
			};
			var Tag = multiline ? 'textarea' : 'input';

			return _react2.default.createElement(Tag, _extends({
				ref: setRef,
				disabled: props.disabled
			}, props));
		}
	}]);

	return FormInput;
}(_react.Component);

;

var stylesShape = {
	_definition: _react.PropTypes.object,
	_name: _react.PropTypes.string
};

FormInput.propTypes = {
	aphroditeStyles: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.shape(stylesShape)), _react.PropTypes.shape(stylesShape)]),
	multiline: _react.PropTypes.bool,
	size: _react.PropTypes.oneOf(['default', 'small', 'large']),
	type: _react.PropTypes.string
};
FormInput.defaultProps = {
	size: 'default',
	type: 'text'
};
FormInput.contextTypes = {
	formLayout: _react.PropTypes.oneOf(['basic', 'horizontal', 'inline']),
	formFieldId: _react.PropTypes.string
};

module.exports = FormInput;

},{"../../../utils/concatClassnames":76,"./noedit":21,"./styles":22,"glamor":undefined,"react":undefined}],21:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _glamor = require('glamor');

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

var _color = require('../../../utils/color');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/* eslint quote-props: ["error", "as-needed"] */

function FormInputNoedit(_ref) {
	var className = _ref.className;
	var Component = _ref.component;
	var cropText = _ref.cropText;
	var multiline = _ref.multiline;
	var noedit = _ref.noedit;
	var type = _ref.type;

	var props = _objectWithoutProperties(_ref, ['className', 'component', 'cropText', 'multiline', 'noedit', 'type']);

	props.className = (0, _glamor.css)(classes.noedit, cropText ? classes.cropText : null, multiline ? classes.multiline : null, props.href || props.onClick ? classes.anchor : null, className);

	return _react2.default.createElement(Component, props);
};

FormInputNoedit.propTypes = {
	component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
	cropText: _react.PropTypes.bool
};
FormInputNoedit.defaultProps = {
	component: 'span'
};

var anchorHoverAndFocusStyles = {
	backgroundColor: (0, _color.fade)(_theme2.default.color.link, 10),
	borderColor: (0, _color.fade)(_theme2.default.color.link, 10),
	color: _theme2.default.color.link,
	outline: 'none',
	textDecoration: 'underline'
};

var classes = {
	noedit: {
		appearance: 'none',
		backgroundColor: _theme2.default.input.background.noedit,
		backgroundImage: 'none',
		borderColor: _theme2.default.input.border.color.noedit,
		borderRadius: _theme2.default.input.border.radius,
		borderStyle: 'solid',
		borderWidth: _theme2.default.input.border.width,
		color: _theme2.default.color.gray80,
		display: 'inline-block',
		height: _theme2.default.input.height,
		lineHeight: _theme2.default.input.lineHeight,
		padding: '0 ' + _theme2.default.input.paddingHorizontal,
		transition: 'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
		verticalAlign: 'middle',

		// prevent empty inputs from collapsing by adding content
		':empty:before': {
			color: _theme2.default.color.gray40,
			content: '"(no value)"'
		}
	},

	multiline: {
		display: 'block',
		height: 'auto',
		lineHeight: '1.4',
		paddingBottom: '0.6em',
		paddingTop: '0.6em'
	},

	// indicate clickability when using an anchor
	anchor: {
		backgroundColor: (0, _color.fade)(_theme2.default.color.link, 5),
		borderColor: (0, _color.fade)(_theme2.default.color.link, 10),
		color: _theme2.default.color.link,
		marginRight: 5,
		minWidth: 0,
		textDecoration: 'none',

		':hover': anchorHoverAndFocusStyles,
		':focus': anchorHoverAndFocusStyles
	}
};

module.exports = FormInputNoedit;

},{"../../../theme":73,"../../../utils/color":75,"glamor":undefined,"react":undefined}],22:[function(require,module,exports){
'use strict';

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	'FormInput': {
		'appearance': 'none',
		'backgroundColor': _theme2.default.input.background.default,
		'backgroundImage': 'none',
		'borderColor': _theme2.default.input.border.color.default,
		'borderRadius': _theme2.default.input.border.radius,
		'borderStyle': 'solid',
		'borderWidth': _theme2.default.input.border.width,
		'boxShadow': _theme2.default.input.boxShadow,
		'color': 'inherit', // FIXME
		'display': 'block',
		'height': _theme2.default.input.height,
		'lineHeight': _theme2.default.input.lineHeight,
		'padding': '0 ' + _theme2.default.input.paddingHorizontal,
		'transition': 'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
		'width': '100%',

		':hover': {
			borderColor: _theme2.default.input.border.color.hover,
			outline: 0
		},
		':focus': {
			borderColor: _theme2.default.input.border.color.focus,
			boxShadow: _theme2.default.input.boxShadowFocus,
			outline: 0
		}
	},
	'FormInput--disabled': {
		backgroundColor: _theme2.default.input.background.disabled,
		pointerEvents: 'none'
	},

	// sizes
	'FormInput__size--small': {
		fontSize: _theme2.default.font.size.small
	},
	'FormInput__size--large': {
		fontSize: _theme2.default.font.size.large
	}
}; // ==============================
// Form Input
// ==============================

},{"../../../theme":73}],23:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _glamor = require('glamor');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function FormLabel(_ref, _ref2) {
	var formFieldId = _ref2.formFieldId;
	var formLayout = _ref2.formLayout;
	var labelWidth = _ref2.labelWidth;
	var aphroditeStyles = _ref.aphroditeStyles;
	var className = _ref.className;
	var Component = _ref.component;
	var cropText = _ref.cropText;
	var htmlFor = _ref.htmlFor;

	var props = _objectWithoutProperties(_ref, ['aphroditeStyles', 'className', 'component', 'cropText', 'htmlFor']);

	props.htmlFor = htmlFor || formFieldId;
	props.className = (0, _glamor.css)(_styles2.default.FormLabel, formLayout ? _styles2.default['FormLabel--form-layout-' + formLayout] : null, cropText ? _styles2.default['FormLabel--crop-text'] : null, aphroditeStyles);
	if (className) {
		props.className += ' ' + className;
	}
	if (labelWidth) {
		props.style = _extends({
			width: labelWidth
		}, props.style);
	}

	return _react2.default.createElement(Component, props);
};

var stylesShape = {
	_definition: _react.PropTypes.object,
	_name: _react.PropTypes.string
};

FormLabel.propTypes = {
	aphroditeStyles: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.shape(stylesShape)), _react.PropTypes.shape(stylesShape)]),
	component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
	cropText: _react.PropTypes.bool
};
FormLabel.defaultProps = {
	component: 'label'
};
FormLabel.contextTypes = {
	formLayout: _react.PropTypes.oneOf(['basic', 'horizontal', 'inline']),
	formFieldId: _react.PropTypes.string,
	labelWidth: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
};

module.exports = FormLabel;

},{"./styles":24,"glamor":undefined,"react":undefined}],24:[function(require,module,exports){
'use strict';

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } // ==============================
// Form Label
// ==============================

module.exports = {
	'FormLabel': {
		color: _theme2.default.form.label.color,
		fontSize: _theme2.default.form.label.fontSize,
		fontWeight: _theme2.default.form.label.fontWeight,
		display: 'inline-block',
		marginBottom: '0.5em'
	},

	// when inside a horizontal form

	'FormLabel--form-layout-horizontal': _defineProperty({}, '@media (min-width: ' + _theme2.default.breakpoint.tabletLandscapeMin + ')', {
		display: 'table-cell',
		lineHeight: _theme2.default.component.lineHeight, // fix
		marginBottom: 0,
		paddingRight: 5,
		verticalAlign: 'top',
		width: _theme2.default.form.label.width
	}),

	// crop long text

	'FormLabel--crop-text': {
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap'
	}
};

},{"../../../theme":73}],25:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _glamor = require('glamor');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function FormNote(_ref) {
	var className = _ref.className;
	var children = _ref.children;
	var Component = _ref.component;
	var html = _ref.html;

	var props = _objectWithoutProperties(_ref, ['className', 'children', 'component', 'html']);

	props.className = (0, _glamor.css)(_styles2.default.note, className);

	// Property Violation
	if (children && html) {
		console.error('Warning: FormNote cannot render `children` and `html`. You must provide one or the other.');
	}

	return html ? _react2.default.createElement(Component, _extends({}, props, { dangerouslySetInnerHTML: { __html: html } })) : _react2.default.createElement(
		Component,
		props,
		children
	);
};
FormNote.propTypes = {
	component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]),
	html: _react.PropTypes.string
};
FormNote.defaultProps = {
	component: 'div'
};

module.exports = FormNote;

},{"./styles":26,"glamor":undefined,"react":undefined}],26:[function(require,module,exports){
'use strict';

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	note: {
		color: _theme2.default.form.note.color,
		fontSize: _theme2.default.form.note.fontSize,
		marginTop: _theme2.default.spacing.small
	}
}; // ==============================
// Form Note
// ==============================

},{"../../../theme":73}],27:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _glamor = require('glamor');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormSelect = function (_Component) {
	_inherits(FormSelect, _Component);

	function FormSelect() {
		_classCallCheck(this, FormSelect);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(FormSelect).apply(this, arguments));
	}

	_createClass(FormSelect, [{
		key: 'render',
		value: function render() {
			var _props = this.props;
			var children = _props.children;
			var id = _props.id;
			var options = _props.options;

			var props = _objectWithoutProperties(_props, ['children', 'id', 'options']);

			var formFieldId = this.context.formFieldId;


			props.className = (0, _glamor.css)(_styles2.default.select, props.disabled ? _styles2.default['select--disabled'] : null);
			props.id = id || formFieldId;

			// Property Violation
			if (options && children) {
				console.error('Warning: FormSelect cannot render `children` and `options`. You must provide one or the other.');
			}

			return _react2.default.createElement(
				'div',
				{ className: (0, _glamor.css)(_styles2.default.container) },
				options ? _react2.default.createElement(
					'select',
					props,
					options.map(function (opt) {
						return _react2.default.createElement(
							'option',
							{ key: opt.value, value: opt.value },
							opt.label
						);
					})
				) : _react2.default.createElement(
					'select',
					props,
					children
				),
				_react2.default.createElement(
					'span',
					{ className: (0, _glamor.css)(_styles2.default.arrows, props.disabled ? _styles2.default['arrows--disabled'] : null) },
					_react2.default.createElement('span', { className: (0, _glamor.css)(_styles2.default.arrow, _styles2.default.arrowTop) }),
					_react2.default.createElement('span', { className: (0, _glamor.css)(_styles2.default.arrow, _styles2.default.arrowBottom) })
				)
			);
		}
	}]);

	return FormSelect;
}(_react.Component);

;

FormSelect.contextTypes = {
	formFieldId: _react.PropTypes.string
};
FormSelect.propTypes = {
	onChange: _react.PropTypes.func.isRequired,
	options: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
		label: _react2.default.PropTypes.string,
		value: _react2.default.PropTypes.string
	})),
	value: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
};

module.exports = FormSelect;

},{"./styles":28,"glamor":undefined,"react":undefined}],28:[function(require,module,exports){
'use strict';

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

var _color = require('../../../utils/color');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ==============================
// Form Select
// ==============================

/* eslint quote-props: ["error", "as-needed"] */

module.exports = {
	container: {
		position: 'relative'
	},

	// select node
	select: {
		appearance: 'none',
		backgroundColor: _theme2.default.input.background.default,
		backgroundImage: 'none',
		borderColor: _theme2.default.input.border.color.default,
		borderBottomColor: (0, _color.darken)(_theme2.default.input.border.color.default, 4),
		borderTopColor: (0, _color.lighten)(_theme2.default.input.border.color.default, 4),
		borderRadius: _theme2.default.input.border.radius,
		borderStyle: 'solid',
		borderWidth: _theme2.default.input.border.width,
		boxShadow: _theme2.default.select.boxShadow,
		color: 'inherit', // FIXME
		display: 'block',
		height: _theme2.default.input.height,
		lineHeight: _theme2.default.input.lineHeight,
		padding: '0 ' + _theme2.default.input.paddingHorizontal,
		transition: 'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
		width: '100%',

		':hover': {
			borderColor: _theme2.default.input.border.color.hover,
			outline: 0
		},
		':focus': {
			borderColor: _theme2.default.input.border.color.focus,
			boxShadow: _theme2.default.input.boxShadowFocus,
			outline: 0
		}
	},
	'select--disabled': {
		backgroundColor: _theme2.default.input.background.disabled,
		pointerEvents: 'none'
	},

	// arrows
	arrows: {
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column',
		height: _theme2.default.input.height,
		justifyContent: 'center',
		pointerEvents: 'none',
		position: 'absolute',
		right: 0,
		top: 0,
		width: _theme2.default.input.height
	},
	arrow: {
		borderLeft: '0.3em solid transparent',
		borderRight: '0.3em solid transparent',
		display: 'inline-block',
		height: 0,
		verticalAlign: 'middle',
		width: 0,
		zIndex: 1
	},
	arrowTop: {
		borderBottom: '0.3em solid',
		marginBottom: '0.1em'
	},
	arrowBottom: {
		borderTop: '0.3em solid',
		marginTop: '0.1em'
	}
};

},{"../../../theme":73,"../../../utils/color":75}],29:[function(require,module,exports){
'use strict';

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	danger: _theme2.default.glyph.color.danger,
	inherit: _theme2.default.glyph.color.inherit,
	inverted: _theme2.default.glyph.color.inverted,
	primary: _theme2.default.glyph.color.primary,
	success: _theme2.default.glyph.color.success,
	warning: _theme2.default.glyph.color.warning
};

},{"../../../theme":73}],30:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _glamor = require('glamor');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _octicons = require('./octicons');

var _octicons2 = _interopRequireDefault(_octicons);

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

var _sizes = require('./sizes');

var _sizes2 = _interopRequireDefault(_sizes);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// FIXME static octicon classes leaning on Elemental to avoid duplicate
// font and CSS; inflating the project size

function Glyph(_ref) {
	var aphroditeStyles = _ref.aphroditeStyles;
	var className = _ref.className;
	var color = _ref.color;
	var Component = _ref.component;
	var name = _ref.name;
	var size = _ref.size;
	var style = _ref.style;

	var props = _objectWithoutProperties(_ref, ['aphroditeStyles', 'className', 'color', 'component', 'name', 'size', 'style']);

	var colorIsValidType = Object.keys(_colors2.default).includes(color);
	props.className = (0, _glamor.css)(_styles2.default.glyph, colorIsValidType && _styles2.default['color__' + color], _styles2.default['size__' + size], aphroditeStyles) + (' ' + _octicons2.default[name]);
	if (className) {
		props.className += ' ' + className;
	}

	// support random color strings
	props.style = _extends({
		color: !colorIsValidType ? color : null
	}, style);

	return _react2.default.createElement(Component, props);
};

Glyph.propTypes = {
	aphroditeStyles: _react.PropTypes.shape({
		_definition: _react.PropTypes.object,
		_name: _react.PropTypes.string
	}),
	color: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(Object.keys(_colors2.default)), _react.PropTypes.string]),
	name: _react.PropTypes.oneOf(Object.keys(_octicons2.default)).isRequired,
	size: _react.PropTypes.oneOf(Object.keys(_sizes2.default))
};
Glyph.defaultProps = {
	component: 'i',
	color: 'inherit',
	size: 'small'
};

module.exports = Glyph;

},{"./colors":29,"./octicons":31,"./sizes":32,"./styles":33,"glamor":undefined,"react":undefined}],31:[function(require,module,exports){
'use strict';

/* eslint quote-props: ["error", "as-needed"] */

module.exports = {
	alert: 'octicon octicon-alert',
	'arrow-down': 'octicon octicon-arrow-down',
	'arrow-left': 'octicon octicon-arrow-left',
	'arrow-right': 'octicon octicon-arrow-right',
	'arrow-small-down': 'octicon octicon-arrow-small-down',
	'arrow-small-left': 'octicon octicon-arrow-small-left',
	'arrow-small-right': 'octicon octicon-arrow-small-right',
	'arrow-small-up': 'octicon octicon-arrow-small-up',
	'arrow-up': 'octicon octicon-arrow-up',
	microscope: 'octicon octicon-microscope',
	beaker: 'octicon octicon-beaker',
	bell: 'octicon octicon-bell',
	book: 'octicon octicon-book',
	bookmark: 'octicon octicon-bookmark',
	briefcase: 'octicon octicon-briefcase',
	broadcast: 'octicon octicon-broadcast',
	browser: 'octicon octicon-browser',
	bug: 'octicon octicon-bug',
	calendar: 'octicon octicon-calendar',
	check: 'octicon octicon-check',
	checklist: 'octicon octicon-checklist',
	'chevron-down': 'octicon octicon-chevron-down',
	'chevron-left': 'octicon octicon-chevron-left',
	'chevron-right': 'octicon octicon-chevron-right',
	'chevron-up': 'octicon octicon-chevron-up',
	'circle-slash': 'octicon octicon-circle-slash',
	'circuit-board': 'octicon octicon-circuit-board',
	clippy: 'octicon octicon-clippy',
	clock: 'octicon octicon-clock',
	'cloud-download': 'octicon octicon-cloud-download',
	'cloud-upload': 'octicon octicon-cloud-upload',
	code: 'octicon octicon-code',
	'color-mode': 'octicon octicon-color-mode',
	'comment-add': 'octicon octicon-comment-add',
	comment: 'octicon octicon-comment',
	'comment-discussion': 'octicon octicon-comment-discussion',
	'credit-card': 'octicon octicon-credit-card',
	dash: 'octicon octicon-dash',
	dashboard: 'octicon octicon-dashboard',
	database: 'octicon octicon-database',
	clone: 'octicon octicon-clone',
	'desktop-download': 'octicon octicon-desktop-download',
	'device-camera': 'octicon octicon-device-camera',
	'device-camera-video': 'octicon octicon-device-camera-video',
	'device-desktop': 'octicon octicon-device-desktop',
	'device-mobile': 'octicon octicon-device-mobile',
	diff: 'octicon octicon-diff',
	'diff-added': 'octicon octicon-diff-added',
	'diff-ignored': 'octicon octicon-diff-ignored',
	'diff-modified': 'octicon octicon-diff-modified',
	'diff-removed': 'octicon octicon-diff-removed',
	'diff-renamed': 'octicon octicon-diff-renamed',
	ellipsis: 'octicon octicon-ellipsis',
	'eye-unwatch': 'octicon octicon-eye-unwatch',
	'eye-watch': 'octicon octicon-eye-watch',
	eye: 'octicon octicon-eye',
	'file-binary': 'octicon octicon-file-binary',
	'file-code': 'octicon octicon-file-code',
	'file-directory': 'octicon octicon-file-directory',
	'file-media': 'octicon octicon-file-media',
	'file-pdf': 'octicon octicon-file-pdf',
	'file-submodule': 'octicon octicon-file-submodule',
	'file-symlink-directory': 'octicon octicon-file-symlink-directory',
	'file-symlink-file': 'octicon octicon-file-symlink-file',
	'file-text': 'octicon octicon-file-text',
	'file-zip': 'octicon octicon-file-zip',
	flame: 'octicon octicon-flame',
	fold: 'octicon octicon-fold',
	gear: 'octicon octicon-gear',
	gift: 'octicon octicon-gift',
	gist: 'octicon octicon-gist',
	'gist-secret': 'octicon octicon-gist-secret',
	'git-branch-create': 'octicon octicon-git-branch-create',
	'git-branch-delete': 'octicon octicon-git-branch-delete',
	'git-branch': 'octicon octicon-git-branch',
	'git-commit': 'octicon octicon-git-commit',
	'git-compare': 'octicon octicon-git-compare',
	'git-merge': 'octicon octicon-git-merge',
	'git-pull-request-abandoned': 'octicon octicon-git-pull-request-abandoned',
	'git-pull-request': 'octicon octicon-git-pull-request',
	globe: 'octicon octicon-globe',
	graph: 'octicon octicon-graph',
	heart: 'octicon octicon-heart',
	history: 'octicon octicon-history',
	home: 'octicon octicon-home',
	'horizontal-rule': 'octicon octicon-horizontal-rule',
	hubot: 'octicon octicon-hubot',
	inbox: 'octicon octicon-inbox',
	info: 'octicon octicon-info',
	'issue-closed': 'octicon octicon-issue-closed',
	'issue-opened': 'octicon octicon-issue-opened',
	'issue-reopened': 'octicon octicon-issue-reopened',
	jersey: 'octicon octicon-jersey',
	key: 'octicon octicon-key',
	keyboard: 'octicon octicon-keyboard',
	law: 'octicon octicon-law',
	'light-bulb': 'octicon octicon-light-bulb',
	link: 'octicon octicon-link',
	'link-external': 'octicon octicon-link-external',
	'list-ordered': 'octicon octicon-list-ordered',
	'list-unordered': 'octicon octicon-list-unordered',
	location: 'octicon octicon-location',
	'gist-private': 'octicon octicon-gist-private',
	'mirror-private': 'octicon octicon-mirror-private',
	'git-fork-private': 'octicon octicon-git-fork-private',
	lock: 'octicon octicon-lock',
	'logo-github': 'octicon octicon-logo-github',
	mail: 'octicon octicon-mail',
	'mail-read': 'octicon octicon-mail-read',
	'mail-reply': 'octicon octicon-mail-reply',
	'mark-github': 'octicon octicon-mark-github',
	markdown: 'octicon octicon-markdown',
	megaphone: 'octicon octicon-megaphone',
	mention: 'octicon octicon-mention',
	milestone: 'octicon octicon-milestone',
	'mirror-public': 'octicon octicon-mirror-public',
	mirror: 'octicon octicon-mirror',
	'mortar-board': 'octicon octicon-mortar-board',
	mute: 'octicon octicon-mute',
	'no-newline': 'octicon octicon-no-newline',
	octoface: 'octicon octicon-octoface',
	organization: 'octicon octicon-organization',
	package: 'octicon octicon-package',
	paintcan: 'octicon octicon-paintcan',
	pencil: 'octicon octicon-pencil',
	'person-add': 'octicon octicon-person-add',
	'person-follow': 'octicon octicon-person-follow',
	person: 'octicon octicon-person',
	pin: 'octicon octicon-pin',
	plug: 'octicon octicon-plug',
	'repo-create': 'octicon octicon-repo-create',
	'gist-new': 'octicon octicon-gist-new',
	'file-directory-create': 'octicon octicon-file-directory-create',
	'file-add': 'octicon octicon-file-add',
	plus: 'octicon octicon-plus',
	'primitive-dot': 'octicon octicon-primitive-dot',
	'primitive-square': 'octicon octicon-primitive-square',
	pulse: 'octicon octicon-pulse',
	question: 'octicon octicon-question',
	quote: 'octicon octicon-quote',
	'radio-tower': 'octicon octicon-radio-tower',
	'repo-delete': 'octicon octicon-repo-delete',
	repo: 'octicon octicon-repo',
	'repo-clone': 'octicon octicon-repo-clone',
	'repo-force-push': 'octicon octicon-repo-force-push',
	'gist-fork': 'octicon octicon-gist-fork',
	'repo-forked': 'octicon octicon-repo-forked',
	'repo-pull': 'octicon octicon-repo-pull',
	'repo-push': 'octicon octicon-repo-push',
	rocket: 'octicon octicon-rocket',
	rss: 'octicon octicon-rss',
	ruby: 'octicon octicon-ruby',
	'screen-full': 'octicon octicon-screen-full',
	'screen-normal': 'octicon octicon-screen-normal',
	'search-save': 'octicon octicon-search-save',
	search: 'octicon octicon-search',
	server: 'octicon octicon-server',
	settings: 'octicon octicon-settings',
	shield: 'octicon octicon-shield',
	'log-in': 'octicon octicon-log-in',
	'sign-in': 'octicon octicon-sign-in',
	'log-out': 'octicon octicon-log-out',
	'sign-out': 'octicon octicon-sign-out',
	squirrel: 'octicon octicon-squirrel',
	'star-add': 'octicon octicon-star-add',
	'star-delete': 'octicon octicon-star-delete',
	star: 'octicon octicon-star',
	stop: 'octicon octicon-stop',
	'repo-sync': 'octicon octicon-repo-sync',
	sync: 'octicon octicon-sync',
	'tag-remove': 'octicon octicon-tag-remove',
	'tag-add': 'octicon octicon-tag-add',
	tag: 'octicon octicon-tag',
	telescope: 'octicon octicon-telescope',
	terminal: 'octicon octicon-terminal',
	'three-bars': 'octicon octicon-three-bars',
	thumbsdown: 'octicon octicon-thumbsdown',
	thumbsup: 'octicon octicon-thumbsup',
	tools: 'octicon octicon-tools',
	trashcan: 'octicon octicon-trashcan',
	'triangle-down': 'octicon octicon-triangle-down',
	'triangle-left': 'octicon octicon-triangle-left',
	'triangle-right': 'octicon octicon-triangle-right',
	'triangle-up': 'octicon octicon-triangle-up',
	unfold: 'octicon octicon-unfold',
	unmute: 'octicon octicon-unmute',
	versions: 'octicon octicon-versions',
	watch: 'octicon octicon-watch',
	'remove-close': 'octicon octicon-remove-close',
	x: 'octicon octicon-x',
	zap: 'octicon octicon-zap'
};

},{}],32:[function(require,module,exports){
'use strict';

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	small: _theme2.default.glyph.size.small,
	medium: _theme2.default.glyph.size.medium,
	large: _theme2.default.glyph.size.large
};

},{"../../../theme":73}],33:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // ==============================
// Glyph
// ==============================

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

var _sizes = require('./sizes');

var _sizes2 = _interopRequireDefault(_sizes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Prepare variants
var colorVariants = {};
Object.keys(_colors2.default).forEach(function (color) {
	colorVariants['color__' + color] = {
		color: _colors2.default[color]
	};
});

// Prepare sizes
var sizeVariants = {};
Object.keys(_sizes2.default).forEach(function (size) {
	sizeVariants['size__' + size] = {
		fontSize: _sizes2.default[size]
	};
});

module.exports = _extends({
	glyph: {}

}, colorVariants, sizeVariants);

},{"./colors":29,"./sizes":32}],34:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Glyph = require('../Glyph');

var _Glyph2 = _interopRequireDefault(_Glyph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /* eslint quote-props: ["error", "as-needed"] */

function GlyphButton(_ref) {
	var children = _ref.children;
	var glyph = _ref.glyph;
	var glyphColor = _ref.glyphColor;
	var glyphSize = _ref.glyphSize;
	var glyphStyle = _ref.glyphStyle;
	var position = _ref.position;

	var props = _objectWithoutProperties(_ref, ['children', 'glyph', 'glyphColor', 'glyphSize', 'glyphStyle', 'position']);

	var isDefault = position === 'default';
	var isLeft = position === 'left';
	var isRight = position === 'right';

	var offset = {};
	if (isLeft) offset.marginRight = '0.5em';
	if (isRight) offset.marginLeft = '0.5em';

	var glyphStyles = _extends({}, offset, glyphStyle);

	var icon = _react2.default.createElement(_Glyph2.default, {
		aphroditeStyles: classes.glyph,
		color: glyphColor,
		name: glyph,
		size: glyphSize,
		style: glyphStyles
	});

	return _react2.default.createElement(
		_Button2.default,
		props,
		(isDefault || isLeft) && icon,
		children,
		isRight && icon
	);
};

// For props "glyph", "glyphColor", and "glyphSize":
// prop type validation will occur within the Glyph component, no need to
// duplicate, just pass it through.
GlyphButton.propTypes = {
	glyph: _react.PropTypes.string,
	glyphColor: _react.PropTypes.string,
	glyphSize: _react.PropTypes.string,
	glyphStyle: _react.PropTypes.object,
	position: _react.PropTypes.oneOf(['default', 'left', 'right'])
};
GlyphButton.defaultProps = {
	glyphStyle: {},
	position: 'default' };

var classes = {
	glyph: {
		display: 'inline-block',
		marginTop: '-0.125em', // fix icon alignment
		verticalAlign: 'middle'
	}
};

module.exports = GlyphButton;

},{"../Button":5,"../Glyph":30,"react":undefined}],35:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FormField = require('../FormField');

var _FormField2 = _interopRequireDefault(_FormField);

var _Glyph = require('../Glyph');

var _Glyph2 = _interopRequireDefault(_Glyph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /* eslint quote-props: ["error", "as-needed"] */

function GlyphField(_ref) {
	var children = _ref.children;
	var glyph = _ref.glyph;
	var glyphColor = _ref.glyphColor;
	var glyphSize = _ref.glyphSize;
	var position = _ref.position;

	var props = _objectWithoutProperties(_ref, ['children', 'glyph', 'glyphColor', 'glyphSize', 'position']);

	var isLeft = position === 'left';
	var isRight = position === 'right';

	var glyphStyles = {};
	if (isLeft) glyphStyles.marginRight = '0.5em';
	if (isRight) glyphStyles.marginLeft = '0.5em';

	var icon = _react2.default.createElement(_Glyph2.default, {
		aphroditeStyles: classes.glyph,
		color: glyphColor,
		name: glyph,
		size: glyphSize,
		style: glyphStyles
	});

	return _react2.default.createElement(
		_FormField2.default,
		_extends({ aphroditeStyles: classes.wrapper }, props),
		isLeft && icon,
		children,
		isRight && icon
	);
};

// For props "glyph", "glyphColor", and "glyphSize":
// prop type validation will occur within the Glyph component, no need to
// duplicate, just pass it through.
GlyphField.propTypes = {
	glyph: _react.PropTypes.string,
	glyphColor: _react.PropTypes.string,
	glyphSize: _react.PropTypes.string,
	position: _react.PropTypes.oneOf(['left', 'right'])
};
GlyphField.defaultProps = {
	position: 'left'
};

var classes = {
	wrapper: {
		alignItems: 'center',
		display: 'flex'
	},
	glyph: {
		display: 'inline-block',
		marginTop: '-0.125em', // fix icon alignment
		verticalAlign: 'middle'
	}
};

module.exports = GlyphField;

},{"../FormField":18,"../Glyph":30,"react":undefined}],36:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Row = exports.Col = undefined;

var _GridCol = require('../GridCol');

var _GridCol2 = _interopRequireDefault(_GridCol);

var _GridRow = require('../GridRow');

var _GridRow2 = _interopRequireDefault(_GridRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Col = _GridCol2.default;
exports.Row = _GridRow2.default;

},{"../GridCol":37,"../GridRow":38}],37:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _glamor = require('glamor');

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var WIDTHS = {
	'one-whole': '100%',
	'one-half': '50%',
	'one-third': '33.33%',
	'two-thirds': '66.66%',
	'one-quarter': '25%',
	'three-quarters': '75%',

	'one-fifth': '20%',
	'two-fifths': '40%',
	'three-fifths': '60%',
	'four-fifths': '80%',

	'one-sixth': '16.66%',
	'five-sixths': '83.33%'
};

var GridCol = function GridCol(props, context) {
	var gutter = props.gutter || context.gutter;
	var xsmall = props.xsmall || context.xsmall;
	var small = props.small || context.small;
	var medium = props.medium || context.medium;
	var large = props.large || context.large;

	var className = (0, _glamor.css)(classes['xsmall-' + xsmall], classes['small-' + small], classes['medium-' + medium], classes['large-' + large]);

	var componentClassName = '' + className + (props.className ? ' ' + props.className : '');
	var componentStyles = gutter ? {
		paddingLeft: gutter / 2,
		paddingRight: gutter / 2
	} : {};

	return _react2.default.createElement(
		'div',
		{ className: componentClassName, style: componentStyles },
		props.children
	);
};

GridCol.contextTypes = {
	gutter: _react.PropTypes.number,
	large: _react.PropTypes.string,
	medium: _react.PropTypes.string,
	small: _react.PropTypes.string,
	xsmall: _react.PropTypes.string
};

GridCol.propTypes = {
	gutter: _react.PropTypes.number,
	large: _react.PropTypes.string,
	medium: _react.PropTypes.string,
	small: _react.PropTypes.string,
	xsmall: _react.PropTypes.string
};

var classes = _extends({}, prepareWidths('xsmall', WIDTHS), prepareWidths('small', WIDTHS), prepareWidths('medium', WIDTHS), prepareWidths('large', WIDTHS));

/* eslint-disable guard-for-in */
function prepareWidths(prefix, obj) {
	var classes = {};
	switch (prefix) {
		case 'small':
			for (var prop in obj) {
				classes[prefix + '-' + prop] = _defineProperty({}, '@media (min-width: ' + _theme2.default.breakpoint.tabletPortraitMin + ')', {
					width: obj[prop]
				});
			}
			break;
		case 'medium':
			for (var _prop in obj) {
				classes[prefix + '-' + _prop] = _defineProperty({}, '@media (min-width: ' + _theme2.default.breakpoint.tabletLandscapeMin + ')', {
					width: obj[_prop]
				});
			}
			break;
		case 'large':
			for (var _prop2 in obj) {
				classes[prefix + '-' + _prop2] = _defineProperty({}, '@media (min-width: ' + _theme2.default.breakpoint.desktopMin + ')', {
					width: obj[_prop2]
				});
			}
			break;
		default:
			for (var _prop3 in obj) {
				classes[prefix + '-' + _prop3] = {
					width: obj[_prop3]
				};
			}

	}

	return classes;
};

module.exports = GridCol;

},{"../../../theme":73,"glamor":undefined,"react":undefined}],38:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _glamor = require('glamor');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GridRow = function (_Component) {
	_inherits(GridRow, _Component);

	function GridRow() {
		_classCallCheck(this, GridRow);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(GridRow).apply(this, arguments));
	}

	_createClass(GridRow, [{
		key: 'getChildContext',
		value: function getChildContext() {
			return {
				gutter: this.props.gutter,
				xsmall: this.props.xsmall,
				small: this.props.small,
				medium: this.props.medium,
				large: this.props.large
			};
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props;
			var children = _props.children;
			var className = _props.className;
			var gutter = _props.gutter;
			var _props$styles = _props.styles;
			var styles = _props$styles === undefined ? {} : _props$styles;


			var componentClassName = '' + (0, _glamor.css)(classes.grid) + (className ? ' ' + className : '');
			var componentStyles = _extends(styles, {
				marginLeft: gutter / -2,
				marginRight: gutter / -2
			});

			return _react2.default.createElement(
				'div',
				{ className: componentClassName, style: componentStyles },
				children
			);
		}
	}]);

	return GridRow;
}(_react.Component);

;

GridRow.childContextTypes = {
	gutter: _react.PropTypes.number,
	xsmall: _react.PropTypes.string,
	small: _react.PropTypes.string,
	medium: _react.PropTypes.string,
	large: _react.PropTypes.string
};

GridRow.propTypes = {
	gutter: _react.PropTypes.number,
	large: _react.PropTypes.string,
	medium: _react.PropTypes.string,
	small: _react.PropTypes.string,
	xsmall: _react.PropTypes.string
};

GridRow.defaultProps = {
	gutter: 0,
	xsmall: 'one-whole'
};

var classes = {
	grid: {
		display: 'flex',
		flexWrap: 'wrap'
	}
};

module.exports = GridRow;

},{"glamor":undefined,"react":undefined}],39:[function(require,module,exports){
'use strict';

var _glamor = require('glamor');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// NOTE: only accepts InlineGroupSection as a single child

function InlineGroup(_ref) {
	var aphroditeStyles = _ref.aphroditeStyles;
	var block = _ref.block;
	var children = _ref.children;
	var className = _ref.className;
	var Component = _ref.component;
	var contiguous = _ref.contiguous;

	var props = _objectWithoutProperties(_ref, ['aphroditeStyles', 'block', 'children', 'className', 'component', 'contiguous']);

	// prepare group className
	props.className = (0, _glamor.css)(classes.group, !!block && classes.block, aphroditeStyles);
	if (className) {
		props.className += ' ' + className;
	}

	// convert children to an array and filter out falsey values
	var buttons = _react.Children.toArray(children).filter(function (i) {
		return i;
	});

	// normalize the count
	var count = buttons.length - 1;

	// clone children and apply classNames that aphrodite can target
	props.children = buttons.map(function (c, idx) {
		if (!c) return null;

		var isOnlyChild = !count;
		var isFirstChild = !isOnlyChild && idx === 0;
		var isLastChild = !isOnlyChild && idx === count;
		var isMiddleChild = !isOnlyChild && !isFirstChild && !isLastChild;

		var position = void 0;
		if (isOnlyChild) position = 'only';
		if (isFirstChild) position = 'first';
		if (isLastChild) position = 'last';
		if (isMiddleChild) position = 'middle';

		return (0, _react.cloneElement)(c, {
			contiguous: contiguous,
			position: position
		});
	});

	return _react2.default.createElement(Component, props);
};

InlineGroup.propTypes = {
	aphroditeStyles: _react.PropTypes.shape({
		_definition: _react.PropTypes.object,
		_name: _react.PropTypes.string
	}),
	block: _react.PropTypes.bool,
	component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]),
	contiguous: _react.PropTypes.bool
};
InlineGroup.defaultProps = {
	component: 'div'
};

var classes = {
	group: {
		display: 'inline-flex'
	},
	block: {
		display: 'flex'
	}
};

module.exports = InlineGroup;

},{"glamor":undefined,"react":undefined}],40:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _glamor = require('glamor');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// NOTE: Inline Group Section accepts a single child

function InlineGroupSection(_ref) {
	var active = _ref.active;
	var aphroditeStyles = _ref.aphroditeStyles;
	var children = _ref.children;
	var className = _ref.className;
	var contiguous = _ref.contiguous;
	var grow = _ref.grow;
	var position = _ref.position;

	var props = _objectWithoutProperties(_ref, ['active', 'aphroditeStyles', 'children', 'className', 'contiguous', 'grow', 'position']);

	// evaluate position
	var separate = position === 'last' || position === 'middle';

	// A `contiguous` section must manipulate it's child directly
	// A separate (default) section just wraps the child
	return contiguous ? (0, _react.cloneElement)(children, _extends({
		aphroditeStyles: [_styles2.default.contiguous, _styles2.default['contiguous__' + position], active ? _styles2.default.active : null, grow ? _styles2.default.grow : null, aphroditeStyles]
	}, props)) : _react2.default.createElement(
		'div',
		_extends({ className: (0, _glamor.css)(!!grow && _styles2.default.grow, !!separate && _styles2.default.separate, aphroditeStyles) }, props),
		children
	);
};

InlineGroupSection.propTypes = {
	active: _react.PropTypes.bool, // buttons only
	children: _react.PropTypes.element.isRequired,
	contiguous: _react.PropTypes.bool,
	grow: _react.PropTypes.bool,
	position: _react.PropTypes.oneOf(['first', 'last', 'middle', 'only'])
};

module.exports = InlineGroupSection;

},{"./styles":41,"glamor":undefined,"react":undefined}],41:[function(require,module,exports){
'use strict';

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	// pull active elements up
	active: {
		position: 'relative'
	},

	// stretch to fill available width
	grow: {
		flex: '1 1 0'
	},

	// separate applicable non-contiguous elements
	separate: {
		paddingLeft: '0.75em'
	},

	// Contiguous: manipulate children directly

	// pull focused contiguous elements up
	contiguous: {
		':focus': {
			position: 'relative',
			zIndex: 1
		}
	},

	// position
	contiguous__middle: {
		borderRadius: 0,
		marginLeft: _theme2.default.button.borderWidth * -1
	},
	contiguous__first: {
		borderBottomRightRadius: '0 !important',
		borderTopRightRadius: '0 !important'
	},
	contiguous__last: {
		borderBottomLeftRadius: '0 !important',
		borderTopLeftRadius: '0 !important',
		marginLeft: _theme2.default.button.borderWidth * -1
	}
}; // ==============================
// Inline Group: Section
// ==============================

// Takes only FormInput and Button as children, rendering them as a
// tidy inline array

},{"../../../theme":73}],42:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _glamor = require('glamor');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function LabelledControl(_ref) {
	var className = _ref.className;
	var inline = _ref.inline;
	var label = _ref.label;
	var title = _ref.title;

	var props = _objectWithoutProperties(_ref, ['className', 'inline', 'label', 'title']);

	var labelClassName = (0, _glamor.css)(_styles2.default.wrapper, inline && _styles2.default.wrapper__inline, className);

	return _react2.default.createElement(
		'label',
		{ title: title, className: labelClassName },
		_react2.default.createElement('input', _extends({}, props, { className: (0, _glamor.css)(_styles2.default.control) })),
		_react2.default.createElement(
			'span',
			{ className: (0, _glamor.css)(_styles2.default.label) },
			label
		)
	);
};

LabelledControl.propTypes = {
	inline: _react.PropTypes.bool,
	title: _react.PropTypes.string,
	type: _react.PropTypes.oneOf(['checkbox', 'radio']).isRequired
};

module.exports = LabelledControl;

},{"./styles":43,"glamor":undefined,"react":undefined}],43:[function(require,module,exports){
'use strict';

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	wrapper: {
		display: 'block',
		height: _theme2.default.input.height,
		lineHeight: _theme2.default.input.lineHeight
	},
	wrapper__inline: {
		display: 'inline'
	},

	// checkbox or radio
	control: {
		marginRight: '0.5em'
	}
}; // ==============================
// Alert
// ==============================

/* eslint quote-props: ["error", "as-needed"] */

},{"../../../theme":73}],44:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _glamor = require('glamor');

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Spinner = require('../Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function LoadingButton(_ref) {
	var children = _ref.children;
	var loading = _ref.loading;

	var props = _objectWithoutProperties(_ref, ['children', 'loading']);

	// determine the correct variant for the spinner,
	// fill is the default variant on Button
	var variant = props.variant || 'fill';

	// determine the correct color for the spinner,
	// cancel and delete alias to "danger"
	var color = void 0;
	if (props.color === 'cancel' || props.color === 'delete') color = 'danger';

	// merge all the variant/color together
	var formattedColor = variant === 'fill' && props.color !== 'default' ? 'inverted' : color;

	// render the spinner if required
	var spinner = loading && _react2.default.createElement(_Spinner2.default, {
		size: 'small',
		color: formattedColor
	});

	// slide the spinner in and out of view
	var spinnerStyles = {
		width: loading ? _theme2.default.spinner.size.small * 5 + _theme2.default.spacing.small : 0
	};

	// render all that shit
	return _react2.default.createElement(
		_Button2.default,
		props,
		_react2.default.createElement(
			'span',
			{ className: (0, _glamor.css)(classes.spinner), style: spinnerStyles },
			spinner
		),
		children
	);
};

LoadingButton.propTypes = {
	loading: _react.PropTypes.bool
};
LoadingButton.defaultProps = {
	loading: false
};

var classes = {
	spinner: {
		display: 'inline-block',
		overflow: 'hidden',
		textAlign: 'left',
		transition: 'width 200ms ease-out',
		verticalAlign: 'middle'
	}
};

module.exports = LoadingButton;

},{"../../../theme":73,"../Button":5,"../Spinner":61,"glamor":undefined,"react":undefined}],45:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _glamor = require('glamor');

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function ModalBody(_ref) {
	var className = _ref.className;

	var props = _objectWithoutProperties(_ref, ['className']);

	return _react2.default.createElement('div', _extends({
		className: (0, _glamor.css)(classes.body, className)
	}, props));
};

var classes = {
	body: {
		paddingBottom: _theme2.default.modal.padding.body.vertical,
		paddingLeft: _theme2.default.modal.padding.body.horizontal,
		paddingRight: _theme2.default.modal.padding.body.horizontal,
		paddingTop: _theme2.default.modal.padding.body.vertical
	}
};

module.exports = ModalBody;

},{"../../../theme":73,"glamor":undefined,"react":undefined}],46:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _glamor = require('glamor');

var _ScrollLock = require('../ScrollLock');

var _ScrollLock2 = _interopRequireDefault(_ScrollLock);

var _Portal = require('../Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var canUseDom = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var ModalDialog = function (_Component) {
	_inherits(ModalDialog, _Component);

	function ModalDialog() {
		_classCallCheck(this, ModalDialog);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ModalDialog).call(this));

		_this.handleBackdropClick = _this.handleBackdropClick.bind(_this);
		_this.handleKeyboardInput = _this.handleKeyboardInput.bind(_this);
		return _this;
	}

	_createClass(ModalDialog, [{
		key: 'getChildContext',
		value: function getChildContext() {
			return {
				onClose: this.props.onClose
			};
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (!canUseDom) return;

			// add event listeners
			if (nextProps.isOpen && nextProps.enableKeyboardInput) {
				window.addEventListener('keydown', this.handleKeyboardInput);
			}
			if (!nextProps.isOpen && nextProps.enableKeyboardInput) {
				window.removeEventListener('keydown', this.handleKeyboardInput);
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			if (this.props.enableKeyboardInput) {
				window.removeEventListener('keydown', this.handleKeyboardInput);
			}
		}

		// ==============================
		// Methods
		// ==============================

	}, {
		key: 'handleKeyboardInput',
		value: function handleKeyboardInput(event) {
			if (event.keyCode === 27) this.props.onClose();

			return false;
		}
	}, {
		key: 'handleBackdropClick',
		value: function handleBackdropClick(e) {
			if (e.target !== this.refs.container) return;

			this.props.onClose();
		}

		// ==============================
		// Renderers
		// ==============================

	}, {
		key: 'renderDialog',
		value: function renderDialog() {
			var _props = this.props;
			var backdropClosesModal = _props.backdropClosesModal;
			var children = _props.children;
			var isOpen = _props.isOpen;
			var width = _props.width;


			if (!isOpen) return _react2.default.createElement('span', { key: 'closed' });

			return _react2.default.createElement(
				'div',
				{
					className: (0, _glamor.css)(classes.container),
					key: 'open',
					ref: 'container',
					onClick: !!backdropClosesModal && this.handleBackdropClick,
					onTouchEnd: !!backdropClosesModal && this.handleBackdropClick
				},
				_react2.default.createElement(
					'div',
					{ className: (0, _glamor.css)(classes.dialog), style: { width: width }, 'data-screen-id': 'modal-dialog' },
					children
				),
				_react2.default.createElement(_ScrollLock2.default, null)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_Portal2.default,
				null,
				this.renderDialog()
			);
		}
	}]);

	return ModalDialog;
}(_react.Component);

;

ModalDialog.propTypes = {
	backdropClosesModal: _react.PropTypes.bool,
	enableKeyboardInput: _react.PropTypes.bool,
	isOpen: _react.PropTypes.bool,
	onClose: _react.PropTypes.func.isRequired,
	width: _react.PropTypes.number
};
ModalDialog.defaultProps = {
	enableKeyboardInput: true,
	width: 768
};
ModalDialog.childContextTypes = {
	onClose: _react.PropTypes.func.isRequired
};

var classes = {
	container: {
		alignItems: 'center',
		backgroundColor: _theme2.default.modal.background,
		boxSizing: 'border-box',
		display: 'flex',
		height: '100%',
		justifyContent: 'center',
		left: 0,
		position: 'fixed',
		top: 0,
		width: '100%',
		zIndex: _theme2.default.modal.zIndex
	},
	dialog: {
		backgroundColor: 'white',
		borderRadius: _theme2.default.borderRadius.default,
		paddingBottom: _theme2.default.modal.padding.dialog.vertical,
		paddingLeft: _theme2.default.modal.padding.dialog.horizontal,
		paddingRight: _theme2.default.modal.padding.dialog.horizontal,
		paddingTop: _theme2.default.modal.padding.dialog.vertical,
		position: 'relative'
	}
};

exports.default = ModalDialog;

},{"../../../theme":73,"../Portal":53,"../ScrollLock":56,"glamor":undefined,"react":undefined}],47:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _glamor = require('glamor');

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function ModalFooter(_ref) {
	var align = _ref.align;
	var className = _ref.className;

	var props = _objectWithoutProperties(_ref, ['align', 'className']);

	return _react2.default.createElement('div', _extends({}, props, { className: (0, _glamor.css)(classes.footer, classes['align__' + align], className) }));
};

ModalFooter.propTypes = {
	align: _react.PropTypes.oneOf(['center', 'left', 'right']),
	children: _react.PropTypes.node,
	onClose: _react.PropTypes.func,
	showCloseButton: _react.PropTypes.bool,
	text: _react.PropTypes.string
};
ModalFooter.defaultProps = {
	align: 'left'
};

var classes = {
	footer: {
		borderTop: '2px solid ' + _theme2.default.color.gray10,
		display: 'flex',
		paddingBottom: _theme2.default.modal.padding.footer.vertical,
		paddingLeft: _theme2.default.modal.padding.footer.horizontal,
		paddingRight: _theme2.default.modal.padding.footer.horizontal,
		paddingTop: _theme2.default.modal.padding.footer.vertical
	},

	// alignment
	align__left: {
		justifyContent: 'flex-start'
	},
	align__center: {
		justifyContent: 'center'
	},
	align__right: {
		justifyContent: 'flex-end'
	}
};

module.exports = ModalFooter;

},{"../../../theme":73,"glamor":undefined,"react":undefined}],48:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _glamor = require('glamor');

var _GlyphButton = require('../GlyphButton');

var _GlyphButton2 = _interopRequireDefault(_GlyphButton);

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function ModalHeader(_ref, _ref2) {
	var onClose = _ref2.onClose;
	var children = _ref.children;
	var className = _ref.className;
	var showCloseButton = _ref.showCloseButton;
	var text = _ref.text;

	var props = _objectWithoutProperties(_ref, ['children', 'className', 'showCloseButton', 'text']);

	// Property Violation
	if (children && text) {
		console.error('Warning: ModalHeader cannot render `children` and `text`. You must provide one or the other.');
	}

	return _react2.default.createElement(
		'div',
		_extends({}, props, { className: (0, _glamor.css)(classes.header, className) }),
		_react2.default.createElement(
			'div',
			{ className: (0, _glamor.css)(classes.grow) },
			text ? _react2.default.createElement(
				'h4',
				{ className: (0, _glamor.css)(classes.text) },
				text
			) : children
		),
		!!onClose && showCloseButton && _react2.default.createElement(_GlyphButton2.default, {
			aphroditeStyles: classes.close,
			color: 'cancel',
			glyph: 'x',
			onClick: onClose,
			variant: 'link'
		})
	);
};

ModalHeader.propTypes = {
	children: _react.PropTypes.node,
	onClose: _react.PropTypes.func,
	showCloseButton: _react.PropTypes.bool,
	text: _react.PropTypes.string
};
ModalHeader.contextTypes = {
	onClose: _react.PropTypes.func.isRequired
};

var classes = {
	header: {
		alignItems: 'center',
		borderBottom: '2px solid ' + _theme2.default.color.gray10,
		display: 'flex',
		paddingBottom: _theme2.default.modal.padding.header.vertical,
		paddingLeft: _theme2.default.modal.padding.header.horizontal,
		paddingRight: _theme2.default.modal.padding.header.horizontal,
		paddingTop: _theme2.default.modal.padding.header.vertical
	},

	// fill space to push the close button right
	grow: {
		flexGrow: 1
	},

	// title text
	text: {
		color: 'inherit',
		fontSize: 18,
		fontWeight: 500,
		lineHeight: 1,
		margin: 0
	}
};

module.exports = ModalHeader;

},{"../../../theme":73,"../GlyphButton":34,"glamor":undefined,"react":undefined}],49:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Header = exports.Footer = exports.Dialog = exports.Body = undefined;

var _body = require('./body');

var _body2 = _interopRequireDefault(_body);

var _dialog = require('./dialog');

var _dialog2 = _interopRequireDefault(_dialog);

var _footer = require('./footer');

var _footer2 = _interopRequireDefault(_footer);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Body = _body2.default;
exports.Dialog = _dialog2.default;
exports.Footer = _footer2.default;
exports.Header = _header2.default;

},{"./body":45,"./dialog":46,"./footer":47,"./header":48}],50:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _glamor = require('glamor');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _page = require('./page');

var _page2 = _interopRequireDefault(_page);

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pagination = function (_Component) {
	_inherits(Pagination, _Component);

	function Pagination() {
		_classCallCheck(this, Pagination);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Pagination).apply(this, arguments));
	}

	_createClass(Pagination, [{
		key: 'renderCount',
		value: function renderCount() {
			var count = '';
			var _props = this.props;
			var currentPage = _props.currentPage;
			var pageSize = _props.pageSize;
			var plural = _props.plural;
			var singular = _props.singular;
			var total = _props.total;

			if (!total) {
				count = 'No ' + (plural || 'records');
			} else if (total > pageSize) {
				var start = pageSize * (currentPage - 1) + 1;
				var end = Math.min(start + pageSize - 1, total);
				count = 'Showing ' + start + ' to ' + end + ' of ' + total;
			} else {
				count = 'Showing ' + total;
				if (total > 1 && plural) {
					count += ' ' + plural;
				} else if (total === 1 && singular) {
					count += ' ' + singular;
				}
			}
			return _react2.default.createElement(
				'div',
				{ className: (0, _glamor.css)(classes.count), 'data-e2e-pagination-count': true },
				count
			);
		}
	}, {
		key: 'renderPages',
		value: function renderPages() {
			var _props2 = this.props;
			var currentPage = _props2.currentPage;
			var limit = _props2.limit;
			var onPageSelect = _props2.onPageSelect;
			var pageSize = _props2.pageSize;
			var total = _props2.total;


			if (total <= pageSize) return null;

			var pages = [];
			var totalPages = Math.ceil(total / pageSize);
			var minPage = 1;
			var maxPage = totalPages;

			if (limit && limit < totalPages) {
				var rightLimit = Math.floor(limit / 2);
				var leftLimit = rightLimit + limit % 2 - 1;
				minPage = currentPage - leftLimit;
				maxPage = currentPage + rightLimit;

				if (minPage < 1) {
					maxPage = limit;
					minPage = 1;
				}
				if (maxPage > totalPages) {
					minPage = totalPages - limit + 1;
					maxPage = totalPages;
				}
			}
			if (minPage > 1) {
				pages.push(_react2.default.createElement(
					_page2.default,
					{ key: 'page_start', onClick: function onClick() {
							return onPageSelect(1);
						} },
					'...'
				));
			}

			var _loop = function _loop(page) {
				var selected = page === currentPage;
				/* eslint-disable no-loop-func */
				pages.push(_react2.default.createElement(
					_page2.default,
					{ key: 'page_' + page, selected: selected, onClick: function onClick() {
							return onPageSelect(page);
						} },
					page
				));
				/* eslint-enable */
			};

			for (var page = minPage; page <= maxPage; page++) {
				_loop(page);
			}
			if (maxPage < totalPages) {
				pages.push(_react2.default.createElement(
					_page2.default,
					{ key: 'page_end', onClick: function onClick() {
							return onPageSelect(totalPages);
						} },
					'...'
				));
			}
			return _react2.default.createElement(
				'div',
				{ className: (0, _glamor.css)(classes.list) },
				pages
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var className = (0, _glamor.css)(classes.container, this.props.className);
			return _react2.default.createElement(
				'div',
				{ className: className, style: this.props.style },
				this.renderCount(),
				this.renderPages()
			);
		}
	}]);

	return Pagination;
}(_react.Component);

;

var classes = {
	container: {
		display: 'block',
		lineHeight: _theme2.default.component.lineHeight,
		marginBottom: '2em'
	},
	count: {
		display: 'inline-block',
		marginRight: '1em',
		verticalAlign: 'middle'
	},
	list: {
		display: 'inline-block',
		verticalAlign: 'middle'
	}
};

Pagination.propTypes = {
	className: _react.PropTypes.string,
	currentPage: _react.PropTypes.number.isRequired,
	limit: _react.PropTypes.number,
	onPageSelect: _react.PropTypes.func,
	pageSize: _react.PropTypes.number.isRequired,
	plural: _react.PropTypes.string,
	singular: _react.PropTypes.string,
	style: _react.PropTypes.object,
	total: _react.PropTypes.number.isRequired
};

module.exports = Pagination;

},{"../../../theme":73,"./page":51,"glamor":undefined,"react":undefined}],51:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _glamor = require('glamor');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Page(_ref) {
	var disabled = _ref.disabled;
	var selected = _ref.selected;

	var props = _objectWithoutProperties(_ref, ['disabled', 'selected']);

	props.className = (0, _glamor.css)(classes.page, !!disabled && classes.disabled, !!selected && classes.selected);
	return _react2.default.createElement('button', props);
};

Page.propTypes = {
	disabled: _react.PropTypes.bool,
	onClick: _react.PropTypes.func.isRequired,
	selected: _react.PropTypes.bool
};

/* eslint quote-props: ["error", "as-needed"] */

var selectedStyle = {
	backgroundColor: _theme2.default.pagination.selected.background,
	borderColor: _theme2.default.pagination.selected.border,
	color: _theme2.default.pagination.selected.color,
	cursor: 'default',
	zIndex: 2
};
var pseudoStyle = {
	backgroundColor: _theme2.default.pagination.hover.background,
	borderColor: _theme2.default.pagination.hover.border,
	color: _theme2.default.pagination.hover.color,
	outline: 'none'
};

var classes = {
	page: {
		appearance: 'none',
		background: 'none',
		border: '1px solid transparent',
		borderRadius: _theme2.default.borderRadius.default,
		color: _theme2.default.pagination.color,
		cursor: 'pointer',
		display: 'inline-block',
		float: 'left', // Collapse white-space
		marginRight: '0.25em',
		padding: '0 .7em',
		position: 'relative',
		textDecoration: 'none',

		// handle hover and focus
		':hover': pseudoStyle,
		':focus': pseudoStyle
	},

	// selected page
	selected: _extends({}, selectedStyle, {

		':hover': selectedStyle,
		':focus': selectedStyle
	}),

	// disabled page

	disabled: {
		backgroundColor: _theme2.default.pagination.disabled.background,
		borderColor: _theme2.default.pagination.disabled.background,
		color: _theme2.default.pagination.disabled.color,
		cursor: 'default'
	}
};

exports.default = Page;

},{"../../../theme":73,"glamor":undefined,"react":undefined}],52:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Pass the Lightbox context through to the Portal's descendents
// StackOverflow discussion http://goo.gl/oclrJ9

var PassContext = function (_Component) {
	_inherits(PassContext, _Component);

	function PassContext() {
		_classCallCheck(this, PassContext);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(PassContext).apply(this, arguments));
	}

	_createClass(PassContext, [{
		key: 'getChildContext',
		value: function getChildContext() {
			return this.props.context;
		}
	}, {
		key: 'render',
		value: function render() {
			return _react.Children.only(this.props.children);
		}
	}]);

	return PassContext;
}(_react.Component);

;

PassContext.propTypes = {
	context: _react.PropTypes.object.isRequired
};
PassContext.childContextTypes = {
	onClose: _react.PropTypes.func
};

exports.default = PassContext;

},{"react":undefined}],53:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _reactDom = require('react-dom');

var _PassContext = require('../PassContext');

var _PassContext2 = _interopRequireDefault(_PassContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Portal = function (_Component) {
	_inherits(Portal, _Component);

	function Portal() {
		_classCallCheck(this, Portal);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Portal).call(this));

		_this.portalElement = null;
		return _this;
	}

	_createClass(Portal, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var p = document.createElement('div');
			document.body.appendChild(p);
			this.portalElement = p;
			this.componentDidUpdate();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			// Animate fade on mount/unmount
			var duration = 200;
			var styles = '\n\t\t\t\t.fade-enter { opacity: 0.01; }\n\t\t\t\t.fade-enter.fade-enter-active { opacity: 1; transition: opacity ' + duration + 'ms; }\n\t\t\t\t.fade-leave { opacity: 1; }\n\t\t\t\t.fade-leave.fade-leave-active { opacity: 0.01; transition: opacity ' + duration + 'ms; }\n\t\t';
			(0, _reactDom.render)(_react2.default.createElement(
				_PassContext2.default,
				{ context: this.context },
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'style',
						null,
						styles
					),
					_react2.default.createElement(_reactAddonsCssTransitionGroup2.default, _extends({
						component: 'div',
						transitionName: 'fade',
						transitionEnterTimeout: duration,
						transitionLeaveTimeout: duration
					}, this.props))
				)
			), this.portalElement);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			document.body.removeChild(this.portalElement);
		}
	}, {
		key: 'render',
		value: function render() {
			return null;
		}
	}]);

	return Portal;
}(_react.Component);

exports.default = Portal;


Portal.contextTypes = {
	onClose: _react.PropTypes.func
};

},{"../PassContext":52,"react":undefined,"react-addons-css-transition-group":undefined,"react-dom":undefined}],54:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Using window.innerWidth and state instead of CSS media breakpoints
// because we want to render null rather than an empty span. Allowing for
// CSS pseudo classes like :only-child to behave as expected.

// Return true if window + document
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var ResponsiveText = function (_Component) {
	_inherits(ResponsiveText, _Component);

	function ResponsiveText() {
		_classCallCheck(this, ResponsiveText);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ResponsiveText).call(this));

		_this.handleResize = _this.handleResize.bind(_this);
		_this.state = {
			windowWidth: canUseDOM ? window.innerWidth : 0
		};
		return _this;
	}

	_createClass(ResponsiveText, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (canUseDOM) {
				window.addEventListener('resize', this.handleResize);
				this.handleResize();
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			if (canUseDOM) {
				window.removeEventListener('resize', this.handleResize);
			}
		}
	}, {
		key: 'handleResize',
		value: function handleResize() {
			this.setState({
				windowWidth: canUseDOM ? window.innerWidth : 0
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props;
			var Component = _props.component;
			var hiddenLG = _props.hiddenLG;
			var hiddenMD = _props.hiddenMD;
			var hiddenSM = _props.hiddenSM;
			var hiddenXS = _props.hiddenXS;
			var visibleLG = _props.visibleLG;
			var visibleMD = _props.visibleMD;
			var visibleSM = _props.visibleSM;
			var visibleXS = _props.visibleXS;

			var props = _objectWithoutProperties(_props, ['component', 'hiddenLG', 'hiddenMD', 'hiddenSM', 'hiddenXS', 'visibleLG', 'visibleMD', 'visibleSM', 'visibleXS']);

			var windowWidth = this.state.windowWidth;


			var text = void 0;

			// set text value from breakpoint; attempt XS --> LG
			if (windowWidth < _theme2.default.breakpointNumeric.mobile) {
				text = visibleXS || hiddenSM || hiddenMD || hiddenLG;
			} else if (windowWidth < _theme2.default.breakpointNumeric.tabletPortrait) {
				text = hiddenXS || visibleSM || hiddenMD || hiddenLG;
			} else if (windowWidth < _theme2.default.breakpointNumeric.tabletLandscape) {
				text = hiddenXS || hiddenSM || visibleMD || hiddenLG;
			} else {
				text = hiddenXS || hiddenSM || hiddenMD || visibleLG;
			}

			return text ? _react2.default.createElement(
				Component,
				props,
				text
			) : null;
		}
	}]);

	return ResponsiveText;
}(_react.Component);

;

ResponsiveText.propTypes = {
	hiddenLG: _react.PropTypes.string,
	hiddenMD: _react.PropTypes.string,
	hiddenSM: _react.PropTypes.string,
	hiddenXS: _react.PropTypes.string,
	visibleLG: _react.PropTypes.string,
	visibleMD: _react.PropTypes.string,
	visibleSM: _react.PropTypes.string,
	visibleXS: _react.PropTypes.string
};
ResponsiveText.defaultProps = {
	component: 'span'
};

module.exports = ResponsiveText;

},{"../../../theme":73,"react":undefined}],55:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _glamor = require('glamor');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function ScreenReaderOnly(_ref) {
	var className = _ref.className;

	var props = _objectWithoutProperties(_ref, ['className']);

	props.className = (0, _glamor.css)(classes.srOnly, className);

	return _react2.default.createElement('span', props);
};

var classes = {
	srOnly: {
		border: 0,
		clip: 'rect(0,0,0,0)',
		height: 1,
		margin: -1,
		overflow: 'hidden',
		padding: 0,
		position: 'absolute',
		width: 1
	}
};

module.exports = ScreenReaderOnly;

},{"glamor":undefined,"react":undefined}],56:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollLock = function (_Component) {
	_inherits(ScrollLock, _Component);

	function ScrollLock() {
		_classCallCheck(this, ScrollLock);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ScrollLock).call(this));

		_this.lockCount = 0;
		return _this;
	}

	_createClass(ScrollLock, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			if (typeof window === 'undefined') return;

			this.lockCount++;
			if (this.lockCount > 1) return;

			//	FIXME iOS ignores overflow on body
			try {
				var scrollBarWidth = window.innerWidth - document.body.clientWidth;

				var target = document.body;

				target.style.paddingRight = scrollBarWidth + 'px';
				target.style.overflowY = 'hidden';
			} catch (err) {
				console.error('Failed to find body element. Err:', err);
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			if (typeof window === 'undefined' || this.lockCount === 0) return;

			this.lockCount--;
			if (this.lockCount > 0) return; // Still locked

			//	FIXME iOS ignores overflow on body
			try {
				var target = document.body;

				target.style.paddingRight = '';
				target.style.overflowY = '';
			} catch (err) {
				console.error('Failed to find body element. Err:', err);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return null;
		}
	}]);

	return ScrollLock;
}(_react.Component);

exports.default = ScrollLock;

},{"react":undefined}],57:[function(require,module,exports){
'use strict';

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	danger: _theme2.default.color.danger,
	default: _theme2.default.color.gray80,
	error: _theme2.default.color.danger,
	info: _theme2.default.color.info,
	primary: _theme2.default.color.primary,
	success: _theme2.default.color.success,
	warning: _theme2.default.color.warning
};

},{"../../../theme":73}],58:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _glamor = require('glamor');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function SegmentedControl(_ref) {
	var className = _ref.className;
	var color = _ref.color;
	var cropText = _ref.cropText;
	var equalWidthSegments = _ref.equalWidthSegments;
	var inline = _ref.inline;
	var onChange = _ref.onChange;
	var options = _ref.options;
	var value = _ref.value;

	var props = _objectWithoutProperties(_ref, ['className', 'color', 'cropText', 'equalWidthSegments', 'inline', 'onChange', 'options', 'value']);

	props.className = (0, _glamor.css)(_styles2.default.control, inline ? _styles2.default.control__inline : null, className);

	return _react2.default.createElement(
		'div',
		props,
		options.map(function (opt) {
			var buttonClassName = (0, _glamor.css)(_styles2.default.button, opt.disabled ? _styles2.default.button__disabled : null, opt.value === value ? _styles2.default['button__' + color] : null, cropText ? _styles2.default.button__cropText : null, equalWidthSegments ? _styles2.default.button__equalWidth : null);

			return _react2.default.createElement(
				'button',
				{
					className: buttonClassName,
					key: opt.value,
					onClick: !opt.disabled && function () {
						return onChange(opt.value);
					},
					type: 'button',
					title: cropText ? opt.label : null,
					tabIndex: opt.disabled ? '-1' : ''
				},
				opt.label
			);
		})
	);
};

var valuePropShape = [_react.PropTypes.bool, _react.PropTypes.number, _react.PropTypes.string];

SegmentedControl.propTypes = {
	color: _react.PropTypes.oneOf(Object.keys(_colors2.default)),
	cropText: _react.PropTypes.bool, // when `inline && equalWidthSegments` crops to the next largest option length
	equalWidthSegments: _react.PropTypes.bool, // only relevant when `inline === false`
	inline: _react.PropTypes.bool,
	onChange: _react.PropTypes.func.isRequired,
	options: _react.PropTypes.arrayOf(_react.PropTypes.shape({
		disabled: _react.PropTypes.bool,
		label: _react.PropTypes.string,
		value: _react.PropTypes.oneOfType(valuePropShape)
	})).isRequired,
	value: _react.PropTypes.oneOfType(valuePropShape)
};
SegmentedControl.defaultProps = {
	color: 'default'
};

module.exports = SegmentedControl;

},{"./colors":57,"./styles":59,"glamor":undefined,"react":undefined}],59:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // ==============================
// Segmented Control
// ==============================

/* eslint quote-props: ["error", "as-needed"] */

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Prepare variants
var colorVariants = {};
Object.keys(_colors2.default).forEach(function (color) {
	var pseudoStyles = {
		backgroundColor: _colors2.default[color],
		color: 'white'
	};
	colorVariants['button__' + color] = {
		backgroundColor: _colors2.default[color],
		color: 'white',

		':hover': pseudoStyles,
		':focus': pseudoStyles,
		':active': pseudoStyles
	};
});

module.exports = _extends({
	control: {
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: _theme2.default.input.border.color.default,
		borderRadius: '0.4em',
		display: 'flex',
		fontSize: _theme2.default.font.size.small,
		paddingLeft: 1,
		paddingRight: 1
	},
	control__inline: {
		display: 'inline-flex'
	},

	// buttons
	button: {
		background: 'none',
		border: 0,
		borderRadius: '0.25em',
		flexGrow: 1,
		margin: '2px 1px',
		padding: '0.3em 0.9em',
		outline: 0,

		':hover': { backgroundColor: 'rgba(0, 0, 0, 0.05)' },
		':focus': { backgroundColor: 'rgba(0, 0, 0, 0.05)' },
		':active': { backgroundColor: 'rgba(0, 0, 0, 0.1)' }
	},
	button__equalWidth: {
		flex: '1 1 0'
	},
	button__cropText: {
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap'
	},
	button__disabled: {
		opacity: 0.6,
		pointerEvents: 'none'
	}

}, colorVariants);

},{"../../../theme":73,"./colors":57}],60:[function(require,module,exports){
'use strict';

module.exports = ['danger', 'default', 'inverted', 'primary', 'success', 'warning'];

},{}],61:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _glamor = require('glamor');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _ScreenReaderOnly = require('../ScreenReaderOnly');

var _ScreenReaderOnly2 = _interopRequireDefault(_ScreenReaderOnly);

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

var _sizes = require('./sizes');

var _sizes2 = _interopRequireDefault(_sizes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Spinner(_ref) {
	var className = _ref.className;
	var size = _ref.size;
	var color = _ref.color;

	var props = _objectWithoutProperties(_ref, ['className', 'size', 'color']);

	props.className = (0, _glamor.css)(_styles2.default.base, _styles2.default[size], className);

	return _react2.default.createElement(
		'div',
		props,
		_react2.default.createElement('span', { className: '' + (0, _glamor.css)(_styles2.default.dot, _styles2.default['size__' + size], _styles2.default['color__' + color], _styles2.default.dot__first) }),
		_react2.default.createElement('span', { className: '' + (0, _glamor.css)(_styles2.default.dot, _styles2.default['size__' + size], _styles2.default['color__' + color], _styles2.default.dot__second) }),
		_react2.default.createElement('span', { className: '' + (0, _glamor.css)(_styles2.default.dot, _styles2.default['size__' + size], _styles2.default['color__' + color], _styles2.default.dot__third) }),
		_react2.default.createElement(
			_ScreenReaderOnly2.default,
			null,
			'Loading...'
		)
	);
};

Spinner.propTypes = {
	color: _react.PropTypes.oneOf(_colors2.default),
	size: _react.PropTypes.oneOf(_sizes2.default)
};
Spinner.defaultProps = {
	size: 'medium',
	color: 'default'
};

module.exports = Spinner;

},{"../ScreenReaderOnly":55,"./colors":60,"./sizes":62,"./styles":63,"glamor":undefined,"react":undefined}],62:[function(require,module,exports){
'use strict';

module.exports = ['small', 'medium', 'large'];

},{}],63:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // ==============================
// Spinner
// ==============================

var _glamor = require('glamor');

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

var _sizes = require('./sizes');

var _sizes2 = _interopRequireDefault(_sizes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Prepare variants
var colorVariants = {};
_colors2.default.forEach(function (color) {
	colorVariants['color__' + color] = {
		backgroundColor: _theme2.default.spinner.color[color]
	};
});

// Prepare sizes
var sizeVariants = {};
_sizes2.default.forEach(function (size) {
	sizeVariants['size__' + size] = {
		fontSize: _theme2.default.spinner.size[size]
	};
});

// Declare animation keyframes

var keyframes = _glamor.compose.keyframes('pulse', {
	'0%, 80%, 100%': { opacity: 0 },
	'40%': { opacity: 1 }
});

module.exports = _extends({
	base: {
		display: 'inline-block',
		lineHeight: 1,
		textAlign: 'center',
		verticalAlign: 'middle',
		width: '5em'
	},
	small: { fontSize: 4 },
	medium: { fontSize: 8 },
	large: { fontSize: 16 },

	// text
	text: {
		border: 0,
		clip: 'rect(0,0,0,0)',
		height: 1,
		margin: -1,
		overflow: 'hidden',
		padding: 0,
		position: 'absolute',
		width: 1
	},

	// dots
	dot: {
		animationName: keyframes,
		animationDuration: '1s',
		animationIterationCount: 'infinite',
		borderRadius: '1em',
		display: 'inline-block',
		height: '1em',
		verticalAlign: 'top',
		width: '1em'
	},
	dot__second: {
		animationDelay: '160ms',
		marginLeft: '1em'
	},
	dot__third: {
		animationDelay: '320ms',
		marginLeft: '1em'
	}

}, colorVariants, sizeVariants);

},{"../../../theme":73,"./colors":60,"./sizes":62,"glamor":undefined}],64:[function(require,module,exports){
'use strict';

module.exports = {
	Alert: require('./Alert'),
	BlankState: require('./BlankState'),
	Button: require('./Button'),
	Center: require('./Center'),
	Chip: require('./Chip'),
	Container: require('./Container'),
	DropdownButton: require('./DropdownButton'),
	Form: require('./Form'),
	FormField: require('./FormField'),
	FormInput: require('./FormInput'),
	FormLabel: require('./FormLabel'),
	FormNote: require('./FormNote'),
	FormSelect: require('./FormSelect'),
	Glyph: require('./Glyph'),
	GlyphButton: require('./GlyphButton'),
	GlyphField: require('./GlyphField'),
	Grid: require('./Grid'),
	InlineGroup: require('./InlineGroup'),
	InlineGroupSection: require('./InlineGroupSection'),
	LabelledControl: require('./LabelledControl'),
	LoadingButton: require('./LoadingButton'),
	Modal: require('./Modal'),
	Pagination: require('./Pagination'),
	ResponsiveText: require('./ResponsiveText'),
	ScreenReaderOnly: require('./ScreenReaderOnly'),
	SegmentedControl: require('./SegmentedControl'),
	Spinner: require('./Spinner')
};

},{"./Alert":2,"./BlankState":4,"./Button":5,"./Center":7,"./Chip":10,"./Container":12,"./DropdownButton":15,"./Form":16,"./FormField":18,"./FormInput":20,"./FormLabel":23,"./FormNote":25,"./FormSelect":27,"./Glyph":30,"./GlyphButton":34,"./GlyphField":35,"./Grid":36,"./InlineGroup":39,"./InlineGroupSection":40,"./LabelledControl":42,"./LoadingButton":44,"./Modal":49,"./Pagination":50,"./ResponsiveText":54,"./ScreenReaderOnly":55,"./SegmentedControl":58,"./Spinner":61}],65:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elemental = require('../elemental');

var _string = require('../../utils/string');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This renders alerts for API success and error responses.
 *   Error format: {
 *     error: 'validation errors' // The unique error type identifier
 *     detail: { ... } // Optional details specific to that error type
 *   }
 *   Success format: {
 *     success: 'item updated', // The unique success type identifier
 *     details: { ... } // Optional details specific to that success type
 *   }
 *   Eventually success and error responses should be handled individually
 *   based on their type. For example: validation errors should be displayed next
 *   to each invalid field and signin errors should promt the user to sign in.
 */
var AlertMessages = _react2.default.createClass({
	displayName: 'AlertMessages',
	propTypes: {
		alerts: _react2.default.PropTypes.shape({
			error: _react2.default.PropTypes.Object,
			success: _react2.default.PropTypes.Object
		})
	},
	getDefaultProps: function getDefaultProps() {
		return {
			alerts: {}
		};
	},
	renderValidationErrors: function renderValidationErrors() {
		var errors = this.props.alerts.error.detail;
		if (errors.name === 'ValidationError') {
			errors = errors.errors;
		}
		var errorCount = Object.keys(errors).length;
		var alertContent = void 0;
		var messages = Object.keys(errors).map(function (path) {
			if (errorCount > 1) {
				return _react2.default.createElement(
					'li',
					{ key: path },
					(0, _string.upcase)(errors[path].error || errors[path].message)
				);
			} else {
				return _react2.default.createElement(
					'div',
					{ key: path },
					(0, _string.upcase)(errors[path].error || errors[path].message)
				);
			}
		});

		if (errorCount > 1) {
			alertContent = _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'h4',
					null,
					'There were ',
					errorCount,
					' errors creating the new item:'
				),
				_react2.default.createElement(
					'ul',
					null,
					messages
				)
			);
		} else {
			alertContent = messages;
		}

		return _react2.default.createElement(
			_elemental.Alert,
			{ color: 'danger' },
			alertContent
		);
	},
	render: function render() {
		var _props$alerts = this.props.alerts;
		var error = _props$alerts.error;
		var success = _props$alerts.success;


		if (error) {
			// Render error alerts
			switch (error.error) {
				case 'validation errors':
					return this.renderValidationErrors();
				case 'error':
					if (error.detail.name === 'ValidationError') {
						return this.renderValidationErrors();
					} else {
						return _react2.default.createElement(
							_elemental.Alert,
							{ color: 'danger' },
							(0, _string.upcase)(error.error)
						);
					}
				default:
					return _react2.default.createElement(
						_elemental.Alert,
						{ color: 'danger' },
						(0, _string.upcase)(error.error)
					);
			}
		}

		if (success) {
			// Render success alerts
			return _react2.default.createElement(
				_elemental.Alert,
				{ color: 'success' },
				(0, _string.upcase)(success.success)
			);
		}

		return null; // No alerts, render nothing
	}
});

module.exports = AlertMessages;

},{"../../utils/string":79,"../elemental":64,"react":undefined}],66:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _vkey = require('vkey');

var _vkey2 = _interopRequireDefault(_vkey);

var _AlertMessages = require('./AlertMessages');

var _AlertMessages2 = _interopRequireDefault(_AlertMessages);

var _FieldTypes = require('FieldTypes');

var _InvalidFieldType = require('./InvalidFieldType');

var _InvalidFieldType2 = _interopRequireDefault(_InvalidFieldType);

var _elemental = require('../elemental');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CreateForm = _react2.default.createClass({
	displayName: 'CreateForm',
	propTypes: {
		err: _react2.default.PropTypes.object,
		isOpen: _react2.default.PropTypes.bool,
		list: _react2.default.PropTypes.object,
		onCancel: _react2.default.PropTypes.func,
		onCreate: _react2.default.PropTypes.func
	},
	getDefaultProps: function getDefaultProps() {
		return {
			err: null,
			isOpen: false
		};
	},
	getInitialState: function getInitialState() {
		var _this = this;

		// Set the field values to their default values when first rendering the
		// form. (If they have a default value, that is)
		var values = {};
		Object.keys(this.props.list.fields).forEach(function (key) {
			var field = _this.props.list.fields[key];
			var FieldComponent = _FieldTypes.Fields[field.type];
			values[field.path] = FieldComponent.getDefaultValue(field);
		});
		return {
			values: values,
			alerts: {}
		};
	},
	componentDidMount: function componentDidMount() {
		document.body.addEventListener('keyup', this.handleKeyPress, false);
	},
	componentWillUnmount: function componentWillUnmount() {
		document.body.removeEventListener('keyup', this.handleKeyPress, false);
	},
	handleKeyPress: function handleKeyPress(evt) {
		if (_vkey2.default[evt.keyCode] === '<escape>') {
			this.props.onCancel();
		}
	},

	// Handle input change events
	handleChange: function handleChange(event) {
		var values = (0, _objectAssign2.default)({}, this.state.values);
		values[event.path] = event.value;
		this.setState({
			values: values
		});
	},

	// Set the props of a field
	getFieldProps: function getFieldProps(field) {
		var props = (0, _objectAssign2.default)({}, field);
		props.value = this.state.values[field.path];
		props.values = this.state.values;
		props.onChange = this.handleChange;
		props.mode = 'create';
		props.key = field.path;
		return props;
	},

	// Create a new item when the form is submitted
	submitForm: function submitForm(event) {
		var _this2 = this;

		event.preventDefault();
		var createForm = event.target;
		var formData = new FormData(createForm);
		this.props.list.createItem(formData, function (err, data) {
			if (data) {
				if (_this2.props.onCreate) {
					_this2.props.onCreate(data);
				} else {
					// Clear form
					_this2.setState({
						values: {},
						alerts: {
							success: {
								success: 'Item created'
							}
						}
					});
				}
			} else {
				if (!err) {
					err = {
						error: 'connection error'
					};
				}
				// If we get a database error, show the database error message
				// instead of only saying "Database error"
				if (err.error === 'database error') {
					err.error = err.detail.errmsg;
				}
				_this2.setState({
					alerts: {
						error: err
					}
				});
			}
		});
	},

	// Render the form itself
	renderForm: function renderForm() {
		var _this3 = this;

		if (!this.props.isOpen) return;

		var form = [];
		var list = this.props.list;
		var nameField = this.props.list.nameField;
		var focusWasSet;

		// If the name field is an initial one, we need to render a proper
		// input for it
		if (list.nameIsInitial) {
			var nameFieldProps = this.getFieldProps(nameField);
			nameFieldProps.autoFocus = focusWasSet = true;
			if (nameField.type === 'text') {
				nameFieldProps.className = 'item-name-field';
				nameFieldProps.placeholder = nameField.label;
				nameFieldProps.label = '';
			}
			form.push(_react2.default.createElement(_FieldTypes.Fields[nameField.type], nameFieldProps));
		}

		// Render inputs for all initial fields
		Object.keys(list.initialFields).forEach(function (key) {
			var field = list.fields[list.initialFields[key]];
			// If there's something weird passed in as field type, render the
			// invalid field type component
			if (typeof _FieldTypes.Fields[field.type] !== 'function') {
				form.push(_react2.default.createElement(_InvalidFieldType2.default, { type: field.type, path: field.path, key: field.path }));
				return;
			}
			// Get the props for the input field
			var fieldProps = _this3.getFieldProps(field);
			// If there was no focusRef set previously, set the current field to
			// be the one to be focussed. Generally the first input field, if
			// there's an initial name field that takes precedence.
			if (!focusWasSet) {
				fieldProps.autoFocus = focusWasSet = true;
			}
			form.push(_react2.default.createElement(_FieldTypes.Fields[field.type], fieldProps));
		});

		return _react2.default.createElement(
			_elemental.Form,
			{ layout: 'horizontal', onSubmit: this.submitForm },
			_react2.default.createElement(_elemental.Modal.Header, {
				text: 'Create a new ' + list.singular,
				showCloseButton: true
			}),
			_react2.default.createElement(
				_elemental.Modal.Body,
				null,
				_react2.default.createElement(_AlertMessages2.default, { alerts: this.state.alerts }),
				form
			),
			_react2.default.createElement(
				_elemental.Modal.Footer,
				null,
				_react2.default.createElement(
					_elemental.Button,
					{ color: 'success', type: 'submit', 'data-button-type': 'submit' },
					'Create'
				),
				_react2.default.createElement(
					_elemental.Button,
					{
						variant: 'link',
						color: 'cancel',
						'data-button-type': 'cancel',
						onClick: this.props.onCancel
					},
					'Cancel'
				)
			)
		);
	},
	render: function render() {
		return _react2.default.createElement(
			_elemental.Modal.Dialog,
			{
				isOpen: this.props.isOpen,
				onClose: this.props.onCancel,
				backdropClosesModal: true
			},
			this.renderForm()
		);
	}
}); /**
     * The form that's visible when "Create <ItemName>" is clicked on either the
     * List screen or the Item screen
     */

module.exports = CreateForm;

},{"../elemental":64,"./AlertMessages":65,"./InvalidFieldType":67,"FieldTypes":"FieldTypes","object-assign":122,"react":undefined,"vkey":undefined}],67:[function(require,module,exports){
"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InvalidFieldType = function InvalidFieldType(props) {
	return _react2.default.createElement(
		"div",
		{ className: "alert alert-danger" },
		"Invalid field type ",
		_react2.default.createElement(
			"strong",
			null,
			props.type
		),
		" at path ",
		_react2.default.createElement(
			"strong",
			null,
			props.path
		)
	);
}; /**
    * Renders an "Invalid Field Type" error
    */

InvalidFieldType.propTypes = {
	path: _react2.default.PropTypes.string,
	type: _react2.default.PropTypes.string
};

module.exports = InvalidFieldType;

},{"react":undefined}],68:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _glamor = require('glamor');

var _theme = require('../../theme');

var _theme2 = _interopRequireDefault(_theme);

var _color = require('../../utils/color');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Kbd(_ref) {
	var className = _ref.className;

	var props = _objectWithoutProperties(_ref, ['className']);

	props.className = (0, _glamor.css)(classes.kbd);

	return _react2.default.createElement('kbd', props);
};

var classes = {
	kbd: {
		backgroundColor: _theme2.default.color.body,
		borderRadius: 3,
		border: '1px solid #ccc',
		borderBottomColor: (0, _color.darken)('#ccc', 4),
		borderTopColor: (0, _color.lighten)('#ccc', 4),
		boxShadow: '0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 0 0 rgba(255, 255, 255, 0.7) inset',
		display: 'inline-block',
		fontFamily: 'Consolas, "Liberation Mono", Courier, monospace',
		fontSize: '0.85em',
		fontWeight: 700,
		lineHeight: 'inherit',
		padding: '1px 4px',
		whiteSpace: 'nowrap',

		// little hack to tweak "visual-middle" alignment
		position: 'relative',
		top: -1
	}
};

module.exports = Kbd;

},{"../../theme":73,"../../utils/color":75,"glamor":undefined,"react":undefined}],69:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Render a popout list. Can also use PopoutListItem and PopoutListHeading
                                                                                                                                                                                                                                                                   */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _blacklist = require('blacklist');

var _blacklist2 = _interopRequireDefault(_blacklist);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PopoutList = _react2.default.createClass({
	displayName: 'PopoutList',
	propTypes: {
		children: _react2.default.PropTypes.node.isRequired,
		className: _react2.default.PropTypes.string
	},
	render: function render() {
		var className = (0, _classnames2.default)('PopoutList', this.props.className);
		var props = (0, _blacklist2.default)(this.props, 'className');

		return _react2.default.createElement('div', _extends({ className: className }, props));
	}
});

module.exports = PopoutList;

// expose the child to the top level export
module.exports.Item = require('./PopoutListItem');
module.exports.Heading = require('./PopoutListHeading');

},{"./PopoutListHeading":70,"./PopoutListItem":71,"blacklist":undefined,"classnames":undefined,"react":undefined}],70:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Render a popout list heading
                                                                                                                                                                                                                                                                   */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _blacklist = require('blacklist');

var _blacklist2 = _interopRequireDefault(_blacklist);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PopoutListHeading = _react2.default.createClass({
	displayName: 'PopoutListHeading',
	propTypes: {
		children: _react2.default.PropTypes.node.isRequired,
		className: _react2.default.PropTypes.string
	},
	render: function render() {
		var className = (0, _classnames2.default)('PopoutList__heading', this.props.className);
		var props = (0, _blacklist2.default)(this.props, 'className');

		return _react2.default.createElement('div', _extends({ className: className }, props));
	}
});

module.exports = PopoutListHeading;

},{"blacklist":undefined,"classnames":undefined,"react":undefined}],71:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Render a popout list item
                                                                                                                                                                                                                                                                   */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _blacklist = require('blacklist');

var _blacklist2 = _interopRequireDefault(_blacklist);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PopoutListItem = _react2.default.createClass({
	displayName: 'PopoutListItem',
	propTypes: {
		icon: _react2.default.PropTypes.string,
		iconHover: _react2.default.PropTypes.string,
		isSelected: _react2.default.PropTypes.bool,
		label: _react2.default.PropTypes.string.isRequired,
		onClick: _react2.default.PropTypes.func
	},
	getInitialState: function getInitialState() {
		return {
			hover: false
		};
	},
	hover: function hover() {
		this.setState({ hover: true });
	},
	unhover: function unhover() {
		this.setState({ hover: false });
	},

	// Render an icon
	renderIcon: function renderIcon() {
		if (!this.props.icon) return null;
		var icon = this.state.hover && this.props.iconHover ? this.props.iconHover : this.props.icon;
		var iconClassname = (0, _classnames2.default)('PopoutList__item__icon octicon', 'octicon-' + icon);

		return _react2.default.createElement('span', { className: iconClassname });
	},
	render: function render() {
		var itemClassname = (0, _classnames2.default)('PopoutList__item', {
			'is-selected': this.props.isSelected
		});
		var props = (0, _blacklist2.default)(this.props, 'className', 'icon', 'iconHover', 'isSelected', 'label');
		return _react2.default.createElement(
			'button',
			_extends({
				type: 'button',
				title: this.props.label,
				className: itemClassname,
				onFocus: this.hover,
				onBlur: this.unhover,
				onMouseOver: this.hover,
				onMouseOut: this.unhover
			}, props),
			this.renderIcon(),
			_react2.default.createElement(
				'span',
				{ className: 'PopoutList__item__label' },
				this.props.label
			)
		);
	}
});

module.exports = PopoutListItem;

},{"blacklist":undefined,"classnames":undefined,"react":undefined}],72:[function(require,module,exports){
'use strict';

/**
 * Constants
 */

// breakpoints
exports.breakpoint = {
	xs: 480,
	sm: 768,
	md: 992,
	lg: 1200
};

// border radii
exports.borderRadius = {
	xs: 2,
	sm: 4,
	md: 8,
	lg: 16,
	xl: 32
};

// color
exports.color = {
	appDanger: '#d64242',
	appInfo: '#56cdfc',
	appPrimary: '#1385e5',
	appSuccess: '#34c240',
	appWarning: '#fa9f47'
};

// spacing
exports.spacing = {
	xs: 5,
	sm: 10,
	md: 20,
	lg: 40,
	xl: 80
};

// table constants

exports.TABLE_CONTROL_COLUMN_WIDTH = 26; // icon + padding
exports.NETWORK_ERROR_RETRY_DELAY = 500; // in ms

},{}],73:[function(require,module,exports){
'use strict';

/* eslint-disable key-spacing */
var theme = {};

var _require = require('./utils/color');

var blend = _require.blend;
var darken = _require.darken;
var fade = _require.fade;
var lighten = _require.lighten;

// ==============================
// COMMON
// ==============================

// breakpoint

theme.breakpointNumeric = {
	mobile: 480,
	tabletPortrait: 768,
	tabletLandscape: 992,
	desktop: 1200
};
theme.breakpoint = {
	tabletPortraitMin: theme.breakpointNumeric.mobile + 1 + 'px',
	tabletLandscapeMin: theme.breakpointNumeric.tabletPortrait + 1 + 'px',
	desktopMin: theme.breakpointNumeric.tabletLandscape + 1 + 'px',
	desktopLargeMin: theme.breakpointNumeric.desktop + 1 + 'px',

	mobileMax: theme.breakpointNumeric.mobile + 'px',
	tabletPortraitMax: theme.breakpointNumeric.tabletPortrait + 'px',
	tabletLandscapeMax: theme.breakpointNumeric.tabletLandscape + 'px',
	desktopMax: theme.breakpointNumeric.desktop + 'px'
};

// container

theme.container = {
	gutter: 20,
	size: {
		small: 750,
		medium: 970,
		large: 1170
	}
};

// color

theme.color = {
	body: '#fafafa',
	link: '#1385e5',
	linkHover: lighten('#1385e5', 10),
	text: '#1A1A1A',

	// contextual
	success: '#34c240',
	create: '#34c240', // alias for success
	primary: '#1385e5',
	info: '#1385e5', // alias for primary
	warning: '#FA3',
	danger: '#d64242',
	error: '#d64242', // alias for danger

	// neutrals
	gray90: '#1A1A1A',
	gray80: '#333',
	gray70: '#4D4D4D',
	gray60: '#666',
	gray50: '#7F7F7F',
	gray40: '#999',
	gray30: '#B3B3B3',
	gray20: '#CCC',
	gray15: '#D9D9D9',
	gray10: '#E5E5E5',
	gray05: '#F2F2F2',

	// social
	facebook: '#3B5998',
	google: '#DC4E41',
	instagram: '#3f729b',
	pinterest: '#bd081c',
	tumblr: '#35465c',
	twitter: '#55ACEE',
	youtube: '#cd201f',
	vimeo: '#1ab7ea'
};

// border radii

theme.borderRadius = {
	small: '0.125rem',
	default: '0.3rem',
	large: '0.5rem'
};

// spacing

theme.spacing = {
	xsmall: 5,
	small: 10,
	default: 20,
	large: 30,
	xlarge: 40,
	xxlarge: 60
};

// ==============================
// ELEMENTAL SPECIFIC
// ==============================

// button

theme.button = {
	borderRadius: theme.borderRadius.default,
	borderWidth: 1,
	font: {
		weight: 500
	},
	paddingHorizontal: '1em',
	default: {
		bgColor: theme.color.primary,
		borderColor: blend(theme.color.primary, theme.color.body, 60),
		textColor: theme.color.primary
	},
	primary: {
		bgColor: theme.color.primary,
		borderColor: blend(theme.color.primary, theme.color.body, 60),
		textColor: theme.color.primary
	},
	success: {
		bgColor: theme.color.success,
		borderColor: blend(theme.color.success, theme.color.body, 60),
		textColor: theme.color.success
	},
	warning: {
		bgColor: theme.color.warning,
		borderColor: blend(theme.color.warning, theme.color.body, 60),
		textColor: theme.color.warning
	},
	danger: {
		bgColor: theme.color.danger,
		borderColor: blend(theme.color.danger, theme.color.body, 60),
		textColor: theme.color.danger
	}
};

// blank state

theme.blankstate = {
	background: darken(theme.color.body, 4),
	borderRadius: theme.borderRadius.default,
	color: theme.color.gray40,
	paddingHorizontal: '2em',
	paddingVertical: '4em'
};

// font

theme.font = {
	family: {
		mono: 'Menlo, Monaco, Consolas, "Courier New", monospace',
		sansSerif: '"Helvetica Neue", Helvetica, Arial, sans-serif',
		serif: 'Georgia, Times New Roman, Times, serif'
	},
	size: {
		xxsmall: '0.65rem',
		xsmall: '0.75rem',
		small: '0.85rem',
		default: '1rem',
		medium: '1.2rem',
		large: '1.6rem',
		xlarge: '2.4rem',
		xxlarge: '3.2rem'
	}
};

// form

theme.form = {
	label: {
		color: theme.color.gray50,
		fontSize: '1rem',
		fontWeight: 'normal',
		width: 180
	},
	note: {
		color: theme.color.gray40,
		fontSize: '0.9em'
	}
};

// component

theme.component = {
	lineHeight: '2.3em',
	height: '2.4em',
	padding: '1em'
};

// input

theme.input = {
	background: {
		default: 'white',
		disabled: '#fafafa',
		noedit: darken(theme.color.body, 2)
	},
	placeholderColor: '#aaa',
	lineHeight: theme.component.lineHeight,
	height: theme.component.height,
	border: {
		color: {
			default: '#ccc',
			focus: theme.color.info,
			hover: '#bbb',
			noedit: darken(theme.color.body, 8)
		},
		radius: theme.borderRadius.default,
		width: 1
	},
	boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, 0.075)',
	boxShadowFocus: 'inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 3px ' + fade(theme.color.info, 10),
	paddingHorizontal: '.75em'
};

// select

theme.select = {
	boxShadow: '0 1px 1px rgba(0, 0, 0, 0.075)'
};

// alert

theme.alert = {
	padding: '0.75em  1em',
	margin: '0 0 1em',
	borderWidth: 1,
	borderRadius: theme.borderRadius.default,

	color: {
		danger: {
			background: fade(theme.color.danger, 10),
			border: fade(theme.color.danger, 10),
			text: theme.color.danger
		},
		info: {
			background: fade(theme.color.primary, 10),
			border: fade(theme.color.primary, 10),
			text: theme.color.primary
		},
		success: {
			background: fade(theme.color.success, 10),
			border: fade(theme.color.success, 10),
			text: theme.color.success
		},
		warning: {
			background: fade(theme.color.warning, 10),
			border: fade(theme.color.warning, 10),
			text: theme.color.warning
		}
	}
};

// glyph

theme.glyph = {
	color: {
		danger: theme.color.danger,
		inherit: 'inherit',
		inverted: 'white',
		primary: theme.color.primary,
		success: theme.color.success,
		warning: theme.color.warning
	},
	size: {
		small: 16,
		medium: 32,
		large: 64
	}
};

// modal

theme.modal = {
	background: 'rgba(0, 0, 0, 0.8)',
	zIndex: 100,
	padding: {
		dialog: {
			horizontal: '1em',
			vertical: 0
		},
		body: {
			horizontal: 0,
			vertical: '1em'
		},
		footer: {
			horizontal: 0,
			vertical: '1em'
		},
		header: {
			horizontal: 0,
			vertical: '0.6em'
		}
	}
};

// pagination

theme.pagination = {
	color: theme.color.gray60,

	hover: {
		background: 'white',
		border: 'rgba(0, 0, 0, 0.1)',
		color: theme.color.gray60
	},
	selected: {
		background: 'rgba(0, 0, 0, 0.05)',
		border: 'transparent',
		color: theme.color.gray60
	},
	disabled: {
		background: 'transparent',
		color: theme.color.gray40
	}
};

// spinner

theme.spinner = {
	color: {
		danger: theme.color.danger,
		default: theme.color.gray40,
		inverted: 'white',
		primary: theme.color.primary,
		success: theme.color.success,
		warning: theme.color.warning
	},
	size: {
		small: 4,
		medium: 8,
		large: 16
	}
};

module.exports = theme;

},{"./utils/color":75}],74:[function(require,module,exports){
'use strict';

/**
 * Helper method to handle List operations, e.g. creating items, deleting items,
 * getting information about those lists, etc.
 */

var listToArray = require('list-to-array');
var qs = require('qs');
var xhr = require('xhr');
var assign = require('object-assign');
// Filters for truthy elements in an array
var truthy = function truthy(i) {
	return i;
};

/**
 * Get the columns of a list, structured by fields and headings
 *
 * @param  {Object} list The list we want the columns of
 *
 * @return {Array}       The columns
 */
function getColumns(list) {
	return list.uiElements.map(function (col) {
		if (col.type === 'heading') {
			return { type: 'heading', content: col.content };
		} else {
			var field = list.fields[col.field];
			return field ? { type: 'field', field: field, title: field.label, path: field.path } : null;
		}
	}).filter(truthy);
}

/**
 * Make an array of filters an object keyed by the filtering path
 *
 * @param  {Array} filterArray The array of filters
 *
 * @return {Object}            The corrected filters, keyed by path
 */
function getFilters(filterArray) {
	var filters = {};
	filterArray.forEach(function (filter) {
		filters[filter.field.path] = filter.value;
	});
	return filters;
};

/**
 * Get the sorting string for the URI
 *
 * @param  {Array} sort.paths The paths we want to sort
 *
 * @return {String}           All the sorting queries we want as a string
 */
function getSortString(sort) {
	return sort.paths.map(function (i) {
		// If we want to sort inverted, we prefix a "-" before the sort path
		return i.invert ? '-' + i.path : i.path;
	}).filter(truthy).join(',');
};

/**
 * Build a query string from a bunch of options
 */
function buildQueryString(options) {
	var query = {};
	if (options.search) query.search = options.search;
	if (options.filters.length) query.filters = JSON.stringify(getFilters(options.filters));
	if (options.columns) query.fields = options.columns.map(function (i) {
		return i.path;
	}).join(',');
	if (options.page && options.page.size) query.limit = options.page.size;
	if (options.page && options.page.index > 1) query.skip = (options.page.index - 1) * options.page.size;
	if (options.sort) query.sort = getSortString(options.sort);
	query.expandRelationshipFields = true;
	return '?' + qs.stringify(query);
};

/**
 * The main list helper class
 *
 * @param {Object} options
 */
var List = function List(options) {
	// TODO these options are possibly unused
	assign(this, options);
	this.columns = getColumns(this);
	this.expandedDefaultColumns = this.expandColumns(this.defaultColumns);
	this.defaultColumnPaths = this.expandedDefaultColumns.map(function (i) {
		return i.path;
	}).join(',');
};

/**
 * Create an item via the API
 *
 * @param  {FormData} formData The submitted form data
 * @param  {Function} callback Called after the API call
 */
List.prototype.createItem = function (formData, callback) {
	xhr({
		url: Keystone.adminPath + '/api/' + this.path + '/create',
		responseType: 'json',
		method: 'POST',
		headers: assign({}, Keystone.csrf.header),
		body: formData
	}, function (err, resp, data) {
		if (err) callback(err);
		if (resp.statusCode === 200) {
			callback(null, data);
		} else {
			// NOTE: xhr callback will be called with an Error if
			//  there is an error in the browser that prevents
			//  sending the request. A HTTP 500 response is not
			//  going to cause an error to be returned.
			callback(data, null);
		}
	});
};

/**
 * Update a specific item
 *
 * @param  {String}   id       The id of the item we want to update
 * @param  {FormData} formData The submitted form data
 * @param  {Function} callback Called after the API call
 */
List.prototype.updateItem = function (id, formData, callback) {
	xhr({
		url: Keystone.adminPath + '/api/' + this.path + '/' + id,
		responseType: 'json',
		method: 'POST',
		headers: assign({}, Keystone.csrf.header),
		body: formData
	}, function (err, resp, data) {
		if (err) return callback(err);
		if (resp.statusCode === 200) {
			callback(null, data);
		} else {
			callback(data);
		}
	});
};

List.prototype.expandColumns = function (input) {
	var _this = this;

	var nameIncluded = false;
	var cols = listToArray(input).map(function (i) {
		var split = i.split('|');
		var path = split[0];
		var width = split[1];
		if (path === '__name__') {
			path = _this.namePath;
		}
		var field = _this.fields[path];
		if (!field) {
			// TODO: Support arbitary document paths
			if (!_this.hidden) {
				if (path === _this.namePath) {
					console.warn('List ' + _this.key + ' did not specify any default columns or a name field');
				} else {
					console.warn('List ' + _this.key + ' specified an invalid default column: ' + path);
				}
			}
			return;
		}
		if (path === _this.namePath) {
			nameIncluded = true;
		}
		return {
			field: field,
			label: field.label,
			path: field.path,
			type: field.type,
			width: width
		};
	}).filter(truthy);
	if (!nameIncluded) {
		cols.unshift({
			type: 'id',
			label: 'ID',
			path: 'id'
		});
	}
	return cols;
};

List.prototype.expandSort = function (input) {
	var _this2 = this;

	var sort = {
		rawInput: input || this.defaultSort,
		isDefaultSort: false
	};
	sort.input = sort.rawInput;
	if (sort.input === '__default__') {
		sort.isDefaultSort = true;
		sort.input = this.sortable ? 'sortOrder' : this.namePath;
	}
	sort.paths = listToArray(sort.input).map(function (path) {
		var invert = false;
		if (path.charAt(0) === '-') {
			invert = true;
			path = path.substr(1);
		} else if (path.charAt(0) === '+') {
			path = path.substr(1);
		}
		var field = _this2.fields[path];
		if (!field) {
			// TODO: Support arbitary document paths
			console.warn('Invalid Sort specified:', path);
			return;
		}
		return {
			field: field,
			type: field.type,
			label: field.label,
			path: field.path,
			invert: invert
		};
	}).filter(truthy);
	return sort;
};

/**
 * Load a specific item via the API
 *
 * @param  {String}   itemId   The id of the item we want to load
 * @param  {Object}   options
 * @param  {Function} callback
 */
List.prototype.loadItem = function (itemId, options, callback) {
	if (arguments.length === 2 && typeof options === 'function') {
		callback = options;
		options = null;
	}
	var url = Keystone.adminPath + '/api/' + this.path + '/' + itemId;
	var query = qs.stringify(options);
	if (query.length) url += '?' + query;
	xhr({
		url: url,
		responseType: 'json'
	}, function (err, resp, data) {
		if (err) return callback(err);
		// Pass the data as result or error, depending on the statusCode
		if (resp.statusCode === 200) {
			callback(null, data);
		} else {
			callback(data);
		}
	});
};

/**
 * Load all items of a list, optionally passing objects to build a query string
 * for sorting or searching
 *
 * @param  {Object}   options
 * @param  {Function} callback
 */
List.prototype.loadItems = function (options, callback) {
	var url = Keystone.adminPath + '/api/' + this.path + buildQueryString(options);
	xhr({
		url: url,
		responseType: 'json'
	}, function (err, resp, data) {
		if (err) callback(err);
		// Pass the data as result or error, depending on the statusCode
		if (resp.statusCode === 200) {
			callback(null, data);
		} else {
			callback(data);
		}
	});
};

/**
 * Constructs a download URL to download a list with the current sorting, filtering,
 * selection and searching options
 *
 * @param  {Object} options
 *
 * @return {String}         The download URL
 */
List.prototype.getDownloadURL = function (options) {
	var url = Keystone.adminPath + '/api/' + this.path;
	var parts = [];
	if (options.format !== 'json') {
		options.format = 'csv';
	}
	parts.push(options.search ? 'search=' + options.search : '');
	parts.push(options.filters.length ? 'filters=' + JSON.stringify(getFilters(options.filters)) : '');
	parts.push(options.columns ? 'select=' + options.columns.map(function (i) {
		return i.path;
	}).join(',') : '');
	parts.push(options.sort ? 'sort=' + getSortString(options.sort) : '');
	parts.push('expandRelationshipFields=true');
	return url + '/export.' + options.format + '?' + parts.filter(truthy).join('&');
};

/**
 * Delete a specific item via the API
 *
 * @param  {String}   itemId   The id of the item we want to delete
 * @param  {Function} callback
 */
List.prototype.deleteItem = function (itemId, callback) {
	this.deleteItems([itemId], callback);
};

/**
 * Delete multiple items at once via the API
 *
 * @param  {Array}   itemIds  An array of ids of items we want to delete
 * @param  {Function} callback
 */
List.prototype.deleteItems = function (itemIds, callback) {
	var url = Keystone.adminPath + '/api/' + this.path + '/delete';
	xhr({
		url: url,
		method: 'POST',
		headers: assign({}, Keystone.csrf.header),
		json: {
			ids: itemIds
		}
	}, function (err, resp, body) {
		if (err) return callback(err);
		// Pass the body as result or error, depending on the statusCode
		if (resp.statusCode === 200) {
			callback(null, body);
		} else {
			callback(body);
		}
	});
};

List.prototype.reorderItems = function (item, oldSortOrder, newSortOrder, pageOptions, callback) {
	var url = Keystone.adminPath + '/api/' + this.path + '/' + item.id + '/sortOrder/' + oldSortOrder + '/' + newSortOrder + '/' + buildQueryString(pageOptions);
	xhr({
		url: url,
		method: 'POST',
		headers: assign({}, Keystone.csrf.header)
	}, function (err, resp, body) {
		if (err) return callback(err);
		try {
			body = JSON.parse(body);
		} catch (e) {
			console.log('Error parsing results json:', e, body);
			return callback(e);
		}
		// Pass the body as result or error, depending on the statusCode
		if (resp.statusCode === 200) {
			callback(null, body);
		} else {
			callback(body);
		}
	});
};

module.exports = List;

},{"list-to-array":undefined,"object-assign":122,"qs":undefined,"xhr":undefined}],75:[function(require,module,exports){
'use strict';

/**
	Validate Hex
	==============================

	@param {String} hex

	1. remove hash if present
	2. convert from 3 to 6 digit color code & ensure valid hex
*/

function validateHex(color) {
	var hex = color.replace('#', '');

	if (hex.length === 3) {
		return hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	}
	if (hex.length !== 6) {
		throw new Error('Invalid color value provided: "' + color + '"');
	}

	return hex;
};

/**
	Fade Color
	==============================

	Takes a hexidecimal color, converts it to RGB and applies an alpha value.

	@param {String} color
	@param {Number} opacity (0-100)

	1. convert hex to RGB
	2. combine and add alpha channel
*/

function fade(color) {
	var opacity = arguments.length <= 1 || arguments[1] === undefined ? 100 : arguments[1];

	var decimalFraction = opacity / 100;
	var hex = validateHex(color);

	// 1.
	var r = parseInt(hex.substring(0, 2), 16);
	var g = parseInt(hex.substring(2, 4), 16);
	var b = parseInt(hex.substring(4, 6), 16);

	// 2.
	var result = 'rgba(' + r + ',' + g + ',' + b + ',' + decimalFraction + ')';

	return result;
};

/**
	Shade Color
	==============================

	Takes a hexidecimal color, converts it to RGB and lightens or darkens

	@param {String} color
	@param {Number} opacity (0-100)

	1. do fancy RGB bitwise operations
	2. combine back into a hex value
*/

function shade(color, percent) {
	var decimalFraction = percent / 100;
	var hex = validateHex(color);

	// 1.
	var f = parseInt(hex, 16);
	var t = decimalFraction < 0 ? 0 : 255;
	var p = decimalFraction < 0 ? decimalFraction * -1 : decimalFraction;

	var R = f >> 16;
	var G = f >> 8 & 0x00FF;
	var B = f & 0x0000FF;

	// 2.
	return '#' + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
};

// shade helpers
var lighten = shade;
function darken(color, percent) {
	return shade(color, percent * -1);
};

/**
	Blend Color
	==============================

	Takes two hexidecimal colors and blend them together

	@param {String} color1
	@param {String} color2
	@param {Number} percent (0-100)

	1. do fancy RGB bitwise operations
	2. combine back into a hex value
*/

function blend(color1, color2, percent) {
	var decimalFraction = percent / 100;
	var hex1 = validateHex(color1);
	var hex2 = validateHex(color2);

	// 1.
	var f = parseInt(hex1, 16);
	var t = parseInt(hex2, 16);

	var R1 = f >> 16;
	var G1 = f >> 8 & 0x00FF;
	var B1 = f & 0x0000FF;

	var R2 = t >> 16;
	var G2 = t >> 8 & 0x00FF;
	var B2 = t & 0x0000FF;

	// 2.
	return '#' + (0x1000000 + (Math.round((R2 - R1) * decimalFraction) + R1) * 0x10000 + (Math.round((G2 - G1) * decimalFraction) + G1) * 0x100 + (Math.round((B2 - B1) * decimalFraction) + B1)).toString(16).slice(1);
}

module.exports = {
	blend: blend,
	darken: darken,
	fade: fade,
	lighten: lighten
};

},{}],76:[function(require,module,exports){
"use strict";

// ======================
// Concatenate Classnames
// ======================
//
// Support className as an array:
// force classname prop into an array (possibly of arrays) then flatten

/*
	// To use spread the new array into aphrodite's `css` function

	function Component ({ className, ...props }) {
		props.className = css(
			classes.component,
			...concatClassnames(className)
		);

		return <Component {...props} />;
	};
*/

module.exports = function concatClassnames(className) {
	return [className].reduce(function (a, b) {
		return a.concat(b);
	}, []);
};

},{}],77:[function(require,module,exports){
'use strict';

/**
	Linear Gradient
	==============================

	Short-hand helper for adding a linear gradient to your component.

	- @param {String} sideOrCorner
	- @param {String} top
	- @param {String} bottom
	- @param {String} base (optional)
	- @returns {Object} css linear gradient declaration

	Spread the declaration into your component class:
	------------------------------

	myComponentClass: {
		...linearGradient(red, blue),
	}
*/

function linearGradient(direction, top, bottom) {
	var base = arguments.length <= 3 || arguments[3] === undefined ? '' : arguments[3];

	return {
		background: 'linear-gradient(' + direction + ', ' + top + ' 0%, ' + bottom + ' 100%) ' + base
	};
}

// Vertical Gradient
function gradientVertical(top, bottom, base) {
	return linearGradient('to bottom', top, bottom, base);
}

// Horizontal Gradient
function gradientHorizontal(top, bottom, base) {
	return linearGradient('to right', top, bottom, base);
}

/**
	Border Radius
	==============================

	Short-hand helper for border radii
*/

// top
function borderTopRadius(radius) {
	return {
		borderTopLeftRadius: radius,
		borderTopRightRadius: radius
	};
}

// right
function borderRightRadius(radius) {
	return {
		borderBottomRightRadius: radius,
		borderTopRightRadius: radius
	};
}

// bottom
function borderBottomRadius(radius) {
	return {
		borderBottomLeftRadius: radius,
		borderBottomRightRadius: radius
	};
}

// left
function borderLeftRadius(radius) {
	return {
		borderBottomLeftRadius: radius,
		borderTopLeftRadius: radius
	};
}

// Return

module.exports = {
	borderTopRadius: borderTopRadius,
	borderRightRadius: borderRightRadius,
	borderBottomRadius: borderBottomRadius,
	borderLeftRadius: borderLeftRadius,

	gradientHorizontal: gradientHorizontal,
	gradientVertical: gradientVertical
};

},{}],78:[function(require,module,exports){
'use strict';

var _List = require('./List');

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.listsByKey = {}; /**
                          * Exports an object of lists, keyed with their key instead of their name and
                          * wrapped with the List helper (./List.js)
                          */

exports.listsByPath = {};

for (var key in Keystone.lists) {
	// Guard for-ins
	if ({}.hasOwnProperty.call(Keystone.lists, key)) {
		var list = new _List2.default(Keystone.lists[key]);
		exports.listsByKey[key] = list;
		exports.listsByPath[list.path] = list;
	}
}

},{"./List":74}],79:[function(require,module,exports){
'use strict';

var _i = require('i');

var _i2 = _interopRequireDefault(_i);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Displays the singular or plural of a string based on a number
 * or number of items in an array.
 *
 * If arity is 1, returns the plural form of the word.
 *
 * @param {String} count
 * @param {String} singular string
 * @param {String} plural string
 * @return {String} singular or plural, * is replaced with count
 * @api public
 */

/**
 * A few helper methods for strings
 */

exports.plural = function (count, sn, pl) {
  if (arguments.length === 1) {
    return _i2.default.pluralize(count);
  }
  if (typeof sn !== 'string') sn = '';
  if (!pl) {
    pl = _i2.default.pluralize(sn);
  }
  if (typeof count === 'string') {
    count = Number(count);
  } else if (typeof count !== 'number') {
    count = (0, _lodash.size)(count);
  }
  return (count === 1 ? sn : pl).replace('*', count);
};

/**
 * Converts the first letter in a string to uppercase
 *
 * @param {String} str
 * @return {String} Str
 * @api public
 */

exports.upcase = function (str) {
  if (str && str.toString) str = str.toString();
  if (typeof str !== 'string' || !str.length) return '';
  return str.substr(0, 1).toUpperCase() + str.substr(1);
};

/**
 * Converts the first letter in a string to lowercase
 *
 * @param {String} Str
 * @return {String} str
 * @api public
 */

exports.downcase = function (str) {
  if (str && str.toString) str = str.toString();
  if (typeof str !== 'string' || !str.length) return '';
  return str.substr(0, 1).toLowerCase() + str.substr(1);
};

/**
 * Converts a string to title case
 *
 * @param {String} str
 * @return {String} Title Case form of str
 * @api public
 */

exports.titlecase = function (str) {
  if (str && str.toString) str = str.toString();
  if (typeof str !== 'string' || !str.length) return '';
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  var parts = str.split(/\s|_|\-/);
  for (var i = 0; i < parts.length; i++) {
    if (parts[i] && !/^[A-Z0-9]+$/.test(parts[i])) {
      parts[i] = exports.upcase(parts[i]);
    }
  }
  return (0, _lodash.compact)(parts).join(' ');
};

/**
 * Converts a string to camel case
 *
 * @param {String} str
 * @param {Boolean} lowercaseFirstWord
 * @return {String} camel-case form of str
 * @api public
 */

exports.camelcase = function (str, lc) {
  return _i2.default.camelize(str, !lc);
};

},{"i":undefined,"lodash":undefined}],80:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _blacklist = require('blacklist');

var _blacklist2 = _interopRequireDefault(_blacklist);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _color = require('../../admin/client/utils/color');

var _constants = require('../../admin/client/constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkbox = _react2.default.createClass({
	displayName: 'Checkbox',
	propTypes: {
		checked: _react2.default.PropTypes.bool,
		component: _react2.default.PropTypes.node,
		onChange: _react2.default.PropTypes.func,
		readonly: _react2.default.PropTypes.bool
	},
	getDefaultProps: function getDefaultProps() {
		return {
			component: 'button'
		};
	},
	getInitialState: function getInitialState() {
		return {
			active: null,
			focus: null,
			hover: null
		};
	},
	componentDidMount: function componentDidMount() {
		window.addEventListener('mouseup', this.handleMouseUp, false);
	},
	componentWillUnmount: function componentWillUnmount() {
		window.removeEventListener('mouseup', this.handleMouseUp, false);
	},
	getStyles: function getStyles() {
		var _props = this.props;
		var checked = _props.checked;
		var readonly = _props.readonly;
		var _state = this.state;
		var active = _state.active;
		var focus = _state.focus;
		var hover = _state.hover;


		var checkedColor = '#3999fc';

		var background = checked && !readonly ? checkedColor : 'white';
		var borderColor = checked && !readonly ? 'rgba(0,0,0,0.15) rgba(0,0,0,0.1) rgba(0,0,0,0.05)' : 'rgba(0,0,0,0.3) rgba(0,0,0,0.2) rgba(0,0,0,0.15)';
		var boxShadow = checked && !readonly ? '0 1px 0 rgba(255,255,255,0.33)' : 'inset 0 1px 0 rgba(0,0,0,0.06)';
		var color = checked && !readonly ? 'white' : '#bbb';
		var textShadow = checked && !readonly ? '0 1px 0 rgba(0,0,0,0.2)' : null;

		// pseudo state
		if (hover && !focus && !readonly) {
			borderColor = checked ? 'rgba(0,0,0,0.1) rgba(0,0,0,0.15) rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.35) rgba(0,0,0,0.3) rgba(0,0,0,0.25)';
		}
		if (active) {
			background = checked && !readonly ? (0, _color.darken)(checkedColor, 20) : '#eee';
			borderColor = checked && !readonly ? 'rgba(0,0,0,0.25) rgba(0,0,0,0.3) rgba(0,0,0,0.35)' : 'rgba(0,0,0,0.4) rgba(0,0,0,0.35) rgba(0,0,0,0.3)';
			boxShadow = checked && !readonly ? '0 1px 0 rgba(255,255,255,0.33)' : 'inset 0 1px 3px rgba(0,0,0,0.2)';
		}
		if (focus && !active) {
			borderColor = checked && !readonly ? 'rgba(0,0,0,0.25) rgba(0,0,0,0.3) rgba(0,0,0,0.35)' : checkedColor;
			boxShadow = checked && !readonly ? '0 0 0 3px ' + (0, _color.fade)(checkedColor, 15) : 'inset 0 1px 2px rgba(0,0,0,0.15), 0 0 0 3px ' + (0, _color.fade)(checkedColor, 15);
		}

		// noedit
		if (readonly) {
			background = 'rgba(255,255,255,0.5)';
			borderColor = 'rgba(0,0,0,0.1)';
			boxShadow = 'none';
			color = checked ? checkedColor : '#bbb';
		}

		return {
			alignItems: 'center',
			background: background,
			border: '1px solid',
			borderColor: borderColor,
			borderRadius: _constants2.default.borderRadius.sm,
			boxShadow: boxShadow,
			color: color,
			display: 'inline-block',
			fontSize: 14,
			height: 16,
			lineHeight: '15px',
			outline: 'none',
			padding: 0,
			textAlign: 'center',
			textShadow: textShadow,
			verticalAlign: 'middle',
			width: 16,

			msTransition: 'all 120ms ease-out',
			MozTransition: 'all 120ms ease-out',
			WebkitTransition: 'all 120ms ease-out',
			transition: 'all 120ms ease-out'
		};
	},
	handleKeyDown: function handleKeyDown(e) {
		if (e.keyCode !== 32) return;
		this.toggleActive(true);
	},
	handleKeyUp: function handleKeyUp() {
		this.toggleActive(false);
	},
	handleMouseOver: function handleMouseOver() {
		this.toggleHover(true);
	},
	handleMouseDown: function handleMouseDown() {
		this.toggleActive(true);
		this.toggleFocus(true);
	},
	handleMouseUp: function handleMouseUp() {
		this.toggleActive(false);
	},
	handleMouseOut: function handleMouseOut() {
		this.toggleHover(false);
	},
	toggleActive: function toggleActive(pseudo) {
		this.setState({ active: pseudo });
	},
	toggleHover: function toggleHover(pseudo) {
		this.setState({ hover: pseudo });
	},
	toggleFocus: function toggleFocus(pseudo) {
		this.setState({ focus: pseudo });
	},
	handleChange: function handleChange() {
		this.props.onChange(!this.props.checked);
	},
	render: function render() {
		var _this = this;

		var _props2 = this.props;
		var checked = _props2.checked;
		var readonly = _props2.readonly;


		var props = (0, _blacklist2.default)(this.props, 'checked', 'component', 'onChange', 'readonly');
		props.style = this.getStyles();
		props.ref = 'checkbox';
		props.className = (0, _classnames2.default)('octicon', {
			'octicon-check': checked,
			'octicon-x': typeof checked === 'boolean' && !checked && readonly
		});
		props.type = readonly ? null : 'button';

		props.onKeyDown = this.handleKeyDown;
		props.onKeyUp = this.handleKeyUp;

		props.onMouseDown = this.handleMouseDown;
		props.onMouseUp = this.handleMouseUp;
		props.onMouseOver = this.handleMouseOver;
		props.onMouseOut = this.handleMouseOut;

		props.onClick = readonly ? null : this.handleChange;
		props.onFocus = readonly ? null : function () {
			return _this.toggleFocus(true);
		};
		props.onBlur = readonly ? null : function () {
			return _this.toggleFocus(false);
		};

		var node = readonly ? 'span' : this.props.component;

		return _react2.default.createElement(node, props);
	}
});

module.exports = Checkbox;

},{"../../admin/client/constants":72,"../../admin/client/utils/color":75,"blacklist":undefined,"classnames":undefined,"react":undefined}],81:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elemental = require('../../admin/client/App/elemental');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// NOTE marginBottom of 1px stops things jumping around
// TODO find out why this is necessary

function CollapsedFieldLabel(_ref) {
	var style = _ref.style;

	var props = _objectWithoutProperties(_ref, ['style']);

	var __style__ = _extends({
		marginBottom: 1,
		paddingLeft: 0,
		paddingRight: 0
	}, style);

	return _react2.default.createElement(_elemental.Button, _extends({ variant: 'link', style: __style__ }, props));
};

module.exports = CollapsedFieldLabel;

},{"../../admin/client/App/elemental":64,"react":undefined}],82:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elemental = require('../../admin/client/App/elemental');

var _color = require('../../admin/client/utils/color');

var _theme = require('../../admin/client/theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function FileChangeMessage(_ref) {
	var style = _ref.style;
	var color = _ref.color;

	var props = _objectWithoutProperties(_ref, ['style', 'color']);

	var styles = _extends({
		marginRight: 10,
		minWidth: 0
	}, style);

	if (color !== 'default') {
		styles.backgroundColor = (0, _color.fade)(_theme2.default.color[color], 10);
		styles.borderColor = (0, _color.fade)(_theme2.default.color[color], 30);
		styles.color = _theme2.default.color[color];
	}

	return _react2.default.createElement(_elemental.FormInput, _extends({
		noedit: true,
		style: styles
	}, props));
};

FileChangeMessage.propTypes = {
	color: _react.PropTypes.oneOf(['danger', 'default', 'success'])
};
FileChangeMessage.defaultProps = {
	color: 'default'
};

module.exports = FileChangeMessage;

},{"../../admin/client/App/elemental":64,"../../admin/client/theme":73,"../../admin/client/utils/color":75,"react":undefined}],83:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
	Expose internal ref to parent
	=============================

	Field.create({
		triggerFileBrowser () {
			this.refs.fileInput.clickDomNode();
		},
		render () {
			<HiddenFileInput ref="fileInput" />
		}
	});
*/

var HiddenFileInput = function (_Component) {
	_inherits(HiddenFileInput, _Component);

	function HiddenFileInput() {
		_classCallCheck(this, HiddenFileInput);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(HiddenFileInput).call(this));

		_this.clearValue = _this.clearValue.bind(_this);
		_this.clickDomNode = _this.clickDomNode.bind(_this);
		_this.hasValue = _this.hasValue.bind(_this);
		return _this;
	}

	_createClass(HiddenFileInput, [{
		key: 'clearValue',
		value: function clearValue() {
			this.target.value = '';
		}
	}, {
		key: 'clickDomNode',
		value: function clickDomNode() {
			this.target.click();
		}
	}, {
		key: 'hasValue',
		value: function hasValue() {
			return !!this.target.value;
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props;
			var style = _props.style;

			var props = _objectWithoutProperties(_props, ['style']);

			var setRef = function setRef(n) {
				return _this2.target = n;
			};
			var styles = _extends({
				left: -9999,
				position: 'absolute'
			}, style);

			return _react2.default.createElement('input', _extends({}, props, {
				style: styles,
				ref: setRef,
				tabIndex: '-1',
				type: 'file'
			}));
		}
	}]);

	return HiddenFileInput;
}(_react.Component);

;

HiddenFileInput.propTypes = {
	onChange: _react.PropTypes.func.isRequired
};

module.exports = HiddenFileInput;

},{"react":undefined}],84:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function ItemsTableCell(_ref) {
	var className = _ref.className;

	var props = _objectWithoutProperties(_ref, ['className']);

	props.className = (0, _classnames2.default)('ItemList__col', className);

	return _react2.default.createElement('td', props);
};

module.exports = ItemsTableCell;

},{"classnames":undefined,"react":undefined}],85:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function ItemsTableValue(_ref) {
	var className = _ref.className;
	var component = _ref.component;
	var empty = _ref.empty;
	var exterior = _ref.exterior;
	var field = _ref.field;
	var href = _ref.href;
	var interior = _ref.interior;
	var padded = _ref.padded;
	var to = _ref.to;
	var truncate = _ref.truncate;

	var props = _objectWithoutProperties(_ref, ['className', 'component', 'empty', 'exterior', 'field', 'href', 'interior', 'padded', 'to', 'truncate']);

	// TODO remove in the next release
	if (href) {
		console.warn('ItemsTableValue: `href` will be deprecated in the next release, use `to`.');
	}
	var linkRef = to || href;
	var Component = linkRef ? _reactRouter.Link : component;

	props.className = (0, _classnames2.default)('ItemList__value', field ? 'ItemList__value--' + field : null, {
		'ItemList__link--empty': empty,
		'ItemList__link--exterior': linkRef && exterior,
		'ItemList__link--interior': linkRef && interior,
		'ItemList__link--padded': linkRef && padded,
		'ItemList__value--truncate': truncate
	}, className);
	props.to = linkRef;

	return _react2.default.createElement(Component, props);
};

ItemsTableValue.propTypes = {
	component: _react.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.func]),
	empty: _react.PropTypes.bool,
	exterior: _react.PropTypes.bool, // FIXME this should be "external" e.g. an external link
	field: _react.PropTypes.string,
	href: _react.PropTypes.string, // TODO remove in next release
	interior: _react.PropTypes.bool, // FIXME this should be "internal" e.g. an internal link
	padded: _react.PropTypes.bool,
	to: _react.PropTypes.string,
	truncate: _react.PropTypes.bool
};
ItemsTableValue.defaultProps = {
	component: 'div',
	truncate: true
};

module.exports = ItemsTableValue;

},{"classnames":undefined,"react":undefined,"react-router":undefined}],86:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ItemsTableCell = require('../../components/ItemsTableCell');

var _ItemsTableCell2 = _interopRequireDefault(_ItemsTableCell);

var _ItemsTableValue = require('../../components/ItemsTableValue');

var _ItemsTableValue2 = _interopRequireDefault(_ItemsTableValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IdColumn = _react2.default.createClass({
	displayName: 'IdColumn',
	propTypes: {
		col: _react2.default.PropTypes.object,
		data: _react2.default.PropTypes.object,
		list: _react2.default.PropTypes.object
	},
	renderValue: function renderValue() {
		var value = this.props.data.id;
		if (!value) return null;

		return _react2.default.createElement(
			_ItemsTableValue2.default,
			{ padded: true, interior: true, title: value, to: Keystone.adminPath + '/' + this.props.list.path + '/' + value, field: this.props.col.type },
			value
		);
	},
	render: function render() {
		return _react2.default.createElement(
			_ItemsTableCell2.default,
			null,
			this.renderValue()
		);
	}
});

module.exports = IdColumn;

},{"../../components/ItemsTableCell":84,"../../components/ItemsTableValue":85,"react":undefined}],87:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ItemsTableCell = require('../../components/ItemsTableCell');

var _ItemsTableCell2 = _interopRequireDefault(_ItemsTableCell);

var _ItemsTableValue = require('../../components/ItemsTableValue');

var _ItemsTableValue2 = _interopRequireDefault(_ItemsTableValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InvalidColumn = _react2.default.createClass({
	displayName: 'InvalidColumn',
	propTypes: {
		col: _react2.default.PropTypes.object
	},
	renderValue: function renderValue() {
		return _react2.default.createElement(
			_ItemsTableValue2.default,
			{ field: this.props.col.type },
			'(Invalid Type: ',
			this.props.col.type,
			')'
		);
	},
	render: function render() {
		return _react2.default.createElement(
			_ItemsTableCell2.default,
			null,
			this.renderValue()
		);
	}
});

module.exports = InvalidColumn;

},{"../../components/ItemsTableCell":84,"../../components/ItemsTableValue":85,"react":undefined}],88:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _evalDependsOn = require('../utils/evalDependsOn.js');

var _evalDependsOn2 = _interopRequireDefault(_evalDependsOn);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _elemental = require('../../admin/client/App/elemental');

var _blacklist = require('blacklist');

var _blacklist2 = _interopRequireDefault(_blacklist);

var _CollapsedFieldLabel = require('../components/CollapsedFieldLabel');

var _CollapsedFieldLabel2 = _interopRequireDefault(_CollapsedFieldLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isObject(arg) {
	return Object.prototype.toString.call(arg) === '[object Object]';
}

function validateSpec(spec) {
	if (!spec) spec = {};
	if (!isObject(spec.supports)) {
		spec.supports = {};
	}
	if (!spec.focusTargetRef) {
		spec.focusTargetRef = 'focusTarget';
	}
	return spec;
}

var Base = module.exports.Base = {
	getInitialState: function getInitialState() {
		return {};
	},
	getDefaultProps: function getDefaultProps() {
		return {
			adminPath: Keystone.adminPath,
			inputProps: {},
			labelProps: {},
			valueProps: {},
			size: 'full'
		};
	},
	getInputName: function getInputName(path) {
		// This correctly creates the path for field inputs, and supports the
		// inputNamePrefix prop that is required for nested fields to work
		return this.props.inputNamePrefix ? this.props.inputNamePrefix + '[' + path + ']' : path;
	},
	valueChanged: function valueChanged(event) {
		this.props.onChange({
			path: this.props.path,
			value: event.target.value
		});
	},
	shouldCollapse: function shouldCollapse() {
		return this.props.collapse && !this.props.value;
	},
	shouldRenderField: function shouldRenderField() {
		if (this.props.mode === 'create') return true;
		return !this.props.noedit;
	},
	focus: function focus() {
		if (!this.refs[this.spec.focusTargetRef]) return;
		(0, _reactDom.findDOMNode)(this.refs[this.spec.focusTargetRef]).focus();
	},
	renderNote: function renderNote() {
		if (!this.props.note) return null;

		return _react2.default.createElement(_elemental.FormNote, { html: this.props.note });
	},
	renderField: function renderField() {
		var _props = this.props;
		var autoFocus = _props.autoFocus;
		var value = _props.value;
		var inputProps = _props.inputProps;

		return _react2.default.createElement(_elemental.FormInput, _extends({}, inputProps, {
			autoFocus: autoFocus,
			autoComplete: 'off',
			name: this.getInputName(this.props.path),
			onChange: this.valueChanged,
			ref: 'focusTarget',
			value: value
		}));
	},
	renderValue: function renderValue() {
		return _react2.default.createElement(
			_elemental.FormInput,
			{ noedit: true },
			this.props.value
		);
	},
	renderUI: function renderUI() {
		var wrapperClassName = (0, _classnames2.default)('field-type-' + this.props.type, this.props.className, { 'field-monospace': this.props.monospace });
		return _react2.default.createElement(
			_elemental.FormField,
			{ htmlFor: this.props.path, label: this.props.label, className: wrapperClassName, cropLabel: true },
			_react2.default.createElement(
				'div',
				{ className: 'FormField__inner field-size-' + this.props.size },
				this.shouldRenderField() ? this.renderField() : this.renderValue()
			),
			this.renderNote()
		);
	}
};

var Mixins = module.exports.Mixins = {
	Collapse: {
		componentWillMount: function componentWillMount() {
			this.setState({
				isCollapsed: this.shouldCollapse()
			});
		},
		componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
			if (prevState.isCollapsed && !this.state.isCollapsed) {
				this.focus();
			}
		},
		uncollapse: function uncollapse() {
			this.setState({
				isCollapsed: false
			});
		},
		renderCollapse: function renderCollapse() {
			if (!this.shouldRenderField()) return null;
			return _react2.default.createElement(
				_elemental.FormField,
				null,
				_react2.default.createElement(
					_CollapsedFieldLabel2.default,
					{ onClick: this.uncollapse },
					'+ Add ',
					this.props.label.toLowerCase()
				)
			);
		}
	}
};

module.exports.create = function (spec) {

	spec = validateSpec(spec);

	var field = {
		spec: spec,
		displayName: spec.displayName,
		mixins: [Mixins.Collapse],
		statics: {
			getDefaultValue: function getDefaultValue(field) {
				return field.defaultValue || '';
			}
		},
		render: function render() {
			if (!(0, _evalDependsOn2.default)(this.props.dependsOn, this.props.values)) {
				return null;
			}
			if (this.state.isCollapsed) {
				return this.renderCollapse();
			}
			return this.renderUI();
		}
	};

	if (spec.statics) {
		_extends(field.statics, spec.statics);
	}

	var excludeBaseMethods = {};
	if (spec.mixins) {
		spec.mixins.forEach(function (mixin) {
			Object.keys(mixin).forEach(function (name) {
				if (Base[name]) {
					excludeBaseMethods[name] = true;
				}
			});
		});
	}

	_extends(field, (0, _blacklist2.default)(Base, excludeBaseMethods));
	_extends(field, (0, _blacklist2.default)(spec, 'mixins', 'statics'));

	if (Array.isArray(spec.mixins)) {
		field.mixins = field.mixins.concat(spec.mixins);
	}

	return _react2.default.createClass(field);
};

},{"../../admin/client/App/elemental":64,"../components/CollapsedFieldLabel":81,"../utils/evalDependsOn.js":121,"blacklist":undefined,"classnames":undefined,"react":undefined,"react-dom":undefined}],89:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Checkbox = require('../../components/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _ItemsTableCell = require('../../components/ItemsTableCell');

var _ItemsTableCell2 = _interopRequireDefault(_ItemsTableCell);

var _ItemsTableValue = require('../../components/ItemsTableValue');

var _ItemsTableValue2 = _interopRequireDefault(_ItemsTableValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BooleanColumn = _react2.default.createClass({
	displayName: 'BooleanColumn',
	propTypes: {
		col: _react2.default.PropTypes.object,
		data: _react2.default.PropTypes.object
	},
	renderValue: function renderValue() {
		return _react2.default.createElement(
			_ItemsTableValue2.default,
			{ truncate: false, field: this.props.col.type },
			_react2.default.createElement(_Checkbox2.default, { readonly: true, checked: this.props.data.fields[this.props.col.path] })
		);
	},
	render: function render() {
		return _react2.default.createElement(
			_ItemsTableCell2.default,
			null,
			this.renderValue()
		);
	}
});

module.exports = BooleanColumn;

},{"../../components/Checkbox":80,"../../components/ItemsTableCell":84,"../../components/ItemsTableValue":85,"react":undefined}],90:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Field = require('../Field');

var _Field2 = _interopRequireDefault(_Field);

var _Checkbox = require('../../components/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _elemental = require('../../../admin/client/App/elemental');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NOOP = function NOOP() {};

module.exports = _Field2.default.create({
	displayName: 'BooleanField',
	statics: {
		type: 'Boolean'
	},
	propTypes: {
		indent: _react2.default.PropTypes.bool,
		label: _react2.default.PropTypes.string,
		onChange: _react2.default.PropTypes.func.isRequired,
		path: _react2.default.PropTypes.string.isRequired,
		value: _react2.default.PropTypes.bool
	},

	valueChanged: function valueChanged(value) {
		this.props.onChange({
			path: this.props.path,
			value: value
		});
	},
	renderFormInput: function renderFormInput() {
		if (!this.shouldRenderField()) return;

		return _react2.default.createElement('input', {
			name: this.getInputName(this.props.path),
			type: 'hidden',
			value: !!this.props.value
		});
	},
	renderUI: function renderUI() {
		var _props = this.props;
		var indent = _props.indent;
		var value = _props.value;
		var label = _props.label;
		var path = _props.path;


		return _react2.default.createElement(
			'div',
			{ 'data-field-name': path, 'data-field-type': 'boolean' },
			_react2.default.createElement(
				_elemental.FormField,
				{ offsetAbsentLabel: indent },
				_react2.default.createElement(
					'label',
					{ style: { height: '2.3em' } },
					this.renderFormInput(),
					_react2.default.createElement(_Checkbox2.default, {
						checked: value,
						onChange: this.shouldRenderField() && this.valueChanged || NOOP,
						readonly: !this.shouldRenderField()
					}),
					_react2.default.createElement(
						'span',
						{ style: { marginLeft: '.75em' } },
						label
					)
				),
				this.renderNote()
			)
		);
	}
});

},{"../../../admin/client/App/elemental":64,"../../components/Checkbox":80,"../Field":88,"react":undefined}],91:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elemental = require('../../../admin/client/App/elemental');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VALUE_OPTIONS = [{ label: 'Is Checked', value: true }, { label: 'Is NOT Checked', value: false }];

function getDefaultValue() {
	return {
		value: true
	};
}

var BooleanFilter = _react2.default.createClass({
	displayName: 'BooleanFilter',

	propTypes: {
		filter: _react2.default.PropTypes.shape({
			value: _react2.default.PropTypes.bool
		})
	},
	statics: {
		getDefaultValue: getDefaultValue
	},
	getDefaultProps: function getDefaultProps() {
		return {
			filter: getDefaultValue()
		};
	},
	updateValue: function updateValue(value) {
		this.props.onChange({ value: value });
	},
	render: function render() {
		return _react2.default.createElement(_elemental.SegmentedControl, { equalWidthSegments: true, options: VALUE_OPTIONS, value: this.props.filter.value, onChange: this.updateValue });
	}
});

module.exports = BooleanFilter;

},{"../../../admin/client/App/elemental":64,"react":undefined}],92:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elemental = require('../../../admin/client/App/elemental');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OPTIONS = [{ label: 'Is Set', value: true }, { label: 'Is NOT Set', value: false }];

function getDefaultValue() {
	return {
		exists: true
	};
}

var CloudinaryImageFilter = _react2.default.createClass({
	displayName: 'CloudinaryImageFilter',

	propTypes: {
		filter: _react2.default.PropTypes.shape({
			exists: _react2.default.PropTypes.oneOf(OPTIONS.map(function (i) {
				return i.value;
			}))
		})
	},
	statics: {
		getDefaultValue: getDefaultValue
	},
	getDefaultProps: function getDefaultProps() {
		return {
			filter: getDefaultValue()
		};
	},
	toggleExists: function toggleExists(value) {
		this.props.onChange({ exists: value });
	},
	render: function render() {
		var filter = this.props.filter;


		return _react2.default.createElement(_elemental.SegmentedControl, {
			equalWidthSegments: true,
			onChange: this.toggleExists,
			options: OPTIONS,
			value: filter.exists
		});
	}
});

module.exports = CloudinaryImageFilter;

},{"../../../admin/client/App/elemental":64,"react":undefined}],93:[function(require,module,exports){
'use strict';

module.exports = require('../text/TextColumn');

},{"../text/TextColumn":117}],94:[function(require,module,exports){
(function (global){
'use strict';

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _codemirror = (typeof window !== "undefined" ? window['CodeMirror'] : typeof global !== "undefined" ? global['CodeMirror'] : null);

var _codemirror2 = _interopRequireDefault(_codemirror);

var _Field = require('../Field');

var _Field2 = _interopRequireDefault(_Field);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _elemental = require('../../../admin/client/App/elemental');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * TODO:
 * - Remove dependency on lodash
 */

// See CodeMirror docs for API:
// http://codemirror.net/doc/manual.html

module.exports = _Field2.default.create({
	displayName: 'CodeField',
	statics: {
		type: 'Code'
	},

	getInitialState: function getInitialState() {
		return {
			isFocused: false
		};
	},
	componentDidMount: function componentDidMount() {
		if (!this.refs.codemirror) {
			return;
		}

		var options = _lodash2.default.defaults({}, this.props.editor, {
			lineNumbers: true,
			readOnly: this.shouldRenderField() ? false : true
		});

		this.codeMirror = _codemirror2.default.fromTextArea((0, _reactDom.findDOMNode)(this.refs.codemirror), options);
		this.codeMirror.setSize(null, this.props.height);
		this.codeMirror.on('change', this.codemirrorValueChanged);
		this.codeMirror.on('focus', this.focusChanged.bind(this, true));
		this.codeMirror.on('blur', this.focusChanged.bind(this, false));
		this._currentCodemirrorValue = this.props.value;
	},
	componentWillUnmount: function componentWillUnmount() {
		// todo: is there a lighter-weight way to remove the cm instance?
		if (this.codeMirror) {
			this.codeMirror.toTextArea();
		}
	},
	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		if (this.codeMirror && this._currentCodemirrorValue !== nextProps.value) {
			this.codeMirror.setValue(nextProps.value);
		}
	},
	focus: function focus() {
		if (this.codeMirror) {
			this.codeMirror.focus();
		}
	},
	focusChanged: function focusChanged(focused) {
		this.setState({
			isFocused: focused
		});
	},
	codemirrorValueChanged: function codemirrorValueChanged(doc, change) {
		var newValue = doc.getValue();
		this._currentCodemirrorValue = newValue;
		this.props.onChange({
			path: this.props.path,
			value: newValue
		});
	},
	renderCodemirror: function renderCodemirror() {
		var className = (0, _classnames2.default)('CodeMirror-container', {
			'is-focused': this.state.isFocused && this.shouldRenderField()
		});

		return _react2.default.createElement(
			'div',
			{ className: className },
			_react2.default.createElement(_elemental.FormInput, {
				autoComplete: 'off',
				multiline: true,
				name: this.getInputName(this.props.path),
				onChange: this.valueChanged,
				ref: 'codemirror',
				value: this.props.value
			})
		);
	},
	renderValue: function renderValue() {
		return this.renderCodemirror();
	},
	renderField: function renderField() {
		return this.renderCodemirror();
	}
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../../admin/client/App/elemental":64,"../Field":88,"classnames":undefined,"lodash":undefined,"react":undefined,"react-dom":undefined}],95:[function(require,module,exports){
'use strict';

module.exports = require('../text/TextFilter');

},{"../text/TextFilter":119}],96:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ItemsTableCell = require('../../components/ItemsTableCell');

var _ItemsTableCell2 = _interopRequireDefault(_ItemsTableCell);

var _ItemsTableValue = require('../../components/ItemsTableValue');

var _ItemsTableValue2 = _interopRequireDefault(_ItemsTableValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmailColumn = _react2.default.createClass({
	displayName: 'EmailColumn',
	propTypes: {
		col: _react2.default.PropTypes.object,
		data: _react2.default.PropTypes.object
	},
	renderValue: function renderValue() {
		var value = this.props.data.fields[this.props.col.path];
		if (!value) return;

		return _react2.default.createElement(
			_ItemsTableValue2.default,
			{ to: 'mailto:' + value, padded: true, exterior: true, field: this.props.col.type },
			value
		);
	},
	render: function render() {
		return _react2.default.createElement(
			_ItemsTableCell2.default,
			null,
			this.renderValue()
		);
	}
});

module.exports = EmailColumn;

},{"../../components/ItemsTableCell":84,"../../components/ItemsTableValue":85,"react":undefined}],97:[function(require,module,exports){
'use strict';

var _Field = require('../Field');

var _Field2 = _interopRequireDefault(_Field);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elemental = require('../../../admin/client/App/elemental');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
	TODO:
	- gravatar
	- validate email address
 */

module.exports = _Field2.default.create({
	displayName: 'EmailField',
	propTypes: {
		path: _react.PropTypes.string.isRequired,
		value: _react.PropTypes.string
	},
	statics: {
		type: 'Email'
	},
	renderField: function renderField() {
		return _react2.default.createElement(_elemental.FormInput, {
			name: this.getInputName(this.props.path),
			ref: 'focusTarget',
			value: this.props.value,
			onChange: this.valueChanged,
			autoComplete: 'off',
			type: 'email'
		});
	},
	renderValue: function renderValue() {
		return this.props.value ? _react2.default.createElement(
			_elemental.FormInput,
			{ noedit: true, component: 'a', href: 'mailto:' + this.props.value },
			this.props.value
		) : _react2.default.createElement(_elemental.FormInput, { noedit: true });
	}
});

},{"../../../admin/client/App/elemental":64,"../Field":88,"react":undefined}],98:[function(require,module,exports){
'use strict';

module.exports = require('../text/TextFilter');

},{"../text/TextFilter":119}],99:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ItemsTableCell = require('../../components/ItemsTableCell');

var _ItemsTableCell2 = _interopRequireDefault(_ItemsTableCell);

var _ItemsTableValue = require('../../components/ItemsTableValue');

var _ItemsTableValue2 = _interopRequireDefault(_ItemsTableValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LocalFileColumn = _react2.default.createClass({
	displayName: 'LocalFileColumn',

	renderValue: function renderValue() {
		var value = this.props.data.fields[this.props.col.path];
		if (!value || !value.filename) return;
		return value.filename;
	},
	render: function render() {
		var value = this.props.data.fields[this.props.col.path];
		var href = value && value.url ? value.url : null;
		var label = value && value.filename ? value.filename : null;
		return _react2.default.createElement(
			_ItemsTableCell2.default,
			{ href: href, padded: true, interior: true, field: this.props.col.type },
			_react2.default.createElement(
				_ItemsTableValue2.default,
				null,
				label
			)
		);
	}
});

module.exports = LocalFileColumn;

},{"../../components/ItemsTableCell":84,"../../components/ItemsTableValue":85,"react":undefined}],100:[function(require,module,exports){
'use strict';

var _Field = require('../Field');

var _Field2 = _interopRequireDefault(_Field);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elemental = require('../../../admin/client/App/elemental');

var _FileChangeMessage = require('../../components/FileChangeMessage');

var _FileChangeMessage2 = _interopRequireDefault(_FileChangeMessage);

var _HiddenFileInput = require('../../components/HiddenFileInput');

var _HiddenFileInput2 = _interopRequireDefault(_HiddenFileInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uploadInc = 1000; /**
                      TODO:
                      - Format size of stored file (if present) using bytes package?
                      - Display file type icon? (see LocalFileField)
                      */

var buildInitialState = function buildInitialState(props) {
	return {
		action: null,
		removeExisting: false,
		uploadFieldPath: 'File-' + props.path + '-' + ++uploadInc,
		userSelectedFile: null
	};
};

module.exports = _Field2.default.create({
	propTypes: {
		autoCleanup: _react.PropTypes.bool,
		collapse: _react.PropTypes.bool,
		label: _react.PropTypes.string,
		note: _react.PropTypes.string,
		path: _react.PropTypes.string.isRequired,
		value: _react.PropTypes.shape({
			filename: _react.PropTypes.string
		})
	},
	statics: {
		type: 'File',
		getDefaultValue: function getDefaultValue() {
			return {};
		}
	},
	getInitialState: function getInitialState() {
		return buildInitialState(this.props);
	},
	shouldCollapse: function shouldCollapse() {
		return this.props.collapse && !this.hasExisting();
	},
	componentWillUpdate: function componentWillUpdate(nextProps) {
		// Show the new filename when it's finished uploading
		if (this.props.value.filename !== nextProps.value.filename) {
			this.setState(buildInitialState(nextProps));
		}
	},


	// ==============================
	// HELPERS
	// ==============================

	hasFile: function hasFile() {
		return this.hasExisting() || !!this.state.userSelectedFile;
	},
	hasExisting: function hasExisting() {
		return this.props.value && !!this.props.value.filename;
	},
	getFilename: function getFilename() {
		return this.state.userSelectedFile ? this.state.userSelectedFile.name : this.props.value.filename;
	},


	// ==============================
	// METHODS
	// ==============================

	triggerFileBrowser: function triggerFileBrowser() {
		this.refs.fileInput.clickDomNode();
	},
	handleFileChange: function handleFileChange(event) {
		var userSelectedFile = event.target.files[0];

		this.setState({
			userSelectedFile: userSelectedFile
		});
	},
	handleRemove: function handleRemove(e) {
		var state = {};

		if (this.state.userSelectedFile) {
			state = buildInitialState(this.props);
		} else if (this.hasExisting()) {
			state.removeExisting = true;

			if (this.props.autoCleanup) {
				if (e.altKey) {
					state.action = 'reset';
				} else {
					state.action = 'delete';
				}
			} else {
				if (e.altKey) {
					state.action = 'delete';
				} else {
					state.action = 'reset';
				}
			}
		}

		this.setState(state);
	},
	undoRemove: function undoRemove() {
		this.setState(buildInitialState(this.props));
	},


	// ==============================
	// RENDERERS
	// ==============================

	renderFileNameAndChangeMessage: function renderFileNameAndChangeMessage() {
		var href = this.props.value ? this.props.value.url : undefined;
		return _react2.default.createElement(
			'div',
			null,
			this.hasFile() && !this.state.removeExisting ? _react2.default.createElement(
				_FileChangeMessage2.default,
				{ href: href, target: '_blank' },
				this.getFilename()
			) : null,
			this.renderChangeMessage()
		);
	},
	renderChangeMessage: function renderChangeMessage() {
		if (this.state.userSelectedFile) {
			return _react2.default.createElement(
				_FileChangeMessage2.default,
				{ color: 'success' },
				'Save to Upload'
			);
		} else if (this.state.removeExisting) {
			return _react2.default.createElement(
				_FileChangeMessage2.default,
				{ color: 'danger' },
				'File ',
				this.props.autoCleanup ? 'deleted' : 'removed',
				' - save to confirm'
			);
		} else {
			return null;
		}
	},
	renderClearButton: function renderClearButton() {
		if (this.state.removeExisting) {
			return _react2.default.createElement(
				_elemental.Button,
				{ variant: 'link', onClick: this.undoRemove },
				'Undo Remove'
			);
		} else {
			var clearText;
			if (this.state.userSelectedFile) {
				clearText = 'Cancel Upload';
			} else {
				clearText = this.props.autoCleanup ? 'Delete File' : 'Remove File';
			}
			return _react2.default.createElement(
				_elemental.Button,
				{ variant: 'link', color: 'cancel', onClick: this.handleRemove },
				clearText
			);
		}
	},
	renderActionInput: function renderActionInput() {
		// If the user has selected a file for uploading, we need to point at
		// the upload field. If the file is being deleted, we submit that.
		if (this.state.userSelectedFile || this.state.action) {
			var value = this.state.userSelectedFile ? 'upload:' + this.state.uploadFieldPath : this.state.action === 'delete' ? 'remove' : '';
			return _react2.default.createElement('input', {
				name: this.getInputName(this.props.path),
				type: 'hidden',
				value: value
			});
		} else {
			return null;
		}
	},
	renderUI: function renderUI() {
		var _props = this.props;
		var label = _props.label;
		var note = _props.note;
		var path = _props.path;

		var buttons = _react2.default.createElement(
			'div',
			{ style: this.hasFile() ? { marginTop: '1em' } : null },
			_react2.default.createElement(
				_elemental.Button,
				{ onClick: this.triggerFileBrowser },
				this.hasFile() ? 'Change' : 'Upload',
				' File'
			),
			this.hasFile() && this.renderClearButton()
		);

		return _react2.default.createElement(
			'div',
			{ 'data-field-name': path, 'data-field-type': 'file' },
			_react2.default.createElement(
				_elemental.FormField,
				{ label: label, htmlFor: path },
				this.shouldRenderField() ? _react2.default.createElement(
					'div',
					null,
					this.hasFile() && this.renderFileNameAndChangeMessage(),
					buttons,
					_react2.default.createElement(_HiddenFileInput2.default, {
						key: this.state.uploadFieldPath,
						name: this.state.uploadFieldPath,
						onChange: this.handleFileChange,
						ref: 'fileInput'
					}),
					this.renderActionInput()
				) : _react2.default.createElement(
					'div',
					null,
					this.hasFile() ? this.renderFileNameAndChangeMessage() : _react2.default.createElement(
						_elemental.FormInput,
						{ noedit: true },
						'no file'
					)
				),
				!!note && _react2.default.createElement(_elemental.FormNote, { html: note })
			)
		);
	}
});

},{"../../../admin/client/App/elemental":64,"../../components/FileChangeMessage":82,"../../components/HiddenFileInput":83,"../Field":88,"react":undefined}],101:[function(require,module,exports){
'use strict';

module.exports = require('../cloudinaryimage/CloudinaryImageFilter');

},{"../cloudinaryimage/CloudinaryImageFilter":92}],102:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ItemsTableCell = require('../../components/ItemsTableCell');

var _ItemsTableCell2 = _interopRequireDefault(_ItemsTableCell);

var _ItemsTableValue = require('../../components/ItemsTableValue');

var _ItemsTableValue2 = _interopRequireDefault(_ItemsTableValue);

var _displayName = require('display-name');

var _displayName2 = _interopRequireDefault(_displayName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NameColumn = _react2.default.createClass({
	displayName: 'NameColumn',
	propTypes: {
		col: _react2.default.PropTypes.object,
		data: _react2.default.PropTypes.object,
		linkTo: _react2.default.PropTypes.string
	},
	renderValue: function renderValue() {
		var value = this.props.data.fields[this.props.col.path];
		if (!value || !value.first && !value.last) return '(no name)';
		return (0, _displayName2.default)(value.first, value.last);
	},
	render: function render() {
		return _react2.default.createElement(
			_ItemsTableCell2.default,
			null,
			_react2.default.createElement(
				_ItemsTableValue2.default,
				{ to: this.props.linkTo, padded: true, interior: true, field: this.props.col.type },
				this.renderValue()
			)
		);
	}
});

module.exports = NameColumn;

},{"../../components/ItemsTableCell":84,"../../components/ItemsTableValue":85,"display-name":undefined,"react":undefined}],103:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Field = require('../Field');

var _Field2 = _interopRequireDefault(_Field);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elemental = require('../../../admin/client/App/elemental');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NAME_SHAPE = {
	first: _react.PropTypes.string,
	last: _react.PropTypes.string
};

module.exports = _Field2.default.create({
	displayName: 'NameField',
	statics: {
		type: 'Name',
		getDefaultValue: function getDefaultValue() {
			return {
				first: '',
				last: ''
			};
		}
	},
	propTypes: {
		onChange: _react.PropTypes.func.isRequired,
		path: _react.PropTypes.string.isRequired,
		paths: _react.PropTypes.shape(NAME_SHAPE).isRequired,
		value: _react.PropTypes.shape(NAME_SHAPE).isRequired
	},

	valueChanged: function valueChanged(which, event) {
		var _props = this.props;
		var _props$value = _props.value;
		var value = _props$value === undefined ? {} : _props$value;
		var path = _props.path;
		var onChange = _props.onChange;

		onChange({
			path: path,
			value: _extends({}, value, _defineProperty({}, which, event.target.value))
		});
	},
	changeFirst: function changeFirst(event) {
		return this.valueChanged('first', event);
	},
	changeLast: function changeLast(event) {
		return this.valueChanged('last', event);
	},
	renderValue: function renderValue() {
		var inputStyle = { width: '100%' };
		var _props$value2 = this.props.value;
		var value = _props$value2 === undefined ? {} : _props$value2;


		return _react2.default.createElement(
			_elemental.Grid.Row,
			{ small: 'one-half', gutter: 10 },
			_react2.default.createElement(
				_elemental.Grid.Col,
				null,
				_react2.default.createElement(
					_elemental.FormInput,
					{ noedit: true, style: inputStyle },
					value.first
				)
			),
			_react2.default.createElement(
				_elemental.Grid.Col,
				null,
				_react2.default.createElement(
					_elemental.FormInput,
					{ noedit: true, style: inputStyle },
					value.last
				)
			)
		);
	},
	renderField: function renderField() {
		var _props2 = this.props;
		var _props2$value = _props2.value;
		var value = _props2$value === undefined ? {} : _props2$value;
		var paths = _props2.paths;
		var autoFocus = _props2.autoFocus;

		return _react2.default.createElement(
			_elemental.Grid.Row,
			{ small: 'one-half', gutter: 10 },
			_react2.default.createElement(
				_elemental.Grid.Col,
				null,
				_react2.default.createElement(_elemental.FormInput, {
					autoFocus: autoFocus,
					autoComplete: 'off',
					name: this.getInputName(paths.first),
					onChange: this.changeFirst,
					placeholder: 'First name',
					value: value.first
				})
			),
			_react2.default.createElement(
				_elemental.Grid.Col,
				null,
				_react2.default.createElement(_elemental.FormInput, {
					autoComplete: 'off',
					name: this.getInputName(paths.last),
					onChange: this.changeLast,
					placeholder: 'Last name',
					value: value.last
				})
			)
		);
	}
});

},{"../../../admin/client/App/elemental":64,"../Field":88,"react":undefined}],104:[function(require,module,exports){
'use strict';

module.exports = require('../text/TextFilter');

},{"../text/TextFilter":119}],105:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

var _ItemsTableCell = require('../../components/ItemsTableCell');

var _ItemsTableCell2 = _interopRequireDefault(_ItemsTableCell);

var _ItemsTableValue = require('../../components/ItemsTableValue');

var _ItemsTableValue2 = _interopRequireDefault(_ItemsTableValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NumberColumn = _react2.default.createClass({
	displayName: 'NumberColumn',
	propTypes: {
		col: _react2.default.PropTypes.object,
		data: _react2.default.PropTypes.object
	},
	renderValue: function renderValue() {
		var value = this.props.data.fields[this.props.col.path];
		if (!value || isNaN(value)) return null;

		var formattedValue = this.props.col.path === 'money' ? (0, _numeral2.default)(value).format('$0,0.00') : value;

		return formattedValue;
	},
	render: function render() {
		return _react2.default.createElement(
			_ItemsTableCell2.default,
			null,
			_react2.default.createElement(
				_ItemsTableValue2.default,
				{ field: this.props.col.type },
				this.renderValue()
			)
		);
	}
});

module.exports = NumberColumn;

},{"../../components/ItemsTableCell":84,"../../components/ItemsTableValue":85,"numeral":undefined,"react":undefined}],106:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Field = require('../Field');

var _Field2 = _interopRequireDefault(_Field);

var _elemental = require('../../../admin/client/App/elemental');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _Field2.default.create({
	displayName: 'NumberField',
	statics: {
		type: 'Number'
	},
	valueChanged: function valueChanged(event) {
		var newValue = event.target.value;
		if (/^-?\d*\.?\d*$/.test(newValue)) {
			this.props.onChange({
				path: this.props.path,
				value: newValue
			});
		}
	},
	renderField: function renderField() {
		return _react2.default.createElement(_elemental.FormInput, {
			autoComplete: 'off',
			name: this.getInputName(this.props.path),
			onChange: this.valueChanged,
			ref: 'focusTarget',
			value: this.props.value
		});
	}
});

},{"../../../admin/client/App/elemental":64,"../Field":88,"react":undefined}],107:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _elemental = require('../../../admin/client/App/elemental');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MODE_OPTIONS = [{ label: 'Exactly', value: 'equals' }, { label: 'Greater Than', value: 'gt' }, { label: 'Less Than', value: 'lt' }, { label: 'Between', value: 'between' }];

function getDefaultValue() {
	return {
		mode: MODE_OPTIONS[0].value,
		value: ''
	};
}

var NumberFilter = _react2.default.createClass({
	displayName: 'NumberFilter',

	statics: {
		getDefaultValue: getDefaultValue
	},
	getDefaultProps: function getDefaultProps() {
		return {
			filter: getDefaultValue()
		};
	},
	componentDidMount: function componentDidMount() {
		// focus the text input
		(0, _reactDom.findDOMNode)(this.refs.focusTarget).focus();
	},
	handleChangeBuilder: function handleChangeBuilder(type) {
		var self = this;
		return function handleChange(e) {
			var _self$props = self.props;
			var filter = _self$props.filter;
			var onChange = _self$props.onChange;


			switch (type) {
				case 'minValue':
					onChange({
						mode: filter.mode,
						value: {
							min: e.target.value,
							max: filter.value.max
						}
					});
					break;
				case 'maxValue':
					onChange({
						mode: filter.mode,
						value: {
							min: filter.value.min,
							max: e.target.value
						}
					});
					break;
				case 'value':
					onChange({
						mode: filter.mode,
						value: e.target.value
					});
			}
		};
	},

	// Update the props with this.props.onChange
	updateFilter: function updateFilter(changedProp) {
		this.props.onChange(_extends({}, this.props.filter, changedProp));
	},

	// Update the filter mode
	selectMode: function selectMode(e) {
		var _this = this;

		this.updateFilter({ mode: e.target.value });

		// focus on next tick
		setTimeout(function () {
			(0, _reactDom.findDOMNode)(_this.refs.focusTarget).focus();
		}, 0);
	},
	renderControls: function renderControls(mode) {
		var controls = void 0;
		var field = this.props.field;

		var placeholder = field.label + ' is ' + mode.label.toLowerCase() + '...';

		if (mode.value === 'between') {
			controls = _react2.default.createElement(
				_elemental.Grid.Row,
				{ xsmall: 'one-half', gutter: 10 },
				_react2.default.createElement(
					_elemental.Grid.Col,
					null,
					_react2.default.createElement(_elemental.FormInput, {
						onChange: this.handleChangeBuilder('minValue'),
						placeholder: 'Min.',
						ref: 'focusTarget',
						type: 'number'
					})
				),
				_react2.default.createElement(
					_elemental.Grid.Col,
					null,
					_react2.default.createElement(_elemental.FormInput, {
						onChange: this.handleChangeBuilder('maxValue'),
						placeholder: 'Max.',
						type: 'number'
					})
				)
			);
		} else {
			controls = _react2.default.createElement(_elemental.FormInput, {
				onChange: this.handleChangeBuilder('value'),
				placeholder: placeholder,
				ref: 'focusTarget',
				type: 'number'
			});
		}

		return controls;
	},
	render: function render() {
		var filter = this.props.filter;

		var mode = MODE_OPTIONS.filter(function (i) {
			return i.value === filter.mode;
		})[0];

		return _react2.default.createElement(
			_elemental.Form,
			{ component: 'div' },
			_react2.default.createElement(
				_elemental.FormField,
				null,
				_react2.default.createElement(_elemental.FormSelect, {
					onChange: this.selectMode,
					options: MODE_OPTIONS,
					value: mode.value
				})
			),
			this.renderControls(mode)
		);
	}
});

module.exports = NumberFilter;

},{"../../../admin/client/App/elemental":64,"react":undefined,"react-dom":undefined}],108:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ItemsTableCell = require('../../components/ItemsTableCell');

var _ItemsTableCell2 = _interopRequireDefault(_ItemsTableCell);

var _ItemsTableValue = require('../../components/ItemsTableValue');

var _ItemsTableValue2 = _interopRequireDefault(_ItemsTableValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PasswordColumn = _react2.default.createClass({
	displayName: 'PasswordColumn',
	propTypes: {
		col: _react2.default.PropTypes.object,
		data: _react2.default.PropTypes.object
	},
	renderValue: function renderValue() {
		var value = this.props.data.fields[this.props.col.path];
		return value ? '********' : '';
	},
	render: function render() {
		return _react2.default.createElement(
			_ItemsTableCell2.default,
			null,
			_react2.default.createElement(
				_ItemsTableValue2.default,
				{ field: this.props.col.type },
				this.renderValue()
			)
		);
	}
});

module.exports = PasswordColumn;

},{"../../components/ItemsTableCell":84,"../../components/ItemsTableValue":85,"react":undefined}],109:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Field = require('../Field');

var _Field2 = _interopRequireDefault(_Field);

var _elemental = require('../../../admin/client/App/elemental');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _Field2.default.create({

	displayName: 'PasswordField',
	statics: {
		type: 'Password'
	},

	getInitialState: function getInitialState() {
		return {
			passwordIsSet: this.props.value ? true : false,
			showChangeUI: this.props.mode === 'create' ? true : false,
			password: '',
			confirm: ''
		};
	},
	valueChanged: function valueChanged(which, event) {
		var newState = {};
		newState[which] = event.target.value;
		this.setState(newState);
	},
	showChangeUI: function showChangeUI() {
		var _this = this;

		this.setState({
			showChangeUI: true
		}, function () {
			return _this.focus();
		});
	},
	onCancel: function onCancel() {
		var _this2 = this;

		this.setState({
			showChangeUI: false
		}, function () {
			return _this2.focus();
		});
	},
	renderValue: function renderValue() {
		return _react2.default.createElement(
			_elemental.FormInput,
			{ noedit: true },
			this.props.value ? 'Password Set' : ''
		);
	},
	renderField: function renderField() {
		return this.state.showChangeUI ? this.renderFields() : this.renderChangeButton();
	},
	renderFields: function renderFields() {
		return _react2.default.createElement(
			_elemental.InlineGroup,
			{ block: true },
			_react2.default.createElement(
				_elemental.InlineGroupSection,
				{ grow: true },
				_react2.default.createElement(_elemental.FormInput, {
					autoComplete: 'off',
					name: this.getInputName(this.props.path),
					onChange: this.valueChanged.bind(this, 'password'),
					placeholder: 'New password',
					ref: 'focusTarget',
					type: 'password',
					value: this.state.password
				})
			),
			_react2.default.createElement(
				_elemental.InlineGroupSection,
				{ grow: true },
				_react2.default.createElement(_elemental.FormInput, {
					autoComplete: 'off',
					name: this.getInputName(this.props.paths.confirm),
					onChange: this.valueChanged.bind(this, 'confirm'),
					placeholder: 'Confirm new password', value: this.state.confirm,
					type: 'password'
				})
			),
			this.state.passwordIsSet ? _react2.default.createElement(
				_elemental.InlineGroupSection,
				null,
				_react2.default.createElement(
					_elemental.Button,
					{ onClick: this.onCancel },
					'Cancel'
				)
			) : null
		);
	},
	renderChangeButton: function renderChangeButton() {
		var label = this.state.passwordIsSet ? 'Change Password' : 'Set Password';

		return _react2.default.createElement(
			_elemental.Button,
			{ ref: 'focusTarget', onClick: this.showChangeUI },
			label
		);
	}
});

},{"../../../admin/client/App/elemental":64,"../Field":88,"react":undefined}],110:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elemental = require('../../../admin/client/App/elemental');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EXISTS_OPTIONS = [{ label: 'Is Set', value: true }, { label: 'Is NOT Set', value: false }];

function getDefaultValue() {
	return {
		exists: true
	};
}

var PasswordFilter = _react2.default.createClass({
	displayName: 'PasswordFilter',

	propTypes: {
		filter: _react2.default.PropTypes.shape({
			exists: _react2.default.PropTypes.oneOf(EXISTS_OPTIONS.map(function (i) {
				return i.value;
			}))
		})
	},
	statics: {
		getDefaultValue: getDefaultValue
	},
	getDefaultProps: function getDefaultProps() {
		return {
			filter: getDefaultValue()
		};
	},
	toggleExists: function toggleExists(value) {
		this.props.onChange({ exists: value });
	},
	render: function render() {
		var filter = this.props.filter;


		return _react2.default.createElement(_elemental.SegmentedControl, {
			equalWidthSegments: true,
			onChange: this.toggleExists,
			options: EXISTS_OPTIONS,
			value: filter.exists
		});
	}
});

module.exports = PasswordFilter;

},{"../../../admin/client/App/elemental":64,"react":undefined}],111:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ItemsTableCell = require('../../components/ItemsTableCell');

var _ItemsTableCell2 = _interopRequireDefault(_ItemsTableCell);

var _ItemsTableValue = require('../../components/ItemsTableValue');

var _ItemsTableValue2 = _interopRequireDefault(_ItemsTableValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moreIndicatorStyle = {
	color: '#bbb',
	fontSize: '.8rem',
	fontWeight: 500,
	marginLeft: 8
};

var RelationshipColumn = _react2.default.createClass({
	displayName: 'RelationshipColumn',
	propTypes: {
		col: _react2.default.PropTypes.object,
		data: _react2.default.PropTypes.object
	},
	renderMany: function renderMany(value) {
		if (!value || !value.length) return;
		var refList = this.props.col.field.refList;
		var items = [];
		for (var i = 0; i < 3; i++) {
			if (!value[i]) break;
			if (i) {
				items.push(_react2.default.createElement(
					'span',
					{ key: 'comma' + i },
					', '
				));
			}
			items.push(_react2.default.createElement(
				_ItemsTableValue2.default,
				{ interior: true, truncate: false, key: 'anchor' + i, to: Keystone.adminPath + '/' + refList.path + '/' + value[i].id },
				value[i].name
			));
		}
		if (value.length > 3) {
			items.push(_react2.default.createElement(
				'span',
				{ key: 'more', style: moreIndicatorStyle },
				'[...',
				value.length - 3,
				' more]'
			));
		}
		return _react2.default.createElement(
			_ItemsTableValue2.default,
			{ field: this.props.col.type },
			items
		);
	},
	renderValue: function renderValue(value) {
		if (!value) return;
		var refList = this.props.col.field.refList;
		return _react2.default.createElement(
			_ItemsTableValue2.default,
			{ to: Keystone.adminPath + '/' + refList.path + '/' + value.id, padded: true, interior: true, field: this.props.col.type },
			value.name
		);
	},
	render: function render() {
		var value = this.props.data.fields[this.props.col.path];
		var many = this.props.col.field.many;
		return _react2.default.createElement(
			_ItemsTableCell2.default,
			null,
			many ? this.renderMany(value) : this.renderValue(value)
		);
	}
});

module.exports = RelationshipColumn;

},{"../../components/ItemsTableCell":84,"../../components/ItemsTableValue":85,"react":undefined}],112:[function(require,module,exports){
'use strict';

var _async = require('async');

var _async2 = _interopRequireDefault(_async);

var _Field = require('../Field');

var _Field2 = _interopRequireDefault(_Field);

var _lists = require('../../../admin/client/utils/lists');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _xhr = require('xhr');

var _xhr2 = _interopRequireDefault(_xhr);

var _elemental = require('../../../admin/client/App/elemental');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function compareValues(current, next) {
	var currentLength = current ? current.length : 0;
	var nextLength = next ? next.length : 0;
	if (currentLength !== nextLength) return false;
	for (var i = 0; i < currentLength; i++) {
		if (current[i] !== next[i]) return false;
	}
	return true;
}

module.exports = _Field2.default.create({

	displayName: 'RelationshipField',
	statics: {
		type: 'Relationship'
	},

	getInitialState: function getInitialState() {
		return {
			value: null,
			createIsOpen: false
		};
	},
	componentDidMount: function componentDidMount() {
		this._itemsCache = {};
		this.loadValue(this.props.value);
	},
	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		if (nextProps.value === this.props.value || nextProps.many && compareValues(this.props.value, nextProps.value)) return;
		this.loadValue(nextProps.value);
	},
	shouldCollapse: function shouldCollapse() {
		if (this.props.many) {
			// many:true relationships have an Array for a value
			return this.props.collapse && !this.props.value.length;
		}
		return this.props.collapse && !this.props.value;
	},
	buildFilters: function buildFilters() {
		var _this = this;

		var filters = {};

		_lodash2.default.forEach(this.props.filters, function (value, key) {
			if (typeof value === 'string' && value[0] === ':') {
				var fieldName = value.slice(1);

				var val = _this.props.values[fieldName];
				if (val) {
					filters[key] = val;
					return;
				}

				// check if filtering by id and item was already saved
				if (fieldName === ':_id' && Keystone.item) {
					filters[key] = Keystone.item.id;
					return;
				}
			} else {
				filters[key] = value;
			}
		}, this);

		var parts = [];

		_lodash2.default.forEach(filters, function (val, key) {
			parts.push('filters[' + key + '][value]=' + encodeURIComponent(val));
		});

		return parts.join('&');
	},
	cacheItem: function cacheItem(item) {
		item.href = Keystone.adminPath + '/' + this.props.refList.path + '/' + item.id;
		this._itemsCache[item.id] = item;
	},
	loadValue: function loadValue(values) {
		var _this2 = this;

		if (!values) {
			return this.setState({
				loading: false,
				value: null
			});
		};
		values = Array.isArray(values) ? values : values.split(',');
		var cachedValues = values.map(function (i) {
			return _this2._itemsCache[i];
		}).filter(function (i) {
			return i;
		});
		if (cachedValues.length === values.length) {
			this.setState({
				loading: false,
				value: this.props.many ? cachedValues : cachedValues[0]
			});
			return;
		}
		this.setState({
			loading: true,
			value: null
		});
		_async2.default.map(values, function (value, done) {
			(0, _xhr2.default)({
				url: Keystone.adminPath + '/api/' + _this2.props.refList.path + '/' + value + '?basic',
				responseType: 'json'
			}, function (err, resp, data) {
				if (err || !data) return done(err);
				_this2.cacheItem(data);
				done(err, data);
			});
		}, function (err, expanded) {
			if (!_this2.isMounted()) return;
			_this2.setState({
				loading: false,
				value: _this2.props.many ? expanded : expanded[0]
			});
		});
	},


	// NOTE: this seems like the wrong way to add options to the Select
	loadOptionsCallback: {},
	loadOptions: function loadOptions(input, callback) {
		var _this3 = this;

		// NOTE: this seems like the wrong way to add options to the Select
		this.loadOptionsCallback = callback;
		var filters = this.buildFilters();
		(0, _xhr2.default)({
			url: Keystone.adminPath + '/api/' + this.props.refList.path + '?basic&search=' + input + '&' + filters,
			responseType: 'json'
		}, function (err, resp, data) {
			if (err) {
				console.error('Error loading items:', err);
				return callback(null, []);
			}
			data.results.forEach(_this3.cacheItem);
			callback(null, {
				options: data.results,
				complete: data.results.length === data.count
			});
		});
	},
	valueChanged: function valueChanged(value) {
		this.props.onChange({
			path: this.props.path,
			value: value
		});
	},
	openCreate: function openCreate() {
		this.setState({
			createIsOpen: true
		});
	},
	closeCreate: function closeCreate() {
		this.setState({
			createIsOpen: false
		});
	},
	onCreate: function onCreate(item) {
		var _this4 = this;

		this.cacheItem(item);
		if (Array.isArray(this.state.value)) {
			// For many relationships, append the new item to the end
			var values = this.state.value.map(function (item) {
				return item.id;
			});
			values.push(item.id);
			this.valueChanged(values.join(','));
		} else {
			this.valueChanged(item.id);
		}

		// NOTE: this seems like the wrong way to add options to the Select
		this.loadOptionsCallback(null, {
			complete: true,
			options: Object.keys(this._itemsCache).map(function (k) {
				return _this4._itemsCache[k];
			})
		});
		this.closeCreate();
	},
	renderSelect: function renderSelect(noedit) {
		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement('input', { type: 'text', style: { position: 'absolute', width: 1, height: 1, zIndex: -1, opacity: 0 }, tabIndex: '-1' }),
			_react2.default.createElement(_reactSelect2.default.Async, {
				multi: this.props.many,
				disabled: noedit,
				loadOptions: this.loadOptions,
				labelKey: 'name',
				name: this.getInputName(this.props.path),
				onChange: this.valueChanged,
				simpleValue: true,
				value: this.state.value,
				valueKey: 'id'
			})
		);
	},
	renderInputGroup: function renderInputGroup() {
		// TODO: find better solution
		//   when importing the CreateForm using: import CreateForm from '../../../admin/client/App/shared/CreateForm';
		//   CreateForm was imported as a blank object. This stack overflow post suggested lazilly requiring it:
		// http://stackoverflow.com/questions/29807664/cyclic-dependency-returns-empty-object-in-react-native
		// TODO: Implement this somewhere higher in the app, it breaks the encapsulation of the RelationshipField component
		var CreateForm = require('../../../admin/client/App/shared/CreateForm');
		return _react2.default.createElement(
			_elemental.InlineGroup,
			{ block: true },
			_react2.default.createElement(
				_elemental.InlineGroupSection,
				{ grow: true },
				this.renderSelect()
			),
			_react2.default.createElement(
				_elemental.InlineGroupSection,
				null,
				_react2.default.createElement(
					_elemental.Button,
					{ onClick: this.openCreate },
					'+'
				)
			),
			_react2.default.createElement(CreateForm, {
				list: _lists.listsByKey[this.props.refList.key],
				isOpen: this.state.createIsOpen,
				onCreate: this.onCreate,
				onCancel: this.closeCreate })
		);
	},
	renderValue: function renderValue() {
		var many = this.props.many;
		var value = this.state.value;

		var props = {
			children: value ? value.name : null,
			component: value ? 'a' : 'span',
			href: value ? value.href : null,
			noedit: true
		};

		return many ? this.renderSelect(true) : _react2.default.createElement(_elemental.FormInput, props);
	},
	renderField: function renderField() {
		if (this.props.createInline) {
			return this.renderInputGroup();
		} else {
			return this.renderSelect();
		}
	}
});

},{"../../../admin/client/App/elemental":64,"../../../admin/client/App/shared/CreateForm":66,"../../../admin/client/utils/lists":78,"../Field":88,"async":undefined,"lodash":undefined,"react":undefined,"react-select":undefined,"xhr":undefined}],113:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _async = require('async');

var _async2 = _interopRequireDefault(_async);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _xhr = require('xhr');

var _xhr2 = _interopRequireDefault(_xhr);

var _elemental = require('../../../admin/client/App/elemental');

var _PopoutList = require('../../../admin/client/App/shared/Popout/PopoutList');

var _PopoutList2 = _interopRequireDefault(_PopoutList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INVERTED_OPTIONS = [{ label: 'Linked To', value: false }, { label: 'NOT Linked To', value: true }];

function getDefaultValue() {
	return {
		inverted: INVERTED_OPTIONS[0].value,
		value: []
	};
}

var RelationshipFilter = _react2.default.createClass({
	displayName: 'RelationshipFilter',

	propTypes: {
		field: _react2.default.PropTypes.object,
		filter: _react2.default.PropTypes.shape({
			inverted: _react2.default.PropTypes.bool,
			value: _react2.default.PropTypes.array
		}),
		onHeightChange: _react2.default.PropTypes.func
	},
	statics: {
		getDefaultValue: getDefaultValue
	},
	getDefaultProps: function getDefaultProps() {
		return {
			filter: getDefaultValue()
		};
	},
	getInitialState: function getInitialState() {
		return {
			searchIsLoading: false,
			searchResults: [],
			searchString: '',
			selectedItems: [],
			valueIsLoading: true
		};
	},
	componentDidMount: function componentDidMount() {
		this._itemsCache = {};
		this.loadSearchResults(true);
	},
	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		if (nextProps.filter.value !== this.props.filter.value) {
			this.populateValue(nextProps.filter.value);
		}
	},
	isLoading: function isLoading() {
		return this.state.searchIsLoading || this.state.valueIsLoading;
	},
	populateValue: function populateValue(value) {
		var _this = this;

		_async2.default.map(value, function (id, next) {
			if (_this._itemsCache[id]) return next(null, _this._itemsCache[id]);
			(0, _xhr2.default)({
				url: Keystone.adminPath + '/api/' + _this.props.field.refList.path + '/' + id + '?basic',
				responseType: 'json'
			}, function (err, resp, data) {
				if (err || !data) return next(err);
				_this.cacheItem(data);
				next(err, data);
			});
		}, function (err, items) {
			if (err) {
				// TODO: Handle errors better
				console.error('Error loading items:', err);
			}
			_this.setState({
				valueIsLoading: false,
				selectedItems: items || []
			}, function () {
				(0, _reactDom.findDOMNode)(_this.refs.focusTarget).focus();
			});
		});
	},
	cacheItem: function cacheItem(item) {
		this._itemsCache[item.id] = item;
	},
	buildFilters: function buildFilters() {
		var filters = {};
		_lodash2.default.forEach(this.props.field.filters, function (value, key) {
			if (value[0] === ':') return;
			filters[key] = value;
		}, this);

		var parts = [];
		_lodash2.default.forEach(filters, function (val, key) {
			parts.push('filters[' + key + '][value]=' + encodeURIComponent(val));
		});

		return parts.join('&');
	},
	loadSearchResults: function loadSearchResults(thenPopulateValue) {
		var _this2 = this;

		var searchString = this.state.searchString;
		var filters = this.buildFilters();
		(0, _xhr2.default)({
			url: Keystone.adminPath + '/api/' + this.props.field.refList.path + '?basic&search=' + searchString + '&' + filters,
			responseType: 'json'
		}, function (err, resp, data) {
			if (err) {
				// TODO: Handle errors better
				console.error('Error loading items:', err);
				_this2.setState({
					searchIsLoading: false
				});
				return;
			}
			data.results.forEach(_this2.cacheItem);
			if (thenPopulateValue) {
				_this2.populateValue(_this2.props.filter.value);
			}
			if (searchString !== _this2.state.searchString) return;
			_this2.setState({
				searchIsLoading: false,
				searchResults: data.results
			}, _this2.updateHeight);
		});
	},
	updateHeight: function updateHeight() {
		if (this.props.onHeightChange) {
			this.props.onHeightChange(this.refs.container.offsetHeight);
		}
	},
	toggleInverted: function toggleInverted(inverted) {
		this.updateFilter({ inverted: inverted });
	},
	updateSearch: function updateSearch(e) {
		this.setState({ searchString: e.target.value }, this.loadSearchResults);
	},
	selectItem: function selectItem(item) {
		var value = this.props.filter.value.concat(item.id);
		this.updateFilter({ value: value });
	},
	removeItem: function removeItem(item) {
		var value = this.props.filter.value.filter(function (i) {
			return i !== item.id;
		});
		this.updateFilter({ value: value });
	},
	updateFilter: function updateFilter(value) {
		this.props.onChange(_extends({}, this.props.filter, value));
	},
	renderItems: function renderItems(items, selected) {
		var _this3 = this;

		var itemIconHover = selected ? 'x' : 'check';

		return items.map(function (item, i) {
			return _react2.default.createElement(_PopoutList2.default.Item, {
				key: 'item-' + i + '-' + item.id,
				icon: 'dash',
				iconHover: itemIconHover,
				label: item.name,
				onClick: function onClick() {
					if (selected) _this3.removeItem(item);else _this3.selectItem(item);
				}
			});
		});
	},
	render: function render() {
		var _this4 = this;

		var selectedItems = this.state.selectedItems;
		var searchResults = this.state.searchResults.filter(function (i) {
			return _this4.props.filter.value.indexOf(i.id) === -1;
		});
		var placeholder = this.isLoading() ? 'Loading...' : 'Find a ' + this.props.field.label + '...';
		return _react2.default.createElement(
			'div',
			{ ref: 'container' },
			_react2.default.createElement(
				_elemental.FormField,
				null,
				_react2.default.createElement(_elemental.SegmentedControl, { equalWidthSegments: true, options: INVERTED_OPTIONS, value: this.props.filter.inverted, onChange: this.toggleInverted })
			),
			_react2.default.createElement(
				_elemental.FormField,
				{ style: { borderBottom: '1px dashed rgba(0,0,0,0.1)', paddingBottom: '1em' } },
				_react2.default.createElement(_elemental.FormInput, { autoFocus: true, ref: 'focusTarget', value: this.state.searchString, onChange: this.updateSearch, placeholder: placeholder })
			),
			selectedItems.length ? _react2.default.createElement(
				_PopoutList2.default,
				null,
				_react2.default.createElement(
					_PopoutList2.default.Heading,
					null,
					'Selected'
				),
				this.renderItems(selectedItems, true)
			) : null,
			searchResults.length ? _react2.default.createElement(
				_PopoutList2.default,
				null,
				_react2.default.createElement(
					_PopoutList2.default.Heading,
					{ style: selectedItems.length ? { marginTop: '2em' } : null },
					'Items'
				),
				this.renderItems(searchResults)
			) : null
		);
	}
});

module.exports = RelationshipFilter;

},{"../../../admin/client/App/elemental":64,"../../../admin/client/App/shared/Popout/PopoutList":69,"async":undefined,"lodash":undefined,"react":undefined,"react-dom":undefined,"xhr":undefined}],114:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ItemsTableCell = require('../../components/ItemsTableCell');

var _ItemsTableCell2 = _interopRequireDefault(_ItemsTableCell);

var _ItemsTableValue = require('../../components/ItemsTableValue');

var _ItemsTableValue2 = _interopRequireDefault(_ItemsTableValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectColumn = _react2.default.createClass({
	displayName: 'SelectColumn',
	propTypes: {
		col: _react2.default.PropTypes.object,
		data: _react2.default.PropTypes.object,
		linkTo: _react2.default.PropTypes.string
	},
	getValue: function getValue() {
		var value = this.props.data.fields[this.props.col.path];
		var option = this.props.col.field.ops.filter(function (i) {
			return i.value === value;
		})[0];

		return option ? option.label : null;
	},
	render: function render() {
		var value = this.getValue();
		var empty = !value && this.props.linkTo ? true : false;
		return _react2.default.createElement(
			_ItemsTableCell2.default,
			null,
			_react2.default.createElement(
				_ItemsTableValue2.default,
				{ field: this.props.col.type, to: this.props.linkTo, empty: empty },
				value
			)
		);
	}
});

module.exports = SelectColumn;

},{"../../components/ItemsTableCell":84,"../../components/ItemsTableValue":85,"react":undefined}],115:[function(require,module,exports){
'use strict';

var _Field = require('../Field');

var _Field2 = _interopRequireDefault(_Field);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _elemental = require('../../../admin/client/App/elemental');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * TODO:
 * - Custom path support
 */

module.exports = _Field2.default.create({

	displayName: 'SelectField',
	statics: {
		type: 'Select'
	},

	valueChanged: function valueChanged(newValue) {
		// TODO: This should be natively handled by the Select component
		if (this.props.numeric && typeof newValue === 'string') {
			newValue = newValue ? Number(newValue) : undefined;
		}
		this.props.onChange({
			path: this.props.path,
			value: newValue
		});
	},
	renderValue: function renderValue() {
		var _props = this.props;
		var ops = _props.ops;
		var value = _props.value;

		var selected = ops.find(function (opt) {
			return opt.value === value;
		});

		return _react2.default.createElement(
			_elemental.FormInput,
			{ noedit: true },
			selected ? selected.label : null
		);
	},
	renderField: function renderField() {
		var _props2 = this.props;
		var numeric = _props2.numeric;
		var ops = _props2.ops;
		var path = _props2.path;
		var val = _props2.value;

		// TODO: This should be natively handled by the Select component

		var options = numeric ? ops.map(function (i) {
			return { label: i.label, value: String(i.value) };
		}) : ops;
		var value = typeof val === 'number' ? String(val) : val;

		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement('input', { type: 'text', style: { position: 'absolute', width: 1, height: 1, zIndex: -1, opacity: 0 }, tabIndex: '-1' }),
			_react2.default.createElement(_reactSelect2.default, {
				simpleValue: true,
				name: this.getInputName(path),
				value: value,
				options: options,
				onChange: this.valueChanged
			})
		);
	}
});

},{"../../../admin/client/App/elemental":64,"../Field":88,"react":undefined,"react-select":undefined}],116:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _vkey = require('vkey');

var _vkey2 = _interopRequireDefault(_vkey);

var _elemental = require('../../../admin/client/App/elemental');

var _PopoutList = require('../../../admin/client/App/shared/Popout/PopoutList');

var _PopoutList2 = _interopRequireDefault(_PopoutList);

var _Kbd = require('../../../admin/client/App/shared/Kbd');

var _Kbd2 = _interopRequireDefault(_Kbd);

var _bindFunctions = require('../../utils/bindFunctions');

var _bindFunctions2 = _interopRequireDefault(_bindFunctions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var INVERTED_OPTIONS = [{ label: 'Matches', value: false }, { label: 'Does NOT Match', value: true }];

function getDefaultValue() {
	return {
		inverted: INVERTED_OPTIONS[0].value,
		value: []
	};
}

var FilterOption = function (_Component) {
	_inherits(FilterOption, _Component);

	function FilterOption() {
		_classCallCheck(this, FilterOption);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FilterOption).call(this));

		_bindFunctions2.default.call(_this, ['handleClick']);
		return _this;
	}

	_createClass(FilterOption, [{
		key: 'handleClick',
		value: function handleClick() {
			var _props = this.props;
			var option = _props.option;
			var selected = _props.selected;

			this.props.onClick(option, selected);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props2 = this.props;
			var option = _props2.option;
			var selected = _props2.selected;

			return _react2.default.createElement(_PopoutList2.default.Item, {
				icon: selected ? 'check' : 'dash',
				isSelected: selected,
				label: option.label,
				onClick: this.handleClick
			});
		}
	}]);

	return FilterOption;
}(_react.Component);

var SelectFilter = function (_Component2) {
	_inherits(SelectFilter, _Component2);

	function SelectFilter() {
		_classCallCheck(this, SelectFilter);

		var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(SelectFilter).call(this));

		_bindFunctions2.default.call(_this2, ['detectOS', 'handleClick', 'handleKeyDown', 'handleKeyUp', 'removeOption', 'selectOption', 'toggleAllOptions', 'toggleInverted', 'updateFilter']);

		_this2.state = { metaDown: false };
		return _this2;
	}

	_createClass(SelectFilter, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.detectOS();
			document.body.addEventListener('keydown', this.handleKeyDown, false);
			document.body.addEventListener('keyup', this.handleKeyUp, false);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			document.body.removeEventListener('keydown', this.handleKeyDown);
			document.body.removeEventListener('keyup', this.handleKeyUp);
		}

		// ==============================
		// METHODS
		// ==============================

		// TODO this should probably be moved to the main App component and stored
		// in context for other components to subscribe to when required

	}, {
		key: 'detectOS',
		value: function detectOS() {
			var osName = 'Unknown OS';

			if (navigator.appVersion.includes('Win')) osName = 'Windows';
			if (navigator.appVersion.includes('Mac')) osName = 'MacOS';
			if (navigator.appVersion.includes('X11')) osName = 'UNIX';
			if (navigator.appVersion.includes('Linux')) osName = 'Linux';

			this.setState({ osName: osName });
		}
	}, {
		key: 'handleKeyDown',
		value: function handleKeyDown(e) {
			if (_vkey2.default[e.keyCode] !== '<meta>') return;

			this.setState({ metaDown: true });
		}
	}, {
		key: 'handleKeyUp',
		value: function handleKeyUp(e) {
			if (_vkey2.default[e.keyCode] !== '<meta>') return;

			this.setState({ metaDown: false });
		}
	}, {
		key: 'toggleInverted',
		value: function toggleInverted(inverted) {
			this.updateFilter({ inverted: inverted });
		}
	}, {
		key: 'toggleAllOptions',
		value: function toggleAllOptions() {
			var _props3 = this.props;
			var field = _props3.field;
			var filter = _props3.filter;


			if (filter.value.length < field.ops.length) {
				this.updateFilter({ value: field.ops.map(function (i) {
						return i.value;
					}) });
			} else {
				this.updateFilter({ value: [] });
			}
		}
	}, {
		key: 'selectOption',
		value: function selectOption(option) {
			var value = this.state.metaDown ? this.props.filter.value.concat(option.value) : [option.value];

			this.updateFilter({ value: value });
		}
	}, {
		key: 'removeOption',
		value: function removeOption(option) {
			var value = this.state.metaDown ? this.props.filter.value.filter(function (i) {
				return i !== option.value;
			}) : [option.value];

			this.updateFilter({ value: value });
		}
	}, {
		key: 'handleClick',
		value: function handleClick(option, selected) {
			selected ? this.removeOption(option) : this.selectOption(option);
		}
	}, {
		key: 'updateFilter',
		value: function updateFilter(value) {
			this.props.onChange(_extends({}, this.props.filter, value));
		}

		// ==============================
		// RENDERERS
		// ==============================

	}, {
		key: 'renderOptions',
		value: function renderOptions() {
			var _this3 = this;

			return this.props.field.ops.map(function (option, i) {
				var selected = _this3.props.filter.value.indexOf(option.value) > -1;
				return _react2.default.createElement(FilterOption, {
					key: 'item-' + i + '-' + option.value,
					option: option,
					selected: selected,
					onClick: _this3.handleClick
				});
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _props4 = this.props;
			var field = _props4.field;
			var filter = _props4.filter;

			var indeterminate = filter.value.length < field.ops.length;

			var metaKeyLabel = this.state.osName === 'MacOS' ? 'cmd' : 'ctrl';

			var fieldStyles = {
				alignItems: 'center',
				borderBottom: '1px dashed rgba(0,0,0,0.1)',
				display: 'flex',
				justifyContent: 'space-between',
				marginBottom: '1em',
				paddingBottom: '1em'
			};

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_elemental.FormField,
					null,
					_react2.default.createElement(_elemental.SegmentedControl, {
						equalWidthSegments: true,
						onChange: this.toggleInverted,
						options: INVERTED_OPTIONS,
						value: filter.inverted
					})
				),
				_react2.default.createElement(
					'div',
					{ style: fieldStyles },
					_react2.default.createElement(
						_elemental.Button,
						{ size: 'xsmall', onClick: this.toggleAllOptions, style: { padding: 0, width: 50 } },
						indeterminate ? 'All' : 'None'
					),
					_react2.default.createElement(
						_elemental.FormNote,
						{ style: { margin: 0 } },
						'Hold ',
						_react2.default.createElement(
							_Kbd2.default,
							null,
							metaKeyLabel
						),
						' to select multiple options'
					)
				),
				this.renderOptions()
			);
		}
	}]);

	return SelectFilter;
}(_react.Component);

;

SelectFilter.propTypes = {
	field: _react.PropTypes.object,
	filter: _react.PropTypes.shape({
		inverted: _react.PropTypes.boolean,
		value: _react.PropTypes.array
	})
};
SelectFilter.getDefaultValue = getDefaultValue;
SelectFilter.defaultProps = {
	filter: getDefaultValue()
};

module.exports = SelectFilter;

},{"../../../admin/client/App/elemental":64,"../../../admin/client/App/shared/Kbd":68,"../../../admin/client/App/shared/Popout/PopoutList":69,"../../utils/bindFunctions":120,"react":undefined,"vkey":undefined}],117:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ItemsTableCell = require('../../components/ItemsTableCell');

var _ItemsTableCell2 = _interopRequireDefault(_ItemsTableCell);

var _ItemsTableValue = require('../../components/ItemsTableValue');

var _ItemsTableValue2 = _interopRequireDefault(_ItemsTableValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextColumn = _react2.default.createClass({
	displayName: 'TextColumn',
	propTypes: {
		col: _react2.default.PropTypes.object,
		data: _react2.default.PropTypes.object,
		linkTo: _react2.default.PropTypes.string
	},
	getValue: function getValue() {
		// cropping text is important for textarea, which uses this column
		var value = this.props.data.fields[this.props.col.path];
		return value ? value.substr(0, 100) : null;
	},
	render: function render() {
		var value = this.getValue();
		var empty = !value && this.props.linkTo ? true : false;
		var className = this.props.col.field.monospace ? 'ItemList__value--monospace' : undefined;
		return _react2.default.createElement(
			_ItemsTableCell2.default,
			null,
			_react2.default.createElement(
				_ItemsTableValue2.default,
				{ className: className, to: this.props.linkTo, empty: empty, padded: true, interior: true, field: this.props.col.type },
				value
			)
		);
	}
});

module.exports = TextColumn;

},{"../../components/ItemsTableCell":84,"../../components/ItemsTableValue":85,"react":undefined}],118:[function(require,module,exports){
'use strict';

var _Field = require('../Field');

var _Field2 = _interopRequireDefault(_Field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _Field2.default.create({
	displayName: 'TextField',
	statics: {
		type: 'Text'
	}
});

},{"../Field":88}],119:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _elemental = require('../../../admin/client/App/elemental');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INVERTED_OPTIONS = [{ label: 'Matches', value: false }, { label: 'Does NOT Match', value: true }];

var MODE_OPTIONS = [{ label: 'Contains', value: 'contains' }, { label: 'Exactly', value: 'exactly' }, { label: 'Begins with', value: 'beginsWith' }, { label: 'Ends with', value: 'endsWith' }];

function getDefaultValue() {
	return {
		mode: MODE_OPTIONS[0].value,
		inverted: INVERTED_OPTIONS[0].value,
		value: ''
	};
}

var TextFilter = _react2.default.createClass({
	displayName: 'TextFilter',

	propTypes: {
		filter: _react2.default.PropTypes.shape({
			mode: _react2.default.PropTypes.oneOf(MODE_OPTIONS.map(function (i) {
				return i.value;
			})),
			inverted: _react2.default.PropTypes.boolean,
			value: _react2.default.PropTypes.string
		})
	},
	statics: {
		getDefaultValue: getDefaultValue
	},
	getDefaultProps: function getDefaultProps() {
		return {
			filter: getDefaultValue()
		};
	},
	updateFilter: function updateFilter(value) {
		this.props.onChange(_extends({}, this.props.filter, value));
	},
	selectMode: function selectMode(e) {
		var mode = e.target.value;
		this.updateFilter({ mode: mode });
		(0, _reactDom.findDOMNode)(this.refs.focusTarget).focus();
	},
	toggleInverted: function toggleInverted(inverted) {
		this.updateFilter({ inverted: inverted });
		(0, _reactDom.findDOMNode)(this.refs.focusTarget).focus();
	},
	updateValue: function updateValue(e) {
		this.updateFilter({ value: e.target.value });
	},
	render: function render() {
		var _props = this.props;
		var field = _props.field;
		var filter = _props.filter;

		var mode = MODE_OPTIONS.filter(function (i) {
			return i.value === filter.mode;
		})[0];
		var placeholder = field.label + ' ' + mode.label.toLowerCase() + '...';

		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				_elemental.FormField,
				null,
				_react2.default.createElement(_elemental.SegmentedControl, {
					equalWidthSegments: true,
					onChange: this.toggleInverted,
					options: INVERTED_OPTIONS,
					value: filter.inverted
				})
			),
			_react2.default.createElement(
				_elemental.FormField,
				null,
				_react2.default.createElement(_elemental.FormSelect, {
					onChange: this.selectMode,
					options: MODE_OPTIONS,
					value: mode.value
				})
			),
			_react2.default.createElement(_elemental.FormInput, {
				autoFocus: true,
				onChange: this.updateValue,
				placeholder: placeholder,
				ref: 'focusTarget',
				value: this.props.filter.value
			})
		);
	}
});

module.exports = TextFilter;

},{"../../../admin/client/App/elemental":64,"react":undefined,"react-dom":undefined}],120:[function(require,module,exports){
"use strict";

/*
	Tidier binding for component methods to Classes
	===============================================

	constructor() {
		super();
		bindFunctions.call(this, ['handleClick', 'handleOther']);
	}
*/
module.exports = function bindFunctions(functions) {
	var _this = this;

	functions.forEach(function (f) {
		return _this[f] = _this[f].bind(_this);
	});
};

},{}],121:[function(require,module,exports){
'use strict';

var ExMatch = require('expression-match'); // Matches objects with expressions

/**
 * Checks if something is an object
 *
 * @param  {Any} arg   The something we want to check the type of
 * @return {Boolean} If arg is an object or not
 */
function isObject(arg) {
  return Object.prototype.toString.call(arg) === '[object Object]';
};

/**
 * Evaluates the visibility of a field based on its dependencies and their values
 *
 * @param  {Object|Any} dependsOn The dependsOn variable we get from the field
 * @param  {Object}		values    The values currently in the fields
 * @return {Boolean}			  If the current field should be displayed based
 *                          	  on it's dependencies and their values
 */
module.exports = function evalDependsOn(dependsOn, values) {
  if (!isObject(dependsOn) || !Object.keys(dependsOn).length) {
    return true;
  }

  // Checks if the current field should be displayed, based on the values of
  // other fields and the dependsOn configuration of this field
  var Match = new ExMatch(dependsOn, values, false);
  return Match.match();
};

},{"expression-match":undefined}],122:[function(require,module,exports){
'use strict';
/* eslint-disable no-unused-vars */

var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc'); // eslint-disable-line
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (e) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (Object.getOwnPropertySymbols) {
			symbols = Object.getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

},{}],"FieldTypes":[function(require,module,exports){
"use strict";

exports.Columns = {
  text: require("../../fields/types/text/TextColumn"),
  boolean: require("../../fields/types/boolean/BooleanColumn"),
  relationship: require("../../fields/types/relationship/RelationshipColumn"),
  number: require("../../fields/types/number/NumberColumn"),
  file: require("../../fields/types/file/FileColumn"),
  select: require("../../fields/types/select/SelectColumn"),
  name: require("../../fields/types/name/NameColumn"),
  email: require("../../fields/types/email/EmailColumn"),
  password: require("../../fields/types/password/PasswordColumn"),
  code: require("../../fields/types/code/CodeColumn"),
  id: require("../../fields/components/columns/IdColumn"),
  __unrecognised__: require("../../fields/components/columns/InvalidColumn")
};
exports.Fields = {
  text: require("../../fields/types/text/TextField"),
  boolean: require("../../fields/types/boolean/BooleanField"),
  relationship: require("../../fields/types/relationship/RelationshipField"),
  number: require("../../fields/types/number/NumberField"),
  file: require("../../fields/types/file/FileField"),
  select: require("../../fields/types/select/SelectField"),
  name: require("../../fields/types/name/NameField"),
  email: require("../../fields/types/email/EmailField"),
  password: require("../../fields/types/password/PasswordField"),
  code: require("../../fields/types/code/CodeField")
};
exports.Filters = {
  text: require("../../fields/types/text/TextFilter"),
  boolean: require("../../fields/types/boolean/BooleanFilter"),
  relationship: require("../../fields/types/relationship/RelationshipFilter"),
  number: require("../../fields/types/number/NumberFilter"),
  file: require("../../fields/types/file/FileFilter"),
  select: require("../../fields/types/select/SelectFilter"),
  name: require("../../fields/types/name/NameFilter"),
  email: require("../../fields/types/email/EmailFilter"),
  password: require("../../fields/types/password/PasswordFilter"),
  code: require("../../fields/types/code/CodeFilter")
};

},{"../../fields/components/columns/IdColumn":86,"../../fields/components/columns/InvalidColumn":87,"../../fields/types/boolean/BooleanColumn":89,"../../fields/types/boolean/BooleanField":90,"../../fields/types/boolean/BooleanFilter":91,"../../fields/types/code/CodeColumn":93,"../../fields/types/code/CodeField":94,"../../fields/types/code/CodeFilter":95,"../../fields/types/email/EmailColumn":96,"../../fields/types/email/EmailField":97,"../../fields/types/email/EmailFilter":98,"../../fields/types/file/FileColumn":99,"../../fields/types/file/FileField":100,"../../fields/types/file/FileFilter":101,"../../fields/types/name/NameColumn":102,"../../fields/types/name/NameField":103,"../../fields/types/name/NameFilter":104,"../../fields/types/number/NumberColumn":105,"../../fields/types/number/NumberField":106,"../../fields/types/number/NumberFilter":107,"../../fields/types/password/PasswordColumn":108,"../../fields/types/password/PasswordField":109,"../../fields/types/password/PasswordFilter":110,"../../fields/types/relationship/RelationshipColumn":111,"../../fields/types/relationship/RelationshipField":112,"../../fields/types/relationship/RelationshipFilter":113,"../../fields/types/select/SelectColumn":114,"../../fields/types/select/SelectField":115,"../../fields/types/select/SelectFilter":116,"../../fields/types/text/TextColumn":117,"../../fields/types/text/TextField":118,"../../fields/types/text/TextFilter":119}]},{},[]);
