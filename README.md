This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Information to note

For an optomized image gallery, the following things are concerns.

- Image Loading: Loading _all_ images at once is resource-intensive. Lazy loading is an option to explore
- Image Optomization: Its important to optimize images including sizing, compression, adjusting file formats, etc. Next/Image is a possible solution
- Caching : Caching can assist in keeping load times down and avoid re-fetching those that have already been loaded.
- Pagination or Infinite Scrolling: I'm going to go with Infinite Scrolling.
- Thumbnails: Loading thumbnails at first can save space than loading full images

## Getting Started

First, install the dependencies:

```bash
npm i
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

# air-image-gallery
