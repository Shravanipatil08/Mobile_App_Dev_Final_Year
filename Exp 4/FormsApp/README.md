# React Native – Experiment 4

## 1. What are Props in React Native?

**Props (Properties)** are used to pass data from a parent component to a child component.

Props are read-only.

---

## 2. Write Two Examples of React Native Props

### Example 1

```jsx
function Welcome({ name }) {
  return <Text>Hello {name}</Text>;
}

<Welcome name="Shravani" />
```

### Example 2

```jsx
function Button({ title }) {
  return <Text>{title}</Text>;
}

<Button title="Login" />
```

---

## 3. Difference Between React Native Props and React Props

Props work in the same way in both React and React Native. The main difference is the type of components used.

| React Props | React Native Props |
| :----- | :----- |
| Used in web applications. | Used in mobile applications. |
| Uses HTML elements like `<div>` and `<button>`. | Uses native components like `<View>` and `<Text>`. |

### React Example

```jsx
function Welcome({ name }) {
  return <div>Hello {name}</div>;
}

<Welcome name="Shravani" />
```

### React Native Example

```jsx
function Welcome({ name }) {
  return <Text>Hello {name}</Text>;
}

<Welcome name="Shravani" />
```

---

## 4. What is `useState`?

**`useState`** is a Hook used to create and manage state in a functional component.

### Example

```jsx
const [count, setCount] = useState(0);

<Button
  title={`Count: ${count}`}
  onPress={() => setCount(count + 1)}
/>
```

- `count` stores the current value.
- `setCount` updates the value.

---

## 5. What is `useEffect`?

**`useEffect`** is a Hook used to perform side effects such as fetching data, timers, or running code after rendering.

### Example

```jsx
useEffect(() => {
  console.log("Component loaded");
}, []);
```

The empty dependency array means it runs after the initial render.

---

## 6. What is `useContext`?

**`useContext`** is used to access shared data from React Context without passing props through every component.

### Example

```jsx
const theme = useContext(ThemeContext);

<Text>{theme}</Text>
```

---

## 7. What is `useRef`?

**`useRef`** is used to store a value that persists between renders without causing a re-render.

It can also be used to reference a component.

### Example

```jsx
const inputRef = useRef();

<TextInput ref={inputRef} />
```

---