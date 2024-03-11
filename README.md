# awesome-react-handy-hooks

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/drbarzaga/awesome-react-handy-hooks/blob/main/LICENSE)
[![npm version](https://img.shields.io/npm/v/awesome-react-handy-hooks.svg)](https://www.npmjs.com/package/awesome-react-handy-hooks)
[![npm downloads](https://img.shields.io/npm/dm/awesome-react-handy-hooks.svg)](https://www.npmjs.com/package/awesome-react-handy-hooks)
[![GitHub issues](https://img.shields.io/github/issues/drbarzaga/awesome-react-handy-hooks.svg)](https://github.com/drbarzaga/awesome-react-handy-hooks/issues)
[![GitHub stars](https://img.shields.io/github/stars/drbarzaga/awesome-react-handy-hooks.svg)](https://github.com/drbarzaga/awesome-react-handy-hooks/stargazers)

## Description

The `awesome-react-handy-hooks` package is a collection of handy React hooks that provide additional functionality and simplify common tasks in React applications. These hooks are designed to enhance productivity and improve code readability by abstracting complex logic into reusable and composable units. With `awesome-react-handy-hooks`, developers can easily handle state management, side effects, form validation, and more, allowing them to build robust and efficient React applications with ease.

## Installation

You can install the package using npm:

```bash
$ npm install awesome-react-handy-hooks
```

## Table of Contents

- [Hooks](#hooks)
  - [useCounter](#usecounter)
  - [useToggle](#usetoggle)
  - [useDialog](#usedialog)
  - [useClickInside](#useclickinside)
  - [useClickOutside](#useclickoutside)
  - [useHover](#usehover)
  - [useFocus](#usefocus)
  - [useLocalStorage](#uselocalstorage)
  - [useMediaQuery](#usemediaquery)
  - [useMousePosition](#usemouseposition)
  - [useCopyToClipboard](#usecopytoclipboard)
  - [useDebounce](#usedebounce)
  - [useThrottle](#usethrottle)
  - [usePrevious](#useprevious)
  - [useMount](#usemount)
  - [useUnmount](#useunmount)
  - [useUpdateEffect](#useupdateeffect)
  - [useEventListener](#useeventlistener)
  - [useWindowSize](#usewindowsize)
  - [useOnline](#useonline)
  - [useScript](#usescript)
  - [useStyle](#usestyle)
  - [useTitle](#usetitle)
  - [useFavicon](#usefavicon)
  - [useFetch](#usefetch)
  - [useLongPress](#uselongpress)
  - [useKeyPress](#usekeypress)
  - [useScroll](#usescroll)
  - [useBase64Encode](#usebase64encode)
  - [useBase64Decode](#usebase64decode)
  - [useDeviceMotion](#usedevicemotion)
  - [useDeviceOrientation](#usedeviceorientation)
  - [useGeolocation](#usegeolocation)
  - [useIdle](#useidle)
  - [useIntersectionObserver](#useintersectionobserver)
  - [usePageLeave](#usepageleave)

## Hooks

### useCounter

The `useCounter` hook is a React hook that provides a simple way to manage and manipulate a counter value. It allows you to increment, decrement the counter value with ease.

Usage:

```jsx
const [count, increment, decrement] = useCounter(0);

return (
  <div>
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
  </div>
);
```

### useToggle

### useDialog

The `useDialog` hook is a React hook that provides a simple way to manage a dialog state. It allows you to show or hide a dialog with ease.

Usage:

```jsx
const [isOpen, open, close] = useDialog();

return (
  <div>
    <button onClick={open}>Open Dialog</button>
    {isOpen && (
      <div>
        <p>This is a dialog</p>
        <button onClick={close}>Close Dialog</button>
      </div>
    )}
  </div>
);
```

### useClickOutside

### useHover

### useFocus

### useMediaQuery

### useMousePosition

### useCopyToClipboard

### useDebounce

### useThrottle

### useMount

### useUnmount

### useUpdateEffect

### useEventListener

### useWindowSize

### useOnline

### useScript

### useStyle

### useTitle

### useFetch

### useLongPress

### useKeyPress

### useScroll

### useBase64Encode

### useBase64Decode

### useDeviceMotion

### useDeviceOrientation

### useGeolocation

### useIdle

### useIntersectionObserver

### usePageLeave

```

```
