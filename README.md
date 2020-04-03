## tailwindcss-stack-plugin
A Tailwind plugin for custom "stack" utility classes.<sup>1</sup>

**Demo**: https://rzpuh.sse.codesandbox.io/

## Installation

```bash
yarn add tailwind-stack-plugin --dev
```

## Tailwind Configuration

In your `tailwind.config.js`, be sure to:
- Require the plugin
- Define at least (1) `stack` theme value
- Specify which variant(s) you want to apply to the `.stack-*` classes

```js
module.exports = {
  theme: {
    stack: {
      sm: "8px",
      md: "16px",
      lg: "24px",
      xl: "48px"
    },
  },
  variants: {
    stack: ["responsive"]
  },
  plugins: [require("tailwind-stack-plugin")]
};
```

## Usage (Vertical)

```html
<div class="stack-sm">
  <h1 class="tracking-tight text-white text-lg font-bold">
    Vertical Stack
  </h1>
  <div class="stack-sm md:stack-md lg:stack-lg xl:stack-xl">
    <div class="border-2 border-white p-4"></div>
    <div class="border-2 border-white p-4"></div>
    <div class="border-2 border-white p-4"></div>
    <div class="border-2 border-white p-4"></div>
  </div>
</div>
```

<img width="806" alt="Screen Shot 2020-03-25 at 10 31 29 AM" src="https://user-images.githubusercontent.com/5148596/77547647-d87c0900-6e83-11ea-95b1-2b27d225b38e.png">

## Usage (Inline)

```html
<div class="stack-sm">
  <h1 class="tracking-tight text-white text-lg font-bold">
    Inline Stack
  </h1>
  <div
    class="stack-inline-sm md:stack-inline-md lg:stack-inline-lg xl:stack-inline-xl"
  >
    <div class="border-2 border-white p-4"></div>
    <div class="border-2 border-white p-4"></div>
    <div class="border-2 border-white p-4"></div>
    <div class="border-2 border-white p-4"></div>
  </div>
</div>
```

<img width="456" alt="Screen Shot 2020-03-25 at 10 36 18 AM" src="https://user-images.githubusercontent.com/5148596/77548109-78399700-6e84-11ea-836b-cbc1fe23d9e5.png">


---

<sup>1</sup> What's a "stack?" :thinking:

As the [war on margin](https://mxstbr.com/thoughts/margin) continues on, front-end developers have invented clever ways of decoupling spacing details from their component implementations.

One such abstraction is the **stack** component – a parent node that leverages the cascade to ensure that its children are equally spaced apart (either vertically or horizontally).

```jsx
// Credit: https://mxstbr.com/thoughts/margin
<Stack space={3}>
  <Item />
  <Item />
  <Item />
</Stack>
```

Prior Art
- https://seek-oss.github.io/braid-design-system/components/Stack/
- https://every-layout.dev/layouts/stack/
- https://chakra-ui.com/stack
