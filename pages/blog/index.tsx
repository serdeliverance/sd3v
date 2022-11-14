import { Typography } from '@mui/material'
import React, { FC } from 'react'
import { Layout } from '../../components'

interface Props {}

const BlogPage: FC<Props> = () => {
  return (
    <Layout>
      <Typography variant="h2" component="h2">
        Blog
      </Typography>
    </Layout>
  )
}

export default BlogPage
