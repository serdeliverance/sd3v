import { Box, Typography } from '@mui/material'
import React from 'react'
import { Layout } from '../../components'

const AboutPage = () => {
  return (
    <Layout>
      <Box display="flex" flexDirection="column">
        <Typography variant="h2" component="h2">
          About
        </Typography>
        <Typography variant="body2" paragraph={true} marginTop={2}>
          Fullstack Engineer stronger on backend. Most of my experience is based
          on JVM related technologies (Scala and Java). The aim of this blog is
          to share knowledge about JVM technologies, Microservices and Reactive
          Programming.
        </Typography>
        <Typography variant="body2" paragraph={true}>
          Also, I’m a Systems Engineer graduated from Universidad Tecnológica
          Nacional with a postgraduate in Business Intelligence.
        </Typography>
      </Box>
    </Layout>
  )
}

export default AboutPage
