# Monorepo POC

### Apps and layers
- `admin-portal`: a Nuxt.js app
- `demo-app`: another Nuxt app
- `base-layer`: shared components, composables, etc.

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
