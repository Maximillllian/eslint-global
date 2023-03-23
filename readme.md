В настройки VS code (settings.json) добавить строки
```
"eslint.options": {
    "overrideConfigFile": "C:/Users/voron/programming/projects/_usefull/eslint_global/.eslintrc.js"
},
"eslint.nodePath": "C:/Users/voron/programming/projects/_useful/eslint_global/node_modules",
```

В `node_modules/@eslint/eslintrc/dist/eslintrc.cjs` в функции mergePlugins закомментить блок
```
// throw new PluginConflictError(key, [
//     {
//         filePath: targetValue.filePath,
//         importerName: targetValue.importerName
//     },
//     {
//         filePath: sourceValue.filePath,
//         importerName: sourceValue.importerName
//     }
// ]);
```