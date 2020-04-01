# webpack-express-ts-monorepo example

## structure

```
.
├── package.json
├── packages
│   ├── script
│   │   ├── package.json
│   │   ├── server.ts
│   │   ├── tsconfig.webpack.json
│   │   └── webpack.server.ts
│   └── server
│       ├── index.ts
│       └── package.json
├── tsconfig.json
└── yarn.lock

3 directories, 9 files
```

`yarn start-ts` run the server without transpile ts
`yarn build` to build the js bundle
`yarn start` run the server
