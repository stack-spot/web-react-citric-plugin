import React from 'react'

{% if sample %}
import { Card, Text, Image } from 'citric'
{% endif %}

export const Home = () => {
  return (
    <>
      {% if sample %}
        <Card>
          <Card.Header>
            <Text.Overheader2 color="color.primary.main">Thank you!</Text.Overheader2>
            <Text.H4 color="color.base.b10">Citric Design System</Text.H4>
          </Card.Header>
          <Image
            img={`https://citric.design/static/media/placeholder.aec73372.png`}
            type='cover'
            background='#ff6d00'
            alt='image of Citric'
            width='100%'
            height='170px' />
          <Card.Content>
            <Text.Body2 color="color.base.b9" weight="regular">
              Thank you for using Citric Design System. Feel free to reach us as anytime !
            </Text.Body2>
          </Card.Content>
        </Card>
        {% endif %}
    </>
  )
}
