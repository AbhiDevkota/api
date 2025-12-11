import ytdl from 'ytdl-core';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  
  const { videoId } = req.query;
  
  if (!videoId) {
    return res.status(400).json({ error: 'videoId parameter required' });
  }

  try {
    const info = await ytdl.getInfo(videoId);
    
    const audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
    const bestAudio = audioFormats.sort((a, b) => b.audioBitrate - a.audioBitrate)[0];

    res.status(200).json({
      title: info.videoDetails.title,
      author: info.videoDetails.author.name,
      duration: parseInt(info.videoDetails.lengthSeconds),
      thumbnail: info.videoDetails.thumbnails[0].url,
      audioUrl: bestAudio.url
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
