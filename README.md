# Simply Splendid Boilerplate

This boilerplate project will be the starting point for other apps.

Technologies:

- [x] NextJS + React + Typescript
- [ ] Google authentication (OpenID-Connect or [OneTap](https://developers.google.com/identity/one-tap/web/guides/get-google-api-clientid))
- [ ] Redux
- [ ] Material-UI components
- [x] Styled Components
- [ ] UI testing: Cypress
- [ ] Unit testing: Mocha, Chai, Sinon
- [ ] Data access layer: simple REST-style api exposed by nextjs api routes.
- [ ] Database: Postgres
- [ ] Hosting infrastructure: Docker with K8s (for maximum flexibility)

Features the user can see:

- All pages below use Material UI and Styled Components.
- Routes:
    - / 
    - /secure/page1 (user needs to be logged in)
    - /not-secure/page1 (informational page, user does not have to be logged in)
- Informational pages for un-authenticated users.
- Login page that uses Google (OpenID-Connect)
  - User is stored in Postgres.

---
Running locally

Run `docker-compose up` to start the Postgres container and the ui.