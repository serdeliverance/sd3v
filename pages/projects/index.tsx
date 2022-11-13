import { Box, Typography } from '@mui/material'
import React, { FC } from 'react'
import { Layout } from '../../components'

interface Props {}

const ProjectsPage: FC<Props> = () => {
  return (
    <Layout>
      <Box marginTop={1}>
        <Typography variant="h2" component="h1">
          Projects
        </Typography>
      </Box>
    </Layout>
  )
}

export default ProjectsPage
