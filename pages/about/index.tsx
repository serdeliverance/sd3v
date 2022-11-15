import { Box, Typography } from '@mui/material'
import React from 'react'
import { Layout } from '../../components'

const AboutPage = () => {
  // TODO read from env so we can calculate it dynamically
  const yearsOfExp = 9

  return (
    <Layout>
      <Box display="flex" flexDirection="column">
        <Typography variant="h2" component="h2">
          About
        </Typography>
        <Typography variant="body2" paragraph={true} marginTop={2}>
          Fullstack Engineer stronger on backend with {yearsOfExp} years of
          experience and some leadership experience. During all this time, I had
          the chance to work on different kind of projects, teams and with
          plenty of technologies. So, I consider I have a good criteria to
          choose the right tool for the job. Most of my experience is based on
          JVM related technologies (Scala and Java). Also, I've worked on
          fullstack applications Angular and React (also with Nextjs framework
          and Typescript) together with NodeJs.
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
