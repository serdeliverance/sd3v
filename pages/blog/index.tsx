import { Button, Container, Typography } from '@mui/material'
import React from 'react'

const BlogPage = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h2" component="h2">
        Blog
      </Typography>
      <Button>Click here</Button>
    </Container>
  )
}

export default BlogPage
