import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import styles from './case-studies-block.module.scss'

import { ReactComponent as FragCluster } from '../../images/frag-cluster1.svg'
import { ReactComponent as FlippedFragCluster } from '../../images/frag-cluster2.svg'

class CaseStudiesBlock extends React.Component {
  render() {
    const { caseStudies, className, sectionTitle, listingUrl } = this.props

    return (
      <div className={[styles.block, className].join(' ')}>
        {sectionTitle ? (
          <span className={styles.pageSectionTitle}>{sectionTitle}</span>
        ) : null}
        <div className={styles.blockList}>
          {caseStudies.map((caseStudy, index) => {
            let img = React.createRef()
            return (
              <Link className={styles.caseStudy} to={caseStudy.href}>
                <div className={styles.caseStudyMeta}>
                  <div className={styles.caseStudyMetaContainer}>
                    <h4 className={styles.caseStudyMetaClient}>
                      {caseStudy.client}
                    </h4>
                    <h3 className={styles.caseStudyMetaTitle}>
                      {caseStudy.title}
                    </h3>
                    <p className={styles.caseStudyMetaDesc}>
                      {caseStudy.description}
                    </p>
                  </div>
                  <FragCluster className={styles.caseStudyClusterIcon} />
                </div>

                <div className={styles.caseStudyImage}>
                  <img
                    ref={ref => (img = ref)}
                    src={
                      caseStudy.feedImage ||
                      caseStudy.homepageImage ||
                      require('../../images/default-featured.png')
                    }
                    onError={() => {
                      img.src = require('../../images/default-featured.png')
                    }}
                  />
                </div>
              </Link>
            )
          })}
        </div>
        {listingUrl ? (
          <div className={styles.seeMore}>
            <Link to={listingUrl}>See more case studies</Link>
          </div>
        ) : null}
      </div>
    )
  }
}

CaseStudiesBlock.propTypes = {
  caseStudies: PropTypes.array.isRequired,
  className: PropTypes.string,
  listingUrl: PropTypes.string.isRequired,
}

CaseStudiesBlock.defaultProps = {
  className: '',
  caseStudies: [],
  sectionTitle: 'Work',
}

export default CaseStudiesBlock
