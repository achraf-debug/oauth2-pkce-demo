import {AuthConfig} from "angular-oauth2-oidc";




export const authConfig: AuthConfig = {
    issuer: 'http://localhost:8180/realms/oauth2-pkce-realm',
    redirectUri: 'http://localhost:4200',
    clientId: 'oauth2-pkce-demo-client',
    responseType: 'code',
    strictDiscoveryDocumentValidation: true,
    scope: 'openid profile email offline_access'
}
