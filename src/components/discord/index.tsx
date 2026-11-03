import { Container, Section, TextDisplay, Thumbnail, Separator } from 'discord-component-embed'

export function HomeEmbed() {
  return (
    <Container accentColor={0x274131}>
      <Section accessory={<Thumbnail url="https://alee14.ca/profile.png" />}>
          <TextDisplay>
            ## Andrew Lee
          </TextDisplay>
          <TextDisplay>
            Hey, I am Andrew Lee, a person who has a passion with computers.
          </TextDisplay>
      </Section>
      <Separator divider={true} />
      <TextDisplay>### [LinkedIn](https://linkedin.alee14.ca/) • [GitHub](https://github.alee14.ca/) • [YouTube](https://youtube.alee14.ca/) • [Mastodon](https://mstdn.ca/@alee) • [Instagram](https://instagram.alee14.ca/)</TextDisplay>
    </Container>
  )
}
