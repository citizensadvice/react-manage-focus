# parcel-resolver-misnamed-typescript

This is here to work around a [bug in typescript](https://github.com/Microsoft/TypeScript/issues/13422).

ES6 modules require the import paths to be full paths with extensions.

Typescript, even when set to transpile to es6 modules, does not correctly set the extensions.

If you are compiling a library to be consumed by others, this is a problem.

The workaround is to add `.js` extensions to your import paths.  Typescript ignores these extensions, but keeps
them in compiled output. (eg `import 'foo.js';`)

The workaround for using SWC as a typescript compiler is to add `"paths": { "*.js": ["*", "*.js"] }` to the .swcrc file.

The workaround for Parcel is this resolver.  A custom resolver that changes the extension if the file isn't found.
