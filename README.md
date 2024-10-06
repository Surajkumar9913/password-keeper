# PassKeeper

``PassKeeper`` is a simple, secure application to store and manage your passwords. It allows users to save and manage passwords in Localstorage:
## Features

- **Add Password**: Store site credentials (site name, username, password).
- **Edit Password**: Edit any stored password.
- **Delete Password**: Remove a password from the list.
- **Local Storage**: Passwords are stored in localstorage.
  
- **Secure Passwords**: Each password is assigned a unique ID using `UUID`.

## Technologies Used

- **Frontend**: React, Tailwind-CSS
- **State Management**: React `useState`, React Hooks
- **UUID**: Used to uniquely identify each password entry
- **Toast Notifications**: `react-toastify` for feedback on actions
