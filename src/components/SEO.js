import { Helmet } from 'react-helmet';

const SEO = ({
  title = "Geisha Lutfan Waldhani | Full Stack Developer",
  description = "Portfolio of Gesha Lutfan Waldhani, Junior Full Stack Developer specializing in modern web technologies.",
  keywords = "full stack developer, web developer, portfolio, JavaScript, React, Node.js, Gesha Lutfan",
  image = "/preview.jpg",
  url = "https://gesavlop.vercel.app/"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
