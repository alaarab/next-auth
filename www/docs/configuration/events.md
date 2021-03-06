---
id: events
title: Events
---

Events are asynchronous functions that do not return a response, they are useful for audit logging.

### Example

You can specify a handler for any of these events below - e.g. for debugging or to create an audit log.

```js title="pages/api/auth/[...nextauth.js]"
events: {
  signin: async (message) => { /* on successful sign in */ },
  signout: async (message) => { /* on signout */ },
  createUser: async (message) => { /* user created */ },
  linkAccount: async (message) => { /* account linked to a user */ },
  session: async (message) => { /* session is active */ },
  error: async (message) => { /* error in authentication flow */ }
}
```

The content of the message object varies depending on the flow (e.g. OAuth or Email authentication flow, JWT or database sessions, etc), but typically contains a user object and/or contents of the JSON Web Token and other information relevent to the event.
