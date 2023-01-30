const postRegex = /\/(p|tv|reel)\/(.*?)\//;
const reelsRegex = /\/(reels)\/(videos)\/(.*?)\//;
const storyRegex = /\/(stories)\/(.*?)\/(\d*?)[/?]*?/;
const PROFILE_HASH = '69cba40317214236af40e7efa697781d';
const POST_HASH = '9f8827793ef34641b2fb195d4d41151c';

/**
 * 获取页面的类型 post | stories | highlights
 * @param url 页面 url
 * @returns 类型：post | stories | highlights
 */
function getPageType(url: string): string {
  const currentPath = url.split('instagram.com')[1];
  console.log(currentPath.match(storyRegex));
  if (currentPath.match(postRegex)) {
    return 'post';
  }

  if (currentPath.match(reelsRegex)) {
    return 'post';
  }

  if (currentPath.match(storyRegex)) {
    if (currentPath.match(storyRegex)[2] === 'highlights') {
      return 'highlights';
    }
    return 'stories';
  }
  return 'none';
}

function getShortCode(url: string): string {
  console.log(url);
  return '';
}

function getInstagramMedia(url: string) {
  url = url.trim();
  const type = getPageType(url);
  console.log(type);
  // getShortCode(url);
}

export default {
  getShortCode,
  getInstagramMedia,
};
