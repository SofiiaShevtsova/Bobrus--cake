import { Center, Link, Text } from "@chakra-ui/react"

const Footer = () => {
    return (
    <Center backgroundColor="rgba(246, 135, 179, 0.534)" p="5px" gap="20px">
      <Text >&#xA9; 2023</Text>
      <Text >All Rights Reserved</Text>
      <Text >Developed by <Link href="https://github.com/SofiiaShevtsova" isExternal>Sofiia Shevtsova</Link></Text>
      
  </Center>
    )
}

export default Footer