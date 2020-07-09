export default (options) => {
  return {
    id: 'azure',
    name: 'Azure',
    type: 'oauth',
    version: '2.0',
    scope: 'email openid profile',
    params: { grant_type: 'authorization_code' },
    accessTokenUrl: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
    requestTokenUrl: 'https://login.microsoftonline.com/common/oauth2/v2.0/auth',
    authorizationUrl: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize?response_type=code',
    idToken: true,
    profile: (profile) => {
      return {
        id: profile.oid,
        name: profile.name,
        email: profile.email
      }
    },
    ...options
  }
}
