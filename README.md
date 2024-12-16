# Turborepo starter

This is an official starter Turborepo.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?
This Turborepo includes the following packages/apps:

### Apps and Packages
- `admin-portal`: a Nuxt.js app
- `demo-app`: another Nuxt app
- `base-layer`: a stub React component library shared by both `web` and `docs` applications


### Extends Options:

```
  extends: [
    '../base',                     // Local layer (what this project does)
    '@my-themes/awesome',          // NPM package
    'github:my-themes/awesome#v1' // Git repository
  ]
```

## Resources:
- https://nuxt.com/docs/getting-started/layers
- https://github.com/Krutie/nuxt-layers-playground
- https://nuxt-nation-2023.netlify.app/1
