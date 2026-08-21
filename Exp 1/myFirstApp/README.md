# React Native – Experiment 1

## 1. What is Chocolatey?

**Chocolatey** is a Windows package manager that helps users install, update, and remove software using command-line instructions. It simplifies software management by automatically downloading and configuring applications.

### Installation Command

Run the following command in **PowerShell (Run as Administrator)**:

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force;
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072;
iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

### Benefits

- Installs software quickly.
- Updates applications using commands.
- Reduces manual installation steps.
- Easy to manage multiple packages.

---

## 2. What is React Native? Difference Between React and React Native

### React Native

**React Native** is an open-source framework developed by **Meta** for creating Android and iOS mobile applications using JavaScript and React. It allows developers to build native mobile apps from a single codebase, reducing development effort while maintaining good performance.

### Comparison of React and React Native

| React | React Native |
| :----- | :----------- |
| Used for developing web applications. | Used for developing Android and iOS applications. |
| Uses HTML elements like `<div>` and `<button>`. | Uses native components such as `<View>`, `<Text>`, and `<Button>`. |
| Runs inside a web browser. | Runs directly on mobile devices. |
| Uses CSS for styling. | Uses `StyleSheet` objects for styling. |

### Applications

- **React:** Creates responsive websites.
- **React Native:** Creates native mobile applications.

---

## 3. Where is React Native Used at Company Level?

Many software companies use **React Native** to develop applications for both Android and iOS using one shared codebase. This approach reduces development cost, improves productivity, and makes maintenance easier.

### Advantages for Companies

- One codebase for multiple platforms.
- Faster application development.
- Easier maintenance and updates.
- Lower development expenses.
- Better code reusability.

### Popular Companies Using React Native

- Meta (Facebook & Instagram)
- Microsoft (Microsoft Teams)
- Shopify
- Discord
- Walmart

### Practical Example

Suppose a company is creating a **shopping application**. Instead of maintaining separate Android and iOS projects, the developers build a single React Native application. The same source code is then used to generate applications for both platforms, saving both time and resources.

---