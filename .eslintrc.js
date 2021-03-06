const paths = require('./path-mappings.json')

module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "plugin:react/recommended",
    "prettier",
    "prettier/react"
  ],
  "plugins": [
    "organize-imports"
  ],
  "rules": {
    "organize-imports/organize-imports": ["error", {
      "orderRules": [{
        "moduleType": "nodeModule",
        "comment": "Vendor Modules"
      }, {
        "moduleType": "componentModules",
        "comment": "Components",
        "include": [
          "src/components/",
          "src/templates/"
        ],
        "exclude": [
          "src/**/*.scss"
        ]
      }, {
        "moduleType": "utilityModule",
        "comment": "Utilities",
        "include": [
          "src/utils/",
          "src/context/",
          "src/fragments/",
          "src/images/"
        ]
      }, {
        "moduleType": "styleModules",
        "comment": "Styles",
        "include": [
          "src/**/*.scss"
        ]
      }],
      "pathAliases": Object.keys(paths).map(prefix => {
        return {
            "prefix": prefix,
            "resolvesTo": paths[prefix]
        }
      })
    }]
  }
}
