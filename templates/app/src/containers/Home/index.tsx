import React from 'react'

import { Card, Text, Image, CardHeader, CardContent } from '@citric/core'

export const Home = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <Text children={'Thank you!'} appearance='overheader2' color="color.primary.main" />
          <Text children={'Citric Design System'} appearance='h4' color="color.base.b10" />
        </CardHeader>
        <Image
          src='https://citric.design/static/media/placeholder.aec73372.png'
          alt='image of Citric'
          width='100%'
          height='170px' />
        <CardContent>
          <Text
            children={'Thank you for using Citric Design System. Feel free to reach us as anytime !'}
            appearance='body2'
            color="color.base.b9"
            weight="regular" />
        </CardContent>
      </Card>
    </>
  )
}
