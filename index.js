module.exports = {
	"env": {
		"browser": true,
		"node": true,
		"es6": true,
		"jest": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:import/errors",
		"plugin:react/recommended"
	],
	"parser": "babel-eslint",
	"parserOptions": {
		"ecmaVersion": 2016,
		"ecmaFeatures": {
			"classes": true,
			"jsx": true
		},
		"sourceType": "module"
	},
	"plugins": [
		"import",
		"react"
	],
	"rules": {
		// Errors
		"arrow-body-style": ["error", "as-needed"],
		"array-bracket-spacing": ["error", "never"],
		"arrow-parens": ["error", "as-needed"],
		"arrow-spacing": "error",
		"block-spacing": ["error", "never"],
		"comma-dangle": ["error", "never"],
		"comma-spacing": ["error", { "before": false, "after": true }],
		"default-case": 2,
		"dot-notation": ["error", {allowKeywords: false}],
		"eqeqeq": ["error", "always"],
		"eol-last": ["error", "always"],
		"func-call-spacing": ["error", "never"],
		"indent": ["error", "tab", {SwitchCase: 1}],
		"jsx-quotes": ["error", "prefer-double"],
		"new-cap": "error",
		"no-eval": 2,
		"no-fallthrough": "error",
		"no-param-reassign": 2,
		"no-trailing-spaces": 2,
		"quotes": ["error", "single", {
			allowTemplateLiterals: true,
			avoidEscape: true
		}],
		"no-var": 2,
		"object-curly-spacing": ["error", "never"],
		"prefer-arrow-callback": 2,
		"prefer-const": 2,
		"react/display-name": [2, {"ignoreTranspilerName": true}],
		"react/jsx-closing-bracket-location": ["error", "after-props"],
		"react/jsx-indent": ["error", "tab"],
		"react/jsx-indent-props": ["error", "tab"],
		"react/prop-types": 2,
		"space-before-function-paren": "error",
		"space-infix-ops": "error",
		"spaced-comment": ["error", "always"],
		"sort-imports": ["error", {ignoreCase: true}],

		// Warnings
		"max-depth": [1, 4],
		"max-len": [1, 100],
		"no-alert": 1,
		"no-console": 1,
		"no-warning-comments": 1,
		"react/prefer-stateless-function": 1,

		// Disabled
		"class-methods-use-this": 0,
		"import/imports-first": 0,
		"import/no-extraneous-dependencies": 0,
		"new-cap": 0,
		"no-underscore-dangle": 0,
		"no-tabs": 0,
		"react/jsx-filename-extension": 0,
		"react/sort-comp": 0,
		"space-before-function-paren": 0
	}
};
