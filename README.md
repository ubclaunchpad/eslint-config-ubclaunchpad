# UBC Launch Pad ESLint Configuration

The JavaScript code standards used at UBC Launch Pad.

## Installation


`npm install --save-dev eslint-config-ubclaunchpad babel-eslint eslint-plugin-import eslint-plugin-react eslint`

## Usage

Extend this package in your `.eslintrc` file

```
{
	"extends": "eslint-config-ubclaunchpad"
}
```

## Troubleshooting

If you run into issues, verify that the modules you've installed as peer dependencies are the correct version. Check the `peerDependencies` section of `./node_modules/eslint-config-airbnb/package.json` and ensure that the version numbers listed there match the version numbers of the modules you have downloaded. If they don't, you can manually install a particular version of a package, for instance `eslint` version 2.5.8, using `npm install eslint@2.5.8`.
