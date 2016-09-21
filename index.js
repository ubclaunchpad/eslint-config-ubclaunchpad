module.exports = {
	"extends": "airbnb",
	"ecmaFeatures": {
		"classes": true,
		"jsx": true
	},
	"parser": "babel-eslint",
	"plugins": [
		"react"
	],
	"rules": {
		"arrow-parens": ["error", "as-needed"],
		"block-spacing": ["error", "never"],
		"class-methods-use-this": 0,
		"comma-dangle": ["error", "never"],
		"import/no-extraneous-dependencies": 0,
		"indent": ["error", "tab", {SwitchCase: 1}],
		"new-cap": 0,
		"no-underscore-dangle": 0,
		"no-tabs": 0,
		"object-curly-spacing": 0,
		"react/jsx-closing-bracket-location": ["error", "after-props"],
		"react/jsx-indent": ["error", "tab"],
		"react/jsx-indent-props": ["error", "tab"],
		"react/sort-comp": 0,
		"sort-imports": ["error", {ignoreCase: true}],
		"space-before-function-paren": 0
	}
};
