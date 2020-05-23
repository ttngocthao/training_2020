import React from "react"
import { Link } from "gatsby"
import ImgCard from "../ImgCard/ImgCard"
import styles from "./blog.module.scss"
function BlogThumbnail({ data }) {
  console.log("finding slug", data)
  const { node: postData } = data
  const { id, frontmatter, fields } = postData
  return (
    <li className={styles.thumbnailItem} blogid={id}>
      <ImgCard
        className={styles.thumbnailImg}
        src={frontmatter.thumbnailImg}
        width={220}
        height={220}
      />

      <h3 className={styles.thumbnailTitle}>{frontmatter.title}</h3>

      <p className={styles.thumbnailIntro}>{frontmatter.shortIntro}</p>
      <Link className={styles.thumbnailLink} to={fields.slug}>
        Read more
      </Link>
    </li>
  )
}

export default BlogThumbnail
