import React from 'react'

import { Button, Text } from '@citric/core'

export const Home = () => {
  return (
    <>
      <Text
        appearance='body2'
        weight='regular'
        colorScheme='primary.contrastText'
      >
        Thank you for using Citric Design System. Feel free to reach us as
        anytime!
      </Text>
      <Button
        as='a'
        href='https://citric.stackspot.com/?path=/docs/components-text--text'
      >
        See citric doc
      </Button>
    </>
  )
}
