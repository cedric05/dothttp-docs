import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Editor support',
    imageUrl: 'img/vscode.png',
    link: "https://marketplace.visualstudio.com/items?itemName=ShivaPrasanth.dothttp-code",
    description: (
      <>
        dothttp-runner is vscode-extension which supports running requests in vscode.
      </>
    ),
  },
  {
    title: 'Command line support',
    imageUrl: 'img/cli.png',
    link: "https://pypi.org/project/dothttp-req/",
    description: (
      <>
        has support to run from command line.
      </>
    ),
  },
  {
    title: 'opensource',
    imageUrl: 'img/github.png',
    link: "https://github.com/cedric05/dothttp",
    description: (
      <>
        dothttp is completely opensource and is hosted on github
      </>
    ),
  },
];

function Feature({imageUrl, title, description, link}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <a href={link} ><img className={styles.featureImage} src={imgUrl} alt={title}/></a>
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="<head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <center>
        <a
            href="https://www.producthunt.com/posts/dothttp?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-dothttp"
            target="_blank"
        ><img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=290464&theme=light"
            alt="Dothttp - simple concise syntax for making http requests | Product Hunt"
            width="250"
            height="54"
        /></a>
          <br/>
          <img src="img/demo.gif" alt="demo" className={styles.aligncenter}/>
        </center>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
