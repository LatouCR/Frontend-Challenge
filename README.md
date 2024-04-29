This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Part II: Building the Client Application

## Core Requirements for Part II:
* There must be a view for the Top 100 most frequently accessed URLs.
* There must be a form for inputting URLs into the system.
* Inputting a valid URL should result in displaying the new shortened URL to the user.
* Inputting an invalid URL should result in displaying errors to the user.

## NextJS Application

### FrontEnd

#### Tools Used
* React APP created with Next.js
* Typescript
* TailwindCSS
* No extra libraries were implemented. 

#### Approach

* Make an API endpoint with NextJS to be able to display and add urls to the Ruby on Rails API.
* Make a Website able to display the information fetched from the API. 
* Create 2 components, one to display the long/original URLS, and the second one to create new shorturls. 

### API Endpoint

This is a NextJS aplication with an api endpoint. The application is made so, the user can see the current Ruby on Rails API on their browser without exiting their current instance. The data is fetched from http://localhost:3000 with a GET and a POST method. Located on api/short/route.ts

     ```javascript
     export async function GET() {
        const res = await fetch("http://localhost:3000");
        return res.JSON()
     }
     ```

This ensures the user can use CRUDs to RoR API. Coded with Typescript for type security. 

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:4000](http://localhost:4000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.




