import { Button, Container, Typography } from '@mui/material'
import React, { FC } from 'react'
import { Layout } from '../../components'

interface Props {}

const BlogPage: FC<Props> = () => {
  return (
    <Layout>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          paddingTop: 3,
        }}
      >
        <Typography variant="h2" component="h2">
          Blog
        </Typography>
      </Container>
    </Layout>
  )
}

export default BlogPage
