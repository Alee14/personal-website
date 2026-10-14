import { Container, Section, TextDisplay, Thumbnail } from 'discord-component-embed'

export function PageEmbed() {
  return (
    <Container accentColor={0x274131}>
      <Section accessory={<Thumbnail url="https://alee14.ca/profile.png" />}>
          <TextDisplay>
          ## PageTitle
          </TextDisplay>
          <TextDisplay>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae varius risus, non suscipit orci. Integer dictum libero eros, vestibulum gravida dui tincidunt quis. Suspendisse fermentum, lacus at pretium lacinia, orci nisi finibus elit, posuere egestas mi dui at diam. Sed in bibendum mi, quis lacinia odio. Proin eu lacus dui. Morbi viverra tincidunt pharetra.
          </TextDisplay>
          <TextDisplay>
            -# Andrew Lee
          </TextDisplay>
      </Section>
    </Container>
  )
}
