import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import foundersrc from '../assets/foundersrc.jpg'

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} color={'whiteAlpha.700'} minH={'48'} px={'16'} py={['16','8']}>
     <Stack direction={['column','row']}
     h={'full'}
     alignItems={"center"}>
    <VStack w={'full'} alignItems={['center','flex-start']}>
     <Text fontWeight={'bold'}>
        About Us
     </Text>
     <Text fontSize={'sm'} letterSpacing={'widest'} textAlign={['center','left']}>
        Best Crypto Trading app in India.We provide guidance at a very reasonable price.
     </Text>
    </VStack>
    <VStack>
        <Avatar boxSize={"28"} mt={['4','0']} src={foundersrc}/>
        <Text>
         Our Founder
        </Text>
    </VStack>
    </Stack> 
    </Box>
  )
}

export default Footer