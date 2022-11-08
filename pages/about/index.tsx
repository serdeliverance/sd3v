import { Box, Typography } from '@mui/material'
import React from 'react'

const AboutPage = () => {
  return (
    <Box display="flex" flexDirection="column" paddingX={10}>
      <Typography variant="h1" component="h1">
        About
      </Typography>
      <Typography variant="body2" component="p">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, unde
        dolorem debitis nesciunt sit incidunt repudiandae ipsam ad consequuntur
        aliquid quos saepe obcaecati libero similique nulla inventore.
        Explicabo, at in!
      </Typography>
    </Box>
  )
}

export default AboutPage
