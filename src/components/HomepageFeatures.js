import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'OntoUML Server',
    Svg: require('../../static/img/server.svg').default,
    description: (
      <>
        The OntoUML Server is a web service project designed to expose OntoUML-based features on the Web.
      </>
    ),
  },
  {
    title: 'OntoUML JS',
    Svg: require('../../static/img/javascript.svg').default,
    description: (
      <>
        Javascript library for manipulating OntoUML models and their serialization into ontouml-schema compliant JSON files.
      </>
    ),
  },
  {
    title: 'Visual Paradigm Plugin',
    Svg: require('../../static/img/vp_logo.svg').default,
    description: (
      <>
        Plugin for Visual Paradigm that enables this CASE tool with OntoUML capabilities harnessing OntoUML Server's web services.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
