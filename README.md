# 🧋 buffer-boba

**Buffer Boba** (*Boba* -  Chinese: 珍珠奶茶; Aka - 'pearl milk tea, bubble milk tea, tapioca milk tea, boba tea'; Emoji - 🧋).

A developer-friendly javascript library that provides a simple interface to decode protobuf data into JSON.

## Installation

```bash
npm install @leapwallet/buffer-boba
```

## Usage

To know more about the library, check out the [Docs](https://leapwallet.github.io/buffer-boba/).

## Support

We support the following SDKs -

<!-- TODO: add info here -->

We also allow you to add your definitions for enhanced use-cases. You can look at the docs for the same [here](https://leapwallet.github.io/name-matcha/docs/advanced#custom-definitions).

## Release Process

1. Update the version in `package.json` (semver)
2. Git commit with version number as the commit message
3. Git tag with version number
4. Git push to `main` branch
5. Create GitHub release with version number as the title and the description

Once the release is published, the [release-package](./.github/workflows/release-package.yml) GitHub action will automatically publish the package to NPM.
