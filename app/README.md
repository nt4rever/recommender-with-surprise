
# Project name

A brief description of what this project does and who it's for

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_API_URL`



## Installation

Install project with npm
```bash
  npm install
```
```bash
  npm run dev
```

## Library List

- TailwindCSS (CSS framework)
- Antd (UI Library)
- Redux (state container)
- Redux persist
- i18next (multi language)
- React-router
- React-query (data-fetching library)
- Emotion (css-in-js)
- React Vite (fast build tool)
## Customize component example

```javascript
import styled from '@emotion/styled';

export const StyledRadio = styled(Radio.Group)`
    & .ant-radio-button-wrapper {
      &:first-of-type {
        border-radius: 10px 0 0 10px;
      }
      &:last-of-type {
        border-radius: 0 10px 10px 0;
      }
      color: green;
      &.ant-radio-button-wrapper-checked {
        background-color: green;
        color: whitesmoke;
        border-color: green;

        &:before {
          background-color: green;
        }
        &:hover {
          background-color: green;
          border-color: green;
        }
      }
    }
`;
```

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Example Color | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |
| Example Color | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8f8 |
| Example Color | ![#00b48a](https://via.placeholder.com/10/00b48a?text=+) #00b48a |
| Example Color | ![#00d1a0](https://via.placeholder.com/10/00b48a?text=+) #00d1a0 |


## VS Code extension

Here are some related projects

[i18n Ally - Manage All Translations in One Place](https://github.com/lokalise/i18n-ally)
```json
//vscode setting
{
  "i18n-ally.localesPaths": ["src/locales"],
  "i18n-ally.keystyle": "nested",
  "i18n-ally.sourceLanguage": "en"
}
```

## Contributors

- [@nt4rever](https://www.github.com/nt4rever)


## Support

For support, direct message to @tan.le or email to tan.le@napaglobal.com

