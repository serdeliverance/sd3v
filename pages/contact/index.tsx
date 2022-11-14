import { Typography } from '@mui/material'
import React, { FC } from 'react'
import { Layout } from '../../components'

interface Props {}

const ContactPage: FC<Props> = () => {
  return (
    <Layout>
      <Typography variant="h2" component="h2">
        Contact
      </Typography>
    </Layout>
  )
}

export default ContactPage
