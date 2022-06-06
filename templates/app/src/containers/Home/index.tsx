import React from 'react'

import { Card, Text, CardHeader, CardContent } from '@citric/core'

export const Home = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <Text appearance='overheader2' color="color.primary.main">Thank you!</Text>
          <Text appearance='h4' color="color.base.b10">Citric Design System</Text>
        </CardHeader>
        <CardContent>
          <Text
            appearance='body2'
            color="color.base.b9"
            weight="regular">Thank you for using Citric Design System. Feel free to reach us as anytime!</Text>
        </CardContent>
      </Card>
    </>
  )
}
