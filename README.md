# Music Boom Backend

Simple YouTube music streaming API for Music Boom app.

## Endpoints

### Search
`GET /api/search?q=song+name`

Returns top 10 YouTube videos matching the query.

### Stream
`GET /api/stream?videoId=VIDEO_ID`

Returns video details and direct audio stream URL.

## Deploy to Vercel

1. Create a new GitHub repository
2. Push this `backend` folder to the repo
3. Go to [vercel.com](https://vercel.com)
4. Click "New Project"
5. Import your GitHub repository
6. Deploy!

Your API will be available at: `https://your-project.vercel.app`

## Local Testing

```bash
npm install
vercel dev
```

Then test:
- http://localhost:3000/api/search?q=test
- http://localhost:3000/api/stream?videoId=dQw4w9WgXcQ
