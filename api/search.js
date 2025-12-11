const YouTube = require('youtube-sr').default;

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  
  const { q } = req.query;
  
  if (!q) {
    return res.status(400).json({ error: 'Query parameter required' });
  }

  try {
    const results = await YouTube.search(q, { limit: 10, type: 'video' });
    
    const videos = results.map(video => ({
      videoId: video.id,
      title: video.title,
      author: video.channel?.name || 'Unknown',
      duration: video.duration || 0,
      thumbnail: video.thumbnail?.url || '',
      views: video.views || 0
    }));

    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
