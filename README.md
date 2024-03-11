# awesome-react-handy-hooks

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/drbarzaga/awesome-react-handy-hooks/blob/main/LICENSE)
[![npm version](https://img.shields.io/npm/v/awesome-react-handy-hooks.svg)](https://www.npmjs.com/package/awesome-react-handy-hooks)
[![npm downloads](https://img.shields.io/npm/dm/awesome-react-handy-hooks.svg)](https://www.npmjs.com/package/awesome-react-handy-hooks)
[![GitHub issues](https://img.shields.io/github/issues/drbarzaga/awesome-react-handy-hooks.svg)](https://github.com/drbarzaga/awesome-react-handy-hooks/issues)
[![GitHub stars](https://img.shields.io/github/stars/drbarzaga/awesome-react-handy-hooks.svg)](https://github.com/drbarzaga/awesome-react-handy-hooks/stargazers)

## Description

The `awesome-react-handy-hooks` package is a collection of handy React hooks that provide additional functionality and simplify common tasks in React applications. These hooks are designed to enhance productivity and improve code readability by abstracting complex logic into reusable and composable units. With `awesome-react-handy-hooks`, developers can easily handle state management, side effects, and more, allowing them to build robust and efficient React applications with ease.

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

The `useCounter` hook is used to manage a counter state and its functions to increment and decrement it.

Usage:

```jsx
const { count, increment, decrement } = useCounter(0);

return (
  <div>
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
  </div>
);
```

### useToggle

The `useToggle` hook is used to manage a toggle state and its function to change it.

Usage:

```jsx
const { isToggled, toggle } = useToggle();

return (
  <div>
    <p>Toggle: {isToggled ? "On" : "Off"}</p>
    <button onClick={toggle}>Toggle</button>
  </div>
);
```

### useDialog

The `useDialog` hook is used to manage a dialog state and its functions to open and close it.

Usage:

```jsx
const { isOpen, open, close } = useDialog();

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

The `useClickOutside` hook is used to check if the click is outside an element and call a function when it is.

Usage:

```jsx
const elementRef = useRef(null);

useClickOutside(ref, () => {
  console.log("call when the click is outside the elementRef");
});

return <div ref={elementRef}>My Component</div>;
```

### useHover

The `useHover` hook is used to check if the hover is inside an element and call a function when it is.

Usage:

```jsx
const elementRef = useRef(null);

useHover(ref, () => {
  console.log("call when the hover is inside the elementRef");
});

return <div ref={elementRef}>My Component</div>;
```

### useFocus

The `useFocus` hook is used to check if the focus is inside an element and call a function when it is.

Usage:

```jsx
const elementRef = useRef(null);

useFocus(ref, () => {
  console.log("call when the focus is inside the elementRef");
});

return <input ref={elementRef} value="Hello react" />;
```

### useMediaQuery

The `useMediaQuery` hook is used to check if a media query matches.

Usage:

```jsx
const isMobile = useMediaQuery("(max-width: 768px)");
```

### useMousePosition

The `useMousePosition` hook is used to get the current mouse position.

Usage:

```jsx
const { x, y } = useMousePosition();
```

### useCopyToClipboard

The `useCopyToClipboard` hook is used to copy a string to the clipboard.

Usage:

```jsx
const { copied, copyToClipboard } = useCopyToClipboard();
```

### useDebounce

The `useDebounce` hook is used to debounce a value.

Usage:

```jsx
const debouncedValue = useDebounce(value, 1000);
```

### useThrottle

The `useThrottle` hook is used to throttle a value.

Usage:

```jsx
const throttledValue = useThrottle(value, 1000);
```

### useMount

The `useMount` hook is used to execute a function on mount.

Usage:

```jsx
const callOnMount = () => {
  console.log("Call on mount");
};

useMount(callOnMount);
```

### useUnmount

The `useUnmount` hook is used to execute a function on unmount.

Usage:

```jsx
const callOnUnmount = () => {
  console.log("Call on unmount");
};

useUnmount(callOnUnmount);
```

### useUpdateEffect

The `useUpdateEffect` hook is used to execute a function on update when the dependencies changes.

Usage:

```jsx
useUpdateEffect(() => {
  console.log("Component updated");
}, [dep1, dep2]);
```

### useEventListener

The `useEventListener` hook is used to listen for events on an element and call a function when the event is triggered.

Usage:

```jsx
useEventListener(
  "click",
  () => {
    console.log("The document was clicked");
  },
  document
);
```

### useWindowSize

The `useWindowSize` hook is used to get the width and height of the window and update it on resize.

Usage:

```jsx
const size = useWindowSize();
```

### useOnline

The `useOnline` hook is used to check if the user is online.

Usage:

```jsx
const online = useOnline();
```

### useScript

The `useScript` hook is used to load a script and manage its loading status.

Usage:

```jsx
const loading = useScript("https://example.com/script.js");
```

### useStyle

The `useStyle` hook is used to load a stylesheet and manage its loading status.

Usage:

```jsx
const loading = useStyle("https://example.com/style.css");
```

### useTitle

The `useTitle` hook is used to change the title of the document.

Usage:

```jsx
useTitle("New Title");
```

### useFetch

The `useFetch` hook is used to fetch data from an API endpoint and manage the loading, data, and error states.

Usage:

```jsx
const { data, loading, error } = useFetch("https://example.com/api");
```

### useLongPress

The `useLongPress` hook is used to execute a function on long press.

Usage:

```jsx
const longPressEvent = useLongPress(() => {
  console.log("Long press event");
}, 300);

return (
  <div>
    <button {...longPressEvent}>Press and hold me</button>
  </div>
);
```

### useKeyPress

The `useKeyPress` hook is used to detect if a key is pressed.

Usage:

```jsx
const isKeyPressed = useKeyPress("a");
```

### useScroll

The `useScroll` hook is used to get the scroll position.

Usage:

```jsx
const { x, y } = useScroll();
```

### useBase64Encode

The `useBase64Encode` hook is used to encode a string to base64.

Usage:

```jsx
const { encoded, encode } = useBase64Encode();
```

### useBase64Decode

The `useBase64Decode` hook is used to decode a base64 string.

Usage:

```jsx
const { decoded, decode } = useBase64Decode();
```

### useDeviceMotion

The `useBase64Decode` hook is used to decode a base64 string.

Usage:

```jsx
const { decoded, decode } = useBase64Decode();
```

### useDeviceOrientation

The `useDeviceMotion` hook is used to get the device motion.

Usage:

```jsx
const { x, y, z } = useDeviceMotion();
```

### useGeolocation

The `useGeolocation` hook is used to get the geolocation of the user.

Usage:

```jsx
const { latitude, longitude } = useGeolocation();
```

### useIdle

The `useIdle` hook is used to check if the user is idle.

Usage:

```jsx
const isIdle = useIdle(1000);
```

### useIntersectionObserver

The `useIntersectionObserver` hook is used to observe an element's intersection details.

Usage:

```jsx
const elementRef = useRef(null);

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0,
};

const intersection = useIntersectionObserver(elementRef, options);
```

### usePageLeave

The `usePageLeave` hook is used to execute a function when the user leaves the page.

Usage:

```jsx
usePageLeave(() => {
  console.log("The user left the page");
});
```
